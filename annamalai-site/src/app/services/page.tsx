import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-3xl font-semibold text-zinc-900">Services</h1>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Comprehensive construction solutions tailored to your needs.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Residential Construction"
              description="From foundation to finish with quality and transparency."
              imageSrc="/images/services/residential-1.webp"
            />
            <ServiceCard
              title="Commercial Projects"
              description="Efficient, scalable, and compliant spaces for business."
              imageSrc="/images/services/commercial-1.webp"
            />
            <ServiceCard
              title="Renovation & Remodeling"
              description="Upgrade structure, interiors, and utilities with minimal downtime."
              imageSrc="/images/services/renovation-1.webp"
            />
            <ServiceCard
              title="Interiors & Fit-outs"
              description="Functional, modern interiors aligned to your brand and lifestyle."
              imageSrc="/images/services/interiors-1.webp"
            />
            <ServiceCard
              title="Repairs & Maintenance"
              description="Preventive and corrective maintenance programs."
              imageSrc="/images/services/maintenance-1.webp"
            />
            <ServiceCard
              title="Design & Approvals"
              description="Plans, permits, BOQs, and estimates."
              imageSrc="/images/services/design-1.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
