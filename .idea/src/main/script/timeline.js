// ─── CONFIG ──────────────────────────────────────────────────────────────────
const MARGIN = { top: 30, right: 40, bottom: 50, left: 160 };
const ROW_H = 64;
const START_YEAR = 1997;
const END_YEAR = 2015;

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
        date: "2011-11-11",
        category: "Federal Office",
        title: "File Destruction",
        content: {
            text: "An employee of the Office for the Protection of the Constitution illegally destroyed the files relating to the investigation of the nail bomb attack in Keupstraße and general files on the NSU." +
                " In consideration of the fatal investigation procedure, one can only assume that the destruction served to cover up his own mistakes.",
            media: { type: "image", url: "https://img.zeit.de/2019/33/datenvernichtung-akten-schreddern/wide__1280x720", alt: "Destroyed Files" }
        },
        source: "https://img.zeit.de/2019/33/datenvernichtung-akten-schreddern/wide__1280x720",
        factSource: "https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2015/50_151112/index.php",

    },

    {
        date: "2004-09-06",
        dateRange: "2004–2011",
        category: "Tax Office",
        title: "Control by the Tax and Finance Office",
        content: {
            text: "According to Meral Sahin, the Speaker of IG Keupstraße, it's not just the police that turns the victims into culprits. The State also put pressure on the people living and working in Keupstraße. The Finance & Tax Office would write out unporportional high fines to shop owners. The Customs Office was there every month.",
            media: { type: "image", url: "https://taz.de/picture/1370991/1200/290716Keupstrasse.jpeg", alt: "Keupstraße" }
        },
        source: "https://taz.de/picture/1370991/1200/290716Keupstrasse.jpeg",
        factSource: "https://podcasts.apple.com/de/podcast/true-crime-k%C3%B6ln/id1649776242?l=en-GB&i=1000658236604",

    },

    {
        date: "2004-06-10",
        dateRange: "The time after the attack and media uproar.",
        category: "Media",
        docMinute: "30:00",
        title: "Biased media reporting",
        content: {
            text: "The 10 year old daughter of Abdullah Ö. reports being bullied at school after media headlines detail the attack as gang crime.",
            media: { type: "image", url: "https://www.historische-magazine.de/wp-content/uploads/2018/05/Bild_Logo-1024x828.jpg", alt: "News Article" }
        },
        source: "https://www.historische-magazine.de/wp-content/uploads/2018/05/Bild_Logo-1024x828.jpg",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",


    },

    {
        date: "2005-01-01",
        dateRange: "2005–2008",
        category: "Police",
        title: "Surveilance of the Hasan Yildirim",
        docMinute: "51:00",
        content: {
            text: "Hasan Yildirim (the brother of the hair salon owner) moves to a hairdresser on Venloer Straße, and the police see this as a reason to create a movement profile and have him followed.",
            media: { type: "image", url: "https://img.zeit.de/gesellschaft/zeitgeschehen/2014-06/hasan-yildirim/hasan-yildirim-540x304.jpg/imagegroup/wide__822x462", alt: "Hasan Yildirim" }
        },
        source: "https://img.zeit.de/gesellschaft/zeitgeschehen/2014-06/hasan-yildirim/hasan-yildirim-540x304.jpg/imagegroup/wide__822x462",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",

    },
    {
        date: "2004-06-09",
        dateRange: "09 June 2004",
        category: "Police",
        title: "Police interrogation the evening of the attack",
        docMinute: "23:00",
        content: {
            text: "The first interrogations took place on the same day as the attack. Abdullah Ö. and Atila Ö. were questioned by the police but they were not treated as victims. ‘I had to strip down to my underwear " +
                "and give a saliva sample,’ says Abdullah Ö. ‘I'm not doing that, I'm a victim,’ he said at the time. He is asked to have all his clothes checked for " +
                "traces of explosives. Relatives bring him new clothes to the police headquarters and pick him up.",
            media: { type: "image", url: "https://kommunales-kino-pforzheim.de/wp-content/uploads/2017/01/der_kuafoer-_aus_der_kneupstr-1-e1484305459885.jpg", alt: "Abdullah Ö. and Atila Ö." }
        },
        source: "https://kommunales-kino-pforzheim.de/wp-content/uploads/2017/01/der_kuafoer-_aus_der_kneupstr-1-e1484305459885.jpg",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",

    },
    {
        date: "2006-04-05",
        category: "Police",
        title: "Police interrigate victims again",
        docMinute: "52:00",
        content: {
            text: "Both Yildirim Brothers and their wives are ivited to the police station under false pretences to then be interrogated for seven hours in separate rooms. " +
                "Sometimes with three or four police officers accusing them simultaneously while trying to play them against each other" ,
            media: { type: "image", url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Polizei-kalk.jpg", alt: "Police station Kalk, Cologne" }
        },
        source: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Polizei-kalk.jpg",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",

    },
    {
        date: "2004-08-01",
        category: "Police",
        dateRange: "Sometime after the attack within the first year",
        title: "Police introduce undercover agents to Keupstraße",
        docMinute: "52:00",
        content: {
            text: "Undercover operative VE-1 was deployed in Keupstraße in a commercial capacity, with the objective of establishing contact with local " +
                "business owners. As cultivating the necessary trust proved difficult, a second undercover operative of Turkish descent, VE-2, was introduced" +
                " in September to assist in this endeavour. Both operatives developed close contact with the local business community, with particular focus " +
                "placed on establishing a relationship with Özan. VE-1 feigned interest in acquiring the business and entered into sale negotiations under this" +
                " pretence." ,
            media: { type: "image", url: "https://assets.deutschlandfunk.de/FILE_789d17e4de94c8589bb31995de3f99ec/original.jpg?t=1597563860209", alt: "The hair salon" }
        },
        source: "https://assets.deutschlandfunk.de/FILE_789d17e4de94c8589bb31995de3f99ec/original.jpg?t=1597563860209",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",

    },
    {
        date: "2015-01-01",
        dateRange: "sometime between 2014–2015",
        category: "Police",
        title: "Former Head of Police denies knowing of any mistakes during the investigation",
        docMinute: "37:00",
        content: {
            text: "Klaus Steffen, Chief of Police in Cologne from 1999 to 2011, stated that even as late as 2015 he was unable to assess whether procedural" +
                " errors had occurred during the investigation. He deflected all responsibility, asserting that he had no direct oversight of the seven-year-long investigative proceedings.r" ,
            media: { type: "image", url: "https://www.ruhrnachrichten.de/wp-content/uploads/2024/11/22/20/630_0900_4273851_6433189.jpg", alt: "Klaus Steffen" }
        },
        source: "https://www.ruhrnachrichten.de/wp-content/uploads/2024/11/22/20/630_0900_4273851_6433189.jpg",
        factSource: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",

    },

    {
        date: "1998-01-01",
        category: "NSU",
        title: "NSU Group forms",
        content: {
            text: "The right-wing extremist group 'NSU' (National Socialist Underground) is formed by Uwe Mundlos, Uwe Böhnhardt and Beate Zschäpe. The group is responsible for a series of murders, bombings, and robberies in Germany between 2000 and 2011.",
            media: { type: "image", url: "https://media.news.de/images/856435285/images/94/1c/7ca4fc13bb277f0969f6b3052926/nopic/no_pic/1200/675/1/1/38/-/823/463/-/-/fahndungsbilder-beate-zschaepe-uwe-boehnhardt-uwe-mundlos_856435285_1200x675_6bbed198e9ce2258f7a14cef421b0d27.jpg", alt: "NSU members" }
        },
        source: "https://media.news.de/images/856435285/images/94/1c/7ca4fc13bb277f0969f6b3052926/nopic/no_pic/1200/675/1/1/38/-/823/463/-/-/fahndungsbilder-beate-zschaepe-uwe-boehnhardt-uwe-mundlos_856435285_1200x675_6bbed198e9ce2258f7a14cef421b0d27.jpg",
        factSource: "https://www.bpb.de/themen/rechtsextremismus/dossier-rechtsextremismus/500799/nationalsozialistischer-untergrund-nsu/",
        connections: [
            { to: "Nail Bomb Attack", style: "solid" }

        ]
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
            { to: "Nail Bomb Attack", style: "dotted" }

        ]
    },
    {
        date: "2011-11-04",
        category: "NSU",
        title: "NSU self-exposure",
        content: {
            text: "When police approached a motorhome in Eisenach on 4 November 2011, two shots were fired inside the vehicle before it caught fire. Police found the bodies of Uwe Mundlos and Uwe Böhnhardt inside. That same day in Zwickau, Beate Zschäpe set fire to the apartment the three had secretly shared, presumably to destroy evidence, and police began searching for her.",
            media: { type: "image", url: "https://cdn.prod.www.spiegel.de/images/b433dcbd-0001-0004-0000-000000757436_w640_r1.5399422521655437_fpx32.44_fpy49.96.jpg", alt: "Burning vehicle" }
        },
        source: "https://cdn.prod.www.spiegel.de/images/b433dcbd-0001-0004-0000-000000757436_w640_r1.5399422521655437_fpx32.44_fpy49.96.jpg",
        factSource: "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/343019/4-november-2011-aufdeckung-des-nsu/",
        connections: [
            { to: "File Destruction", style: "solid" },
            { to: "Nail Bomb Attack", style: "dotted" }
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
            cx: x, cy: y, r: 15,
            fill: color,
            stroke: 'white',
            'stroke-width': 1,
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
  ${item.docMinute ? `
  <tr>
    <td class="source-cell" colspan="4">
      Documentary timestamp: ${item.docMinute}
    </td>
  </tr>` : ''}
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