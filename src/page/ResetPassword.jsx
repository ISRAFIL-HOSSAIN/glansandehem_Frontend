import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Progress } from "../components/common/Progress";
import resetPasswordValidationSchema from "../utils/validation/resetPasswordValidation";
import { useCreate } from "../hooks";
import { API } from "../api/endpoints";

const ResetPassword = () => {
  const initialValues = {
    confirmPassword: "",
    newPassword: "",
    resetToken: "",
  };
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const { id } = useParams();

  // Create Mutation ....
  const { mutateAsync: resetMutate, isLoading } = useCreate({
    endpoint: API.ResetPassword, // Replace with your actual API endpoint
    onSuccess: (data) => {
      toast.success("Successfully Reset Password !");
      navigate("/login");
    },
    onError: (error) => {
      // Handle update error, e.g., display an error message
     
      toast.error(error?.response?.data?.message ?? "Something went Wrong !");
    },
  });
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const payload = {
        newPassword: values?.newPassword,
        resetToken: id,
      };
      await resetMutate(payload);
      setSubmitting(false);
    } catch (e) {}
  };

  return (
    <Fragment>
      <div className=" flex justify-center items-start w-full lg:pt-16 pt-5">
        <div className="bg-white lg:w-[500px] w-full lg:py-20 lg:px-10 px-10 py-10  shadow-md rounded-md hover:shadow-lg">
          <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-xl font-extrabold text-gray-900">
              Reset Your Password
            </h2>
          </div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={resetPasswordValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, errors, touched, isSubmitting }) => (
                <Form>
                  <div className="mt-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>
                    <div className="mt-1">
                      <div className="relative">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="newPassword"
                          id="newPassword"
                          placeholder="Enter your new Password"
                          autoComplete="current-password"
                          value={values.newPassword}
                          onChange={handleChange}
                          error={touched.newPassword && errors.newPassword}
                          className={`appearance-none block w-full px-3 py-2 border border-gray-300 
                        rounded-md shadow-sm placeholder-gray-400 
                        focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${
                          touched.newPassword && errors.newPassword
                            ? "border-red-500"
                            : ""
                        }`}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center px-2"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <ErrorMessage
                        name="newPassword"
                        component="p"
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1">
                      <div className="relative">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="Enter your Password"
                          autoComplete="current-password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          error={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          className={`appearance-none block w-full px-3 py-2 border border-gray-300 
                        rounded-md shadow-sm placeholder-gray-400 
                        focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${
                          touched.confirmPassword && errors.confirmPassword
                            ? "border-red-500"
                            : ""
                        }`}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center px-2"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="p"
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>
                  </div>
                  <div className="pt-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className=" bg-gradient-to-r from-primary  to-secondprimary hover:from-secondprimary 
                      hover:to-primary group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        {isLoading ? (
                          <Progress />
                        ) : (
                          <BiLockAlt
                            className="h-5 w-5 text-gray-600 group-hover:text-yellow-400"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
