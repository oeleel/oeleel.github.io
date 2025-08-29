import React, { useEffect, useRef } from 'react';
import Button from './Button.jsx';

function Modal({ open, title, onClose, children }) {
  const ref = useRef(null);
  const lastFocused = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Tab" && ref.current) {
        const f = ref.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = f[0];
        const last = f[f.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    
    if (open) {
      lastFocused.current = document.activeElement;
      document.addEventListener("keydown", onKey);
      const first = ref.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocused.current && lastFocused.current.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;
  
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal reveal in" ref={ref}>
        <header>
          <h3 id="modal-title" style={{ margin: 0 }}>{title}</h3>
          <Button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </Button>
        </header>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
