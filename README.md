# Questions and topics before the interview

Use the the official documentation or any tutorials you can find - whatever is more convenient for you!

## Basics
- TypeScript!!! Learn it and use it everywhere!
- Debugging (in plain JS, TS or Node - anywhere) - learn to debug your code, don't rely on console.logs too much
- Git (add, commit, log, status, branch, push, pull, fetch, reset, restore, revert, stash, cherry-pick).
  - Git strategies: git flow! https://www.flagship.io/git-branching-strategies/
	- how to make proper commits (how often, what to add to the commit, what is a good description of the commit)
- What is Scrum? How do you work by Scrum?

---

## JS and general programming concepts ( start here https://javascript.info/ and continue anywhere)

- Objects:
	- property descriptors and accessors
	- iterators and generators
- this
- Arrow functions vs. regular functions
- function declaration vs. function expression
- Error handling - try..catch..finally
- Iterators and generators
- Map and Set, WeakMap and WeakSet
- Classes:
	- basics
	- prototype inheritance
	- extending classes
	- abstract classes
- Promises and async, promisification
- Client-server interaction:
	- polling (request-response)
	- long polling
	- server-sent events
	- websockets (socket.io or others)
- RegExp
- Event loop
	
## Common theoretical principles

- OOP principles (abstraction, inheritance, polymorphism, encapsulation)
- Inheritance vs. Composition
- DRY
- KISS
- SOLID
- YAGNI

## Patterns

- Architecture patterns:
	- MVC / MVP https://www.baeldung.com/mvc-vs-mvp-pattern
	- Multi-layer architecture (controllers, services, repositories)
- Design patterns: the more - the better
	- start here https://youtu.be/YJVj4XNASDk
	- and continue here https://refactoring.guru/uk/design-patterns 

---

## Back-end

- Postman (find the official tutorial)
- PostgreSQL + TypeORM
- Mongo + Mongoose / TypeORM
- Node basics:
	- core modules (fs, path, URL, crypto)
	- validation (JOI / `class-validator` for Nest)
- Node frameworks:
	- Express / Fastify (similar to Express, https://www.fastify.io/)
	- Nest.js (complex framework for a beginner) https://docs.nestjs.com/
- Swagger (OpenAPI) - documenting your API (there are modules for quick swagger generation for Express, Fastify and Nest)
- Docker, docker compose