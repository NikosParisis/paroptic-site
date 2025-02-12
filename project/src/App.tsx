import React from 'react';
import { Phone, Mail, Network, Building2, Users2, Wrench, CheckCircle2, Award, Clock, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';


function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
     {/* Hero Section */}
     <div className="relative bg-gray-900 h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            className="w-full h-full object-cover opacity-40"
            alt="Fiber optic background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
              ParOptic
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Ειδικοί στην εγκατάσταση οπτικών ινών
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Επικοινωνήστε μαζί μας
              </a>
              <a href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300">
                Οι Υπηρεσίες μας
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Γιατί να μας επιλέξετε</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CheckCircle2 className="w-8 h-8" />}
              title="Αξιοπιστία"
              description="Εγγυημένη ποιότητα εγκατάστασης και υποστήριξης"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Εμπειρία"
              description="Πάνω από 10 χρόνια στον κλάδο"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="24/7 Υποστήριξη"
              description="Άμεση ανταπόκριση σε κάθε πρόβλημα"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Καινοτομία"
              description="Χρήση σύγχρονων τεχνολογιών και εξοπλισμού"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Οι Υπηρεσίες μας</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Network className="w-8 h-8" />}
              title="Εγκατάσταση Οπτικών Ινών"
              description="Επαγγελματική εγκατάσταση δικτύων οπτικών ινών με τα υψηλότερα πρότυπα ποιότητας."
              image="https://paroptic.gr/optikes.jpg"
              features={[
                "Μελέτη και σχεδιασμός δικτύου",
                "Εγκατάσταση καλωδίων",
                "Τερματισμός και πιστοποίηση",
                "Έλεγχος απόδοσης"
              ]}
            />
            <ServiceCard 
              icon={<Building2 className="w-8 h-8" />}
              title="Δίκτυα Κτιρίων"
              description="Σχεδιασμός και υλοποίηση δικτύων οπτικών ινών για επαγγελματικούς χώρους και κτίρια."
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              features={[
                "Εσωτερική καλωδίωση",
                "Εγκατάσταση patch panels",
                "Διασύνδεση ορόφων",
                "Πιστοποίηση δικτύου"
              ]}
            />
            <ServiceCard 
              icon={<Wrench className="w-8 h-8" />}
              title="Συντήρηση & Υποστήριξη"
              description="24/7 τεχνική υποστήριξη και προληπτική συντήρηση των δικτύων σας."
              image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
              features={[
                "Προληπτική συντήρηση",
                "Άμεση αποκατάσταση βλαβών",
                "Απομακρυσμένη υποστήριξη",
                "Τακτικοί έλεγχοι"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="profile" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Εταιρικό Προφίλ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ποιοι Είμαστε</h3>
              <p className="text-gray-600 mb-6">
                Η ParOptic είναι μια πρωτοπόρος εταιρεία στον τομέα των τηλεπικοινωνιών, 
                εξειδικευμένη στην εγκατάσταση και συντήρηση δικτύων οπτικών ινών. 
                Με πολυετή εμπειρία και άρτια καταρτισμένο προσωπικό, προσφέρουμε 
                ολοκληρωμένες λύσεις δικτύωσης υψηλής ταχύτητας.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Users2 className="w-12 h-12 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Έμπειρη Ομάδα</h4>
                    <p className="text-gray-600">Εξειδικευμένοι τεχνικοί με πολυετή εμπειρία</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Πιστοποιήσεις</h4>
                    <p className="text-gray-600">Διεθνείς πιστοποιήσεις και διαπιστεύσεις</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80"
                alt="Τεχνικός ParOptic"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Επικοινωνία</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Τηλέφωνο</h4>
                  <p className="text-gray-600">+30 6951957347</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">paroptic.info@gmail.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Ονοματεπώνυμο"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <input 
                type="text" 
                placeholder="Θέμα"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <textarea 
                placeholder="Μήνυμα"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Αποστολή
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center p-6">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  image,
  features 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  image: string,
  features: string[]
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-blue-400 mb-2">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectCard({ 
  image, 
  title, 
  description 
}: { 
  image: string, 
  title: string, 
  description: string 
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;