export function AboutSection() {
  return (
    <section
      id="about"
      className="px-8 md:px-16 py-28 md:py-36 border-t border-border"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-[12px] tracking-[0.25em] uppercase text-muted-foreground mb-20">
          About
        </p>

        {/* Main layout: asymmetric two-column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-16">
          {/* Left column — name + origin */}
          <div className="md:col-span-5">
            <h2
              id="about-heading"
              className="font-logo text-6xl md:text-7xl lg:text-8xl text-foreground leading-none mb-10"
            >
              Mona
            </h2>
            <p className="text-sm tracking-[0.08em] text-muted-foreground leading-relaxed mb-2">
              Born &amp; based in Barcelona
            </p>
            <p className="text-sm tracking-[0.08em] text-muted-foreground leading-relaxed mb-10">
              Works internationally
            </p>
            <div className="w-8 h-px bg-border" aria-hidden="true" />
          </div>

          {/* Right column — bio + credentials */}
          <div className="md:col-span-7 md:pt-4">
            {/* Bio */}
            <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-6 text-balance">
              Fashion designer first,<br />
              creative pattern maker after.
            </p>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-lg text-balance">
              Observing a contemporary landscape that feels increasingly neutral,
              functional, and quiet, the work responds through contrast: through
              visual strength, ornament, and the belief that fashion should move,
              provoke, and captivate. Rather than aiming to please, it seeks to
              spark curiosity and command presence.
            </p>

            {/* Credentials */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">

              {/* Interned */}
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-5">
                  Interned
                </p>
                <ul className="space-y-4">
                  <li>
                    <p className="text-sm font-light text-foreground leading-snug">
                      Tania Morenilla
                    </p>
                    <p className="text-xs tracking-[0.08em] text-muted-foreground mt-0.5">
                      Stylist assistant
                    </p>
                  </li>
                  <li>
                    <p className="text-sm font-light text-foreground leading-snug">
                      Viktor &amp; Rolf
                    </p>
                    <p className="text-xs tracking-[0.08em] text-muted-foreground mt-0.5">
                      Design assistant
                    </p>
                  </li>
                </ul>
              </div>

              {/* Recognition */}
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-5">
                  Recognition
                </p>
                <ul className="space-y-4">
                  <li>
                    <p className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground/60 mb-0.5">
                      Featured in
                    </p>
                    <p className="text-sm font-light text-foreground">
                      The Vanilla Issue
                    </p>
                  </li>
                  <li>
                    <p className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground/60 mb-0.5">
                      Finalist
                    </p>
                    <p className="text-sm font-light text-foreground leading-snug">
                      Runhua Award Contest 2025
                    </p>
                    <p className="text-xs tracking-[0.06em] text-muted-foreground mt-1 leading-relaxed">
                      Jiangxi Institute of Fashion Technology (JIFT),<br />
                      Nanchang, China
                    </p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
