import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { VaultController } from './vault.controller'
import { VaultService } from './vault.service'
import { VaultRepository } from './vault.repository'

@Module({
  imports: [TypeOrmModule.forFeature([VaultRepository])],
  controllers: [VaultController],
  providers: [VaultService],
})
export class VaultModule {}
