import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env["DATABASE_URL"]!;
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding JKW Academy database...");

  // ── Locations ─────────────────────────────────────────────────────

  const elCajon = await prisma.location.create({
    data: {
      name: "White Dragon of East County",
      address: "1331 Cuyamaca St, Suite A",
      city: "El Cajon",
      state: "CA",
      zip: "92020",
    },
  });

  // ── Semester ──────────────────────────────────────────────────────

  const spring2026 = await prisma.semester.create({
    data: {
      name: "Spring 2026",
      slug: "spring-2026",
      startDate: new Date("2026-01-05"),
      endDate: new Date("2026-05-22"),
      registrationOpen: new Date("2025-12-01"),
      registrationClose: new Date("2026-01-10"),
      status: "IN_PROGRESS",
    },
  });

  // ── Admin Users ───────────────────────────────────────────────────

  const jeremy = await prisma.user.create({
    data: {
      email: "jeremy@jkwacademy.com",
      name: "Jeremy Wilson",
      role: "ADMIN",
    },
  });

  const allie = await prisma.user.create({
    data: {
      email: "allie@jkwacademy.com",
      name: "Allie Schindler",
      role: "ADMIN",
    },
  });

  // ── Team Members (About page) ────────────────────────────────────

  await prisma.teamMember.createMany({
    data: [
      {
        name: "Jeremy Wilson",
        role: "Co-Founder, COO, CTO",
        bio: "Over a decade of classroom teaching experience since 2008. Bachelor of Science in Business Management. Instructor at White Dragon Martial Arts for over 30 years. Passionate about STEAM education and character development.",
        sortOrder: 1,
      },
      {
        name: "Allie Schindler",
        role: "Co-Founder, CEO, CFO",
        bio: "Years of experience working at San Diego youth centers organizing elective courses, tutoring, summer camps, and field trips. Graduated with highest honors. Dedicated to making learning fun and effective for every student.",
        sortOrder: 2,
      },
    ],
  });

  // ── Charter Schools (13+ partners from JKW's actual list) ─────────

  const charters = await Promise.all([
    prisma.charterSchool.create({ data: { name: "Pacific Coast Academy", slug: "pacific-coast-academy", website: "https://pacificcoastacademy.org/", paymentTermDays: 30 } }),
    prisma.charterSchool.create({ data: { name: "Cabrillo Point Academy", slug: "cabrillo-point-academy", website: "https://cabrillopointacademy.org/", paymentTermDays: 45 } }),
    prisma.charterSchool.create({ data: { name: "Mission Vista Academy", slug: "mission-vista-academy", website: "https://missionvistaacademy.org/", paymentTermDays: 30 } }),
    prisma.charterSchool.create({ data: { name: "SoCal Scholars Academy", slug: "socal-scholars-academy", website: "https://dehesasd.net/District/Portal/SCSA", paymentTermDays: 60 } }),
    prisma.charterSchool.create({ data: { name: "Excel Academy", slug: "excel-academy", website: "https://www.excelacademy.education/", paymentTermDays: 30 } }),
    prisma.charterSchool.create({ data: { name: "Epic Charter", slug: "epic-charter", website: "https://california.epiccharterschools.org/", paymentTermDays: 45 } }),
    prisma.charterSchool.create({ data: { name: "Suncoast Preparatory", slug: "suncoast-preparatory", website: "https://suncoastprep.org/", paymentTermDays: 30 } }),
    prisma.charterSchool.create({ data: { name: "Elite Academic Academy", slug: "elite-academic-academy", website: "https://www.eliteacademic.com/", paymentTermDays: 30 } }),
    prisma.charterSchool.create({ data: { name: "Sage Oak Charter Schools", slug: "sage-oak", website: "https://www.sageoak.education/", paymentTermDays: 45 } }),
    prisma.charterSchool.create({ data: { name: "Springs Charter Schools", slug: "springs-charter", website: "https://springscs.org/", paymentTermDays: 30 } }),
    prisma.charterSchool.create({ data: { name: "LFCS Freedom Academy", slug: "lfcs-freedom-academy", website: "https://www.lfcsinc.org/", paymentTermDays: 60 } }),
    prisma.charterSchool.create({ data: { name: "Element Education, Inc.", slug: "element-education", website: "https://www.myelement.org/", paymentTermDays: 30 } }),
    prisma.charterSchool.create({ data: { name: "Compass Charter Schools", slug: "compass-charter", website: "https://www.compasscharters.org/", paymentTermDays: 45 } }),
  ]);

  // ── Class Templates (JKW's actual Spring 2026 catalog) ────────────

  type TemplateInput = {
    title: string;
    slug: string;
    description: string;
    category: "SCIENCE" | "TECHNOLOGY" | "ENGINEERING" | "ART" | "MATH" | "CHARACTER" | "FITNESS";
    gradeMin: string;
    gradeMax: string;
    ageMin: number;
    ageMax: number;
    priceInCents: number;
    day: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY";
    startTime: string;
    endTime: string;
    spotsRemaining: number;
  };

  const classData: TemplateInput[] = [
    // ── MONDAY ──
    { title: "Math Help!", slug: "math-help-tk-2nd", description: "Build a strong math foundation through hands-on activities, games, and engaging practice. Students develop number sense, basic operations, and problem-solving confidence.", category: "MATH", gradeMin: "TK", gradeMax: "2nd", ageMin: 5, ageMax: 8, priceInCents: 26000, day: "MONDAY", startTime: "09:00", endTime: "09:55", spotsRemaining: 15 },
    { title: "Math Help!", slug: "math-help-3rd-7th", description: "Strengthen math skills through interactive lessons covering fractions, geometry, pre-algebra, and critical thinking challenges.", category: "MATH", gradeMin: "3rd", gradeMax: "7th", ageMin: 8, ageMax: 13, priceInCents: 26000, day: "MONDAY", startTime: "09:00", endTime: "09:55", spotsRemaining: 12 },
    { title: "Art Fusion", slug: "art-fusion-tk-2nd", description: "Explore colors, shapes, and textures through painting, collage, sculpture, and mixed-media projects. Students develop fine motor skills and creative self-expression.", category: "ART", gradeMin: "TK", gradeMax: "2nd", ageMin: 5, ageMax: 8, priceInCents: 28000, day: "MONDAY", startTime: "10:00", endTime: "10:55", spotsRemaining: 12 },
    { title: "3D Design & Printing", slug: "3d-design-printing-3rd-9th", description: "Learn 3D modeling software to design custom objects, then bring them to life on real 3D printers. Students take home their creations every session.", category: "TECHNOLOGY", gradeMin: "3rd", gradeMax: "9th", ageMin: 8, ageMax: 15, priceInCents: 29000, day: "MONDAY", startTime: "10:00", endTime: "10:55", spotsRemaining: 11 },
    { title: "Coding (Scratch)", slug: "coding-scratch-1st-5th", description: "Create animations, games, and interactive stories using Scratch — MIT's visual programming language. Perfect introduction to computational thinking.", category: "TECHNOLOGY", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 28000, day: "MONDAY", startTime: "11:00", endTime: "11:55", spotsRemaining: 2 },
    { title: "Young Designers", slug: "young-designers-4th-9th", description: "Design and build functional prototypes using engineering principles. From bridges to catapults, students solve real-world design challenges.", category: "ENGINEERING", gradeMin: "4th", gradeMax: "9th", ageMin: 9, ageMax: 15, priceInCents: 27000, day: "MONDAY", startTime: "11:00", endTime: "11:55", spotsRemaining: 15 },
    { title: "Biology", slug: "biology-1st-5th", description: "Discover the living world through dissections, microscope work, nature walks, and hands-on experiments. From cells to ecosystems.", category: "SCIENCE", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 29000, day: "MONDAY", startTime: "12:00", endTime: "12:55", spotsRemaining: 1 },
    { title: "VFX & Multimedia Tech", slug: "vfx-multimedia-tech-3rd-7th", description: "Learn visual effects, green screen techniques, and multimedia production. Create movie-quality effects using professional software.", category: "TECHNOLOGY", gradeMin: "3rd", gradeMax: "7th", ageMin: 8, ageMax: 13, priceInCents: 28000, day: "MONDAY", startTime: "12:00", endTime: "12:55", spotsRemaining: 15 },
    { title: "Ninja Fitness", slug: "ninja-fitness-1st-5th", description: "Obstacle courses, agility challenges, and martial arts-inspired fitness activities that build coordination, strength, and confidence.", category: "FITNESS", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 25000, day: "MONDAY", startTime: "13:00", endTime: "13:55", spotsRemaining: 1 },
    { title: "Ancient Medieval War Inventions", slug: "ancient-medieval-war-inventions-4th-9th", description: "Build working trebuchets, catapults, and siege engines while learning the physics and history behind ancient warfare technology.", category: "ENGINEERING", gradeMin: "4th", gradeMax: "9th", ageMin: 9, ageMax: 15, priceInCents: 27000, day: "MONDAY", startTime: "13:00", endTime: "13:55", spotsRemaining: 15 },
    { title: "Rocket Scientist", slug: "rocket-scientist-1st-5th", description: "Design, build, and launch real rockets! Learn about thrust, drag, and aerodynamics through exciting hands-on experimentation.", category: "SCIENCE", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 28000, day: "MONDAY", startTime: "14:00", endTime: "14:55", spotsRemaining: 8 },
    { title: "Photoshop Studio", slug: "photoshop-studio-4th-9th", description: "Master digital image editing with Adobe Photoshop. Create composites, retouch photos, design posters, and develop a professional portfolio.", category: "ART", gradeMin: "4th", gradeMax: "9th", ageMin: 9, ageMax: 15, priceInCents: 28000, day: "MONDAY", startTime: "14:00", endTime: "14:55", spotsRemaining: 14 },

    // ── TUESDAY ──
    { title: "Narrative Reading & Writing", slug: "narrative-reading-writing-1st-5th", description: "Develop storytelling skills through creative writing, reading comprehension, and imaginative narrative projects.", category: "CHARACTER", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 26000, day: "TUESDAY", startTime: "09:00", endTime: "09:55", spotsRemaining: 8 },
    { title: "Sports Skills & Games", slug: "sports-skills-games-3rd-7th", description: "Develop athletic skills through structured sports practice, team games, and sportsmanship training.", category: "FITNESS", gradeMin: "3rd", gradeMax: "7th", ageMin: 8, ageMax: 13, priceInCents: 25000, day: "TUESDAY", startTime: "09:00", endTime: "09:55", spotsRemaining: 15 },
    { title: "Minecraft/Creative Block Art", slug: "minecraft-creative-block-art-1st-5th", description: "Blend digital and physical creativity — build in Minecraft, then recreate designs with real blocks, LEGOs, and 3D printed pieces.", category: "ART", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 29000, day: "TUESDAY", startTime: "10:00", endTime: "10:55", spotsRemaining: 10 },
    { title: "Hands on Physics", slug: "hands-on-physics-3rd-7th", description: "Explore forces, motion, energy, and simple machines through exciting experiments and engineering challenges.", category: "SCIENCE", gradeMin: "3rd", gradeMax: "7th", ageMin: 8, ageMax: 13, priceInCents: 28000, day: "TUESDAY", startTime: "10:00", endTime: "10:55", spotsRemaining: 15 },
    { title: "Beginner Sports", slug: "beginner-sports-1st-5th", description: "Introduction to multiple sports with focus on basic skills, coordination, and having fun while being active.", category: "FITNESS", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 25000, day: "TUESDAY", startTime: "11:00", endTime: "11:55", spotsRemaining: 10 },
    { title: "Minecraft Education Coding", slug: "minecraft-education-coding-3rd-7th", description: "Learn real coding concepts through Minecraft Education Edition. Write code to automate builds, create mods, and solve computational puzzles.", category: "TECHNOLOGY", gradeMin: "3rd", gradeMax: "7th", ageMin: 8, ageMax: 13, priceInCents: 28000, day: "TUESDAY", startTime: "11:00", endTime: "11:55", spotsRemaining: 15 },
    { title: "Dinosaur History & Art", slug: "dinosaur-history-art-1st-5th", description: "Travel back in time to explore the age of dinosaurs through paleontology, fossil activities, and prehistoric art projects.", category: "SCIENCE", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 27000, day: "TUESDAY", startTime: "12:00", endTime: "12:55", spotsRemaining: 11 },
    { title: "Video Editing & YouTube", slug: "video-editing-youtube-3rd-7th", description: "Produce, edit, and publish videos using professional tools. Learn storytelling, camera work, and post-production for the digital age.", category: "TECHNOLOGY", gradeMin: "3rd", gradeMax: "7th", ageMin: 8, ageMax: 13, priceInCents: 28000, day: "TUESDAY", startTime: "12:00", endTime: "12:55", spotsRemaining: 12 },
    { title: "Creative Design & Engineering", slug: "creative-design-engineering-1st-5th", description: "Build bridges, towers, vehicles, and inventions using everyday materials. Learn the engineering design process through trial and error.", category: "ENGINEERING", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 27000, day: "TUESDAY", startTime: "13:00", endTime: "13:55", spotsRemaining: 10 },
    { title: "Graphic Design & Digital Art", slug: "graphic-design-digital-art-4th-9th", description: "Create logos, posters, digital illustrations, and brand identities using professional design software and tablets.", category: "ART", gradeMin: "4th", gradeMax: "9th", ageMin: 9, ageMax: 15, priceInCents: 28000, day: "TUESDAY", startTime: "13:00", endTime: "13:55", spotsRemaining: 13 },
    { title: "Mad Scientist", slug: "mad-scientist-1st-5th", description: "Wild, messy, unforgettable science experiments! Chemical reactions, explosions (safe ones!), slime, and the wow-factor of discovery.", category: "SCIENCE", gradeMin: "1st", gradeMax: "5th", ageMin: 6, ageMax: 11, priceInCents: 29000, day: "TUESDAY", startTime: "14:00", endTime: "14:55", spotsRemaining: 15 },

    // ── WEDNESDAY ──
    { title: "Obstacles & Challenges", slug: "obstacles-challenges-tk-2nd", description: "Age-appropriate obstacle courses and physical challenges that build gross motor skills, balance, and perseverance.", category: "FITNESS", gradeMin: "TK", gradeMax: "2nd", ageMin: 5, ageMax: 8, priceInCents: 25000, day: "WEDNESDAY", startTime: "09:00", endTime: "09:55", spotsRemaining: 10 },
    { title: "Comp. & Critical Thinking", slug: "comp-critical-thinking-3rd-5th", description: "Strengthen reading comprehension and critical thinking through engaging texts, debates, logic puzzles, and analytical writing.", category: "CHARACTER", gradeMin: "3rd", gradeMax: "5th", ageMin: 8, ageMax: 11, priceInCents: 26000, day: "WEDNESDAY", startTime: "09:00", endTime: "09:55", spotsRemaining: 15 },
    { title: "Story Explorers", slug: "story-explorers-tk-2nd", description: "Journey through beloved stories with dramatic play, crafts, and creative activities that bring books to life.", category: "CHARACTER", gradeMin: "TK", gradeMax: "2nd", ageMin: 5, ageMax: 8, priceInCents: 26000, day: "WEDNESDAY", startTime: "10:00", endTime: "10:55", spotsRemaining: 10 },
    { title: "Robotics & Automation", slug: "robotics-automation-3rd-5th", description: "Build and program robots using VEX kits. Learn sensors, motors, gears, and autonomous navigation while preparing for competitions.", category: "TECHNOLOGY", gradeMin: "3rd", gradeMax: "5th", ageMin: 8, ageMax: 11, priceInCents: 29000, day: "WEDNESDAY", startTime: "10:00", endTime: "10:55", spotsRemaining: 15 },
    { title: "Learning Electronics", slug: "learning-electronics-tk-2nd", description: "Introduction to circuits, LEDs, batteries, and switches through safe, hands-on projects perfect for young engineers.", category: "ENGINEERING", gradeMin: "TK", gradeMax: "2nd", ageMin: 5, ageMax: 8, priceInCents: 29000, day: "WEDNESDAY", startTime: "11:00", endTime: "11:55", spotsRemaining: 10 },
    { title: "Survival Skills Engineering", slug: "survival-skills-engineering-3rd-5th", description: "Learn outdoor survival through engineering: build shelters, water filtration systems, fire starters, and navigation tools.", category: "ENGINEERING", gradeMin: "3rd", gradeMax: "5th", ageMin: 8, ageMax: 11, priceInCents: 27000, day: "WEDNESDAY", startTime: "11:00", endTime: "11:55", spotsRemaining: 13 },
  ];

  // Create templates and sections
  for (const c of classData) {
    const template = await prisma.classTemplate.create({
      data: {
        title: c.title,
        slug: c.slug,
        description: c.description,
        category: c.category,
        ageMin: c.ageMin,
        ageMax: c.ageMax,
        gradeMin: c.gradeMin,
        gradeMax: c.gradeMax,
        priceInCents: c.priceInCents,
      },
    });

    await prisma.classSection.create({
      data: {
        templateId: template.id,
        semesterId: spring2026.id,
        locationId: elCajon.id,
        instructorId: jeremy.id,
        dayOfWeek: c.day,
        startTime: c.startTime,
        endTime: c.endTime,
        maxStudents: 15,
        spotsRemaining: c.spotsRemaining,
        status: c.spotsRemaining <= 0 ? "FULL" : c.spotsRemaining <= 3 ? "WAITLIST_ONLY" : "OPEN",
      },
    });
  }

  // ── Testimonials (from JKW's Wix site) ────────────────────────────

  await prisma.testimonial.createMany({
    data: [
      { authorName: "Lisa Augustin", text: "I can't say enough great things about JKW and the amazing teachers who have inspired my kids for years. Mr. Jeremy and Ms. Allie meet all kids where they are at and create space for them to grow. They personalize the learning experience inside of the classroom to keep the kids captivated and wanting to learn more. My son has expressed that the worst thing about the school year ending is that he doesn't get to be in class with Mr. Jeremy. Thank you JKW Innovations for making such a positive impact for my kids!", featured: true },
      { authorName: "Rachel Simmons", text: "JKW has been an incredible resource for our family. The teachers genuinely care about each student's growth and make every class engaging and fun.", featured: true },
      { authorName: "David Okafor", text: "Our kids look forward to JKW classes more than anything else in their week. The hands-on projects are amazing and they come home excited to share what they learned.", featured: true },
      { authorName: "Maria Gonzalez", text: "As a homeschool parent, finding quality enrichment was always a challenge until we found JKW. The STEAM curriculum is outstanding and the instructors are world-class.", featured: true },
      { authorName: "Jennifer Park", text: "Mr. Jeremy and Mrs. Allie have created something truly special. My daughter's confidence in science and engineering has skyrocketed since joining JKW.", featured: false },
      { authorName: "Mike Thompson", text: "The 3D printing class changed my son's life. He went from being unsure about technology to wanting to be an engineer. JKW makes learning feel like an adventure.", featured: false },
      { authorName: "Priya Nair", text: "What sets JKW apart is how they weave character development into every lesson. My children aren't just learning STEAM — they're becoming better people.", featured: false },
      { authorName: "Sarah Mitchell", text: "We've tried several enrichment programs across San Diego and JKW is by far the best. The small class sizes mean every kid gets individual attention.", featured: false },
      { authorName: "Carlos Rivera", text: "The robotics program at JKW is incredible. My kids are now competing in VEX Robotics and loving every minute of it. Thank you Jeremy and Allie!", featured: false },
      { authorName: "Hannah Kim", text: "JKW accommodated my son's learning differences with such grace and patience. He thrives in their classes because they truly understand that every child learns differently.", featured: false },
      { authorName: "James Walker", text: "Three of my four kids attend JKW and each one has had a completely personalized experience. The teachers know their strengths and push them to grow.", featured: false },
      { authorName: "Amara Johnson", text: "The Mad Scientist class is absolute chaos in the best way possible. My kids come home covered in slime and beaming from ear to ear. This is what learning should look like.", featured: false },
      { authorName: "Robert Chen", text: "We started with one class and now we're enrolled in three per semester. JKW has become the highlight of our homeschool experience.", featured: false },
      { authorName: "Fatima Hassan", text: "As a charter school parent, the partnership between JKW and our charter has been seamless. Jeremy handles all the paperwork and makes the process stress-free.", featured: false },
      { authorName: "Daniel Brooks", text: "My daughter used to say she hated math. After one semester at JKW, she now asks to do extra math problems at home. That's the JKW magic.", featured: false },
      { authorName: "Elena Petrov", text: "The summer camps are phenomenal. Five days of pure STEAM excitement. My kids count down the days until the next camp session.", featured: false },
    ],
  });

  // ── Sample Families (diverse names, US + world cultures) ──────────

  const sampleFamilies = [
    { parentName: "Lisa Augustin", email: "lisa.augustin@example.com", lastName: "Augustin", phone: "(619) 555-0101", city: "El Cajon", charter: 0, children: [{ first: "Noah", dob: "2017-03-15", grade: "3rd" }, { first: "Emma", dob: "2019-08-22", grade: "1st" }] },
    { parentName: "David Okafor", email: "david.okafor@example.com", lastName: "Okafor", phone: "(619) 555-0102", city: "La Mesa", charter: 1, children: [{ first: "Chidi", dob: "2016-11-03", grade: "4th" }, { first: "Adaeze", dob: "2018-06-19", grade: "2nd" }] },
    { parentName: "Maria Gonzalez", email: "maria.gonzalez@example.com", lastName: "Gonzalez", phone: "(619) 555-0103", city: "Spring Valley", charter: 2, children: [{ first: "Sofia", dob: "2015-04-12", grade: "5th" }, { first: "Mateo", dob: "2018-01-28", grade: "2nd" }, { first: "Isabella", dob: "2020-09-05", grade: "TK" }] },
    { parentName: "Jennifer Park", email: "jennifer.park@example.com", lastName: "Park", phone: "(858) 555-0104", city: "Santee", charter: 3, children: [{ first: "Mina", dob: "2017-07-30", grade: "3rd" }] },
    { parentName: "Mike Thompson", email: "mike.thompson@example.com", lastName: "Thompson", phone: "(619) 555-0105", city: "El Cajon", charter: null, children: [{ first: "Jake", dob: "2014-12-08", grade: "6th" }, { first: "Lily", dob: "2017-05-14", grade: "3rd" }] },
    { parentName: "Priya Nair", email: "priya.nair@example.com", lastName: "Nair", phone: "(858) 555-0106", city: "San Diego", charter: 4, children: [{ first: "Arjun", dob: "2016-02-20", grade: "4th" }, { first: "Ananya", dob: "2018-10-11", grade: "2nd" }] },
    { parentName: "Carlos Rivera", email: "carlos.rivera@example.com", lastName: "Rivera", phone: "(619) 555-0107", city: "Lemon Grove", charter: 5, children: [{ first: "Diego", dob: "2015-08-03", grade: "5th" }, { first: "Luna", dob: "2019-03-17", grade: "1st" }] },
    { parentName: "Sarah Mitchell", email: "sarah.mitchell@example.com", lastName: "Mitchell", phone: "(619) 555-0108", city: "El Cajon", charter: 0, children: [{ first: "Ethan", dob: "2016-06-25", grade: "4th" }] },
    { parentName: "Hannah Kim", email: "hannah.kim@example.com", lastName: "Kim", phone: "(858) 555-0109", city: "Rancho San Diego", charter: 6, children: [{ first: "Joon", dob: "2017-01-14", grade: "3rd", specialNeeds: "Sensory processing — prefers structured transitions and quiet workspace" }] },
    { parentName: "Amara Johnson", email: "amara.johnson@example.com", lastName: "Johnson", phone: "(619) 555-0110", city: "El Cajon", charter: null, children: [{ first: "Zion", dob: "2018-04-09", grade: "2nd" }, { first: "Nia", dob: "2016-11-22", grade: "4th" }] },
    { parentName: "Robert Chen", email: "robert.chen@example.com", lastName: "Chen", phone: "(858) 555-0111", city: "San Diego", charter: 7, children: [{ first: "Kevin", dob: "2015-09-18", grade: "5th" }, { first: "Emily", dob: "2018-02-06", grade: "2nd" }] },
    { parentName: "Fatima Hassan", email: "fatima.hassan@example.com", lastName: "Hassan", phone: "(619) 555-0112", city: "El Cajon", charter: 8, children: [{ first: "Yusuf", dob: "2016-07-12", grade: "4th" }, { first: "Layla", dob: "2019-01-03", grade: "1st" }] },
    { parentName: "Daniel Brooks", email: "daniel.brooks@example.com", lastName: "Brooks", phone: "(619) 555-0113", city: "Lakeside", charter: null, children: [{ first: "Chloe", dob: "2017-10-28", grade: "3rd" }] },
    { parentName: "Elena Petrov", email: "elena.petrov@example.com", lastName: "Petrov", phone: "(858) 555-0114", city: "San Diego", charter: 9, children: [{ first: "Nikita", dob: "2015-05-07", grade: "5th" }, { first: "Sasha", dob: "2018-12-15", grade: "2nd" }] },
    { parentName: "James Walker", email: "james.walker@example.com", lastName: "Walker", phone: "(619) 555-0115", city: "Santee", charter: 10, children: [{ first: "Aiden", dob: "2014-03-22", grade: "6th" }, { first: "Harper", dob: "2016-08-09", grade: "4th" }, { first: "Mason", dob: "2018-11-30", grade: "2nd" }, { first: "Olivia", dob: "2020-06-18", grade: "TK" }] },
    { parentName: "Keiko Tanaka", email: "keiko.tanaka@example.com", lastName: "Tanaka", phone: "(858) 555-0116", city: "Del Mar", charter: 11, children: [{ first: "Hiro", dob: "2017-09-04", grade: "3rd" }] },
    { parentName: "Rachel Simmons", email: "rachel.simmons@example.com", lastName: "Simmons", phone: "(619) 555-0117", city: "La Mesa", charter: null, children: [{ first: "Tyler", dob: "2016-01-19", grade: "4th" }, { first: "Grace", dob: "2019-07-25", grade: "1st" }] },
    { parentName: "Oluwaseun Adeyemi", email: "seun.adeyemi@example.com", lastName: "Adeyemi", phone: "(619) 555-0118", city: "El Cajon", charter: 12, children: [{ first: "Tunde", dob: "2015-12-01", grade: "5th" }, { first: "Kemi", dob: "2018-05-23", grade: "2nd" }] },
    { parentName: "Stephanie Nguyen", email: "steph.nguyen@example.com", lastName: "Nguyen", phone: "(858) 555-0119", city: "San Diego", charter: 1, children: [{ first: "Minh", dob: "2017-04-16", grade: "3rd" }, { first: "Linh", dob: "2019-10-08", grade: "1st" }] },
    { parentName: "Marcus Williams", email: "marcus.williams@example.com", lastName: "Williams", phone: "(619) 555-0120", city: "Spring Valley", charter: null, children: [{ first: "Jayden", dob: "2016-06-03", grade: "4th" }] },
  ];

  for (const f of sampleFamilies) {
    const user = await prisma.user.create({
      data: {
        email: f.email,
        name: f.parentName,
        role: "PARENT",
      },
    });

    const family = await prisma.family.create({
      data: {
        parentUserId: user.id,
        lastName: f.lastName,
        phone: f.phone,
        city: f.city,
        state: "CA",
        charterSchoolId: f.charter !== null ? charters[f.charter].id : null,
        referralCode: f.lastName.toUpperCase().slice(0, 4) + Math.floor(Math.random() * 9000 + 1000),
      },
    });

    // Create membership for each family
    await prisma.membership.create({
      data: {
        familyId: family.id,
        startDate: new Date("2025-09-01"),
        endDate: new Date("2026-08-31"),
        status: "ACTIVE",
      },
    });

    for (const child of f.children) {
      await prisma.student.create({
        data: {
          familyId: family.id,
          firstName: child.first,
          lastName: f.lastName,
          dateOfBirth: new Date(child.dob),
          gradeLevel: child.grade,
          specialNeedsNotes: (child as { specialNeeds?: string }).specialNeeds ?? null,
        },
      });
    }
  }

  // ── FAQ Entries ────────────────────────────────────────────────────

  await prisma.faqEntry.createMany({
    data: [
      { question: "What ages do you serve?", answer: "JKW Academy serves students from Transitional Kindergarten (age 5) through 9th grade (age 15). Some classes are designed for specific age ranges — check each class listing for details.", keywords: ["age", "ages", "grade", "old"], sortOrder: 1 },
      { question: "How do charter school funds work?", answer: "If your child is enrolled in a partner charter school, you can use enrichment funds to pay for JKW classes. Select your charter during registration, then request a purchase order through your charter. Once we receive the PO, your child's spot is confirmed. We partner with 13+ charter schools in the San Diego area.", keywords: ["charter", "funds", "payment", "PO", "purchase order"], sortOrder: 2 },
      { question: "What is the membership fee?", answer: "JKW Academy requires a $35/year family membership. This covers all children in your family and gives you access to class registration, camps, and member-only events. Membership can be paid out of pocket or through charter funds.", keywords: ["membership", "fee", "cost", "35"], sortOrder: 3 },
      { question: "Where are classes held?", answer: "Classes are held at White Dragon of East County, 1331 Cuyamaca St, Suite A, El Cajon, CA 92020. It's a spacious facility inside the White Dragon Martial Arts dojo.", keywords: ["location", "where", "address", "directions"], sortOrder: 4 },
      { question: "What is the class schedule?", answer: "Classes run Monday through Wednesday (some Thursdays), from 9:00 AM to 3:00 PM in 55-minute blocks. Each family can build their own custom weekly schedule by choosing classes that fit their availability.", keywords: ["schedule", "time", "when", "hours", "days"], sortOrder: 5 },
      { question: "Do you accommodate special needs students?", answer: "Absolutely. JKW Academy was founded with inclusion at its core. We work with families to accommodate learning differences, sensory needs, and physical considerations. During registration, you can share any special needs privately and we'll ensure your child has a great experience.", keywords: ["special needs", "disability", "accommodation", "inclusive", "accessibility"], sortOrder: 6 },
      { question: "What is the class size?", answer: "Classes are capped at 15 students to ensure every child receives individual attention from the instructor. Popular classes fill quickly, so early registration is recommended.", keywords: ["class size", "how many", "students", "ratio"], sortOrder: 7 },
      { question: "Do you offer summer camps?", answer: "Yes! JKW runs STEAM-themed camps during winter break, spring break, and throughout the summer. Camp sessions are typically one week long, running 9 AM to 12 PM or full-day options. Check our Camps page for upcoming sessions.", keywords: ["camp", "summer", "break", "camps"], sortOrder: 8 },
      { question: "Can I enroll multiple children?", answer: "Of course! Our registration system supports multi-child enrollment. Add each child, pick their classes, and check out in a single transaction. Each child can have their own unique schedule.", keywords: ["multiple", "sibling", "children", "family"], sortOrder: 9 },
      { question: "What is your refund policy?", answer: "Refunds are available up to one week before the semester starts. After classes begin, we offer prorated credits for future semesters. The $35 membership fee is non-refundable. Contact us for specific situations — we try to be flexible.", keywords: ["refund", "cancel", "policy", "money back"], sortOrder: 10 },
    ],
  });

  console.log("Seed complete!");
  console.log(`  - 1 location`);
  console.log(`  - 1 semester`);
  console.log(`  - 2 admin users`);
  console.log(`  - 2 team members`);
  console.log(`  - ${charters.length} charter schools`);
  console.log(`  - ${classData.length} class templates + sections`);
  console.log(`  - 16 testimonials`);
  console.log(`  - ${sampleFamilies.length} families with ${sampleFamilies.reduce((sum, f) => sum + f.children.length, 0)} students`);
  console.log(`  - ${sampleFamilies.length} memberships`);
  console.log(`  - 10 FAQ entries`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
