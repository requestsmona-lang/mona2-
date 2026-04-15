export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-foreground"
      aria-label="Hero"
    >
      {/* Video placeholder — replace src with your own video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/images/project-01.jpg"
      >
        {/* Replace the src below with your video file path, e.g. /video/hero.mp4 */}
        {/* <source src="/video/hero.mp4" type="video/mp4" /> */}
      </video>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-foreground/20" aria-hidden="true" />

      {/* Bottom name mark */}
      <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16 flex items-end justify-between">
        <span className="font-logo text-5xl md:text-7xl text-background/90 leading-none">
          Mona
        </span>
        <span className="text-[10px] tracking-[0.22em] uppercase text-background/50 mb-2">
          Barcelona — Amsterdam
        </span>
      </div>
    </section>
  )
}
