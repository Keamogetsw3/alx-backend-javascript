# 0x01. ES6 Promises

## JavaScript | ES6

### Project Overview

This project covers the use of Promises in JavaScript, a fundamental feature of ES6 for managing asynchronous operations. You will explore how to use Promises, including `then`, `catch`, `resolve`, and the methods of the `Promise` object. Additionally, you'll delve into the `async` and `await` keywords, and understand error handling using `try/catch`.

### Project Timeline

- **Start date**: Oct 1, 2024 6:00 AM
- **End date**: Oct 3, 2024 6:00 AM
- **Checker release**: Oct 1, 2024 6:00 PM
- **Auto review**: Oct 3, 2024 6:00 AM

---

## Resources

Read or watch:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

---

## Learning Objectives

By the end of this project, you should be able to:

1. **Explain Promises: what they are, why they are useful, and how to use them.**

   A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write cleaner and more manageable asynchronous code compared to traditional callback methods. Promises can be in one of three states: pending, fulfilled, or rejected.

2. **Use `then`, `resolve`, and `catch` methods effectively.**

   The `then` method is used to handle the resolved value of a Promise. The `resolve` function is used to fulfill a Promise, and the `catch` method is used to handle any errors that may occur during the Promise execution.

3. **Utilize all methods of the `Promise` object.**

   Besides `then` and `catch`, the Promise object provides methods like `Promise.all`, `Promise.race`, and `Promise.allSettled`, which are useful for managing multiple Promises.

4. **Handle errors using `throw` and `try/catch`.**

   You can use `throw` to raise an error and `try/catch` to handle it gracefully. When used within asynchronous functions, you can also catch Promise rejections.

5. **Understand and apply the `await` operator.**

   The `await` operator is used to pause the execution of an `async` function until a Promise is resolved or rejected, making it easier to work with asynchronous code.

6. **Write and use `async` functions.**

   An `async` function is a function that always returns a Promise. If a value is returned, it is wrapped in a resolved Promise; if an error is thrown, it returns a rejected Promise.

---

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All your files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- All of your functions must be exported.

---

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Install the required dependencies:

```bash
npm install
