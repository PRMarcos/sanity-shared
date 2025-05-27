type ImageValidationOptions = {
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  aspectRatio?: number
}

export function validateImageInput(options: ImageValidationOptions) {
  return async (image: any, context: any) => {
    const client = context.getClient({ apiVersion: '2023-01-01' })
    const assetId = image?.asset?._ref
    if (!assetId) return 'Imagem não encontrada'

    const asset = await client.getDocument(assetId)
    if (!asset) return 'Imagem inválida'

    const dimensions = asset?.metadata?.dimensions
    if (!dimensions) return 'Não foi possível obter as dimensões da imagem'

    // const { width, height } = dimensions

    // if (options.minWidth && width < options.minWidth) {
    //   return `A largura mínima é ${options.minWidth}px`
    // }
    // if (options.minHeight && height < options.minHeight) {
    //   return `A altura mínima é ${options.minHeight}px`
    // }
    // if (options.maxWidth && width > options.maxWidth) {
    //   return `A largura máxima é ${options.maxWidth}px`
    // }
    // if (options.maxHeight && height > options.maxHeight) {
    //   return `A altura máxima é ${options.maxHeight}px`
    // }

    // if (options.aspectRatio) {
    //   const actualRatio = width / height
    //   const expectedRatio = options.aspectRatio
    //   const diff = Math.abs(actualRatio - expectedRatio)
    //   if (diff > 0.01) {
    //     return `A proporção esperada é ${expectedRatio}, mas a imagem tem proporção ${actualRatio.toFixed(2)}`
    //   }
    // }

    return true
  }
}
