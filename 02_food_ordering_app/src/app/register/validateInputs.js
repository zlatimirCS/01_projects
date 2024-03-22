export const validateInputs = (fields, rules) => {
  let formValid = true;
  let errors = {};
  console.log("fields", fields);

  for (let field in fields) {
    console.log("field", field);
    if (rules[field]) {
      for (let rule of rules[field]) {
        if (rule.type === "required" && !fields[field]) {
          formValid = false;
          errors[field] = rule.message;
          break;
        }
        if (rule.type === "regex" && !rule.pattern.test(fields[field])) {
          formValid = false;
          errors[field] = rule.message;
          break;
        }
        if (rule.type === "minLength" && fields[field].length < rule.value) {
          formValid = false;
          errors[field] = rule.message;
          break;
        }
      }
    }
  }

  return { formValid, errors };
};
