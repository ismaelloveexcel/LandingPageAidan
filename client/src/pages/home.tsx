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
      <svg
        className="absolute w-8 h-8 opacity-20 animate-plane-1"
        style={{ top: '8%', left: '15%' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" className="text-white"/>
      </svg>
      
      <svg
        className="absolute w-6 h-6 opacity-15 animate-plane-2"
        style={{ top: '12%', left: '25%' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" className="text-white"/>
      </svg>
      
      <svg
        className="absolute w-10 h-10 opacity-25 animate-plane-3"
        style={{ top: '5%', right: '20%' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" className="text-white" transform="scale(-1,1) translate(-24,0)"/>
      </svg>
      
      <svg
        className="absolute w-7 h-7 opacity-20 animate-plane-4"
        style={{ top: '15%', right: '30%' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" className="text-white" transform="scale(-1,1) translate(-24,0)"/>
      </svg>

      <div className="absolute w-1 h-1 bg-orange-500/60 rounded-full animate-bullet-1" style={{ top: '10%', left: '22%' }} />
      <div className="absolute w-1 h-1 bg-orange-500/50 rounded-full animate-bullet-2" style={{ top: '8%', right: '28%' }} />
      <div className="absolute w-1 h-1 bg-red-500/40 rounded-full animate-bullet-3" style={{ top: '14%', left: '30%' }} />
      
      <div className="absolute w-3 h-3 opacity-30 animate-explosion-1" style={{ top: '11%', left: '35%' }}>
        <div className="w-full h-full bg-orange-400/50 rounded-full blur-sm" />
      </div>
      <div className="absolute w-2 h-2 opacity-20 animate-explosion-2" style={{ top: '7%', right: '35%' }}>
        <div className="w-full h-full bg-yellow-500/40 rounded-full blur-sm" />
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
