import './App.css';

import { Field, Form, Formik } from 'formik';
import { validateForm } from './validateForm';

function App() {

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <Formik
            className="shadow-lg"
            initialValues={{ name: '', phoneNo: '', password: '' }}
            validate={validateForm}
            onSubmit={submitHandler}
          >
            {(formik) => (
              <Form className="shadow-lg">
                <h1 className="mb4">Sign Up</h1>
                <div className="form-group mt-4">
                  <label htmlFor="name">Name</label>
                  <Field
                    name="name"
                    className={
                      formik.touched.name && formik.errors.name
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    type="text"
                  />

                  {formik.touched.name && formik.errors.name ? (
                    <div className="invalid-feedback">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    type="email"
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="email">Phone Number</label>
                  <Field
                    name="phoneNo"
                    className={
                      formik.touched.phoneNo && formik.errors.phoneNo
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    type="text"
                  />

                  {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <div className="invalid-feedback">
                      {formik.errors.phoneNo}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    className={
                      formik.touched.password && formik.errors.password
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    type="password"
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="confirmPassord">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    className={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    type="password"
                  />

                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="invalid-feedback">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary py-3 mt-4 w-100"
                  >
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
