const Feature = ({ title, description, color }) => {
  return (
    <div className="text-center max-w-xs mx-auto">
      <h3 className={`text-xl font-bold text-${color} mb-2`}>{title}</h3>
      <p className="text-white font-light text-base">{description}</p>
    </div>
  );
};

export default Feature;
