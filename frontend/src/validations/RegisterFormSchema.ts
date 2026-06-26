import { z } from 'zod';

export const RegisterFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatorio').trim(),
  age: z.coerce
    .number({
      error: 'A idade é obrigatória',
    })
    .min(1, 'Idade é obrigatória.'),
  course: z.string().min(1, 'Selecione um curso.'),
});

export type IRegisterFormSchema = z.infer<typeof RegisterFormSchema>;
