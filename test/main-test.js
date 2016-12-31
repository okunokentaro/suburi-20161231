import test from 'ava'
import {add} from '../src/main'

test('add()', (t) => {
  t.is(add(1, 2), 3)
})

test('fail test', (t) => {
  t.is(add(1, 2), 4)
})
