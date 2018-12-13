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

/**
 * Gallery
 */

const imageList = [
    'https://images.pexels.com/photos/1121782/pexels-photo-1121782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/53754/pexels-photo-53754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/666988/pexels-photo-666988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]
const imageContent = document.querySelector('.gallery > .image-content');

// add the first image and set index to 0
const image = document.createElement('IMG');
let currentIndex = 0;
setImageSource();
imageContent.appendChild(image);

// NEXT image
function nextImage() {
    if (currentIndex == imageList.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setImageSource();
}

// PREVIOUS image
function previousImage() {
    if (currentIndex == 0) {
        currentIndex = imageList.length;
    } else {
        currentIndex--;
    }
    setImageSource();
}

// SET IMAGE source
function setImageSource() {
    image.src = imageList[currentIndex];
    console.log(currentIndex);
}