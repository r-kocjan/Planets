import React from "react";
import styled from "styled-components";
import data from "../data.json";
const Header = ({ changePlanet, planet }) => {
  return (
    <Container>
      <span className="logo">THE PLANETS</span>
      <Menu>
        {data.map(({ name }, id) => {
          return (
            <li
              className={`menu-item ${name}`}
              style={
                id === planet
                  ? { borderTop: `4px solid ${data[planet].color}` }
                  : { borderTop: `4px solid transparent` }
              }
              key={id}
              onClick={() => changePlanet(id)}
            >
              <a className="menu-link"> {name}</a>
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
  .logo {
    padding: 3rem 3.5rem;
    font-size: 3rem;
    display: block;
    @media (max-width: 1200px) {
      margin: 0 auto;
    }
    font-family: var(--antonio);
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
  .menu-item:not(:last-child) {
    margin-right: 2.5rem;
  }
  .menu-link {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--lighter-gray);
    transition: all 167ms;
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
