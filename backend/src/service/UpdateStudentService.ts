import { IStudentRequest } from '../interface/IStudentInterface';

class UpdateStudentService {
  async execute({ id, name, tel, email, endereco, bairro, cidade, uf }: IStudentRequest) {
    if (!email) {
      throw new Error('Email invalido');
    }
    // const studentRepository = getCustomRepository(ClientRepositories);
    // const client = await clientRepository.findOne(id);

    // if (!client) {
    //     throw new Error ("Cliente não encontrado");
    // }
    // if (name) {
    //     client.name = name;
    // }
    // if (tel) {
    //     client.tel = tel;
    // }
    // if (email) {
    //     client.email = email;
    // }
    // if (endereco) {
    //     client.endereco = endereco;
    // }
    // if (bairro) {
    //     client.bairro = bairro;
    // }
    // if (cidade) {
    //     client.cidade = cidade;
    // }
    // if (uf) {
    //     client.uf = uf;
    // }

    // await clientRepository.update(id || 0, client);

    // return client;
  }
}
export { UpdateStudentService };
