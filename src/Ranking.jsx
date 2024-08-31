import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const Ranking = () => {
  let [usersData, setUsersData] = React.useState(null);
  React.useEffect(() => {
    fetch('https://saude-em-foco.onrender.com', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((response) => setUsersData(response));
  }, []);
  return (
    <div className="page-content">
      <div className="ranking-intro">
        <h1>Ranking Saúde em Foco!</h1>
        <hr />
        <p>
          Fique por dentro e confira quem está levando o prêmio de maior foco na
          saúde nesta temporada:
        </p>
      </div>
      {usersData ? (
        usersData
          .sort((a, b) => (a.points < b.points ? 1 : -1))
          .map((dado, index) => (
            <div key={dado.userName} className="participant-data">
              <h2>#{index + 1}</h2>
              <img src="https://i.imgur.com/Zu0okN3.jpeg" alt="" />
              <h3>{dado.userName}</h3>
              <hr />
              <p>{dado.points} pontos</p>
            </div>
          ))
      ) : (
        <>
          <div className="loading">
            <div className="loading-one"></div>
            <div className="loading-one"></div>
            <div className="loading-two"></div>
            <div className="loading-three"></div>
          </div>
          <div className="loading">
            <div className="loading-one"></div>
            <div className="loading-one"></div>
            <div className="loading-two"></div>
            <div className="loading-three"></div>
          </div>
          <div className="loading">
            <div className="loading-one"></div>
            <div className="loading-one"></div>
            <div className="loading-two"></div>
            <div className="loading-three"></div>
          </div>
          <div className="loading">
            <div className="loading-one"></div>
            <div className="loading-one"></div>
            <div className="loading-two"></div>
            <div className="loading-three"></div>
          </div>
          <div className="loading">
            <div className="loading-one"></div>
            <div className="loading-one"></div>
            <div className="loading-two"></div>
            <div className="loading-three"></div>
          </div>
          <div className="loading">
            <div className="loading-one"></div>
            <div className="loading-one"></div>
            <div className="loading-two"></div>
            <div className="loading-three"></div>
          </div>
          <div className="loading">
            <div className="loading-one"></div>
            <div className="loading-one"></div>
            <div className="loading-two"></div>
            <div className="loading-three"></div>
          </div>
        </>
      )}
      <div className="ranking-invite">
        <h2>Ainda dá tempo de você participar também!</h2>
        <p>
          Faça sua inscrição agora mesmo e cuide da sua saúde enquanto compete
          com essas feras acima! É só clicar no botão abaixo, juntar-se a equipe
          no discord e colocar os exercícios em dia. Lembre-se de ler as regras
          antes de iniciar.
        </p>
        <button>
          <FaDiscord /> Junte-se à equipe!
        </button>
      </div>
    </div>
  );
};

export default Ranking;
