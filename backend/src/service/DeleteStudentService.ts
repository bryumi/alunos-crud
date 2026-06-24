class DeleteStudentService {
  async execute(id: string) {
    if (!id) {
      throw new Error('Aluno não encontrado');
    }

    return { message: 'Aluno deletado com sucesso' };
  }
}
export { DeleteStudentService };
