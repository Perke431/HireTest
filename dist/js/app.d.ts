declare const dataActive: Element | null;
declare const dataImages: NodeListOf<Element>;
declare const allCircles: NodeListOf<Element>;
declare function removeActive(arr: any, className: any): void;
declare const startValue: string | null | undefined;
declare const arrows: NodeListOf<Element>;
declare const data: {
    Country: string;
    Name: string;
    Phone: string;
    Address: string;
}[];
declare type TFilterObject = {
    Country: Array<string>;
    Name: Array<string>;
};
declare const filterObject: TFilterObject;
declare const renderTable: () => void;
declare const replaceNode: (root: Element, el: Element) => void;
declare const createElement: (tag: string, attributes?: {}, children?: Array<Node | string>) => HTMLElement;
