import React from 'react';

import './styles.css';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

function Home() {
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
      <li>
          <div className="container-list">
            <div className="title-icons">
              <h1>Adicionar um botão de voltar no site</h1>
              <AiFillDelete size={25} />
            </div>
            
            <span>No site principal da facape tem um botão que esta quebrando o layout aos 650px de largura, resolve o problema quando tiver tempo.</span>
            
            <div className="icons-edit"> 
              <AiOutlineEdit size={25} />
            </div>

          </div>
        </li>

        <li>
          <div className="container-list">
            <div className="title-icons">
              <h1>Adicionar um botão de voltar no site</h1>
              <AiFillDelete size={25} />
            </div>
            
            <span>No site principal da facape tem um botão que esta quebrando o layout aos 650px de largura, resolve o problema quando tiver tempo.</span>
            
            <div className="icons-edit"> 
              <AiOutlineEdit size={25} />
            </div>

          </div>
        </li>

        <li>
          <div className="container-list">
            <div className="title-icons">
              <h1>Adicionar um botão de voltar no site</h1>
              <AiFillDelete size={25} />
            </div>
            
            <span>No site principal da facape tem um botão que esta quebrando o layout aos 650px de largura, resolve o problema quando tiver tempo.</span>
            
            <div className="icons-edit"> 
              <AiOutlineEdit size={25} />
            </div>

          </div>
        </li>
      </ul>
    </section>
    </>
  );
}

export default Home;