import React from "react";
import './Hero.css'
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  headContainerAnimation,
  headContentAnimation,
  // headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg className="hero_bg">
          <StarCanvas />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
              {/* css styles */}
              <div class="btn_container">
                <button class="btn-hero">
                  <a style={{ color: "#fff", textDecoration: "none" }} href={Bio.resume} target="blank">Check CV</a> </button>
              </div>

              <div class="social_row">
                <div class="btn_container">
                  <button
                    class="btn-hero"
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Contact Me
                  </button>
                </div>
                <div class="btn_container">
                  <a
                    href={Bio.leetcode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icon-btn"
                    aria-label="LeetCode"
                  >
                    <SiLeetcode />
                  </a>
                </div>
                <div class="btn_container">
                  <a
                    href={Bio.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icon-btn"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div class="btn_container">
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icon-btn"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              {/* <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton> */}
            </HeroLeftContainer>

            <HeroRightContainer id="Right">
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src="/Vasanth_Image.jpeg" alt="hero-image" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
