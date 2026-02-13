import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, ArrowRight, Calendar, Clock, Globe, Award, Heart, Users, Sparkles, ChevronDown, CheckCircle, Zap, Shield, Target, Brain, Activity, Flower2, Sun, Moon, TrendingUp, Gift, Bell, BookOpen, Video, Image as ImageIcon, MessageCircle, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export default function LamaFeraLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentOfferSlide, setCurrentOfferSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferSlide((prev) => (prev + 1) % offerBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const menuCategories = [
    {
      title: "Lama Fera",
      icon: Sparkles,
      subcategories: [
        "Lama Fera Basic(L1)-Lam kriya Dhyan",
        "Lama Fera Master Healer(L2)",
        "Lama Fera Grandmaster(L3)",
        "Lama Fera Healing",
        "Lama Fera Distance Healing",
        "Frequently Asked Questions"
      ]
    },
    {
      title: "Healing Therapy Booster",
      icon: Heart,
      subcategories: [
        "Usui Reiki",
        "Kundalini Reiki",
        "Yogmaya Healing",
        "Check your CHAKRA AURA ENERGY",
        "Lam Kriya Diet"
      ]
    },
    {
      title: "Gallery & Testimonials",
      icon: ImageIcon,
      subcategories: [
        "Photo Gallery",
        "Video Gallery",
        "Testimonials",
        "Social Responsibility"
      ]
    }
  ];

  const offerBanners = [
    {
      title: "🎉 Special Offer - Limited Time!",
      subtitle: "Get 20% OFF on Level 1 Workshop",
      description: "Join this Friday and unlock your healing potential",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      cta: "Claim Offer Now"
    },
    {
      title: "✨ Free Distance Healing Session",
      subtitle: "Book Master Healer Workshop Today",
      description: "Receive a complimentary healing session worth ₹2000",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      cta: "Book Workshop"
    },
    {
      title: "🌟 Chakra Assessment - FREE",
      subtitle: "Know Your Energy Blockages",
      description: "Limited slots available - First 50 registrations only",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      cta: "Get Free Assessment"
    }
  ];

  const testimonials = [
    {
      name: "Harshadaa A Darekar",
      text: "From the moment I entered the Monastery, I felt as though I had stepped into a sacred temple of Sai Baba and Lord Buddha, overflowing with divine energy.",
      rating: 5,
      location: "Mumbai, India",
      course: "Master Healer Level 2"
    },
    {
      name: "Guruprasad Nayak H",
      text: "It was a wonderful opportunity to meet Shukla Sir, who taught LF Therapy, Lam Kriya with Lam Diet, in detail with great insight how important it's for every person in life.",
      rating: 5,
      location: "Bangalore, India",
      course: "Grandmaster Level 3"
    },
    {
      name: "Divyanshi Singh",
      text: "I took Lama Fera Master level attunement from here. Satyendra sir is a wonderful guru, the time he gives and the kind of knowledge he imparts, is very valuable.",
      rating: 5,
      location: "Delhi, India",
      course: "Master Healer Level 2"
    }
  ];

  const workshops = [
    {
      title: "LAMA FERA Self-Healing Workshop",
      subtitle: "Level 1 - Lam Kriya Dhyan",
      description: "Heal • Energize • Transform • Chakra Balance • Self-Healing",
      schedule: "Every Friday",
      duration: "10 AM – 5 PM | 7 Hours",
      mode: "Online / Offline",
      language: "English / Hindi",
      location: "Lama Fera Monastery, Pune",
      color: "from-amber-500 to-orange-600",
      image: "🧘‍♀️",
      features: ["Self-healing techniques", "Chakra activation", "Energy cleansing", "Meditation practice"],
      price: "₹5,000",
      discount: "20% OFF"
    },
    {
      title: "Lama Fera Master Healer",
      subtitle: "Level 2",
      description: "Deep Healing • Powerful Energy Activation • Inner Awakening",
      schedule: "Every Saturday",
      duration: "10 AM – 5 PM | 7 Hours",
      mode: "Online / Offline",
      language: "English / Hindi",
      location: "Lama Fera Monastery, Pune",
      color: "from-purple-500 to-pink-600",
      image: "🌟",
      features: ["Advanced healing", "Heal others", "Energy mastery", "Professional practice"],
      price: "₹8,000",
      discount: "Free Session"
    },
    {
      title: "LAMA FERA Distance Healing",
      subtitle: "Healing From Anywhere",
      description: "Fast relief from Stress, Depression, Fear, Anxiety & Negativity",
      schedule: "All 365 days",
      duration: "1 Hour",
      mode: "Online",
      language: "English / Hindi",
      location: "Lama Fera Monastery, Pune",
      color: "from-blue-500 to-cyan-600",
      image: "🌍",
      features: ["Remote healing", "Instant relief", "No travel needed", "Flexible timing"],
      price: "₹1,500",
      discount: "First Session Free"
    },
    {
      title: "Online Garbha Sanskar Classes",
      subtitle: "Prenatal Energy Healing",
      description: "Gift baby, love, positivity, brilliance, starting from the womb",
      schedule: "4 Days per Week",
      duration: "4 Hours",
      mode: "Online",
      language: "English / Hindi",
      location: "Lama Fera Monastery, Pune",
      color: "from-green-500 to-emerald-600",
      image: "👶",
      features: ["Baby wellness", "Mother's health", "Positive energy", "Spiritual growth"],
      price: "₹6,000",
      discount: "Free E-book"
    }
  ];

  const healingTherapies = [
    {
      title: "Usui Reiki",
      icon: Sun,
      description: "Traditional Japanese healing technique for energy balance and stress relief",
      benefits: ["Stress reduction", "Energy balance", "Physical healing", "Mental clarity"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Kundalini Reiki",
      icon: Zap,
      description: "Powerful energy awakening technique to activate your life force",
      benefits: ["Kundalini awakening", "Chakra cleansing", "Spiritual growth", "Energy boost"],
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Yogmaya Healing",
      icon: Flower2,
      description: "Divine feminine energy healing for deep transformation",
      benefits: ["Divine connection", "Emotional healing", "Inner peace", "Transformation"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Chakra Energy Check",
      icon: Target,
      description: "Comprehensive assessment of your energy centers and aura",
      benefits: ["Energy diagnosis", "Blockage detection", "Personalized guidance", "Health insights"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Lam Kriya Diet",
      icon: Activity,
      description: "Spiritual nutrition plan to cleanse and energize your body",
      benefits: ["Body detox", "Energy boost", "Weight balance", "Vitality"],
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Deep Healing Research", icon: Award },
    { number: "4000+", label: "Certified Healers Trained Worldwide", icon: Users },
    { number: "1,00,000+", label: "Lives Transformed Naturally", icon: Heart },
    { number: "1200+", label: "Healing & Wellness Workshops", icon: Sparkles }
  ];

  const healthIssues = [
    "Stress", "Anxiety", "Depression", "Pain", "PCOD", 
    "Thyroid", "BP", "Relationships", "Migraine", "Insomnia",
    "Diabetes", "Arthritis", "Trauma", "Fear", "Anger"
  ];

  const benefits = [
    { title: "Energy Balance", description: "Restore harmony in body, mind & spirit", icon: Shield },
    { title: "Chakra Activation", description: "Unlock your natural healing power", icon: Sparkles },
    { title: "Stress Relief", description: "Find peace in the chaos of daily life", icon: Heart },
    { title: "Physical Healing", description: "Address chronic health challenges naturally", icon: Activity },
    { title: "Emotional Wellness", description: "Release trauma and negativity", icon: Brain },
    { title: "Spiritual Growth", description: "Awaken your higher consciousness", icon: Sun }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      issue: "Chronic Anxiety & Insomnia",
      result: "Completely healed in 6 weeks",
      image: "👩",
      testimonial: "After years of medication, Lama Fera gave me natural peace"
    },
    {
      name: "Rajesh Kumar",
      issue: "Thyroid & Weight Issues",
      result: "Lost 15kg, thyroid normalized",
      image: "👨",
      testimonial: "The Lam Kriya Diet changed my life completely"
    },
    {
      name: "Anita Patel",
      issue: "PCOD & Fertility",
      result: "Conceived naturally after 5 years",
      image: "👩‍⚕️",
      testimonial: "Blessed with a healthy baby through energy healing"
    },
    {
      name: "Vikram Singh",
      issue: "Depression & Career Stress",
      result: "Found purpose and peace",
      image: "👨‍💼",
      testimonial: "Master Healer course transformed my perspective"
    }
  ];

  const faqs = [
    {
      question: "What is Lama Fera Healing?",
      answer: "Lama Fera is a powerful energy healing technique that activates self-healing, balances chakras, removes energy blocks and restores physical, mental & emotional harmony."
    },
    {
      question: "Which health issues can Lama Fera help with?",
      answer: "Stress, anxiety, fear, BP, thyroid, PCOD, pain, migraine, sleep disorders, digestive issues, emotional trauma and chronic health problems."
    },
    {
      question: "Is Lama Fera safe for everyone?",
      answer: "Yes. Lama Fera is 100% natural, non-invasive and safe for all ages, with no medicines and no side effects."
    },
    {
      question: "Can Lama Fera healing be done online or from distance?",
      answer: "Yes. Lama Fera distance healing is highly effective and can be received from anywhere in the world."
    },
    {
      question: "How many sessions are needed for results?",
      answer: "Some experience relief in 1–3 sessions, while chronic issues may need regular sessions for deep and lasting healing."
    },
    {
      question: "What is the difference between Level 1, 2, and 3?",
      answer: "Level 1 focuses on self-healing, Level 2 enables you to heal others professionally, and Level 3 (Grandmaster) allows you to teach and attune others."
    }
  ];

  const galleryImages = [
    { type: "workshop", emoji: "🧘‍♀️", title: "Workshop Session" },
    { type: "healing", emoji: "✨", title: "Healing Practice" },
    { type: "monastery", emoji: "🏛️", title: "Monastery" },
    { type: "meditation", emoji: "🕉️", title: "Meditation" },
    { type: "group", emoji: "👥", title: "Group Healing" },
    { type: "certificate", emoji: "📜", title: "Certification" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-sans">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-2 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call: 9850519111, 8484023530</span>
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>smshukla@lamafera.com</span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23f97316'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='white'%3E🕉️%3C/text%3E%3C/svg%3E"
                alt="Lama Fera Logo"
                className="w-14 h-14"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-orange-600">LAMA FERA MONASTERY</h1>
                <p className="text-xs text-gray-600 hidden sm:block">An Initiative by Lama Fera International</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center gap-1">
                  Lama Fera <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {menuCategories[0].subcategories.map((item, idx) => (
                    <a key={idx} href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center gap-1">
                  Healing Therapy <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {menuCategories[1].subcategories.map((item, idx) => (
                    <a key={idx} href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center gap-1">
                  Gallery <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {menuCategories[2].subcategories.map((item, idx) => (
                    <a key={idx} href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Book Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-orange-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
            <nav className="px-4 py-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              
              {menuCategories.map((category, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium"
                  >
                    <span>{category.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeCategory === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {activeCategory === idx && (
                    <div className="pl-4 space-y-1 mt-1">
                      {category.subcategories.map((sub, subIdx) => (
                        <a key={subIdx} href="#" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a href="#contact" className="block py-2 text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
              
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-medium mt-4">
                Book Free Consultation
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Offer Banner Slider */}
      <section className="relative overflow-hidden">
        <div className="relative h-24 sm:h-32">
          {offerBanners.map((offer, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentOfferSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`h-full bg-gradient-to-r ${offer.gradient} flex items-center justify-center px-4`}>
                <div className="text-center text-white max-w-4xl">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Gift className="w-5 h-5 animate-bounce" />
                    <h3 className="text-lg sm:text-2xl font-bold">{offer.title}</h3>
                  </div>
                  <p className="text-sm sm:text-lg font-medium mb-2">{offer.subtitle}</p>
                  <button className="px-6 py-2 bg-white text-orange-600 rounded-full font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    {offer.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {offerBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentOfferSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentOfferSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-12 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-amber-100/40 to-yellow-100/40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6 animate-fade-in">
              <Award className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">India's First ISO Certified Lama Fera Healing Centre</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Heal. Awaken. Transform.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4 font-light animate-fade-in-up animation-delay-200">
              Welcome to the World-Class
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 animate-fade-in-up animation-delay-400">
              Lama Fera Healing & Training Centre
            </p>

            <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in-up animation-delay-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9 Rating</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">159 Verified Reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-800">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Free Expert Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-500 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300">
                Explore Workshops
              </button>
            </div>

            {/* Scrolling Health Issues */}
            <div className="relative overflow-hidden py-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg animate-fade-in-up animation-delay-1000">
              <div className="flex space-x-4 animate-scroll">
                {[...healthIssues, ...healthIssues].map((issue, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full text-orange-700 font-medium whitespace-nowrap text-sm sm:text-base">
                    {issue}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-orange-100 font-medium px-2">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Healing Therapy Booster Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Healing Therapy Boosters
              </span>
            </h2>
            <p className="text-xl text-gray-600">Complementary healing modalities to enhance your journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {healingTherapies.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-orange-100">
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-12 h-12" />
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{therapy.title}</h3>
                    <p className="text-sm opacity-90">{therapy.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {therapy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full mt-4 px-4 py-2.5 bg-gradient-to-r ${therapy.color} text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshops Section with Images */}
      <section id="workshops" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Upcoming Workshops
              </span>
            </h2>
            <p className="text-xl text-gray-600">Choose your path to healing and transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 border border-orange-200">
                {/* Workshop Image */}
                <div className={`bg-gradient-to-br ${workshop.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 text-7xl opacity-20">{workshop.image}</div>
                  <div className="absolute top-4 left-4">
                    {workshop.discount && (
                      <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                        {workshop.discount}
                      </div>
                    )}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{workshop.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{workshop.subtitle}</p>
                    <p className="text-base opacity-80 mb-4">{workshop.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold">{workshop.price}</div>
                      <div className="text-6xl opacity-30">{workshop.image}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {workshop.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Schedule</p>
                        <p className="text-gray-600 text-sm">{workshop.schedule}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Duration</p>
                        <p className="text-gray-600 text-sm">{workshop.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Mode</p>
                        <p className="text-gray-600 text-sm">{workshop.mode}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${workshop.color} text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <span>Book Workshop Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Real People, Real Results
              </span>
            </h2>
            <p className="text-xl text-gray-600">Transformations that inspire hope</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-200">
                <div className="text-6xl mb-4 text-center">{story.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{story.name}</h3>
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium mb-3 text-center">
                  {story.issue}
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4 text-center">
                  ✓ {story.result}
                </div>
                <p className="text-sm text-gray-600 italic text-center">"{story.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Gallery & Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-600">Experience the energy of our healing monastery</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((item, index) => (
              <div key={index} className="group relative aspect-square bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-orange-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">{item.emoji}</div>
                  <p className="text-xs font-semibold text-gray-700 text-center">{item.title}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
                  <button className="text-white text-sm font-medium">View More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">
            What Our Students Say
          </h2>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 relative">
            <div className="absolute top-6 right-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    — {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                  <p className="text-sm text-orange-600 font-medium">{testimonials[currentTestimonial].course}</p>
                </div>
                <div className="text-5xl">👤</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-orange-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white text-lg font-medium">
              ⭐ 4.9 Rating | 159 Verified Reviews
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg border border-orange-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-orange-100/50 transition-colors"
                >
                  <span className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 text-orange-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Bell className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Healing Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands who have transformed their lives through Lama Fera
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Book Free Consultation
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Call: 9850519111
            </button>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Creating Real Social Impact
            </span>
          </h2>
          <p className="text-2xl text-gray-700 font-semibold mb-2">Lama Fera Foundation</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Spreading Care, Hope & Compassion. Where elders find respect and children find love. 
            Serving Two Generations, One Heart at a Time!
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Learn More About Our Foundation
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Get In Touch With Us
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lama Fera Monastery, Plot no 19, Lane 2, Vasant Park, Near DPS School, Mohammadwadi, Pune - 60
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <a href="mailto:smshukla@lamafera.com" className="text-orange-600 hover:text-orange-700 font-medium">
                      smshukla@lamafera.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call for Free Healing Consultation</h3>
                    <div className="space-y-1">
                      <a href="tel:8484023530" className="block text-orange-600 hover:text-orange-700 font-medium text-lg">
                        8484023530
                      </a>
                      <a href="tel:9850519111" className="block text-orange-600 hover:text-orange-700 font-medium text-lg">
                        9850519111
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-orange-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Free Consultation</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-base"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-base"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-base"
                  required
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-base">
                  <option>Select Workshop/Service</option>
                  <option>Level 1 - Self Healing</option>
                  <option>Level 2 - Master Healer</option>
                  <option>Level 3 - Grandmaster</option>
                  <option>Distance Healing</option>
                  <option>Chakra Assessment</option>
                </select>
                <textarea
                  placeholder="Your Message (Optional)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none text-base"
                />
                <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lama Fera</h3>
                  <p className="text-sm text-gray-400">Healing & Transformation</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                India's First ISO Certified Lama Fera Healing Research & Training Centre
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Lama Fera</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Basic Level (L1)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Master Healer (L2)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Grandmaster (L3)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Lama Fera Healing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Distance Healing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Healing Therapy</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Usui Reiki</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Kundalini Reiki</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Yogmaya Healing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Chakra Assessment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Lam Kriya Diet</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:9850519111" className="text-gray-400 hover:text-orange-400 transition-colors block">9850519111</a>
                    <a href="tel:8484023530" className="text-gray-400 hover:text-orange-400 transition-colors block">8484023530</a>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                  <a href="mailto:smshukla@lamafera.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                    smshukla@lamafera.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Pune, Maharashtra</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              Copyright 2026 | All Rights Reserved | Lama Fera Monastery
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Healing Terms</a>
              <span>|</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Grievance Redressal</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919850519111" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          html {
            font-size: 15px;
          }
        }

        @media (min-width: 1025px) {
          html {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
