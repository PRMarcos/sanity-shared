declare const _default: {
    type: "document";
    name: "ourSmedsPage";
} & Omit<import("sanity").DocumentDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
};
export default _default;
