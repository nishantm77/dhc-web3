import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ArrowUpRight,
  Hammer, 
  Ruler, 
  HardHat, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook,
  ChevronRight,
  Building2,
  Home,
  Search,
  MoveRight,
  ShieldCheck,
  Users,
  Clock,
  Briefcase,
  Quote
} from 'lucide-react';

// --- Custom Hooks ---

const useSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};

const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver((ioEntries) => {
        setEntries(ioEntries);
      }, { threshold: 0.1, ...options });

      elements.forEach(el => observer.current.observe(el));
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, options]);

  return [setElements, entries];
};

// --- Components ---

const Navigation = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl border-gray-200/50 py-4 lg:py-4 shadow-sm' 
            : 'bg-transparent border-transparent py-6 lg:py-10'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 2xl:px-20">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 md:gap-4 cursor-pointer group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#568DCA] rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl md:text-2xl shadow-lg shadow-[#568DCA]/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                D
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-serif font-black text-2xl md:text-3xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-[#333132]' : 'text-white'}`}>
                  DHC
                </span>
                <span className={`text-[0.6rem] md:text-xs font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-500 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                  Est. 2013
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center rounded-full p-1.5 border shadow-sm transition-all duration-500 ${scrolled ? 'bg-gray-100/50 border-gray-200 backdrop-blur-md' : 'bg-white/10 border-white/10 backdrop-blur-md'}`}>
              {['Home', 'Trades', 'Process', 'Clients', 'Company', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`px-5 xl:px-8 py-2.5 rounded-full text-xs xl:text-sm font-bold tracking-tight transition-all duration-300 ${
                    scrolled 
                      ? 'text-[#333132] hover:bg-white hover:shadow-md' 
                      : 'text-white hover:bg-white hover:text-[#333132]'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <button className={`flex items-center gap-2 px-6 xl:px-8 py-3 xl:py-4 rounded-full font-bold text-xs xl:text-sm tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 ${
                scrolled 
                  ? 'bg-[#333132] text-white hover:bg-[#568DCA] shadow-xl shadow-[#333132]/20' 
                  : 'bg-white text-[#333132] hover:bg-[#568DCA] hover:text-white shadow-xl shadow-black/10'
              }`}>
                Get Quote <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-[#333132] bg-gray-100' : 'text-white bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Fullscreen Overlay */}
      <div className={`fixed inset-0 bg-[#333132] z-40 transition-transform duration-[800ms] cubic-bezier(0.76, 0, 0.24, 1) ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {['Home', 'Trades', 'Process', 'Clients', 'Company', 'Contact'].map((item, i) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter hover:text-[#568DCA] transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
            >
              {item}
            </a>
          ))}
          <button className="mt-8 bg-[#568DCA] text-white px-10 py-4 rounded-full font-bold text-lg animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen min-h-[800px] lg:h-[110vh] flex flex-col justify-center overflow-hidden bg-[#333132]">
    {/* Background Video/Image Parallax */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#333132]/70 via-[#333132]/20 to-[#333132] z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" /> {/* Extra tint for text contrast */}
      <img 
        src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop" 
        alt="Construction Detail" 
        className="w-full h-full object-cover scale-105 animate-slow-zoom"
      />
    </div>

    <div className="relative z-20 max-w-[1800px] mx-auto px-6 lg:px-12 2xl:px-20 w-full pt-20">
      {/* Badge */}
      <div className="mb-8 inline-flex animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#568DCA] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#568DCA]"></span>
          </span>
          <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">DFW Metroplex • Since 2013</span>
        </div>
      </div>

      {/* Main Heading - Responsive & Massive */}
      <h1 className="text-[13vw] md:text-[8rem] lg:text-[9rem] 2xl:text-[11rem] leading-[0.85] font-serif font-bold text-white tracking-tighter mb-8 md:mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
        Precision <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Execution.
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
        <p className="max-w-xl 2xl:max-w-2xl text-lg md:text-xl 2xl:text-2xl text-white/80 font-medium tracking-tight leading-relaxed">
          Specializing in commercial and residential remodeling, drywall, painting, and concrete services across Dallas-Fort Worth. Delivering turnkey solutions for government and private sectors.
        </p>

        {/* Glass Interaction Bar */}
        <div className="w-full lg:w-auto min-w-[300px] lg:min-w-[500px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-3 md:p-4 flex flex-col md:flex-row gap-3 shadow-2xl shadow-black/20">
          <div className="flex-1 bg-white/5 rounded-2xl px-6 py-4 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
            <span className="block text-[#568DCA] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Specialty</span>
            <div className="flex justify-between items-center text-white font-bold tracking-tight text-base md:text-lg">
              <span>Drywall & Painting</span>
              <ChevronRight size={18} className="opacity-50 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          <button className="bg-white text-[#333132] hover:bg-[#568DCA] hover:text-white px-8 py-4 rounded-2xl font-bold tracking-tight transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group active:scale-95">
            Start Project <Search size={18} strokeWidth={3} className="group-hover:scale-110 transition-transform"/>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime = null;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const BentoGrid = () => (
  <section id="company" className="py-24 lg:py-40 2xl:py-56 bg-white px-6 lg:px-12 2xl:px-20">
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-[#333132]"></div>
            <span className="text-[#333132] font-bold tracking-widest uppercase text-xs">About DHC</span>
          </div>
          <h2 className="text-[#333132] text-5xl md:text-7xl 2xl:text-8xl font-serif font-bold tracking-tighter leading-none">
            Proven <br /><span className="text-[#568DCA]">Reliability.</span>
          </h2>
        </div>
        <p className="max-w-md 2xl:max-w-lg text-gray-500 text-lg 2xl:text-xl font-medium leading-relaxed tracking-tight text-right md:text-left mt-8 md:mt-0">
          With four dedicated crews and diversity certifications (MBE, WBE, HUB), we prioritize quick turnaround and cost-effectiveness for projects ranging from $20K to $500K.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(300px,auto)] md:h-[600px] lg:h-[700px]">
        {/* Large Card - Left */}
        <div className="md:col-span-7 relative group overflow-hidden rounded-[2.5rem] bg-[#F5F5F7] shadow-lg hover:shadow-2xl transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            alt="Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col gap-2 items-end">
             <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg">
                MBE / WBE Certified
              </div>
               <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg">
                HUB Partner
              </div>
          </div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <h3 className="text-white text-3xl md:text-5xl 2xl:text-6xl font-serif font-bold tracking-tighter mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              Government & Municipal Trust
            </h3>
            <p className="text-white/80 text-base md:text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Proudly serving the City of Dallas, Arlington, and Fort Worth since 2013 with uncompromising quality.
            </p>
          </div>
        </div>

        {/* Right Column Stack */}
        <div className="md:col-span-5 grid grid-rows-2 gap-6 lg:gap-8">
          {/* Top Right - Dark Card */}
          <div className="bg-[#333132] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl 2xl:text-8xl font-serif font-bold text-white tracking-tighter mb-2">
                <AnimatedNumber end={13} />+
              </h3>
              <p className="text-gray-400 font-medium tracking-tight text-lg">Years of operational excellence in DFW.</p>
            </div>
            <div className="flex justify-end relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#568DCA] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <ArrowUpRight className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            {/* Hover decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-[#568DCA]/20 transition-colors duration-500" />
          </div>

          {/* Bottom Right - Light Card */}
          <div className="bg-[#F5F8FB] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center items-start group border border-transparent hover:border-[#568DCA]/20 transition-colors shadow-lg hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#333132] flex items-center justify-center text-[#568DCA] shadow-xl">
                 <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#333132] tracking-tight leading-none">$<AnimatedNumber end={1} />M</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mt-1">Bonding Capacity</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xs">Fully insured and active participant in TIPS contracts for streamlined government procurement.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc, active, list, index }) => (
  <div 
    className={`group p-8 md:p-12 rounded-[2.5rem] border transition-all duration-700 flex flex-col justify-between min-h-[500px] relative overflow-hidden animate-fade-in-up opacity-0 ${
      active 
        ? 'bg-[#333132] border-[#333132] text-white shadow-2xl transform lg:-translate-y-4' 
        : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-2xl text-[#333132] hover:-translate-y-2'
    }`}
    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
  >
    {/* Hover Gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br from-[#568DCA]/0 to-[#568DCA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
    <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl transition-opacity duration-700 ${active ? 'bg-[#568DCA]/10 opacity-100' : 'bg-gray-100 opacity-0 group-hover:opacity-100'}`} />

    <div className="relative z-10">
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-8 md:mb-12 text-3xl transition-all duration-500 ${
        active ? 'bg-[#568DCA] text-white shadow-lg shadow-[#568DCA]/30' : 'bg-[#F5F5F7] text-[#333132] group-hover:bg-[#568DCA] group-hover:text-white group-hover:shadow-lg'
      }`}>
        <Icon strokeWidth={1.5} size={36} />
      </div>
      <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-serif font-bold tracking-tighter mb-6">{title}</h3>
      <p className={`text-lg md:text-xl font-medium leading-relaxed mb-8 ${active ? 'text-gray-400' : 'text-gray-500'}`}>
        {desc}
      </p>
      
      <div className="h-[1px] w-full bg-current opacity-10 mb-8" />

      {list && (
        <ul className="space-y-4">
            {list.map((item, i) => (
                <li key={i} className={`text-sm md:text-base font-bold flex items-center gap-3 ${active ? 'text-white/80' : 'text-gray-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${active ? 'bg-[#568DCA]' : 'bg-[#333132]'}`} /> {item}
                </li>
            ))}
        </ul>
      )}
    </div>
    
    <div className="relative z-10 flex items-center gap-2 font-bold text-sm tracking-widest uppercase mt-8 md:mt-12 cursor-pointer group/link">
      <span className={`transition-colors duration-300 ${active ? 'text-[#568DCA] group-hover/link:text-white' : 'text-[#333132] group-hover/link:text-[#568DCA]'}`}>View Capabilities</span>
      <MoveRight size={16} className={`transition-transform duration-300 group-hover/link:translate-x-2 ${active ? 'text-[#568DCA]' : 'text-[#333132]'}`} />
    </div>
  </div>
);

const Services = () => (
  <section id="trades" className="py-24 lg:py-40 bg-[#FAFAFA] px-6 lg:px-12 2xl:px-20">
    <div className="max-w-[1800px] mx-auto">
      <div className="mb-20 lg:mb-32">
        <span className="text-[#568DCA] font-bold tracking-widest uppercase text-xs mb-4 block">Self-Performed Capabilities</span>
        <h2 className="text-[#333132] text-5xl md:text-7xl 2xl:text-8xl font-serif font-bold tracking-tighter">
          Trades We <span className="italic text-[#568DCA] relative inline-block">
            Master.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#568DCA] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ServiceCard 
          index={0}
          icon={Hammer}
          title="Interior Systems"
          desc="Specialized crews for high-volume interior finishes, ensuring seamless walls and durable coatings."
          list={["Drywall & Metal Framing", "Painting & Texturing", "Acoustical Ceilings", "Doors, Frames & Hardware"]}
        />
        <ServiceCard 
          index={1}
          icon={HardHat}
          title="Concrete & Masonry"
          desc="Structural and cosmetic concrete work delivering solid foundations and aesthetic exteriors."
          active={true}
          list={["Foundations & Flatwork", "Sidewalks & ADA Ramps", "Power Washing & Sealing", "Earthwork & Landscaping"]}
        />
        <ServiceCard 
          index={2}
          icon={Building2}
          title="Turnkey Solutions"
          desc="Complete project management for office and facility upgrades, handling every detail from demo to done."
          list={["Full Bathroom Remodels", "Office Finish-Outs", "MEP Coordination", "Custom Cabinetry & Millwork"]}
        />
      </div>
    </div>
  </section>
);

const ProcessStep = ({ number, title, text }) => (
  <div className="relative pl-12 md:pl-0 md:pt-12 border-l md:border-l-0 md:border-t border-gray-200 group hover:border-[#568DCA] transition-colors duration-500">
    <div className="absolute left-[-17px] top-0 md:left-0 md:top-[-17px] w-8 h-8 rounded-full bg-[#FAFAFA] border-2 border-gray-300 group-hover:border-[#568DCA] group-hover:bg-[#568DCA] transition-all duration-500 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-white transition-colors duration-500" />
    </div>
    <span className="text-5xl md:text-6xl font-serif font-bold text-gray-100 absolute right-0 top-0 md:top-4 z-0 group-hover:text-[#568DCA]/10 transition-colors duration-500 select-none">
      0{number}
    </span>
    <div className="relative z-10">
      <h3 className="text-xl md:text-2xl font-bold text-[#333132] mb-3 group-hover:text-[#568DCA] transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">{text}</p>
    </div>
  </div>
);

const Process = () => (
  <section id="process" className="py-24 lg:py-32 bg-white px-6 lg:px-12 2xl:px-20">
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between mb-20">
         <div className="max-w-xl">
            <span className="text-[#568DCA] font-bold tracking-widest uppercase text-xs mb-4 block">How We Work</span>
            <h2 className="text-[#333132] text-4xl md:text-6xl font-serif font-bold tracking-tighter">
              The DHC Standard.
            </h2>
         </div>
         <p className="text-gray-500 max-w-md">Our streamlined workflow ensures transparency and precision at every stage of the construction lifecycle.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <ProcessStep number="1" title="Strategic Alignment" text="We begin with a thorough consultation to align with your vision, budget, and timeline requirements." />
        <ProcessStep number="2" title="Pre-Con Precision" text="Detailed estimating, material procurement, and scheduling to prevent delays before they happen." />
        <ProcessStep number="3" title="Agile Execution" text="Our dedicated crews mobilize efficiently, maintaining safety and cleanliness while executing the build." />
        <ProcessStep number="4" title="Quality Assurance" text="Rigorous walkthroughs and inspections ensure the final deliverable meets our high standards." />
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="clients" className="py-24 lg:py-40 bg-[#0a0a0a] text-white overflow-hidden relative">
    {/* Decorative Background */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#568DCA] rounded-full blur-[200px] opacity-10 pointer-events-none" />

    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 2xl:px-20 mb-16 flex items-end justify-between relative z-10">
      <div>
        <span className="text-[#568DCA] font-bold tracking-widest uppercase text-xs mb-4 block">Our Partners</span>
        <h2 className="text-5xl md:text-8xl 2xl:text-9xl font-serif font-bold tracking-tighter text-white/90">
            Trusted <br /> Clients
        </h2>
      </div>
      <div className="hidden md:flex flex-col items-end gap-4">
        <p className="text-gray-400 text-sm uppercase tracking-widest">Swipe to explore</p>
        <div className="flex gap-2">
            <div className="w-12 h-1 bg-[#568DCA] rounded-full animate-pulse" />
            <div className="w-2 h-1 bg-white/20 rounded-full" />
            <div className="w-2 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>

    {/* Horizontal Scroll Snap Container */}
    <div className="flex gap-6 md:gap-8 overflow-x-auto pb-12 px-6 lg:px-12 2xl:px-20 snap-x snap-mandatory scrollbar-hide relative z-10">
      {[
        { title: "City of Dallas", type: "Municipal Government", desc: "Ongoing facility maintenance and renovations.", img: "https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=2070" },
        { title: "Dallas County Prison", type: "Correctional Facility", desc: "High-security partition and flooring upgrades.", img: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070" },
        { title: "Chambers Engineering", type: "Commercial Contractor", desc: "Collaborative large-scale concrete finishing.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089" },
        { title: "F.H. Paschen", type: "Infrastructure Partner", desc: "Drywall and interior systems for public transit hubs.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" },
        { title: "Head Start Assoc.", type: "Educational", desc: "Classroom renovations and safety improvements.", img: "https://images.unsplash.com/photo-1577896335477-2858506f9796?q=80&w=2070" },
      ].map((project, i) => (
        <div key={i} className="min-w-[85vw] md:min-w-[500px] lg:min-w-[600px] h-[50vh] md:h-[60vh] relative snap-center rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10 shadow-2xl">
          <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[#568DCA] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-3 block">{project.type}</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm md:text-lg max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.desc}</p>
            </div>
            
            <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20 group-hover:rotate-[-45deg]">
               <ArrowRight className="text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const TestimonialCard = ({ quote, author, role }) => (
    <div className="bg-[#F9FAFB] p-8 md:p-10 rounded-[2rem] relative">
        <Quote className="text-[#568DCA]/20 absolute top-8 left-8 w-12 h-12" />
        <p className="text-[#333132] font-serif text-lg md:text-xl font-medium leading-relaxed mb-8 relative z-10 pt-6">
            "{quote}"
        </p>
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#333132] flex items-center justify-center text-white font-bold text-sm">
                {author.charAt(0)}
            </div>
            <div>
                <p className="text-sm font-bold text-[#333132] uppercase tracking-wide">{author}</p>
                <p className="text-xs text-gray-500 font-medium">{role}</p>
            </div>
        </div>
    </div>
)

const Testimonials = () => (
    <section className="py-24 bg-white px-6 lg:px-12 2xl:px-20">
        <div className="max-w-[1800px] mx-auto">
             <div className="mb-16 text-center max-w-3xl mx-auto">
                <span className="text-[#568DCA] font-bold tracking-widest uppercase text-xs mb-4 block">Voices of Trust</span>
                <h2 className="text-[#333132] text-4xl md:text-5xl font-serif font-bold tracking-tighter">
                  Partnering for Success.
                </h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <TestimonialCard 
                    quote="DHC's ability to handle complex government contracts while maintaining speed and quality is unmatched. They are our go-to for municipal renovations."
                    author="Michael R."
                    role="Project Director, City of Dallas"
                 />
                 <TestimonialCard 
                    quote="Their drywall and interior crews are efficient and professional. We appreciate the clean job sites and the transparency in their billing."
                    author="Sarah T."
                    role="Facilities Manager, Head Start"
                 />
                 <TestimonialCard 
                    quote="Finding a contractor that balances cost-effectiveness with this level of craftsmanship is rare. DHC delivered our office finish-out ahead of schedule."
                    author="James L."
                    role="VP Operations, Chambers Engineering"
                 />
             </div>
        </div>
    </section>
)

const Contact = () => (
  <section id="contact" className="py-24 lg:py-40 bg-white px-6 lg:px-12 2xl:px-20">
    <div className="max-w-[1400px] mx-auto bg-[#333132] rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#568DCA] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[150px] opacity-5 translate-y-1/3 -translate-x-1/3" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[#568DCA] font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-serif font-bold tracking-tighter mb-6">Start Your <br />Project.</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md font-medium">Contact our team for quick turnaround bids on commercial and government projects. We are ready to mobilize.</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#568DCA] group-hover:border-[#568DCA] transition-all duration-300">
                <Phone className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                <p className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#568DCA] transition-colors">(972) 916-9486</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#568DCA] group-hover:border-[#568DCA] transition-all duration-300">
                <MapPin className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Visit Office</p>
                <p className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#568DCA] transition-colors">2300 Valley View Lane, Ste 855<br />Irving, TX 75062</p>
              </div>
            </div>

             <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#568DCA] group-hover:border-[#568DCA] transition-all duration-300">
                <Mail className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email Bid Requests</p>
                <p className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#568DCA] transition-colors">info@dhctexas.com</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-[2.5rem] p-8 md:p-12 text-[#333132] shadow-xl flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 ml-1">Name</label>
              <input type="text" className="w-full bg-[#F5F5F7] rounded-xl px-5 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-[#568DCA]/20 transition-all border border-transparent focus:border-[#568DCA]/20 placeholder-gray-400" placeholder="Full Name" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 ml-1">Phone</label>
              <input type="text" className="w-full bg-[#F5F5F7] rounded-xl px-5 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-[#568DCA]/20 transition-all border border-transparent focus:border-[#568DCA]/20 placeholder-gray-400" placeholder="(972) ..." />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 ml-1">Company / Organization</label>
            <input type="text" className="w-full bg-[#F5F5F7] rounded-xl px-5 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-[#568DCA]/20 transition-all border border-transparent focus:border-[#568DCA]/20 placeholder-gray-400" placeholder="e.g. City of Arlington" />
          </div>
          <div className="flex-grow">
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 ml-1">Project Details</label>
            <textarea rows="4" className="w-full h-full min-h-[120px] bg-[#F5F5F7] rounded-xl px-5 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-[#568DCA]/20 transition-all resize-none border border-transparent focus:border-[#568DCA]/20 placeholder-gray-400" placeholder="Describe the scope, timeline, and trade requirements..."></textarea>
          </div>
          <button className="w-full bg-[#333132] text-white py-5 rounded-xl font-bold tracking-tight text-lg hover:bg-[#568DCA] transition-colors duration-300 shadow-lg mt-2">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#FAFAFA] pt-20 pb-10 border-t border-gray-200">
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 2xl:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 lg:mb-24">
        <div className="mb-8 md:mb-0">
          <h2 className="text-[6rem] md:text-[10rem] 2xl:text-[14rem] leading-[0.8] font-serif font-bold text-[#333132] tracking-tighter opacity-5 select-none">DHC</h2>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8">
          {['TIPS Contract Holder', 'MBE Certified', 'WBE Certified', 'HUB Partner'].map(cert => (
            <span key={cert} className="text-[#333132] font-bold text-xs md:text-sm tracking-wide bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:border-[#568DCA] transition-colors cursor-default">{cert}</span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between text-xs md:text-sm font-bold text-gray-400 tracking-tight uppercase border-t border-gray-200 pt-8">
        <p>© 2026 Dallas Harmony Construction, LLC. All Rights Reserved.</p>
        <div className="flex gap-6 md:gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#333132] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#333132] transition-colors">Bonding Info</a>
          <a href="#" className="hover:text-[#333132] transition-colors">Careers</a>
          <a href="#" className="hover:text-[#333132] transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased bg-white selection:bg-[#568DCA] selection:text-white overflow-x-hidden">
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Manrope', sans-serif; }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>

      <Navigation scrolled={scrolled} />
      <Hero />
      <BentoGrid />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;