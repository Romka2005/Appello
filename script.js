document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        if(parent.classList.contains('accordion-item__active')){
            parent.classList.remove('accordion-item__active');
        }
        else{
            document
            .querySelectorAll('.accordion-item')
            .forEach((child) => child.classList.remove('accordion-item__active'))
            parent.classList.add('accordion-item__active');
        }
    })
)

// document.querySelector('.ellipse2').onclick = sliderRight;
// var right = 0;

// function sliderRight() {
//     console.log('ok');
//     var content = document.querySelector('.content');
//     right = right + 100;
//     if(right>500){
//         right = 0;
//     }
//     content.style.paddingLeft = right + 'px';
//     console.log(right);
// }