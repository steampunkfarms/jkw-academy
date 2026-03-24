import { Mail, Bell } from "lucide-react";

export const metadata = { title: "Messages" };

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-xl font-bold font-heading mb-2">Messages</h1>
      <p className="text-muted-foreground text-sm mb-6">Announcements and messages from JKW Academy</p>

      <div className="space-y-3">
        {[
          {
            icon: Bell,
            title: "Welcome to JKW Academy!",
            body: "Thank you for joining the JKW family. We're excited to have your children in our STEAM programs this semester. If you have any questions, don't hesitate to reach out.",
            from: "Jeremy Wilson",
            date: "Jan 5, 2026",
            unread: false,
          },
          {
            icon: Mail,
            title: "Spring 2026 Semester Begins Next Week",
            body: "A reminder that Spring 2026 classes begin on Monday, January 5th. Please arrive 10 minutes early for the first class. Make sure to bring any materials listed on your class page.",
            from: "Allie Schindler",
            date: "Dec 30, 2025",
            unread: false,
          },
          {
            icon: Bell,
            title: "Charter Fund Reminder",
            body: "If you're using charter school funds, please ensure your purchase orders are submitted as soon as possible. Spots are held for 72 hours after registration without a deposit or proof of PO request.",
            from: "JKW Academy",
            date: "Dec 15, 2025",
            unread: false,
          },
        ].map((msg, i) => (
          <div key={i} className={`border rounded-lg p-5 bg-card ${msg.unread ? "border-gold" : "border-border"}`}>
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-md ${msg.unread ? "bg-gold/20" : "bg-muted"}`}>
                <msg.icon size={14} className={msg.unread ? "text-gold" : "text-muted-foreground"} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold">{msg.title}</h3>
                  <span className="text-xs text-muted-foreground">{msg.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{msg.body}</p>
                <p className="text-xs text-gold mt-2">From: {msg.from}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
