import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { TimelineLite, TimelineMax, Power3 } from "gsap";

import Logo from "./Logo";

const LoadingScreenComp = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin: 0;
  overflow: hidden;
`;

const WhiteScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5000px;
  height: 5000px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
`;

const LoadingScreen = ({ isLoadingCallback }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [mounted, setMounted] = useState(false);
  let logo = useRef(null);
  let whiteScreen = useRef(null);

  const logoEnter = () => {
    let tl = new TimelineLite();

    tl.from(logo, {
      scale: 0,
      duration: 0.8,
      ease: Power3.easeOut,
    });

    return tl;
  };

  const logoScaleOutIn = () => {
    let tl = new TimelineMax();

    const scaleTime = 0.8;

    tl.to(logo, {
      scale: 0.6,
      duration: scaleTime,
    }).to(logo, {
      scale: 1,
      duration: scaleTime,
    });

    return tl;
  };

  const logoScaleDownToZero = () => {
    let tl = new TimelineLite();

    tl.to(logo, {
      scale: 0,
      duration: 0.5,
      ease: Power3.easeIn,
    });

    return tl;
  };

  const whiteScreenEnter = () => {
    let tl = new TimelineLite();

    tl.to(whiteScreen, {
      scale: 1,
      duration: 0.7,
      ease: Power3.easeInOut,
    });

    return tl;
  };

  const onComplete = useCallback(() => {
    setAnimationComplete(true);
    isLoadingCallback(false);
  }, [isLoadingCallback]);

  useEffect(() => {
    setMounted(true);
    const master = new TimelineLite({ paused: true, onComplete });
    master.add(logoEnter(), "+=0.5");
    master.add(logoScaleOutIn(), "-=0.2");
    master.add(logoScaleDownToZero());
    master.add(whiteScreenEnter(), "+=0.5");
    // master.seek(4);
    master.play();
  }, [onComplete]);

  if (!animationComplete) {
    return (
      <LoadingScreenComp>
        <Logo ref={(el) => (logo = el)} size={mounted ? 70 : 0} />
        <WhiteScreen ref={(el) => (whiteScreen = el)} />
      </LoadingScreenComp>
    );
  }

  return null;
};

export default LoadingScreen;
