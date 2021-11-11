/**
 * Validate Form method
 * @param {Object} -- Contains the values and required fields
 * @returns {Object} -- Contains any errors and the fields they belong to
 */
export const validate = requiredFields => values => {
  // Setup the errors object
  const errors = {};

  // Map the Required Fields
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  // Add the email validator if the required field is an email
  if (requiredFields.includes('email') && values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Return any errors
  return errors;
};

export const validatePassword = (oldPassword, newPassword) => values => {
  // Setup the errors object
  const errors = {};

  if (!values[oldPassword]) {
    errors[oldPassword] = 'Required';
  }

  if (!values[newPassword]) {
    errors[newPassword] = 'Required';
  }

  if (values[oldPassword] !== values[newPassword]) {
    errors[newPassword] = 'Passwords must match';
  }

  return errors;
};
