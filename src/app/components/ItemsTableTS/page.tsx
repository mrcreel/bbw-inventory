import React from 'react'

import type { Item } from '@/lib/types'
import { columns } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Item[]> {
  const res = await fetch(process.env.URL + '/api/v0/items', { method: 'GET' })
  const data = await res.json()
  return data
}

const ItemsTable = async () => {
  const data = await getData()
  return (
    <div className="flex flex-col flex-1 items-center justify-baseline w-full border border-black bg-neutral-200">
      <div className="w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default ItemsTable
