import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';
import './style.css';

export default function MainCards() {
  const [listitems, setlistitems] = useState([]);

  function renderitems(){
    if(!listitems){
      return <p>Loading...</p>
    }
    return listitems.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      )
    });
  };
  
  useEffect(() => {
    async function getitems(){
      const result = await getCategories();
      // console.log('result', result);
      setlistitems(result);
    }
    getitems();
  }, []);

  // -----------------------------
  // does not work
  // async function fetchitems(){
  //   const result = await getCategories();
  //   console.log('result', result);
  //   console.log(typeof result);
  //   return result
  // };
  
  // useEffect(() => {
  //   const result = fetchitems();
  //   setlistitems(result);
    
  //   console.log('useEffect');
  // }, []);
  // -----------------------------
    
  return (
    <div className="side-menu-container">
      {/* <h1>Listitems</h1> */}
      {renderitems()}
    </div>
  )
};
