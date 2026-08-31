import React from "react";
import styled from "styled-components";
import HeroSection from "../HeroSection";

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg};
`;

const BackgroundVideo = styled.video`
  transform: rotate(180deg);
  position: absolute;
  top: -340px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  mix-blend-mode: lighten;
  opacity: 0.9;
  pointer-events: none;

  @media (max-width: 960px) {
    top: -200px;
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    top: -320px;
    height: 75%;
    width: 120%;
    left: -10%;
    opacity: 0.4;
  }
`;

const VideoHero = () => {
  return (
    <HeroContainer>
      <BackgroundVideo
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="/blackhole.webm" type="video/webm" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <HeroSection />
    </HeroContainer>
  );
};

export default VideoHero;
