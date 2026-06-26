import { IStudents } from '@/interface/students.interface';
import { getCursoLabel } from '@/utils/coursesName';

interface Props {
  aluno: IStudents;
  onClose: () => void;
}

export function ModalDetalhes({ aluno, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10,46,28,0.7)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div
          className="relative h-24 flex items-end px-6 pb-4"
          style={{ background: 'linear-gradient(135deg, #0a2e1c 0%, #0d3b2e 60%, #00c853 100%)' }}
        >
          <div className="absolute top-3 right-3">
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors text-2xl leading-none"
            >
              &times;
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-black text-dark"
              style={{ backgroundColor: '#00c853' }}
            >
              {aluno.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">
                Perfil do Aluno
              </p>
              <h2 className="text-white font-black text-lg leading-tight">{aluno.name}</h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: '#f0f7f4' }}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: '#0a2e1c' }}
              >
                Idade
              </p>
              <p className="text-2xl font-black" style={{ color: '#00c853' }}>
                {aluno.age}
                <span className="text-sm font-medium text-gray-500 ml-1">anos</span>
              </p>
            </div>
            {/* <div className="rounded-xl p-4" style={{ backgroundColor: '#f0f7f4' }}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: '#0a2e1c' }}
              >
                Cadastrado em
              </p>
              <p className="text-sm font-bold text-gray-700">
                {new Date(aluno.dataCadastro).toLocaleDateString('pt-BR')}
              </p>
            </div> */}
          </div>
          <div className="rounded-xl p-4" style={{ backgroundColor: '#f0f7f4' }}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: '#0a2e1c' }}
            >
              Curso
            </p>
            <p className="font-bold text-gray-800">{getCursoLabel(aluno.course)}</p>
          </div>
          <div
            className="rounded-xl p-4 border-l-4"
            style={{ backgroundColor: '#fff0f7', borderColor: '#e91e8c' }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: '#e91e8c' }}
            >
              ID do Aluno
            </p>
            <p className="text-xs font-mono text-gray-500 break-all">{aluno.id}</p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-98"
            style={{ backgroundColor: '#0a2e1c' }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
