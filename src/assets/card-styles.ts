import styled from "styled-components";

interface ContainerProps {
    narrow?: boolean
    showBorder?: boolean
}

export const Container = styled.label<ContainerProps>`
    width: ${props => props.narrow ? '30%' : '100%'}
    border: ${props => props.showBorder ? '1px solid white' : 'none'};
    border-radius: 4px;
    line-height: 100%;
    display: grid;
    grid-template-rows: 15px 20px;
    text-align: left;
    padding: 7px 8px
    cursor: pointer;
`;

export const Title = styled.p`
    margin: 0;
    font-size: ${props => props.theme.font.titleSize}
    color: ${props => props.theme.font.titleColor}
    font-weight: ${props => props.theme.font.weight}
    text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
`;

export const DisplayArea = styled.div`
    font-size: ${props => props.theme.font.sizeSm}
    font-weight: ${props => props.theme.font.weight}
    color: ${props => props.theme.font.color}
    line-height: 100%;
    text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
    white-space: nowrap;
`;
