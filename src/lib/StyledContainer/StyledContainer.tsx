import styled from 'styled-components';

interface Props {
    background: string;

};

const StyledContainer = styled.div`
height: 200vh;
width: 100%;
overflow: hidden;
background-image: ${(props: Props) => props.background || null};
`;

export default StyledContainer;