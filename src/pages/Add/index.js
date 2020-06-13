import React, { useState } from 'react';

import './styles.css';

import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


function Add() {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleAddTask(e) {
    e.preventDefault();
  
    await api.post('/tasks', {
      title,
      description,
    });

    history.push('/');

  }

  return (
    <div className="container">
      <form onSubmit={handleAddTask}>

        <h1>Adicinar nova tarefa</h1>

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

export default Add;