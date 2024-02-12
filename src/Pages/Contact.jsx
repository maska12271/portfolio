import '/src/CSSFiles/Contact.scss'
import config from "../Config.js";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


function Contact() {
    const { t, i18n } = useTranslation();

    return (
        <div className={"contactPage"}>
            <div>
                <div className={"thankYou"}>{t("contactPageTitle")}</div>
                <div className={"canIHelp"}>{t("contactPageDescription")}</div>
                <div className={"wrapper"}>
                    <Link className={"icon telegram"} to={"https://t.me/Maska1228"} target={"_blank"}>
                        {window.innerWidth > config.maxSizeOfMobileVersion &&
                            <div className="tooltip">{t("contactPageTooltipTelegram")}</div>
                        }
                        <span><i className={"fab fa-telegram socialMediaLink"}></i></span>
                    </Link>
                    <Link className={"icon instagram"}
                          to={"https://instagram.com/zolotarjovmihhail?igshid=YmMyMTA2M2Y="} target={"_blank"}>
                        {window.innerWidth > config.maxSizeOfMobileVersion &&
                            <div className="tooltip">{t("contactPageTooltipInstagram")}</div>
                        }
                        <span><i className={"fab fa-instagram socialMediaLink"}></i></span>
                    </Link>
                    <Link className={"icon twitter"} to={"https://twitter.com/Maska1227?t=FTv88FdkN4UZaj4EL9edcw&s=09"}
                          target={"_blank"}>
                        {window.innerWidth > config.maxSizeOfMobileVersion &&
                            <div className="tooltip">{t("contactPageTooltipTwitter")}</div>
                        }
                        <span><i className={"fab fa-twitter socialMediaLink"}></i></span>
                    </Link>
                    <Link className={"icon linkedin"} to={"www.linkedin.com/in/mihhail-zolotarjov-94886a2a9"}
                          target={"_blank"}>
                        {window.innerWidth > config.maxSizeOfMobileVersion &&
                            <div className="tooltip">{t("contactPageTooltipLinkedin")}</div>
                        }
                        <span><i className={"fab fa-linkedin socialMediaLink"}></i></span>
                    </Link>
                    <Link className={"icon mail"}
                          to={"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxwRcLXMkXKqQCJRMFhdXSChRCRhRrtMZGNHDbJcLWpVCqpxmcTclZJTNkHHqwlVDLDpdJ"}
                          target={"_blank"}>
                        {window.innerWidth > config.maxSizeOfMobileVersion &&
                            <div className="tooltip">{t("contactPageTooltipMail")}</div>
                        }
                        <span><i className={"fa fa-envelope socialMediaLink"}></i></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
