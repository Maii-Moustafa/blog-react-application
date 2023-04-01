const Input = ({ label, name ,value ,onChange ,type,placeholder}) => {
    return (
      <div className="form-control w-full ">
        <label htmlFor={name} className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full "
        />
      </div>
    );
  };
  
  export default Input;
  