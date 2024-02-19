import {Link} from "react-router-dom";
import '/src/CSSFiles/DesktopHeaderSettings.scss'
import {useTranslation} from "react-i18next";
import '/src/i18n.js'
import {useEffect} from "react";

function DesktopHeaderSettings() {
    const { t, i18n } = useTranslation();
    const languages = ["eng", "est", "rus"]

    useEffect(() => {
        console.log(i18n.language)
    }, []);

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
    }

    function toggleTheme() {
        console.log("change theme")
    }

    console.log(i18n)
    return (
        <div className={"settings"}>
            <Link to={"/contact"} className={"contactLink"}>
                <span className={"contactButton"}>
                    {t('DesktopHeaderContact')}
                </span>
            </Link>
            <div className={"languageSelector"}>
                {languages.map((lng) => {
                    if(lng !== i18n.language){
                        return(
                            <div onClick={() => {changeLanguage(lng)}}>{lng}</div>
                        )
                    }
                })}
            </div>
            {/*<span className="material-symbols-outlined darkLightSwitcher" onClick={toggleTheme}>*/}
            {/*    brightness_medium*/}
            {/*</span>*/}
        </div>
    );
}

export default DesktopHeaderSettings
