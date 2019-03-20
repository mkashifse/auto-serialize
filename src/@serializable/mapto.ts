import { AbstractSerializer } from "./abstract-serializer";


// MapTo decorator
export function MapTo(type: any = null, mapto: string = null, handler: (data: any) => any = null) {
    return function (target: AbstractSerializer, key: string) {
        if (!('__KEYS__' in target)) {
            (<any>target)['__KEYS__'] = [];
        }

        (<any>target)['__KEYS__'].push({
            type,
            key,
            mapto,
        });
    };
}