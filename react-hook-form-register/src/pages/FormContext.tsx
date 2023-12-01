import React, { useCallback, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

/*
 * useForm 과 useFormContext 는 동일한 형태.
 * 단, useForm 은 개별 컴포넌트에서 사용하고,
 * useFormContext 는 부모 컴포넌트의 useForm 을 공유 받아 사용.
 * useFormContext 를 사용하기 위해 부모 컴포넌트는 FormProvider 라는 컨테이너 컴포넌트를 이용해 자식 컴포넌트들을 래핑.
 * */

type FormInputs = {
  name: string;
};

const FormContext: React.FC = () => {
  const useFormInstance = useForm<FormInputs>();
  const [result, setResult] = useState<string>("");

  const onFormSubmit = useCallback((form: FormInputs) => {
    setResult(JSON.stringify(form));
  }, []);

  return (
    <FormProvider {...useFormInstance}>
      <form onSubmit={useFormInstance.handleSubmit(onFormSubmit)}>
        <NestedInput />
        <input type="submit" />
        <p>{result}</p>
      </form>
    </FormProvider>
  );
};

export default FormContext;

function NestedInput() {
  const { register } = useFormContext<FormInputs>();

  return <input placeholder="User Name" {...register("name")} />;
}
