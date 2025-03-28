import React from 'react'

import { columns } from './columns'
import { DataTable } from './data-table'

import prisma from '@/lib/client'
import { Item } from '@prisma/client'

async function getData(): Promise<Item[]> {
  try {
    const items = await prisma.item.findMany()
    return items.map((item) => item)
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container pt-1">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
