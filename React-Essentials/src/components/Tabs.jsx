export default function Tabs({ButtonContainer, buttons, children}) {
    return(
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    )
}