export function Hero() {
  return (
    <section className="mb-10">
      {/* Hero top */}
      <div className="bg-primary/85">
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h1 className="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12 md:leading-tight text-white">
            About page title, should be long enough
          </h1>
        </div>
      </div>
      {/* Hero bottom */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="relative flex max-w-7xl flex-col gap-4 md:flex-row lg:justify-end">
          <div className="max-w-2xl md:mr-[520px]  md:max-w-md lg:mr-auto">
            {/* Title */}
            <h3 className="text-2xl font-bold md:text-3xl">Introduction</h3>
            {/* Divider */}
            <div className="my-6 w-16 border-t border-black"></div>
            <p className="text-lg text-gray-500">
              From the beginning of the twentieth century, Abdulghani Ibrahim
              Mira commenced trading in spices from his shop located in Souk
              Al-sagheer opposite the holy Mosque in Makkah. In1977, Abdulghani
              Ibrahim Mira laid the foundation for Al-Mira Establishment for
              Trading and Import In1989Abdullatif and Mustafa, sons of
              Abdulghani Ibrahim Mira formed Al-Mira Centre for Trading Co. Ltd.
              Including the following
            </p>
          </div>
          {/* Image */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="relative -bottom-6 -right-6 mt-20 w-[480px] object-cover md:absolute md:mt-0 md:h-[480px] c-h-480px"
          />
        </div>
      </div>
    </section>
  )
}
