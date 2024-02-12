import {Link} from "react-router-dom";
import config from "../../Config.js";
import '/src/CSSFiles/DesktopLinks.scss'
import {useTranslation} from "react-i18next";

function DesktopLinks() {
    const { t, i18n } = useTranslation();

    return (
        <div className={"desktopLinksAndLogo"}>
            <Link to={"/"}>
                    <span className="material-symbols-outlined homeLogo">
                        home_app_logo
                    </span>
            </Link>
            {config.desktopLinks.map((link) => {
                return(
                    <Link to={link.link} data-text="Awesome" className="button">
                        <span className="actual-text">&nbsp;{t("header" + link.name)}&nbsp;</span>
                        <span className="hover-text" aria-hidden="true">&nbsp;{t("header" + link.name)}&nbsp;</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default DesktopLinks
