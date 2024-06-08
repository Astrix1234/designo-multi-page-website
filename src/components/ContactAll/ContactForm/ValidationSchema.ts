import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Can’t be empty'),
  email: Yup.string().email('Invalid email format').required('Can’t be empty'),
  phone: Yup.string()
    .matches(
      /^\+?(\d{1,3}) ?(\d{1,3}) ?(\d{1,3}) ?(\d{1,3}) ?(\d{1,3})$/,
      'Invalid phone number'
    )
    .required('Can’t be empty'),
  message: Yup.string().required('Can’t be empty'),
});
