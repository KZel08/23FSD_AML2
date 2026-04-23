import React, { useContext } from 'react';
import { AppContext } from './AppContext';

function Display() {
  const { theme } = useContext(AppContext);
  return (
    <div style={{ marginTop: '20px', border: '1px solid' }}>
      I am a separate component also listening to the <b>{theme}</b> theme!
    </div>
  );
}

export default Display;