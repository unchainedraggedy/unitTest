import sortCharacters from '../sort.js'

const charactes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]

test('sorting charactes', () => {
    const result = sortCharacters(charactes)
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ])
})