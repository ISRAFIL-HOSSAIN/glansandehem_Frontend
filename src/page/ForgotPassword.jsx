import { Field, Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Progress } from "../components/common/Progress";

import forgotPasswordValidationSchema from "../utils/validation/forgotPasswordValidation";
import { useCreate } from "../hooks";
import { API } from "../api/endpoints";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };
  let navigate = useNavigate();

  const { mutateAsync: resetMutate, isLoading } = useCreate({
    endpoint: API.ResetPasswordRequest, // Replace with your actual API endpoint
    onSuccess: (data) => {
      toast.success("Successfully Reset Password Link Send by Your Email !");
      navigate("/login");
    },
    onError: (error) => {
      // Handle update error, e.g., display an error message
     
      toast.error(error?.response?.data?.message ?? "Something went Wrong !");
    },
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await resetMutate(values);
      setSubmitting(false);
    } catch (e) {
      setSubmitting(true);
      console.log("Error during Create ", e);
    }
  };
  return (
    <Fragment>
      <div className="h-[100vh] flex justify-center items-start w-full lg:pt-16 pt-5">
        <div className="bg-white  lg:w-[500px] w-full lg:py-20 lg:px-10 px-10 py-10  shadow-md rounded-md hover:shadow-lg">
          <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-xl font-extrabold text-gray-900">
              Forgot Your Password ?
            </h2>
            <p className="text-sm text-center py-4">
              Don't worry, Type your Email address and Submit{" "}
            </p>
          </div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={forgotPasswordValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, errors, touched, isSubmitting }) => (
                <Form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <div className="mt-1">
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={values.email}
                        placeholder="Enter your Email Address"
                        onChange={handleChange}
                        error={touched.email && errors.email}
                        className={`appearance-none block w-full px-3 py-2 border border-gray-300 
                                    rounded-md shadow-sm placeholder-gray-400 
                                    focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${
                                      touched.email && errors.email
                                        ? "border-red-500"
                                        : ""
                                    }`}
                      />
                      {touched.email && errors.email && (
                        <p className="mt-2 text-sm text-red-600 ">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pt-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className=" bg-gradient-to-r from-primary  to-secondprimary hover:from-secondprimary 
                      hover:to-primary group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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

export default ForgotPassword;
