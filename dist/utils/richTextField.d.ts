export declare const richTextField: {
    type: string;
    of: ({
        type: string;
        styles: {
            title: string;
            value: string;
        }[];
        lists: {
            title: string;
            value: string;
        }[];
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
        options?: undefined;
        title?: undefined;
    } | {
        type: string;
        options: {
            hotspot: boolean;
        };
        styles?: undefined;
        lists?: undefined;
        marks?: undefined;
        title?: undefined;
    } | {
        type: string;
        title: string;
        styles?: undefined;
        lists?: undefined;
        marks?: undefined;
        options?: undefined;
    })[];
};
