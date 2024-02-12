import '/src/CSSFiles/Home.scss'
import {useTranslation} from "react-i18next";

function Home() {
    const { t, i18n } = useTranslation();

    return(
        <div className={"homePage"}>
            <div>
                <div className={"welcome"}>{t("homePageHello")}</div>
                <div className={"myName"}>{t('homePageMyName')}</div>
                <div className={"homeSecondLine"}>{t('homePageSecondLine')}</div>
                <div className={"someDescription"}>{t('homePageDescription')}</div>
            </div>
        </div>
    )
}

export default Home
