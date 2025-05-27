type ImageValidationOptions = {
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    aspectRatio?: number;
};
export declare function validateImageInput(options: ImageValidationOptions): (image: any, context: any) => Promise<true | "Imagem não encontrada" | "Imagem inválida" | "Não foi possível obter as dimensões da imagem">;
export {};
