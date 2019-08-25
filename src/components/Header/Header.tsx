import * as React from 'react';
import styled from 'styled-components';
import { primary, headerHeight, transition, navPaddingX, mainFont } from '../../lib/variables/variables';
import { mQTabletUp } from '../../lib/mediaQueries/mediaQueries';
import logo from '../../assets/sonagi.svg';
import StyledNav from '../../lib/StyledNav/StyledNav';

interface Props {
    className?: string;
    position?: string;
    shadow?: boolean | string; //union type allows for string or bool to be passed from app
};
//position fixed removes element from document flow
//must use calc on the width to allow for padding to be applied without extending beyond the width of the html document
const StyledHeader = styled.header`
background-color: #3ec5e6;
height: ${headerHeight}px;
width: calc(100% - ${navPaddingX * 2}px);
padding: 0 ${navPaddingX}px;
top: 0;
left: 0;
z-index: 1;
${transition};
${ (props: Props) => props.shadow || ''};
position: fixed;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
display: none;
${mQTabletUp}{
    display: flex;
};
`;

const StyledLogo = styled.img`
height: 20px;
max-width: 50px;
${mQTabletUp}{
    height: 30px;
    max-width: 100px;
};
`;



const Header: React.FC<Props> = (props) => {
    const { shadow } = props;
    return (
        <StyledHeader
            shadow={shadow}
        >
            <StyledLogo src={logo} alt='sonagi logo' />
            <StyledNav>
                <span>About</span>
                <span>Contact</span>
            </StyledNav>
        </StyledHeader>
    );

};

export default Header;