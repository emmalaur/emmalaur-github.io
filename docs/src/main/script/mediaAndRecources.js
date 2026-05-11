// ── DATA ──────────────────────────────────────────────────────────────────────
let images = [

        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ088T8eOprVaBj7gYR6N1yxsWD3rZP6up5vw&s",
            title: "Before the bomb",
            caption: "NSU Member on his way to place bomb in front of Schanzenstraße 22.",
            source: "https://www.deutschlandfunk.de/09-06-2004-nagelbombenanschlag-des-nsu-in-der-koelner-keupstrasse-dlf-8f2fe448-100.html",
            date: "09.06.2004"
        },
        {
            url: "https://media.news.de/images/856435285/images/94/1c/7ca4fc13bb277f0969f6b3052926/nopic/no_pic/1200/675/1/1/38/-/823/463/-/-/fahndungsbilder-beate-zschaepe-uwe-boehnhardt-uwe-mundlos_856435285_1200x675_6bbed198e9ce2258f7a14cef421b0d27.jpg",
            title: "NSU Members — Böhnhardt, Mundlos and Zschäpe",
            caption: "Photographs of Beate Zschäpe, Uwe Böhnhardt and Uwe Mundlos, the three core members of the NSU.",
            source: "https://www.bpb.de/themen/rechtsextremismus/dossier-rechtsextremismus/500799/nationalsozialistischer-untergrund-nsu/",
            date: "1998–2011"
        },
        {
            url: "https://cdn.prod.www.spiegel.de/images/b433dcbd-0001-0004-0000-000000757436_w640_r1.5399422521655437_fpx32.44_fpy49.96.jpg",
            title: "NSU Self-Exposure — Burning Vehicle in Eisenach",
            caption: "The motorhome in which Uwe Mundlos and Uwe Böhnhardt were found dead on 4 November 2011.",
            source: "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/343019/4-november-2011-aufdeckung-des-nsu/",
            date: "04.11.2011"
        },
        {
            url: "https://img.zeit.de/2019/33/datenvernichtung-akten-schreddern/wide__1280x720",
            title: "File Destruction — this image is symmbolic",
            caption: "An employee of the Verfassungsschutz illegally destroyed files relating to the NSU investigation shortly after the group's exposure.",
            source: "https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2015/50_151112/index.php",
            date: "11.11.2011"
        },
        {
            url: "https://www.bundestag.de/resource/image/242128/3x2/475/316/c5366bd0dbb7534a077d3ea0043f40ad/804761710A863DF58B164E62A9B1EA4A/alterspraesidenten_11_otto_schily_bild.jpg",
            title: "Otto Schily — Former Federal Minister of the Interior",
            caption: "Otto Schily publicly suspected gang crime within the community the day after the attack.",
            source: "https://podcasts.apple.com/de/podcast/nsu-terror-mitten-in-deutschland/id1550077464?l=en-GB&i=1000558146771",
            date: "10.06.2004"
        },
        {
            url: "https://rp-online.de/imgs/32/1/2/0/7/9/4/3/5/tok_7f01c6b5ced07152256ba84f353638cf/w765_h429_x470_y264_2824fd3aae2b0662.jpg",
            title: "Joachim Gauck Visits Kuaför Özdemir",
            caption: "The then-president visited the hair salon on Keupstraße at the 10th anniversary of the attack in 2014.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "09.06.2014"
        },
        {
            url: "https://taz.de/picture/7048376/1200/Screenshot-2024-06-07-at-12-26-19-5-2023-Ulf-Aminde-1---5-2023-Ulf-Aminde-1.pdf-1.png",
            title: "Memorial Design by Ulf Aminde",
            caption: "The winning memorial design selected in November 2016, intended to remember both NSU bombings in Cologne. As of February 2026, it remains unbuilt.",
            source: "https://www.deutschlandfunkkultur.de/15-jahre-nach-dem-nsu-nagelbombenanschlag-noch-immer-kein-100.html",
            date: "November 2016"
        },
        {
            url: "https://taz.de/picture/1370991/1200/290716Keupstrasse.jpeg",
            title: "Keupstraße — Control by the Tax and Finance Office",
            caption: "The Tax and Finance Office issued disproportionate fines to shop owners on Keupstraße between 2004 and 2011.",
            source: "https://podcasts.apple.com/de/podcast/true-crime-k%C3%B6ln/id1649776242?l=en-GB&i=1000658236604",
            date: "2004–2011"
        },
        {
            url: "https://www.historische-magazine.de/wp-content/uploads/2018/05/Bild_Logo-1024x828.jpg",
            title: "Biased Media Reporting - this image is symmbolic",
            caption: "Media headlines framed the attack as gang crime, leading to the bullying of Abdullah Ö.'s ten-year-old daughter at school.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "2004–2011"
        },
        {
            url: "https://cdn.prod.www.spiegel.de/images/bd86fa61-0001-0004-0000-000000282364_w488_r1.3364485981308412_fpx53.85_fpy50.jpg",
            title: "Media Headlines — 'Döner Murders'",
            caption: "Terms such as 'Turkish mafia', 'drug war' and the derogatory 'Döner murders' circulated in the press for years following the attack.",
            source: "https://podcasts.apple.com/de/podcast/wdr-zeitzeichen/id206817194?l=en-GB&i=1000658283150",
            date: "2004–2011"
        },
        {
            url: "https://www.cinestar.de/media/cache/web_xl/media/filmbilder/d/der-kuafoer-aus-der-keupstrasse/16020290.JPG",
            title: "Previous Profiling of the Keupstraße Community",
            caption: "Police had repeatedly profiled visitors to the hair salon as belonging to the Turkish doorman scene based on their appearance. This was before the terror-attack.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "Years leading up to 2004"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQJgZP5kxtuMYJTxe5ujJQvHBdpBCNjbhGA&s",
            title: "Missed Opportunities to Catch the NSU",
            caption: "In 1998 and again in 2004, investigators failed to follow leads that would have identified the NSU before further attacks occurred.",
            source: "https://www.bundestag.de/webarchiv/textarchiv/2014/kw45_ak_nsu-338428",
            date: "1998 & 2004"
        },
        {
            url: "https://img.zeit.de/gesellschaft/zeitgeschehen/2014-06/hasan-yildirim/hasan-yildirim-540x304.jpg/imagegroup/wide__822x462",
            title: "Hasan Yildirim",
            caption: "The brother of the hair salon owner was placed under a police movement profile when he relocated his workplace between.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "2005–2008"
        },
        {
            url: "https://kommunales-kino-pforzheim.de/wp-content/uploads/2017/01/der_kuafoer-_aus_der_kneupstr-1-e1484305459885.jpg",
            title: "Abdullah Ö. and Atila Ö.",
            caption: "On the evening of the attack, both men were taken to police headquarters and subjected to interrogation rather than treated as victims.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "Not fully clear"
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Polizei-kalk.jpg",
            title: "Police Station Kalk, Cologne",
            caption: "The Yildirim brothers and their wives were interrogated here for seven hours under false pretences in April 2006.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "05.04.2006"
        },
        {
            url: "https://assets.deutschlandfunk.de/FILE_789d17e4de94c8589bb31995de3f99ec/original.jpg?t=1597563860209",
            title: "The Hair Salon — Undercover Agents Deployed",
            caption: "Undercover operatives VE-1 and VE-2 were deployed in Keupstraße to infiltrate the local business community under false commercial pretences.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "2004– unclear"
        },
        {
            url: "https://gw.infomigrants.net/media/resize/my_image_big/599983473a685f732a273067fad8e8dc6198662f.jpg",
            title: "Ali Demir — Witness Questioned Nine Years Later",
            caption: "Cologne businessman Ali Demir reported seeing two armed men near the attack site in 2004 but was not questioned as a witness until January 2013.",
            source: "https://www1.wdr.de/archiv/am-rechten-rand/keupstrassekoeln105.html",
            date: "January 2013"
        },
        {
            url: "https://www.ruhrnachrichten.de/wp-content/uploads/2024/11/22/20/630_0900_4273851_6433189.jpg",
            title: "Klaus Steffen — Former Chief of Police, Cologne",
            caption: "Klaus Steffen, Chief of Police from 1999 to 2011, stated in 2015 that he was unable to assess whether procedural errors had occurred during the investigation.",
            source: "https://www.bpb.de/mediathek/video/548820/der-kuafoer-aus-der-keupstrasse/",
            date: "2014–2015"
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