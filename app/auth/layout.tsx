const DefaultAuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-400 to-lime-700">
      {children}
    </div>
  );
};

export default DefaultAuthLayout;
