import { useState } from 'react';
import { FormCadastro } from './components/FormCadastro';
import { TabelaAlunos } from './components/TabelaAlunos';
import { IStudents } from './interface/students.interface';

const MOCK_ALUNOS: IStudents[] = [
  {
    id: '1',
    nome: 'Ana Carolina Souza',
    idade: 21,
    curso: 'Administração',
    dataCadastro: '2024-03-10',
  },
  {
    id: '2',
    nome: 'Bruno Ferreira Lima',
    idade: 24,
    curso: 'Sistemas de Informação',
    dataCadastro: '2024-04-05',
  },
  {
    id: '3',
    nome: 'Camila Rodrigues',
    idade: 19,
    curso: 'Gestão de TI',
    dataCadastro: '2024-05-15',
  },
];

export default function App() {
  const [alunos, setAlunos] = useState<IStudents[]>(MOCK_ALUNOS);

  function handleCadastrar(nome: string, idade: number, curso: string) {
    const novo: IStudents = {
      id: crypto.randomUUID(),
      nome,
      idade,
      curso,
      dataCadastro: new Date().toISOString().split('T')[0],
    };
    setAlunos((prev) => [novo, ...prev]);
  }

  function handleEditar(updated: IStudents) {
    setAlunos((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  }

  function handleExcluir(id: string) {
    setAlunos((prev) => prev.filter((a) => a.id !== id));
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f7f4' }}>
      <header style={{ backgroundColor: '#0a2e1c' }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm"
              style={{ backgroundColor: '#00c853', color: '#0a2e1c' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-notebook-pen-icon lucide-notebook-pen"
              >
                <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
                <path d="M2 6h4" />
                <path d="M2 10h4" />
                <path d="M2 14h4" />
                <path d="M2 18h4" />
                <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">Gestão de Alunos</p>
              <p className="text-white/50 text-xs">Portal Acadêmico</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-white/60 text-xs font-semibold">
            <span
              className="px-3 py-1.5 rounded-lg font-bold"
              style={{ backgroundColor: '#e91e8c', color: 'white' }}
            >
              Portal do Aluno
            </span>
          </div>
        </div>
      </header>

      <div
        className="relative overflow-hidden py-8 px-4"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0d3b2e 0%, #0a2e1c 50%, #083020 100%)',
        }}
      >
        <div className="absolute right-0 top-0 w-64 h-full opacity-10" />
        <div className="absolute left-1/3 top-0 w-px h-full opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">
            Sistema de Gestão
          </p>
          <h1 className="text-white font-black text-3xl leading-tight">
            Gerenciamento de <span style={{ color: '#00c853' }}>Alunos</span>
          </h1>
          <p className="text-white/60 text-sm mt-1">
            Cadastre, edite e acompanhe os alunos da instituição.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-6 grid grid-cols-3 gap-3 relative z-10">
          {[
            {
              label: 'Total de Alunos',
              value: alunos.length,
              accent: '#00c853',
            },
            {
              label: 'Cursos Ativos',
              value: [...new Set(alunos.map((a) => a.curso))].length,
              accent: '#e91e8c',
            },
            {
              label: 'Média de Idade',
              value: alunos.length
                ? Math.round(alunos.reduce((s, a) => s + a.idade, 0) / alunos.length)
                : 0,
              accent: '#00c853',
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-4 py-3"
              style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-3xl font-black" style={{ color: s.accent }}>
                {s.value}
              </p>
              <p className="text-white/50 text-xs font-semibold mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <FormCadastro onCadastrar={handleCadastrar} />
            <div
              className="mt-4 rounded-xl p-4 border-l-4 text-sm"
              style={{ backgroundColor: 'white', borderColor: '#e91e8c' }}
            >
              <p
                className="font-black text-xs uppercase tracking-widest mb-1"
                style={{ color: '#e91e8c' }}
              >
                Dica
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Use a busca na tabela para filtrar alunos por nome ou curso rapidamente.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <TabelaAlunos alunos={alunos} onEditar={handleEditar} onExcluir={handleExcluir} />
          </div>
        </div>
      </main>

      <footer className="mt-8 py-6 px-4 text-center" style={{ borderTop: '1px solid #dce8e1' }}>
        <p className="text-xs font-semibold" style={{ color: '#0a2e1c' }}>
          Gestão de Alunos
          <span className="mx-2 opacity-30">•</span>
          <span className="opacity-50">Sistema Acadêmico © {new Date().getFullYear()}</span>
        </p>
      </footer>
    </div>
  );
}
