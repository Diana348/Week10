function showMessage () {
    console.log("Я учу Java Script!");
}

showMessage();

let img1 = document.getElementById("img1")

function get1Picture () {
    img1.src='https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc='
    alt="cat shocked cat"
}

function get2Picture () {
    img1.src='https://media.istockphoto.com/id/1307194804/photo/cute-british-shorthair-cat-on-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=mFll3GtMkWIa5jn-hyQwq71NOIdk10mIa1SJpCxxbvY='
    alt='beautiful cat'
}


// ---- Задача под звездочкой ---- //
let value = prompt('Шаг 1: Год делится на 4 равномерно?', '');

if (value == 'нет') {
    alert('Год не високосный (у него 365 дней)');
} else {
    alert('Перейдите к шагу 2');
}

let value1 = prompt('Шаг 2: Год делится на 100 равномерно?', ''); 

if (value1 == 'нет') {
    alert('Год является високосным (366 дней).');
} else {
    alert('Перейдите к шагу 3');
}

let value2 = prompt('Шаг 3: Год делится на 400 равномерно?', '');

if (value2 == 'нет') {
    alert('Год не високосный (у него 365 дней)');
} else {
    alert(' Год является високосным (366 дней)');
}