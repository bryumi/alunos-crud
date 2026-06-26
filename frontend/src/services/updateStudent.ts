import { useMutation } from '@tanstack/react-query';
import { api } from './api';
import { IEditFormSchema } from '@/validations/EditFormSchema';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
export const useUpdateStudent = ({ onSuccess, onError }: Props) => {
  return useMutation({
    mutationKey: ['update-student'],
    mutationFn: async (data: IEditFormSchema) => {
      await api.put(`/alunos/${data.id}`, data);
    },
    onSuccess,
    onError,
  });
};
