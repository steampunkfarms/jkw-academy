import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = { title: "Contact" };

// DATA PIPE: contact form needs Resend integration (Session 10).
// Map embed needs Google Maps API or static image.
// Business hours and phone from Jeremy.

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-10">
        Have questions about our programs, camps, or charter school partnerships?
        We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="border border-border rounded-lg p-6 bg-card">
          <h2 className="font-semibold mb-4">Send a Message</h2>
          {/* DATA PIPE: form submission → Resend (Session 10) */}
          <form className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Subject</label>
              <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                <option>General Inquiry</option>
                <option>Class Registration</option>
                <option>Charter School Partnership</option>
                <option>Camp Information</option>
                <option>Tutoring Request</option>
                <option>Donation / Scholarship</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-gold py-2.5 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Form submission coming soon. Email us directly in the meantime.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6 bg-card space-y-4">
            <h2 className="font-semibold">Get In Touch</h2>
            <div className="flex items-start gap-3 text-sm">
              <Mail size={16} className="text-gold mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:jkwinnovations@gmail.com" className="text-gold hover:text-gold-hover">
                  jkwinnovations@gmail.com
                </a>
              </div>
            </div>
            {/* DATA PIPE: phone number from Jeremy */}
            <div className="flex items-start gap-3 text-sm">
              <Phone size={16} className="text-gold mt-0.5" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">Contact us for phone number</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={16} className="text-gold mt-0.5" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">
                  White Dragon of East County<br />
                  1331 Cuyamaca St, Suite A<br />
                  El Cajon, CA 92020
                </p>
              </div>
            </div>
            {/* DATA PIPE: business hours from Jeremy */}
            <div className="flex items-start gap-3 text-sm">
              <Clock size={16} className="text-gold mt-0.5" />
              <div>
                <p className="font-medium">Class Hours</p>
                <p className="text-muted-foreground">Mon–Wed, 9:00 AM – 3:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          {/* DATA PIPE: Google Maps embed or static map */}
          <div className="border border-border rounded-lg h-48 bg-muted flex items-center justify-center">
            <p className="text-xs text-muted-foreground">Map embed coming soon</p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/jkwinnovationsllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-border rounded-lg py-3 text-sm text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors bg-card"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/JKWInnovationsLLC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-border rounded-lg py-3 text-sm text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors bg-card"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
