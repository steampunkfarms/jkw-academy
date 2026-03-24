export default function AdminSettingsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-xl font-bold tracking-tight mb-1">Settings</h1>
      <p className="text-muted-foreground text-sm mb-8">System configuration and preferences</p>

      <div className="space-y-6">
        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold mb-3">Site Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Business Name</label>
              <input defaultValue="JKW Innovations LLC" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" readOnly />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Contact Email</label>
              <input defaultValue="jkwinnovations@gmail.com" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" readOnly />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Membership Fee</label>
              <input defaultValue="$35/year" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" readOnly />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Deposit Amount</label>
              <input defaultValue="$25/class" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" readOnly />
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold mb-3">Current Semester</h2>
          <p className="text-sm text-muted-foreground">Spring 2026 (Jan 5 – May 22, 2026)</p>
          <p className="text-xs text-muted-foreground mt-1">Status: In Progress</p>
        </div>

        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold mb-3">Integrations</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span>Square Payments</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-engineering/20 text-engineering">Pending Setup</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span>Resend Email</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-engineering/20 text-engineering">Pending Setup</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span>Claude AI (FAQ Chatbot)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-science/20 text-science">Configured</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Orchestrator Crons</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-engineering/20 text-engineering">Pending Registration</span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold mb-3">User Management</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">Jeremy Wilson</p>
                <p className="text-xs text-muted-foreground">jeremy@jkwacademy.com</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold">Admin</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Allie Schindler</p>
                <p className="text-xs text-muted-foreground">allie@jkwacademy.com</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
