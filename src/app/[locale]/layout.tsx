import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Footer } from "./_components/footer"
import "./globals.css"
import { Header } from "./_components/header"
import { Noto_Sans_Arabic } from "next/font/google"
import { headers } from "next/headers"
import { parse } from "url"
import ColorThemeSwitch from "./_components/color-theme-switch"

export const metadata: Metadata = {
  title: { template: "Almira Group | %s", default: "Almira group" },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const font = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  const headersList = await headers()
  const referer = headersList.get("referer")
  const pathname = (referer ? parse(referer).pathname : "/") || "/"
  let color = "#006144"
  if (pathname.includes("/furniture")) color = "#AB8542"
  if (pathname.includes("/medical")) color = "#6EB04A"
  if (pathname.includes("/contracting")) color = "#EC7E00"
  if (pathname.includes("/steamatic")) color = "#00367E"
  if (pathname.includes("/optics")) color = "#8E0104"

  return (
    <html
      dir={locale == "ar" ? "rtl" : "ltr"}
      lang={locale}
      className={font.className}
      style={{
        // @ts-ignore
        "--primary-color-root": color,
      }}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}

          <Footer />
          <ColorThemeSwitch />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
