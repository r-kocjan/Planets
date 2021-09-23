import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import data from "../data.json";
const Main = ({ planet }) => {
  const buttonOverview = useRef(null);
  const buttonInternal = useRef(null);
  const buttonGeology = useRef(null);
  const imageRef = useRef(null);
  const geologyImage = useRef(null);
  const contentRef = useRef(null);
  const sourceRef = useRef(null);

  const mediaQuery = window.matchMedia("(max-width:768px)");

  const buttons = [buttonOverview, buttonInternal, buttonGeology];

  const changeImage = function (e) {
    buttons.forEach((button) => {
      button.current.classList.remove("active");
    });

    e.target.closest(".button").classList.add("active");

    if (e.target.firstChild.textContent === "01") {
      imageRef.current.src = data[planet].images.planet;
      contentRef.current.textContent = data[planet].overview.content;
      geologyImage.current.style.opacity = "0";
      geologyImage.current.style.transform = "scale(0)";
      sourceRef.current.href = data[planet].overview.source;
    } else if (e.target.firstChild.textContent === "02") {
      imageRef.current.src = data[planet].images.internal;
      contentRef.current.textContent = data[planet].structure.content;
      geologyImage.current.style.opacity = "0";
      geologyImage.current.style.transform = "scale(0)";
      sourceRef.current.href = data[planet].structure.source;
    } else {
      imageRef.current.src = data[planet].images.planet;
      contentRef.current.textContent = data[planet].geology.content;
      geologyImage.current.style.opacity = "1";
      geologyImage.current.style.transform = "scale(1)";
      sourceRef.current.href = data[planet].overview.source;
      sourceRef.current.href = data[planet].geology.source;
    }
  };

  useEffect(() => {
    imageRef.current.src = data[planet].images.planet;
    contentRef.current.textContent = data[planet].overview.content;
    geologyImage.current.style.opacity = "0";
    geologyImage.current.style.transform = "scale(0)";
    sourceRef.current.href = data[planet].overview.source;
    buttons.forEach((button) => {
      button.current.classList.remove("active");
    });
    buttonOverview.current.classList.add("active");
  }, [planet]);

  useEffect(() => {
    if (mediaQuery.matches) {
      buttonInternal.current.textContent = "Structure";
      buttonGeology.current.textContent = "Surface";
    }
  }, []);

  return (
    <Container>
      <div className="planet">
        <div className="images">
          <img
            src={data[planet].images.planet}
            alt={data[planet].name}
            ref={imageRef}
          />
          <img
            className="geology"
            src={data[planet].images.geology}
            alt={data[planet].name}
            ref={geologyImage}
          />
        </div>
        <div className="about">
          <div className="about-planet">
            <h1 className="heading-1">{data[planet].name}</h1>
            <p className="para" ref={contentRef}>
              {data[planet].overview.content}
            </p>
            <span className="source">
              Source:
              <a
                href={data[planet].overview.source}
                target="_blank"
                rel="noreferrer"
                ref={sourceRef}
              >
                Wikipedia
              </a>
              <img src="/assets/icon-source.svg" alt="source" />
            </span>
          </div>
          <div className="buttons">
            <button
              className="button active"
              type="button"
              ref={buttonOverview}
              onClick={changeImage}
            >
              <span>01</span>
              Overview
            </button>
            <button
              className="button"
              type="button"
              ref={buttonInternal}
              onClick={changeImage}
            >
              <span>02</span>
              Internal Structures
            </button>
            <button
              className="button"
              type="button"
              ref={buttonGeology}
              onClick={changeImage}
            >
              <span>03</span>
              Surface Geology
            </button>
          </div>
        </div>
      </div>
      <div className="planet-details">
        <div className="detail">
          <span>Rotation time</span>
          <h2 className="heading-2">{data[planet].rotation}</h2>
        </div>
        <div className="detail">
          <span>Revolution time</span>
          <h2 className="heading-2">{data[planet].revolution}</h2>
        </div>
        <div className="detail">
          <span>Radius</span>
          <h2 className="heading-2">{data[planet].radius}</h2>
        </div>
        <div className="detail">
          <span>Average temp.</span>
          <h2 className="heading-2">{data[planet].temperature}</h2>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.main`
  .planet {
    display: flex;
    width: 1128px;
    margin: 0 auto;
    overflow: hidden;
    @media (min-width: 1600px) {
      margin-top: 10rem;
    }
    @media (max-width: 1200px) {
      width: 95%;
      flex-direction: column;
    }
    @media (max-width: 768px) {
      position: relative;
    }
    .images {
      flex-basis: 60%;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -6rem;
      position: relative;

      @media (max-width: 1200px) {
        margin-top: 5rem;
        margin-bottom: 5rem;
      }
      @media (max-width: 768px) {
        margin-top: 15rem;
      }
      img {
        width: 25rem;
      }
      .geology {
        position: absolute;
        width: 12rem;
        bottom: 4rem;
        opacity: 0;
        transform: scale(0);
        transition: all 250ms;
        @media (max-width: 1200px) {
          bottom: -7rem;
        }
      }
    }
    .about {
      margin-top: 3rem;
      flex-basis: 40%;
      @media (max-width: 1200px) {
        display: flex;
        gap: 4rem;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
    }
    .about-planet {
      @media (max-width: 1200px) {
        flex-basis: 50%;
      }
    }
  }

  .heading-1 {
    text-transform: uppercase;
    font-size: 7rem;
    line-height: 0.9;
    font-weight: lighter;
    margin-bottom: 3rem;
    font-family: var(--antonio);
  }
  .para {
    margin-bottom: 3rem;
    height: 8rem;
    @media (max-width: 1200px) {
      height: 12rem;
    }
  }
  .source {
    color: var(--light-gray);
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      justify-content: center;
    }
    a {
      margin-left: 1rem;
      color: #fff;
    }
    img {
      margin-left: 1rem;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    @media (max-width: 1200px) {
      flex-basis: 50%;
      justify-content: center;
    }
    @media (max-width: 768px) {
      position: absolute;
      flex-direction: row;
      top: 0;
      left: 50%;
      width: 95%;
      transform: translateX(-50%);
      justify-content: space-between;
    }
  }
  .button {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    border: 1px solid #83839155;
    background-color: transparent;
    color: #fff;
    font-family: inherit;
    text-transform: uppercase;
    text-align: left;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    transition: all 250ms;
    @media (max-width: 768px) {
      padding: 0;
      padding: 1.5rem 1rem;
      font-size: 1.4rem;
      font-weight: lighter;
      border: 0;
      text-align: center;
    }
    &::after {
      content: "";
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      display: block;
      position: absolute;
      background-color: var(--current-color);
      left: 0%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: -1;
      transition: all 250ms;
    }
    &:hover {
      &::after {
        transform: translate(-50%, -50%) scale(100);
      }
    }
    span {
      margin-right: 2rem;
      font-weight: lighter;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .active {
    background-color: var(--current-color);
  }
  .planet-details {
    display: flex;
    width: 1128px;
    margin: 0 auto;
    margin-top: 2rem;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1200px) {
      width: 95%;
    }
    .detail {
      padding: 0 2rem;
      padding-bottom: 2.5rem;
      width: 100%;
      border: 1px solid #83839155;
      text-transform: uppercase;
      span {
        padding-top: 2.5rem;
        margin-bottom: 1rem;
        display: block;
        @media (max-width: 1200px) {
          font-size: 1.2rem;
        }
      }
      .heading-2 {
        font-size: 3rem;
        font-family: var(--antonio);
        @media (max-width: 1200px) {
          font-size: 2.5rem;
        }
      }
    }
  }
`;

export default Main;
