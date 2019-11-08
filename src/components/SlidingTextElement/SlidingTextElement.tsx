import React from "react";
import styled from "styled-components";

const TopElement = styled.span`
    display: block;
    position: relative;
    top: 0;
`;

const BottomElement = styled.span`
    display: block;
    position: relative;
    transform: skew(20deg, 0deg) scale(0.8);
`;

interface ContainerProps {
    width: string,
    height: string,
    addSpace: boolean,
    isUserInput: boolean
}

const Container = styled.div<ContainerProps>`
    display: inline-block;
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    overflow: hidden;
    margin-right: ${props => props.addSpace ? '31px' : '1px'};
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

type SlidingElementProps = {
    readonly topElementContent: string,
    readonly bottomElementContent: string,
    readonly containerWidth: string,
    readonly containerHeight: string,
    readonly addElementSpace: boolean,
    readonly isElementUserInput: boolean
}

const SlidingTextElement = (props: SlidingElementProps) => {
    const {topElementContent, bottomElementContent, containerWidth, containerHeight, addElementSpace, isElementUserInput} = props;
    return (
        <Container width={containerWidth} height={containerHeight} addSpace={addElementSpace} isUserInput={isElementUserInput}>
            <TopElement>
                {topElementContent}
            </TopElement>
            <BottomElement>
                {bottomElementContent}
            </BottomElement>
        </Container>
    )
};

export default SlidingTextElement;