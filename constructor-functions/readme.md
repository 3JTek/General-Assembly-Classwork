![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Contructor Functions Lab

### Part One

Your task is to use a constructor function to create three instances of a `Monkey` object, which have the following properties:

* name (String)
* species (String)
* dateOfBirth (Date)
* foodsEaten (Array)

The monkeys should also have the following **prototype** methods:

* `eatSomething(thingAsString)`: adds a new item into the monkey's `foodsEaten` array.
* `introduce`: returns a string introducing itself, including its name, species, and what it's eaten.

Exercise your monkeys by console logging their properties and using their methods.

### Bonus

Add the following to your `Monkey`:

* `age`: a **prototype** method which calculates and returns the monkey's age in years from its date of birth.
* `classification`: a **prototype** property that holds the string `"primate"`. This will be the same for all monkeys.