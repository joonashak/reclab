import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCascadeToMenuItem1607850984505 implements MigrationInterface {
    name = 'AddCascadeToMenuItem1607850984505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menuItem" DROP CONSTRAINT "FK_495560654f1ef7b4e90e5902e5d"`);
        await queryRunner.query(`ALTER TABLE "menuItem" ADD CONSTRAINT "FK_495560654f1ef7b4e90e5902e5d" FOREIGN KEY ("pageId") REFERENCES "page"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menuItem" DROP CONSTRAINT "FK_495560654f1ef7b4e90e5902e5d"`);
        await queryRunner.query(`ALTER TABLE "menuItem" ADD CONSTRAINT "FK_495560654f1ef7b4e90e5902e5d" FOREIGN KEY ("pageId") REFERENCES "page"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
