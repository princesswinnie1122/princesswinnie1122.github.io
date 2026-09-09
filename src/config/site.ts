import type { SiteConfig, ThemeConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://princesswinnie1122.github.io/",
    author: "Winnie Sheng",
    desc: "Winnie Sheng studies Chemical Engineering and Computer Science at NTHU and researches machine learning for molecular and quantum systems.",
    title: "Winnie Sheng",
    favicon: "/levi.png",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    defaultTheme: "dark",
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_midnight",
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
