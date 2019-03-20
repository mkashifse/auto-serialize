# @Serializable
A decent way to serialize your Typescript models.

## Installation
`npm install @serializable`

## How to use
Its is very simple to use. Just add `@Serializable` decorotor to your model class and extend it from `AbstractSerializer` class.

```
@Serializable
export class Address extends AbstractSerializer {
    ...
    ...
}
```

Now you can use `setValues(json)` & `getValues()` to serialize and deserialzie you objects like.
```
const address = new Address().setValues(json);
address.getValues();
```


### Attribute of class attr:Class?
Yes you can also convert attribute of a class object. Just you need to add `MapTo` attribute decorator and define type like

```
...
 
  @MapTo({ type: Address }) address:Address = new Address();

```

### Attribute of type Array of class object attr:Class[]?
For array you just put the class type in array like `@MapTo({ type: [Address] })`

```
...
 
  @MapTo({ type: [Address] }) addressList:Address = [];

```


## Whole Code

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

const json = {
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
}

const todo = new Todo().setValues() as Todo;
console.log(todo.getValues());
```