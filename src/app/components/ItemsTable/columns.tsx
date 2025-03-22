'use client'

import { ColumnDef } from '@tanstack/react-table'

import type { Item } from '@/lib/types'

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'UPCs',
    header: 'UPCs',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'imageUrl',
    header: 'Image URL',
  },
  {
    accessorKey: 'categoryId',
    header: 'Category ID',
  },
  {
    accessorKey: 'form',
    header: 'Form',
  },
  {
    accessorKey: 'collection',
    header: 'Collection',
  },
  {
    accessorKey: 'productType',
    header: 'Product Type',
  },
  {
    accessorKey: 'fragranceName',
    header: 'Fragrance Name',
  },
  {
    accessorKey: 'productPageUrl',
    header: 'Product Page URL',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
]
