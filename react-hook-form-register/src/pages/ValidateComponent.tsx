import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  age: number;
  address: string;
  password: string;
};

const ValidateComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [result, setResult] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const onFormSubmit = useCallback((form: FormInputs) => {
    setResult(JSON.stringify(form));
  }, []);

  useEffect(() => {
    errors.name || errors.age ? setSuccess(false) : setSuccess(true);
  }, [errors, errors.name, errors.age]);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        type="text"
        {...register("name", { required: true, minLength: 5 })}
        placeholder="Name"
      />
      <input
        type="number"
        {...register("age", { required: true, min: 10, max: 30 })}
        placeholder="Age"
      />
      <input type="text" {...register("address")} placeholder="Address" />
      <input type="text" {...register("password")} placeholder="Password" />
      <input type="submit" />
      <p>{result}</p>
      <p>Validate: {String(success)}</p>
    </form>
  );
};

export default ValidateComponent;
