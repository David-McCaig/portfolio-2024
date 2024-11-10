'use client'
// Logic
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const TransitionEffect = () => {
    const transitionRef = useRef(null);
    const isInView = useInView(transitionRef, { once: true });

    const determineTransitionType = (transitionInput: string) => ({
        transform: isInView ? "none" : transitionInput,
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
    });

    return { transitionRef, determineTransitionType };
};