import Button from "./components/Elements/Button/Index";
import InputFrom from "./components/Elements/Input/Index";

const App = () => {
  return (
    <div className="flex justify-center h-screen w-100 items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-blod mb-2">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        <form action="">
          <InputFrom
            label="email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />
          <InputFrom
            label="password"
            type="password"
            placeholder="*****"
            name="password"
          />
          <Button classname="bg-blue-700" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default App;
