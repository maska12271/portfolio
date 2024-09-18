import config from "../Config.js";
import {Outlet} from "react-router-dom";
import DesktopLinks from '../Pages/HeaderComponents/DesktopLinks.jsx'
import DesktopHeaderSettings from "./HeaderComponents/DesktopHeaderSettings.jsx";
import MobileMenu from "./HeaderComponents/MobileMenu.jsx";
import '/src/CSSFiles/Header.scss'
import {useEffect, useState} from "react";

function Header() {
    const [desktop, setDesktop] = useState(true)

    useEffect(() => {
        if(window.innerWidth > config.maxSizeOfMobileVersion){
            setDesktop(true)
        }else{
            setDesktop(false)
        }
    }, []);

    window.addEventListener("resize", function() {
        if(window.innerWidth > config.maxSizeOfMobileVersion){
            setDesktop(true)
        }else{
            setDesktop(false)
        }
        return window.innerWidth;
    });

    return (
        <div className={"mainPage"}>
            {desktop ?
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
