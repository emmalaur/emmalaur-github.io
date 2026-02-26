// ─── CONFIG ──────────────────────────────────────────────────────────────────
const MARGIN = { top: 30, right: 40, bottom: 50, left: 160 };
const ROW_H = 64;
const START_YEAR = 2004;
const END_YEAR = 2011;

const CAT_COLORS = {
    "Government":        "#c9a84c",
    "Federal Office":   "#7c5cbf",
    "The City of Cologne":      "#3a9e7e",
    "Tax Office":     "#c9534c",
    "Public Respone":      "#4c7ec9",
    "Media":      "#a0a0a0",
    "Police":    "#4c7ec9",
    "Community":    "#4c7ec9",
    "NSU":    "#173df5",

};

function categoryColor(cat) {
    return "rgb(23, 61, 245)"; ;
}

// ─── SAMPLE DATA ─────────────────────────────────────────────────────────────
let nodes = [

    {
        date: "2011-11-01",
        category: "Federal Office",
        title: "File Destruction",
        content: {
            text: "An employee of the Office for the Protection of the Constitution illegally destroyed the files relating to the investigation of the nail bomb attack in Keupstraße and general files on the NSU." +
                " In consideration of the fatal investigation procedure, one can only assume that the destruction served to cover up his own mistakes.",
            media: { type: "image", url: "https://img.zeit.de/2019/33/datenvernichtung-akten-schreddern/wide__1280x720", alt: "Destroyed Files" }
        },
        source: "https://img.zeit.de/2019/33/datenvernichtung-akten-schreddern/wide__1280x720",
        factSource: "https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2015/50_151112/index.php",
        connections: [
            { to: "NSU Uncovered", style: "solid" },
            { to: "Dortmund Bombing", style: "dotted" }
        ]
    },

    {
        date: "2004-09-01",
        dateRange: "2005–2008",
        category: "Police",
        title: "Surveilance of the Hasan Yildirim",
        content: {
            text: "Hasan Yildirim (the brother of the hair salon owner) moves to a hairdresser on Venloer Straße, and the police see this as a reason to create a movement profile and have him followed.",
            media: { type: "image", url: "https://img.zeit.de/gesellschaft/zeitgeschehen/2014-06/hasan-yildirim/hasan-yildirim-540x304.jpg/imagegroup/wide__822x462", alt: "Hasan Yildirim" }
        },
        source: "https://img.zeit.de/gesellschaft/zeitgeschehen/2014-06/hasan-yildirim/hasan-yildirim-540x304.jpg/imagegroup/wide__822x462",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",

    },
    {
        date: "2004-06-09",
        category: "Police",
        title: "Police interrogation the evening of the attack",
        content: {
            text: "The first ‘interrogations’ took place on the same day as the attack. Ultimately, the victims were " +
                "investigated as perpetrators for seven years until the NSU revealed itself in 2011." +
                "",
            media: { type: "image", url: "https://img.zeit.de/gesellschaft/zeitgeschehen/2014-06/hasan-yildirim/hasan-yildirim-540x304.jpg/imagegroup/wide__822x462", alt: "Hasan Yildirim" }
        },
        source: "https://img.zeit.de/gesellschaft/zeitgeschehen/2014-06/hasan-yildirim/hasan-yildirim-540x304.jpg/imagegroup/wide__822x462",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",

    },

    {
        date: "2004-06-09",
        category: "NSU",
        title: "Nail Bomb Attack",
        content: {
            text: "The NSU nail bomb attack in Keupstraße injured 22 people, four of them seriously. The bomb, hidden in a suitcase on the luggage rack of a parked bicycle, contained around 700–800 10 cm long carpenter's nails. ",
            media: { type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ088T8eOprVaBj7gYR6N1yxsWD3rZP6up5vw&s", alt: "Keupstraße after the attack" }
        },
        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ088T8eOprVaBj7gYR6N1yxsWD3rZP6up5vw&s",
        factSource: "https://www.deutschlandfunk.de/09-06-2004-nagelbombenanschlag-des-nsu-in-der-koelner-keupstrasse-dlf-8f2fe448-100.html",
        connections: [
            { to: "NSU Uncovered", style: "solid" },
            { to: "Dortmund Bombing", style: "dotted" }
        ]
    },




];

// ─── RENDER ───────────────────────────────────────────────────────────────────
function getCategories() {
    const set = new Set(nodes.map(n => n.category));
    return [...set];
}

function dateToYear(dateStr) {
    const d = new Date(dateStr);
    return d.getFullYear() + (d.getMonth()) / 12 + d.getDate() / 365;
}

function render() {
    const svg = document.getElementById('timeline');
    const wrap = document.getElementById('chart-wrap');
    const W = Math.max(wrap.clientWidth - 48, 600);
    const categories = getCategories();
    const H = MARGIN.top + categories.length * ROW_H + MARGIN.bottom;

    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    svg.innerHTML = '';

    const innerW = W - MARGIN.left - MARGIN.right;
    const innerH = H - MARGIN.top - MARGIN.bottom;

    const g = svgEl('g', { transform: `translate(${MARGIN.left},${MARGIN.top})` });
    svg.appendChild(g);

    // X scale
    const xRange = END_YEAR + 1 - START_YEAR;
    const xScale = x => ((x - START_YEAR) / xRange) * innerW;

    // Y scale
    const yScale = cat => {
        const i = categories.indexOf(cat);
        return i * ROW_H + ROW_H / 2;
    };

    // Grid + category labels
    categories.forEach((cat, i) => {
        const y = yScale(cat);
        // horizontal grid line
        g.appendChild(svgEl('line', { x1: 0, y1: y, x2: innerW, y2: y, class: 'grid-line' }));
        // label
        const words = cat.split(' ');
        if (words.length === 1) {
            const txt = svgEl('text', { x: -12, y: y, class: 'cat-label' });
            txt.textContent = cat;
            g.appendChild(txt);
        } else {
            const mid = Math.ceil(words.length / 2);
            const line1 = words.slice(0, mid).join(' ');
            const line2 = words.slice(mid).join(' ');
            const txt = svgEl('text', { x: -12, y: y - 8, class: 'cat-label' });
            const t1 = svgEl('tspan', { x: -12, dy: '0' });
            t1.textContent = line1;
            const t2 = svgEl('tspan', { x: -12, dy: '1.2em' });
            t2.textContent = line2;
            txt.appendChild(t1);
            txt.appendChild(t2);
            g.appendChild(txt);
        }

    });

    // Year ticks + vertical grid
    for (let yr = START_YEAR; yr <= END_YEAR + 1; yr++) {
        const x = xScale(yr);
        g.appendChild(svgEl('line', { x1: x, y1: 0, x2: x, y2: innerH, class: 'grid-line', opacity: 0.5 }));
        const txt = svgEl('text', { x: x, y: innerH + 22, class: 'year-label' });
        txt.textContent = yr;
        g.appendChild(txt);
    }

    // X axis line
    g.appendChild(svgEl('line', { x1: 0, y1: innerH, x2: innerW, y2: innerH, stroke: '#3e3e44', 'stroke-width': 1 }));

    // Nodes
    // ── Build a title→index lookup for connections ──
    const titleIndex = {};
    nodes.forEach((node, i) => { titleIndex[node.title] = i; });

// ── Connections (drawn before nodes so lines sit underneath) ──
    nodes.forEach((node, idx) => {
        if (!node.connections) return;
        const x1 = xScale(dateToYear(node.date));
        const y1 = yScale(node.category);

        node.connections.forEach(conn => {
            const targetIdx = titleIndex[conn.to];
            if (targetIdx === undefined) return;
            const target = nodes[targetIdx];
            const x2 = xScale(dateToYear(target.date));
            const y2 = yScale(target.category);

            const line = svgEl('line', {
                x1, y1, x2, y2,
                stroke: 'rgb(23, 61, 245)',
                'stroke-width': 4,
                'stroke-dasharray': conn.style === 'dotted' ? '6 4' : 'none',
                'pointer-events': 'none',
                class: 'tl-connection',
                'data-from': idx,
                'data-to': targetIdx,
            });
            g.appendChild(line);
        });
    });

// Nodes
    nodes.forEach((node, idx) => {
        const x = xScale(dateToYear(node.date));
        const y = yScale(node.category);
        const color = categoryColor(node.category);

        const ng = svgEl('g', { class: 'node-group', 'data-idx': idx });

        const pulse = svgEl('circle', { cx: x, cy: y, r: 40, fill: 'none', stroke: color, 'stroke-width': 2, class: 'node-pulse' });
        ng.appendChild(pulse);


        // main circle
        const circle = svgEl('circle', {
            cx: x, cy: y, r: 20,
            fill: color,
            class: 'node-circle',
        });
        circle.style.color = color;

        circle.addEventListener('click', () => openPopup(idx, color));

        circle.addEventListener('mouseenter', () => {
            const connectedIndices = new Set();
            connectedIndices.add(idx); // include hovered node itself

            if (node.connections) {
                node.connections.forEach(conn => {
                    const ti = titleIndex[conn.to];
                    if (ti !== undefined) connectedIndices.add(ti);
                });
            }

            nodes.forEach((otherNode, otherIdx) => {
                if (!otherNode.connections) return;
                otherNode.connections.forEach(conn => {
                    if (conn.to === node.title) connectedIndices.add(otherIdx);
                });
            });

            // pulse connected nodes
            connectedIndices.forEach(ci => {
                const target = document.querySelector(`.node-group[data-idx="${ci}"] .node-pulse`);
                if (target) target.classList.add('pulsing');
            });

            // dim all nodes NOT in the connected set
            nodes.forEach((_, otherIdx) => {
                if (connectedIndices.has(otherIdx)) return;
                const otherCircle = document.querySelector(`.node-group[data-idx="${otherIdx}"] .node-circle`);
                if (otherCircle) otherCircle.style.filter = 'brightness(0.35)';
            });

            // dim all lines NOT between highlighted nodes
            document.querySelectorAll('.tl-connection').forEach(line => {
                const from = parseInt(line.getAttribute('data-from'));
                const to = parseInt(line.getAttribute('data-to'));
                const isHighlighted = connectedIndices.has(from) && connectedIndices.has(to);
                line.style.opacity = isHighlighted ? '1' : '0.1';
            });
        });

        circle.addEventListener('mouseleave', () => {
            // remove pulsing
            document.querySelectorAll('.node-pulse.pulsing').forEach(el => {
                el.classList.remove('pulsing');
            });
            // restore all nodes
            document.querySelectorAll('.node-circle').forEach(el => {
                el.style.filter = '';
            });
            // restore all lines
            document.querySelectorAll('.tl-connection').forEach(el => {
                el.style.opacity = '';
            });
        });

        ng.appendChild(circle);

        g.appendChild(ng);
    });



}

// ─── POPUP ───────────────────────────────────────────────────────────────────
function renderMedia(media) {
    if (!media) return '';
    if (media.type === 'image') {
        return `<img src="${media.url}" alt="${media.alt || ''}" onerror="this.style.display='none'" >`;
    }
    return '';
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function openPopup(idx, color) {
    const item = nodes[idx];
    const displayDate = item.dateRange ? item.dateRange : formatDate(item.date);
    const header = document.getElementById('popup-header');
    header.textContent = item.category;

    const mediaHTML = renderMedia(item.content.media);
    const hasMedia = !!item.content.media;

    const table = document.getElementById('popup-table');
    table.innerHTML = `

  <tr>
    <td class="timeline-item-date" colspan="4">
      ${item.title}<br>
      <span class="timeline-item-date-sub">${displayDate}</span>
    </td>
  </tr>
  <tr>
    <td class="timeline-item-text" rowspan="2" colspan="2">${item.content.text}</td>
    ${hasMedia ? `<td class="media-cell" rowspan="2" colspan="2">${mediaHTML}</td>`
        : '<td colspan="2" rowspan="2"></td>'}
  </tr>
  <tr></tr>
  <tr>
    <td class="source-cell" colspan="4">
      Image source: <a href="${item.source}">${item.source}</a>
    </td>
  </tr>
  <tr>
    <td class="source-cell" colspan="4">
      Fact source: <a href="${item.factSource}">${item.factSource}</a>
    </td>
  </tr>
  `;

    document.getElementById('overlay').classList.add('open');
}

function closePopup() {
    document.getElementById('overlay').classList.remove('open');
}

document.getElementById('overlay').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
});

// ─── GRID TOGGLE ─────────────────────────────────────────────────────────────
let gridVisible = true;

function toggleGrid() {
    gridVisible = !gridVisible;
    document.querySelectorAll('.grid-line').forEach(el => {
        el.style.display = gridVisible ? '' : 'none';
    });
    document.getElementById('grid-toggle-btn').textContent = gridVisible ? '⊞ Hide Grid' : '⊞ Show Grid';
}

let linesVisible = true;

function toggleLines() {
    linesVisible = !linesVisible;
    document.querySelectorAll('.tl-connection').forEach(el => {
        el.style.display = linesVisible ? '' : 'none';
    });
    document.getElementById('line-toggle-btn').textContent = linesVisible ? '⌇ Hide Lines' : '⌇ Show Lines';
}

// ─── ADD NODE FORM ────────────────────────────────────────────────────────────
function openAddForm() {
    // Reset form
    document.getElementById('f-date').value = '2005-01-01';
    document.getElementById('f-category').value = 'NSU';
    document.getElementById('f-title').value = '';
    document.getElementById('f-text').value = '';
    document.getElementById('f-source').value = '';
    document.getElementById('f-image').value = '';
    document.getElementById('form-overlay').classList.add('open');
}

function closeAddForm() {
    document.getElementById('form-overlay').classList.remove('open');
}

function submitNodeByEmail() {
    const date     = document.getElementById('f-date').value;
    const category = document.getElementById('f-category').value;
    const title    = document.getElementById('f-title').value.trim();
    const text     = document.getElementById('f-text').value.trim();
    const source   = document.getElementById('f-source').value.trim();
    const image    = document.getElementById('f-image').value.trim();

    if (!date || !title) {
        alert('Please fill in at least the Date and Title.');
        return;
    }

    const subject = encodeURIComponent(`[Timeline Node] ${title} (${date})`);
    const body = encodeURIComponent(
        `New timeline node submission:

Title:    ${title}
Date:     ${date}
Category: ${category}
Text:     ${text || '(none)'}
Source:   ${source || '(none)'}
Image:    ${image || '(none)'}

---
Submitted via the Timeline tool.`
    );

    window.location.href = `mailto:emmareeb@gmail.com?subject=${subject}&body=${body}`;
    closeAddForm();
}

// Close form modal on backdrop click
document.getElementById('form-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeAddForm();
});

// ─── SVG HELPER ──────────────────────────────────────────────────────────────
function svgEl(tag, attrs = {}) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    return el;
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
render();
window.addEventListener('resize', render);