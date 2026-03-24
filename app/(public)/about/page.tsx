import Link from "next/link";
import { prisma } from "@/lib/db";
import { Heart, Award, Users, Sparkles } from "lucide-react";

export const metadata = { title: "About Us" };

export default async function AboutPage() {
  const teamMembers = await prisma.teamMember.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold font-heading mb-4">Get to Know Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          JKW is here to support you through the challenges that may present themselves
          outside the confines of traditional public/private schooling. Our dedicated team
          of instructors work hand-in-hand with families to create effective homeschool
          learning environments, tailored to your student&apos;s specific needs.
        </p>
      </section>

      {/* Founders */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold font-heading text-center mb-10">Meet the Founders</h2>
        <div className="space-y-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col md:flex-row gap-6 items-start">
              {/* DATA PIPE: founder photo */}
              <div className="w-32 h-32 rounded-lg bg-muted flex-shrink-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gold/20">{member.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gold font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Isabella's Story */}
      {/* DATA PIPE: this section should be reviewed by Jeremy for sensitivity and accuracy */}
      <section className="mb-16 border border-border rounded-lg p-8 bg-card">
        <div className="flex items-center gap-3 mb-4">
          <Heart size={20} className="text-art" />
          <h2 className="text-xl font-bold font-heading">What Sets Us Apart</h2>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            The story behind JKW Innovations started in the Wilson household. The youngest
            of the family, Isabella, was diagnosed at age 2 with a rare condition known as
            Dravet syndrome and needed 24/7 around-the-clock care every day since she was born.
          </p>
          <p>
            Raising and growing up side-by-side with Bella has shown each and every member
            of the family the importance of kindness, compassion, and empathy. Bella&apos;s
            condition ignited a fire in JKW&apos;s founders — her condition started them
            down the road of wanting to help children.
          </p>
          <p>
            Hand in hand, father and daughter have turned JKW Innovations from a single
            instructor tutoring service focusing on technical skills, to a fully dedicated
            STEAM learning center that provides comprehensive support to all children —
            ensuring that every student, including those with special needs, receives the
            tailored education and assistance they deserve.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="border border-border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-gold" />
            <h3 className="font-bold">Our Mission</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To revolutionize education and empower children to pursue their passions by
            providing state-of-the-art hands-on learning experiences that foster creativity,
            critical thinking, and character development, ultimately preparing them to thrive
            in both the classroom and the real world.
          </p>
        </div>
        <div className="border border-border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-2 mb-3">
            <Award size={16} className="text-gold" />
            <h3 className="font-bold">Our Vision</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To be a transformative force in education, revolutionizing the way children
            explore and pursue their passions. We envision a future where every child
            has the opportunity to engage in hands-on learning experiences that ignite
            their curiosity, nurture their talents, and unleash their full potential.
          </p>
        </div>
      </section>

      {/* Recognition */}
      {/* DATA PIPE: Marquis Who's Who badge image, SD Voyager link verification */}
      <section className="text-center mb-16">
        <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          Recognition
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://sdvoyager.com/interview/meet-allie-wilson-of-jkw-innovations-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-lg p-4 bg-card hover:border-gold/50 transition-colors"
          >
            <p className="font-semibold text-sm">SD Voyager Magazine</p>
            <p className="text-xs text-muted-foreground">San Diego&apos;s Most Inspiring Stories</p>
          </a>
          <a
            href="https://marquiswhoswho.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-lg p-4 bg-card hover:border-gold/50 transition-colors"
          >
            <p className="font-semibold text-sm">Marquis Who&apos;s Who</p>
            <p className="text-xs text-muted-foreground">Featured Honoree</p>
          </a>
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/about/charter-partners"
          className="text-sm text-gold hover:text-gold-hover"
        >
          View our charter school partners &rarr;
        </Link>
      </div>
    </div>
  );
}
