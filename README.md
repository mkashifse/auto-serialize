# auto-serialize
A decent way to serialize your models

## Installation
`npm install auto-serialize`

## How to use
Its is very simple to user just add `@Serializable` decorotor to your model class and extend it from `AbstractSerializer` class.

Now your can use just to call `setValues()` & `getValues`



```
import { Serializable, AbstractSerializer, MapTo } from "./@serializable";


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
```


### Array of Class Objects?
Yes it also convert an array of a class objects jus you need to add `MapTo` attribute decorator and define type for simple class object user `@MapTo({ type: Address })` for array just put the class type in array like `@MapTo({ type: [Address] })`

```
@Serializable
export class Todo extends AbstractSerializer {

    id: number = null;
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

console.log(todo.getValues());
```