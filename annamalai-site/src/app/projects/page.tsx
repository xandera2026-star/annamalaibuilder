import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-3xl font-semibold text-zinc-900">Projects</h1>
          <p className="mt-2 max-w-2xl text-zinc-600">
            A selection of recent work across residential and commercial builds.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <ProjectCard
                key={i}
                title={`Project ${i + 1}`}
                location="Chennai"
                imageSrc={`/images/projects/project-${(i % 6) + 1}.webp`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
