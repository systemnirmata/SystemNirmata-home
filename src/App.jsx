import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

// New Pages (Disconnected for offline version)
// import CaseStudyDetail from './pages/CaseStudyDetail';
// import AdminLogin from './pages/AdminLogin';
// import AdminSignup from './pages/AdminSignup';
// import AdminLeads from './pages/AdminLeads';
// import AdminProjects from './pages/AdminProjects';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [pathname, setPathname] = useState(window.location.pathname);

  // Handle back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation helper
  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setPathname(path);
    window.scrollTo(0, 0);
  };

  // Intercept state-based page changes (e.g. from public header/footer links)
  const handleSetActivePage = (page) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      setPathname('/');
    }
    setActivePage(page);
    window.scrollTo(0, 0);
  };


  // Scroll to top of page on state route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Determine what to show in main content for state routing
  const renderPageState = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handleSetActivePage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'work':
        return <Work />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={handleSetActivePage} />;
    }
  };

  /*
  // Render Admin pages directly without public nav/footer
  if (pathname === '/admin/login') {
    return <AdminLogin navigateTo={navigateTo} />;
  }
  if (pathname === '/admin/signup') {
    return <AdminSignup navigateTo={navigateTo} />;
  }
  if (pathname === '/admin/leads') {
    return <AdminLeads navigateTo={navigateTo} />;
  }
  if (pathname === '/admin/projects') {
    return <AdminProjects navigateTo={navigateTo} />;
  }

  // Render Case Study Page with public Header/Footer
  if (pathname.startsWith('/work/')) {
    const slug = pathname.substring(6);
    return (
      <div className="bg-background text-on-surface font-body-md text-body-md antialiased selection:bg-on-tertiary-container selection:text-background min-h-screen flex flex-col overflow-x-hidden">
        <Navbar activePage="work" setActivePage={handleSetActivePage} />
        <main className="flex-grow pt-16">
          <CaseStudyDetail slug={slug} navigateTo={navigateTo} handleSetActivePage={handleSetActivePage} />
        </main>
        <Footer setActivePage={handleSetActivePage} />
      </div>
    );
  }
  */

  // Fallback to default state-based public site layout
  return (
    <div className="bg-background text-on-surface font-body-md text-body-md antialiased selection:bg-on-tertiary-container selection:text-background min-h-screen flex flex-col overflow-x-hidden">
      <Navbar activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="flex-grow pt-16">
        {renderPageState()}
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </div>
  );
}

export default App;
