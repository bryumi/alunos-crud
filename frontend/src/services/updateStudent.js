import { useMutation } from '@tanstack/react-query';
import { api } from './api';
export const useUpdateStudent = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ['update-student'],
        mutationFn: async (data) => {
            await api.put(`/alunos/${data.id}`, data);
        },
        onSuccess,
        onError,
    });
};
