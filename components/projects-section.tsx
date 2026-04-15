import Image from 'next/image'

interface EditorialTextBlock {
  title: string
  subtitle: string
  description: string
}

const images = [
  { src: '/images/project-01.jpg', alt: 'Collection I — Look 01, sculptural sleeve construction in reclaimed quilt textile', aspect: 'tall' },
  { src: '/images/project-02.jpg', alt: 'Collection I — Look 02, tapestry jacket with exaggerated volume shoulders', aspect: 'wide' },
  { src: '/images/project-03.jpg', alt: 'Collection II — Look 01, full-length patchwork gown in antique quilt material', aspect: 'tall' },
  { src: '/images/project-04.jpg', alt: 'Collection II — Atelier detail, pattern making on vintage tapestry', aspect: 'tall' },
]

const imagesTwo = [
  { src: '/images/project-05.jpg', alt: 'Collection III — Look 01, cocoon coat from found textile objects', aspect: 'wide' },
  { src: '/images/project-06.jpg', alt: 'Collection III — Look 02, sculptural skirt volume in motion', aspect: 'tall' },
  { src: '/images/project-07.jpg', alt: 'Collection IV — Look 01, draped antique tapestry sculptural form', aspect: 'tall' },
  { src: '/images/project-08.jpg', alt: 'Collection IV — Craft detail, bespoke reclaimed textile surface', aspect: 'tall' },
]

const textBlockOne: EditorialTextBlock = {
  title: 'Reclamation',
  subtitle: 'Collection I & II — 2024',
  description:
    'An inquiry into what remains when an object outlives its original purpose. Antique quilts and tapestries are unmade and rebuilt — structure pulled apart, silhouette re-imagined. Each piece carries the evidence of its previous life.',
}

const textBlockTwo: EditorialTextBlock = {
  title: 'Second Body',
  subtitle: 'Collection III & IV — 2025',
  description:
    'Technical rigor meets exaggerated volume. Found objects are elevated through pattern making — a practice of translating material memory into form. Presented as finalist work at the Runhua Award Contest 2025.',
}

function EditorialText({ block }: { block: EditorialTextBlock }) {
  return (
    <div className="col-span-full flex flex-col items-center text-center py-20 md:py-28 px-8 md:px-32 lg:px-56">
      <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-6">
        {block.subtitle}
      </p>
      <h3 className="text-4xl md:text-5xl font-light italic text-foreground mb-8 text-balance leading-tight">
        {block.title}
      </h3>
      <div className="w-8 h-px bg-border mb-8" aria-hidden="true" />
      <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-xl text-balance">
        {block.description}
      </p>
    </div>
  )
}

function ProjectImage({
  src,
  alt,
  aspect,
}: {
  src: string
  alt: string
  aspect: string
}) {
  return (
    <div
      className={`overflow-hidden group ${
        aspect === 'wide'
          ? 'col-span-full md:col-span-2 aspect-[16/10]'
          : 'col-span-full md:col-span-1 aspect-[3/4]'
      }`}
    >
      <div className="relative w-full h-full bg-accent overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-8 md:px-16 pt-28 pb-12"
      aria-labelledby="projects-heading"
    >
      <div className="flex items-baseline justify-between mb-16">
        <h2
          id="projects-heading"
          className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground"
        >
          Projects
        </h2>
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">
          Selected Work
        </span>
      </div>

      {/* First group of 4 images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {images.map((img) => (
          <ProjectImage key={img.src} {...img} />
        ))}

        {/* Editorial text block after first 4 */}
        <EditorialText block={textBlockOne} />

        {/* Second group of 4 images */}
        {imagesTwo.map((img) => (
          <ProjectImage key={img.src} {...img} />
        ))}

        {/* Editorial text block after second 4 */}
        <EditorialText block={textBlockTwo} />
      </div>
    </section>
  )
}
