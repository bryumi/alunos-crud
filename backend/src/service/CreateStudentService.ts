import { IStudentRequest } from '../interface/IStudentInterface';

class CreateStudentService {
  async execute({ name, tel, email, endereco, bairro, cidade, uf }: IStudentRequest) {
    if (!email) {
      throw new Error('Email invalido');
    }

    return { name, tel, email, endereco, bairro, cidade, uf };
  }
}
export { CreateStudentService };
