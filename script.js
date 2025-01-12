const gallery = document.getElementById('gallery');
let page = 1; // Tracks the current page
let currentLayout = 'equal';

function generateGalleryItems(page) {
  const items = [];
  for (let i = 1; i <= 20; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    // Create an image with a random height
    const img = document.createElement('img');
    const randomHeight = Math.floor(Math.random() * (500 + 1)) + 200; // Random height between 200px and 400px
    img.src = `https://picsum.photos/200/${200}?random=${page * i}`;
    img.alt = `Image ${page * i} with height ${randomHeight}`;

    item.appendChild(img);
    items.push(item);
  }
  return items;
}

function loadImages() {
  const items = generateGalleryItems(page);
  if (currentLayout == 'rows') spanItems(items, true);
  if (currentLayout == 'rows-cols') spanItems(items, true, true);
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
      equalLayout();
      currentLayout = 'equal';
      break;
    case 'rows':
      dynamicRows();
      currentLayout = 'rows';
      break;
    case 'rows-cols':
      currentLayout = 'rows-cols';
      dynamicRowsandClos();
      break;
    default:
      break;
  }
}
function equalLayout() {
  const gallerySection = document.getElementById('gallery');
  gallerySection.className = '';
  gallerySection.classList.add('equal');
}
function dynamicRows() {
  const gallerySection = document.getElementById('gallery');
  gallerySection.className = '';
  gallerySection.classList.add('rows');
  const items = gallerySection.querySelectorAll('.gallery-item');
  spanItems(items, true);
}
function dynamicRowsandClos() {
  const gallerySection = document.getElementById('gallery');
  gallerySection.className = '';
  gallerySection.classList.add('rows-cols');
  const items = gallerySection.querySelectorAll('.gallery-item');
  spanItems(items, true, true);
}
function spanItems(items, spanRows, spanCols) {
  items.forEach((item) => {
    if (spanRows) {
      const rowSpan = Math.ceil(Math.random() * 8) + 1;
      item.style.setProperty('--row-span', rowSpan);
    }
    if (spanCols) {
      const columnSpan = Math.ceil(Math.random() * 2);
      item.style.setProperty('--column-span', columnSpan);
    }
  });
}
