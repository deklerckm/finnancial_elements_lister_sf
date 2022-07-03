import React, { useState } from 'react';
// COMPONENTS
import NavigationBar from 'components/NavigationBar/NavigationBar';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <NavigationBar open={open} setOpen={setOpen} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
