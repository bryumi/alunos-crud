import { useMutation } from '@tanstack/react-query';
import { api } from './api';
export const useDeleteStudent = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ['delete-student'],
        mutationFn: async (id) => {
            await api.delete(`/alunos/${id}`);
        },
        onSuccess,
        onError,
    });
};
