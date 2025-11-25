import ThemeSwitcher from './ThemeSwitcher';

export default function Footer() {
  return (
    <footer className="text-center py-3 mt-4 border-top" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <span className="me-2">Theme:</span>
          <ThemeSwitcher />
        </div>
        <p className="mb-0" style={{ color: '#ffffff' }}>&copy; 2025 Manika Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
}
