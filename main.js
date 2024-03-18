function toggleVisibility() {
    let element = document.getElementById('hiddenDiv');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

let modalcontent = document.querySelector('.modal-content');
let themebuttom = document.querySelector('.theme-button');

themebuttom.onclick = function(){
  modalcontent.classList.toggle('dark-theme');
}; 

function chpok(heart){
    elem = document.getElementById(heart); //находим блок div по его id
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') elem.style.display='none'; //если включен, то выключаем
    else elem.style.display=''; //иначе - включаем
}

function toggleswitch() {
    let button = document.createElement('button');
    button.className = "llab5";
    button.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    document.body.append(button);
}
closee.onmouseover = function() {
    closee.style.background= "#f7dc63";
};
    
closee.onmouseleave = function() {
    closee.style.background= "grey";
};

save.onmouseover = function() {
    save.style.background= "#f7dc63";
};
    
save.onmouseleave = function() {
    save.style.background= "grey";
};

show.onmouseover = function() {
    show.style.background= "#f7dc63";
};
    
show.onmouseleave = function() {
    show.style.background= "grey";
};

function validation(form) {
    let result = true;
    return result
    }
document.getElementById('forma').addEventListener('submit', function(event) {
event.preventDefault()
if (validation(this) == true) {
alert('Проверка формы завершена успешно!')
}
})

let newElement = document.createElement('elemetlab5');

// appendChild – как радушное принятие в семью элементов:
container.appendChild(newElement);
elementToRemove.parentNode.remove(elementToRemove);