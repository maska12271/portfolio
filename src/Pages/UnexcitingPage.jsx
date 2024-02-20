import {useEffect} from "react";

function UnexcitingPage() {

    useEffect(() => {
        window.location.href = '/portfolio'
    }, []);
}

export default UnexcitingPage
