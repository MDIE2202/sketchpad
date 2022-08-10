grid = () => {
    let column = document.createElement('div');
    column.classList.add('column');

    for (let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row'); 
            for (let i = 0; i < 16; i++){
                const box = document.createElement('div');
                box.classList.add('box');
                row.appendChild(box);
            }
        column.appendChild(row);
    }

    main_container = document.querySelector('.main_container')
    main_container.appendChild(column);


}


grid()
