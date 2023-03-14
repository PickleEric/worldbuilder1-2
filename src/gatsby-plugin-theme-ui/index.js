import { merge } from "theme-ui"
import { Navbar } from "@theme-ui/components"

const theme = {
  components: {
    Navbar: merge(Navbar, {
      variants: {
        nav: {
          bg: "background",
          py: 2,
        },
        link: {
          color: "text",
          px: 3,
          py: 2,
          textDecoration: "none",
          fontWeight: "bold",
          "&:hover": {
            bg: "highlight",
            color: "background",
          },
        },
      },
    }),
  },
}

export default theme
