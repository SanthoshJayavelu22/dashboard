import React from 'react';
import Widget from './Widget';

const Category = ({ category, onOpenAddWidgetModal, onRemoveWidget, searchQuery }) => {
  const filteredWidgets = category.widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchQuery) ||
    widget.content.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="my-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl dark:text-white font-semibold">{category.name}</h3>
        <button
          onClick={() => onOpenAddWidgetModal(category)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Widget
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {filteredWidgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={onRemoveWidget}  
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
