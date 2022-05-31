import "../style.css";
import "./storybook.scss";
import "pretendard/dist/web/static/pretendard.css";
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";

addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    sort: "requiredFirst",
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1,
    },
    canvas: { title: "Sandbox" },
  },
  themes: {
    default: "Light",
    list: [
      { name: "Light", class: "light-app-them", color: "#ffffff" },
      { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
      { name: "Black", class: "black-app-theme", color: "#111111" },
      { name: "Hacker", class: "hacker_theme-app-theme", color: "#282a36" },
    ],
  },
  options: {
    storySort: {
      order: [
        "Welcome",
        "Foundations",
        "Buttons",
        "Inputs",
        "Data display",
        "Media",
        "Popover",
        "Pickers",
        "*",
        "Accessibility",
        "Hooks",
      ],
    },
  },
  docs: {
    theme: themes.dark,
    inlineStories: true,
    container: ({ children, context }) => (
      <DocsContainer context={context}>{children}</DocsContainer>
    ),
    page: DocsPage,
  },
});
