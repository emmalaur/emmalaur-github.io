// Timeline Data Structure
const timelineData = [
    {
        id: 1,
        xPos: 150, // Horizontal position (pixels from left)
        yPos: 200, // Vertical position (pixels from top)
        date: "June 9, 2004",
        category: "Incident",
        title: "Nail Bomb Attack",
        content: {
            text: "A nail bomb explodes in Keupstraße, injuring 22 people. The attack targets the Turkish community in Cologne.",
            media: {
                type: "image", // can be "image", "audio", or "video"
                url: "path/to/image.jpg",
                alt: "Keupstraße after the attack"
            }
        }
    },
    {
        id: 2,
        xPos: 300,
        yPos: 100,
        date: "2004-2007",
        category: "Investigation",
        title: "Initial Investigation",
        content: {
            text: "Police initially suspect intra-Turkish conflicts. The investigation focuses on the Turkish community rather than right-wing extremists.",
            media: {
                type: "audio",
                url: "path/to/audio.mp3",
                title: "Witness testimony"
            }
        }
    },
    {
        id: 3,
        xPos: 450,
        yPos: 300,
        date: "2011",
        category: "Discovery",
        title: "NSU Connection Revealed",
        content: {
            text: "The National Socialist Underground (NSU) is identified as responsible for the attack. This reveals failures in the original investigation.",
            media: {
                type: "video",
                url: "path/to/video.mp4",
                title: "News coverage of NSU revelations"
            }
        }
    },
    // Add more timeline entries as needed
];

// Timeline Categories for Y-axis
const timelineCategories = [
    "Incident",
    "Investigation",
    "Legal Proceedings",
    "Public Response",
    "Aftermath",
    "Commemoration"
];

// Timeline Dates for X-axis
const timelineDates = [
    "2004", "2005", "2006", "2007", "2008", "2009", "2010",
    "2011", "2012", "2013", "2014", "2015", "2016", "2017",
    "2018", "2019", "2020", "2021", "2022", "2023", "2024",
    "2025", "2026"
];

// DOM Elements
let activeTimelineItem = null;

// Initialize Timeline
function initTimeline() {
    populateYAxis();
    populateXAxis();
    populateTimelineNodes();
}

// Populate Y-axis with categories
function populateYAxis() {
    const yAxis = document.getElementById('timelineYAxis');
    yAxis.innerHTML = '';

    timelineCategories.forEach(category => {
        const item = document.createElement('div');
        item.className = 'y-axis-item';
        item.textContent = category;
        item.onclick = () => filterByCategory(category);
        yAxis.appendChild(item);
    });
}

// Populate X-axis with dates
function populateXAxis() {
    const xAxis = document.getElementById('timelineXAxis');
    xAxis.innerHTML = '';

    timelineDates.forEach(date => {
        const item = document.createElement('div');
        item.className = 'x-axis-item';
        item.textContent = date;
        item.onclick = () => filterByDate(date);
        xAxis.appendChild(item);
    });
}

// Create timeline nodes
function populateTimelineNodes() {
    const contentArea = document.getElementById('timelineContent');
    contentArea.innerHTML = '';

    timelineData.forEach(item => {
        // Create node
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.style.left = `${item.xPos}px`;
        node.style.top = `${item.yPos}px`;
        node.setAttribute('data-id', item.id);
        node.onclick = (e) => {
            e.stopPropagation();
            openTimelineItem(item.id);
        };

        // Add tooltip
        node.title = `${item.date}: ${item.title}`;

        contentArea.appendChild(node);
    });
}

// Open a specific timeline item
function openTimelineItem(itemId) {
    // Close any open item first
    closeTimelineItem();

    const itemData = timelineData.find(item => item.id === itemId);
    if (!itemData) return;

    const contentArea = document.getElementById('timelineContent');

    // Create expanded item
    const expandedItem = document.createElement('div');
    expandedItem.className = 'timeline-item';
    expandedItem.id = `timeline-item-${itemId}`;
    expandedItem.style.left = `${itemData.xPos - 200}px`;
    expandedItem.style.top = `${itemData.yPos}px`;

    // Create content
    const contentHTML = `
        <div class="timeline-item-content">
            <h3>${itemData.title}</h3>
            <div class="timeline-item-date">${itemData.date}</div>
            <div class="timeline-item-text">${itemData.content.text}</div>
            ${renderMedia(itemData.content.media)}
        </div>
    `;

    expandedItem.innerHTML = contentHTML;
    contentArea.appendChild(expandedItem);

    // Add close button to the item
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = 'position: absolute; top: 10px; right: 10px; border: none; background: none; font-size: 20px; cursor: pointer; color: rgb(58, 90, 165);';
    closeBtn.onclick = (e) => {
        e.stopPropagation();
        closeTimelineItem();
    };

    expandedItem.appendChild(closeBtn);
    activeTimelineItem = itemId;

    // Close item when clicking outside
    setTimeout(() => {
        document.addEventListener('click', closeTimelineItemOnClickOutside);
    }, 100);
}

// Render media based on type
function renderMedia(media) {
    if (!media) return '';

    switch(media.type) {
        case 'image':
            return `<img src="${media.url}" alt="${media.alt || ''}" class="timeline-media">`;
        case 'audio':
            return `
                <audio controls class="timeline-audio">
                    <source src="${media.url}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <div>${media.title || ''}</div>
            `;
        case 'video':
            return `
                <video controls class="timeline-video">
                    <source src="${media.url}" type="video/mp4">
                    Your browser does not support the video element.
                </video>
                <div>${media.title || ''}</div>
            `;
        default:
            return '';
    }
}

// Close timeline item
function closeTimelineItem() {
    if (activeTimelineItem) {
        const item = document.getElementById(`timeline-item-${activeTimelineItem}`);
        if (item) item.remove();
        activeTimelineItem = null;
    }
    document.removeEventListener('click', closeTimelineItemOnClickOutside);
}

// Close timeline item when clicking outside
function closeTimelineItemOnClickOutside(e) {
    if (activeTimelineItem && !e.target.closest('.timeline-item') && !e.target.closest('.timeline-node')) {
        closeTimelineItem();
    }
}

// Filter functions
function filterByCategory(category) {
    console.log(`Filter by category: ${category}`);
    // Implement filtering logic here
}

function filterByDate(date) {
    console.log(`Filter by date: ${date}`);
    // Implement filtering logic here
}

// Open/Close timeline
function openTimeline() {
    const container = document.getElementById('timelineContainer');
    const overlay = document.getElementById('timelineOverlay');

    container.classList.add('open');
    overlay.classList.add('active');

    // Initialize timeline if not already done
    if (!container.dataset.initialized) {
        initTimeline();
        container.dataset.initialized = true;
    }
}

function closeTimeline() {
    const container = document.getElementById('timelineContainer');
    const overlay = document.getElementById('timelineOverlay');

    container.classList.remove('open');
    overlay.classList.remove('active');
    closeTimelineItem();
}

// Close timeline with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTimeline();
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Your existing navbar initialization
    // ...
});

// Initialize timeline preview
function initTimelinePreview() {
    const previewContainer = document.getElementById('timelinePreviewContent');
    if (!previewContainer) return;

    previewContainer.innerHTML = '';

    // Get container dimensions
    const containerWidth = 660; // Preview container width minus padding
    const containerHeight = 260; // Preview container height minus padding

    // Find the bounds of your timeline data
    const maxX = Math.max(...timelineData.map(item => item.xPos));
    const maxY = Math.max(...timelineData.map(item => item.yPos));
    const minX = Math.min(...timelineData.map(item => item.xPos));
    const minY = Math.min(...timelineData.map(item => item.yPos));

    // Calculate scale factors with padding
    const scaleX = (containerWidth - 40) / (maxX - minX);
    const scaleY = (containerHeight - 40) / (maxY - minY);

    timelineData.forEach(item => {
        const previewNode = document.createElement('div');
        previewNode.className = 'timeline-preview-node';

        // Scale and position the node
        const scaledX = ((item.xPos - minX) * scaleX) + 20;
        const scaledY = ((item.yPos - minY) * scaleY) + 20;

        previewNode.style.left = `${scaledX}px`;
        previewNode.style.top = `${scaledY}px`;
        previewNode.setAttribute('data-title', `${item.date}: ${item.title}`);

        // Prevent event bubbling when clicking individual nodes
        previewNode.onclick = (e) => {
            e.stopPropagation();
            openTimeline();
        };

        previewContainer.appendChild(previewNode);
    });
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    initTimelinePreview();
});