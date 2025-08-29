import React from 'react';

function InputField({ id, label, as = "input", error, ...props }) {
  const Comp = as;
  const describedBy = error ? `${id}-error` : undefined;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Comp
        id={id}
        className={as === "textarea" ? "textarea" : "input"}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...props}
      />
      {error && (
        <div id={`${id}-error`} className="error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputField;
