import { Form } from './ContactForm.styles';
import { useFormik } from 'formik';
import { validationSchema } from './ValidationSchema';
import { LabelInput } from '../../Share/LabelInput/LabelInput';
import { inputFields } from '../../../utils/inputFields';
import { FormValues } from '../../../interfaces/interfaces';
import { Button } from '../../Share/Button/Button';
import { Textarea } from '../../Share/Textarea/Textarea';

export const ContactForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: { name: '', email: '', phone: '', message: '' },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {inputFields.map(field => (
        <LabelInput
          key={field.id}
          id={field.id}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formik.values[field.name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={{
            condition: !!(
              formik.touched[field.name] && formik.errors[field.name]
            ),
            message: formik.errors[field.name] || '',
          }}
        />
      ))}
      <Textarea
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Message"
        error={{
          condition: !!(formik.touched.message && formik.errors.message),
          message: formik.errors.message || '',
        }}
      />
      <div>
        <Button
          content="Submit"
          color="dark"
          $background="white"
          type="submit"
        />
      </div>
    </Form>
  );
};
