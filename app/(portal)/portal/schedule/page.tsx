import { prisma } from "@/lib/db";
import { STEAM_CATEGORIES, type SteamCategoryKey } from "@/lib/steam-categories";

export const metadata = { title: "Weekly Schedule" };

export default async function SchedulePage() {
  // Demo: first family's schedule
  const family = await prisma.family.findFirst({
    include: {
      students: {
        include: {
          enrollments: {
            where: { status: "REGISTERED" },
            include: {
              classSection: {
                include: {
                  template: { select: { title: true, category: true } },
                  location: { select: { name: true } },
                },
              },
            },
          },
        },
      },
    },
  });

  const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY"];
  const TIMES = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  // Build schedule grid
  const scheduleItems = family?.students.flatMap((s) =>
    s.enrollments.map((e) => ({
      studentName: s.firstName,
      day: e.classSection.dayOfWeek,
      time: e.classSection.startTime,
      title: e.classSection.template.title,
      category: e.classSection.template.category,
      location: e.classSection.location.name,
    }))
  ) ?? [];

  return (
    <div>
      <h1 className="text-xl font-bold font-heading mb-2">Weekly Schedule</h1>
      <p className="text-muted-foreground text-sm mb-6">Your family&apos;s class schedule for this semester</p>

      {scheduleItems.length === 0 ? (
        <div className="border border-border rounded-lg p-12 text-center bg-card">
          <p className="text-muted-foreground">No enrolled classes to display</p>
        </div>
      ) : (
        <div className="border border-border rounded-lg overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="p-3 text-xs text-muted-foreground text-left w-16">Time</th>
                  {DAYS.map((d) => (
                    <th key={d} className="p-3 text-xs text-muted-foreground text-center">
                      {d.charAt(0) + d.slice(1, 3).toLowerCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMES.map((time) => (
                  <tr key={time} className="border-b border-border last:border-b-0">
                    <td className="p-3 font-mono text-xs text-muted-foreground">{time}</td>
                    {DAYS.map((day) => {
                      const items = scheduleItems.filter((i) => i.day === day && i.time === time);
                      return (
                        <td key={day} className="p-2">
                          {items.map((item, idx) => {
                            const cat = STEAM_CATEGORIES[item.category as SteamCategoryKey];
                            return (
                              <div
                                key={idx}
                                className={`rounded-md p-2 ${cat?.bg ?? "bg-muted"} text-white text-xs`}
                              >
                                <p className="font-medium truncate">{item.title}</p>
                                <p className="text-white/70 text-[10px]">{item.studentName}</p>
                              </div>
                            );
                          })}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4">
        {Object.entries(STEAM_CATEGORIES).map(([key, cat]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-sm ${cat.bg}`} />
            <span className="text-xs text-muted-foreground">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
