import React from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDFfMjcx/MDAxNTg1NzIxOTU0MzIw.LBlT7fZqYUuPTHPuKWORwd32_Yv0d_TzSAALsZ6XIuAg.i1tQoxAAMCUHHLgHxxifSA-IIzYhEs9P-3okYVqF1hkg.JPEG.minarigirl/1.jpg?type=w800');
`;

const Content = styled.div`
  margin-top: 7rem;
`;

const ResponsiveLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Nav />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default ResponsiveLayout;
