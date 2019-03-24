import { AbstractSerializer } from "./abstract-serializer";
import { IAttribute } from "./attribute.interface";


// MapTo decorator
export function MapTo(attr: IAttribute = { type: null, mapto: '', handler: () => { } }) {
    const { type, handler, mapto } = attr;
    return function (target: AbstractSerializer, key: string) {
        if (!('__KEYS__' in target)) {
            (<any>target)['__KEYS__'] = [];
        }

        (<any>target)['__KEYS__'].push({
            type,
            key,
            mapto,
            handler
        });
    };
}