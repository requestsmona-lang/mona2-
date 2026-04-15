import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { IntroAnimation } from '@/components/intro-animation'

export default function Page() {
  return (
    <main>
      <IntroAnimation />
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
