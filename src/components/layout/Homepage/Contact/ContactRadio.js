function ContactRadio() {
  return (
    <div className="flex gap-10">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="radio"
          name="contact"
          defaultChecked
          className="accent-primary h-5 w-5"
        />

        <span>Say Hi</span>
      </label>

      <label className="flex items-center gap-3 cursor-pointer">
        <input type="radio" name="contact" className="accent-primary h-5 w-5" />

        <span>Get a Quote</span>
      </label>
    </div>
  );
}

export default ContactRadio;
