
export function AutoSerialize<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {

        setValues(values: any) {
            (<any>Object).assign(this, values);
            const parent = Object.getPrototypeOf(Object.getPrototypeOf(this));
            const keys = (<any>parent)['__KEYS__'];
            if (keys) {
                keys.forEach((item: any) => {
                    if (item.type.length) {
                        if (values[item.key]) {
                            (<any>this)[item.key] = values[item.key].map((li: any) => new item.type[0]().setValues(li))
                        } else {
                            (<any>this)[item.key] = []
                        }
                    } else {
                        (<any>this)[item.key] = new item.type().setValues(values[item.key]);
                    }
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