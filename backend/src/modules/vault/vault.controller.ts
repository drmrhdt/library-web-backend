import { Controller, Get, Post, Body, NotFoundException } from '@nestjs/common'
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger'
import { Param } from '@nestjs/common/decorators/http/route-params.decorator'
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception'

import { VaultService } from './vault.service'
import { CreateVaultDto } from './dto/create-vault.dto'
import { Vault } from 'src/modules/vault/schemas/vault.schema'

@ApiTags('vault')
@Controller('vault')
export class VaultController {
  constructor(private readonly _vaultService: VaultService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Vault has been created successfully',
    type: Vault,
  })
  async createVault(@Body() createVaultDto: CreateVaultDto) {
    try {
      return {
        response: await this._vaultService.create(createVaultDto),
      }
    } catch (err) {
      return new BadRequestException(err)
    }
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'Vaults have been retrieved successfully',
  })
  async findAll() {
    try {
      return {
        response: await this._vaultService.findAll(),
      }
    } catch (err) {
      return new NotFoundException(err)
    }
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'The founded vault',
    type: Vault,
  })
  @ApiNotFoundResponse({ status: 404, description: 'Could not find vault' })
  async findOne(@Param('id') id: string) {
    try {
      return { response: await this._vaultService.findOne(id) }
    } catch (err) {
      return new NotFoundException(err)
    }
  }
}
