const contentElement = document.querySelector('.content');

const footerElement = document.querySelector('.footer');

const today = new Date();

const siteName = "Cercetașii României, filiala Alba-Iulia";

footerElement.textContent = `Copyright ${today.getFullYear()} | ${siteName}`;

const title = document.querySelector('.page-title').textContent = siteName;

function changePage (pageName) {
    fetch(`pages/${pageName}.html`).then(res => res.text()).then(res => {
        contentElement.innerHTML = res;
    });
}

const imageList = [
    'https://images.pexels.com/photos/1272392/pexels-photo-1272392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/53754/pexels-photo-53754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/666988/pexels-photo-666988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const imageContent = document.querySelector('.gallery > .image-content');

const image = document.createElement('IMG');
let currentIndex = 0;
setImageSource();


imageContent.appendChild(image);

function nextImage() {
    if (currentIndex == imageList.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setImageSource();
}

function previousImage() {
    if (currentIndex == 0) {
        currentIndex = imageList.length;
    } else {
        currentIndex--;
    }
    setImageSource();
}

function setImageSource() {
    image.src = imageList[currentIndex];
    console.log(currentIndex);
}

document.onreadystatechange = () => {
    console.log('ready');
}