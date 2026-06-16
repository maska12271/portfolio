// src/components/layout/Footer.jsx
import { useTranslation } from "../../hooks/useTranslation.jsx";

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-8">
            <div className="container-wide flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
                <span className="font-mono">
                    © {year} Mihhail Zolotarjov · {t("footer.rights")}
                </span>
                <span className="font-mono text-xs">{t("footer.builtWith")}</span>
            </div>
        </footer>
    );
}
