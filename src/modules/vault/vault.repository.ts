import { EntityRepository, Repository } from 'typeorm'

import { Vault } from './vault.entity'
import { CreateVaultDto } from './dto/create-vault.dto'

@EntityRepository(Vault)
export class VaultRepository extends Repository<Vault> {
  async createVault(createVaultDto: CreateVaultDto) {
    return await this.save(createVaultDto)
  }

  async getAllVaults() {
    const unfilteredVaults = await this.find({ relations: ['books'] })
    const filteredVaults = []

    for (
      let curVaultNum = 0;
      curVaultNum < unfilteredVaults.length;
      curVaultNum++
    ) {
      const curVault = unfilteredVaults[curVaultNum]
      curVault.shelfs = []
      for (let curShelf = 1; curShelf <= curVault.numShelfs; curShelf++) {
        const shelf = { rows: [] }
        // get books that located on current shelf
        const booksOnCurShelf = curVault.books.filter(
          book => book.shelf === curShelf,
        )
        // construct shelf with two rows and books on it sorted by books's ordering
        for (let curRow = 1; curRow <= curVault.numRows; curRow++) {
          // get books that located on each row of the current shelf
          const booksOnCurRow = booksOnCurShelf
            .filter(book => book.row === curRow)
            .sort(book => book.number) // sort by order on row
          const row = { books: [] }
          row.books.push(...booksOnCurRow)
          shelf.rows.push(row)
        }
        curVault.shelfs.push(shelf)
      }
      filteredVaults.push(curVault)
    }

    return filteredVaults
  }

  async findById(id: number) {
    return await this.findOne(id, { relations: ['books'] })
  }
}
