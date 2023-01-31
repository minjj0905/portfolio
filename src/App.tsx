import React from 'react';
import Home from 'pages/Home';
import ResponsiveLayout from 'layouts/responsive.layout';
import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ResponsiveLayout>
        <Home />
      </ResponsiveLayout>
    </>
  );
};

export default App;
