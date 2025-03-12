import { navItems } from "@/content/site"
import { Link } from "@/i18n/navigation"
import { Mail, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations()
  return (
    <footer className="block bg-primary">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="sm:flex-row flex justify-between flex-col">
          <h2 className="font-bold text-3xl uppercase md:text-5xl w-full max-w-xl text-white">
            Almira Group
          </h2>
          <div className="mt-8 md:mt-0">
            <div className="mb-4 flex max-w-72 items-start gap-4 justify-start">
              <MapPin size={24} className="text-gray-200 shrink-0" />
              <p className="text-gray-200 text-sm sm:text-base">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
            </div>
            <div className="mb-4 gap-4 flex max-w-72 items-start justify-start">
              <Mail size={24} className="text-gray-200 shrink-0" />
              <p className="text-gray-200  text-sm sm:text-base">
                support@flowspark.co
              </p>
            </div>
          </div>
        </div>
        <div className="mb-14 w-full border-b border-white mt-16"></div>
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <div className="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
            {navItems.map((e) => {
              if (typeof e.link !== "string") return
              return (
                <Link
                  key={e.link}
                  href={e.link}
                  className="inline-block font-normal text-gray-200 transition hover:text-green-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
                >
                  {t(`header.${e.label}`)}
                </Link>
              )
            })}
          </div>
          <p className="text-gray-200 text-sm sm:text-base">
            © Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
