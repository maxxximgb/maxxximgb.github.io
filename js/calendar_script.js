const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
const calendarContainer = document.querySelector('.calendar');
const year = 2024;

for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= daysInMonth(month, year); day++) {
        const date = new Date(year, month - 1, day);
        const dayElement = document.createElement('a');
        dayElement.href = 'https://goo.gl';
        dayElement.className = 'day';
        dayElement.innerText = day;
        calendarContainer.appendChild(dayElement);
    }
}
