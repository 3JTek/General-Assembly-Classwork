# Python Objects Lab

##### This is your chance to practice what you've learnt about Python classes.

> ***Note:*** _This can be a pair programming activity or done independently._


## Task One - Cars

Create a `Car` class, which has properties for the following:

  - `brand (String)`
  - `number of seats (Number)`
  - `speed in mph (Number)`

And the following methods:

  - `speedUp`: which increments the car's current speed.
  - `slowDown`: which decrements the car's current speed.

Create some cars, and test drive them by invoking their methods.

## Task Two - Ice Cream

Create an `IceCream` class with the following properties:

- `number of scoops (Number)`
- `flake (Boolean)`

They should also have a method `calculatePrice` which returns the price of the ice cream assuming that:

 - 1 scoop of ice cream costs £1.10
 - A flake costs £0.30

## Task Three - Countries

Create a `Country` class with the following properties:

- `name (String)`
- `population (Number)`
- `size in square kilometres (Number)`

It should have a method `calculateDensity` that calculates the countries population density returns a string:

`(name) has a population density of (density) people per sq km. This is (low/average/high).`

The string should use `low` if the density is under 100 per sq km, `average` if it is between 100-500 and `high` if it is over 500.

## Task Four - Pets

Create a `Person` class with the following properties:

- `name (String)`
- `pet (Object)`

The value of the pet property should be a dict with the following properties:

- `name (String)`
- `age (Number)`
- `type (String)`

The `Person` should have an `introduce` method which will return a statement like this:

`Hi, my name is (name) and this is my (pet age)-year old (pet type), (pet name).`;

*Bonus Challenge*

Create a person object with multiple pet objects within it. Write an `introduce` method that will introduce the person and _all_ of their pets.

## Task Five - The Bag

Create a `Bag` class with the following property:

- `contents (list)`

The bag should have the following methods:

- `addItem(string)` - pushes a new item into the bag's contents array.
- `removeItem(string)` - removes a given item from the bag's contents array.
- `getItems` - returns all the contents of the bag.
- `removeItems` - removes all items from the bag.
