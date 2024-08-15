import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import { addWidget, removeWidget } from '../redux/categoriesSlice';
import SearchBar from './SearchBar';
import { addGlobalWidget } from '../redux/widgetsSlice';


const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const widgets = useSelector(state => state.widgets);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddWidget = (widget) => {
    dispatch(addWidget({ categoryId: selectedCategory.id, widget }));
    setIsModalOpen(false);
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const openAddWidgetModal = (category = null) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeAddWidgetModal = () => {
    setIsModalOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

 

  const handleAddNewWidget = (newWidget) => {
    const widgetWithId = { id: Date.now(), ...newWidget };

 
    dispatch(addWidget({ categoryId: selectedCategory.id, widget: widgetWithId }));

  
    dispatch(addGlobalWidget(widgetWithId));

    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />
      
     
      <button
        onClick={() => openAddWidgetModal()}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4"
      >
        Add Widget
      </button>

      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          onOpenAddWidgetModal={openAddWidgetModal}
          onRemoveWidget={(widgetId) => handleRemoveWidget(category.id, widgetId)}
          searchQuery={searchQuery}
        />
      ))}

      {isModalOpen && (
        <AddWidgetModal
          categories={categories}
          widgets={widgets}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          onAddWidget={handleAddWidget}
          onAddNewWidget={handleAddNewWidget}
          onClose={closeAddWidgetModal}
        />
      )}
    </div>
  );
};

export default Dashboard;
