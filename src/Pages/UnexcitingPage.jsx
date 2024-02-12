function UnexcitingPage() {

    function redirectToHomePage() {
        window.location.href = '/'
    }

    return (
        <div>{redirectToHomePage()}</div>
    )
}

export default UnexcitingPage
