import { useCreateStudent } from '@/services/createStudent';
import { CURSOS } from '@/utils/coursesName';
import { IRegisterFormSchema, RegisterFormSchema } from '@/validations/RegisterFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function FormCadastro() {
  const [success, setSuccess] = useState(false);
  const [errorCreate, setErrorCreate] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterFormSchema),
  });
  const queryClient = useQueryClient();

  const { mutate: mutateCreateStudent } = useCreateStudent({
    onSuccess: () => {
      reset({
        name: '',
        age: '',
        course: '',
      });
      queryClient.invalidateQueries({ queryKey: ['list-students'] });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Erro inesperado';

      console.log(message);
      setErrorCreate(message);
      setTimeout(() => setErrorCreate(null), 5000);
    },
  });
  const onSubmit = (data: IRegisterFormSchema) => {
    mutateCreateStudent(data);
  };
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: 'white' }}>
      {/* Card Header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ background: 'linear-gradient(135deg, #0a2e1c 0%, #0d3b2e 100%)' }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: '#00c853' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0a2e1c"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <div>
          <h2 className="text-white font-black text-base">Cadastrar Aluno</h2>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {success && (
          <div
            className="rounded-xl px-4 py-3 flex items-center gap-2 text-sm font-semibold"
            style={{
              backgroundColor: '#e8f7ee',
              color: '#0a2e1c',
              borderLeft: '4px solid #00c853',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00c853"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Aluno cadastrado com sucesso!
          </div>
        )}
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
        {/* Nome */}
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
            className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all"
            style={{ borderColor: errors.name ? '#e91e8c' : '#e0e0e0' }}
            placeholder="Nome do aluno"
          />
          {errors.name && (
            <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
              {errors.name?.message}
            </p>
          )}
        </div>

        {/* Idade */}
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
            className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all"
            style={{ borderColor: errors.age ? '#e91e8c' : '#e0e0e0' }}
            placeholder="Ex: 20"
            min={0}
            max={150}
          />
          {errors.age && (
            <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
              {errors.age?.message}
            </p>
          )}
        </div>

        {/* Curso */}
        <div>
          <label
            className="block text-xs font-bold uppercase tracking-widest mb-1.5"
            style={{ color: '#0a2e1c' }}
          >
            Curso
          </label>
          <Controller
            control={control}
            name="course"
            render={({ field }) => (
              <select
                {...field}
                className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all bg-white"
                style={{
                  borderColor: errors.course ? '#e91e8c' : field.value ? '#00c853' : '#e0e0e0',
                }}
              >
                <option value="">Selecione o curso...</option>
                {CURSOS.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.course && (
            <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
              {errors.course?.message}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className="w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: '#00c853', color: '#0a2e1c' }}
        >
          Cadastrar Aluno
        </button>
      </div>
    </div>
  );
}
