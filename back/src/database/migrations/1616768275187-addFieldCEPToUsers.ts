import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addFieldCEPToUsers1616768275187 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'cep',
      type: 'varchar'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'cep')
  }
}
