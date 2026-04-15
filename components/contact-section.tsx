'use client'

import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('https://formspree.io/f/xvzdzvwo', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="px-8 md:px-16 py-28 md:py-36 border-t border-border"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-20">
          Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-16">

          {/* Left — info */}
          <div className="md:col-span-5">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-light text-foreground leading-snug mb-10 text-balance"
            >
              Get in touch.
            </h2>

            <ul className="space-y-6">
              <li>
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-1">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/01.mariona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  @01.mariona
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-1">
                  Email
                </p>
                <a
                  href="mailto:requestsmona@gmail.com"
                  className="text-sm font-light text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  requestsmona@gmail.com
                </a>
              </li>
              <li>
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/mariona-ramos-91a637155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  Mariona Ramos
                </a>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="flex flex-col justify-center h-full min-h-48">
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  Message received. I&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-border text-foreground text-sm font-light py-2 focus:outline-none focus:border-foreground transition-colors duration-200 placeholder:text-muted-foreground/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-border text-foreground text-sm font-light py-2 focus:outline-none focus:border-foreground transition-colors duration-200 placeholder:text-muted-foreground/40"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-border text-foreground text-sm font-light py-2 focus:outline-none focus:border-foreground transition-colors duration-200 placeholder:text-muted-foreground/40 resize-none"
                    placeholder="What are you working on?"
                  />
                </div>

                {error && (
                  <p className="text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="text-[10px] tracking-[0.22em] uppercase text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border">
        <span className="font-logo text-lg text-foreground/40">Mona</span>
        <span className="text-[10px] tracking-[0.16em] uppercase text-muted-foreground/40">
          © {new Date().getFullYear()}
        </span>
      </div>
    </section>
  )
}
