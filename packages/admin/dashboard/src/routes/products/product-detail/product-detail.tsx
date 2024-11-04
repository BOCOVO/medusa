import { useLoaderData, useParams } from "react-router-dom"

import { TwoColumnPageSkeleton } from "../../../components/common/skeleton"
import { TwoColumnPage } from "../../../components/layout/pages"
import { useProduct } from "../../../hooks/api/products"
import { ProductGeneralSection } from "./components/product-general-section"
import { ProductMediaSection } from "./components/product-media-section"
import { ProductOrganizationSection } from "./components/product-organization-section"
import { ProductVariantSection } from "./components/product-variant-section"
import { PRODUCT_DETAIL_FIELDS } from "./constants"
import { productLoader } from "./loader"

import { useDashboardExtension } from "../../../extensions"

export const ProductDetail = () => {
  const initialData = useLoaderData() as Awaited<
    ReturnType<typeof productLoader>
  >

  const { id } = useParams()
  const { product, isLoading, isError, error } = useProduct(
    id!,
    { fields: PRODUCT_DETAIL_FIELDS },
    {
      initialData: initialData,
    }
  )

  const { getWidgets } = useDashboardExtension()

  const after = getWidgets("product.details.after")
  const before = getWidgets("product.details.before")
  const sideAfter = getWidgets("product.details.side.after")
  const sideBefore = getWidgets("product.details.side.before")

  const isDevEnv = import.meta.env.DEV

  if (isLoading || !product) {
    return (
      <TwoColumnPageSkeleton
        mainSections={4}
        sidebarSections={3}
        showJSON={isDevEnv}
        showMetadata={isDevEnv}
      />
    )
  }

  if (isError) {
    throw error
  }

  return (
    <TwoColumnPage
      widgets={{
        after,
        before,
        sideAfter,
        sideBefore,
      }}
      showJSON={isDevEnv}
      showMetadata={isDevEnv}
      data={product}
    >
      <TwoColumnPage.Main>
        <ProductGeneralSection product={product} />
        <ProductMediaSection product={product} />
        <ProductVariantSection product={product} />
      </TwoColumnPage.Main>
      <TwoColumnPage.Sidebar>
        <ProductOrganizationSection product={product} />
      </TwoColumnPage.Sidebar>
    </TwoColumnPage>
  )
}
