import { EntityRepository, Repository } from 'typeorm';
import { client } from '../entities/client';

@EntityRepository(student)
class StudentRepositories extends Repository<student> {}

export { StudentRepositories };
