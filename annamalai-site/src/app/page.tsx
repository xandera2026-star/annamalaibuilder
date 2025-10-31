import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import ContactBlock from "@/components/ContactBlock";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <StatsBar />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-zinc-900">Services</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Residential Construction"
              description="End-to-end home construction with quality materials and project management."
              imageSrc="/images/services/residential-1.webp"
            />
            <ServiceCard
              title="Commercial Projects"
              description="Smart, scalable spaces for offices, retail, and mixed-use."
              imageSrc="/images/services/commercial-1.webp"
            />
            <ServiceCard
              title="Renovation & Remodeling"
              description="Structural upgrades, interiors, and modern finishes for existing spaces."
              imageSrc="/images/services/renovation-1.webp"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-zinc-900">Featured Projects</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Kolapakkam Residence"
              location="Kolapakkam, Chennai"
              imageSrc="/images/projects/project-1.webp"
            />
            <ProjectCard
              title="SKR Complex Upgrade"
              location="Kolapakkam, Chennai"
              imageSrc="/images/projects/project-2.webp"
            />
            <ProjectCard
              title="Retail Fit-out"
              location="Chennai"
              imageSrc="/images/projects/project-3.webp"
            />
          </div>
        </div>
      </section>

      <CTASection />
      <ContactBlock />
    </div>
  );
}
