import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class teste1596539636983 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'teste',
        columns: [
          {
            name: 'testecol',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('teste');
  }
}
