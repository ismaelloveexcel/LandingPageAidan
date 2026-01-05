import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { AppTile } from "@shared/schema";
import demogorgonImage from "@assets/image_1767654775177.png";

function SquidDivider() {
  return (
    <div className="flex items-center justify-center gap-7 my-12">
      <span className="text-lg opacity-60 text-white">&#9675;</span>
      <span className="text-lg opacity-60 text-white">&#9651;</span>
      <span className="text-lg opacity-60 text-white">&#11036;</span>
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
        relative block p-6 
        rounded-[18px_18px_14px_18px]
        bg-white/5 
        border border-white/[0.08]
        text-white no-underline
        transition-all duration-300 ease-[cubic-bezier(.17,.67,.45,1.32)]
        hover:-translate-y-1 hover:scale-[1.02]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
        active:-translate-y-1 active:scale-[1.02]
        ${animationClass}
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
    >
      <span className="block text-base font-normal">{tile.title}</span>
      <span className="block mt-2 text-[0.65rem] tracking-[0.2em] text-vault-muted">
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
      <div className="absolute animate-plane-1" style={{ top: '8%', left: '12%' }}>
        <svg className="w-12 h-12 opacity-30 drop-shadow-lg" viewBox="0 0 64 64" fill="none">
          <path d="M58 30L42 26V14c0-2-1.5-4-4-4s-4 2-4 4v12L10 30c-2 0.5-3 2-3 3.5s1.5 2.5 3 2.5l24-2v10l-6 4v4l9.5-3 9.5 3v-4l-6-4V34l24 2c1.5 0 3-1 3-2.5S60 30.5 58 30z" fill="white"/>
          <ellipse cx="38" cy="26" rx="3" ry="1.5" fill="rgba(255,255,255,0.4)"/>
        </svg>
        <div className="absolute top-1/2 -left-8 w-10 h-[2px] bg-gradient-to-l from-white/20 to-transparent" />
      </div>
      
      <div className="absolute animate-plane-2" style={{ top: '14%', left: '28%' }}>
        <svg className="w-8 h-8 opacity-20 drop-shadow-md" viewBox="0 0 64 64" fill="none">
          <path d="M58 30L42 26V14c0-2-1.5-4-4-4s-4 2-4 4v12L10 30c-2 0.5-3 2-3 3.5s1.5 2.5 3 2.5l24-2v10l-6 4v4l9.5-3 9.5 3v-4l-6-4V34l24 2c1.5 0 3-1 3-2.5S60 30.5 58 30z" fill="white"/>
        </svg>
        <div className="absolute top-1/2 -left-6 w-8 h-[1px] bg-gradient-to-l from-white/15 to-transparent" />
      </div>
      
      <div className="absolute animate-plane-3" style={{ top: '6%', right: '15%' }}>
        <svg className="w-14 h-14 opacity-35 drop-shadow-lg" viewBox="0 0 64 64" fill="none" style={{ transform: 'scaleX(-1)' }}>
          <path d="M58 30L42 26V14c0-2-1.5-4-4-4s-4 2-4 4v12L10 30c-2 0.5-3 2-3 3.5s1.5 2.5 3 2.5l24-2v10l-6 4v4l9.5-3 9.5 3v-4l-6-4V34l24 2c1.5 0 3-1 3-2.5S60 30.5 58 30z" fill="white"/>
          <ellipse cx="38" cy="26" rx="3" ry="1.5" fill="rgba(255,255,255,0.4)"/>
        </svg>
        <div className="absolute top-1/2 -right-10 w-12 h-[2px] bg-gradient-to-r from-white/25 to-transparent" />
      </div>
      
      <div className="absolute animate-plane-4" style={{ top: '18%', right: '32%' }}>
        <svg className="w-9 h-9 opacity-22 drop-shadow-md" viewBox="0 0 64 64" fill="none" style={{ transform: 'scaleX(-1)' }}>
          <path d="M58 30L42 26V14c0-2-1.5-4-4-4s-4 2-4 4v12L10 30c-2 0.5-3 2-3 3.5s1.5 2.5 3 2.5l24-2v10l-6 4v4l9.5-3 9.5 3v-4l-6-4V34l24 2c1.5 0 3-1 3-2.5S60 30.5 58 30z" fill="white"/>
        </svg>
        <div className="absolute top-1/2 -right-7 w-9 h-[1px] bg-gradient-to-r from-white/18 to-transparent" />
      </div>

      <div className="absolute w-2 h-2 rounded-full animate-bullet-1" style={{ top: '10%', left: '24%', background: 'radial-gradient(circle, #ff6b35 0%, #ff4500 50%, transparent 100%)', boxShadow: '0 0 6px #ff4500' }} />
      <div className="absolute w-2 h-2 rounded-full animate-bullet-2" style={{ top: '7%', right: '24%', background: 'radial-gradient(circle, #ff6b35 0%, #ff4500 50%, transparent 100%)', boxShadow: '0 0 6px #ff4500' }} />
      <div className="absolute w-1.5 h-1.5 rounded-full animate-bullet-3" style={{ top: '16%', left: '35%', background: 'radial-gradient(circle, #ffa500 0%, #ff6600 50%, transparent 100%)', boxShadow: '0 0 4px #ff6600' }} />
      
      <div className="absolute w-6 h-6 animate-explosion-1" style={{ top: '11%', left: '40%' }}>
        <div className="w-full h-full rounded-full blur-md" style={{ background: 'radial-gradient(circle, rgba(255,150,50,0.6) 0%, rgba(255,80,20,0.3) 50%, transparent 100%)' }} />
      </div>
      <div className="absolute w-5 h-5 animate-explosion-2" style={{ top: '8%', right: '38%' }}>
        <div className="w-full h-full rounded-full blur-md" style={{ background: 'radial-gradient(circle, rgba(255,200,80,0.5) 0%, rgba(255,100,30,0.2) 50%, transparent 100%)' }} />
      </div>
    </div>
  );
}

function DemogorgonBackground({ eyesActive }: { eyesActive: boolean }) {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
      data-testid="demogorgon-background"
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30, 10, 15, 0.4) 0%, transparent 70%)',
        }}
      />
      <img
        src={demogorgonImage}
        alt=""
        className="h-[55vh] max-h-[500px] object-contain opacity-15 select-none"
        style={{
          filter: eyesActive 
            ? 'brightness(1.1) saturate(1.3)' 
            : 'brightness(0.6) saturate(0.5)',
          transition: 'filter 0.5s ease-in-out',
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
    <footer className="mt-auto mb-9 text-right w-full pr-8">
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
      className="min-h-screen flex flex-col items-center overflow-x-hidden"
      style={{
        background: '#080a0e',
      }}
    >
      <header className="mt-12 text-center" data-testid="header">
        <h1 className="text-[2.2rem] tracking-[0.15em] m-0 text-white font-normal">
          AIDAN'S VAULT
        </h1>
        <p className="mt-2.5 text-[0.75rem] tracking-[0.3em] text-vault-muted">
          EXPERIMENTS · WORLDS · LEVELS
        </p>
      </header>

      <SquidDivider />

      <main 
        className="w-[90%] max-w-[420px] grid grid-cols-1 gap-[18px] z-[2] md:max-w-[720px] md:grid-cols-2"
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
