import { IStudents } from '@/interface/students.interface';
import { useUpdateStudent } from '@/services/updateStudent';
import { CURSOS } from '@/utils/coursesName';
import { EditFormSchema, IEditFormSchema } from '@/validations/EditFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingComponent from './LoadingComponent';

interface Props {
  aluno: IStudents;
  onSave: (aluno: IStudents) => void;
  onClose: () => void;
}

export function ModalEditar({ aluno, onSave, onClose }: Props) {
  const [errorCreate, setErrorCreate] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      id: aluno.id,
      name: aluno.name,
      age: aluno.age,
      course: aluno.course,
    },
  });

  const { mutate: mutateUpdateStudent, isPending } = useUpdateStudent({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-students'] });
      onSave({
        id: aluno.id,
        name: getValues('name'),
        age: Number(getValues('age')),
        course: getValues('course'),
      });
      onClose();
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Erro inesperado';
      console.log(message);
      setErrorCreate(message);
      setTimeout(() => setErrorCreate(null), 5000);
    },
  });
  const onSubmit = (data: IEditFormSchema) => {
    mutateUpdateStudent(data);
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10,46,28,0.7)' }}
    >
      {isPending && <LoadingComponent />}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {errorCreate && (
          <div
            className="rounded-xl px-4 py-3 flex items-center gap-2 text-sm font-semibold"
            style={{
              backgroundColor: '#fff0f0',
              color: '#0a2e1c',
              borderLeft: '4px solid #e91e8c',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e91e8c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-x-icon lucide-circle-x"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
            {errorCreate}
          </div>
        )}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, #0a2e1c, #0d3b2e)' }}
        >
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">Editar</p>
            <h2 className="text-white font-black text-lg">{aluno.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label
              className="block text-xs font-bold uppercase tracking-widest mb-1.5"
              style={{ color: '#0a2e1c' }}
            >
              Nome Completo
            </label>
            <input
              type="text"
              {...register('name')}
              className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:border-neon"
              style={{ borderColor: errors.name ? '#e91e8c' : '#e0e0e0' }}
              placeholder="Nome do aluno"
            />
            {errors.name && (
              <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
                {errors.name?.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-bold uppercase tracking-widest mb-1.5"
              style={{ color: '#0a2e1c' }}
            >
              Idade
            </label>
            <input
              type="number"
              {...register('age')}
              className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:border-neon"
              style={{ borderColor: errors.age ? '#e91e8c' : '#e0e0e0' }}
              placeholder="Ex: 20"
              min={16}
              max={80}
            />
            {errors.age && (
              <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
                {errors.age?.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-bold uppercase tracking-widest mb-1.5"
              style={{ color: '#0a2e1c' }}
            >
              Curso
            </label>
            <select
              {...register('course')}
              className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:border-neon bg-white"
              style={{ borderColor: errors.course ? '#e91e8c' : '#e0e0e0' }}
            >
              <option value="">Selecione o curso</option>
              {CURSOS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
                {errors.course?.message}
              </p>
            )}
          </div>
        </div>

        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-bold border-2 transition-all hover:bg-gray-50"
            style={{ borderColor: '#0a2e1c', color: '#0a2e1c' }}
          >
            Cancelar
          </button>
          <button
            disabled={isPending}
            onClick={handleSubmit(onSubmit)}
            className="flex-1 py-3 rounded-xl font-bold text-dark transition-all hover:opacity-90"
            style={{ backgroundColor: '#00c853' }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
