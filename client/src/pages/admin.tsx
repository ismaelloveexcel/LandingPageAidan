import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Admin() {
  const [, setLocation] = useLocation();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: 'radial-gradient(circle at top, #141a2a, #0b0e14)',
      }}
    >
      <div className="text-center">
        <div className="text-[4rem] tracking-[0.2em] text-vault-red mb-4 font-light">
          001
        </div>
        <h1 className="text-2xl tracking-[0.1em] text-white mb-2">
          ADMIN ACCESS
        </h1>
        <p className="text-sm text-vault-muted mb-8 tracking-wide">
          Restricted Zone - Level 001 Clearance Required
        </p>
        
        <div className="w-full max-w-sm mx-auto p-6 rounded-md bg-white/5 border border-white/[0.08]">
          <p className="text-vault-muted text-sm mb-6">
            This area is under construction. More experiments coming soon.
          </p>
          
          <Button 
            variant="outline" 
            onClick={() => setLocation("/")}
            className="gap-2"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Vault
          </Button>
        </div>
      </div>
    </div>
  );
}
