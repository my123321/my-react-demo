import React from 'react';
// import logo from './logo.svg';
import appStyle from './App.modules.css';
import Index from './views/Index'


function App() {
  console.log(appStyle)
  return (
    <div className={appStyle.App}>
      <Index/>
    </div>
  );
}

export default App;
