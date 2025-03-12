"use client"
import { opticsLogo } from "@/assets"
import SegmentedControl from "@/components/segment-control"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations()
  return (
    <section className="bg-[#F4F3F3]">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start">
          {/* Hero Content */}
          <div className="flex flex-col gap-10 mx-auto">
            <div className="size-40 rounded-2xl p-5 bg-white shadow-xl mx-auto flex items-end justify-center">
              <img src={opticsLogo.src} className="w-full" alt="furniture" />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight text-center text-primary">
              {t("optics.title")}
            </h1>
            <SegmentedControl
              data={[
                {
                  label: t("optics.segment-control.home"),
                  value: "/optics",
                },
                {
                  label: t("optics.segment-control.gallery"),
                  value: "/optics/gallery",
                },
                {
                  label: t("optics.segment-control.brands"),
                  value: "/optics/brands",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
