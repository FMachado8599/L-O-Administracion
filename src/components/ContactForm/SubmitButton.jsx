import { useRef } from "react";
import { useLeadForm } from "@/hooks/useLeadForm.js";

export function SubmitButton({
  idleText = "Enviar",
  loadingText = "Enviando...",
  successText = "¡Enviado!",
  errorText = "Reintentar",
  className = "",
  showMessages = true,
}) {
  const { status, error, submitForm } = useLeadForm();
  const btnRef = useRef(null);

  async function handleClick(e) {
    e.preventDefault();
    const formEl = e.currentTarget.form; // el <form> al que pertenece este botón
    if (!formEl) return;
    await submitForm(formEl);
  }

  let label = idleText;
  if (status === "loading") label = loadingText;
  else if (status === "success") label = successText;
  else if (status === "error")   label = errorText;

  return (
    <div className="submit-wrap">
      <button
        ref={btnRef}
        type="submit"
        className={className}
        aria-busy={status === "loading"}
        aria-live="polite"
        disabled={status === "loading"}
        onClick={handleClick}
      >
        {label}
      </button>

      {showMessages && (
        <div className="submit-messages" aria-live="polite">
          {status === "loading" && <p className="msg loading">{loadingText}</p>}
          {status === "success" && <p className="msg ok">{successText}</p>}
          {status === "error" && (
            <>
              <p className="msg error">{error?.message || "Error enviando el mensaje"}</p>
              {Array.isArray(error?.details) && error.details.length > 0 && (
                <ul className="error-list">
                  {error.details.map((d, i) => <li key={i}>{d.message}</li>)}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

