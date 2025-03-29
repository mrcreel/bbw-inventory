export type Item = {
  id: string
  name: string
  UPC: string
  description: string
  imageUrl: string
  categoryId: string
  form: string
  collection: string
  productType: string
  fragranceName: string
  productPageUrl?: string
  location?: string
  quantity?: number
  createdAt?: Date
  updatedAt?: Date
}

export type RawItem = {
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
    ProductPageUrl?: string
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
  }[]
}
