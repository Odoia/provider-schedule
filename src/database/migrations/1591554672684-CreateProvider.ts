import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProvider1591554672684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'providers',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'fantasy_name',
            type: 'varchar'
          },
          {
            name: 'social_reason',
            type: 'varchar'
          },
          {
            name: 'cnpj',
            type: 'varchar'
          },
          {
            name: 'status',
            type: 'boolean'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('providers')
  }
}
