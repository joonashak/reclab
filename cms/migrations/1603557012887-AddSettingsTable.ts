import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSettingsTable1603557012887 implements MigrationInterface {
    name = 'AddSettingsTable1603557012887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "settings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "frontpageId" uuid NOT NULL, CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "FK_529b3a7d4badb6f8181786ea87e" FOREIGN KEY ("frontpageId") REFERENCES "page"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "FK_529b3a7d4badb6f8181786ea87e"`);
        await queryRunner.query(`DROP TABLE "settings"`);
    }

}
