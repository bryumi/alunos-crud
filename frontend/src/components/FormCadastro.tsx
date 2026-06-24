import { CURSOS } from '@/interface/students.interface';
import { useState } from 'react';

interface Props {
  onCadastrar: (nome: string, idade: number, curso: string) => void;
}

export function FormCadastro({ onCadastrar }: Props) {
  const [form, setForm] = useState({ nome: '', idade: '', curso: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nome.trim() || form.nome.trim().length < 2)
      e.nome = 'Nome deve ter ao menos 2 caracteres.';
    const idade = parseInt(form.idade);
    if (!form.idade || isNaN(idade) || idade < 16 || idade > 80)
      e.idade = 'Idade deve estar entre 16 e 80 anos.';
    if (!form.curso) e.curso = 'Selecione um curso.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    onCadastrar(form.nome.trim(), parseInt(form.idade), form.curso);
    setForm({ nome: '', idade: '', curso: '' });
    setErrors({});
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

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
          <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">FECAP</p>
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
            value={form.nome}
            onChange={(e) => {
              setForm((f) => ({ ...f, nome: e.target.value }));
              setErrors((er) => ({ ...er, nome: '' }));
            }}
            className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all"
            style={{ borderColor: errors.nome ? '#e91e8c' : form.nome ? '#00c853' : '#e0e0e0' }}
            placeholder="Nome do aluno"
          />
          {errors.nome && (
            <p className="text-xs mt-1 font-medium" style={{ color: '#e91e8c' }}>
              {errors.nome}
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
            value={form.idade}
            onChange={(e) => {
              setForm((f) => ({ ...f, idade: e.target.value }));
              setErrors((er) => ({ ...er, idade: '' }));
            }}
            className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all"
            style={{ borderColor: errors.idade ? '#e91e8c' : form.idade ? '#00c853' : '#e0e0e0' }}
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

        {/* Curso */}
        <div>
          <label
            className="block text-xs font-bold uppercase tracking-widest mb-1.5"
            style={{ color: '#0a2e1c' }}
          >
            Curso
          </label>
          <select
            value={form.curso}
            onChange={(e) => {
              setForm((f) => ({ ...f, curso: e.target.value }));
              setErrors((er) => ({ ...er, curso: '' }));
            }}
            className="w-full border-2 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all bg-white"
            style={{ borderColor: errors.curso ? '#e91e8c' : form.curso ? '#00c853' : '#e0e0e0' }}
          >
            <option value="">Selecione o curso...</option>
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

        <button
          onClick={handleSubmit}
          className="w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: '#00c853', color: '#0a2e1c' }}
        >
          Cadastrar Aluno
        </button>
      </div>
    </div>
  );
}
