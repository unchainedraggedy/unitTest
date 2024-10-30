import health from '../health';

test('health is between 50 and 15', () => {
  expect(health({ name: 'Selen', health: 30 })).toBe('wounded');
  expect(health({ name: 'Brie', health: 43 })).toBe('wounded');
});

test('health is less than 15', () => {
  expect(health({ name: 'Erine', health: 10 })).toBe('critical');
});

test('healthy line', () => {
  expect(health({ name: 'Elly', health: 14 })).toBe('critical');
  expect(health({ name: 'Barney', health: 49 })).toBe('wounded');
  expect(health({ name: 'Robin', health: 51 })).toBe('healthy');
});
