import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDescriptionAndKeywordsToPage1611860321998 implements MigrationInterface {
    name = 'AddDescriptionAndKeywordsToPage1611860321998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "page" ADD "keywords" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" DROP COLUMN "keywords"`);
        await queryRunner.query(`ALTER TABLE "page" DROP COLUMN "description"`);
    }

}
