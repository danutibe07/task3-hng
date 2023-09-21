"use client"
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Loader from './Loader';
import GalleryImages from './GalleryImages';
import Title from './Title/page';

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);

  const [characters, updateCharacters] = useState(GalleryImages);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App px-10">
    {loading ? (
      <Loader />
    ): (
      <header className="">
        <Title />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="characters md:grid grid-cols-4 gap-4 pb-20" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div className='p-4 border border-gray-300 rounded-xl shadow-md' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img className='aspect-auto object-contain h-48 w-full' src={thumb} />
                          </div>
                          <p className='text-center'>
                            { name }
                          </p>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    )}
  </div>
  );
}

export default App;
