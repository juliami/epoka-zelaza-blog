export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "juliami",
  desc: "O płytach i nie tylko",
  title: "Epoka Żelaza",
  ogImage: "radio.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "pl",
  timezone: "Europe/Warsaw", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
