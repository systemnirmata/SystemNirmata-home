import { useEffect, useState } from 'react';

export default function Home({ setActivePage }) {
  const [projects] = useState([
    {
      id: 1,
      title: 'Aura Financial',
      category: 'Web Architecture',
      image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCZ8tbEK1vVAaSMyTpxDs5FHMTERqbnXvmHdD8kdtNCGVrSMiPqf2ZLMYLu48W1Pl73l26KZ9G3J-yibKIF9w-DBgMD-Qy2laTsfnme64tujnrgddjq4hpvRQyCSKJvl_Or4No_0OZ8p79XSkQILELKUor_U3yltqF14iEKdhYdaFODNOzfY77UL7O4fAkfJqZun5GxD41djALCEzhE9gUhXGr85YUX_mb0x8RTgeKos2JncBche_29_fjZHjxV-SIgBztJE7QbQ'
    },
    {
      id: 2,
      title: 'Veritas Legal AI',
      category: 'AI Voice Agents',
      image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-gyIQTyCvF9BmmJU7FQZbK_-FxGrM-p24jqPsdO74eXPd6KZ2BTCERT_0wrHrAWVP8YBbIWq1wk7FucBRwZffIYigIVEovIF0aZBeGhfYr-gFXq_KuNw1F3-KrxjljvaABrA2Sx_xauBe8kZwnswBpAt-DE8vsgr3m00MF0XS-DpdHu1NkL7TC7kQa2hZmw8c39JIW8HafqXH2-Nx1RUwPLLQTEdPVeTJnub1wloTVHDlPv3p-uC44S1EAugtr64doNRuy-7R7g'
    }
  ]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary-container text-on-primary min-h-[750px] flex items-center px-margin-page py-section-gap relative">
        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-2">
            <span className="font-label-caps text-label-caps text-on-tertiary-container block mb-4 uppercase tracking-widest">
              Digital Atelier
            </span>
            <h1 className="font-headline-xl text-on-primary mb-stack-md leading-tight text-left">
              Digital systems for the modern{' '}
              <span className="relative inline-block pb-2 border-b border-on-tertiary-container">
                offline
              </span>{' '}
              business.
            </h1>
            <p className="font-body-lg text-primary-fixed-dim max-w-2xl mb-stack-lg text-left">
              We architect bespoke software solutions tailored for enterprises that value precision,
              longevity, and high-end digital craftsmanship.
            </p>
            <div className="text-left">
              <button
                onClick={() => setActivePage('contact')}
                className="inline-block px-8 py-4 border border-on-tertiary-container text-on-primary font-label-caps text-label-caps uppercase hover:bg-on-tertiary-container hover:text-primary-container transition-colors duration-300 rounded-none cursor-pointer tracking-widest"
              >
                Initiate Dialogue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-outline-variant py-stack-md bg-surface">
        <div className="px-margin-page max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-center">
              <span className="block text-2xl font-headline-md text-primary mb-1">10+</span> Clients
            </div>
            <div className="hidden md:block w-px h-12 bg-on-tertiary-container opacity-50"></div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-center">
              <span className="block text-2xl font-headline-md text-primary mb-1">20+</span> Projects Delivered
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-surface-container py-section-gap px-margin-page">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 gap-gutter mb-stack-lg">
            <div className="col-span-12 md:col-span-8 lg:col-span-6 md:col-start-2 text-left">
              <h2 className="font-label-caps text-label-caps text-on-tertiary-container uppercase tracking-widest mb-stack-sm">
                Expertise
              </h2>
              <h3 className="font-headline-lg text-primary leading-tight">
                Architectural precision in every discipline.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-gutter items-start">
            <div className="col-span-12 md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-3 flex flex-col gap-gutter">
              {/* Service 1 */}
              <div
                onClick={() => setActivePage('services')}
                className="border border-on-tertiary-container/30 p-8 hover:bg-surface-bright transition-all duration-300 group cursor-pointer text-left bg-surface"
              >
                <span className="material-symbols-outlined text-on-tertiary-container mb-stack-sm text-3xl group-hover:scale-110 transition-transform duration-300">
                  code
                </span>
                <h4 className="font-headline-md text-primary mb-stack-sm text-2xl">
                  Web Development
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Bespoke deployment of robust, scalable web architectures tailored for
                  high-performance needs.
                </p>
              </div>

              {/* Service 2 */}
              <div
                onClick={() => setActivePage('services')}
                className="border border-on-tertiary-container/30 p-8 hover:bg-surface-bright transition-all duration-300 group cursor-pointer text-left bg-surface md:mt-12"
              >
                <span className="material-symbols-outlined text-on-tertiary-container mb-stack-sm text-3xl group-hover:scale-110 transition-transform duration-300">
                  dns
                </span>
                <h4 className="font-headline-md text-primary mb-stack-sm text-2xl">
                  Infrastructure
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Secure, efficient VPS and cloud infrastructure management for unyielding
                  reliability.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-gutter md:mt-24">
              {/* Service 3 */}
              <div
                onClick={() => setActivePage('services')}
                className="border border-on-tertiary-container/30 p-8 hover:bg-surface-bright transition-all duration-300 group cursor-pointer text-left bg-surface"
              >
                <span className="material-symbols-outlined text-on-tertiary-container mb-stack-sm text-3xl group-hover:scale-110 transition-transform duration-300">
                  forum
                </span>
                <h4 className="font-headline-md text-primary mb-stack-sm text-2xl">
                  AI Chatbot Agents
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Intelligent conversational interfaces designed to augment client interaction and
                  automate workflows.
                </p>
              </div>

              {/* Service 4 */}
              <div
                onClick={() => setActivePage('services')}
                className="border border-on-tertiary-container/30 p-8 hover:bg-surface-bright transition-all duration-300 group cursor-pointer text-left bg-surface md:mt-12"
              >
                <span className="material-symbols-outlined text-on-tertiary-container mb-stack-sm text-3xl group-hover:scale-110 transition-transform duration-300">
                  record_voice_over
                </span>
                <h4 className="font-headline-md text-primary mb-stack-sm text-2xl">
                  AI Voice Agents
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Sophisticated voice synthesis and natural language processing for seamless
                  telephonic automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-section-gap px-margin-page bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-stack-lg flex justify-between items-end border-b border-outline-variant pb-8">
            <div className="text-left">
              <h2 className="font-label-caps text-label-caps text-on-tertiary-container uppercase tracking-widest mb-stack-sm">
                Portfolio
              </h2>
              <h3 className="font-headline-lg text-primary">Selected Works</h3>
            </div>
            <button
              onClick={() => setActivePage('work')}
              className="font-label-caps text-label-caps text-primary hover:text-on-tertiary-container transition-colors uppercase border-b border-transparent hover:border-on-tertiary-container pb-1 cursor-pointer tracking-widest"
            >
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter lg:gap-12 text-left">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActivePage('work')}
                className={`group cursor-pointer ${idx === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-surface-variant border border-outline-variant/30">
                  <div
                    className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${project.image_url}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h4 className="font-headline-md text-primary mb-2">{project.title}</h4>
                <div className="flex justify-between items-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-sm">
                    {project.category}
                  </p>
                  <span className="font-label-italic text-label-italic text-on-tertiary-container group-hover:text-primary transition-colors">
                    View Portfolio →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-secondary text-on-secondary py-section-gap px-margin-page flex flex-col items-center justify-center text-center">
        <h2 className="font-headline-xl text-on-secondary mb-stack-md max-w-3xl leading-tight">
          Ready to architect your digital future?
        </h2>
        <p className="font-body-lg text-secondary-fixed mb-stack-lg max-w-xl">
          Engage our atelier to build systems that command authority and drive unparalleled
          efficiency.
        </p>
        <button
          onClick={() => setActivePage('contact')}
          className="inline-block px-10 py-4 border border-on-tertiary-container text-on-secondary font-label-caps text-label-caps uppercase hover:bg-on-tertiary-container hover:text-secondary transition-colors duration-300 rounded-none tracking-widest cursor-pointer"
        >
          Start a Project
        </button>
      </section>
    </div>
  );
}
