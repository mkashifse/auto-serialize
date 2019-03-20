import { AutoSerialize } from "./auto-serialize.deco";
import { AbstractSerialize } from "./abstract-serialize";
import { MapTo } from "./map-to.deco";

@AutoSerialize
export class Address extends AbstractSerialize {

    house = '123';
    street = 'xyz';
    city = 'Peshawar';

    constructor() {
        super();
    }

    fullAddress() {
        return `${this.house} ${this.street} ${this.city}`;
    }
}

@AutoSerialize
export class Todo extends AbstractSerialize {

    id: number = null;
    text: string = 'First';
    desc: string = 'first todo description';
    list: string[] = ['abc', 'ssc', 'sds'];
    @MapTo(Address) address: Address = new Address();

    constructor() {
        super();
    }

    get displayString() { return 'some string'; }

    display() {
        console.log('function');
    }
}

const todo = new Todo().setValues({
    text: 'again', address: {
        house:'new house',
        street:'new street',
    }
}) as Todo;

console.log(todo.address.fullAddress());