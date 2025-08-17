import './_contact.scss'
import text from "@/data/landing.es.json";

export default function ContactForm() {
  const form = text.lead_form ?? {};
  const fields = Array.isArray(form.fields) ? form.fields : [];

  return (
    <div className='contact-container'>
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
          </div>

          {form.submit && (
            <button type="submit" className="contact-submit button-primary">
              {form.submit}
            </button>
          )}
        </form>
      </section>
    </div>
  );
}