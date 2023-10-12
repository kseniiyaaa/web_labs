// task 1
function calculateRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Будь ласка, введіть коректні числа для довжини та ширини.");
        return;
    }

    const perimeter = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    document.getElementById("perimeter").textContent = perimeter;
    document.getElementById("area").textContent = area;
    document.getElementById("diagonal").textContent = diagonal;
}

// task2
function sendMessage(user) {
    let messageInput = document.getElementById(user + '-message-input');
    let chatBox = document.getElementById('chat-box');

    let messageText = messageInput.value.trim();

    if (messageText === '') {
        return;
    }

    let newMessage = document.createElement('div');
    newMessage.innerHTML = '<b>User</b> ' + (user === 'user1' ? '<b>1</b>' : '<b>2</b>') + ':</br>' + messageText; // Вставляємо <br> для початку нового рядка

    if (user === 'user1') {
        newMessage.className = 'user1-message';
    } else if (user === 'user2') {
        newMessage.className = 'user2-message';
    }

    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    messageInput.value = '';
}



// task3
function transliterateUkrainian() {
    const ukrainianText = document.getElementById("ukrainianText").value;
    document.getElementById("latinText").value = transliterate(ukrainianText);
}

function transliterate(text) {
    const ukrainian = [
        'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я',
        'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я'
    ];

    const latin = [
        'a', 'b', 'v', 'h', 'g', 'd', 'e', 'ie', 'zh', 'z', 'y', 'i', 'i', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', '', 'iu', 'ia', 
        'A', 'B', 'V', 'H', 'G', 'D', 'E', 'Ye', 'Zh', 'Z', 'Y', 'I', 'Yi', 'Y', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'Kh', 'Ts', 'Ch', 'Sh', 'Shch', '', 'Yu', 'Ya'
    ];

    for (let i = 0; i < ukrainian.length; i++) {
        const regExp = new RegExp(ukrainian[i], 'g');
        text = text.replace(regExp, latin[i]);
    }

    return text;
}

// task4
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const birthDateInput = document.getElementById("birthDate");
        const birthDate = new Date(birthDateInput.value);

        if (isNaN(birthDate)) {
            result.textContent = "Неправильний формат дати";
        } else {
            const day = birthDate.getDate();
            const month = birthDate.getMonth() + 1;
            const year = birthDate.getFullYear();

            const a = Math.floor((14 - month) / 12);
            const y = year - a;
            const m = month + 12 * a - 2;
            const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor(31 * m / 12)) % 7;

            // Визначаємо назву дня тижня на основі результату
            const daysOfWeek = ["Неділю", "Понеділок", "Вівторок", "Середу", "Четвер", "П'ятницю", "Суботу"];
            result.textContent = `Ви народилися у ${daysOfWeek[dayOfWeek]}`;
        }
    });
});
