import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../button/Button';
import styles from './OrderForm.module.css';
import * as Yup from 'yup';

const OrderSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  bookingDate: Yup.string().required('Required'),
  message: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

const initialValues = {
  username: '',
  email: '',
  bookingDate: '',
  message: '',
};

const OrderForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const messageFieldId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderSchema}
    >
      <Form className={styles['form-container']}>
        <div className={styles['form-info']}>
          <h3 className={styles['form-title']}>Book your campervan now</h3>
          <p className={styles['form-text']}>
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <div className={styles['form-input-wrap']}>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            placeholder="Name"
          />
          <ErrorMessage
            className={styles.error}
            name="username"
            component="span"
          />
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email"
          />
          <ErrorMessage
            className={styles.error}
            name="email"
            component="span"
          />
          <Field
            type="date"
            name="bookingDate"
            id={dateFieldId}
            placeholder="Booking date"
          />
          <ErrorMessage
            className={styles.error}
            name="bookingDate"
            component="span"
          />
          <Field
            as="textarea"
            name="message"
            id={messageFieldId}
            placeholder="Comment"
            className={styles.textarea}
          />
        </div>
        <Button type="submit" text="Send" variant="show-more" />
      </Form>
    </Formik>
  );
};

export default OrderForm;
