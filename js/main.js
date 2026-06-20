const navbarEl = document.getElementById('navbar-container');
const headerEl = document.getElementById('header-container');

// layout class variables
const containerEl = document.getElementById('container-bs-class');
const gridEl = document.getElementById('grid-bs-class');
const gutterEl = document.getElementById('gutter-bs-class');
const offsetEl = document.getElementById('offset-bs-class');
const marginEl = document.getElementById('margin-bs-class');
const colorsEl = document.getElementById('colors-bs-class');

// content class variables
const typographyEl = document.getElementById('typography-bs-class');
const textAlignEl = document.getElementById('text-alignment-bs-class');
const imagesEl = document.getElementById('images-bs-class');
const bordersEl = document.getElementById('border-bs-class');
const tablesEl = document.getElementById('table-bs-class');
const figureEl = document.getElementById('figure-bs-class');

// form class variables
const formControlEl = document.getElementById('form-control-bs-class');
const formSelectEl = document.getElementById('form-select-bs-class');
const formCheckEl = document.getElementById('form-check-bs-class');
const formRangeEl = document.getElementById('form-range-bs-class');
const inputGroupEl = document.getElementById('input-group-bs-class');

const mainEls = [
    {
        nameEl: navbarEl,
        pathEl: 'navbar'
    },
    {
        nameEl: headerEl,
        pathEl: 'header'
    },
];

const layoutEls = [
    {
        nameEl: containerEl,
        pathEl: 'container'
    },
    {
        nameEl: gridEl,
        pathEl: 'grid'
    },
    {
        nameEl: gutterEl,
        pathEl: 'gutter'
    },
    {
        nameEl: offsetEl,
        pathEl: 'offset'
    },
    {
        nameEl: marginEl,
        pathEl: 'margin-padding'
    },
    {
        nameEl: colorsEl,
        pathEl: 'colors'
    },
];

const contentEls = [
    {
        nameEl: typographyEl,
        pathEl: 'typography'
    },
    {
        nameEl: textAlignEl,
        pathEl: 'text-align'
    },
    {
        nameEl: imagesEl,
        pathEl: 'images'
    },
    {
        nameEl: bordersEl,
        pathEl: 'borders'
    },
    {
        nameEl: tablesEl,
        pathEl: 'tables'
    },
    {
        nameEl: figureEl,
        pathEl: 'figure'
    },
];

const formEls = [
    {
        nameEl: formControlEl,
        pathEl: 'form-control'
    },
    {
        nameEl: formSelectEl,
        pathEl: 'form-select'
    },
    {
        nameEl: formCheckEl,
        pathEl: 'form-check'
    },
    {
        nameEl: formRangeEl,
        pathEl: 'form-range'
    },
    {
        nameEl: inputGroupEl,
        pathEl: 'input-group'
    },
];

const getElementsInDocument = (elements) => {
    elements.forEach(element => {
        const { nameEl, pathEl } = element;

        fetch(`/bootstrap/components/main/${pathEl}.html`)
            .then(res => res.text())
            .then(data => nameEl.innerHTML = data);
    });
};

const getLayoutEls = (layoutArr) => {
    layoutArr.forEach(element => {
        const { nameEl, pathEl } = element;

        fetch(`/bootstrap/components/layout/${pathEl}.html`)
            .then(res => res.text())
            .then(data => nameEl.innerHTML = data);
    });
};

const getContentEls = (contentArr) => {
    contentArr.forEach(element => {
        const { nameEl, pathEl } = element;

        fetch(`/bootstrap/components/content/${pathEl}.html`)
            .then(res => res.text())
            .then(data => nameEl.innerHTML = data);
    });
};

const getFormEls = (formArr) => {
    formArr.forEach(element => {
        const { nameEl, pathEl } = element;

        fetch(`/bootstrap/components/form/${pathEl}.html`)
            .then(res => res.text())
            .then(data => nameEl.innerHTML = data);
    });
};

getElementsInDocument(mainEls);
getLayoutEls(layoutEls);
getContentEls(contentEls);
getFormEls(formEls);
