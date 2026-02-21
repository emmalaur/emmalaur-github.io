// Timeline Data Structure - Now with category and date only (no hardcoded positions)
const timelineData = [
    {
        id: 1,
        date: "2004-06-09",
        category: "NSU",
        title: "Nail Bomb Attack",
        content: {
            text: "A nail bomb explodes in Keupstraße, injuring 22 people. The attack targets the Turkish and Kurdish community in Cologne.",
            media: {
                type: "image",
                url: "path/to/image.jpg",
                alt: "Keupstraße after the attack"
            }
        }
    },
    {
        id: 2,
        date: "2004-01-01",
        dateRange: "2004-2007",
        category: "NSU",
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
        date: "2011-11-01",
        category: "NSU",
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
    {
        id: 4,
        date: "2012-01-01",
        category: "NSU",
        title: "NSU Trial Begins",
        content: {
            text: "The trial against Beate Zschäpe and other NSU supporters begins in Munich.",
            media: null
        }
    },
    {
        id: 5,
        date: "2018-07-01",
        category: "Police",
        title: "Memorial Initiative",
        content: {
            text: "Initiative 'Keupstraße ist überall' continues advocacy for victims and commemoration.",
            media: null
        }
    },
    {
        id: 6,
        date: "2021-01-01",
        category: "Police",
        title: "Ongoing Impact",
        content: {
            text: "The legacy of the attack continues to shape discussions about right-wing extremism and institutional racism in Germany.",
            media: null
        }
    },
    {
        id: 7,
        date: "2008-06-09",
        category: "Police",
        title: "20th Anniversary",
        content: {
            text: "Memorial events mark 20 years since the attack, honoring victims and highlighting ongoing struggles for justice.",
            media: null
        }
    },
    {
        id: 8,
        date: "2005-03-15",
        category: "Government",
        title: "Government Statement on Attack",
        content: {
            text: "The government issues a statement condemning the attack but avoids labeling it as terrorism.",
            media: null
        }
    },
    {
        id: 9,
        date: "2009-11-20",
        category: "Government",
        title: "Parliamentary Debate",
        content: {
            text: "A parliamentary debate highlights the failures in addressing right-wing extremism.",
            media: null
        }
    },

    // Federal Office
    {
        id: 10,
        date: "2006-02-10",
        category: "Federal Office",
        title: "Federal Police Report",
        content: {
            text: "A report by the Federal Police suggests the attack was likely gang-related.",
            media: null
        }
    },
    {
        id: 11,
        date: "2010-08-05",
        category: "Federal Office",
        title: "Revised Investigation Guidelines",
        content: {
            text: "The Federal Office introduces new guidelines for investigating hate crimes.",
            media: null
        }
    },

    // The City of Cologne
    {
        id: 12,
        date: "2004-07-01",
        category: "The City of Cologne",
        title: "City Council Meeting",
        content: {
            text: "The City Council discusses the impact of the attack on the local community.",
            media: null
        }
    },
    {
        id: 13,
        date: "2008-09-12",
        category: "The City of Cologne",
        title: "Community Support Program",
        content: {
            text: "The city launches a program to support victims of the attack.",
            media: null
        }
    },

    // Tax Office
    {
        id: 14,
        date: "2007-04-18",
        category: "Tax Office",
        title: "Audit of Local Businesses",
        content: {
            text: "The Tax Office conducts audits on businesses in Keupstraße, raising tensions.",
            media: null
        }
    },
    {
        id: 15,
        date: "2011-06-30",
        category: "Tax Office",
        title: "Tax Relief for Victims",
        content: {
            text: "Tax relief measures are introduced for businesses affected by the attack.",
            media: null
        }
    },

    // Public Response
    {
        id: 16,
        date: "2004-06-15",
        category: "Public Response",
        title: "Community Vigil",
        content: {
            text: "A vigil is held in Keupstraße to honor the victims of the attack.",
            media: null
        }
    },
    {
        id: 17,
        date: "2010-05-01",
        category: "Public Response",
        title: "Protest Against Racism",
        content: {
            text: "Thousands march in Cologne to protest racism and demand justice for the victims.",
            media: null
        }
    },

    // Media
    {
        id: 18,
        date: "2004-06-10",
        category: "Media",
        title: "Initial News Coverage",
        content: {
            text: "Media outlets report the attack, focusing on potential gang-related motives.",
            media: null
        }
    },
    {
        id: 19,
        date: "2007-11-25",
        category: "Media",
        title: "Documentary Released",
        content: {
            text: "A documentary highlights the struggles of the victims and their families.",
            media: null
        }
    },

    // Police
    {
        id: 20,
        date: "2004-06-12",
        category: "Police",
        title: "Police Investigation Begins",
        content: {
            text: "The police begin their investigation, focusing on the Turkish community.",
            media: null
        }
    },
    {
        id: 21,
        date: "2009-03-22",
        category: "Police",
        title: "Internal Review",
        content: {
            text: "An internal review criticizes the handling of the investigation.",
            media: null
        }
    },

    // Community
    {
        id: 22,
        date: "2004-06-20",
        category: "Community",
        title: "Community Meeting",
        content: {
            text: "Local residents gather to discuss the impact of the attack.",
            media: null
        }
    },
    {
        id: 23,
        date: "2011-04-10",
        category: "Community",
        title: "Support Group Formed",
        content: {
            text: "A support group is formed to help victims and their families.",
            media: null
        }
    },

    // NSU
    {
        id: 24,
        date: "2005-07-15",
        category: "NSU",
        title: "NSU Activity Suspected",
        content: {
            text: "Authorities receive a tip about potential NSU involvement but fail to act.",
            media: null
        },
    },
    {
        id: 25,
        date: "2011-11-04",
        category: "NSU",
        title: "NSU Members Identified",
        content: {
            text: "Two NSU members are identified after a botched robbery, linking them to the attack.",
            media: null
        }
    }
];

// Timeline Configuration
const timelineConfig = {
    startYear: 2004,
    endYear: 2011,
    yearsPerGrid: 1, // Show every year
    categoryHeight: 80, // Pixels per category row
    yearWidth: 150, // Pixels per year
    marginTop: 50,
    marginLeft: 150,
    nodeRadius: 15
};

// Timeline Categories (ordered for Y-axis)
const timelineCategories = [
    "Government",
    "Federal Office",
    "The City of Cologne",
    "Tax Office",
    "Public Response",
    "Media",
    "Police",
    "Community",
    "NSU"
];

// DOM Elements
let activeTimelineItem = null;
let currentHighlight = {
    type: null, // 'category', 'year', or null
    value: null
};

// Initialize Timeline
function initTimeline() {
    populateYAxis();
    populateXAxis();
    calculateAllNodePositions();
    populateTimelineNodes();
    setupScrollSync();
}

// Calculate position based on category and date
function calculateNodePosition(category, dateString) {
    // Y position based on category index
    const categoryIndex = timelineCategories.indexOf(category);
    const yPos = timelineConfig.marginTop + (categoryIndex * timelineConfig.categoryHeight);

    // X position based on date
    let year;
    if (dateString.includes('-')) {
        // Handle ISO format
        year = new Date(dateString).getFullYear();
    } else {
        // Handle other formats (fallback)
        year = parseInt(dateString.split('-')[0]) || parseInt(dateString);
    }

    // Ensure year is within bounds
    year = Math.max(timelineConfig.startYear, Math.min(timelineConfig.endYear, year));

    // Calculate X position
    const yearOffset = (year - timelineConfig.startYear) * timelineConfig.yearWidth;
    const xPos = timelineConfig.marginLeft + yearOffset;

    return { xPos, yPos };
}

// Calculate and store positions for all nodes
function calculateAllNodePositions() {
    timelineData.forEach(item => {
        const { xPos, yPos } = calculateNodePosition(item.category, item.date);
        item.xPos = xPos;
        item.yPos = yPos;
    });
}

// Populate Y-axis with categories
function populateYAxis() {
    const yAxis = document.getElementById('timelineYAxis');
    yAxis.innerHTML = '';

    timelineCategories.forEach(category => {
        const item = document.createElement('div');
        item.className = 'y-axis-item';
        item.textContent = category;
        item.setAttribute('data-category', category);
        item.onclick = () => toggleCategoryHighlight(category);
        yAxis.appendChild(item);
    });
}

// Populate X-axis with dates
function populateXAxis() {
    const xAxis = document.getElementById('timelineXAxis');
    xAxis.innerHTML = '';

    // Calculate total width needed
    const totalYears = timelineConfig.endYear - timelineConfig.startYear;
    xAxis.style.minWidth = `${totalYears * timelineConfig.yearWidth + timelineConfig.marginLeft}px`;

    // Create year markers
    for (let year = timelineConfig.startYear; year <= timelineConfig.endYear; year += timelineConfig.yearsPerGrid) {
        const item = document.createElement('div');
        item.className = 'x-axis-item';
        item.textContent = year;
        item.style.minWidth = `${timelineConfig.yearWidth}px`;
        item.setAttribute('data-year', year);
        item.onclick = () => toggleYearHighlight(year);
        xAxis.appendChild(item);
    }
}

// Create timeline nodes
function populateTimelineNodes() {
    const contentArea = document.getElementById('timelineContent');
    contentArea.innerHTML = '';

    // Set content area dimensions
    const maxX = Math.max(...timelineData.map(item => item.xPos)) + 100;
    const maxY = Math.max(...timelineData.map(item => item.yPos)) + 100;
    contentArea.style.minWidth = `${maxX}px`;
    contentArea.style.minHeight = `${maxY}px`;

    timelineData.forEach(item => {
        // Create node
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.style.left = `${item.xPos}px`;
        node.style.top = `${item.yPos}px`;
        node.setAttribute('data-id', item.id);
        node.setAttribute('data-category', item.category);
        node.setAttribute('data-year', new Date(item.date).getFullYear());

        // Add tooltip
        const displayDate = item.dateRange || new Date(item.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        node.title = `${displayDate}: ${item.title}`;

        // Add click handler
        node.onclick = (e) => {
            e.stopPropagation();
            openTimelineItem(item.id);
        };

        contentArea.appendChild(node);
    });

    // Apply any existing highlight
    if (currentHighlight.type) {
        applyHighlight();
    }
}

// Synchronize scrolling between axes and content
function setupScrollSync() {
    const contentArea = document.getElementById('timelineContent');
    const xAxis = document.getElementById('timelineXAxis');
    const yAxis = document.getElementById('timelineYAxis');

    // Update axes when content scrolls
    contentArea.addEventListener('scroll', () => {
        xAxis.scrollLeft = contentArea.scrollLeft;
        yAxis.scrollTop = contentArea.scrollTop;
    });

    // Update content when axes scroll
    xAxis.addEventListener('scroll', () => {
        contentArea.scrollLeft = xAxis.scrollLeft;
    });

    yAxis.addEventListener('scroll', () => {
        contentArea.scrollTop = yAxis.scrollTop;
    });
}

// Toggle category highlight
function toggleCategoryHighlight(category) {
    if (currentHighlight.type === 'category' && currentHighlight.value === category) {
        // Clear highlight if same category clicked
        clearHighlights();
    } else {
        // Set new category highlight
        currentHighlight = {
            type: 'category',
            value: category
        };
        applyHighlight();
    }
}

// Toggle year highlight
function toggleYearHighlight(year) {
    if (currentHighlight.type === 'year' && currentHighlight.value === year) {
        // Clear highlight if same year clicked
        clearHighlights();
    } else {
        // Set new year highlight
        currentHighlight = {
            type: 'year',
            value: year
        };
        applyHighlight();
    }
}

// Apply current highlight to nodes and axes
function applyHighlight() {
    // Clear all previous highlight classes
    document.querySelectorAll('.y-axis-item, .x-axis-item').forEach(item => {
        item.classList.remove('active-highlight');
    });

    document.querySelectorAll('.timeline-node').forEach(node => {
        node.classList.remove('highlighted');
    });

    if (!currentHighlight.type) return;

    // Apply highlight based on type
    if (currentHighlight.type === 'category') {
        // Highlight the category on Y-axis
        document.querySelectorAll('.y-axis-item').forEach(item => {
            if (item.getAttribute('data-category') === currentHighlight.value) {
                item.classList.add('active-highlight');
            }
        });

        // Highlight nodes of that category
        document.querySelectorAll('.timeline-node').forEach(node => {
            if (node.getAttribute('data-category') === currentHighlight.value) {
                node.classList.add('highlighted');
            }
        });
    }
    else if (currentHighlight.type === 'year') {
        // Highlight the year on X-axis
        document.querySelectorAll('.x-axis-item').forEach(item => {
            if (parseInt(item.getAttribute('data-year')) === currentHighlight.value) {
                item.classList.add('active-highlight');
            }
        });

        // Highlight nodes from that year
        document.querySelectorAll('.timeline-node').forEach(node => {
            if (parseInt(node.getAttribute('data-year')) === currentHighlight.value) {
                node.classList.add('highlighted');
            }
        });
    }
}

// Clear all highlights
function clearHighlights() {
    currentHighlight = {
        type: null,
        value: null
    };

    // Remove highlight classes from axes
    document.querySelectorAll('.y-axis-item, .x-axis-item').forEach(item => {
        item.classList.remove('active-highlight');
    });

    // Remove highlight classes from nodes
    document.querySelectorAll('.timeline-node').forEach(node => {
        node.classList.remove('highlighted');
    });
}

// Open timeline item
function openTimelineItem(itemId) {
    closeTimelineItem();

    const itemData = timelineData.find(item => item.id === itemId);
    if (!itemData) return;

    const contentArea = document.getElementById('timelineContent');

    // Create expanded item
    const expandedItem = document.createElement('div');
    expandedItem.className = 'timeline-item';
    expandedItem.id = `timeline-item-${itemId}`;

    expandedItem.style.position = 'fixed';
    expandedItem.style.top = '50%';
    expandedItem.style.left = '50%';
    expandedItem.style.transform = 'translate(-50%, -50%)';

    // Display date nicely
    const displayDate = itemData.dateRange || new Date(itemData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Create content
    const contentHTML = `
        <div class="timeline-item-content">
            <h3>${itemData.title}</h3>
            <div class="timeline-item-date">${displayDate}</div>
            <div class="timeline-item-category">${itemData.category}</div>
            <div class="timeline-item-text">${itemData.content.text}</div>
            ${renderMedia(itemData.content.media)}
        </div>
    `;

    expandedItem.innerHTML = contentHTML;

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'timeline-item-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = (e) => {
        e.stopPropagation();
        closeTimelineItem();
    };

    expandedItem.appendChild(closeBtn);
    contentArea.appendChild(expandedItem);
    activeTimelineItem = itemId;

    // Close when clicking outside
    setTimeout(() => {
        document.addEventListener('click', closeTimelineItemOnClickOutside);
    }, 100);
}

// Render media based on type
function renderMedia(media) {
    if (!media || !media.type) return '';

    switch(media.type) {
        case 'image':
            return `<img src="${media.url}" alt="${media.alt || ''}" class="timeline-media" onerror="this.src='placeholder.jpg'">`;
        case 'audio':
            return `
                <div class="timeline-media-container">
                    <audio controls class="timeline-audio">
                        <source src="${media.url}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    ${media.title ? `<div class="media-caption">${media.title}</div>` : ''}
                </div>
            `;
        case 'video':
            return `
                <div class="timeline-media-container">
                    <video controls class="timeline-video">
                        <source src="${media.url}" type="video/mp4">
                        Your browser does not support the video element.
                    </video>
                    ${media.title ? `<div class="media-caption">${media.title}</div>` : ''}
                </div>
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
    clearHighlights(); // Clear highlights when closing
}

// Close timeline with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.getElementById('timelineContainer').classList.contains('open')) {
            closeTimeline();
        }
    }
});

// Initialize timeline preview
function initTimelinePreview() {
    const previewContainer = document.getElementById('timelinePreviewContent');
    if (!previewContainer) return;

    previewContainer.innerHTML = '';

    // Calculate positions for preview
    calculateAllNodePositions();

    // Get container dimensions
    const containerWidth = previewContainer.clientWidth - 40;
    const containerHeight = previewContainer.clientHeight - 40;

    // Find bounds
    const maxX = Math.max(...timelineData.map(item => item.xPos));
    const minX = Math.min(...timelineData.map(item => item.xPos));

    // Calculate scale factor for X-axis
    const scaleX = containerWidth / (maxX - minX || 1);

    timelineData.forEach(item => {
        const previewNode = document.createElement('div');
        previewNode.className = 'timeline-preview-node';

        // Scale and position
        const scaledX = ((item.xPos - minX) * scaleX) + 20;
        const randomY = Math.random() * containerHeight; // Randomize Y position

        previewNode.style.left = `${scaledX}px`;
        previewNode.style.top = `${randomY}px`;

        const displayDate = item.dateRange || new Date(item.date).getFullYear();
        previewNode.setAttribute('data-title', `${displayDate}: ${item.title}`);

        previewNode.onclick = (e) => {
            e.stopPropagation();
            openTimeline();
        };

        previewContainer.appendChild(previewNode);
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (document.getElementById('timelineContainer').classList.contains('open')) {
        // Recalculate positions if timeline is open
        calculateAllNodePositions();
        populateTimelineNodes();
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initTimelinePreview();
});