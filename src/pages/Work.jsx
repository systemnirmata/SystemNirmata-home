import { useEffect, useState } from 'react';

export default function Work() {
  const fallbackProjects = [
    {
      id: 1,
      title: 'HealthGuard',
      category: 'AI Chat Agents',
      image_url: '/HealthGurad.png'
    },
    {
      id: 2,
      title: 'Apex AI Chatbot',
      category: 'AI Agents',
      image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    },

    {
      id: 3,
      title: 'Smart Shop ',
      category: 'Websites',
      image_url: '/gangadhar.png'
    },
    {
      id: 4,
      title: 'Aura Financial Dashboard',
      category: 'Websites',
      image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCZ8tbEK1vVAaSMyTpxDs5FHMTERqbnXvmHdD8kdtNCGVrSMiPqf2ZLMYLu48W1Pl73l26KZ9G3J-yibKIF9w-DBgMD-Qy2laTsfnme64tujnrgddjq4hpvRQyCSKJvl_Or4No_0OZ8p79XSkQILELKUor_U3yltqF14iEKdhYdaFODNOzfY77UL7O4fAkfJqZun5GxD41djALCEzhE9gUhXGr85YUX_mb0x8RTgeKos2JncBche_29_fjZHjxV-SIgBztJE7QbQ'
    }
  ];

  const [projects] = useState(fallbackProjects);
  const [filteredProjects, setFilteredProjects] = useState(fallbackProjects);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === category));
    }
  };

  const getColSpanClass = (index) => {
    // Alternate spans to preserve the custom asymmetric layout design
    if (index % 4 === 0) return 'md:col-span-8';
    if (index % 4 === 1) return 'md:col-span-4 md:mt-24';
    if (index % 4 === 2) return 'md:col-span-6';
    return 'md:col-span-6';
  };

  const getAspectClass = (index) => {
    if (index % 4 === 0) return 'aspect-[16/9]';
    if (index % 4 === 1) return 'aspect-square md:aspect-[3/4]';
    return 'aspect-[4/3]';
  };

  return (
    <div className="w-full pt-16 md:pt-28 px-margin-page">
      <main className="max-w-[1440px] mx-auto py-section-gap flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-stack-lg max-w-3xl">
          <h1 className="font-headline-xl text-primary mb-stack-sm">Selected Works</h1>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            A curated exhibition of our architectural precision in the digital space. Where intentional
            design meets high-end execution.
          </p>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-section-gap">
          {['All', 'Websites', 'AI Agents'].map((filter) => (
            <button
              key={filter}
              onClick={() => filterProjects(filter)}
              className={`font-label-caps text-label-caps uppercase tracking-widest cursor-pointer pb-1 transition-colors duration-300 ${activeFilter === filter
                ? 'text-primary border-b border-on-tertiary-container'
                : 'text-on-surface-variant hover:text-primary'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full text-left">
          {filteredProjects.map((project, index) => {
            const colSpan = getColSpanClass(index);
            const aspect = getAspectClass(index);
            return (
              <article
                key={project.id}
                className={`${colSpan} group border border-outline-variant/30 flex flex-col hover:border-primary/50 transition-colors duration-500`}
              >
                <div className={`relative w-full ${aspect} overflow-hidden bg-surface-container`}>
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image_url}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 bg-surface">
                  <span className="block font-label-caps text-label-caps text-on-tertiary-container mb-4">
                    {project.category}
                  </span>
                  <h2 className="font-headline-md text-primary group-hover:text-tertiary transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
