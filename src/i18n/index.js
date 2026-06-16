// src/i18n/index.js
import en from "./en.js";
import et from "./et.js";
import ru from "./ru.js";

export const translations = { en, et, ru };

export const languages = [
    { code: "et", label: "ET", name: "Eesti" },
    { code: "en", label: "EN", name: "English" },
    { code: "ru", label: "RU", name: "Русский" },
];

export const defaultLang = "en";
