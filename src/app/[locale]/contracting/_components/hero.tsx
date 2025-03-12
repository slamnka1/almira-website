import { bgShape, building, steel, orangeBG, steelLogo } from "@/assets"
import SegmentedControl from "@/components/segment-control"
import { getTranslations } from "next-intl/server"

export async function Hero() {
  const t = await getTranslations("contracting")
  return (
    <section className="bg-[#F4F3F3] relative">
      <img
        src={bgShape.src}
        className="w-2/3 absolute bottom-0 end-0"
        alt="background"
      />
      <img
        src={steel.src}
        className=" absolute bottom-0 end-0"
        alt="background"
      />

      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5  md:px-8 relative ">
        {/* Component */}
        <div className="flex flex-col-reverse lg:grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Image */}
          <div className="  relative mx-auto  inline-flex items-center justify-center  h-full w-full max-w-2xl overflow-hidden">
            <img
              src={orangeBG.src}
              className="h-full absolute start-0"
              alt="background"
            />
            <img src={building.src} alt="building" className=" h-full z-[1]" />
          </div>
          {/* Hero Content */}
          <div className="flex flex-col gap-8 mx-auto  py-10 ">
            <div className="size-45 rounded-2xl p-5 bg-white shadow-xl mx-auto flex items-end justify-center">
              <img src={steelLogo.src} className="w-full" alt="logo" />
            </div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl md:leading-tight text-center text-primary">
              {t("title")}
            </h1>
            <SegmentedControl
              data={[
                {
                  label: t("segment-control.home"),
                  value: "/contracting",
                },
                {
                  label: t("segment-control.services"),
                  value: "https://al-mira.com/index.php/services",
                },
                {
                  label: t("segment-control.projects"),
                  value: "https://al-mira.com/index.php/projects",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
