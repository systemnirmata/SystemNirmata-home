export default function AdminTopbar({ navigateTo }) {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigateTo('/admin/login');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant/30 py-4 px-margin-page flex justify-between items-center h-16">
      <div className="flex items-center space-x-3">
        <span className="font-headline text-2xl text-primary tracking-tight">SystemNirmata</span>
        <span className="font-label-caps text-[10px] tracking-widest text-[#c09849] border border-[#c09849]/30 px-2 py-0.5">ADMIN</span>
      </div>
      <button
        onClick={handleLogout}
        className="font-label-caps text-xs tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
      >
        LOGOUT
      </button>
    </header>
  );
}
