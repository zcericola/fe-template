/// <reference types="react-scripts" />

// declare module 'react';
declare module 'styled-components';
declare module '*.svg';
declare module 'gsap';
declare namespace JSX {
    interface Element { }
    interface IntrinsicElements {
        div: any;
        header: any;
        fragment: any;
    }
}