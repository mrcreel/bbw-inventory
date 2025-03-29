import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

async function getData(upc: string) {
  const url = `https://api.bazaarvoice.com/data/products.json?passkey=${process.env.API_KEY}&apiVersion=5.4&filter=upc:${upc}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    return json
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('An unknown error occurred')
    }
  }
}

const prisma = new PrismaClient()

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

  const itemCheck = await prisma.item.findUnique({
    where: {
      UPC: upc,
    },
  })

  if (itemCheck) {
    return Response.json({ item: itemCheck })
  } else {
    const data = await getData(upc)
    const itemData = data.Results.at(-1)

    const newItem = await prisma.item.create({
      data: {
        id: itemData.Id,
        name: itemData.Name,
        UPC: upc,
        description: itemData.Description,
        imageUrl: itemData.ImageUrl,
        categoryId: itemData.CategoryId,
        form: itemData.Attributes.Form.Values[0].Value,
        collection: itemData.Attributes.Collection.Values[0].Value,
        productType: itemData.Attributes.Product_Type.Values[0].Value,
        fragranceName: itemData.Attributes.Fragrance_Name.Values[0].Value,
        productPageUrl: itemData.ProductPageUrl ?? '',
        location: '',
        quantity: 0,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    })
    console.log('newItem:', newItem)
    return Response.json({ newItem: newItem })
  }
}
