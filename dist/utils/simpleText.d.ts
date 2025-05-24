export declare function simpleText({ title, name }: {
    title: string;
    name: string;
}): {
    title: string;
    name: string;
    type: string;
    of: {
        type: string;
        styles: never[];
        lists: never[];
        marks: {
            decorators: {
                title: string;
                value: string;
            }[];
            annotations: never[];
        };
    }[];
};
