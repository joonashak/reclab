import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1603475566830 implements MigrationInterface {
    name = 'InitialMigration1603475566830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "passwordHash" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "page_language_enum" AS ENUM('fi', 'en')`);
        await queryRunner.query(`CREATE TABLE "page" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "content" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE, "language" "page_language_enum" NOT NULL, "isPublic" boolean NOT NULL DEFAULT false, "path" text, "authorId" uuid NOT NULL, "editorId" uuid, CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "menuItem_language_enum" AS ENUM('fi', 'en')`);
        await queryRunner.query(`CREATE TABLE "menuItem" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "order" integer NOT NULL, "path" text, "language" "menuItem_language_enum" NOT NULL, "pageId" uuid, "parentId" uuid, CONSTRAINT "PK_43422a8b9152aa4ca018978a827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "translation" ("originPageId" uuid NOT NULL, "targetPageId" uuid NOT NULL, CONSTRAINT "PK_ef0f3b3a452fd7bb7fa7ae76da2" PRIMARY KEY ("originPageId", "targetPageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ec6a23745d388b48f0251a3eea" ON "translation" ("originPageId") `);
        await queryRunner.query(`CREATE INDEX "IDX_215e86bd4f941fb660663eaa3c" ON "translation" ("targetPageId") `);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_8810ba4cc4eac84c9c750eaf9e1" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_0b6651fc1b7c8720c3991503086" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menuItem" ADD CONSTRAINT "FK_495560654f1ef7b4e90e5902e5d" FOREIGN KEY ("pageId") REFERENCES "page"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menuItem" ADD CONSTRAINT "FK_0b13be95afe58f90cbfb8a9c327" FOREIGN KEY ("parentId") REFERENCES "menuItem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "translation" ADD CONSTRAINT "FK_ec6a23745d388b48f0251a3eeaa" FOREIGN KEY ("originPageId") REFERENCES "page"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "translation" ADD CONSTRAINT "FK_215e86bd4f941fb660663eaa3cc" FOREIGN KEY ("targetPageId") REFERENCES "page"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "FK_215e86bd4f941fb660663eaa3cc"`);
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "FK_ec6a23745d388b48f0251a3eeaa"`);
        await queryRunner.query(`ALTER TABLE "menuItem" DROP CONSTRAINT "FK_0b13be95afe58f90cbfb8a9c327"`);
        await queryRunner.query(`ALTER TABLE "menuItem" DROP CONSTRAINT "FK_495560654f1ef7b4e90e5902e5d"`);
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_0b6651fc1b7c8720c3991503086"`);
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_8810ba4cc4eac84c9c750eaf9e1"`);
        await queryRunner.query(`DROP INDEX "IDX_215e86bd4f941fb660663eaa3c"`);
        await queryRunner.query(`DROP INDEX "IDX_ec6a23745d388b48f0251a3eea"`);
        await queryRunner.query(`DROP TABLE "translation"`);
        await queryRunner.query(`DROP TABLE "menuItem"`);
        await queryRunner.query(`DROP TYPE "menuItem_language_enum"`);
        await queryRunner.query(`DROP TABLE "page"`);
        await queryRunner.query(`DROP TYPE "page_language_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
