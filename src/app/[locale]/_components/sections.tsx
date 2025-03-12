import {
  carpetBg,
  furnitureLogo,
  medicalBg,
  medicalLogo,
  opticsBg,
  opticsLogo,
  steamaticLogo,
  steelBg,
  steelLogo,
  stematicBg,
} from "@/assets"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

export function Sections() {
  const t = useTranslations("sections")
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          {t("title")}
        </h2>
        <p className=" mb-4 mt-4 text-center text-lg text-gray-500 md:mb-12 lg:mb-16">
          {t("companies")}
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 mg:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Item */}
          <Link
            href={"/furniture"}
            className="relative flex h-[300px] items-end shadow-lg rounded-xl"
          >
            <img
              alt="furniture logo"
              src={carpetBg.src}
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <img
                src={furnitureLogo.src}
                alt="logo"
                className="block h-20 object-contain"
              />
              <p className="text-sm sm:text-base">{t("furniture")}</p>
            </div>
          </Link>
          {/* Item */}
          <Link
            href={"/medical"}
            className="relative flex h-[300px] items-end shadow-lg rounded-xl"
          >
            <img
              src={medicalBg.src}
              alt="logo"
              className="block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <img
                src={medicalLogo.src}
                alt="logo"
                className="block h-20 object-contain"
              />
              <p className="text-sm sm:text-base">{t("medical")}</p>
            </div>
          </Link>
          {/* Item */}
          <Link
            href={"/contracting"}
            className="relative flex h-[300px] items-end shadow-lg rounded-xl"
          >
            <img
              src={steelBg.src}
              alt="logo"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <img
                src={steelLogo.src}
                alt="logo"
                className="block h-20 object-contain"
              />
              <p className="text-sm sm:text-base">{t("contracting")}</p>
            </div>
          </Link>
        </div>
        <div className="h-20"></div>

        <p className=" mb-4 mt-4 text-center text-lg text-gray-500 md:mb-12 lg:mb-16">
          {t("sister-companies")}
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          {/* Item */}
          <Link
            href={"/optics"}
            className="relative flex h-[300px] items-end shadow-lg rounded-xl"
          >
            <img
              src={opticsBg.src}
              alt="logo"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <img
                src={opticsLogo.src}
                alt="logo"
                className="block h-full w-full rounded-lg object-cover"
              />
              <p className="text-sm sm:text-base">{t("optics")}</p>
            </div>
          </Link>
          {/* Item */}
          <Link
            href={"/steamatic"}
            className="relative flex h-[300px] items-end shadow-lg rounded-xl"
          >
            <img
              src={stematicBg.src}
              alt="logo"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <img
                src={steamaticLogo.src}
                alt="logo"
                className="block h-full w-full rounded-lg object-cover"
              />
              <p className="text-sm sm:text-base">{t("steamatic")}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
