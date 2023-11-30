import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  password: string;
};

const UseFormExample: React.FC = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange", // submit 후 유효성 검사를 다시 거증하는 시기를 지정
    defaultValues: {},
    resolver: undefined, // Yup, Zod, Joi, Superstruct, Vest 등 외부 유효성 검사 라이브러리와 통합을 지원
    context: undefined,
    criteriaMode: "firstError", // 각 필드에 여러 오류가 있을 경우 첫 번째 오류만 수집
    shouldFocusError: true,
    shouldUnregister: false, // true 로 바꾸면 언마운트 시 register 의 값이 제거. 기본값은 false.
    delayError: undefined, // ms 단위로 에러 표시를 지연
  });

  const [result, setResult] = useState<string>("");
  const onFormSubmit = useCallback(
    (form: FormInputs) => {
      setResult(JSON.stringify(form));
    },
    [setResult],
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="User Name" {...register("name")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
};

export default UseFormExample;
