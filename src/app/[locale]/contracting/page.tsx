import React from "react"
import { Hero } from "./_components/hero"
import { About } from "./_components/about"

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Page
