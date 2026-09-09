import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_default: {
        background: "#eeedf8",
        foreground: "#282644",
        accent: "#6150a8",
        muted: "#716b8b",
        border: "#d3cee6",
        surface: "#f8f7fd",
        isDark: false,
    },
    dark_default: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#343f60",
        border: "#ab4b08",
        surface: "#212737",
        isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#b84c30',
    },
    dark_midnight: {
        isDark: true,
        background: '#17182b',
        surface: '#20213a',
        foreground: '#e9e7f5',
        muted: '#aaa8c2',
        border: '#343550',
        accent: '#f4b8a4',
    }
};