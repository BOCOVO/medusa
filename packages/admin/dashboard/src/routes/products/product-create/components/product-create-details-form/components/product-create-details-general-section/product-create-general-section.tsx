import { Input, Textarea } from "@medusajs/ui"
import { UseFormReturn } from "react-hook-form"
import { useTranslation } from "react-i18next"

import { Form } from "../../../../../../../components/common/form"
import { ProductCreateSchemaType } from "../../../../types"

type ProductCreateGeneralSectionProps = {
  form: UseFormReturn<ProductCreateSchemaType>
}

export const ProductCreateGeneralSection = ({
  form,
}: ProductCreateGeneralSectionProps) => {
  const { t } = useTranslation()

  return (
    <div id="general" className="flex flex-col gap-y-6">
      <Form.Field
        control={form.control}
        name="title"
        render={({ field }) => {
          return (
            <Form.Item>
              <Form.Label>{t("products.fields.title.label")}</Form.Label>
              <Form.Control>
                <Input {...field} placeholder="Winter jacket" />
              </Form.Control>
            </Form.Item>
          )
        }}
      />

      <Form.Field
        control={form.control}
        name="description"
        render={({ field }) => {
          return (
            <Form.Item>
              <Form.Label optional>
                {t("products.fields.description.label")}
              </Form.Label>
              <Form.Control>
                <Textarea {...field} placeholder="A warm and cozy jacket" />
              </Form.Control>
            </Form.Item>
          )
        }}
      />
    </div>
  )
}
