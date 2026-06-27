export default function About() {
  return (
    <div className="w-full pt-16 md:pt-28">
      {/* Hero Title */}
      <section className="px-margin-page mb-stack-lg text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-on-tertiary-container block mb-stack-sm tracking-[0.2em] uppercase">
            The Atelier
          </span>
          <h1 className="font-headline-xl text-primary leading-tight">Our Story</h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-margin-page mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-7xl mx-auto border-t border-b border-primary/20 py-stack-lg text-left">
          {/* Asymmetric offset */}
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-5 md:pr-gutter md:border-r border-primary/20">
            <h2 className="font-headline-md text-primary mb-stack-md">The Origin</h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              SystemNirmata was forged from a necessity for uncompromising quality in the digital space.
              We observed an industry obsessed with velocity at the expense of craft, where generic
              frameworks replaced bespoke engineering. Our atelier was established as a counter-movement—a
              sanctuary for architectural precision and intentional design, dedicated to building software
              that endures.
            </p>
          </div>
          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-4">
            <h2 className="font-headline-md text-primary mb-stack-md mt-stack-lg md:mt-0">
              The Partnership
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-stack-md">
              A serendipitous alignment of engineering rigor and architectural vision. Two minds, united by a
              singular philosophy: that exceptional digital experiences require both structural integrity
              and aesthetic refinement. This duality forms the foundation of every system we construct.
            </p>
            <div className="flex items-center gap-4 text-on-tertiary-container font-label-caps text-label-caps uppercase tracking-widest text-sm">
              <span className="w-8 h-[1px] bg-on-tertiary-container"></span>
              Est. 2024
            </div>
          </div>
          <div className="hidden md:block md:col-span-1"></div>
        </div>
      </section>

      {/* Standalone Statement */}
      <section className="w-full bg-secondary py-32 px-margin-page mb-section-gap text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-on-secondary-fixed-variant/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary-fixed-dim block mb-stack-md tracking-widest uppercase opacity-80">
            Our Philosophy
          </span>
          <p className="font-headline-lg text-on-secondary italic font-light tracking-wide leading-tight">
            "Excellence over speed."
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-margin-page max-w-7xl mx-auto text-left">
        <h2 className="font-label-caps text-label-caps text-on-tertiary-container mb-stack-lg tracking-widest uppercase border-b border-on-tertiary-container/30 pb-4 inline-block">
          The Architects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-gutter">
          {/* Founder 1 */}
          <div className="flex flex-col group">
            <div className="aspect-[3/4] w-full bg-surface-container-highest mb-stack-md relative overflow-hidden border-b border-primary/20">
              <img
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out mix-blend-multiply opacity-90"
                alt="Aadhar Brahmbhatt Portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWyzQGuWyMt9EfFHRIqG0inqLkoR15BfBDVO1Mpj4eGg7G5SzEedsW7jVoPhdcaPLGPmFWDqG4PJuDwGHFl-Cbi0GUBEFC79hP5nXwJYNK4rXkKOWGmLflxbzF5mWbwrCIvE7xHXTZtVMfNiQMoEyz1_2SJspIFjJDu1DRl3zrrg3m3CkDSY597VnUj65kkvWk1KcKOpYxgZWaqmjWp5Acl4IdnbwgDnhp1mTBIHGP4FQxwuCVVI04Rbc8VbGKl_ZpLIT9JljJzQ"
              />
            </div>
            <div className="flex justify-between items-baseline mb-4 border-b border-on-tertiary-container/40 pb-4">
              <h3 className="font-headline-md text-primary">Aadhar Brahmbhatt</h3>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-sm">
                Software Engineer
              </span>
            </div>
            <p className="font-label-italic text-label-italic text-on-surface-variant text-lg italic">
              "Precision is the foundation of digital longevity."
            </p>
          </div>

          {/* Founder 2 - Asymmetric offset */}
          <div className="flex flex-col group md:mt-24">
            <div className="aspect-[3/4] w-full bg-surface-container-highest mb-stack-md relative overflow-hidden border-b border-primary/20">
              <img
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out mix-blend-multiply opacity-90"
                alt="Nagar Divya Portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXDbpflBIWSde4c7Cemk1m-ygXj0xVYKOo6M5gdHnPhXIbobC4PNNBK-dNgRTVGD3_28oBkT6z48dw-1To4fkb7WbRTQ3MTj-Uuo4kpwhFb0QjqcU6_q-N1kSckEAP1eauLqsUtPnF6KDePJDJQ3AjoBnoKE4uqtSO3D90aKGDjyz1SMP1IzMuVhgStjeJ0pXxu3SOfoThMca_Y757d8VFolZrj_iKOQMS8DAlC4SLeRKzw_D9s_AiIynx6mX-sIV7wtRc1U2P7Q"
              />
            </div>
            <div className="flex justify-between items-baseline mb-4 border-b border-on-tertiary-container/40 pb-4">
              <h3 className="font-headline-md text-primary">Nagar Divya</h3>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-sm">
                Software Engineer
              </span>
            </div>
            <p className="font-label-italic text-label-italic text-on-surface-variant text-lg italic">
              "Architecting systems that command authority."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
