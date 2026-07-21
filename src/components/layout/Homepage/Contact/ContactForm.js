import ContactRadio from "./ContactRadio";

function ContactForm() {
  return (
    <form className="w-[556px]">
      <ContactRadio />

      <div className="mt-10">
        <label className="block text-base mb-2">Name</label>

        <input
          type="text"
          placeholder="Name"
          className="
            w-full
            rounded-[14px]
            border
            border-dark
            bg-white
            px-7
            py-[18px]
            outline-none
          "
        />
      </div>

      <div className="mt-6">
        <label className="block text-base mb-2">Email*</label>

        <input
          type="email"
          placeholder="Email"
          className="
            w-full
            rounded-[14px]
            border
            border-dark
            bg-white
            px-7
            py-[18px]
            outline-none
          "
        />
      </div>

      <div className="mt-6">
        <label className="block text-base mb-2">Message*</label>

        <textarea
          rows="7"
          placeholder="Message"
          className="
            w-full
            rounded-[14px]
            border
            border-dark
            bg-white
            px-7
            py-5
            resize-none
            outline-none
          "
        />
      </div>

      <button
        className="
          mt-10
          w-full
          rounded-[14px]
          bg-dark
          py-5
          text-xl
          text-white
          transition
          hover:opacity-90
        "
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
