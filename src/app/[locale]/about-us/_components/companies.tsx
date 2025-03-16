import {
  furnitureLogo,
  medicalLogo,
  opticsLogo,
  steamaticLogo,
  steelLogo,
} from "@/assets"

export function Companies() {
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12">
        {/* <!-- Component --> */}
        <div className="flex flex-col gap-16">
          {/* <!-- Title --> */}
          <div className="flex max-w-5xl flex-col items-start gap-2.5 lg:flex-row lg:items-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Unleash Creativity with Alimra
            </h2>
            <p className="max-w-lg text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">01</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                Furniture and Carpets Department.
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              Al Mira Furniture and Carpets Company was established more than
              five decades ago and has given its fame to the company in this
              commercial area in the Kingdom through its centres and exhibitions
              held in Dammam, Jeddah and Riyadh. Al Mira Trading Company Limited
              is also distinguished by trading in carpets and rugs for floors
              for decades and carpets have become associated with the name of Al
              Mira due to their fame in trading in it and their distinction from
              others due to the variety of carpets, whether pieces or rugs. We
              also have multiple agencies for American, Italian and Spanish
              products to import bedrooms with distinctive designs and shapes,
              dining rooms and living rooms. Al Mira Center also has a special
              department for decoration works managed by competent engineers. In
              turn, we import the best types of carpets and home furniture from
              most centres in the world.
            </p>
            <img
              src={furnitureLogo.src}
              alt="Furniture and Carpets Department"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">02</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                Medical Department.
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              Since 1979, the Medical Division has been furnishing and equipping
              government and private hospitals, as well as private clinics, with
              a wide range of medical equipment. We excel in diversifying our
              product offerings, including hospital beds, heart monitoring and
              ECG machines, X-ray and ultrasound devices, incubators,
              sterilization equipment, dental materials, high-tech medical
              devices, and a variety of medical furniture. Additionally, we
              represent numerous global manufacturers. Our offerings also
              include surgical instruments and medical consumables such as
              gauze, surgical drapes, syringes, butterfly needles, cannulas, and
              medical gloves, among others. Al Mira is proudly one of the first
              companies accredited by the Ministry of Health for the maintenance
              of X-ray equipment. We service more than 300 X-ray machines of
              various models from different manufacturers across Ministry of
              Health hospitals in various regions of the Kingdom, in addition to
              private hospitals and clinics.
            </p>
            <img
              src={medicalLogo.src}
              alt=" Medical Department."
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">03</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                Contracting and Maintenance Department
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              The Construction and Maintenance Department was established in
              1978, covering the following areas of activity: construction of
              industrial and commercial buildings, maintenance of steel
              structures, including roof protection systems through
              waterproofing, thermal insulation, or anti-corrosion measures.
              Additionally, it provides preventive maintenance services, sells
              maintenance systems for buildings, and offers various building
              products and accessories. Finally, in 1992, the sons of Abdul
              Ghani Ibrahim Meera founded Al Mira Investment Group, which
              included the following:
            </p>
            <img
              src={steelLogo.src}
              alt="Contracting and Maintenance Department"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">04</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                Al Mira Steamatic
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              Al Mira Steamatic is the main agent for Steamatic USA. The company
              offers high-quality services such as indoor air solutions and
              emergency response services. Al Mira Steamatic continues to
              penetrate the market by focusing on three types of clients:
              homeowners, building owners, and insurance managers and officers.
              The company is well-positioned to capitalize on both trends by
              providing all necessary services to maintain a clean indoor
              environment and recover from fires, floods, and natural disasters
              at the lowest cost and in the shortest possible time frame.
            </p>
            <img
              src={steamaticLogo.src}
              alt=" Al Mira Steamatic"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">05</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                Al Mira Optical Company Limited
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              The company was established in 1993 with a unique and distinctive
              vision, solidifying its presence since then. Today, we have six
              branches across the Kingdom located in the most prestigious malls
              and distinguished locations. We offer the best equipment for eye
              examination and lens cutting, in addition to medical and colored
              contact lenses. We are always committed to providing the latest
              and finest international brands of eyeglasses, sunglasses, and
              contact lenses. Our constant goal is to deliver exceptional
              services to maintain the satisfaction of our valued customers.
            </p>
            <img
              src={opticsLogo.src}
              alt="Al Mira Optical Company Limited"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
