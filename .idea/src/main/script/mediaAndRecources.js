// ── DATA ──────────────────────────────────────────────────────────────────────
let images = [
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ088T8eOprVaBj7gYR6N1yxsWD3rZP6up5vw&s",
        title: "Keupstraße After the Attack",
        caption: "The street shortly after the nail bomb explosion on 9 June 2004.",
        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ088T8eOprVaBj7gYR6N1yxsWD3rZP6up5vw&s",
        date: "09.06.2004"
    },
    {
        url: "https://via.placeholder.com/400x400/173DF5/ffffff?text=Image+2",
        title: "Placeholder Image",
        caption: "Replace with a real image.",
        source: "",
        date: ""
    },
];

let currentLbIdx = 0;

function renderGallery() {
    const tbody = document.getElementById('gallery-tbody');
    tbody.innerHTML = '';

    const cols = 4;
    const rows = Math.ceil(images.length / cols);

    for (let r = 0; r < rows; r++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            const td = document.createElement('td');

            if (idx < images.length) {
                const img = images[idx];
                td.innerHTML = `
            <div class="gallery-cell" onclick="openLightbox(${idx})">
              <img src="${img.url}" alt="${img.title}" onerror="this.style.display='none'">
              <div class="gallery-cell-overlay">
                <div class="gallery-cell-title">${img.title}</div>
                <div class="gallery-cell-date">${img.date || ''}</div>
              </div>
            </div>
          `;
            } else {
                td.innerHTML = `<div class="gallery-cell-empty"><span>—</span></div>`;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    document.getElementById('gallery-count').textContent =
        `${images.length} image${images.length !== 1 ? 's' : ''}`;
}

function openLightbox(idx) {
    currentLbIdx = idx;
    updateLightbox();
    document.getElementById('gallery-lightbox').classList.add('open');
}

function updateLightbox() {
    const img = images[currentLbIdx];
    document.getElementById('lb-img').src = img.url;
    document.getElementById('lb-img').alt = img.title;
    document.getElementById('lb-title').textContent = img.title;
    document.getElementById('lb-caption').textContent = img.caption || '';
    const src = document.getElementById('lb-source');
    if (img.source) {
        src.href = img.source;
        src.textContent = img.source;
        src.style.display = '';
    } else {
        src.style.display = 'none';
    }
}

function closeLightbox() {
    document.getElementById('gallery-lightbox').classList.remove('open');
}

function lbNav(dir) {
    currentLbIdx = (currentLbIdx + dir + images.length) % images.length;
    updateLightbox();
}

document.getElementById('gallery-lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
});


document.addEventListener('keydown', e => {
    if (!document.getElementById('gallery-lightbox').classList.contains('open')) return;
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'Escape') closeLightbox();
});


renderGallery();