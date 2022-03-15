import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
// aqui eu digo que quero usar o modo de uuid v4, mas quero chama-lo como uuid
import { v4 as uuid } from "uuid";

// @Entity("nome_da_tabela")
@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // verificamos se o id já existe, se não criamos um 
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };

// ENTIDADE < - > ORM < - > BD
