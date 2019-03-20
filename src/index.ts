import { Serializable, AbstractSerializer, MapTo } from "./@serializable/index";


@Serializable
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

@Serializable
export class Todo extends AbstractSerializer {

    id: number = null;
    text: string = 'First';
    desc: string = 'first todo description';
    ids: number[] = [];
    @MapTo(Address) address: Address = new Address();
    @MapTo([Address]) list: Address[] = [];

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
    ids:[1,2,3,4,4],
}) as Todo;

console.log(todo.getValues());