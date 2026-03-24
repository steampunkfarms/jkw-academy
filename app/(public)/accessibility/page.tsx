import { Eye, Ear, Hand, Heart, Monitor } from "lucide-react";

export const metadata = { title: "Accessibility" };

// DATA PIPE: accessibility statement reviewed for legal accuracy.
// Caregiver resources — links to Dravet/epilepsy foundations.
// Toggle persistence — currently localStorage only, will save to User.accessibilityPrefs after auth (Session 8).

export default function AccessibilityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">Accessibility</h1>
      <p className="text-muted-foreground mb-10">
        JKW Academy is committed to making STEAM education accessible to every child.
        Our platform and classrooms are designed with inclusion at the core.
      </p>

      {/* Isabella's Legacy */}
      <section className="border border-art/30 rounded-lg p-6 bg-art/5 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Heart size={16} className="text-art" />
          <h2 className="font-semibold">Isabella&apos;s Legacy</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our commitment to accessibility is deeply personal. JKW was founded by a family
          that knows firsthand what it means to care for a child with complex medical needs.
          Every decision we make — from classroom design to curriculum development — considers
          the full spectrum of learners.
        </p>
      </section>

      {/* Display Preferences */}
      {/* DATA PIPE: toggle persistence to User.accessibilityPrefs after auth */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Display Preferences</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Customize how this site appears. Your preferences are saved to your browser.
        </p>
        <div className="space-y-3">
          {[
            { icon: Eye, label: "High Contrast Mode", desc: "Increases contrast for text and borders", toggle: "high-contrast" },
            { icon: Monitor, label: "Reduced Motion", desc: "Minimizes animations and transitions", toggle: "reduced-motion" },
            { icon: Hand, label: "Dyslexia-Friendly Font", desc: "Switches to a more readable typeface", toggle: "dyslexia-font" },
            { icon: Ear, label: "Sensory-Friendly Mode", desc: "Calmer color palette and simplified visuals", toggle: "sensory-friendly" },
          ].map((pref) => (
            <div key={pref.toggle} className="flex items-center justify-between border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-3">
                <pref.icon size={16} className="text-gold" />
                <div>
                  <p className="text-sm font-medium">{pref.label}</p>
                  <p className="text-xs text-muted-foreground">{pref.desc}</p>
                </div>
              </div>
              {/* DATA PIPE: functional toggles with state management */}
              <button
                type="button"
                className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
              >
                Toggle
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* In the Classroom */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">In the Classroom</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>Our instructors are trained to accommodate diverse learning needs:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modified activities for students with mobility or motor skill differences</li>
            <li>Sensory-friendly options (quiet workspaces, noise-reducing headphones available)</li>
            <li>Visual supports and structured transitions</li>
            <li>Flexible pacing — students work at their own speed</li>
            <li>One-on-one aide support available (discuss with us during registration)</li>
          </ul>
        </div>
      </section>

      {/* Caregiver Resources */}
      {/* DATA PIPE: links to Dravet syndrome foundation, epilepsy resources, autism resources */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Caregiver Resources</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Helpful organizations for families of children with special needs:
        </p>
        <div className="space-y-2">
          {[
            { name: "Dravet Syndrome Foundation", url: "https://www.dravetfoundation.org/" },
            { name: "Epilepsy Foundation — San Diego", url: "https://www.epilepsy.com/" },
            { name: "Autism Society of San Diego", url: "https://www.autismsocietysandiego.org/" },
            { name: "California Department of Education — Special Ed", url: "https://www.cde.ca.gov/sp/se/" },
          ].map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gold hover:text-gold-hover transition-colors"
            >
              {resource.name} &rarr;
            </a>
          ))}
        </div>
      </section>

      {/* WCAG Statement */}
      <section className="border-t border-border pt-8 text-sm text-muted-foreground">
        <h2 className="text-lg font-bold text-foreground mb-3">Accessibility Statement</h2>
        <p className="leading-relaxed">
          JKW Academy is committed to ensuring digital accessibility for people of all abilities.
          We continually improve the user experience for everyone and apply the relevant
          accessibility standards. This website strives to conform to Web Content Accessibility
          Guidelines (WCAG) 2.1 Level AA. If you encounter any accessibility barriers, please
          contact us at{" "}
          <a href="mailto:jkwinnovations@gmail.com" className="text-gold hover:underline">
            jkwinnovations@gmail.com
          </a>.
        </p>
      </section>
    </div>
  );
}
