export const CURSOS = [
    { label: 'Administração', value: 'MANAGEMENT' },
    { label: 'Contabilidade', value: 'ACCOUNTING' },
    { label: 'Ciências Contábeis', value: 'ACCOUNTING_SCIENCE' },
    { label: 'Ciência da Computação', value: 'COMPUTER_SCIENCE' },
    { label: 'Análise e Desenvolvimento de Sistemas', value: 'SYSTEM_DEVELOPMENT' },
    { label: 'Publicidade e Propaganda', value: 'ADVERTISING_AND_PUBLICITY' },
    { label: 'Relações Públicas', value: 'PUBLIC_RELATIONS' },
    { label: 'Relações Internacionais', value: 'INTERNATIONAL_RELATIONS' },
    { label: 'Secretariado e Assessoria Executiva', value: 'SECRETARIAT' },
];
export const CURSOS_MAP = Object.fromEntries(CURSOS.map((curso) => [curso.value, curso.label]));
export function getCursoLabel(value) {
    return CURSOS_MAP[value] ?? value;
}
