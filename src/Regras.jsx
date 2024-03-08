import React from 'react';

const Regras = () => {
  return (
    <div className="page-content">
      <div className="ranking-intro">
        <h1>Regras da competição!</h1>
        <hr />
        <p>
          Fique por dentro e faça parte do projeto que vem transformando
          diversos colaboradores em pessoas de alta performance:
        </p>
      </div>
      <div className="rules-content">
        <div className="objetivo">
          <h2>Grande objetivo:</h2>
          <p>
            A competição Saúde em Foco tem como objetivo promover a saúde e o
            bem-estar dos colaboradores da empresa, incentivando a adoção de
            hábitos saudáveis, como alimentação equilibrada e prática regular de
            atividades físicas. Além disso, busca fortalecer o espírito de
            equipe e a integração entre os participantes.
          </p>
        </div>
        <div className="participation">
          <h2>Participação:</h2>
          <div>A competição é aberta a todos os colaboradores da empresa.</div>
          <div>A participação é voluntária e não obrigatória.</div>
        </div>
        <div className="points-acumulate">
          <h2>
            Para acumular pontos, os participantes devem cumprir as seguintes
            ações:
          </h2>
          <div className="div-points">
            <div>
              <b>
                Foto realizando atividade física de pelo menos 30 minutos (1
                ponto):
              </b>
              Pode ser uma foto na academia, durante uma caminhada, fazendo
              alongamento, ou qualquer atividade física saudável.
            </div>
            <div>
              <b>Constância de 5 dias na semana (1 ponto): </b>Os participantes
              devem registrar suas atividades físicas pelo menos 5 dias na
              semana, a pontuação de constância será pontuada para cada
              atividade.
            </div>
            <div>
              <b>Constância de 7 dias na semana (2 pontos):</b> Os participantes
              que registrarem suas atividades todos os 7 dias da semana
              receberão 2 pontos adicionais, a pontuação de constância será
              pontuada para cada atividade.
            </div>
            <div>
              <b>
                Participação presencial nas atividades coletivas (4 pontos):
              </b>
              A empresa organizará atividades coletivas, como caminhadas em
              grupo, palestras de saúde, entre outras. Os participantes que
              comparecerem pessoalmente a essas atividades receberão 4 pontos
              adicionais.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regras;
