import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
        />

        <input
          {...register("lastName", {
            required: "Last name is required",
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
          })}
          placeholder="Last name"
        />

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
