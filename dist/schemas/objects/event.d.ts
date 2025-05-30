declare const _default: {
    type: "document";
    name: "event";
} & Omit<import("sanity").DocumentDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<{
        title: string;
        media: string;
        firstDay: string;
    }, Record<"title" | "media" | "firstDay", any>> | undefined;
};
export default _default;
