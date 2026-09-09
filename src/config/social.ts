import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/princesswinnie1122",
        linkTitle: `Winnie Sheng on GitHub`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:ewinnie@gapp.nthu.edu.tw",
        linkTitle: `Send an email to Winnie Sheng`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=HTwyqvkAAAAJ&hl", // Paste your Google Scholar profile URL here.
        linkTitle: "Winnie Sheng on Google Scholar",
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/winnie-sheng", // Paste your LinkedIn profile URL here.
        linkTitle: "Winnie Sheng on LinkedIn",
        isActive: true,
    },

];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    LinkedIn: "LinkedIn",
    "Google Scholar": "GoogleScholar",
};