import Image from "next/image";

type Props = {
  title: string;
  location: string;
  imageSrc: string;
};

export default function ProjectCard({ title, location, imageSrc }: Props) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{location}</p>
      </div>
    </div>
  );
}
