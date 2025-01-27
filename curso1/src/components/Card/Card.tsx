import { useState } from "react";

type CardProps = {
  name: string;
  lastName: string;
  onClose: () => void;
};

const Card: React.FC<CardProps> = ({ name, lastName, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <div role="contentinfo">
      <h2>Informações do Usuário</h2>
      <p>
        <strong>Nome:</strong> {name}
      </p>
      <p>
        <strong>Sobrenome:</strong> {lastName}
      </p>
      <button
        onClick={handleClose}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "0.5rem 1rem",
        }}
      >
        Close
      </button>
    </div>
  ) : null;
};

export default Card;
