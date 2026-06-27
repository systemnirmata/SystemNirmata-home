export default function AdminSidebar({ activeItem, navigateTo }) {
  const menuItems = [
    { name: 'Leads', path: '/admin/leads' },
    { name: 'Projects', path: '/admin/projects' },
    { name: 'Settings', path: '#' }
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-60 border-r border-outline-variant/30 bg-surface-container-low py-8 flex flex-col justify-between">
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => {
          const isActive = activeItem === item.name;
          const isLinkable = item.path !== '#';
          return (
            <button
              key={item.name}
              disabled={!isLinkable}
              onClick={() => isLinkable && navigateTo(item.path)}
              className={`w-full text-left py-4 px-8 font-label-caps text-xs tracking-widest transition-all ${
                isActive
                  ? 'text-primary bg-surface-container-high border-l-2 border-[#c09849]'
                  : isLinkable
                  ? 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40 border-l-2 border-transparent cursor-pointer'
                  : 'text-outline-variant cursor-not-allowed border-l-2 border-transparent'
              }`}
            >
              {item.name.toUpperCase()}
            </button>
          );
        })}
      </nav>
      <div className="px-8 text-[10px] font-body text-on-surface-variant/50">
        SystemNirmata Dashboard v1.0
      </div>
    </aside>
  );
}
