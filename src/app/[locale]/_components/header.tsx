"use client"
import { logo } from "@/assets"
import LanguageSwitcher from "@/components/lang-switch"
import { navItems } from "@/content/site"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/cn"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import * as Accordion from "@radix-ui/react-accordion"

export function Header() {
  const t = useTranslations("header")
  const pathName = usePathname()

  // toggle state
  const [isOpened, setIsOpened] = useState(false)
  const toggle = () => {
    setIsOpened((pre) => !pre)
  }

  useEffect(() => {
    const body = document.body
    body.style.cssText = isOpened
      ? "position:fixed; top:0;"
      : " position:relative;"
  }, [isOpened])
  return (
    <header className="relative">
      <nav className=" mx-auto h-auto w-full max-w-screen-2xl md:relative md:top-0">
        <div className="flex px-6  flex-row md:items-center justify-between md:px-10 py-3 xl:px-20">
          <Link href="/">
            <img alt="logo" src={logo.src} className="h-10 lg:h-12" />
          </Link>
          <div className="hidden mt-14  flex-col space-y-8 md:mt-0 gap-2 lg:flex lg:flex-row lg:space-y-0">
            {navItems.map((element) => {
              if (element.link && typeof element.link === "object") {
                const links = element.link.map((e) => e.link)
                return (
                  <DropdownMenu.Root key={element.label}>
                    <DropdownMenu.Trigger
                      key={element.label}
                      className={cn(
                        "flex rounded-lg px-3 lg:px-6 items-center max-md:justify-between md:gap-3 lg:gap-4 md:py-3 lg:py-4 hover:bg-gray-100 hover:text-primary text-gray-800   ",
                        links.includes(pathName as "/medical") &&
                          "bg-gray-100 text-primary"
                      )}
                    >
                      {t(element.label)} <ChevronDown size={16} />
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white border rounded shadow-md p-2 w-fit z-10 mt-2">
                        {element.link.map((option) => (
                          <DropdownMenu.Item
                            key={option.label}
                            className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                          >
                            <Link
                              className="flex grow rounded-lg px-5 items-center gap-5 py-5 xl:px-8"
                              href={option.link}
                            >
                              {/* ICON */}
                              <div className="relative">
                                <svg
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect width="40" height="40" fill="#C4C4C4" />
                                  <path
                                    d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                              {/* TEXT */}
                              <div>
                                <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                                  {t(option.label)}
                                </h2>
                                <p className="font-inter max-w-64 text-sm text-gray-500 md:max-w-sm">
                                  {t(`${option.label}-description`)}
                                </p>
                              </div>
                            </Link>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                )
              }

              return (
                <Link
                  // prefetch="hover"
                  href={element.link}
                  key={element.label}
                  className={cn(
                    "font-inter rounded-lg px-3 lg:px-6 py-4 hover:bg-gray-100 hover:text-primary",
                    pathName === element.link && "bg-gray-100 text-primary"
                  )}
                >
                  {t(element.label)}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center  gap-3 ">
            <button
              onClick={toggle}
              className=" lg:hidden cursor-pointer  bg-gray-50 hover:bg-gray-100 duration-150  p-2 rounded"
            >
              {isOpened ? <X /> : <Menu />}
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        <div
          className={cn(
            "absolute top-16 z-10 bg-white w-full   duration-300  lg:h-0 overflow-hidden",
            isOpened ? "h-screen" : " h-0"
          )}
        >
          <div className="w-full px-4 flex flex-col gap-2 py-8 h-[calc(100svh-90px)]  overflow-scroll">
            {navItems.map((element) => {
              if (element.link && typeof element.link === "object") {
                const links = element.link.map((e) => e.link)
                return (
                  <Accordion.Root type="single" collapsible key={element.label}>
                    <Accordion.Item value="1">
                      <Accordion.Header>
                        <Accordion.Trigger
                          key={element.label}
                          className={cn(
                            "flex rounded-lg px-3 lg:px-6 items-center justify-between md:gap-3 lg:gap-4 py-4  hover:bg-gray-100 hover:text-primary text-gray-800  w-full  ",
                            links.includes(pathName as "/medical") &&
                              "bg-gray-100 text-primary"
                          )}
                        >
                          {t(element.label)} <ChevronDown size={16} />
                        </Accordion.Trigger>
                      </Accordion.Header>

                      <Accordion.Content className="bg-white data-[state='open']:animate-[slideDown_300ms_linear]  data-[state='closed']:animate-[slideUp_300ms_linear] overflow-hidden">
                        {element.link.map((option) => (
                          <div
                            key={option.label}
                            className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                          >
                            <Link
                              className="flex grow rounded-lg px-5 items-center gap-5 py-5 xl:px-8"
                              href={option.link}
                            >
                              {/* ICON */}
                              <div className="relative">
                                <svg
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect width="40" height="40" fill="#C4C4C4" />
                                  <path
                                    d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                              {/* TEXT */}
                              <div>
                                <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                                  {t(option.label)}
                                </h2>
                                <p className="font-inter max-w-64 text-sm text-gray-500 md:max-w-sm">
                                  {t(`${option.label}-description`)}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </Accordion.Content>
                    </Accordion.Item>
                  </Accordion.Root>
                )
              }

              return (
                <Link
                  // prefetch="hover"
                  href={element.link}
                  key={element.label}
                  className={cn(
                    "font-inter rounded-lg px-3 lg:px-6 py-4 hover:bg-gray-100 hover:text-primary",
                    pathName === element.link && "bg-gray-100 text-primary"
                  )}
                >
                  {t(element.label)}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
