import { EntityRepository, Repository } from 'typeorm'

import { Vault } from './vault.entity'
import { CreateVaultDto } from './dto/create-vault.dto'

@EntityRepository(Vault)
export class VaultRepository extends Repository<Vault> {
  async createVault(createVaultDto: CreateVaultDto) {
    return await this.save(createVaultDto)
  }

  async getAllVaults() {
    return await this.find({ relations: ['books'] })
  }

  async findById(id: number) {
    return await this.findOne(id, { relations: ['books'] })
  }
}
