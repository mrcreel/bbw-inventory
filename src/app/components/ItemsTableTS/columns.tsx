'use client'

import React from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'

import type { Item } from '@/lib/types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const columns: ColumnDef<Item>[] = [
  {
    id: 'actions',
    cell: ({ row }) => {
      const item = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(item.UPCs[0])}
            >
              Copy Item UPC
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Item</DropdownMenuItem>
            <DropdownMenuItem>View Location</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: 'id',
    header: () => <p className="">ID</p>,
  },
  {
    accessorKey: 'name',
    header: () => <p className="">Name</p>,
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
    header: () => <p className="text-center">Quantity</p>,
  },
]
