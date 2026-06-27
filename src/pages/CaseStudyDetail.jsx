import { useState, useEffect } from 'react';

export default function CaseStudyDetail({ slug, navigateTo, handleSetActivePage }) {
  const [project, setProject] = useState(null);
  const [nextProjectSlug, setNextProjectSlug] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    // Fetch case study details by slug
    fetch(`http://localhost:8000/api/projects/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Case study details could not be loaded.');
        return res.json();
      })
      .then((data) => {
        setProject(data);
        
        // Fetch all projects to determine the next project in sequence
        return fetch('http://localhost:8000/api/projects');
      })
      .then((res) => res.json())
      .then((allProjects) => {
        const currentIndex = allProjects.findIndex(p => p.slug === slug);
        if (currentIndex !== -1 && allProjects.length > 1) {
          const nextIndex = (currentIndex + 1) % allProjects.length;
          setNextProjectSlug(allProjects[nextIndex].slug);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center pt-24 px-margin-page">
        <div className="text-center">
          <p className="font-body-lg text-on-surface-variant animate-pulse">Retrieving case study...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center pt-24 px-margin-page">
        <div className="text-center max-w-md">
          <h2 className="font-headline text-3xl text-primary mb-4">Case Study Not Found</h2>
          <p className="font-body-md text-on-surface-variant mb-8">{error || 'The requested project could not be found.'}</p>
          <button
            onClick={() => navigateTo('/work')}
            className="px-6 py-3 bg-[#0b3d2e] text-[#fdf9f0] font-label-caps text-xs uppercase tracking-widest hover:opacity-90"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const heroImage = project.images && project.images.length > 0 ? project.images[0].image_url : '';
  
  // Pretty category label mapping
  const categoryLabel = 
    project.category === 'web' ? 'WEBSITES' :
    project.category === 'vps' ? 'WEBSITES' :
    project.category === 'chatbot' ? 'AI AGENTS' :
    project.category === 'voice_agent' ? 'AI AGENTS' :
    project.category.toUpperCase();

  return (
    <div className="w-full pt-16 md:pt-28 px-margin-page">
      <main className="max-w-[1200px] mx-auto py-12 flex flex-col text-left">
        
        {/* Breadcrumb */}
        <div className="mb-4">
          <span className="font-label-caps text-xs tracking-widest text-[#c09849] uppercase">
            PORTFOLIO / {categoryLabel}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="font-headline-xl text-primary mb-3 leading-tight">
          {project.title}
        </h1>
        {project.client_type && (
          <p className="font-body-lg text-on-surface-variant/80 italic mb-8">
            Case study for {project.client_type}
          </p>
        )}
        
        {/* Thin Divider */}
        <div className="border-b border-outline-variant/30 mb-12"></div>

        {/* Hero Image */}
        {heroImage && (
          <div className="w-full aspect-[21/9] bg-surface-container overflow-hidden mb-16 shadow-lg border border-outline-variant/20">
            <img src={heroImage} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Meta Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-outline-variant/30 mb-16">
          <div className="text-left md:border-r border-outline-variant/30 md:pr-8">
            <span className="font-label-caps text-[10px] tracking-widest text-[#c09849] block mb-1">CLIENT TYPE</span>
            <span className="font-body-md text-primary font-medium">{project.client_type || 'Confidential'}</span>
          </div>
          <div className="text-left md:border-r border-outline-variant/30 md:px-8">
            <span className="font-label-caps text-[10px] tracking-widest text-[#c09849] block mb-1">TIMELINE</span>
            <span className="font-body-md text-primary font-medium">{project.timeline || 'Custom Duration'}</span>
          </div>
          <div className="text-left md:pl-8">
            <span className="font-label-caps text-[10px] tracking-widest text-[#c09849] block mb-1">TECH STACK</span>
            <span className="font-body-md text-primary font-medium">{project.tech_stack || 'Custom Architecture'}</span>
          </div>
        </div>

        {/* The Problem Section */}
        {project.problem && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <h2 className="col-span-1 md:col-span-4 font-headline text-2xl md:text-3xl text-primary">The Problem</h2>
            <p className="col-span-1 md:col-span-8 font-body-lg text-on-surface-variant leading-relaxed whitespace-pre-wrap">
              {project.problem}
            </p>
          </div>
        )}

        {/* The Approach Section */}
        {project.approach && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <h2 className="col-span-1 md:col-span-4 font-headline text-2xl md:text-3xl text-primary">The Approach</h2>
            <div className="col-span-1 md:col-span-8 space-y-8">
              <p className="font-body-lg text-on-surface-variant leading-relaxed whitespace-pre-wrap">
                {project.approach}
              </p>
              
              {/* Secondary Images Row */}
              {project.images && project.images.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  {project.images.slice(1).map((img, idx) => (
                    <div key={idx} className="aspect-video bg-surface-container overflow-hidden border border-outline-variant/20 shadow">
                      <img src={img.image_url} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* The Result Section */}
        {project.result && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <h2 className="col-span-1 md:col-span-4 font-headline text-2xl md:text-3xl text-primary">The Result</h2>
            <div className="col-span-1 md:col-span-8 space-y-8">
              <p className="font-body-lg text-on-surface-variant leading-relaxed whitespace-pre-wrap">
                {project.result}
              </p>
              
              {/* Small Stat Callouts */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
                <div>
                  <span className="block font-headline text-4xl text-primary mb-1">100%</span>
                  <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase">Precision Engineered</span>
                </div>
                <div>
                  <span className="block font-headline text-4xl text-primary mb-1">Bespoke</span>
                  <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase">Tailored Abstraction</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Client Quote Pullout Quote */}
        {project.client_quote && (
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-[#0b3d2e] py-20 px-6 md:px-12 mb-16 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="material-symbols-outlined text-4xl text-[#c09849] opacity-40 mb-4">format_quote</span>
              <blockquote className="font-headline text-2xl md:text-3xl italic text-[#fdf9f0] leading-relaxed mb-6">
                "{project.client_quote}"
              </blockquote>
              {project.client_attribution && (
                <cite className="font-label-caps text-xs tracking-widest text-[#c09849] not-italic uppercase block">
                  — {project.client_attribution}
                </cite>
              )}
            </div>
          </div>
        )}

        {/* Closing CTA and Next Project */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-12 border-t border-outline-variant/30 mt-8 gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-headline text-2xl text-primary mb-2">Have a project in mind?</h3>
            <button
              onClick={() => handleSetActivePage('contact')}
              className="text-[#c09849] hover:text-[#c09849]/80 font-label-caps text-xs tracking-widest uppercase hover:underline cursor-pointer"
            >
              Initiate Inquiry →
            </button>
          </div>
          
          {nextProjectSlug && (
            <button
              onClick={() => navigateTo(`/work/${nextProjectSlug}`)}
              className="font-label-caps text-sm tracking-widest uppercase text-primary hover:text-[#c09849] transition-colors cursor-pointer"
            >
              Next Project →
            </button>
          )}
        </div>

      </main>
    </div>
  );
}
