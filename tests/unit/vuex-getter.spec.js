import getters from "../../src/store/getters.js"

const dogs = [
  { name: "lucky", breed: "poodle", age: 1 },
  { name: "pochy", breed: "dalmatian", age: 2 },
  { name: "blackie", breed: "poodle", age: 4 }
]

const state = { dogs }

describe('poodles', () => {
  it('returns poodles', () => {
    // Since we are testing the getters in isolation, we have to manually pass the state. Other than that, we are just testing a regular JavaScript function.
    const actual = getters.poodles(state)

    expect(actual).toEqual([dogs[0], dogs[2]])
  })
})

describe('poodlesByAge', () => {
  it('returns poodles by age', () => {
    const poodles = [dogs[0], dogs[2]]

    // The second argument to a getter is other getters. We are testing poodlesByAge, so we don't want to involve the implementation of poodles. Instead, we can stub getters.poodles. This will give us more fine grained control over the test.
    // nstead of actually passing the real poodles getter, we pass in the result it would return. We already know it is working, since we wrote a test for it. This allows us to focus on testing the logic unique to poodlesByAge.
    const actual = getters.poodlesByAge(state, { poodles })(1)

    expect(actual).toEqual([dogs[0]])
  })
})