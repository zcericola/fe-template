import * as React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import StyledContainer from './lib/StyledContainer/StyledContainer';
import StyledNav from './lib/StyledNav/StyledNav';
import StyledMobileMenu from './lib/StyledMobileMenu/StyledMobileMenu';
import Grid from './lib/Grid/Grid';
import { primary, accent, accent2, headerHeight, shadow } from './lib/variables/variables';
const { useEffect, useState } = React;

interface Props { };

const App: React.FC<Props> = (props) => {
    const bgGradient = `linear-gradient(${primary}, ${accent}, ${accent2})`;
    const [showShadow, setDisplayState] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', showShadowOnScroll);
    });
    const showShadowOnScroll = () => {
        if (window.scrollY > headerHeight) {
           setDisplayState(true);    
        } else {
            setDisplayState(false);
        }
    };


    return (
        <StyledContainer
            background={bgGradient}
            onScroll={() => showShadowOnScroll()}
        >
            <StyledMobileMenu>
                <StyledNav>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                </StyledNav>
            </StyledMobileMenu>
            <Header
                shadow={showShadow ? shadow : ''}
            />
            <Grid size={'md'}>
                
            </Grid> 
        </StyledContainer>
    );
}

export default App;
