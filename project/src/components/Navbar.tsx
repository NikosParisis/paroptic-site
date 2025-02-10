import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <Logo />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Αρχική</NavLink>
            <NavLink href="#services">Υπηρεσίες</NavLink>
            <NavLink href="#profile">Εταιρικό Προφίλ</NavLink>
            <NavLink href="#contact">Επικοινωνία</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Αρχική</MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Υπηρεσίες</MobileNavLink>
              <MobileNavLink href="#profile" onClick={() => setIsOpen(false)}>Εταιρικό Προφίλ</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Επικοινωνία</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Navbar;