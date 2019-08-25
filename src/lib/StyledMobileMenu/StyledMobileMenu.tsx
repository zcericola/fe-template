import styled from 'styled-components';
import { primary } from '../variables/variables';
import { mQTabletUp } from '../../lib/mediaQueries/mediaQueries';

interface Props {
    background: string;

};

const StyledMobileMenu = styled.div`
height: 100%;
width: 100%;
background: ${primary};
z-index: 2;
position: absolute;
${mQTabletUp}{
    display: none;
    position: relative;
};
`;

export default StyledMobileMenu;