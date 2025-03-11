/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function GET(req: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: 'DATABASE_URL is not set' },
      { status: 500 },
    )
  }

  try {
    const items = await prisma.item.findMany()
    return NextResponse.json(items)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 },
    )
  }
  // const file = await fs.readFile(`${process.cwd()}/data/items.json`, "utf8");
  // const data = await JSON.parse(file);
  // const items = await data.map((rawItem: RawItem) => {
  //   const itemData = rawItem.Results[0];

  //   const item: Item = {
  //     id: itemData.Id,
  //     name: itemData.Name,
  //     UPCs: itemData.UPCs,
  //     description: itemData.Description,
  //     imageUrl: itemData.ImageUrl,
  //     categoryId: itemData.CategoryId,
  //     form: itemData.Attributes.Form.Values[0].Value,
  //     collection: itemData.Attributes.Collection.Values[0].Value,
  //     productType: itemData.Attributes.Product_Type.Values[0].Value,
  //     fragranceName: itemData.Attributes.Fragrance_Name.Values[0].Value,
  //     productPageUrl: itemData.ProductPageUrl,
  //   };

  //   return item;
  // });

  // return Response.json(items);
}
