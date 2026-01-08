const SpecialtyCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="healthcare-card group cursor-pointer">
      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
        <Icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default SpecialtyCard;
