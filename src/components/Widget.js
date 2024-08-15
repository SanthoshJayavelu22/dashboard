import React from 'react';

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="relative p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-md">
     
      <button
        onClick={() => onRemove(widget.id)}
        className="absolute top-2 right-2 text-gray-500 dark:text-white  hover:text-gray-700"
      >
        &times;
      </button>
      <h4 className="text-lg font-semibold mb-2 dark:text-white">{widget.name}</h4>
      <p className='dark:text-white'>{widget.content}</p>
    </div>
  );
};

export default Widget;
