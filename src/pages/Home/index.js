import React, { useState, useEffect } from 'react';

import './styles.css';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

import arrayTasks from '../../utils/tasks';

import { Link } from 'react-router-dom';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(arrayTasks);
  }, []);

  return (
    <>
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