import React from 'react';
import image1 from './assets/galeria1.jpg';
import image2 from './assets/galeria2.jpg';

const Galeria = () => {
  function mostrarFoto(event) {
    const ovly = document.querySelector('.overlay');
    const photo = document.querySelector('.clicked-photo');
    photo.src = event.target.src;
    if (event.target.src.includes(image2)) {
      const title = document.querySelector('.photo-info h2');
      title.innerText = 'Outubro rosa';
      const description = document.querySelector('.photo-info p');
      description.innerText =
        'Evento de conscientização do outubro rosa para o câncer de mama.';
    } else if (event.target.src.includes(image1)) {
      const title = document.querySelector('.photo-info h2');
      title.innerText = 'Airsoft';
      const description = document.querySelector('.photo-info p');
      description.innerText =
        'Game de airsoft dos FocoLovers, com muita trocação de tiro e mira torta.';
    }
    ovly.style = 'display: grid';
  }

  function fecharOverlay(event) {
    if (event.target.className === 'overlay') {
      const ovly = document.querySelector('.overlay');
      ovly.style = 'display: none';
    }
  }

  return (
    <div className="page-content">
      <div className="ranking-intro">
        <h1>Confira os focados!</h1>
        <hr />
        <p>
          Acompanhe todos os eventos realizados através da divulgação em nosso
          canal do discord e confira os registros abaixo:
        </p>
      </div>
      <div className="instagram-feed">
        <div>
          <img onClick={mostrarFoto} src={image1} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
        </div>
        <img onClick={mostrarFoto} src={image1} alt="" />
        <div>
          <img onClick={mostrarFoto} src={image2} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
        </div>
        <div className="second-category">
          <img onClick={mostrarFoto} src={image1} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
          <img onClick={mostrarFoto} src={image1} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
        </div>
        <div>
          <img onClick={mostrarFoto} src={image1} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
        </div>
        <img onClick={mostrarFoto} src={image1} alt="" />
        <div>
          <img onClick={mostrarFoto} src={image2} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
        </div>
        <div className="second-category">
          <img onClick={mostrarFoto} src={image1} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
          <img onClick={mostrarFoto} src={image1} alt="" />
          <img onClick={mostrarFoto} src={image2} alt="" />
        </div>
      </div>
      <div className="overlay" onClick={fecharOverlay}>
        <div></div>
        <img src={image1} alt="" className="clicked-photo" />
        <div className="photo-info">
          <div>
            <h2>Airsoft</h2>
            <p>
              Game de airsoft dos FocoLovers, com muita trocação de tiro e mira
              torta.
            </p>
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="text-area"
              placeholder="Escreva um comentário"
            ></textarea>
            <button> Comentar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
