import getLevel from '../fetchData';
import fetchData from '../http';

jest.mock('../http');

const characters = [
  {
    name: 'мечник', health: 10, id: 1, level: 3,
  },
  {
    name: 'маг', health: 100, id: 2, level: 100,
  },
  {
    name: 'лучник', health: 80, id: 3, level: 21,
  },
];

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return current level for user with id 1', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'ok', level: characters[0].level }));

  const result = getLevel(characters[0].id);
  expect(fetchData).toBeCalledWith(`https://server/user/${characters[0].id}`);
  expect(result).toBe(`Ваш текущий уровень: ${characters[0].level}`);
});

test('should return current level for user with id 2', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'ok', level: characters[1].level }));

  const result = getLevel(characters[1].id);
  expect(fetchData).toBeCalledWith(`https://server/user/${characters[1].id}`);
  expect(result).toBe(`Ваш текущий уровень: ${characters[1].level}`);
});

test('should return error message if fetchData throws an error', () => {
  fetchData.mockImplementation(() => {
    throw new Error('Network error');
  });

  const result = getLevel(characters[0].id);
  expect(result).toBe('Ошибка при получении данных: Network error');
});
