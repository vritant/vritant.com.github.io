
import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Linkedin, 
  Mail, 
  Phone,
  Plus, 
  Minus,
  Coffee,
  Music,
  Leaf,
  Beaker,
  Sword,
  Award,
  ChevronRight
} from 'lucide-react';
import { BIO_MARKDOWN, EXPERIENCES, ARTICLES, HOBBIES, FEATURED_PROJECT, EDUCATION, ACHIEVEMENTS } from './constants';

const SimpleMarkdown: React.FC<{ content: string; small?: boolean }> = ({ content, small }) => {
  const lines = content.split('\n');
  return (
    <div className={small ? "space-y-4" : "space-y-6"}>
      {lines.map((line, i) => {
        if (line.startsWith('# ')) return (
          <h1 key={i} className={`${small ? "text-3xl lg:text-4xl" : "text-5xl lg:text-7xl"} font-black mb-4 tracking-tighter leading-[0.85] text-white uppercase brand-font`}>
            {line.replace('# ', '')}
          </h1>
        );
        if (line.trim() === '') return null;
        
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} className={`${small ? "text-base lg:text-lg" : "text-xl lg:text-2xl"} text-slate-400 font-light leading-snug`}>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

const App: React.FC = () => {
  const [showHobbies, setShowHobbies] = useState(false);

  return (
    <div className="max-w-[1600px] mx-auto space-y-6 py-4 px-4 md:py-8 md:px-8 pb-32">
      
      {/* Row 1: Intro (Small) & Professional Journey (Big) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Intro Tile (4/12 - Small) */}
        <div className="md:col-span-4 slide-card p-8 lg:p-12 flex flex-col justify-center bg-[#111111] border-indigo-500/10 min-h-[400px]">
          <SimpleMarkdown content={BIO_MARKDOWN} small />
          <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-slate-800/50">
            <a 
              href="https://linkedin.com/in/vritant" 
              target="_blank" 
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all shadow-xl"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:adarshvritant@gmail.com" 
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919881122114" 
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all"
              title="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Journey Card (8/12 - Big) */}
        <div className="md:col-span-8 slide-card p-8 lg:p-16 flex flex-col justify-between bg-[#141414]">
          <div className="flex justify-between items-start mb-10">
            <h3 className="text-4xl lg:text-6xl font-black brand-font leading-[0.9] text-white uppercase tracking-tighter">
              Professional<br/>Journey.
            </h3>
            <div className="hidden lg:flex flex-col items-end opacity-40">
              <span className="text-[9px] font-black tracking-[0.4em] text-white uppercase">Experience Log</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-1 lg:mt-auto">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="flex gap-4 group cursor-default items-center py-2.5 border-b border-white/[0.03] last:border-0 lg:border-0">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col">
                    <span className="text-white font-black text-[13px] lg:text-[15px] uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors truncate">
                      {exp.role}
                    </span>
                    <div className="flex items-center gap-x-1.5 mt-0.5">
                      <span className="text-slate-500 font-bold text-[8px] uppercase tracking-widest truncate">
                        {exp.company}
                      </span>
                      <div className="w-0.5 h-0.5 rounded-full bg-slate-800 shrink-0"></div>
                      <span className="text-slate-600 font-black text-[8px] tabular-nums tracking-widest uppercase shrink-0">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Featured Project (Full Width) */}
      <div className="slide-card p-0 relative overflow-hidden group min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[600px]">
          <div className="p-8 lg:p-20 flex flex-col justify-center bg-[#141414] relative z-10">
            <h3 className="text-5xl lg:text-8xl font-black brand-font mb-6 text-white uppercase tracking-tighter leading-none">{FEATURED_PROJECT.name}</h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light max-w-lg">
              {FEATURED_PROJECT.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {FEATURED_PROJECT.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-zinc-900 rounded-md text-[9px] font-black uppercase tracking-widest text-indigo-300 border border-zinc-800">
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <a 
                href={FEATURED_PROJECT.link} 
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105"
              >
                Explore Solution <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="bg-[#111111] overflow-hidden relative min-h-[400px] md:min-h-full flex items-center justify-center p-4">
            <div className="w-full h-full max-h-[90%] rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] flex items-center justify-center border border-white/5">
              <img 
                src={FEATURED_PROJECT.imageUrl} 
                className="w-full h-full object-contain" 
                alt="AI Business Model Canvas UI" 
                onError={(e) => {
                  // Final safety check if Data URI fails or BMC.png is missing
                  console.error("Project image failed to load");
                }}
              />
            </div>
            {/* Ambient glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />
          </div>
        </div>
      </div>

      {/* Row 3: Writing (Big) & Education (Small) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Writing (8/12 - Big) */}
        <div className="md:col-span-8 slide-card p-8 lg:p-16 bg-[#141414]">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-4xl lg:text-6xl font-black brand-font text-white uppercase tracking-tighter leading-[0.9]">Writing.</h3>
            </div>
            <a href="https://linkedin.com/in/vritant" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
              Archive <ChevronRight size={12} />
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ARTICLES.map((article, i) => (
              <a key={i} href={article.link} target="_blank" className="block group">
                <div className="aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-4 border border-zinc-800 relative">
                  <img 
                    src={article.imageUrl} 
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    alt={article.title} 
                  />
                  <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all">
                    <ExternalLink size={16} />
                  </div>
                </div>
                <h4 className="font-black text-slate-100 group-hover:text-indigo-400 group-hover:underline text-xl leading-tight transition-colors mb-2">
                  {article.title}
                </h4>
                <div className="flex items-center gap-3">
                   <p className="text-[9px] text-indigo-500 uppercase font-black tracking-widest">
                    {article.platform}
                  </p>
                  <p className="text-[9px] text-slate-600 uppercase font-black tracking-widest">
                    {article.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Education (4/12 - Small) */}
        <div className="md:col-span-4 slide-card p-8 lg:p-12 flex flex-col justify-between bg-[#0f0f0f] min-h-[400px]">
          <div>
            <h3 className="text-3xl lg:text-4xl font-black brand-font mb-10 leading-[0.9] text-white uppercase tracking-tighter">
              Academic<br/>Foundations.
            </h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col group">
                  <div className="flex justify-between items-start mb-1">
                    <div className="space-y-0.5">
                      <h4 className="font-black text-sm text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-[9px] text-indigo-500 font-black uppercase tracking-widest">{edu.school}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 py-1 px-2 bg-white/5 rounded border border-white/5 w-fit mt-1">
                    <Award size={8} className="text-amber-500" />
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{edu.achievement}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-6 border-t border-slate-800/50">
              <ul className="space-y-2">
                {ACHIEVEMENTS.slice(0, 3).map((ach, i) => (
                  <li key={i} className="text-[10px] text-slate-500 flex items-start gap-2 group cursor-default">
                    <div className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                    <span className="font-bold uppercase tracking-tight">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: Personal Archetypes (Full Width) */}
      <div className="slide-card overflow-hidden bg-[#111111]">
        <button 
          onClick={() => setShowHobbies(!showHobbies)}
          className="w-full p-8 lg:p-20 flex items-center justify-between group hover:bg-zinc-800/10 transition-all text-left"
        >
          <div>
            <h3 className="text-4xl lg:text-8xl font-black brand-font text-white uppercase tracking-tighter leading-none">Personal Archetypes.</h3>
            <p className="text-[10px] lg:text-xs text-slate-500 mt-4 font-black uppercase tracking-[0.6em] max-w-lg">Engineered creativity outside the terminal.</p>
          </div>
          <div className={`h-16 w-16 lg:h-24 lg:w-24 rounded-full border-2 border-white flex items-center justify-center transition-all ${showHobbies ? 'bg-white text-black' : 'group-hover:bg-white group-hover:text-black group-hover:scale-105'}`}>
            {showHobbies ? <Minus size={32} /> : <Plus size={32} />}
          </div>
        </button>

        {showHobbies && (
          <div className="p-8 lg:p-20 bg-black border-t border-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HOBBIES.map((hobby, i) => (
                <div key={i} className="bg-[#141414] p-8 lg:p-10 rounded-[32px] border border-zinc-800 shadow-2xl flex flex-col justify-between min-h-[500px]">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-4 bg-zinc-900 rounded-xl text-indigo-500">
                        {hobby.name.includes('Dungeons') && <Sword size={32} />}
                        {hobby.name.includes('Coffee') && <Coffee size={32} />}
                        {hobby.name.includes('Hydroponics') && <Leaf size={32} />}
                        {hobby.name.includes('Fermentation') && <Beaker size={32} />}
                        {hobby.name.includes('Guitar') && <Music size={32} />}
                      </div>
                      <span className="text-[9px] font-black text-slate-800 uppercase tracking-widest">ID:0{i+1}</span>
                    </div>
                    <h4 className="text-3xl font-black mb-4 text-white uppercase tracking-tighter leading-none">{hobby.name}</h4>
                    <p className="text-base text-slate-400 leading-relaxed font-light mb-8">{hobby.description}</p>
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 opacity-50 shadow-inner flex items-center justify-center">
                    <img src={hobby.imageUrl} className="w-full h-full object-cover" alt={hobby.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-20 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 mt-16 opacity-40 hover:opacity-100 transition-opacity">
         <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="brand-font font-black text-xl text-white uppercase">Vritant Jain</span>
            </div>
            <p className="text-slate-500 text-[8px] font-black uppercase tracking-[0.6em]">Portfolio Systems &copy; {new Date().getFullYear()}</p>
         </div>
         
         <div className="flex flex-wrap justify-center gap-8 text-slate-600 text-[9px] font-black uppercase tracking-[0.4em]">
            <a href="mailto:adarshvritant@gmail.com" className="hover:text-white transition-colors lowercase tracking-normal font-medium text-xs">adarshvritant@gmail.com</a>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Journey</a>
              <a href="#" className="hover:text-white transition-colors">Products</a>
              <a href="#" className="hover:text-white transition-colors">Lab</a>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default App;
