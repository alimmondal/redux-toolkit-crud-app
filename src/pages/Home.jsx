import React from 'react';
import Book from '../img/homeBook.jpeg';

const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <img
        src={Book}
        alt=""
        style={{
          objectFit: 'contain',
          width: '98vw',
          height: '90%',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default Home;
