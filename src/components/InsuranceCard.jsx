const InsuranceCard = ({ name, logo }) => {
  return (
    <div className="healthcare-card flex items-center justify-center py-8 px-6">
      {logo ? (
        <img src={logo} alt={name} className="h-12 object-contain opacity-70 hover-100 transition-opacity" />
      ) : (
        <div className="text-center">
          <p className="font-semibold text-foreground">{name}</p>
        </div>
      )}
    </div>
  );
};

export default InsuranceCard;
