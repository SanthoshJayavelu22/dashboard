import React, { useState } from 'react';

const AddWidgetModal = ({ categories, widgets, onCategorySelect, selectedCategory, onAddWidget, onClose, onAddNewWidget }) => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleWidgetSelectionChange = (widget) => {
    if (selectedWidgets.some(selected => selected.id === widget.id)) {
      
      setSelectedWidgets(selectedWidgets.filter(selected => selected.id !== widget.id));
    } else {
     
      setSelectedWidgets([...selectedWidgets, widget]);
    }
  };

  const handleAddWidgets = () => {
    selectedWidgets.forEach(widget => onAddWidget(widget));
    setSelectedWidgets([]);
  };

  const handleNewWidgetChange = (field, value) => {
    setNewWidget(prevWidget => ({
      ...prevWidget,
      [field]: value,
    }));
  };

  const [newWidget, setNewWidget] = useState({ name: '', content: '' });

  const handleAddNewWidget = () => {
    if (newWidget.name && newWidget.content) {
      onAddNewWidget(newWidget);
      setNewWidget({ name: '', content: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 dark:bg-black dark:bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 w-1/2 relative">
      
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-white text-2xl"
        >
          &times;
        </button>

        {!selectedCategory && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Select a Category</h3>
            {categories.map(category => (
              <div
                key={category.id}
                className="p-2 border rounded-md cursor-pointer dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100"
                onClick={() => onCategorySelect(category)}
              >
                {category.name}
              </div>
            ))}
          </div>
        )}

        {selectedCategory && (
          <div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Select Widgets for "{selectedCategory.name}"</h3>
            <div className="space-y-2">
              {widgets.map(widget => (
                <div key={widget.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedWidgets.some(selected => selected.id === widget.id)}
                    onChange={() => handleWidgetSelectionChange(widget)}
                    className="mr-2"
                  />
                  <div className="p-2 border rounded-md cursor-pointer dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100">
                    {widget.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button
                onClick={handleAddWidgets}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
              >
                Add Selected Widgets
              </button>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Create a New Widget</h4>
              <input
                type="text"
                value={newWidget.name}
                onChange={(e) => handleNewWidgetChange('name', e.target.value)}
                placeholder="Widget Title"
                className="w-full p-2 border rounded-md mb-2 dark:bg-transparent dark:placeholder-white text-black dark:text-whit"
              />
              <textarea
                value={newWidget.content}
                onChange={(e) => handleNewWidgetChange('content', e.target.value)}
                placeholder="Widget Description"
                className="w-full p-2 border rounded-md mb-2 dark:bg-transparent dark:placeholder-white text-black dark:text-white"
              />
              <button
                onClick={handleAddNewWidget}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full"
              >
                Create Widget
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddWidgetModal;
