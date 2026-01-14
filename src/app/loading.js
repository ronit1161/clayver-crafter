export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative w-24 h-24">
        {/* Wheel/Plate Base */}
        <div className="absolute inset-0 rounded-full border-4 border-stone-300 animate-[spin_3s_linear_infinite]" />
        
        {/* Clay Lump */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/80 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_2s_linear_infinite_reverse]" />
        
        {/* Center Indent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-stone-200/50 rounded-full" />
      </div>
      <p className="absolute mt-32 text-primary font-medium tracking-widest animate-pulse">
        SHAPING...
      </p>
    </div>
  );
}
