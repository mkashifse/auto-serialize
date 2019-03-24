export default interface IAttribute {
    type?: Function | [Function] | undefined | null;
    key?: any;
    mapto?: string;
    handler?: Function;
}

export { IAttribute };
