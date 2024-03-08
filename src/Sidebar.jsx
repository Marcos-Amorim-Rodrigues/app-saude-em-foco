import React from 'react';
import { FaTrophy } from 'react-icons/fa6';
import { IoMdPhotos } from 'react-icons/io';
import { IoBook } from 'react-icons/io5';
import logo from './assets/logotype.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <img src={logo} alt="" />
      </div>
      <div className="sidebar-section">
        <div>
          <a href="/">
            <div className="sidebar-option">
              <p>
                <FaTrophy /> Ranking de participantes
              </p>
            </div>
          </a>
          <a href="/galeria">
            <div className="sidebar-option">
              <p>
                <IoMdPhotos /> Galeria de participação
              </p>
            </div>
          </a>
          <a href="/regras">
            <div className="sidebar-option">
              <p>
                <IoBook /> Regras da competição
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="sidebar-section">
        <span className="sidebar-footer">
          <p>
            Um projeto{' '}
            <span className="foco">
              <a href="https://agenciafocomkt.com.br">Foco Marketing</a>
            </span>
          </p>
          <p>© Todos os direitos reservados.</p>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
