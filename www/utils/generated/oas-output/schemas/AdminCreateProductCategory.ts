/**
 * @schema AdminCreateProductCategory
 * type: object
 * description: The product category's details.
 * x-schemaName: AdminCreateProductCategory
 * required:
 *   - name
 * properties:
 *   name:
 *     type: string
 *     title: name
 *     description: The product category's name.
 *   description:
 *     type: string
 *     title: description
 *     description: The product category's description.
 *   handle:
 *     type: string
 *     title: handle
 *     description: The product category's handle.
 *   is_internal:
 *     type: boolean
 *     title: is_internal
 *     description: Whether the product category is only used and seen by admin users.
 *   is_active:
 *     type: boolean
 *     title: is_active
 *     description: Whether the product category is active.
 *   parent_category_id:
 *     type: string
 *     title: parent_category_id
 *     description: The ID of a category that's the parent of this one.
 *   rank:
 *     type: number
 *     title: rank
 *     description: The sorting order of the product category among sibling categories.
 *   metadata:
 *     type: object
 *     description: The product category's metadata, used to store custom key-value pairs.
 * 
*/

