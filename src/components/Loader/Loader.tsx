import * as React from 'react';
import { TweenMax, Linear } from 'gsap';
import styled from 'styled-components';
import { primary } from '../../lib/variables/variables';
import { mQTabletUp } from '../../lib/mediaQueries/mediaQueries';
const { useEffect, useRef } = React;

interface Props { };

const StyledLoader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: bottom;
    justify-content: center;
    height: 50px;
    width: 110px;
    position: absolute;
    top: 100px;
    left: 100px;
`;

const StyledBall = styled.div`
    height: 30px;
    width: 30px;
    background-color: white;
    margin: 0 5px;
`;
//TODO: get this animation to work with all three blocks and keep it DRY 
//can't pass the ref because it's being called before assignment
const Loader: React.FC<Props> = (props) => {
    let ballElement1: object = useRef(null);
    let ballElement2: object = useRef(null);
    let ballElement3: object = useRef(null);
    useEffect(() => {
        TweenMax.to(
            ballElement1,
            3,
            {
                repeat: -1,
                rotation: 360,
                ease: Linear.easeNone
            }
        );
        TweenMax.to(
            ballElement2,
            3,
            {
                repeat: -1,
                rotation: 360,
                ease: Linear.easeNone
            }
        );
        TweenMax.to(
            ballElement3,
            3,
            {
                repeat: -1,
                rotation: 360,
                ease: Linear.easeNone
            }
        );
    }, [ballElement1, ballElement2, ballElement3]); //array is the params being passed to the useEffect hook

    const scaleUp = (element: object) => {
        TweenMax.to(element, 1, {
            scale: 1.5,
            ease: Linear.ease
        });
    }

    const scaleDown = (element: object) => {
        TweenMax.to(element, 1, {
            scale: 1
        });
    }

    return (
        <StyledLoader>
            <StyledBall
                onMouseEnter={() => scaleUp(ballElement1)}
                onMouseLeave={() => scaleDown(ballElement1)}
                ref={(el: object) => { ballElement1 = el }}
            ></StyledBall>
            <StyledBall
                onMouseEnter={() => scaleUp(ballElement2)}
                onMouseLeave={() => scaleDown(ballElement2)}
                ref={(el: object) => { ballElement2 = el }}
            ></StyledBall>
            <StyledBall
                onMouseEnter={() => scaleUp(ballElement3)}
                onMouseLeave={() => scaleDown(ballElement3)}
                ref={(el: object) => { ballElement3 = el }}
            ></StyledBall>

        </StyledLoader >
    );


};

export default Loader;