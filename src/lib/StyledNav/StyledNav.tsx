import styled from 'styled-components';
import { mQTabletUp } from '../mediaQueries/mediaQueries';

const StyledNav = styled.nav`
display: flex;
flex-direction: column;
overflow: hidden;
margin-top: 10vh;
span {
    color: white;
    margin: 10px auto;
    font-size: 1.5rem;
    cursor: pointer;
    ${mQTabletUp} {
        margin: 0 10px;
    }
}

${mQTabletUp} {
    flex-direction: row;
    margin-top: 0;
}

`;

export default StyledNav;