import { AbstractSerialize } from "./abstract-serialize";
import { Attribute } from "./attribute.interface";

export function AutoSerialize<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {

        setValues(values: any) {
            (<any>Object).assign(this, values);
            const parent = Object.getPrototypeOf(Object.getPrototypeOf(this));
            const keys = (<any>parent)['__KEYS__'];
            if (keys) {
                keys.forEach((item: any) => {
                    (<any>this)[item.key] = new item.type().setValues(values[item.key]);
                });
            }
            return this;
        }

        getValues() {
            const values = (<any>Object).assign({}, this);
            return values;
        }
    }
}