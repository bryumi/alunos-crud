import { CURSOS, IStudents } from '@/interface/students.interface';
import { useState } from 'react';

interface Props {
  aluno: IStudents;
  onSave: (aluno: IStudents) => void;
  onClose: () => void;
}

export function ModalEditar({ aluno, onSave, onClose }: Props) {
  const [form, setForm] = useState({ nome: aluno.nome, idade: aluno.idade, curso: aluno.curso });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nome.trim() || form.nome.trim().length < 2)
      e.nome = 'Nome deve ter ao menos 2 caracteres.';
    if (!form.idade || form.idade < 16 || form.idade > 80)
      e.idade = 'Idade deve estar entre 16 e 80 anos.';
    if (!form.curso) e.curso = 'Selecione um curso.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    onSave({ ...aluno, ...form });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10,46,28,0.7)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, #0a2e1c, #0d3b2e)' }}
        >
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">Editar</p>
            <h2 className="text-white font-black text-lg">{aluno.nome}</h2>
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
              value={form.nome}
              onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
              className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:border-[#00c853]"
              style={{ borderColor: errors.nome ? '#e91e8c' : '#e0e0e0' }}
              placeholder="Nome do aluno"
            />
            {errors.nome && (
              <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
                {errors.nome}
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
              value={form.idade}
              onChange={(e) => setForm((f) => ({ ...f, idade: parseInt(e.target.value) || 0 }))}
              className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:border-[#00c853]"
              style={{ borderColor: errors.idade ? '#e91e8c' : '#e0e0e0' }}
              placeholder="Ex: 20"
              min={16}
              max={80}
            />
            {errors.idade && (
              <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
                {errors.idade}
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
              value={form.curso}
              onChange={(e) => setForm((f) => ({ ...f, curso: e.target.value }))}
              className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:border-[#00c853] bg-white"
              style={{ borderColor: errors.curso ? '#e91e8c' : '#e0e0e0' }}
            >
              <option value="">Selecione o curso</option>
              {CURSOS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.curso && (
              <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
                {errors.curso}
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
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl font-bold text-[#0a2e1c] transition-all hover:opacity-90"
            style={{ backgroundColor: '#00c853' }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
