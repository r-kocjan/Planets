import React from "react";
import styled from "styled-components";
import data from "../data.json";
const Header = ({ changePlanet, planet, menuActive, setMenuActive }) => {
  return (
    <Container>
      <span className="logo">THE PLANETS</span>
      <img
        src="/assets/icon-hamburger.svg"
        alt="hamburger"
        className="menu-icon"
        onClick={() => setMenuActive(!menuActive)}
      />
      <Menu className={`${menuActive ? "show-menu" : ""}`}>
        {data.map((el, id) => {
          return (
            <li
              className={`menu-item ${el.name}`}
              style={
                id === planet
                  ? { borderTop: `4px solid ${data[planet].color}` }
                  : { borderTop: `4px solid transparent` }
              }
              key={id}
              onClick={() => changePlanet(id)}
            >
              <div
                className="round-planet"
                style={{ backgroundColor: el.color }}
              ></div>
              <a className="menu-link"> {el.name}</a>
              <img
                src="/assets/icon-chevron.svg"
                alt="arrow"
                className="arrow"
              />
            </li>
          );
        })}
      </Menu>
    </Container>
  );
};

const Container = styled.nav`
  border-bottom: 1px solid #83839155;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
  .logo {
    padding: 3rem 3.5rem;
    font-size: 3rem;
    display: block;
    font-family: var(--antonio);
    @media (max-width: 1200px) {
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      margin: 0;
    }
  }
  .menu-icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      position: absolute;
      right: 3.5rem;
      cursor: pointer;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  position: absolute;
  right: 3.5rem;
  height: 100%;
  align-items: center;

  @media (max-width: 1200px) {
    right: 50%;
    transform: translateX(50%);
    margin-top: 12rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    opacity: 0;
    visibility: none;
    padding: 0 5rem;
    width: 100%;
    height: 100vh;
    top: 100%;
    margin: 0;
    background-color: var(--dark-blue);
    z-index: 2;
    align-items: flex-start;
    right: 0;
    transform: translateX(0);
    left: -100%;
    transition: all 250ms;
  }

  .round-planet {
    display: none;
    @media (max-width: 768px) {
      width: 4rem;
      height: 4rem;
      background-color: orange;
      display: block;
      border-radius: 50%;
      margin-right: 4rem;
    }
  }
  .arrow {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 0.8rem;
      margin-left: auto;
    }
  }

  .menu-item:not(:last-child) {
    margin-right: 2.5rem;

    @media (max-width: 768px) {
      margin-right: 0;
      /* margin-bottom: 1.5rem; */
    }
  }
  .menu-link {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--lighter-gray);
    transition: all 167ms;
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  }
  .menu-item {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    border-top: 4px solid transparent;
    transition: all 250ms;

    @media (max-width: 1200px) {
      height: 30%;
    }
    @media (max-width: 768px) {
      height: auto;
      border-bottom: 1px solid #83839155;
      padding: 2rem 0;
      width: 100%;
      border-top: 0 !important;
    }
  }
  .Mercury:hover {
    border-bottom: 4px solid var(--water);
  }
  .Venus:hover {
    border-bottom: 4px solid var(--yellow);
  }
  .Earth:hover {
    border-bottom: 4px solid var(--purple);
  }
  .Mars:hover {
    border-bottom: 4px solid var(--dark-orange);
  }
  .Jupiter:hover {
    border-bottom: 4px solid var(--light-orange);
  }
  .Saturn:hover {
    border-bottom: 4px solid var(--yellow);
  }
  .Uranus:hover {
    border-bottom: 4px solid var(--cyan);
  }
  .Neptune:hover {
    border-bottom: 4px solid var(--blue);
  }
  .menu-item:hover a {
    color: var(--white);
  }
`;

export default Header;
