import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateSalesman1590607627087 implements MigrationInterface {
  public async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'salesmen',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'phone',
            type: 'varchar'
          },
          {
            name: 'whatsapp',
            type: 'boolean'
          },
          {
            name: 'provider_id',
            type: 'integer',
            isNullable: false
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
    await queryRunner.dropTable('salesmen')
  }
}
