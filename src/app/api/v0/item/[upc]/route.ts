import { promises as fs } from 'fs'

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type RawItem = {
  Limit: number
  Offset: number
  TotalResults: number
  Locale: string
  Results: {
    Id: string
    Name: string
    UPCs: string[]
    Description: string
    ImageUrl: string
    CategoryId: string
    Attributes: {
      Form: {
        Values: {
          Value: string
        }[]
      }
      Collection: {
        Values: {
          Value: string
        }[]
      }
      Product_Type: {
        Values: {
          Value: string
        }[]
      }
      Fragrance_Name: {
        Values: {
          Value: string
        }[]
      }
    }
    ProductPageUrl?: string
  }[]
}

type Item = {
  id: string
  name: string
  UPCs: string[]
  description: string
  imageUrl: string
  categoryId: string
  form: string
  collection: string
  productType: string
  fragranceName: string
  productPageUrl?: string
  location?: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: { upc: string } },
) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: 'DATABASE_URL is not set' },
      { status: 500 },
    )
  }

  const { upc } = await params

  const item = await prisma.item.findFirst({
    where: {
      UPCs: {
        has: upc,
      },
    },
  })

  if (item) {
    return Response.json({ item: item })
  } else {
    const file = await fs.readFile(
      `${process.cwd()}/data/item.raw.json`,
      'utf8',
    )
    const data = await JSON.parse(file)

    const rawData = data.filter((rawItemData: RawItem) => {
      return rawItemData.Results[0].UPCs.includes(upc)
    })
    const itemData = rawData[0].Results[0]

    const item: Item = {
      id: itemData.Id,
      name: itemData.Name,
      UPCs: itemData.UPCs,
      description: itemData.Description,
      imageUrl: itemData.ImageUrl,
      categoryId: itemData.CategoryId,
      form: itemData.Attributes.Form.Values[0].Value,
      collection: itemData.Attributes.Collection.Values[0].Value,
      productType: itemData.Attributes.Product_Type.Values[0].Value,
      fragranceName: itemData.Attributes.Fragrance_Name.Values[0].Value,
      productPageUrl: itemData.ProductPageUrl,
    }

    const newItem = await prisma.item.create({
      data: {
        id: item.id,
        name: item.name,
        UPCs: item.UPCs,
        description: item.description,
        imageUrl: item.imageUrl,
        categoryId: item.categoryId,
        form: item.form,
        collection: item.collection,
        productType: item.productType,
        fragranceName: item.fragranceName,
        productPageUrl: item.productPageUrl,
      },
    })
    return Response.json({ newItem: newItem })
  }
}
