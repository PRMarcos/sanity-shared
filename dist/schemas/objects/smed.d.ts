declare const _default: {
    type: "document";
    name: "smed";
} & Omit<import("sanity").DocumentDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<{
        title: string;
        media: string;
    }, Record<"title" | "media", any>> | undefined;
};
export default _default;
