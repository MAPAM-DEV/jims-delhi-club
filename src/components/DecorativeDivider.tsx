const DecorativeDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 md:w-24 bg-orange" />
    <div className="w-2 h-2 rotate-45 bg-orange" />
    <div className="h-px w-16 md:w-24 bg-orange" />
  </div>
);

export default DecorativeDivider;
