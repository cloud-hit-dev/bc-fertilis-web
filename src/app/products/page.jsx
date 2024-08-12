import React from 'react'
import CategoryPreviews from '@/components/products/category-previews'
import CategoryFilter from '@/components/products/category-filter'
import ProductList from '@/components/products/product-list'

const PageProducts = () => {
  return (
    <>
      <CategoryPreviews />
      <CategoryFilter><ProductList /></CategoryFilter>
    </>
  )
}

export default PageProducts