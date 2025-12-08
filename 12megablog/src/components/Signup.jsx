import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
// import { use } from "react";

function Signup() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAcc(data);
      if (userData) {
        const userData = await authService.getCurrentUSer();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg br-gray-100
        rounded-xl p-10 border border-black/10`}
      >
        <span className="inline-block w-full max-w-[100px">
          <Logo width="100%" />
        </span>
        <h2
          className="text-center text-2xl font-bold
                leading-light"
        >
          {" "}
          Sign up to create your account
        </h2>
        <p>
          Already have an acoount&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Name : "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email : "
              type="email"
              placeholder="Enter your full name"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Enter a valid email address",
                },
              })}
            />
            <Input
              label="Password : "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
