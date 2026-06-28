export default function Services() {
  const servicesList = [
    {
      num: '01.',
      category: 'Architecture',
      title: 'Web Development & Deployment',
      description:
        'We build robust, scalable web architectures tailored to your specific operational needs. Our approach ensures clean codebases and seamless deployment pipelines.',
      bullets: [
        'Custom Full-Stack Solutions',
        'High-Performance Frameworks',
        'Automated CI/CD Pipelines'
      ],
      image:
        '/webDevelopment.png'
    },
    {
      num: '02.',
      category: 'Infrastructure',
      title: 'VPS & Server Management',
      description:
        'Secure, dedicated server environments managed with precision. We ensure maximum uptime, optimal performance, and uncompromising data security.',
      bullets: [
        'Dedicated Environment Provisioning',
        'Proactive Security Monitoring',
        'Optimized Resource Allocation'
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBPawYGhVcaC7eKNeHcLYZbroyHJo0hjabpOlQxES_ht-JNJYjbJ0OnQ8w54QltHUHX_C5BwFG9mJ_DXFYA23BcTaBXwGhaqLZ3b1-0BY-LNHWc7WYRb6jGK5oU0T0GiG4NDR-cM9xbe-BiClio1c4tUbXRpuE2Qwn3czTGNF1tNyeHTZjszieEHTqordCiWI8MvkKBf0dG-rsbtCSk95_nydns_TUUcAymEdkrJRBJg6SOMoAaYdGDz8GW93AXyzdYloq_Dbl_Zg'
    },
    {
      num: '03.',
      category: 'Intelligence',
      title: 'AI Chatbot Agents',
      description:
        'Intelligent, context-aware conversational agents trained on your proprietary data to handle complex inquiries with the nuance of human interaction.',
      bullets: [
        'Custom LLM Fine-Tuning',
        'Multi-platform Integration',
        'Advanced Sentiment Analysis'
      ],
      image:
        '/ai_chatbot.png'
    },
    {
      num: '04.',
      category: 'Communication',
      title: 'AI Voice Call Agents',
      description:
        'Voice synthesis and natural language processing combined to create voice agents capable of handling complex phone-based workflows seamlessly.',
      bullets: [
        'Natural Voice Synthesis',
        'Real-time Conversational Logic',
        'Automated Call Routing & Logging'
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB57l-H6dmcHZTM-RMf4H0MxL_1Gb6GiV1OAXMzgTYjpWc1nme_7FWHpxyqZ277EJ0Rew1iJYUmFh2WTxHoH0FmCdQuFcGOvz5_6_2URpHK1Zd1rLXsvpUeXYNbrRerkSpU3tsiRxopYTtNQJYPL11nZejRm40RJ0SVCwmoomwASvCdVxcCgtobTin2gEENmCdHQZPRNt_zZh6OWkI4bDHvU8_24iMRnSDcKKFccxNBc5xfpY4Gr6fIPyc2P_oDdzazwl7zO5_9BQ'
    }
  ];

  return (
    <div className="w-full pt-16 md:pt-28">
      {/* Hero Header */}
      <section className="min-h-[450px] flex flex-col justify-center items-center text-center py-stack-lg relative px-margin-page">
        <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] mb-stack-sm uppercase">
          Digital Atelier
        </span>
        <h1 className="font-headline-xl text-primary max-w-4xl mx-auto">Our Expertise</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mt-stack-md leading-relaxed">
          Architectural precision meets bespoke intentionality. We craft digital experiences and robust
          infrastructures designed for longevity and mastery.
        </p>
      </section>

      {/* Services Listing */}
      <section className="flex flex-col gap-section-gap mb-section-gap px-margin-page">
        {servicesList.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center max-w-7xl mx-auto w-full text-left"
            >
              {/* Image Column */}
              <div
                className={`col-span-12 md:col-span-6 relative h-[450px] w-full border border-outline-variant/35 ${isEven ? 'order-1' : 'order-1 md:order-2 md:col-start-7'
                  }`}
              >
                <img
                  className="object-bottom w-full h-full grayscale-[20%] sepia-[10%] brightness-90"
                  alt={service.title}
                  src={service.image}
                />
                <div className="absolute inset-0 hairline-l hairline-t hairline-r hairline-b m-4 pointer-events-none"></div>
              </div>

              {/* Text Column */}
              <div
                className={`col-span-12 md:col-span-5 flex flex-col justify-center py-stack-sm ${isEven ? 'md:col-start-8 order-2' : 'order-2 md:order-1'
                  }`}
              >
                <span className="font-label-italic text-label-italic text-on-tertiary-container mb-stack-sm italic">
                  {service.num} {service.category}
                </span>
                <h2 className="font-headline-lg text-primary mb-stack-md leading-tight">
                  {service.title}
                </h2>
                <p className="font-body-md text-on-surface-variant mb-stack-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 font-body-md text-on-surface-variant">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <span className="material-symbols-outlined text-on-tertiary-container mr-4 text-[18px]">
                        check
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      {/* Process Strip */}
      <section className="py-section-gap border-t border-outline-variant/30 flex flex-col items-center bg-surface-container-low px-margin-page">
        <div className="w-full max-w-4xl flex items-center justify-between relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-on-tertiary-container/30 -z-10"></div>
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-surface-container-low px-8">
            <div className="w-3 h-3 rounded-full bg-on-tertiary-container mb-4"></div>
            <span className="font-label-italic text-label-italic text-primary">Discover</span>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center bg-surface-container-low px-8">
            <div className="w-3 h-3 rounded-full bg-on-tertiary-container mb-4"></div>
            <span className="font-label-italic text-label-italic text-primary">Build</span>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center bg-surface-container-low px-8">
            <div className="w-3 h-3 rounded-full bg-on-tertiary-container mb-4"></div>
            <span className="font-label-italic text-label-italic text-primary">Deploy</span>
          </div>
        </div>
      </section>
    </div>
  );
}
