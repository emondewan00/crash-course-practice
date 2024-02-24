import { useFieldArray, useForm } from "react-hook-form";
import Field from "./Field";

const RegistrationForm = () => {
  const { control, handleSubmit, register, formState } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "social",
    control,
  });
  console.log(fields);
  return (
    <form action="" className="max-w-xl w-full">
      <fieldset className="border border-solid border-gray-300 p-4">
        <legend className="text-xl font-bold">Sing Up:</legend>
        <Field id={"name"} label={"Name"}>
          <input
            id="name"
            name="name"
            type="text"
            className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%]`}
            placeholder="Type your name ..."
          />
        </Field>
        <Field id={"email"} label={"Email"}>
          <input
            id="email"
            name="email"
            type="email"
            className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%]`}
            placeholder="Type your email ..."
          />
        </Field>
        <Field id={"password"} label={"password"}>
          <input
            id="password"
            name="password"
            type="password"
            className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%]`}
            placeholder="Type your password ..."
          />
        </Field>
        <Field id={"age"} label={"age"}>
          <input
            id="age"
            name="age"
            type="number"
            className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%]`}
            placeholder="Type your age ..."
          />
        </Field>
        {fields.map(({ id, name, url }, idx) => (
          <Field key={id} id={`social${idx}.name`} label={"social name"}>
            <input
              id={`social${idx}.name`}
              name={`social${idx}.name`}
              type="url"
              className={`border-2 border-solid p-2 rounded-sm focus:outline-blue-400 w-[65%]`}
              placeholder="Type your age ..."
            />
          </Field>
        ))}
        <input
          type="button"
          value="Add social handle "
          className="w-full p-2 rounded bg-purple-400 text-white"
          onClick={() => append({ name: "", url: "" })}
        />
      </fieldset>
    </form>
  );
};

export default RegistrationForm;
