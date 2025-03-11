import { promises as fs } from 'fs'

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
  request: Request,
  { params }: { params: { upc: string } },
) {
  const upc = await params.upc
  console.log(upc)
  const file = await fs.readFile(`${process.cwd()}/data/items.json`, 'utf8')
  const data = await JSON.parse(file)
  const items = await data
    .filter((rawItem: RawItem) => {
      return rawItem.Results[0].UPCs.includes(upc)
    })
    .map((rawItem: RawItem) => {
      const itemData = rawItem.Results[0]
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
      return item
    })
  return Response.json(items)
}
