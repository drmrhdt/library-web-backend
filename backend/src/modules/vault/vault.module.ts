import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Vault, VaultSchema } from 'src/modules/vault/schemas/vault.schema'
import { VaultController } from './vault.controller'
import { VaultService } from './vault.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vault.name, schema: VaultSchema }]),
  ],
  controllers: [VaultController],
  providers: [VaultService],
})
export class VaultModule {}
