export const formValidateRules = {
  email: [
    { type: "required", message: "Email is required" },
    {
      type: "regex",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email is invalid",
    },
  ],
  password: [
    { type: "required", message: "Password is required" },
    {
      type: "minLength",
      value: 6,
      message: "Password must be at least 6 characters",
    },
  ],
};
