let table = document.querySelector('table')
let massObj = [
    { name: 'Вася', age: 22, pfession: 'fullsteck', workExperience: '2 года', married: 'Да' },
    { name: 'Гриша', age: 11, pfession: 'bacend', workExperience: '4 года', married: 'Да' },
    { name: 'Коля', age: 11, pfession: 'fullsteck', workExperience: '7 года', married: 'Нет' },
    { name: 'Дима', age: 26, pfession: 'fullsteck', workExperience: '5 года', married: 'Нет' },
    { name: 'Андрей', age: 11, pfession: 'fullsteck', workExperience: '1 года', married: 'Да' },
    { name: 'Коля', age: 45, pfession: 'fullsteck', workExperience: '2 года', married: 'Нет' },
    { name: 'Гриша', age: 30, pfession: 'bacend', workExperience: '6 года', married: 'Да' },
    { name: 'Гриша', age: 29, pfession: 'bacend', workExperience: '2 года', married: 'Да' },
]

function creatuTd(obj) {
    let str = ' ';
    for (let n in obj) {
        str += `<td>${ obj[n]}</td>`
    }
    return str;
}

function creatuTr(Mass) {
    let str = '';
    Mass.map((elem) => {
        str += `<tr>${creatuTd(elem)}</tr>`
    })

    return str;
}


table.insertAdjacentHTML('beforeend',
    `${creatuTr(massObj)}`

)
let element = null;
table.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.dataset.tab) {
        if (element == event.target.dataset.tab - 1) {
            return
        }
        element = event.target.dataset.tab - 1
        let sortedRows = Array.from(table.rows)
            .slice(1)
            .sort((rowA, rowB) => rowA.cells[element].innerHTML > rowB.cells[element].innerHTML ? 1 : -1);
        table.tBodies[0].append(...sortedRows);
    }

})