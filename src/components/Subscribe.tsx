import { useEffect, useState } from 'react';

export const Subscribe = ({
  alignment = "left",
  uid,
  formId,
  buttonText = "Subscribe",
  successMessage = "Success! Now check your email to confirm your subscription.",
  useKitScript = true
}: {
  alignment?: "left" | "center",
  uid: string,
  formId: string,
  buttonText?: string,
  successMessage?: string,
  /**
   * Kit's ck.5.js is what fires the Creator Network recommendations modal after
   * a successful subscribe. Recommendations can only be switched off account-wide
   * in Kit, so the only way to suppress them on one page is to not load the script
   * there and submit by hand.
   *
   * Set false to opt out: the form then POSTs via fetch and renders its own
   * success state. Note the endpoint's response is what Kit's own script talks to,
   * not a documented API — so failures surface visibly rather than silently.
   */
  useKitScript?: boolean
}) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Kit's ck.5.js reads this blob on submit. Built as an object rather than a
  // hand-edited JSON string so successMessage can vary per form without anyone
  // having to surgery a 900-character attribute.
  const formOptions = {
    settings: {
      after_subscribe: {
        action: "message",
        success_message: successMessage,
        redirect_url: ""
      },
      analytics: {
        google: null, fathom: null, facebook: null, segment: null,
        pinterest: null, sparkloop: null, googletagmanager: null
      },
      modal: { trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 },
      powered_by: {
        show: false,
        url: "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
      },
      recaptcha: { enabled: false },
      return_visitor: { action: "show", custom_content: "" },
      slide_in: { display_in: "bottom_right", trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 },
      sticky_bar: { display_in: "top", trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 }
    },
    version: "5"
  };

  useEffect(() => {
    if (!useKitScript) return;

    // Load Kit script
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;

    // Also add to body for initialization
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, [useKitScript]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      const response = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget)
      });
      // Deliberately trusting the HTTP status rather than the body shape — the
      // JSON payload isn't a contract and could change without warning.
      if (!response.ok) throw new Error(`Kit responded ${response.status}`);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (!useKitScript && status === 'success') {
    return (
      <div
        className={`flex flex-col w-full ${alignment === "center" ? "items-center" : "items-start"}`}
        role="status"
        aria-live="polite"
      >
        <p className="subscribe-success">{successMessage}</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col w-full ${alignment === "center" ? "items-center" : "items-start"} opacity-0 animate-slide-up`}>
      <form
        action={`https://app.kit.com/forms/${formId}/subscriptions`}
        className="seva-form formkit-form w-full"
        method="post"
        onSubmit={useKitScript ? undefined : handleSubmit}
        data-sv-form={formId}
        data-uid={uid}
        data-format="inline"
        data-version="5"
        data-options={JSON.stringify(formOptions)}
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          {!useKitScript && status === 'error' && (
            <p className="subscribe-error" role="alert">
              That didn&apos;t go through. Try again, or just email me at{' '}
              <a href="mailto:fran@fmvilas.me">fran@fmvilas.me</a> and I&apos;ll send it over.
            </p>
          )}
          <div
            data-element="fields"
            data-stacked="false"
            className="seva-fields formkit-fields flex flex-col gap-4 xl:flex-row"
          >
            <div className="formkit-field flex-1">
              <input
                className="formkit-input w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-black font-normal focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                name="email_address"
                aria-label="Email Address"
                placeholder="Email Address"
                required={true}
                type="email"
              />
            </div>
            <div className="formkit-field flex-1">
              <input
                className="formkit-input w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-black font-normal focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                aria-label="First Name"
                name="fields[first_name]"
                placeholder="First Name"
                type="text"
              />
            </div>
            <button
              data-element="submit"
              disabled={!useKitScript && status === 'submitting'}
              className="formkit-submit w-full bg-primary text-white hover:bg-primary/90 font-medium py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-colors xl:w-auto"
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>
                {!useKitScript && status === 'submitting' ? 'Sending…' : buttonText}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};