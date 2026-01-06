import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { AppTile } from "@shared/schema";
import demogorgonImage from "@assets/image_1767654775177.png";
import fortnitePlaneImage from "@assets/IMG_1894_1767676650912.jpeg";

function SquidDivider() {
  return (
    <div className="flex items-center justify-center gap-10 my-4 md:my-6">
      <div className="relative animate-squid-pulse-1">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle 
            cx="12" 
            cy="12" 
            r="9" 
            stroke="#ff0080" 
            strokeWidth="2.5"
            style={{ filter: 'drop-shadow(0 0 6px #ff0080) drop-shadow(0 0 12px #ff0080)' }}
          />
        </svg>
      </div>
      <div className="relative animate-squid-pulse-2">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path 
            d="M12 3L21 20H3L12 3Z" 
            stroke="#00ff9f" 
            strokeWidth="2.5"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 0 6px #00ff9f) drop-shadow(0 0 12px #00ff9f)' }}
          />
        </svg>
      </div>
      <div className="relative animate-squid-pulse-3">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect 
            x="4" 
            y="4" 
            width="16" 
            height="16" 
            stroke="#ff0080" 
            strokeWidth="2.5"
            style={{ filter: 'drop-shadow(0 0 6px #ff0080) drop-shadow(0 0 12px #ff0080)' }}
          />
        </svg>
      </div>
    </div>
  );
}

function AppTileCard({ 
  tile, 
  animationClass,
  onHover,
  onLeave 
}: { 
  tile: { id: number; title: string; category: string; href: string }; 
  animationClass: string;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <a
      href={tile.href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`tile-${tile.id}`}
      className={`
        relative block p-4 md:p-5
        rounded-[14px_14px_10px_14px]
        text-white no-underline
        transition-all duration-300 ease-[cubic-bezier(.17,.67,.45,1.32)]
        hover:-translate-y-1 hover:scale-[1.02]
        active:-translate-y-1 active:scale-[1.02]
        ${animationClass}
      `}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.15) 0%, rgba(0, 255, 159, 0.1) 50%, rgba(123, 104, 238, 0.15) 100%)',
        border: '1px solid rgba(255, 0, 128, 0.25)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.4)',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
    >
      <span 
        className="block text-sm md:text-base font-medium"
        style={{ 
          background: 'linear-gradient(90deg, #fff, #e0d4ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {tile.title}
      </span>
      <span 
        className="block mt-1.5 text-[0.6rem] md:text-[0.65rem] tracking-[0.2em]"
        style={{ color: 'rgba(0, 255, 159, 0.7)' }}
      >
        {tile.category}
      </span>
    </a>
  );
}

function SkyBattle() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute inset-x-0 top-0 h-[35%]"
        style={{
          background: 'linear-gradient(to bottom, rgba(40, 25, 35, 0.6) 0%, rgba(60, 20, 30, 0.3) 40%, transparent 100%)',
        }}
      />
      <div className="absolute animate-plane-1" style={{ top: '6%', left: '10%' }}>
        <svg className="w-10 h-10 opacity-40" viewBox="0 0 64 64" fill="none">
          <path d="M56 28L44 24V16c0-1.5-1-3-3-3s-3 1.5-3 3v8L14 28c-1.5 0.5-2.5 1.5-2.5 2.5s1 2 2.5 2l24-1.5v8l-5 3v3l7.5-2 7.5 2v-3l-5-3V31l24 1.5c1.5 0 2.5-0.8 2.5-2S57.5 28.5 56 28z" fill="rgba(80,40,50,0.9)"/>
        </svg>
      </div>
      
      <div className="absolute animate-plane-2" style={{ top: '10%', left: '22%' }}>
        <svg className="w-7 h-7 opacity-30" viewBox="0 0 64 64" fill="none">
          <path d="M56 28L44 24V16c0-1.5-1-3-3-3s-3 1.5-3 3v8L14 28c-1.5 0.5-2.5 1.5-2.5 2.5s1 2 2.5 2l24-1.5v8l-5 3v3l7.5-2 7.5 2v-3l-5-3V31l24 1.5c1.5 0 2.5-0.8 2.5-2S57.5 28.5 56 28z" fill="rgba(60,30,40,0.8)"/>
        </svg>
      </div>
      
      <div className="absolute animate-plane-3" style={{ top: '4%', right: '12%' }}>
        <svg className="w-12 h-12 opacity-45" viewBox="0 0 64 64" fill="none" style={{ transform: 'scaleX(-1)' }}>
          <path d="M56 28L44 24V16c0-1.5-1-3-3-3s-3 1.5-3 3v8L14 28c-1.5 0.5-2.5 1.5-2.5 2.5s1 2 2.5 2l24-1.5v8l-5 3v3l7.5-2 7.5 2v-3l-5-3V31l24 1.5c1.5 0 2.5-0.8 2.5-2S57.5 28.5 56 28z" fill="rgba(90,45,55,0.9)"/>
        </svg>
      </div>
      
      <div className="absolute animate-plane-4" style={{ top: '12%', right: '28%' }}>
        <svg className="w-8 h-8 opacity-35" viewBox="0 0 64 64" fill="none" style={{ transform: 'scaleX(-1)' }}>
          <path d="M56 28L44 24V16c0-1.5-1-3-3-3s-3 1.5-3 3v8L14 28c-1.5 0.5-2.5 1.5-2.5 2.5s1 2 2.5 2l24-1.5v8l-5 3v3l7.5-2 7.5 2v-3l-5-3V31l24 1.5c1.5 0 2.5-0.8 2.5-2S57.5 28.5 56 28z" fill="rgba(70,35,45,0.8)"/>
        </svg>
      </div>

      <div className="absolute w-2 h-2 rounded-full animate-bullet-1" style={{ top: '8%', left: '15%', background: 'radial-gradient(circle, #ff6b35 0%, #ff4500 50%, transparent 100%)', boxShadow: '0 0 8px #ff4500' }} />
      <div className="absolute w-2 h-2 rounded-full animate-bullet-2" style={{ top: '5%', right: '20%', background: 'radial-gradient(circle, #ff6b35 0%, #ff4500 50%, transparent 100%)', boxShadow: '0 0 8px #ff4500' }} />
      <div className="absolute w-1.5 h-1.5 rounded-full animate-bullet-3" style={{ top: '12%', left: '40%', background: 'radial-gradient(circle, #ffa500 0%, #ff6600 50%, transparent 100%)', boxShadow: '0 0 6px #ff6600' }} />
      <div className="absolute w-2 h-2 rounded-full animate-bullet-4" style={{ top: '6%', left: '55%', background: 'radial-gradient(circle, #ff5533 0%, #cc3300 50%, transparent 100%)', boxShadow: '0 0 10px #ff3300' }} />
      <div className="absolute w-1.5 h-1.5 rounded-full animate-bullet-5" style={{ top: '10%', right: '35%', background: 'radial-gradient(circle, #ffaa00 0%, #ff7700 50%, transparent 100%)', boxShadow: '0 0 6px #ff7700' }} />
      <div className="absolute w-2 h-2 rounded-full animate-bullet-6" style={{ top: '4%', left: '70%', background: 'radial-gradient(circle, #ff6b35 0%, #ff4500 50%, transparent 100%)', boxShadow: '0 0 8px #ff4500' }} />
      
      <div className="absolute w-8 h-8 animate-explosion-1" style={{ top: '9%', left: '30%' }}>
        <div className="w-full h-full rounded-full blur-lg" style={{ background: 'radial-gradient(circle, rgba(255,120,40,0.7) 0%, rgba(255,60,10,0.4) 40%, transparent 100%)' }} />
      </div>
      <div className="absolute w-6 h-6 animate-explosion-2" style={{ top: '6%', right: '45%' }}>
        <div className="w-full h-full rounded-full blur-lg" style={{ background: 'radial-gradient(circle, rgba(255,180,60,0.6) 0%, rgba(255,80,20,0.3) 40%, transparent 100%)' }} />
      </div>
      <div className="absolute w-10 h-10 animate-explosion-3" style={{ top: '7%', left: '60%' }}>
        <div className="w-full h-full rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(255,100,30,0.5) 0%, rgba(200,50,10,0.2) 50%, transparent 100%)' }} />
      </div>
      <div className="absolute w-5 h-5 animate-explosion-4" style={{ top: '11%', right: '25%' }}>
        <div className="w-full h-full rounded-full blur-md" style={{ background: 'radial-gradient(circle, rgba(255,150,50,0.6) 0%, rgba(255,80,20,0.3) 50%, transparent 100%)' }} />
      </div>
      
      <div className="absolute w-16 h-16 animate-flash-1" style={{ top: '5%', left: '25%' }}>
        <div className="w-full h-full rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(255,200,150,0.4) 0%, transparent 70%)' }} />
      </div>
      <div className="absolute w-20 h-20 animate-flash-2" style={{ top: '3%', right: '30%' }}>
        <div className="w-full h-full rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(255,180,120,0.35) 0%, transparent 70%)' }} />
      </div>
    </div>
  );
}

function DemogorgonBackground({ eyesActive }: { eyesActive: boolean }) {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      data-testid="demogorgon-background"
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30, 10, 15, 0.4) 0%, transparent 70%)',
        }}
      />
      
      <img
        src={fortnitePlaneImage}
        alt=""
        className="absolute object-contain select-none animate-chase-plane"
        style={{
          width: '35vw',
          maxWidth: '280px',
          left: '5%',
          top: '35%',
          opacity: 0.4,
          filter: 'brightness(0.8) saturate(0.9)',
          transform: 'scaleX(1) rotate(-5deg)',
        }}
      />
      
      <img
        src={demogorgonImage}
        alt=""
        className="absolute object-contain select-none"
        style={{
          height: '45vh',
          maxHeight: '400px',
          right: '8%',
          top: '30%',
          opacity: 0.18,
          filter: eyesActive 
            ? 'brightness(1.1) saturate(1.3)' 
            : 'brightness(0.6) saturate(0.5)',
          transition: 'filter 0.5s ease-in-out',
          transform: 'scaleX(-1)',
        }}
      />
    </div>
  );
}

function Footer() {
  const [, setLocation] = useLocation();
  
  const handleAdminClick = () => {
    setLocation("/admin");
  };

  return (
    <footer className="mt-auto mb-4 text-right w-full pr-8">
      <div 
        className="text-[1.7rem] tracking-[0.15em] text-vault-red opacity-70 cursor-pointer select-none transition-opacity hover:opacity-100"
        onClick={handleAdminClick}
        data-testid="admin-code"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleAdminClick()}
      >
        001
      </div>
      <small className="block text-[0.55rem] tracking-[0.35em] text-vault-muted opacity-50">
        ACCESS LEVEL
      </small>
    </footer>
  );
}

function TileSkeleton() {
  return (
    <div className="relative p-6 rounded-[18px_18px_14px_18px] bg-white/5 border border-white/[0.08] animate-pulse">
      <div className="h-4 w-32 bg-white/10 rounded mb-3" />
      <div className="h-2 w-20 bg-white/5 rounded" />
    </div>
  );
}

export default function Home() {
  const [eyesActive, setEyesActive] = useState(false);

  const { data: tiles = [], isLoading } = useQuery<AppTile[]>({
    queryKey: ["/api/tiles"],
  });

  const handleTileHover = () => setEyesActive(true);
  const handleTileLeave = () => setEyesActive(false);

  return (
    <div 
      className="h-screen flex flex-col items-center overflow-hidden"
      style={{
        background: '#080a0e',
      }}
    >
      <header className="mt-[12vh] md:mt-[15vh] text-center flex-shrink-0" data-testid="header">
        <h1 
          className="text-[2.6rem] md:text-[3.4rem] m-0 font-black uppercase"
          style={{
            fontFamily: 'Impact, "Arial Black", Haettenschweiler, sans-serif',
            fontStretch: 'condensed',
            color: '#ffffff',
            letterSpacing: '-0.01em',
            WebkitTextStroke: '3px #15234a',
            paintOrder: 'stroke fill',
            filter: 'drop-shadow(4px 4px 6px rgba(21, 35, 74, 0.8))',
          }}
        >
          AIDAN'S VAULT
        </h1>
        <p 
          className="mt-1.5 text-[0.7rem] md:text-[0.75rem] tracking-[0.3em]"
          style={{ color: 'rgba(180, 160, 200, 0.8)' }}
        >
          EXPERIMENTS · WORLDS · LEVELS
        </p>
      </header>

      <SquidDivider />

      <main 
        className="w-[90%] max-w-[420px] grid grid-cols-1 gap-3 z-[2] md:max-w-[720px] md:grid-cols-2 md:gap-4 flex-shrink-0"
        data-testid="app-grid"
      >
        {isLoading ? (
          <>
            <TileSkeleton />
            <TileSkeleton />
            <TileSkeleton />
          </>
        ) : (
          tiles.map((tile, index) => (
            <AppTileCard
              key={tile.id}
              tile={tile}
              animationClass={
                index === 0 
                  ? 'animate-pulse-glow' 
                  : index === 1 
                    ? 'animate-pulse-glow-2' 
                    : 'animate-pulse-glow-3'
              }
              onHover={handleTileHover}
              onLeave={handleTileLeave}
            />
          ))
        )}
      </main>

      <SkyBattle />
      <DemogorgonBackground eyesActive={eyesActive} />
      <Footer />
    </div>
  );
}
