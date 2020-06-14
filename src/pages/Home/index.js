import React, { useState, useEffect } from 'react';

import './styles.css';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

import api from '../../services/api';

import { Link } from 'react-router-dom';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    async function loadTasks() {
      const response = await api.get('/tasks');
      setTasks(response.data);
    }

    loadTasks();

  }, []);

  async function handleDeleteTask(task) {
    alert(`Delete, a tarefa? ${task.title} - ${task.id}`)

    await api.delete(`/tasks/${task.id}`)

    const tasksRemove = tasks.filter(t => t.id !== task.id);
    setTasks(tasksRemove)
  }

  return (
    <>
      <section>
        <Link to="/add">
          <button className="add-task">
            Adicinar nova tarefa
          </button>
        </Link>
      </section>

      <section>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className="container-list">
                <div className="title-icons">
                  <h1>{task.title}</h1>
                  <button onClick={() => handleDeleteTask(task)} className="button-off">
                    <AiFillDelete size={25} />
                  </button>
                </div>
              
                <span>{task.description}</span>
                
                <div className="icons-edit"> 
                  <Link to={`/edit/${task.id}`}>
                    <AiOutlineEdit size={25} />
                  </Link>
                </div>
            </div>
          </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;