import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveKeywordsFromPage1612363784148 implements MigrationInterface {
    name = 'RemoveKeywordsFromPage1612363784148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" DROP COLUMN "keywords"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" ADD "keywords" text`);
    }

}
