import { Controller, Get, Post, Body, ParseIntPipe } from '@nestjs/common'
import { Param } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'

import { CreateVaultDto } from './dto/create-vault.dto'
import { VaultService } from './vault.service'
import { Vault } from './vault.entity'

@ApiTags('vault')
@Controller('vault')
export class VaultController {
  constructor(private readonly _vaultService: VaultService) {}

  @ApiOperation({ summary: 'Create new vault' })
  @Post()
  create(@Body() createVaultDto: CreateVaultDto): Promise<Vault> {
    return this._vaultService.createVault(createVaultDto)
  }

  @ApiOperation({ summary: 'Retrieve all vaults' })
  @Get()
  getAll(): Promise<Vault[]> {
    return this._vaultService.getAllVaults()
  }

  @ApiOperation({ summary: 'Retrieve vault by id' })
  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Vault> {
    return this._vaultService.findById(id)
  }
}
