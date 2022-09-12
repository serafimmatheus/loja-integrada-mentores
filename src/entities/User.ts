import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 30 })
  password: string;

  @Column({ length: 50 })
  fullName: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 14 })
  celular: string;

  @Column({ length: 14 })
  telefone: string;

  @Column()
  sexo: string;

  @Column({ length: 18 })
  cnpj: string;

  @Column({ length: 100 })
  rasaoSocial: string;

  @Column({ length: 14 })
  iE: string;

  @Column({ length: 10 })
  cep: string;

  @Column()
  endereco: string;

  @Column({ length: 10 })
  numero: string;

  @Column({ length: 20 })
  complemento: string;

  @Column({ length: 20 })
  referencia: string;

  @Column({ length: 30 })
  bairro: string;

  @Column({ length: 20 })
  cidade: string;

  @Column({ length: 3 })
  estado: string;
}
