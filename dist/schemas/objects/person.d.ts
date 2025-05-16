declare const _default: {
    type: "document";
    name: "person";
} & Omit<import("sanity").DocumentDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<{
        title: string;
        subtitle: string;
        media: string;
    }, Record<"title" | "media" | "subtitle", any>> | undefined;
};
export default _default;
