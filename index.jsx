 import React from 'react';
import { ChevronDown, Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

// Assume we've imported our custom fonts in the main CSS file
// @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;600&display=swap');

const Header = () => (
  <header className="bg-rose-50 bg-opacity-90 p-4 fixed w-full top-0 z-10 font-montserrat">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-cormorant-garamond font-semibold text-rose-900">AmritāAura</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#about" className="text-rose-800 hover:text-rose-600 transition duration-300">About</a></li>
        <li><a href="#products" className="text-rose-800 hover:text-rose-600 transition duration-300">Products</a></li>
        <li><a href="#science" className="text-rose-800 hover:text-rose-600 transition duration-300">Our Science</a></li>
        <li><a href="#contact" className="text-rose-800 hover:text-rose-600 transition duration-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/1920/1080')"}}></div>
    <div className="absolute inset-0 bg-white bg-opacity-70"></div>
    <div className="relative z-10 text-center">
      <h2 className="font-cormorant-garamond text-5xl font-semibold text-rose-900 mb-4">Blend of Ayurveda and Modern Science</h2>
      <p className="font-montserrat text-xl text-rose-700 mb-8">Discover the perfect harmony for your skin</p>
      <button className="bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition duration-300 font-montserrat">
        Explore Our Products
      </button>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <ChevronDown className="text-rose-600 animate-bounce" size={32} />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-rose-50">
    <div className="container mx-auto">
      <h2 className="font-cormorant-garamond text-4xl font-semibold text-center text-rose-900 mb-12">About AmritāAura</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/api/placeholder/600/400" alt="Natural ingredients" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <p className="font-montserrat text-lg text-rose-700 mb-6">
            AmritāAura blends Ayurvedic traditions with modern skincare science to create products that nourish and rejuvenate your skin naturally.
          </p>
          <p className="font-montserrat text-lg text-rose-700">
            Our journey begins with handmade soaps, crafted with care and infused with the wisdom of ancient healing practices and cutting-edge dermatological research.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section id="products" className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="font-cormorant-garamond text-4xl font-semibold text-center text-rose-900 mb-12">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {['Winter Wellness Soap', 'Summer Soothe Soap', 'All-Season Harmony Soap'].map((product) => (
          <div key={product} className="bg-rose-50 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <img src="/api/placeholder/400/300" alt={product} className="w-full h-56 object-cover mb-6 rounded" />
            <h3 className="font-cormorant-garamond text-2xl font-semibold text-rose-800 mb-4">{product}</h3>
            <p className="font-montserrat text-rose-700 mb-6">Experience the perfect blend of nature and science for your skin.</p>
            <button className="bg-rose-400 text-white px-6 py-2 rounded-full hover:bg-rose-500 transition duration-300 font-montserrat">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Science = () => (
  <section id="science" className="py-20 bg-rose-50">
    <div className="container mx-auto">
      <h2 className="font-cormorant-garamond text-4xl font-semibold text-center text-rose-900 mb-12">Our Science</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <Leaf className="mx-auto text-rose-600 mb-6" size={80} />
          <h3 className="font-cormorant-garamond text-3xl font-semibold text-rose-800 mb-6 text-center">Ayurveda Meets Modern Dermatology</h3>
          <p className="font-montserrat text-lg text-rose-700 text-center">
            We combine time-tested Ayurvedic ingredients with scientifically proven compounds to create skincare solutions that work in harmony with your body's natural processes.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h3 className="font-cormorant-garamond text-3xl font-semibold text-rose-800 mb-6">Did You Know?</h3>
          <ul className="list-disc list-inside text-rose-700 font-montserrat">
            <li className="mb-4">69% of people check ingredients, but only 21% understand their use.</li>
            <li className="mb-4">Gen Z is 30% more inclined toward natural and eco-friendly products.</li>
            <li>63% of consumers buy skincare products monthly, often switching brands.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="font-cormorant-garamond text-4xl font-semibold text-center text-rose-900 mb-12">Get in Touch</h2>
      <form className="max-w-lg mx-auto">
        <input type="text" placeholder="Your Name" className="w-full mb-6 p-3 rounded-lg bg-rose-50 text-rose-800 placeholder-rose-400" />
        <input type="email" placeholder="Your Email" className="w-full mb-6 p-3 rounded-lg bg-rose-50 text-rose-800 placeholder-rose-400" />
        <textarea placeholder="Your Message" className="w-full mb-6 p-3 rounded-lg bg-rose-50 text-rose-800 placeholder-rose-400" rows="4"></textarea>
        <button type="submit" className="bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition duration-300 font-montserrat w-full">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-rose-100 text-rose-800 py-12 font-montserrat">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="font-cormorant-garamond text-3xl font-semibold mb-2">AmritāAura</h2>
          <p>Blending tradition with science for your skin</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-rose-600 transition duration-300"><Instagram size={24} /></a>
          <a href="#" className="hover:text-rose-600 transition duration-300"><Facebook size={24} /></a>
          <a href="#" className="hover:text-rose-600 transition duration-300"><Twitter size={24} /></a>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p>&copy; 2024 AmritāAura. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="font-montserrat text-rose-800">
    <Header />
    <main>
      <Hero />
      <About />
      <Products />
      <Science />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
