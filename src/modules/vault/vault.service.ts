import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { VaultRepository } from './vault.repository'
import { Vault } from './vault.entity'
import { CreateVaultDto } from './dto/create-vault.dto'

@Injectable()
export class VaultService {
  constructor(
    @InjectRepository(VaultRepository)
    private _vaultRepository: VaultRepository,
  ) {}

  async createVault(createVaultDto: CreateVaultDto): Promise<Vault> {
    return await this._vaultRepository.createVault(createVaultDto)
  }

  async getAllVaults(): Promise<Vault[]> {
    return this._vaultRepository.getAllVaults()
  }

  async findById(id: number): Promise<Vault> {
    const found = await this._vaultRepository.findById(id)

    if (!found) {
      throw new NotFoundException(`Vault with ID ${id} not found`)
    }

    return found
  }

  async deleteVaultById(id: number) {
    return this._vaultRepository.deleteVaultById(id)
  }
}
