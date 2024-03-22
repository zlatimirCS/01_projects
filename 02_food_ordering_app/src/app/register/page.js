"use client";
import { useState, useRef } from "react";
import { useImmer } from "use-immer";
import { validateInputs } from "./validateInputs";
import { formValidateRules as rules } from "../utils/formValidateRules";
import axios from "axios";

export default function RegisterPage() {
  const emailInputRef = useRef(null);
  const passInputRef = useRef(null);
  const [errors, setErrors] = useImmer({
    email: "",
    password: "",
  });
  const [userCreated, setUserCreated] = useState(false);
  const [userCreating, setUserCreating] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    setUserCreating(true);
    const emailInputValue = emailInputRef.current.value;
    const passInputValue = passInputRef.current.value;
    let form = {
      email: emailInputValue,
      password: passInputValue,
    };
    let validForm = validateInputs(form, rules);
    if (!validForm.formValid) {
      setErrors(validForm.errors);
      return;
    }

    if (validForm.formValid) {
      setErrors((draft) => {
        draft.email = "";
        draft.password = "";
      });

      try {
        const response = await axios.post("/api/register", form);
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="text-center text-green-500">User created</div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="email"
          ref={emailInputRef}
          disabled={userCreating}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          placeholder="password"
          ref={passInputRef}
          disabled={userCreating}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit" disabled={userCreating}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button>Login with Google</button>
      </form>
    </section>
  );
}
