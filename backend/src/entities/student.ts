import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('student')
class student {
  @PrimaryColumn()
  readonly id!: string;

  @Column()
  name!: string;

  @Column()
  tel!: string;

  @Column()
  email!: string;

  @Column()
  endereco!: string;

  @Column()
  bairro!: string;

  @Column()
  cidade!: string;

  @Column()
  uf!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { student };
