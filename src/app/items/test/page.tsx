import React from 'react'

import itemsRawData from '../../../../data/itemsRawData'
import type { Item } from '@/lib/types'

const ItemsTest = () => {
  const items = itemsRawData.map((itemRaw) => {
    const lastResultData = itemRaw.Results[itemRaw.Results.length - 1]
    const item: Item = {
      id: lastResultData.Id,
      name: lastResultData.Name ?? '****NO NAME***',
      UPC: lastResultData.UPCs[0],
      description: lastResultData.Description ?? '****NO DESCRIPTION***',
      imageUrl: lastResultData.ImageUrl ?? '****NO IMAGE URL***',
      categoryId: lastResultData.CategoryId,
      form: lastResultData.Attributes.Form?.Values[0].Value ?? '***NO FORM***',
      collection:
        lastResultData.Attributes.Collection?.Values[0].Value ??
        '***NO COLLECTION***',
      productType:
        lastResultData.Attributes.Product_Type?.Values[0].Value ??
        '***NO PRODUCT TYPE***',
      fragranceName:
        lastResultData.Attributes.Fragrance_Name?.Values[0].Value ??
        '***NO FRAGRANCE NAME***',
      productPageUrl:
        lastResultData.ProductPageUrl ?? '****NO PRODUCT PAGE URL***',
    }
    console.log('****************')
    return item
  })

  console.log('Items:', items)
  console.log('================:')

  return <div>ItemsTest</div>
}

export default ItemsTest
