const gallery = document.getElementById('gallery');
let page = 1; // Tracks the current page

// Function to generate dummy images with random heights
function generateGalleryItems(page) {
  const items = [];
  for (let i = 1; i <= 20; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    // Create an image with a random height
    const img = document.createElement('img');
    const randomHeight = Math.floor(Math.random() * (500 + 1)) + 200; // Random height between 200px and 400px
    img.src = `https://picsum.photos/200/${randomHeight}?random=${page * i}`;
    img.alt = `Image ${page * i} with height ${randomHeight}`;

    item.appendChild(img);
    items.push(item);
  }
  return items;
}
function setRowSpans() {
  const items = document.querySelectorAll('.gallery-item');
  console.log(items);

  items.forEach((item) => {
    const img = item.querySelector('img');
    console.log(img);

    // Wait for image to load to get correct height
    img.onload = () => {
      console.log('loaded');

      const rowSpan = Math.ceil(Math.random() * 8) + 1; // Random span between 1 and 4
      const columnSpan = Math.ceil(Math.random() * 2);
      item.style.setProperty('--row-span', rowSpan);
      item.style.setProperty('--column-span', columnSpan);
    };
  });
}
// Function to load images
function loadImages() {
  const items = generateGalleryItems(page);
  items.forEach((item) => gallery.appendChild(item));
  page++;
  // setRowSpans();
}

// Infinite scrolling logic
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadImages();
  }
});

// Initial load
loadImages();

function onListItemClick(e, layout) {
  e.preventDefault();
  const alllinks = document.querySelectorAll('.nav_links li');
  alllinks.forEach((link) => {
    link.classList.remove('active');
  });
  const currentelm = e.currentTarget;
  currentelm.classList.add('active');
  applyLayout(layout);
}
function applyLayout(layout) {
  switch (layout) {
    case 'equal':
      break;
    case 'dynamicRows':
      break;
    case 'monasory':
      break;
    default:
      break;
  }
}
