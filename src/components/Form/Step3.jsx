import React from "react";
import { Formik, Form, Field } from "formik";
import { Buttons } from "../Buttons";
import { step3Val } from "../../validation";
import { useDispatch } from "react-redux";
import { changeStep } from "../redux/stepSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const goToPrevStep = ()=>{
    dispatch(changeStep(2))
  }
  return (
    <div className="div">
      <Formik
        initialValues={{ country: "" }}
        validationSchema={step3Val}
        onSubmit={(val) => {
          dispatch(changeStep(4))
        }}
      >
        <Form className="form">
          <label>Place of Birth</label>
          <Field className="input" name="country" />
          <Buttons nextType="submit" onPrev={goToPrevStep}/>
        </Form>
      </Formik>
    </div>
  );
};