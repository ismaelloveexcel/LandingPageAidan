import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { AppTile } from "@shared/schema";

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

function Demogorgon({ eyesActive }: { eyesActive: boolean }) {
  return (
    <div 
      className="fixed right-[-90px] top-[18%] w-[300px] h-[460px] opacity-[0.28] pointer-events-none z-0 md:w-[420px] md:h-[620px] md:right-[-120px]"
      data-testid="demogorgon"
    >
      <svg
        viewBox="0 0 200 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 L60 0 L70 40 L30 30 L50 60 L10 70 L40 90 L20 120 L50 110 L40 150 L60 130 L55 180 L80 160 L75 200 L100 180 L125 200 L120 160 L145 180 L140 130 L160 150 L150 110 L180 120 L160 90 L190 70 L150 60 L170 30 L130 40 L140 0 L100 20Z"
          fill="currentColor"
          className="text-white/30"
        />
        <ellipse
          cx="100"
          cy="200"
          rx="40"
          ry="80"
          fill="currentColor"
          className="text-white/30"
        />
        <path
          d="M60 280 L65 260 L55 240 L60 220 L50 200"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-white/30"
        />
        <path
          d="M140 280 L135 260 L145 240 L140 220 L150 200"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-white/30"
        />
        <path
          d="M70 295 L75 280 L70 265"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-white/30"
        />
        <path
          d="M130 295 L125 280 L130 265"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-white/30"
        />
      </svg>
      
      <div 
        className={`
          absolute top-[38%] left-[46%] w-9 h-3.5
          transition-opacity duration-[350ms] ease-in-out
          ${eyesActive ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `
            radial-gradient(circle, rgba(155,28,43,0.9) 35%, transparent 65%) left,
            radial-gradient(circle, rgba(155,28,43,0.9) 35%, transparent 65%) right
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '12px 12px',
          backgroundPosition: 'left center, right center',
          filter: 'blur(0.6px)',
        }}
        data-testid="demogorgon-eyes"
      />
    </div>
  );
}

function Bat() {
  return (
    <div 
      className="fixed left-[18px] bottom-[110px] w-[140px] h-[50px] opacity-60 transition-transform duration-[600ms] ease-out hover:rotate-[-6deg] hover:scale-105 active:rotate-[-6deg] active:scale-105 z-[1]"
      data-testid="bat"
    >
      <svg
        viewBox="0 0 140 50"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70 25 
             C60 20, 40 5, 10 10 
             C20 15, 25 20, 30 25 
             C25 25, 15 30, 5 35 
             C20 32, 35 30, 50 28 
             C55 30, 60 35, 70 38 
             C80 35, 85 30, 90 28 
             C105 30, 120 32, 135 35 
             C125 30, 115 25, 110 25 
             C115 20, 120 15, 130 10 
             C100 5, 80 20, 70 25Z"
          fill="currentColor"
          className="text-white/80"
        />
        <ellipse
          cx="70"
          cy="28"
          rx="8"
          ry="6"
          fill="currentColor"
          className="text-white/90"
        />
        <circle cx="66" cy="26" r="1.5" fill="#0b0e14" />
        <circle cx="74" cy="26" r="1.5" fill="#0b0e14" />
        <path
          d="M68 30 Q70 32, 72 30"
          stroke="#0b0e14"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M63 22 L65 25 M77 22 L75 25"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/80"
        />
      </svg>
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
        background: 'radial-gradient(circle at top, #141a2a, #0b0e14)',
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

      <Demogorgon eyesActive={eyesActive} />
      <Bat />
      <Footer />
    </div>
  );
}
