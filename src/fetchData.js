import fetchData from './http';

export default function getLevel(userId) {
  try {
    const response = JSON.parse(fetchData(`https://server/user/${userId}`));

    if (response.status === 'ok') {
      return `Ваш текущий уровень: ${response.level}`;
    }
    return 'Информация об уровне временно недоступна';
  } catch (error) {
    return `Ошибка при получении данных: ${error.message}`;
  }
}
