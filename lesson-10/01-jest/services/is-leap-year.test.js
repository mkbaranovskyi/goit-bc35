/**
 * 1. Отримати рік як ціле число
 * 2. Повернути true, якщо рік високосний, інакше - false
 * 3. Викинути помилку, якщо переданы неправильны даны на вхыд
 * 
 * 2000 - true
 * 2100 - false
 * 2004 - true
 * 2001 - false
 * 
 * undefined - must exist
 * 2004.5 - must be integer
 * [] - must be a number
 * {} - must be a number
 * 
 */

const { isLeapYear } = require('./is-leap-year')

describe('Test isLeapYear function', () => {
  // beforeEach(() => console.log('Before each'));


  test('2000 returns true', () => {
    const result = isLeapYear(2000)
    expect(result).toBe(true)
  })

  test('2100 returns false', () => {
    expect(isLeapYear(2100)).toBe(false)
  })

  test('2004 returns true', () => {
    expect(isLeapYear(2004)).toBe(true)
  })

  test('2001 returns false', () => {
    expect(isLeapYear(2001)).toBe(false)
  })

  test('undefined throws an error', () => {
    expect(() => isLeapYear()).toThrow('Year must be defined')
  })

  test('null throws an error', () => {
    expect(() => isLeapYear(null)).toThrow('Year must be a number')
  })

  test('object throws an error', () => {
    expect(() => isLeapYear({})).toThrow('Year must be a number')
  })

  test('array throws an error', () => {
    expect(() => isLeapYear([])).toThrow('Year must be a number')
  })

  test('true throws an error', () => {
    expect(() => isLeapYear(true)).toThrow('Year must be a number')
  })

  test('false throws an error', () => {
    expect(() => isLeapYear(false)).toThrow('Year must be a number')
  })

  test('float throws an error', () => {
    expect(() => isLeapYear(2000.5)).toThrow('Year must be a number')
  })

  test('negative throws an error', () => {
    expect(() => isLeapYear(-2000)).toThrow('Year must be a number')
  })
})
