// script.js

// Mock data for images
const imageData = [
    { src: 'https://images.pexels.com/photos/2126527/pexels-photo-2126527.jpeg', description: 'Cozy Cabin' },
    { src: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg', description: 'Urban Cityscape' },
    { src: 'https://images.pexels.com/photos/289652/pexels-photo-289652.jpeg', description: 'Mountain Range' },
    { src: 'https://images.pexels.com/photos/3451434/pexels-photo-3451434.jpeg', description: 'Tropical Beach' },
    { src: 'https://images.pexels.com/photos/2132297/pexels-photo-2132297.jpeg', description: 'Vibrant Flowers' },
    { src: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg', description: 'Modern Architecture' },
    { src: 'https://images.pexels.com/photos/2397658/pexels-photo-2397658.jpeg', description: 'Serene Lake' },
    { src: 'https://images.pexels.com/photos/3517481/pexels-photo-3517481.jpeg', description: 'Snowy Mountains' },
    { src: 'https://images.pexels.com/photos/276024/pexels-photo-276024.jpeg', description: 'Rolling Hills' },
    { src: 'https://images.pexels.com/photos/2820710/pexels-photo-2820710.jpeg', description: 'Starry Night' },
    { src: 'https://images.pexels.com/photos/631322/pexels-photo-631322.jpeg', description: 'Green Forest Path' },
    { src: 'https://images.pexels.com/photos/411431/pexels-photo-411431.jpeg', description: 'City Skyline' },
    { src: 'https://images.pexels.com/photos/256573/pexels-photo-256573.jpeg', description: 'Sunset Over Water' },
    { src: 'https://images.pexels.com/photos/411338/pexels-photo-411338.jpeg', description: 'Countryside Road' },
    { src: 'https://images.pexels.com/photos/253202/pexels-photo-253202.jpeg', description: 'Snow Covered Trees' },
    { src: 'https://images.pexels.com/photos/1782259/pexels-photo-1782259.jpeg', description: 'Night Sky and Mountains' },
    { src: 'https://images.pexels.com/photos/1043387/pexels-photo-1043387.jpeg', description: 'Serene Waterfall' },
    { src: 'https://images.pexels.com/photos/1547342/pexels-photo-1547342.jpeg', description: 'Desert Dunes' },
    { src: 'https://images.pexels.com/photos/289652/pexels-photo-289652.jpeg', description: 'Colorful Hot Air Balloons' },
    { src: 'https://images.pexels.com/photos/3853086/pexels-photo-3853086.jpeg', description: 'Beautiful Sunrise' }
];

// Mock function to simulate image loading from a server
let currentIndex = 0;
const imagesPerPage = 10;

function loadImages() {
    const grid = document.getElementById('grid');
    const imagesToLoad = imageData.slice(currentIndex, currentIndex + imagesPerPage);
    imagesToLoad.forEach(image => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.description;

        const description = document.createElement('div');
        description.classList.add('description');
        description.innerText = image.description;

        gridItem.appendChild(imgElement);
        gridItem.appendChild(description);
        gridItem.addEventListener('click', () => openModal(image.src, image.description));
        grid.appendChild(gridItem);
    });

    currentIndex += imagesPerPage;
}

// Load initial images
document.addEventListener('DOMContentLoaded', loadImages);

// Load more images on button click
document.getElementById('load-more').addEventListener('click', loadImages);

// Search functionality
document.getElementById('search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const description = item.querySelector('.description').innerText.toLowerCase();
        if (description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Modal functionality
function openModal(src, description) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = src;
    caption.innerText = description;
}

document.querySelector('.modal .close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
