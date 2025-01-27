"use client";

import { Forms, FormDataProps } from "./Forms";
import * as S from "./styles";

export default function FormPage() {
  const handleSubmitForm = (data: FormDataProps) => {
    console.log("Form Submit", data);
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <h2>Form TDD</h2>
        <Forms handleSubmitForm={handleSubmitForm} />
      </S.Container>
    </S.PageWrapper>
  );
}
