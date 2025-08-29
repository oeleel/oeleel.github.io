import React from 'react';

function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div className="toast" role="status" aria-live="polite">
      {msg}
    </div>
  );
}

export default Toast;
