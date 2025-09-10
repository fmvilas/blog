import { useEffect } from 'react';

export const Subscribe = ({
  alignment = "left",
  uid,
  formId
}: {
  alignment?: "left" | "center",
  uid: string,
  formId: string
}) => {

  useEffect(() => {
    // Load Kit script
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    
    // Also add to body for initialization
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`flex flex-col w-full ${alignment === "center" ? "items-center" : "items-start"} opacity-0 animate-slide-up`}>
      <form
        action={`https://app.kit.com/forms/${formId}/subscriptions`}
        className="seva-form formkit-form w-full"
        method="post"
        data-sv-form={formId}
        data-uid={uid}
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
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
              className="formkit-submit w-full bg-primary text-white hover:bg-primary/90 font-medium py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-colors xl:w-auto"
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};