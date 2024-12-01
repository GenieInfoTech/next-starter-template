"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const FormHookTest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5 items-center justify-center"
    >
      <h1 className="text-4xl">React Hook Form</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="border border-gray-600 rounded-lg px-2 py-1"
        // defaultValue="test"
        type="text"
        placeholder="Type name.."
        {...register("example", { minLength: 3 })}
      />
      {errors.example && <span>Name must be minimum length 3</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className="border border-gray-600 rounded-lg px-2 py-1"
        type="email"
        placeholder="Type email.."
        {...register("exampleRequired", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>Email is required</span>}

      <button
        type="submit"
        className="bg-lime-500 text-white font-bold px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};
export default FormHookTest;
