import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  CardContainer,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>My Works</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine_learning" ? (
            <ToggleButton
              active
              value="machine_learning"
              onClick={() => setToggle("machine_learning")}
            >
              AI/ML
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine_learning"
              onClick={() => setToggle("machine_learning")}
            >
              AI/ML
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              Web
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              Web
            </ToggleButton>
          )}
          <Divider />
          {toggle === "iot" ? (
            <ToggleButton
              active
              value="iot"
              onClick={() => setToggle("iot")}
            >
              IoT
            </ToggleButton>
          ) : (
            <ToggleButton value="iot" onClick={() => setToggle("iot")}>
              IoT
            </ToggleButton>
          )}
          <Divider />
          {toggle === "security" ? (
            <ToggleButton
              active
              value="security"
              onClick={() => setToggle("security")}
            >
              Security
            </ToggleButton>
          ) : (
            <ToggleButton value="security" onClick={() => setToggle("security")}>
              Security
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        {isMobile ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            loopAdditionalSlides={2}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[Pagination, Autoplay]}
            style={{ width: "100%", padding: "20px" }}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <CardContainer>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          </CardContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
