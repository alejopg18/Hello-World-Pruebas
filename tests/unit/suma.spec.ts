import { test } from '@japa/runner'
import { suma, resta, multiply, division } from '../../app/utils/math.js'

test('operaciones basicas', ({ assert }) => {
  assert.equal(suma(2, 3), 5)
  assert.equal(resta(5, 3), 2)
  assert.equal(multiply(2, 3), 6)
  assert.equal(division(6, 3), 2)
})


