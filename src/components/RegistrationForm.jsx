import { useFieldArray, useForm } from "react-hook-form";
import Field from "./Field";

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "social",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl w-full">
      <fieldset className="border border-solid border-gray-300 p-4">
        <legend className="text-xl font-bold">Sing Up:</legend>
        <Field id={"name"} label={"Name"} error={errors?.name?.message}>
          <input
            id="name"
            name="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`border-2  p-2 rounded-sm box-border w-[65%] outline-none ${
              errors?.name ? "border-red-500" : "border-solid"
            }`}
            placeholder="Type your name ..."
          />
        </Field>
        <Field id={"email"} label={"Email"} error={errors?.email?.message}>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%] ${errors.name}`}
            placeholder="Type your email ..."
          />
        </Field>
        <Field
          id={"password"}
          label={"password"}
          error={errors?.password?.message}
        >
          <input
            id="password"
            name="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%] ${errors.name}`}
            placeholder="Type your password ..."
          />
        </Field>
        <Field id={"age"} label={"age"} error={errors?.age?.message}>
          <input
            id="age"
            name="age"
            type="number"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "You must be at least 18 years old",
              },
              max: {
                value: 65,
                message: "You must be at most 65 years old",
              },
            })}
            className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%] ${errors.name}`}
            placeholder="Type your age ..."
          />
        </Field>
        {fields.map(({ id }, idx) => (
          <div key={id} className="flex items-center w-full gap-4">
            <Field
              id={`social${idx}.name`}
              label={"social name"}
              className={"flex-col w-full"}
              error={errors?.social?.[idx]?.name?.message}
            >
              <input
                id={`social${idx}.name`}
                name={`social${idx}.name`}
                type="text"
                {...register(`social.${idx}.name`)}
                className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-full`}
                placeholder="Type your social name ..."
              />
            </Field>
            <Field
              id={`social${idx}.url`}
              label={"social url"}
              className={"flex-col w-full"}
              error={errors?.social?.[idx]?.url?.message}
            >
              <input
                id={`social${idx}.url`}
                name={`social${idx}.url`}
                type="url"
                {...register(`social.${idx}.url`)}
                className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-full`}
                placeholder="Type your social url ..."
              />
            </Field>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => remove(idx)}
            >
              Remove
            </button>
          </div>
        ))}
        <input
          type="button"
          value="Add social handle "
          className="w-full p-2 rounded bg-purple-400 text-white"
          onClick={() => append({ name: "", url: "" })}
        />

        <button
          disabled={!isValid || isSubmitting}
          type="submit"
          className={`w-full p-2 my-2 rounded bg-purple-400 text-white ${
            isValid ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </fieldset>
    </form>
  );
};

export default RegistrationForm;
