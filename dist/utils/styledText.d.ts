export declare function styledText({ title, name }: {
    title: string;
    name: string;
}): {
    title: string;
    name: string;
    type: string;
    of: {
        type: string;
        styles: {
            title: string;
            value: string;
        }[];
        lists: never[];
        marks: {
            decorators: {
                title: string;
                value: string;
            }[];
            annotations: {
                name: string;
                type: string;
                title: string;
                fields: ({
                    name: string;
                    type: string;
                    title: string;
                    initialValue?: undefined;
                } | {
                    name: string;
                    type: string;
                    title: string;
                    initialValue: boolean;
                })[];
            }[];
        };
    }[];
};
