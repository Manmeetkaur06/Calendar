const monthYear = document.getElementById('month-year');
const calendarDates = document.getElementById('calendar-dates');
const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');
let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const dateString = firstDay.toLocaleDateString('default', {
        month: 'long',
        year: 'numeric'
    });
    monthYear.textContent = dateString;

    const emptyCells = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    calendarDates.innerHTML = '';

    // Fill empty cells at the start of the calendar grid
    for (let i = 0; i < emptyCells; i++) {
        calendarDates.innerHTML += '<div></div>';
    }

    // Fill each day of the month into the calendar
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        
        // Highlight today's date if the current month and year match today's month and year
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayDiv.classList.add('today');
        }
        
        calendarDates.appendChild(dayDiv);
    }
}

prevMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render of the calendar
renderCalendar();

