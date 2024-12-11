const InputForm = ({ text, name, type, placeholder, register }) => {
  if (!register) {
    console.error("El prop 'register' no está definido o no es una función.");
  }

  return (
    <>
      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
        <span className="text-right px-2">{text}</span>
        <input
          type={type}
          className="focus:outline-none px-3"
          placeholder={placeholder}
          required
          {...register(name)}
        />
      </label>
    </>
  );
};

export default InputForm;
