const contentElement = document.querySelector('.content');

function changePage (pageName) {
    fetch(`pages/${pageName}.html`).then(res => res.text()).then(res => {
        contentElement.innerHTML = res;
    });
}