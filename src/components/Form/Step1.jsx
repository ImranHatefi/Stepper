import React from "react";
import { Formik, Form, Field } from "formik";
import { Buttons } from "../Buttons";
import { step1Val } from "../../validation";
import { useDispatch } from "react-redux";
import { changeStep } from "../redux/stepSlice";

export const Step1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="div">
      <Formik
        initialValues={{ name: "" }}
        validationSchema={step1Val}
        onSubmit={(val) => {
          dispatch(changeStep(2))
        }}
      >
        <Form className="form">
          <label>Name</label>
          <Field className="input" name="name" />
          <Buttons nextType="submit" />
        </Form>
      </Formik>
    </div>
  );
};
