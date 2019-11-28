import React from "react";
import styled from "styled-components";

const TopElement = styled.span`
    display: block;
    position: relative;
    top: 0;
`;

interface BottomElementProps {
    skew: boolean
}

const BottomElement = styled.span<BottomElementProps>`
    display: block;
    position: relative;
    transform: ${props => props.skew ? 'skew(20deg, 0deg)' : ''} scale(0.8);
`;

interface LetterContainerProps {
    isUserInput: boolean,
    addSpace: boolean,
    width: string,
    height: string,
    key: number
}

const LetterContainer = styled.div<LetterContainerProps>`
    display: inline-block;
    width: ${props => props.width};
    height: ${props => props.height};
    overflow: hidden;
    margin-right: ${props => props.addSpace ? '31px': '1px'}
    ${TopElement} {
        transform: ${props => props.isUserInput ? 'translateY(-120%) skew(-20deg, 0deg) scale(0.8)' : 'none'};
        transition: transform 0.3s;
    }
    ${BottomElement} {
        transform: ${props => props.isUserInput ? 'skew(0deg, 0deg) scale(1)' : 'skew(20deg, 0deg) scale(0.8)'};
        top: ${props => props.isUserInput ? '-25px' : '0'};
        transition: all 0.3s;
    }
`;

type TextVerticalSlideProps = {
    readonly addSpace: boolean,
    readonly key: number,
    readonly defaultElement: string,
    readonly element: string,
    readonly width: string,
    readonly height: string
    readonly skew: boolean
}

const TextVerticalSlide = (props: TextVerticalSlideProps) => {

    const {addSpace, key, width, height, skew, defaultElement, element} = props;

    return (
        <LetterContainer key={key} isUserInput={element !== ""} addSpace={addSpace} width={width} height={height}>
            <TopElement>
                {defaultElement}
            </TopElement>
            <BottomElement skew={skew}>
                {element}
            </BottomElement>
        </LetterContainer>
    )
};

export default TextVerticalSlide;