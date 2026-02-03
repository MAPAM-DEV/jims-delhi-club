const DecorativeDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-[3px] w-20 md:w-32 bg-orange" />
    <div className="w-3 h-3 rotate-45 bg-orange" />
    <div className="h-[3px] w-20 md:w-32 bg-orange" />
  </div>
);

export default DecorativeDivider;
