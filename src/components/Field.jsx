const Field = ({ children, label, id, className, error }) => {
  return (
    <div className="my-2">
      <div
        className={`flex gap-4 justify-between items-center ${
          className ? className : ""
        }`}
      >
        <label htmlFor={id} className="text-lg capitalize">
          {label} :
        </label>
        {children}
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Field;
