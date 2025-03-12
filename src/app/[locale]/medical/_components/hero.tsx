import { medical1, medical2, medical3, medicalLogo } from "@/assets"
import SegmentedControl from "@/components/segment-control"
import { getTranslations } from "next-intl/server"

export async function Hero() {
  const t = await getTranslations()
  return (
    <section className="bg-[#F4F3F3]">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col gap-10 mx-auto">
            <div className="size-45 rounded-2xl p-5 bg-white shadow-xl mx-auto flex items-end justify-center">
              <img src={medicalLogo.src} className="w-full" alt="medical" />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight text-center text-primary">
              {t("medical.title")}
            </h1>
            <SegmentedControl
              data={[
                {
                  label: t("medical.segment-control.home"),
                  value: "/medical",
                },
                {
                  label: t("medical.segment-control.gallery"),
                  value: "/medical/dental",
                },
                {
                  label: t("medical.segment-control.projects"),
                  value: "/medical/projects",
                },
              ]}
            />
          </div>
          {/* Hero Image */}
          <div className="  relative mx-auto  aspect-square inline-flex items-center justify-center  h-full w-full max-w-2xl">
            <img
              src={medical1.src}
              alt="medical"
              className=" absolute  top-0 translate-y-[20%] start-0 rounded-2xl"
            />
            <img
              src={medical2.src}
              alt="medical"
              className="absolute inline-block w-1/2 start-3 bottom-0 z-[1] rounded-2xl "
            />
            <img
              src={medical3.src}
              alt="medical"
              className="inline-block w-2/3 relative ms-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
