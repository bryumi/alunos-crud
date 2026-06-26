import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { api } from './api';
import { IStudents } from '@/interface/students.interface';

export const useGetStudents = () => {
  return useQuery({
    queryKey: ['list-students'],
    queryFn: async () => {
      const { data } = await api.get<IStudents[]>('/alunos');
      return data;
    },
    placeholderData: keepPreviousData,
  });
};

export const useGetStudentById = (id: string) => {
  return useQuery({
    queryKey: ['get-student', id],
    queryFn: async () => {
      const { data } = await api.get<IStudents>(`/alunos/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
