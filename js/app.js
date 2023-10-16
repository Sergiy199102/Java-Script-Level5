// 1. Удалить из списка не машины

const li = document.querySelectorAll('li');
li[2].remove();
li[4].remove();

// 2. с помощью джаваскрипт добавить ко всем li элементам класс listItem  и к ul элементу класс list из style.css

const listItems = document.querySelectorAll('ul li');
const ulElement = document.querySelector('ul');
ulElement.classList.add('list');
listItems.forEach(item => {
    item.classList.add('listItem');
});

// 3. добавить в начало списка новый элемент li с текстом Bugatti

const newListItem = document.createElement('li');
newListItem.textContent = 'Bugatti';
const firstListItem = document.querySelector('ul li:first-child');
firstListItem.parentNode.insertBefore(newListItem, firstListItem);

// 4. добавить в конец списка новый элемент li с текстом Ford

const list = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = 'Ford';
list.appendChild(newItem);

// 5. Добавить в форму с помощью джаваскрипт инпут для имени, фамилии, пароля и подтверждения пароля

const form = document.querySelector('form');

const firstNameInput = document.createElement('input');
const lastNameInput = document.createElement('input');
const passwordInput = document.createElement('input');
const confirmPasswordInput = document.createElement('input');

firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('name', 'firstName');
firstNameInput.setAttribute('placeholder', 'Ім'я');

lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('name', 'lastName');
lastNameInput.setAttribute('placeholder', 'Прізвище');

passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('name', 'password');
passwordInput.setAttribute('placeholder', 'Пароль');

confirmPasswordInput.setAttribute('type', 'password');
confirmPasswordInput.setAttribute('name', 'confirmPassword');
confirmPasswordInput.setAttribute('placeholder', 'Підтвердження паролю');

form.appendChild(firstNameInput);
form.appendChild(lastNameInput);
form.appendChild(passwordInput);
form.appendChild(confirmPasswordInput);

// 6. Добавить на страницу любую картинку м помощью джаваскрипт

var img = document.createElement('img');
img.src = 'https://www.bing.com/images/search?view=detailV2&ccid=pTSDe83x&id=37F7AC226BE6368EC6B72B850E527D7ECDA8E38B&thid=OIP.pTSDe83xJUsbqpA90HkN-wHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a534837bcdf1254b1baa903dd0790dfb%3frik%3di%252bOozX59Ug6FKw%26riu%3dhttp%253a%252f%252fs3.caradvice.com.au%252fwp-content%252fuploads%252f2015%252f11%252fSanta-Fe-Series-II-0101.jpg%26ehk%3dweocmlLWk%252frM4blJ2PRl7DmeJa8OOm%252fDaGGopoNSheM%253d%26risl%3d1%26pid%3dImgRaw%26r%3d0&exph=3610&expw=5415&q=hyundai+santa+fe&simid=608008992768793035&FORM=IRPRST&ck=5D4F8584F35420619B0942B9A199AE12&selectedIndex=0&ajaxhist=0&ajaxserp=0';
document.querySelector('form').appendChild(img);

// Удалить из параграфа класс red и italic -->
<p class="red bold italic">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
</p>

const p = document.querySelector('p');
p.classList.remove('red', 'italic');

// 8. С помощью джаваскрипт добавить в див h1 тэг с текстом - this is h1 tag

const divElement = document.querySelector('div');
const h1Element = document.createElement('h1');
h1Element.textContent = 'This is h1 tag';
divElement.appendChild(h1Element);

// 9. установить h1 тэгу цвет текста - синий и размер шрифта 40 пикселей

const h1 = document.querySelector('h1');
h1.style.fontSize = '40px';
h1.style.color = 'blue';
