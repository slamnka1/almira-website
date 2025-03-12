export const navItems = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "companies",
    link: [
      { label: "furniture", link: "/furniture" },
      { label: "medical", link: "/medical" },
      { label: "contracting", link: "/contracting" },
    ],
  },
  {
    label: "sister-companies",
    link: [
      { label: "steamatic", link: "/steamatic" },
      { label: "optics", link: "/optics" },
    ],
  },
  {
    label: "about-us",
    link: "/about-us",
  },
  {
    label: "contact-us",
    link: "/contact-us",
  },
] as const
