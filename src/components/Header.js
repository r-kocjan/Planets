import React from "react";
import styled from "styled-components";
import data from "../data.json";
const Header = () => {
  return (
    <Container>
      <span className="logo">THE PLANETS</span>
      <Menu>
        {data.map(({ name }, id) => {
          return (
            <li className={`menu-item ${name}`} key={id}>
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
  .logo {
    padding: 3rem 3.5rem;
    font-size: 3rem;
    display: block;

    font-family: var(--antonio);
  }
`;

const Menu = styled.ul`
  display: flex;
  position: absolute;
  right: 3.5rem;
  height: 100%;
  align-items: center;

  .menu-item:not(:last-child) {
    margin-right: 2.3rem;
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
  }
  .menu-item:hover a {
    color: var(--white);
  }
  .Mercury {
    border-top: 4px solid var(--water);
  }
`;

export default Header;
