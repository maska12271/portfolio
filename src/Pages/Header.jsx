import config from "../Config.js";
import {Outlet} from "react-router-dom";
import DesktopLinks from '../Pages/HeaderComponents/DesktopLinks.jsx'
import DesktopHeaderSettings from "./HeaderComponents/DesktopHeaderSettings.jsx";
import MobileMenu from "./HeaderComponents/MobileMenu.jsx";
import '/src/CSSFiles/Header.scss'

function Header() {

    return (
        <div className={"mainPage"}>
            {window.innerWidth > config.maxSizeOfMobileVersion ?
                <div className={"header"}>
                    <DesktopLinks/>
                    <DesktopHeaderSettings/>
                </div>
                :
                <div className={"header"}>
                    <MobileMenu/>
                </div>
            }
            <Outlet/>
        </div>
    )
}

export default Header
