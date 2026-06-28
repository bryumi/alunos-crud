import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { api } from './api';
export const useGetStudents = () => {
    return useQuery({
        queryKey: ['list-students'],
        queryFn: async () => {
            const { data } = await api.get('/alunos');
            return data;
        },
        placeholderData: keepPreviousData,
    });
};
export const useGetStudentById = (id) => {
    return useQuery({
        queryKey: ['get-student', id],
        queryFn: async () => {
            const { data } = await api.get(`/alunos/${id}`);
            return data;
        },
        enabled: !!id,
    });
};
