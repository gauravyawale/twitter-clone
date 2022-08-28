import React from "react";
import { ErrorMessage, useField } from "formik";
 const MyTextArea = ({label, ...props}:any) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
      <>
          <label htmlFor={props.id || props.name}>{label}</label>
          <textarea className="create-message" {...field} {...props} placeholder="enter your text here.."/>
          {/* {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null} */}
      </>
  );
};

export default MyTextArea;
