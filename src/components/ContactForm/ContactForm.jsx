import './_contact.scss'
import text from "@/data/landing.es.json";
import { SubmitButton } from "./SubmitButton.jsx";

export default function ContactForm() {


  const form = text.lead_form ?? {};
  const fields = Array.isArray(form.fields) ? form.fields : [];

  return (
    <div className='contact-container' id='contact'>
      <section className="contact">
        <div className='titles'>
          {form.title && <h2>{form.title}</h2>}
          {form.description && <h6 className='h7'>{form.description}</h6>}
        </div>

        <form action="" noValidate>
          <div className="contact-fields">
            {fields.map((field, idx) => {
              const id = `lead_${field.name ?? `field_${idx}`}`;
              const required = !!field.required;

              return (
                <div className="contact-field" key={field.name ?? idx}>
                  <label htmlFor={id}>
                    {field.label}
                    {required && <span className="required-star"> *</span>}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      id={id}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={required}
                      rows={4}
                    />
                  ) : (
                    <input
                      id={id}
                      name={field.name}
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      required={required}
                      // extras útiles:
                      autoComplete={field.type === 'email' ? 'email' : 'on'}
                      inputMode={field.type === 'tel' ? 'tel' : undefined}
                    />
                  )}
                </div>
              );
            })}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="lead_hp">No completar</label>
              <input
                id="lead_hp"
                type="text"
                name="botField"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
          </div>

          {form.submit && (
            <SubmitButton
              idleText={form.submit}
              loadingText="Enviando..."
              successText="¡Enviado!"
              errorText="Reintentar"
              className="contact-submit button-primary"
            />
          )}
        </form>
      </section>
    </div>
  );
}