import { expect } from "vitest"

expect.extend({
  toBeFoo(received, expected) {
    console.log(received, expected);

    const { isNot } = this
    return {
      pass: received === 'foo',
      message: () => `${received} is${isNot ? ' not' : ''} foo`
    }
  }
})