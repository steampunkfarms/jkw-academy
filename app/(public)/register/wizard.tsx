"use client";

import { useState } from "react";
import { UserPlus, ShoppingCart, CreditCard, CheckCircle, AlertTriangle, X, Plus, Calendar } from "lucide-react";
import { STEAM_CATEGORIES, type SteamCategoryKey } from "@/lib/steam-categories";

interface Section {
  id: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  spotsRemaining: number;
  status: string;
  template: {
    id: string;
    title: string;
    slug: string;
    category: string;
    gradeMin: string;
    gradeMax: string;
    ageMin: number;
    ageMax: number;
    priceInCents: number;
    description: string;
  };
  location: { name: string };
  instructor: { name: string } | null;
}

interface Charter { id: string; name: string; }

interface Child {
  firstName: string;
  lastName: string;
  grade: string;
  dob: string;
  specialNeeds: string;
}

interface CartItem {
  childIndex: number;
  sectionId: string;
  section: Section;
}

const GRADES = ["TK", "K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY"];

const STEPS = [
  { icon: UserPlus, label: "Add Children" },
  { icon: ShoppingCart, label: "Pick Classes" },
  { icon: CreditCard, label: "Review & Pay" },
  { icon: CheckCircle, label: "Confirmation" },
];

export function RegistrationWizard({
  sections,
  charters,
  semesterName,
}: {
  sections: Section[];
  charters: Charter[];
  semesterName: string;
}) {
  const [step, setStep] = useState(0);
  const [children, setChildren] = useState<Child[]>([{ firstName: "", lastName: "", grade: "", dob: "", specialNeeds: "" }]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeChild, setActiveChild] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [dayFilter, setDayFilter] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState("SQUARE");
  const [charter, setCharter] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Conflict detection
  function hasConflict(childIndex: number, section: Section): string | null {
    const childCart = cart.filter((c) => c.childIndex === childIndex);
    for (const item of childCart) {
      if (item.section.dayOfWeek === section.dayOfWeek && item.section.startTime === section.startTime) {
        return `Conflicts with ${item.section.template.title} (${section.dayOfWeek} ${section.startTime})`;
      }
    }
    return null;
  }

  function addToCart(childIndex: number, section: Section) {
    if (cart.some((c) => c.childIndex === childIndex && c.sectionId === section.id)) return;
    setCart([...cart, { childIndex, sectionId: section.id, section }]);
  }

  function removeFromCart(childIndex: number, sectionId: string) {
    setCart(cart.filter((c) => !(c.childIndex === childIndex && c.sectionId === sectionId)));
  }

  const totalCents = cart.reduce((sum, item) => sum + item.section.template.priceInCents, 0);

  const filteredSections = sections.filter((s) => {
    if (categoryFilter && s.template.category !== categoryFilter) return false;
    if (dayFilter && s.dayOfWeek !== dayFilter) return false;
    return true;
  });

  async function handleSubmit() {
    setSubmitted(true);
    setStep(3);
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto">
        {STEPS.map((s, i) => (
          <button
            type="button"
            key={s.label}
            onClick={() => { if (i < step || (i === 0 && step > 0)) setStep(i); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              i === step ? "bg-gold text-navy" : i < step ? "bg-gold/20 text-gold" : "bg-muted text-muted-foreground"
            }`}
          >
            <s.icon size={14} />
            {s.label}
          </button>
        ))}
      </div>

      {/* ── STEP 0: Add Children ── */}
      {step === 0 && (
        <div className="space-y-6">
          {children.map((child, i) => (
            <div key={i} className="border border-border rounded-lg p-5 bg-card relative">
              {children.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    setChildren(children.filter((_, j) => j !== i));
                    setCart(cart.filter((c) => c.childIndex !== i).map((c) => ({
                      ...c,
                      childIndex: c.childIndex > i ? c.childIndex - 1 : c.childIndex,
                    })));
                  }}
                  title="Remove child"
                  className="absolute top-3 right-3 text-muted-foreground hover:text-destructive"
                >
                  <X size={16} />
                </button>
              )}
              <h3 className="font-semibold mb-4">Child {i + 1}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">First Name *</label>
                  <input
                    value={child.firstName}
                    onChange={(e) => { const c = [...children]; c[i].firstName = e.target.value; setChildren(c); }}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Last Name *</label>
                  <input
                    value={child.lastName}
                    onChange={(e) => { const c = [...children]; c[i].lastName = e.target.value; setChildren(c); }}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Grade Level *</label>
                  <select
                    value={child.grade}
                    onChange={(e) => { const c = [...children]; c[i].grade = e.target.value; setChildren(c); }}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select grade</option>
                    {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Date of Birth</label>
                  <input
                    type="date"
                    value={child.dob}
                    onChange={(e) => { const c = [...children]; c[i].dob = e.target.value; setChildren(c); }}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="text-xs text-muted-foreground block mb-1">Special Needs / Accommodations (optional, confidential)</label>
                <textarea
                  value={child.specialNeeds}
                  onChange={(e) => { const c = [...children]; c[i].specialNeeds = e.target.value; setChildren(c); }}
                  rows={2}
                  placeholder="Any accommodations we should know about..."
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setChildren([...children, { firstName: "", lastName: "", grade: "", dob: "", specialNeeds: "" }])}
            className="flex items-center gap-2 text-sm text-gold hover:text-gold-hover"
          >
            <Plus size={14} /> Add Another Child
          </button>

          <button
            type="button"
            onClick={() => setStep(1)}
            disabled={!children.some((c) => c.firstName && c.lastName && c.grade)}
            className="w-full rounded-md bg-gold py-3 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors disabled:opacity-40"
          >
            Continue to Class Selection
          </button>
        </div>
      )}

      {/* ── STEP 1: Pick Classes ── */}
      {step === 1 && (
        <div>
          {/* Child tabs */}
          {children.length > 1 && (
            <div className="flex gap-2 mb-6">
              {children.map((child, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setActiveChild(i)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    activeChild === i ? "bg-gold text-navy" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {child.firstName || `Child ${i + 1}`}
                  {cart.filter((c) => c.childIndex === i).length > 0 && (
                    <span className="ml-1.5 bg-navy text-white rounded-full px-1.5 py-0.5 text-[10px]">
                      {cart.filter((c) => c.childIndex === i).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-xs"
            >
              <option value="">All Categories</option>
              {Object.entries(STEAM_CATEGORIES).map(([key, cat]) => (
                <option key={key} value={key}>{cat.label}</option>
              ))}
            </select>
            <select
              value={dayFilter}
              onChange={(e) => setDayFilter(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-xs"
            >
              <option value="">All Days</option>
              {DAYS.map((d) => <option key={d} value={d}>{d.charAt(0) + d.slice(1).toLowerCase()}</option>)}
            </select>
          </div>

          {/* Cart summary for current child */}
          {cart.filter((c) => c.childIndex === activeChild).length > 0 && (
            <div className="border border-gold/30 rounded-lg p-4 bg-gold/5 mb-6">
              <h3 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                {children[activeChild]?.firstName}&apos;s Classes
              </h3>
              <div className="space-y-1">
                {cart.filter((c) => c.childIndex === activeChild).map((item) => (
                  <div key={item.sectionId} className="flex items-center justify-between text-sm">
                    <span>{item.section.template.title} — {item.section.dayOfWeek.charAt(0) + item.section.dayOfWeek.slice(1).toLowerCase()} {item.section.startTime}</span>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.childIndex, item.sectionId)}
                      className="text-destructive text-xs hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Class list */}
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {filteredSections.map((section) => {
              const cat = STEAM_CATEGORIES[section.template.category as SteamCategoryKey];
              const inCart = cart.some((c) => c.childIndex === activeChild && c.sectionId === section.id);
              const conflict = hasConflict(activeChild, section);
              const isFull = section.spotsRemaining <= 0;

              return (
                <div
                  key={section.id}
                  className={`border rounded-lg p-4 transition-colors ${
                    inCart ? "border-gold bg-gold/5" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${cat?.bg ?? "bg-muted"} text-white`}>
                          {cat?.label ?? section.template.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {section.template.gradeMin}–{section.template.gradeMax}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm">{section.template.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {section.dayOfWeek.charAt(0) + section.dayOfWeek.slice(1).toLowerCase()} {section.startTime}–{section.endTime} &middot; {section.location.name}
                        {section.instructor && ` &middot; ${section.instructor.name}`}
                      </p>
                      {conflict && (
                        <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                          <AlertTriangle size={10} /> {conflict}
                        </p>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-semibold text-gold">${(section.template.priceInCents / 100).toFixed(0)}</p>
                      <p className={`text-[10px] ${isFull ? "text-destructive" : section.spotsRemaining <= 3 ? "text-destructive" : "text-muted-foreground"}`}>
                        {isFull ? "Waitlist" : `${section.spotsRemaining} spots`}
                      </p>
                      {inCart ? (
                        <button
                          type="button"
                          onClick={() => removeFromCart(activeChild, section.id)}
                          className="mt-1 px-3 py-1 rounded-full text-[10px] bg-destructive text-white"
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addToCart(activeChild, section)}
                          disabled={!!conflict}
                          className="mt-1 px-3 py-1 rounded-full text-[10px] bg-gold text-navy font-medium disabled:opacity-30"
                        >
                          {isFull ? "Join Waitlist" : "Add"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-8">
            <button type="button" onClick={() => setStep(0)} className="px-6 py-3 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground">
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={cart.length === 0}
              className="flex-1 rounded-md bg-gold py-3 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors disabled:opacity-40"
            >
              Review & Checkout ({cart.length} class{cart.length !== 1 ? "es" : ""})
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 2: Review & Pay ── */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Schedule preview */}
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Calendar size={16} className="text-gold" /> Family Weekly Schedule — {semesterName}
            </h3>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {DAYS.map((day) => (
                <div key={day}>
                  <p className="font-medium text-center mb-2 pb-1 border-b border-border">
                    {day.charAt(0) + day.slice(1, 3).toLowerCase()}
                  </p>
                  <div className="space-y-1">
                    {cart
                      .filter((c) => c.section.dayOfWeek === day)
                      .sort((a, b) => a.section.startTime.localeCompare(b.section.startTime))
                      .map((item) => (
                        <div
                          key={item.sectionId + item.childIndex}
                          className="rounded p-1.5 bg-gold/10 border border-gold/20"
                        >
                          <p className="font-medium text-[10px] truncate">{item.section.template.title}</p>
                          <p className="text-muted-foreground text-[9px]">
                            {item.section.startTime} · {children[item.childIndex]?.firstName}
                          </p>
                        </div>
                      ))}
                    {!cart.some((c) => c.section.dayOfWeek === day) && (
                      <p className="text-muted-foreground text-center py-2">—</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart summary by child */}
          {children.map((child, i) => {
            const childCart = cart.filter((c) => c.childIndex === i);
            if (childCart.length === 0) return null;
            return (
              <div key={i} className="border border-border rounded-lg p-5 bg-card">
                <h3 className="font-semibold mb-3">{child.firstName} {child.lastName}</h3>
                <div className="space-y-2">
                  {childCart.map((item) => (
                    <div key={item.sectionId} className="flex justify-between text-sm">
                      <span>
                        {item.section.template.title}
                        <span className="text-muted-foreground"> — {item.section.dayOfWeek.charAt(0) + item.section.dayOfWeek.slice(1).toLowerCase()} {item.section.startTime}</span>
                      </span>
                      <span className="font-medium">${(item.section.template.priceInCents / 100).toFixed(0)}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Payment method */}
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-semibold mb-3">Payment Method</h3>
            <div className="space-y-2">
              {[
                { value: "SQUARE", label: "Credit / Debit Card", desc: "Pay online via Square" },
                { value: "CHARTER", label: "Charter School Funds", desc: "We'll track your purchase order" },
                { value: "CASH", label: "Cash / Check / Venmo", desc: "Pay in person or via Venmo @JKWInnovations" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    paymentMethod === option.value ? "border-gold bg-gold/5" : "border-border"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={option.value}
                    checked={paymentMethod === option.value}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-gold mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-medium">{option.label}</p>
                    <p className="text-xs text-muted-foreground">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>

            {paymentMethod === "CHARTER" && (
              <div className="mt-3">
                <label className="text-xs text-muted-foreground block mb-1">Select Charter School</label>
                <select
                  value={charter}
                  onChange={(e) => setCharter(e.target.value)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="">Choose your charter...</option>
                  {charters.map((cs) => (
                    <option key={cs.id} value={cs.id}>{cs.name}</option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground mt-2">
                  A $25 deposit per class will be required to hold spots while charter funds process.
                </p>
              </div>
            )}
          </div>

          {/* Total */}
          <div className="border border-border rounded-lg p-5 bg-card flex justify-between items-center">
            <div>
              <p className="font-semibold">Total</p>
              <p className="text-xs text-muted-foreground">{cart.length} class{cart.length !== 1 ? "es" : ""} for {semesterName}</p>
            </div>
            <p className="text-2xl font-bold text-gold">${(totalCents / 100).toFixed(0)}</p>
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground">
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 rounded-md bg-gold py-3 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
            >
              {paymentMethod === "SQUARE" ? "Proceed to Payment" : "Submit Enrollment"}
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Confirmation ── */}
      {step === 3 && submitted && (
        <div className="text-center py-12">
          <CheckCircle size={48} className="mx-auto text-science mb-4" />
          <h2 className="text-2xl font-bold font-heading mb-2">You&apos;re Enrolled!</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            {paymentMethod === "SQUARE"
              ? "Payment processing will be available soon. Your enrollment has been recorded."
              : paymentMethod === "CHARTER"
              ? "Your enrollment is confirmed. Please request purchase orders from your charter school and email them to jkwinnovations@gmail.com."
              : "Your enrollment is confirmed. Please bring payment to your first class or Venmo @JKWInnovations."}
          </p>
          <div className="border border-border rounded-lg p-5 bg-card max-w-sm mx-auto text-left mb-6">
            <h3 className="font-semibold text-sm mb-3">Enrollment Summary</h3>
            {children.map((child, i) => {
              const childCart = cart.filter((c) => c.childIndex === i);
              if (childCart.length === 0) return null;
              return (
                <div key={i} className="mb-3 last:mb-0">
                  <p className="text-xs font-medium text-gold">{child.firstName} {child.lastName}</p>
                  {childCart.map((item) => (
                    <p key={item.sectionId} className="text-xs text-muted-foreground ml-2">
                      • {item.section.template.title} ({item.section.dayOfWeek.charAt(0) + item.section.dayOfWeek.slice(1).toLowerCase()} {item.section.startTime})
                    </p>
                  ))}
                </div>
              );
            })}
            <div className="border-t border-border pt-2 mt-2 flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold text-gold">${(totalCents / 100).toFixed(0)}</span>
            </div>
          </div>
          <a href="/" className="text-sm text-gold hover:text-gold-hover">
            Return to Home &rarr;
          </a>
        </div>
      )}
    </div>
  );
}
