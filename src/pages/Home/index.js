import React, { useState, useEffect } from 'react';

import './styles.css';
import arrayTasks from '../../utils/tasks';

import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(arrayTasks);
  }, []);

  return (
    <>
    <header>
      <h1>FACAPE NTI</h1>
      <small>Gerenciador de terefas</small>
    </header>
    
    <section>

    </section>

    <section>
      <ul>
        {tasks.map(task => (
          <li key={tasks.id}>
            <div className="container-list">
              <div className="title-icons">
                <h1>{task.title}</h1>
                <AiFillDelete size={25} />
              </div>
            
              <span>{task.description}</span>
              
              <div className="icons-edit"> 
                <AiOutlineEdit size={25} />
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