function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}

function closeNavbarOnClickOutside(event) {
    const navbar = document.getElementById('navbar');
    const icon = document.querySelector('.icon');
    if (navbar.classList.contains('open') && !navbar.contains(event.target) && !icon.contains(event.target)) {
        navbar.classList.remove('open');
    }
}

document.addEventListener('click', closeNavbarOnClickOutside);


async function loadMarkdown() {
    try {
        const response = await fetch('../../../../LICENSE.md');
        const markdown = await response.text();
        const html = marked.parse(markdown);
        document.getElementById('licenseContent').innerHTML = html;
    } catch (error) {
        document.getElementById('licenseContent').innerHTML = 'Error loading license file.';
        console.error('Error loading LICENSE.md:', error);
    }
}

function openImageOverlay(imageSrc) {
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = imageSrc;
    overlay.classList.add('active');
}

function closeImageOverlay() {
    const overlay = document.getElementById('imageOverlay');
    overlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('licenseContent')) {
        loadMarkdown();
    }
});