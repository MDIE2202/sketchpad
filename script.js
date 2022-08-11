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



hover_actions = document.querySelectorAll('.box');
hover_actions.forEach(box => box.addEventListener('mouseover', function(){this.classList.add('color_change')}))
