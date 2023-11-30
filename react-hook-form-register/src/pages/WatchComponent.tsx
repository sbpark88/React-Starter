import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  password: string;
};

const WatchComponent = () => {
  const { register, watch } = useForm<FormInputs>();

  const watchName = watch("name");

  return (
    <form>
      <input type="text" placeholder="User Name" {...register("name")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <p>Name: {watchName}</p>
    </form>
  );
};

export default WatchComponent;
