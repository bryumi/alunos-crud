import { useState } from 'react';
import { ModalDetalhes } from './ModalDetalhes';
import { ModalEditar } from './ModalEditar';
import { IStudents } from '@/interface/students.interface';

interface Props {
  alunos: IStudents[];
  onEditar: (aluno: IStudents) => void;
  onExcluir: (id: string) => void;
}

export function TabelaAlunos({ alunos, onEditar, onExcluir }: Props) {
  const [alunoDetalhes, setAlunoDetalhes] = useState<IStudents | null>(null);
  const [alunoEditar, setAlunoEditar] = useState<IStudents | null>(null);
  const [busca, setBusca] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const filtrados = alunos.filter(
    (a) =>
      a.nome.toLowerCase().includes(busca.toLowerCase()) ||
      a.curso.toLowerCase().includes(busca.toLowerCase()),
  );

  function handleExcluir(id: string) {
    onExcluir(id);
    setConfirmDelete(null);
  }

  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
        {/* Header */}
        <div
          className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between"
          style={{
            background: 'linear-gradient(135deg, #0a2e1c 0%, #0d3b2e 100%)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#e91e8c' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">FECAP</p>
              <h2 className="text-white font-black text-base">
                Alunos Cadastrados
                <span
                  className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full align-middle"
                  style={{ backgroundColor: '#00c853', color: '#0a2e1c' }}
                >
                  {alunos.length}
                </span>
              </h2>
            </div>
          </div>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar aluno ou curso..."
              className="bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-xl pl-9 pr-4 py-2 text-sm outline-none focus:bg-white/20 transition-all w-56"
            />
          </div>
        </div>

        {/* Table */}
        {filtrados.length === 0 ? (
          <div className="py-16 flex flex-col items-center gap-3">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#f0f7f4' }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00c853"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <p className="font-bold text-gray-400 text-sm">
              {busca ? 'Nenhum aluno encontrado para a busca.' : 'Nenhum aluno cadastrado ainda.'}
            </p>
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="text-xs font-semibold underline"
                style={{ color: '#00c853' }}
              >
                Limpar busca
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#f0f7f4' }}>
                  <th
                    className="text-left px-6 py-3 text-xs font-black uppercase tracking-widest"
                    style={{ color: '#0a2e1c' }}
                  >
                    #
                  </th>
                  <th
                    className="text-left px-6 py-3 text-xs font-black uppercase tracking-widest"
                    style={{ color: '#0a2e1c' }}
                  >
                    Nome
                  </th>
                  <th
                    className="text-left px-6 py-3 text-xs font-black uppercase tracking-widest"
                    style={{ color: '#0a2e1c' }}
                  >
                    Idade
                  </th>
                  <th
                    className="text-left px-6 py-3 text-xs font-black uppercase tracking-widest"
                    style={{ color: '#0a2e1c' }}
                  >
                    Curso
                  </th>
                  <th
                    className="text-center px-6 py-3 text-xs font-black uppercase tracking-widest"
                    style={{ color: '#0a2e1c' }}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtrados.map((aluno, i) => (
                  <tr
                    key={aluno.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-gray-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                          style={{
                            backgroundColor: '#0a2e1c',
                            color: '#00c853',
                          }}
                        >
                          {aluno.nome.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">{aluno.nome}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-sm" style={{ color: '#0a2e1c' }}>
                        {aluno.idade}{' '}
                        <span className="font-normal text-gray-400 text-xs">anos</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: '#f0f7f4', color: '#0a2e1c' }}
                      >
                        {aluno.curso}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {/* Detalhes */}
                        <button
                          onClick={() => setAlunoDetalhes(aluno)}
                          title="Ver detalhes"
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                          style={{
                            backgroundColor: '#f0f7f4',
                            color: '#0a2e1c',
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        </button>
                        {/* Editar */}
                        <button
                          onClick={() => setAlunoEditar(aluno)}
                          title="Editar aluno"
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                          style={{
                            backgroundColor: '#00c853',
                            color: '#0a2e1c',
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                        {/* Excluir */}
                        {confirmDelete === aluno.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleExcluir(aluno.id)}
                              className="text-xs font-bold px-2 py-1 rounded-lg text-white"
                              style={{ backgroundColor: '#e91e8c' }}
                            >
                              Sim
                            </button>
                            <button
                              onClick={() => setConfirmDelete(null)}
                              className="text-xs font-bold px-2 py-1 rounded-lg bg-gray-200 text-gray-700"
                            >
                              Não
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmDelete(aluno.id)}
                            title="Excluir aluno"
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                            style={{
                              backgroundColor: '#fff0f7',
                              color: '#e91e8c',
                            }}
                          >
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                              <path d="M10 11v6" />
                              <path d="M14 11v6" />
                              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {alunoDetalhes && (
        <ModalDetalhes aluno={alunoDetalhes} onClose={() => setAlunoDetalhes(null)} />
      )}
      {alunoEditar && (
        <ModalEditar
          aluno={alunoEditar}
          onSave={(a) => {
            onEditar(a);
            setAlunoEditar(null);
          }}
          onClose={() => setAlunoEditar(null)}
        />
      )}
    </>
  );
}
