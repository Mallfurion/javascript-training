const siteName = "Cercetașii României";

/**
 * Dynamic Content
 */
const contentElement = document.querySelector('.content');

function changePage (pageName) {
    fetch(`pages/${pageName}.html`).then(res => res.text()).then(res => {
        contentElement.innerHTML = res;
    });
}

/**
 * Footer content
 */

const today = new Date();

const footerElement = document.querySelector('.footer');
footerElement.textContent = `Copyright ${today.getFullYear()} | ${siteName}`;
