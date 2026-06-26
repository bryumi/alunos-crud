import { useMutation } from '@tanstack/react-query';
import { api } from './api';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
export const useDeleteStudent = ({ onSuccess, onError }: Props) => {
  return useMutation({
    mutationKey: ['delete-student'],
    mutationFn: async (id: string) => {
      await api.delete(`/alunos/${id}`);
    },
    onSuccess,
    onError,
  });
};
