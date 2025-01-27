"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Por favor, informe um nome válido"),
  lastName: z.string().min(2, "Por favor, informe um sobrenome válido"),
});

export type FormDataProps = z.infer<typeof schema>;

type FormProps = {
  handleSubmitForm: (data: FormDataProps) => void;
};

export const Forms = ({ handleSubmitForm }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <input
        {...register("name")}
        type="text"
        placeholder="Nome"
        aria-label="Nome"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        {...register("lastName")}
        type="text"
        placeholder="Sobrenome"
        aria-label="Sobrenome"
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};
