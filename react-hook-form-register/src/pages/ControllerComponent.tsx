import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@mui/material";

type FormInputs = {
  age: number;
  nickname: string;
};

const ControllerComponent: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [result, setResult] = useState<string>("");

  const onFormSubmit = useCallback((form: FormInputs) => {
    setResult(JSON.stringify(form));
  }, []);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="container">
        <Controller
          render={({ field, fieldState, formState }) => (
            <Input
              type="number"
              style={{ width: "280px" }}
              placeholder="Age"
              {...field}
            />
          )}
          name="age"
          control={control}
          rules={{ required: true, min: 19, max: 45 }}
        />
        {errors.age?.type === "required" && (
          <FormError message={`Age is required.`} />
        )}
        {errors.age?.type === "min" && (
          <FormError message={`Minimum Age is 19`} />
        )}
        {errors.age?.type === "max" && (
          <FormError message={`Maximum Age is 45`} />
        )}
      </div>
      <br />
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
};

export default ControllerComponent;

interface ErrorProps {
  message: string;
}

const FormError: React.FC<ErrorProps> = ({ message }) => {
  return (
    <span
      style={{
        color: "red",
      }}
    >
      {message}
    </span>
  );
};
