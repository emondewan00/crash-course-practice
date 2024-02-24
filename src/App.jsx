import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h1 className="text-2xl">Welcome to Registration page </h1>
      <RegistrationForm />
    </div>
  );
};

export default App;
