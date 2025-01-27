"use client";

import { useState } from "react";
import { Forms, FormDataProps } from "./Forms";
import Card from "../Card/Card";
import * as S from "./styles";

export default function FormPage() {
  const [formData, setFormData] = useState<FormDataProps | null>(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleSubmitForm = (data: FormDataProps) => {
    setFormData(data);
    setIsCardVisible(true);
  };

  const handleCloseCard = () => {
    setIsCardVisible(false);
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <h2>Form TDD</h2>
        <Forms handleSubmitForm={handleSubmitForm} />
        {/* Renderiza o Card com as informações enviadas */}
        {isCardVisible && formData && (
          <Card
            name={formData.name}
            lastName={formData.lastName}
            onClose={handleCloseCard} // Passa a função para fechar o card
          />
        )}
      </S.Container>
    </S.PageWrapper>
  );
}
