import React from 'react';

function Button({ as = "button", className = "", children, ...props }) {
  const Comp = as;
  return (
    <Comp className={`btn ${className}`} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
