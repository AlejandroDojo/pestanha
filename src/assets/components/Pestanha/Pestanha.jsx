import React, { useState } from 'react';

const Pestanha = ({ message }) => {
  const [pestanhaAtual, setPestanhaAtual] = useState(0);
  const handleClick = (index) => {
    setPestanhaAtual(index);
  };

  return (
    <div>
      {message.map((elemento, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          Pestaña {index +1}
        </button>
      ))}
      { (message[pestanhaAtual].content === "Is a nice day")
      ?<div className='content happy'>
      {message[pestanhaAtual].content + "  😎"}
    </div>
      :<div className='content'>
      {message[pestanhaAtual].content}
    </div> }
      
    </div>
  );
};

export default Pestanha;
