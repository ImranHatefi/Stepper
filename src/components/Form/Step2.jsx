import React from "react";
import { Formik, Form, Field } from "formik";
import { Buttons } from "../Buttons";
import { step2Val } from "../../validation";
import { useDispatch } from "react-redux";
import { changeStep } from "../redux/stepSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const goToPrevStep = ()=>{
    dispatch(changeStep(1))
  }
  return (
    <div className="div">
      <Formik
        initialValues={{ surname: "" }}
        validationSchema={step2Val}
        onSubmit={(val) => {
          dispatch(changeStep(3))
        }}
      >
        <Form className="form">
          <label>Soyad</label>
          <Field className="input" name="surname" />
          <Buttons nextType="submit" onPrev={goToPrevStep}/>
        </Form>
      </Formik>
    </div>
  );
};