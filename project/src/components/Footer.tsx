import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="text-white mb-4" />
            <p className="text-gray-400">
              Ειδικοί στην εγκατάσταση και συντήρηση δικτύων οπτικών ινών.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Αρχική</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Υπηρεσίες</a></li>
              <li><a href="#profile" className="text-gray-400 hover:text-white transition-colors">Εταιρικό Προφίλ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Επικοινωνία</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Τηλ: +30 6951957347</li>
              <li>Email: paroptic.info@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ParOptic </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;