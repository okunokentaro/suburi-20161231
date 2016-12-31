/* @flow */

export const add = (x: number, y: number) => {
  return x + y
}

add(1, '2') // type mismatch
add(1, 2);  // eslint invalid
