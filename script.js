grid = (size) => {
    let column = document.createElement('div');
    column.classList.add('column');

    for (let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row'); 
            for (let i = 0; i < size; i++){
                const box = document.createElement('div');
                box.classList.add('box');
                row.appendChild(box);
            }
        column.appendChild(row);
    }

    main_container = document.querySelector('.main_container')
    main_container.appendChild(column);

}

grid(100)

rand_color = (int) =>{
    let rand = Math.floor(Math.random()*255);
    let rand2 = Math.floor(Math.random()*255);
    let rand3 = Math.floor(Math.random()*255);
    color = `rgb(${rand},${rand2},${rand3})`
    return color
}

user_input = () => {

    user = prompt('Enter a grid size between 10 and 100:')
    if(user > 100){
        user = 100;
    }
    else if(user < 10){
        user = 10;
    }
    else{}

    const clean = document.querySelector('.main_container');
    clean.innerHTML = '';
    grid(user);
    hover_actions = document.querySelectorAll('.box');
    hover_actions.forEach(box => box.addEventListener('mouseover', function(){this.style.backgroundColor = rand_color(this.style.backgroundColor)}));   
}

hover_actions = document.querySelectorAll('.box');
hover_actions.forEach(box => box.addEventListener('mouseover', function(){this.style.backgroundColor = rand_color(this.style.backgroundColor)}));

set_grid = document.querySelector('.set');
set_grid.addEventListener('click', function(){user_input()});

