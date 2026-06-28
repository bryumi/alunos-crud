/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { api } from './api';
export const useCreateStudent = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ['create-student'],
        mutationFn: async (data) => {
            const response = await api.post(`/alunos`, data);
            return response.data;
        },
        onSuccess,
        onError,
    });
};
