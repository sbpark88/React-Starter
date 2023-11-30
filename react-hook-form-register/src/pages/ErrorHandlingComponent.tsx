import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  age: number;
  nickname: string;
};

const ErrorHandlingComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [result, setResult] = useState<string>("");

  console.log(errors);

  const onFormSubmit = useCallback((form: FormInputs) => {
    setResult(JSON.stringify(form));
  }, []);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        type="number"
        placeholder="Age"
        {...register("age", { required: true, min: 19, max: 45 })}
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
      <input type="text" placeholder="Nickname" {...register("nickname")} />
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
};

export default ErrorHandlingComponent;

interface ErrorProps {
  message: string;
}

function FormError({ message }: ErrorProps) {
  return (
    <span
      style={{
        color: "red",
        transform: "translate(7px, -17px)",
      }}
    >
      {message}
    </span>
  );
}

// const FormError: React.FC<ErrorProps> = ({ message }) => {
//   return (
//     <span
//       style={{
//         color: "red",
//       }}
//     >
//       {message}
//     </span>
//   );
// };
