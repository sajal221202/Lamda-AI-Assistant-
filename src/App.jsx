import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'; // Ensure the import path matches the file name casing exactly
import Main from './components/main/Main';

const App = () => {
  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  );
};

export default App;
