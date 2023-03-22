import './App.css';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import TopCourses from './Top courses/TopCourses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header></Header>
          <TopCourses></TopCourses>
          <Footer></Footer>      
        </header>
    </div>
  );
}

export default App;