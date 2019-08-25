import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children?: any;
};

const StyledColumn = styled.div`
height: inherit;
width: 100%;
border: 2px solid black;
`;

const Column: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <StyledColumn >
            {children}
        </StyledColumn>
    );

};

export default Column;