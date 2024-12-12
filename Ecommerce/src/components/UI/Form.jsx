import InputForm from "./InputForm";

const Form = ({ register }) => {
  return (
    <>
      <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
        Información de envío y cobros
      </h2>
      <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
        <InputForm
          text={"Nombre"}
          name={"nombre"}
          type={"text"}
          placeholder={"Taylor Swift"}
          register={register}
        />

        <InputForm
          text={"Email"}
          type={"email"}
          name={"email"}
          placeholder={"ejemplo@ejemplo.com"}
          register={register}
        />

        <InputForm
          text={"Dirección"}
          name={"direccion"}
          type={"text"}
          placeholder={"Mario Cassinoni"}
          register={register}
        />

        <InputForm
          text={"Ciudad"}
          name={"ciudad"}
          type={"text"}
          placeholder={"Pocitos"}
          register={register}
        />

        <InputForm
          text={"Departamento"}
          name={"departamento"}
          type={"text"}
          placeholder={"Montevideo"}
          register={register}
        />

        <InputForm
          text={"Código Postal"}
          name={"codigoPostal"}
          type={"number"}
          placeholder={"15100"}
          register={register}
        />

        <InputForm
          text={"País"}
          name={"pais"}
          type={"text"}
          placeholder={"Uruguay"}
          register={register}
        />
      </fieldset>
    </>
  );
};

export default Form;
