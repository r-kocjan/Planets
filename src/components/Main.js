import React from "react";
import styled from "styled-components";
import data from "../data.json";
const Main = () => {
  return (
    <Container>
      <div className="planet">
        <div className="images">
          <img src={data[0].images.planet} alt={data[0].name} />
        </div>
        <div className="about">
          <h1 className="heading-1">{data[0].name}</h1>
          <p className="para">{data[0].overview.content}</p>
          <span className="source">
            Source:
            <a href={data[0].overview.source} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
            <img src="/assets/icon-source.svg" alt="source" />
          </span>
          <div className="buttons">
            <button className="button" type="button">
              <span>01</span>
              Overview
            </button>
            <button className="button" type="button">
              <span>02</span>
              Internal Structures
            </button>
            <button className="button" type="button">
              <span>03</span>
              Surface Geology
            </button>
          </div>
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

    .images {
      flex-basis: 60%;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 25rem;
      }
    }
    .about {
      margin-top: 3rem;
      flex-basis: 40%;
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
  }
  .source {
    color: var(--light-gray);
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
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
  }
  .button {
    margin-bottom: 1.5rem;
    padding: 1.3rem;
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
    &::after {
      content: "";
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      display: block;
      position: absolute;
      background-color: var(--water);
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
    }
  }
`;

export default Main;
