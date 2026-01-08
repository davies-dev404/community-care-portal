const SpecialtyCard = ({ icon: Icon, title, description, image }) => {
  return (
    <div className="healthcare-card group cursor-pointer overflow-hidden flex flex-col h-full bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-healthcare-md transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 z-10 mix-blend-multiply" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-background/95 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default SpecialtyCard;
