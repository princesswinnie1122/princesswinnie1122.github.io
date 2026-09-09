export interface SiteConfig {
    website: string;
    author: string;
    desc: string;
    title: string;
    ogImage?: string;
    favicon: string;
    lang: string;
}

export interface ThemeConfig {
    defaultTheme: "light" | "dark";
    lightAndDark: boolean;
    themeLight: string;
    themeDark: string;
}

export interface UmamiAnalyticsConfig {
    websiteId: string;
    src: string;
}

export interface AnalyticsConfig {
    ga4Id?: string;
    umami?: UmamiAnalyticsConfig;
}

export interface NavLink {
    href: string;
    label: string;
    isActive: boolean;
}

export interface SocialLink {
    name: string;
    href: string;
    linkTitle: string;
    isActive: boolean;
}

export interface PageConfig {
    title: string;
    subtitle: string;
    isActive: boolean;
}

export type PagesConfig = Record<string, PageConfig>;