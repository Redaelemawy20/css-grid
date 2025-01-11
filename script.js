// script.js
const gallery = document.getElementById('gallery');
let page = 1; // Tracks the current page

// Function to generate dummy images
function generateGalleryItems(page) {
  const items = [];
  for (let i = 1; i <= 20; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    // Replace with your image source
    const img = document.createElement('img');
    img.src = `https://picsum.photos/200?random=${page * i}`;
    img.alt = `Image ${page * i}`;

    item.appendChild(img);
    items.push(item);
  }
  return items;
}

// Function to load images
function loadImages() {
  const items = generateGalleryItems(page);
  items.forEach((item) => gallery.appendChild(item));
  page++;
}

// Infinite scrolling logic
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadImages();
  }
});

// Initial load
loadImages();
