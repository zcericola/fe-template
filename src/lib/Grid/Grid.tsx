import * as React from 'react';
import styled from 'styled-components';

interface Props {
    size?: string;
};

const calcSize = (size: Props['size']) => {
    switch(size) {
        case 'sm': 
            return '25%';
        case 'md':
            return '50%';
        case 'lg':
            return '100%'
        default:
            return '100%';
    }
};

const StyledGrid = styled.div`
height: 100px;
position: absolute;
top: 200px;
min-width: ${(props: Props) => calcSize(props.size)};
border: 2px solid red;
`;

const Grid: React.FC<Props> = (props) => {
    const {size, children} = props;
    return (
        <StyledGrid
        size={size}
        >
            {children}
        </StyledGrid>
        );

};

export default Grid;