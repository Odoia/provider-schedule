import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export default class OffersMigration1583761557682 implements MigrationInterface {
  name = 'OffersMigration1583761557682'

  public async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'offers',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'seats',
            type: 'integer'
          },
          {
            name: 'course_id',
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

    await queryRunner.createForeignKey(
      'offers',
      new TableForeignKey({
        columnNames: ['course_id'],
        referencedTableName: 'courses',
        referencedColumnNames: ['id'],
        name: 'FK_OFFERS_COURSES'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('offers', 'FK_OFFERS_COURSES')
    await queryRunner.dropTable('offers')
  }
}
