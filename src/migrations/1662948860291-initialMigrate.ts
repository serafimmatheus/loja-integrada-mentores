import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrate1662948860291 implements MigrationInterface {
    name = 'initialMigrate1662948860291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(100) NOT NULL, "password" character varying(30) NOT NULL, "fullName" character varying(50) NOT NULL, "cpf" character varying(14) NOT NULL, "celular" character varying(14) NOT NULL, "telefone" character varying(14) NOT NULL, "sexo" character varying NOT NULL, "cnpj" character varying(18) NOT NULL, "rasaoSocial" character varying(100) NOT NULL, "iE" character varying(14) NOT NULL, "cep" character varying(10) NOT NULL, "endereco" character varying NOT NULL, "numero" character varying(10) NOT NULL, "complemento" character varying(20) NOT NULL, "referencia" character varying(20) NOT NULL, "bairro" character varying(30) NOT NULL, "cidade" character varying(20) NOT NULL, "estado" character varying(3) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
