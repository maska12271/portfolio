import '/src/CSSFiles/About.scss'
import config from "../Config.js";
import {useTranslation} from "react-i18next";


function About() {
    const { t, i18n } = useTranslation();

    return(
        <div className={"aboutPage"}>
            <div>
                <div className={"aboutMeText"}>{t("About me")}</div>
                <div className={"myDescriptionText"}>{t("findMoreInformationAboutMe")}</div>
                <div className={"skillsAndDescriptionDiv"}>
                    <div className={"moreAboutMeFrame"}>
                        <div className={"moreAboutMeTitle"}>{t("moreAboutMe")}</div>
                        <div className={"moreAboutMeBody"}>
                            <div className={"firstText"}>
                                {t("aboutMeText1")}<div>{t("aboutMeText2")}</div>{t("aboutMeText3")}<div>{t("aboutMeText4")}</div>{t("aboutMeText5")}
                            </div>
                            <div className={"secondText"}>
                                {t("aboutMeText6")}<div>{t("aboutMeText7")}</div>{t("aboutMeText8")}<div>{t("aboutMeText9")}</div>{t("aboutMeText10")}<div>{t("aboutMeText11")}</div>{t("aboutMeText12")}
                            </div>
                            <div className={"thirdText"}>
                                {t("aboutMeText13")}<div>{t("aboutMeText14")}</div>{t("aboutMeText15")}<div>{t("aboutMeText16")}</div>{t("aboutMeText17")}
                            </div>
                        </div>
                    </div>
                    <div className={"mySkillsFrame"}>
                        <div className={"mySkillsTitle"}>{t("mySkills")}</div>
                        <div className={"mySkillsBody"}>
                            {config.mySkills.map((skill) => {
                                return(
                                    <div className={'skill'}>{t("mySkills" + skill)}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
