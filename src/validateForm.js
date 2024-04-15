import validator from 'validator';

export const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 6) {
    errors.name = 'Must be 6 characters';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phoneNo) {
    errors.phoneNo = 'Phone number is required';
  } else if (
    // { strictMode: true } => country code
    !validator.isMobilePhone(values.phoneNo, 'fr-FR', { strictMode: true })
  ) {
    errors.phoneNo = 'Invalid phone number - +33XXXXXXXXX';
  }

  if (!values.phoneNo) {
    errors.phoneNo = 'Phone number is required';
  } else if (
    // { strictMode: true } => country code
    !validator.isMobilePhone(values.phoneNo, 'fr-FR', { strictMode: true })
  ) {
    errors.phoneNo = 'Invalid phone number - +33XXXXXXXXX';
  }

  if (!values.password) {
    errors.password = 'password is required';
  } else if (!validator.isStrongPassword(values.password)) {
    errors.password =
      'Password must contain 8 charactars including one Capital letter, Small Letter, Number & Special symbol';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }

  return errors;
};
