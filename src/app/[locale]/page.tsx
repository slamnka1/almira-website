import { AboutUs } from "./_components/about-us"
import { ContactUs } from "./_components/contact-us"
import { Facts } from "./_components/facts"
import Gate from "./_components/gate"
import { Hero } from "./_components/hero"
import { Sections } from "./_components/sections"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Facts />
      <Sections />
      <ContactUs />
      <Gate />
      {/* <Footer /> */}
    </>
  )
}
