const Field = ({ children, label, id }) => {
  return (
    <div className="flex gap-4 justify-between items-center my-2">
      <label htmlFor={id} className="text-lg capitalize">{label} :</label>
      {children}
    </div>
  );
};

export default Field;
