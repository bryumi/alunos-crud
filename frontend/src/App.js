import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormCadastro } from './components/FormCadastro';
import { TabelaAlunos } from './components/TabelaAlunos';
import { useGetStudents } from './services/getStudents';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteStudent } from './services/deleteStudent';
import { SnackbarComponent } from './components/Snackbar';
export default function App() {
    const [showSnackbar, setShowSnackbar] = useState({
        open: false,
        message: '',
        type: 'success',
    });
    const { data, isLoading, isError } = useGetStudents();
    const queryClient = useQueryClient();
    const { mutate: mutateDelete } = useDeleteStudent({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-students'] });
            setShowSnackbar({ open: true, message: 'Aluno deletado com sucesso', type: 'success' });
        },
        onError: (error) => {
            const message = error?.response?.data?.message || 'Erro inesperado';
            setShowSnackbar({ open: true, message, type: 'error' });
            console.log(message);
        },
    });
    const alunos = data || [];
    const handleEditar = (updated) => {
        setShowSnackbar({ open: true, message: 'Aluno atualizado com sucesso', type: 'success' });
    };
    const handleDelete = (id) => {
        mutateDelete(id);
    };
    return (_jsxs("div", { className: "min-h-screen", style: { backgroundColor: '#f0f7f4' }, children: [_jsx(SnackbarComponent, { open: showSnackbar.open, message: showSnackbar.message, type: showSnackbar.type, onClose: () => setShowSnackbar({ open: false, message: '', type: 'success' }) }), _jsx("header", { style: { backgroundColor: '#0a2e1c' }, children: _jsx("div", { className: "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm", style: { backgroundColor: '#00c853', color: '#0a2e1c' }, children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-notebook-pen-icon lucide-notebook-pen", children: [_jsx("path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }), _jsx("path", { d: "M2 6h4" }), _jsx("path", { d: "M2 10h4" }), _jsx("path", { d: "M2 14h4" }), _jsx("path", { d: "M2 18h4" }), _jsx("path", { d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" })] }) }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-black text-lg leading-none", children: "Gest\u00E3o de Alunos" }), _jsx("p", { className: "text-white/50 text-xs", children: "Portal Acad\u00EAmico" })] })] }) }) }), _jsxs("div", { className: "relative overflow-hidden py-8 px-4", style: {
                    backgroundImage: 'linear-gradient(135deg, #0d3b2e 0%, #0a2e1c 50%, #083020 100%)',
                }, children: [_jsx("div", { className: "absolute right-0 top-0 w-64 h-full opacity-10" }), _jsx("div", { className: "absolute left-1/3 top-0 w-px h-full opacity-20" }), _jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [_jsx("p", { className: "text-white/50 text-xs uppercase tracking-widest font-semibold mb-1", children: "Sistema de Gest\u00E3o" }), _jsxs("h1", { className: "text-white font-black text-3xl leading-tight", children: ["Gerenciamento de ", _jsx("span", { style: { color: '#00c853' }, children: "Alunos" })] }), _jsx("p", { className: "text-white/60 text-sm mt-1", children: "Cadastre, edite e acompanhe os alunos da institui\u00E7\u00E3o." })] }), _jsx("div", { className: "max-w-6xl mx-auto mt-6 grid grid-cols-3 gap-3 relative z-10", children: [
                            {
                                label: 'Total de Alunos',
                                value: alunos.length,
                                accent: '#00c853',
                            },
                            {
                                label: 'Média de Idade',
                                value: alunos.length
                                    ? Math.round(alunos.reduce((s, a) => s + a.age, 0) / alunos.length)
                                    : 0,
                                accent: '#e91e8c',
                            },
                        ].map((s) => (_jsxs("div", { className: "rounded-xl px-4 py-3", style: {
                                backgroundColor: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }, children: [_jsx("p", { className: "text-3xl font-black", style: { color: s.accent }, children: s.value }), _jsx("p", { className: "text-white/50 text-xs font-semibold mt-0.5", children: s.label })] }, s.label))) })] }), _jsx("main", { className: "max-w-7xl mx-auto px-4 py-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-1", children: [_jsx(FormCadastro, {}), _jsxs("div", { className: "mt-4 rounded-xl p-4 border-l-4 text-sm", style: { backgroundColor: 'white', borderColor: '#e91e8c' }, children: [_jsx("p", { className: "font-black text-xs uppercase tracking-widest mb-1", style: { color: '#e91e8c' }, children: "Dica" }), _jsx("p", { className: "text-gray-600 text-xs leading-relaxed", children: "Use a busca na tabela para filtrar alunos por nome ou curso rapidamente." })] })] }), _jsx("div", { className: "lg:col-span-2", children: _jsx(TabelaAlunos, { alunos: alunos, onEditar: handleEditar, onDelete: handleDelete }) })] }) }), _jsx("footer", { className: "mt-8 py-6 px-4 text-center", style: { borderTop: '1px solid #dce8e1' }, children: _jsxs("p", { className: "text-xs font-semibold", style: { color: '#0a2e1c' }, children: ["Gest\u00E3o de Alunos", _jsx("span", { className: "mx-2 opacity-30", children: "\u2022" }), _jsxs("span", { className: "opacity-50", children: ["Sistema Acad\u00EAmico \u00A9 ", new Date().getFullYear()] })] }) })] }));
}
