import fetchData from './http';

export function getLevel(userId) {
    try {
        const response = JSON.parse(fetchData(`https://server/user/${userId}`));

        // Логика обработки
        if (response.status === 'ok') {
                return `Ваш текущий уровень: ${response.level}`;
        }
            } catch (error) {
        return `Ошибка при получении данных: ${error.message}`;
    }
}
