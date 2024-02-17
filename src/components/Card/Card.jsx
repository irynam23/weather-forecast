import { StyledData, StyledImage, StyledName, StyledTextWrapper, StyledWrapper } from "./Card.styled"

export const Card = () => {
    return (
        <StyledWrapper>
            <StyledImage></StyledImage>
            <StyledTextWrapper>
                <StyledName>Name</StyledName>
                <StyledData>Data</StyledData>
            </StyledTextWrapper>
            
        </StyledWrapper>
    )
}