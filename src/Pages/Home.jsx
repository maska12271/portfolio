import '/src/CSSFiles/Home.scss'
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

function Home() {
    const { t, i18n } = useTranslation();

    const lines = [
        t("homePageHello"),
        t('homePageMyName'),
        t('homePageSecondLine'),
        t('homePageDescription')
    ];

    const [firstLineDisplayedText, setFirstLineDisplayedText] = useState('');
    const [secondLineDisplayedText, setSecondLineDisplayedText] = useState('');
    const [thirdLineDisplayedText, setThirdLineDisplayedText] = useState('');
    const [fourthLineDisplayedText, setFourthLineDisplayedText] = useState('');
    const [firstLineTyping, setFirstLineTyping] = useState(false);
    const [secondLineTyping, setSecondLineTyping] = useState(false);
    const [thirdLineTyping, setThirdLineTyping] = useState(false);
    const [fourthLineTyping, setFourthLineTyping] = useState(false);
    const typingSpeed = 40;
    const pauseBetweenLines = 700;
    const pauseBetweenWords = 150;


    useEffect(() => {
        setFirstLineDisplayedText('')
        setSecondLineDisplayedText('')
        setThirdLineDisplayedText('')
        setFourthLineDisplayedText('')
        setFirstLineTyping(true)
        setTimeout(() => {
            typeFirstLine(0)
        }, 1500);
    }, [i18n.language]);


    function typeFirstLine(index) {
        if(index < lines[0].length){
            setFirstLineDisplayedText((prev) => prev + lines[0][index])
            setTimeout(() => {
                typeFirstLine(index + 1)
            }, lines[0][index] === ' ' ? pauseBetweenWords : typingSpeed);
        }else{
            setFirstLineTyping(false)
            setSecondLineTyping(true)
            setTimeout(() => {
                typeSecondLine(0)
            }, pauseBetweenLines);
        }
    }

    function typeSecondLine(index) {
        if(index < lines[1].length){
            setSecondLineDisplayedText((prev) => prev + lines[1][index])
            setTimeout(() => {
                typeSecondLine(index + 1)
            }, lines[1][index] === ' ' ? pauseBetweenWords : typingSpeed);
        }else{
            setSecondLineTyping(false)
            setThirdLineTyping(true)
            setTimeout(() => {
                typeThirdLine(0)
            }, pauseBetweenLines);
        }
    }

    function typeThirdLine(index) {
        if(index < lines[2].length){
            setThirdLineDisplayedText((prev) => prev + lines[2][index])
            setTimeout(() => {
                typeThirdLine(index + 1)
            }, lines[2][index] === ' ' ? pauseBetweenWords : typingSpeed);
        }else{
            setThirdLineTyping(false)
            setFourthLineTyping(true)
            setTimeout(() => {
                typeFourthLine(0)
            }, pauseBetweenLines);
        }
    }

    function typeFourthLine(index) {
        if(index < lines[3].length){
            setFourthLineDisplayedText((prev) => prev + lines[3][index])
            setTimeout(() => {
                typeFourthLine(index + 1)
            }, lines[3][index] === ' ' ? pauseBetweenWords : typingSpeed);
        }else{
            setFourthLineTyping(false)
        }
    }

    return(
        <div className={"homePage"}>
            <div>
                <div className={"welcome"}>
                    {firstLineDisplayedText}
                    {firstLineTyping && <span>|</span>}
                </div>
                <div className={"myName"}>
                    {secondLineDisplayedText}
                    {secondLineTyping && <span>|</span>}
                </div>
                <div className={"homeSecondLine"}>
                    {thirdLineDisplayedText}
                    {thirdLineTyping && <span>|</span>}
                </div>
                <div className={"someDescription"}>
                    {fourthLineDisplayedText}
                    {fourthLineTyping && <span>|</span>}
                </div>
            </div>
        </div>
    )
}

export default Home
