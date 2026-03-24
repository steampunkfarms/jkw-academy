// STEAM category metadata — used across public site and admin
export const STEAM_CATEGORIES = {
  SCIENCE: { label: "Science", color: "text-science", bg: "bg-science", icon: "FlaskConical" },
  TECHNOLOGY: { label: "Technology", color: "text-technology", bg: "bg-technology", icon: "Monitor" },
  ENGINEERING: { label: "Engineering", color: "text-engineering", bg: "bg-engineering", icon: "Wrench" },
  ART: { label: "Art", color: "text-art", bg: "bg-art", icon: "Palette" },
  MATH: { label: "Math", color: "text-math", bg: "bg-math", icon: "Calculator" },
  CHARACTER: { label: "Character & Life Skills", color: "text-character", bg: "bg-character", icon: "Heart" },
  FITNESS: { label: "Fitness", color: "text-fitness", bg: "bg-fitness", icon: "Dumbbell" },
} as const;

export type SteamCategoryKey = keyof typeof STEAM_CATEGORIES;
