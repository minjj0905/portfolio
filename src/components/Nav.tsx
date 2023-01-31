import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  width: 100%;
  height: 7rem;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-weight: 900;
  color: white;
`;

const NavContent = styled.div`
  height: 100%;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`;

const Title = styled.div`
  font-size: 1.8rem;
  margin-right: 3px;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
`;

const MenuList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.a`
  font-size: 1.6rem;
`;

const Nav = () => {
  return (
    <Navbar>
      <NavContent>
        <TitleContainer>
          <Title>김민정,</Title>
          <SubTitle>사람과 인터넷을 연결합니다.</SubTitle>
        </TitleContainer>
        <MenuList>
          <Menu>Github</Menu>
          <Menu>LinkedIn</Menu>
          <Menu>Velog</Menu>
          <Menu>Email</Menu>
        </MenuList>
      </NavContent>
    </Navbar>
  );
};

export default Nav;
