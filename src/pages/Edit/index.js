import React, { useState, useEffect } from 'react';

import './styles.css';

import { Link, useParams } from 'react-router-dom';
import arrayTasks from '../../utils/tasks';


function Edit() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    const response = arrayTasks.filter(array => array.id === Number(id));
    setTask({ 
      title: response[0].title,
      description: response[0].description
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleEditTask(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleEditTask}>

        <h1>Editando tarefa</h1>

        <div className="group-item">
          <span>Titulo</span>
          <input 
            type="text" 
            name="title"placeholder="Digite o novo titulo..."
            value={task.title} 
          />
        </div>

        <div className="group-item">
          <span>Descrição</span>
          <textarea
            id="text-description"
            name="description"
            placeholder="Digite a nova descrição..."
            value={task.description}
            cols="42"
            rows="10"
          />
        </div>

        <div className="group-button">
          <Link to="/">
            <button id="confirm">Confirma</button>
          </Link>
          <Link to="/">
            <button id="cancel">Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Edit;