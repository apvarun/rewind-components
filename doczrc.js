import { css } from "docz-plugin-css";
import postcssConfig from "./postcss.config";

export default {
  title: "Rewind Components",
  description: "",
  plugins: [
    css({
      preprocessor: "postcss",
      loaderOpts: postcssConfig
    })
  ],
  menu: [
    "Introduction",
    "Get Started",
    {
      name: "Components",
      menu: ["Avatar", "Button", "Radio", "Card", "List", "Divider", "NavBar", "Chip"]
    }
  ]
};
