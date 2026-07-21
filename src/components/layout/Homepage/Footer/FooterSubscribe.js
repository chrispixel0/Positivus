function FooterSubscribe() {
  return (
    <div className="rounded-[14px] bg-[#292A32] p-10">
      <div className="flex gap-5">
        <input
          type="email"
          placeholder="Email"
          className="
            w-[285px]
            rounded-[14px]
            border
            border-white
            bg-transparent
            px-8
            py-5
            text-white
            placeholder:text-gray-400
            outline-none
          "
        />

        <button
          className="
            rounded-[14px]
            bg-primary
            px-9
            py-5
            text-dark
            font-medium
            transition
            hover:opacity-90
          "
        >
          Subscribe to news
        </button>
      </div>
    </div>
  );
}

export default FooterSubscribe;
