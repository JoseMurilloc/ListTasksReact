import React, { useState, useEffect } from 'react';

import './styles.css';

import { Link, useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';


function Edit() {
  
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    
    async function loadTask() {
      const response = await api.get(`/tasks/${id}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
    }
    loadTask();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleEditTask(e) {
    e.preventDefault();
    await api.put(`/tasks/${id}`, { 
      title,
      description,
    });

    history.push('/');

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
            value={title} 
            onChange={e => setTitle(e.target.value)}
            maxLength={50}
          />
        </div>

        <div className="group-item">
          <span>Descrição</span>
          <textarea
            id="text-description"
            name="description"
            placeholder="Digite a nova descrição..."
            value={description}
            cols="42"
            rows="10"
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="group-button">
          <button type="submit" id="confirm">Confirma</button>
          <Link to="/">
            <button id="cancel">Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Edit;