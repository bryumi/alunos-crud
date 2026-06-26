/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { api } from './api';
import { IRegisterFormSchema } from '@/validations/RegisterFormSchema';

interface Props {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
export const useCreateStudent = ({ onSuccess, onError }: Props) => {
  return useMutation({
    mutationKey: ['create-student'],
    mutationFn: async (data: IRegisterFormSchema) => {
      const response = await api.post(`/alunos`, data);
      return response.data;
    },
    onSuccess,
    onError,
  });
};
