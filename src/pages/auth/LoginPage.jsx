import { Button, Image, Input } from "@nextui-org/react";
import { postApi } from "../../lib/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {}, [validated]);
  const handleForm = (e) => {
    setValidated(false);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetch = await postApi("/auth/login", form);
      localStorage.setItem("token", fetch.data.data.token);
      localStorage.setItem("name", form.username);
      setValidated(false);
      navigate("/");
    } catch (err) {
      toast.error("Wrong username or password");
      setValidated(true);
      console.log(err);
    }
  };

  const disabledButton = form.username === "" || form.password === "";

  return (
    <div className="flex flex-col md:flex-row justify-center w-full min-h-screen">
      <div className="flex gap-4 w-full font-bold justify-center items-center bg-gradient-to-t from-slate-100 md:h-screen text-3xl p-4">
        <Image
          src="/src/assets/logo.svg"
          alt="logo"
          className="w-16 md:w-24 rounded-none"
        />
        <span className="text-blue-500 ms-4">
          Easy Wash <br /> <span className="text-slate-600">Laundry</span>
        </span>
      </div>
      <div className="w-full md:max-w-2xl bg-gradient-to-b from-slate-100 md:h-screen flex justify-center">
        <form
          className="flex flex-col w-full gap-6 justify-center md:max-w-xl p-10 lg:p-20 "
          onSubmit={handleSubmit}
        >
          <p className="text-xl md:text-2xl font-semibold tracking-wider uppercase">
            Login
          </p>
          <Input
            name="username"
            onChange={handleForm}
            value={form.username}
            type="text"
            label="Username"
            placeholder="ex : admin / employee"
            autoComplete="username"
            isInvalid={validated}
            errorMessage="Please check your username"
          />
          <Input
            name="password"
            onChange={handleForm}
            value={form.password}
            type={isVisible ? "text" : "password"}
            label="Password"
            placeholder="ex : password"
            autoComplete="current-password"
            isInvalid={validated}
            errorMessage="Please check your password"
            endContent={
              <button
                type="button"
                className="text-slate-500"
                onClick={handleVisible}
              >
                {isVisible ? (
                  <i className="bi bi-eye"></i>
                ) : (
                  <i className="bi bi-eye-slash"></i>
                )}
              </button>
            }
          />
          <Button
            className="tracking-wider uppercase"
            color="primary"
            type="submit"
            isDisabled={disabledButton}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
