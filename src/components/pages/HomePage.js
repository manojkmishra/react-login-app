import React from 'react';
import {Link} from 'react-router-dom';


const HomePage=()=> 
(   <div><h1>Home Page</h1> {console.log('/src/components/Pages/HomePage.js-inside render')}
      <Link to="/login">Login</Link>
    </div>
);
  
export default HomePage;
