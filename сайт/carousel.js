let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 130;
let count = 3;
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function () {
    position += width;
    position = Math.min(position, 0);
    if (position === 0) {
        position = -width * (listElems.length - count);
    }
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    position -= width;
    position = Math.max(position, -width * (listElems.length - count));
    if (position === -width * (listElems.length - count)) {
        position = 0;
    }
    list.style.marginLeft = position + 'px';
};

// function carouselFunction() {
//     let i = 1;
//     for (let li of carousel.querySelectorAll('li')) {
//         li.style.position = 'relative';
//         li.insertAdjacentHTML('beforeend', <span style="position:absolute;left:0;top:0">${i}</span>);
//         i++;
//     }
//     let width = 100; // ширина картинки
//     let count = 6; // видимое количество изображений
//     let list = carousel.querySelector('ul');
//     let listElems = carousel.querySelectorAll('li');

//     let position = 0;
//     carousel.querySelector('.prev').onclick = function () {
//         position += width;
//         position = Math.min(position, 0);
//         if (position === 0) {
//             position = -width * (listElems.length - count);
//         }
//         list.style.marginLeft = position + 'px';
//     };
//     carousel.querySelector('.next').onclick = function () {
//         position -= width;
//         position = Math.max(position, -width * (listElems.length - count));
//         if (position === -width * (listElems.length - count)) {
//             position = 0;
//         }
//         list.style.marginLeft = position + 'px';
//     };
// }

// carouselFunction();