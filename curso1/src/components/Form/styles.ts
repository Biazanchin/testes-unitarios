import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Garante que o wrapper ocupe a altura total da tela */
  background-color: #f0f0f0; /* Adiciona um fundo para melhor visualização */
`;

export const Container = styled.div`
  max-width: 400px;
  width: 100%; /* Garante que o container use toda a largura disponível até 400px */
  margin: 0 auto;
  padding: 20px;
  background-color: #fff; /* Fundo branco para o container */
  border: 1px solid #ccc;
  border-radius: 5px;

  h2 {
    text-align: center; /* Centraliza o título */
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
