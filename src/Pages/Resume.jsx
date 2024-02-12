import config from "../Config.js";
import '/src/CSSFiles/Resume.scss'
import {useRef, useState} from "react";
import { usePdf } from "@mikecousins/react-pdf";
import resume from "../Files/resume.pdf";
import {useTranslation} from "react-i18next";

function Resume() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);
    const {pdfDocument, pdfPage} = usePdf({
        file: resume,
        page,
        canvasRef,
    });

    const downloadPDF = () => {
        fetch(resume).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Mihhail Zolotarjov resume.pdf';
                alink.click();
            })
        })
    }

    return(
        <div className={"resumePage"}>
            <div>
                <div className={"resumeText"}>
                    <div className={"mainResumeText"}>{t("resumePageTitle")}</div>
                    <div className={"notMainResumeText"}>{t("resumePageDescription")}</div>
                </div>
                <div className={"resumeOnPage"}>
                    {!pdfDocument && <span>Loading...</span>}
                    {Boolean(pdfDocument && pdfDocument.numPages) && (
                        <div className={(page === 1) ? "disabledPreviousResumePage" : "previousResumePage"} onClick={() => !(page === 1) && setPage(page - 1)}>
                             <span className="material-symbols-outlined resumeArrow">
                                chevron_left
                            </span>
                        </div>
                    )}
                    <canvas ref={canvasRef} className={"resume"}/>
                    {Boolean(pdfDocument && pdfDocument.numPages) && (
                        <div className={(page === pdfDocument.numPages) ? "disabledNextResumePage" : "nextResumePage"} onClick={() => !(page === pdfDocument.numPages) && setPage(page + 1)}>
                            <span className="material-symbols-outlined resumeArrow">
                                chevron_right
                            </span>
                        </div>
                    )}
                </div>
                <div onClick={downloadPDF} className={"downloadResumeDiv"}>
                    {t("resumePageDownload")}
                    <span className="material-symbols-outlined downloadResumeButton">
                        download
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Resume
