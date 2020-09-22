import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CreateVaultDto } from './dto/create-vault.dto'
import { Vault } from 'src/modules/vault/schemas/vault.schema'

@Injectable()
export class VaultService {
  constructor(
    @InjectModel(Vault.name) private readonly _vaultModel: Model<Vault>,
  ) {}

  async create(createVaultDto: CreateVaultDto): Promise<Vault> {
    const createdVault = new this._vaultModel(createVaultDto)
    return await createdVault.save()
  }

  async findAll(): Promise<Vault[]> {
    return await this._vaultModel.find()
  }

  async findOne(id: string): Promise<Vault> {
    return await this._vaultModel.findById(id)
  }
}
