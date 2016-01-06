# Adapters
Adapters for your application ports go here. This pattern adheres to [Hexagonal architecture](http://alistair.cockburn.us/Hexagonal+architecture)

Ports that may need adapters saved here may include:
* UI (eg DOM)
* Persistence (eg memory, AJAX)

Note: this exercise does not need any adapters for _real_ ports. Fake or in-memory ones will do - all we care about is the behaviour of the logic. They will in effect define an object "interface" that can be reused if/when real ones need to be created.
