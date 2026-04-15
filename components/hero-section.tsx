import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-foreground"
      aria-label="Hero"
    >
      {/* Editorial hero image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_03-Vqb1bfz56IBsZaGXI6g8RzQNQ9gtQn.jpg"
        alt="Puppet Riot FW25 Editorial - Model wearing hand-knit sweater with tassel details and brocade skirt"
        fill
        className="object-cover object-[center_28%]"
        priority
        sizes="100vw"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/90 font-sans font-normal">
          scroll
        </span>
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/85"
          style={{ animation: 'bounce-subtle 2s ease-in-out infinite' }}
        >
          <path
            d="M5 0L5 14M5 14L1 10M5 14L9 10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
