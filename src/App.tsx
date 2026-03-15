import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  UtensilsCrossed,
  Menu as MenuIcon,
  X,
  Star,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

const MENU_ITEMS = [
  {
    id: "banh-mi",
    name: "Fusion Rolls (Banh Mi)",
    description: "Crispy baguette roll, spread with egg butter, filled with various savoury ingredients such as pickled carrots, cucumber, coriander, chilli, strips of spring onions, and your choice of protein: roast pork, lemongrass chicken, combination, vegan.",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F01%2F31%2Froasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332.jpg&q=60&c=sc&poi=auto&orient=true&h=512?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cold-rolls",
    name: "Roll-Mi Coldies (Vietnamese Cold Rolls)",
    description: "Fresh garden mint, lettuce, vermicelli noodles, wrapped with vietnamese rice paper, and your choice of meat fillings: satay chicken, pork & prawns, BBQ pork, tofu, veggies only.",
    image: "https://www.coles.com.au/content/dam/coles/inspire-create/auto-images/vietnamese-chicken-rice-paper-rolls-976x549.jpg?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "banh-bao",
    name: "Bao Wow (Banh Bao)",
    description: "A delicious choice of savoury fillings: oink's roast, oink's ball, chic, tofu, picked carrots, cucumber, coriander, chilli, peanuts, stuffed in a soft fluffy steamed envelope bun (only available between 10am-2pm).",
    image: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "bun-bowls",
    name: "Bun Bowls",
    description: "Fresh vermicelli noodles, topped with pickled carrot, cucumber, lettuce, bean sprout, mint, and garlic onion, served with classic vietnamese nuoc mam, and your choice of toppings: beef fillet, lemongrass chicken, prawn, spring rolls, BBQ pork, crispy roast pork, vegan.",
    image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pho",
    name: "Pho-Nomenon (Pho)",
    description: "Traditional vietnamese beef noodle soup, featuring Mr Viet's signature beef broth, with your choice of meat: beef, chicken, combo, vegan.",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "egg-mi",
    name: "Egg Noodle (Mi Tuoi)",
    description: "Fresh egg noodles served home style chicken broth, topped with bean sprouts, and your choice of meat: chicken, prawn, pork, combo.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "rice-stix",
    name: "Rice Stix (Hu Tieu)",
    description: "Thin rice noodles served in home style chicken broth, with your choice of meat: chicken, prawn, pork.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "broken-rice",
    name: "Broken Rice (Com Tam)",
    description: "Deliciously marinated grilled meats: pork chop, lemongrass chicken, roast pork, vegan, together with shredded pork, ffried egg, served over in steam fractured ricce grains, cucumber, picked vegetable, and dressed with vietnamese nuoc mam",
    image: "https://exotrails.com/wp-content/uploads/2025/05/Com-Tam_3.jpg?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "bun-bo-hue",
    name: "Bun Bo Hue",
    description: "A vibrant rich and spicy noodle soup, savoury broth made from beef bones, lemongrass, and a blend of aromatic spices, with your choice of meat: beef, pork, chicken, combo, vegan",
    image: "https://takestwoeggs.com/wp-content/uploads/2024/10/Bun-Bo-Hue-Spicy-Vietnamese-Beef-Noodle-Soup-7.webp?auto=format&fit=crop&q=80&w=800",
  },
];

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    rating: 5,
    comment: "Best Banh Mi in Adelaide! The bread is always perfectly crispy and the fillings are so fresh. Highly recommend the roast pork.",
    date: "2 weeks ago",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "David Chen",
    rating: 5,
    comment: "Authentic flavors that remind me of street food in Ho Chi Minh City. The Pho broth is incredibly rich and clear. Great service too!",
    date: "1 month ago",
    avatar: "DC"
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 4,
    comment: "Love the cold rolls here. They are huge and the peanut sauce is delicious. Perfect for a quick and healthy lunch.",
    date: "3 days ago",
    avatar: "EW"
  },
  {
    id: 4,
    name: "Michael T.",
    rating: 5,
    comment: "Mr Viet is a hidden gem in James Place. Fast service, friendly staff, and the broken rice is simply outstanding.",
    date: "2 months ago",
    avatar: "MT"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-viet-yellow selection:text-viet-wood">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-viet-red rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              MV
            </div>
            <span className={`text-2xl font-display font-bold tracking-tight ${scrolled ? 'text-stone-900' : 'text-white'}`}>
              Mr Viet
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Menu', 'Reviews', 'Location', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                  scrolled ? 'text-stone-600 hover:text-viet-red' : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:0882123626"
              className="bg-viet-red text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-md"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {['About', 'Menu', 'Reviews', 'Location', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-bold text-stone-800 py-2 border-b border-stone-50"
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:0882123626"
              className="bg-viet-red text-white text-center py-4 rounded-xl font-bold mt-2"
            >
              Call (08) 8212 3626
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://hiddenhoian.com/wp-content/uploads/2018/11/vietnamese-food-overview.jpg?auto=format&fit=crop&q=80&w=1920"
            alt="Vietnamese Street Food"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-viet-yellow text-viet-wood rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Authentic Street Food
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight">
              Mr Viet
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Bringing the vibrant flavors of Vietnamese street food to the heart of Adelaide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('menu')}
                className="btn-primary group flex items-center justify-center gap-2"
              >
                View Menu <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:0882123626"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=1000"
                  alt="Traditional Pho Bowl"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-viet-yellow p-8 rounded-3xl shadow-xl hidden lg:block">
                <UtensilsCrossed size={48} className="text-viet-wood" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-viet-red font-bold uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8 text-stone-900">
                Taste the Soul of <br />
                <span className="text-viet-red">Vietnamese Streets</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Mr Viet brings authentic Vietnamese street food flavours to Adelaide. From freshly baked banh mi to comforting bowls of pho, we serve traditional Vietnamese dishes made with fresh ingredients and bold flavours.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-10">
                Our kitchen is a celebration of heritage, where every recipe has been passed down through generations to ensure you experience the true essence of Vietnam right here in South Australia.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-viet-red">100%</h4>
                  <p className="text-sm text-stone-500 uppercase font-semibold">Fresh Ingredients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-viet-red">Daily</h4>
                  <p className="text-sm text-stone-500 uppercase font-semibold">Baked Baguettes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-viet-red font-bold uppercase tracking-widest text-sm">The Menu</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-stone-900">
              Our Signature Dishes
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Explore our curated selection of authentic Vietnamese street food, prepared fresh every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="menu-card group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-stone-900">{item.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-stone-400 italic mb-8">Prices and availability may vary. Visit us in-store for the full daily menu.</p>
            <a 
              href="tel:0882123626"
              className="inline-flex items-center gap-2 text-viet-red font-bold hover:underline"
            >
              Order for Pickup: (08) 8212 3626
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-viet-red font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-stone-900">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-viet-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-bold text-stone-900">4.2 / 5.0</span>
              <span className="text-stone-400 text-sm">on Google Maps</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 p-8 rounded-3xl border border-stone-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <Quote className="absolute top-6 right-6 text-stone-200 group-hover:text-viet-yellow/20 transition-colors" size={40} />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-viet-red text-white flex items-center justify-center rounded-full font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 leading-tight">{review.name}</h4>
                    <p className="text-xs text-stone-400">{review.date}</p>
                  </div>
                </div>

                <div className="flex text-viet-yellow mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < review.rating ? "currentColor" : "none"} 
                      className={i < review.rating ? "" : "text-stone-300"}
                    />
                  ))}
                </div>

                <p className="text-stone-600 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://www.google.com/maps/place/Mr+Viet/@-34.9247165,138.6012622,17z/data=!3m1!5s0x6ab0ced661e19073:0xc7addf8a045f0415!4m6!3m5!1s0x6ab0ced6682f397f:0x8e48aeeaf18734fe!8m2!3d-34.9233087!4d138.600702!16s%2Fg%2F11dxdf11w1?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-stone-200 text-stone-600 px-8 py-3 rounded-full font-bold hover:bg-stone-50 hover:border-stone-300 transition-all"
            >
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 mr-1" />
              Write a Review
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-viet-red font-bold uppercase tracking-widest text-sm">Find Us</span>
              <h2 className="text-4xl font-display font-bold mt-4 mb-8 text-stone-900">
                Visit Mr Viet
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-viet-cream rounded-2xl flex items-center justify-center text-viet-red shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-stone-600">8/20 James Pl, Adelaide SA 5000, Australia</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Mr+Viet+Adelaide+8/20+James+Pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-viet-red text-sm font-bold mt-2 inline-block hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-viet-cream rounded-2xl flex items-center justify-center text-viet-red shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-stone-600">Monday - Saturday</p>
                    <p className="text-stone-900 font-semibold">09:00 AM - 04:30 PM</p>
                    <p className="text-stone-500 text-sm mt-1">Closed on Sundays</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-viet-cream rounded-2xl flex items-center justify-center text-viet-red shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-stone-600">(08) 8212 3626</p>
                    <p className="text-stone-400 text-sm">Call us for takeaway orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-stone-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.272147742013!2d138.5986872767425!3d-34.92471647284067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced422222221%3A0x1d0330161a000000!2s8%2F20%20James%20Pl%2C%20Adelaide%20SA%205000!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mr Viet Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-viet-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Hungry for Authentic Flavors?</h2>
          <p className="text-xl text-white/80 mb-10">
            Visit us today at James Place or call ahead to place your order for pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:0882123626"
              className="bg-white text-viet-red px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors shadow-xl flex items-center gap-3"
            >
              <Phone size={24} /> (08) 8212 3626
            </a>
            <div className="flex gap-6">
              <a href="#" className="hover:text-viet-yellow transition-colors"><Instagram size={32} /></a>
              <a href="#" className="hover:text-viet-yellow transition-colors"><Facebook size={32} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-viet-red rounded flex items-center justify-center text-white font-bold text-sm">
                  MV
                </div>
                <span className="text-xl font-display font-bold text-white">Mr Viet</span>
              </div>
              <p className="text-sm leading-relaxed">
                Authentic Vietnamese street food in the heart of Adelaide. Fresh ingredients, traditional recipes, and bold flavours.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="hover:text-white transition-colors">Our Menu</button></li>
                <li><button onClick={() => scrollToSection('location')} className="hover:text-white transition-colors">Location</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h5>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-viet-red shrink-0" />
                  <span>8/20 James Pl, Adelaide SA 5000</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-viet-red shrink-0" />
                  <span>(08) 8212 3626</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Hours</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span className="text-white">09:00 - 16:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-viet-red font-bold">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-4 text-xs">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
            <p>© {new Date().getFullYear()} Mr Viet Adelaide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
