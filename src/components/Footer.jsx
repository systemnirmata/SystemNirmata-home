export default function Footer({ setActivePage }) {
  return (
    <footer className="w-full bg-primary text-surface-container px-margin-page py-stack-lg mt-section-gap">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between">
          <button
            onClick={() => setActivePage('home')}
            className="font-headline-lg text-headline-lg text-surface-container-low tracking-tighter mb-8 text-left cursor-pointer hover:opacity-80 transition-opacity"
          >
            SystemNirmata
          </button>
          <p className="text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest text-sm">
            © {new Date().getFullYear()} SystemNirmata. All rights reserved.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col justify-end md:items-end space-y-4 mt-8 md:mt-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <button
                onClick={() => setActivePage('about')}
                className="font-label-caps text-label-caps text-on-primary-container hover:text-secondary-container transition-colors duration-300 uppercase tracking-widest cursor-pointer"
              >
                About Atelier
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage('contact')}
                className="font-label-caps text-label-caps text-on-primary-container hover:text-secondary-container transition-colors duration-300 uppercase tracking-widest cursor-pointer"
              >
                Inquiries
              </button>
            </li>
            <li>
              <a
                href="#"
                className="font-label-caps text-label-caps text-on-primary-container hover:text-secondary-container transition-colors duration-300 uppercase tracking-widest"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
