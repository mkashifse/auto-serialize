import { AbstractSerializer, MapTo, AutoSerialize } from './@auto-serialize';


@AutoSerialize
export class Address extends AbstractSerializer {

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
export class Todo extends AbstractSerializer {

    id: number = 0;
    text: string = 'First';
    desc: string = 'first todo description';
    ids: number[] = [];
    @MapTo({ type: Address }) address: Address = new Address();
    @MapTo({ type: [Address] }) list: Address[] = [];

    constructor() {
        super();
    }

    get displayString() { return 'some string'; }

    display() {
        console.log('function');
    }
}

const todo = new Todo().setValues({
    text: 'again',
    address: {
        house: 'new house',
        street: 'new street',
    },
    list: [
        {
            house: 'new house',
            street: 'new street',
        },
        {
            house: 'new house',
            street: 'new street',
        },
    ],
    ids: [1, 2, 3, 4, 4],
}) as Todo;

console.log(todo);