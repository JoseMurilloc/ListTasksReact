import React, { useState, useEffect } from 'react';

import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import swal from 'sweetalert';

import './styles.css';

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
    
    swal({
      content: '<input/>',
      title: `Deseja remover a tarefa?`,
      text: `A tarefa ${task.title} sera deletada caso confirme`,
      className: [
        'swal-overlay',
        'swal-modal',
        'swal-title',
        'swal-text',
        'swal-button'
      ],
      buttons: ['Cancelar', true],
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        await api.delete(`/tasks/${task.id}`)
    
        const tasksRemove = tasks.filter(t => t.id !== task.id);
        setTasks(tasksRemove)
    
        swal("Poof! Tarefa deletada com sucesso!");
      } else {
        swal("Operação cancelada");
      }
    });

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