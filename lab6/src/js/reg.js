//маска телефону 
document.addEventListener("DOMContentLoaded", function () {
    var phoneInput = document.getElementById("phone-input");

    Inputmask("+38(099)-999-99-99").mask(phoneInput);
});

// повідомлення про помилку email
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("exampleInputEmail1");
    const emailError = document.getElementById("email-error");

    emailInput.addEventListener("blur", function () {
        const email = emailInput.value;
        if (!isValidEmail(email)) {
            emailError.textContent = "Невірний формат email";
        } else {
            emailError.textContent = ""; // приховуємо повідомлення про помилку
        }
    });

    function isValidEmail(email) {
        // регулярний вираз для перевірки
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,4}$/.test(email);
    }
});

// повідомлення про помилку пароль
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("exampleInputPassword1");
    const passwordError = document.getElementById("password-error");

    passwordInput.addEventListener("blur", function () {
        const password = passwordInput.value;
        if (!isValidPassword(password)) {
            passwordError.textContent = "Невірний формат паролю.";
        } else {
            passwordError.textContent = "";
        }
    });

    function isValidPassword(password) {
        if (password.length < 5) {
            return false;
        }

        // перевірка на наявність принаймні однієї маленької літери та однієї цифри
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        
        return hasLowercase && hasDigit;
    }
});

// повідомлення про помилку ПІБ
document.addEventListener("DOMContentLoaded", function () {
    const surnameInput = document.getElementById("surname");
    const nameInput = document.getElementById("name");
    const fatherNameInput = document.getElementById("father-name");
    const surnameError = document.getElementById("surname-error");
    const nameError = document.getElementById("name-error");
    const fatherNameError = document.getElementById("father-name-error");

    surnameInput.addEventListener("focusout", validateSurnameInput);
    nameInput.addEventListener("focusout", validateNameInput);
    fatherNameInput.addEventListener("focusout", validateFatherNameInput);

    function validateSurnameInput() {
        const surname = surnameInput.value;
        if (surnameError) {
            surnameError.textContent = "";
        }

        if (surname) {
            if (!isValidSurname(surname)) {
                surnameError.textContent = "Невірний формат прізвища.";
            }
        }
    }

    function validateNameInput() {
        const name = nameInput.value;
        if (nameError) {
            nameError.textContent = "";
        }

        if (name) {
            if (!isValidName(name)) {
                nameError.textContent = "Невірний формат імені.";
            }
        }
    }

    function validateFatherNameInput() {
        const fatherName = fatherNameInput.value;
        if (fatherNameError) {
            fatherNameError.textContent = "";
        }

        if (fatherName) {
            if (!isValidFatherName(fatherName)) {
                fatherNameError.textContent = "Невірний формат по-батькові.";
            }
        }
    }

    function isValidSurname(surname) {
        return /^[А-ЯІЇЄҐ][а-яіїєґ]{1,}$/.test(surname);
    }

    function isValidName(name) {
        return /^[А-ЯІЇЄҐ][а-яіїєґ]{1,}$/.test(name);
    }

    function isValidFatherName(fatherName) {
        return /^[А-ЯІЇЄҐ][а-яіїєґ]{1,}$/.test(fatherName);
    }
});

// повідомлення про помилку номер телефону
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone-input");
    const phoneError = document.getElementById("phone-error");

    phoneInput.addEventListener("focusout", validatePhoneInput);

    function validatePhoneInput() {
        const phone = phoneInput.value;
        if (phoneError) {
            phoneError.textContent = "";
        }

        if (phone) {
            if (!isValidPhone(phone)) {
                phoneError.textContent = "Невірний формат номеру телефону.";
            }
        }
    }

    function isValidPhone(phone) {
        return /^(\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2})$/.test(phone);
    }
});

// таблиця
document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("registerButton");
    const userTable = document.getElementById("userTable");
    let rowIndex = 1; // Початковий індекс для рядків у таблиці

    // Додавання нового рядка до таблиці
    function addRowToTable(data) {
        const newRow = userTable.querySelector("tbody").insertRow(-1);
        const cells = [rowIndex, ...data];
        
        for (let i = 0; i < cells.length; i++) {
            newRow.insertCell(i).innerHTML = cells[i];
        }
        
        // Додавання чекбоксу до нового рядка
        const checkboxCell = newRow.insertCell(-1);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("row-checkbox");
        checkboxCell.appendChild(checkbox);

        // + індекс рядка для наступного користувача
        rowIndex++;

        // очистка форми
        document.getElementById("registration-form").reset();
    }

    //  кнопка "Зареєструвати"
    registerButton.addEventListener("click", function () {
        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        const surname = document.getElementById("surname").value;
        const name = document.getElementById("name").value;
        const fatherName = document.getElementById("father-name").value;
        const phone = document.getElementById("phone-input").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const birthdate = document.getElementById("formGroupExampleInput").value;
        const group = document.getElementById("autoSizingSelect").value;

        addRowToTable([email, password, surname, name, fatherName, phone, gender, birthdate, group]);
    });

    // кнопка "Дублювати"
    const duplicateSelectedRowsButton = document.getElementById("duplicate-selected-rows");
    duplicateSelectedRowsButton.addEventListener("click", function () {
        const checkboxes = userTable.querySelectorAll(".row-checkbox:checked");
        checkboxes.forEach(function (checkbox) {
            const row = checkbox.parentElement.parentElement;
            const cells = [];
            for (let i = 1; i < row.cells.length - 1; i++) {
                cells.push(row.cells[i].textContent);
            }
            addRowToTable(cells);
        });
    });

    // кнопка "Видалити"
    const deleteSelectedRowsButton = document.getElementById("delete-selected-rows");
    deleteSelectedRowsButton.addEventListener("click", function () {
        const checkboxes = userTable.querySelectorAll(".row-checkbox:checked");
        checkboxes.forEach(function (checkbox) {
            const row = checkbox.parentElement.parentElement;
            row.remove(); 
        });
    });
});
