// --- Header toggle (simple style) ---
const header = document.querySelector('.header');
const toggleBtn = document.getElementById('toggle-header');

if (toggleBtn) { //if toggleBtn == True, if it exists continue
  toggleBtn.style.cursor = 'pointer';
  if (header) {
    toggleBtn.addEventListener('click', () => { // () => is shortened form for an anonymous functions: its a function without arguments () and without name                                           
      header.classList.toggle('collapsed');  // instead of writting function () {whatever this function does} you write it as ()=> {whatever this function does}
      if (header.classList.contains('collapsed')) { //anonymous functions are used once in the code, not worthy of a name
        toggleBtn.textContent = 'expand header';
      } else {
        toggleBtn.textContent = 'minimize header';
      }
    });
  }
}



document.querySelectorAll('.index a[data-scroll]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    // base position of the element
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;

    // adjust offset depending on header state
    const isCollapsed = header.classList.contains('collapsed');
    const offset = isCollapsed ? 2 * window.innerHeight / 100   // ~8vh
                                : 25 * window.innerHeight / 100; // ~25vh

    window.scrollTo({
      top: absoluteTop - offset,
      behavior: 'smooth'
    });
  });
});










// --- Avatar + dialogues with context + A/D keys ---
const avatar = document.querySelector('.avatar');
const bubble = document.querySelector('.bubble'); // uses a child with class="bubble"

const dialogues = { //dictionary/object
  default: [
    "Hi! I’m Jakob’s avatar, here to share quick tips and insights. Use A or D on your keyboard to cycle through my lines.",
    "I’m a simpler version compared to my personal site, but enough to guide you through this page.",
     "You can minimize the header for more space. Clicking on me also hides or shows my dialogue."
  ],
  projects: [
    "In today’s world of endless information, I wanted to learn how to draw my own conclusions from data.",
    "I grow most by doing and experimenting. Each new project improves both general skills (presentation, reporting, problem-solving) and specialized skills (programming languages).",
    "Older projects may look rough, but they show my progression clearly—and help you see how far I’ve come.",
    "Between May 2025 and September 2026 I was balancing university, jobs, family, and self-study. Progress was slower, but it taught me consistency and resilience."
  ],
  education: [
    "In high school I achieved top grades and ranked well in national competitions in chemistry, math, and history. My theoretical knowledge was strong, but my practical skills were limited.",
    "University—one of the toughest programs in Slovenia—taught me that theory without practice has little value.",
    "I’m the first in my family to pursue higher education while supporting myself.",
    "I took an extra year to finish my bachelor’s degree. That time allowed me to work, travel, and develop practical skills beyond academics."
  ],
  work: [
    "Early on, I realized that knowledge alone wasn’t enough—I needed to grow in how I interact with people. So I took jobs that challenged my communication skills.",
    "These varied experiences made me more adaptable and well-rounded. They strengthened not only my work ethic but also my ability to connect with others.",
    "As the saying goes: “A jack of all trades is a master of none, but oftentimes better than a master of one.” I aim to bring both character and competence to everything I do."
  ],
  references: [
    "After the pandemic, I noticed social trust is lower than before. Written references help bridge that gap, and I’ll keep gathering them to build credibility. ",
    "To make them more engaging, I’ve presented my references in the form of an old-style fictional newspaper.",
    "Clicking on me also hides or shows my dialogue for more convenient reference viewing."],
  header: [
    "In a hurry? You can download my CV and check my GitHub for a direct overview.",
    "Use the underlined purple text for quick navigation.",
    "The brief description at the top sums up my skills and experiences. I may be young, but I’ve already built a wide range of knowledge and projects."
  ]
};

let currentContext = 'default'; 
let currentIndex = 0; //index in the dictionary/object

function currentLines() {
  return dialogues[currentContext] || dialogues.default; // || is a logical OR operator.  Find currentContext in the dictionary
                                                        //if you find it (it exists), return it. If not return dialogues.default
}                 //dialogues[default] and dialogues.default are almost the same, better with []

function showLine() {
  if (!bubble) return; //! is a logical NOT.If bubble doesnt exist stop the function
  const lines = currentLines();
  // Guard in case index drifts
  if (currentIndex < 0) { 
    currentIndex = 0;}
  if (currentIndex >= lines.length) {
    currentIndex = 0;} //if the index is negative or bigger than the number of dialogue lines, then set it to 0 =>cycling through the lines
  bubble.textContent = lines[currentIndex];
}

function nextLine() {
  const lines = currentLines(); //in the functions nextLine, prevLIne, showLIne there is constant defined as Lines
  currentIndex = currentIndex + 1; //constants cant be overwritten. In the functions these constants are local and
  if (currentIndex >= lines.length) currentIndex = 0;//are forgotten after the function ends
  showLine();
}

function prevLine() {
  const lines = currentLines();
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) currentIndex = lines.length - 1;//like in all the previous function we change the negative index into the one we meant
  showLine();
}
// i created functions for indexing right lines and now follows binding keys to these functions
document.addEventListener('keydown', (e) => { //another anonymous function with "e" argument
  const element = document.activeElement; //adds the "listener" which keeps track of users actions in the website
  if (element && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.isContentEditable)) {
    return;
  }
  if (e.repeat) return;

  const key = e.key.toLowerCase();
  if (key === 'd') nextLine();
  if (key === 'a') prevLine();
});

showLine();

if (header) {
  header.addEventListener('mouseenter', () => {
    currentContext = 'header';
    currentIndex = 0;
    showLine();
  });
  header.addEventListener('mouseleave', () => {
    currentContext = 'default';
    currentIndex = 0;
    showLine();
  });
}

const projects = document.getElementById('projects'); //defines what each element is
if (projects) {
  projects.addEventListener('mouseenter', () => { //when you enter the element with your mouse
    currentContext = 'projects';                //it changes variable currentContext (the key in dictionary) to the hovered element
    currentIndex = 0;                           //sets starting index to 0
    showLine();
  });
  projects.addEventListener('mouseleave', () => { //when the mouse leaves the element area, it reverts back to default
    currentContext = 'default';
    currentIndex = 0;
    showLine();
  });
}
const education = document.getElementById('education');
if (education) {
  education.addEventListener('mouseenter', () => {
    currentContext = 'education';
    currentIndex = 0;
    showLine();
  });
  education.addEventListener('mouseleave', () => {
    currentContext = 'default';
    currentIndex = 0;
    showLine();
  });
}
const work = document.getElementById('work');
if (work) {
  work.addEventListener('mouseenter', () => {
    currentContext = 'work';
    currentIndex = 0;
    showLine();
  });
  work.addEventListener('mouseleave', () => {
    currentContext = 'default';
    currentIndex = 0;
    showLine();
  });
}
const references = document.getElementById('references');
if (references) {
  references.addEventListener('mouseenter', () => {
    currentContext = 'references';
    currentIndex = 0;
    showLine();
  });
  references.addEventListener('mouseleave', () => {
    currentContext = 'default';
    currentIndex = 0;
    showLine();
  });
}


const a = document.getElementById("A");
const d = document.getElementById("D");

if (avatar) {
  avatar.style.cursor = 'pointer';

  // Extracted toggle into a reusable function
  const toggle = () => {
    avatar.classList.toggle('collapsed');
    bubble?.classList.toggle('collapsed');
    a?.classList.toggle('collapsed');
    d?.classList.toggle('collapsed');
  };

  // Only toggle when the avatar itself is clicked
  avatar.addEventListener('click', (e) => {
    if (e.target.closest('.bubble') || e.target === a || e.target === d) return;
    toggle();
  });

  // Explicitly stop bubbling from children
  bubble?.addEventListener('click', (e) => e.stopPropagation());
  a?.addEventListener('click', (e) => e.stopPropagation());
  d?.addEventListener('click', (e) => e.stopPropagation());
}



//sort by function
(function initProjectSorting(){
  const projectsSection = document.getElementById('projects');
  const sortSelect = document.getElementById('project-sort');
  if (!projectsSection || !sortSelect) return;

  const container = projectsSection; // cards live directly in #projects
  const getCards = () => Array.from(container.querySelectorAll('.project-card'));

  function getDateValue(card){
    // Prefer data-date (YYYY-MM[-DD]), fallback: parse from details text if needed
    const d = card.getAttribute('data-date');
    if (d) return new Date(d).getTime();
    const txt = card.textContent.toLowerCase();
    // ultra-simple fallback (english months)
    const m = ["january","february","march","april","may","june",
               "july","august","september","october","november","december"];
    const found = m.findIndex(mon => txt.includes(mon));
    const year = (txt.match(/\b(20\d{2})\b/)||[])[1];
    if (found>=0 && year) return new Date(parseInt(year,10), found, 1).getTime();
    return 0;
  }

  function getComplexity(card){
    const c = card.getAttribute('data-complexity');
    return c ? parseInt(c,10) : 0;
  }

  function getLangCount(card){
    const explicit = card.getAttribute('data-langs');
    if (explicit) return parseInt(explicit,10);
    // else count icons in the summary title
    const h3 = card.querySelector('summary h3');
    return h3 ? h3.querySelectorAll('img.icon').length : 0;
  }

 function closeAllDetails(){
  cards().forEach(c => {
    const det = c.querySelector('details');
    if (det) (window.__closeDetails ? window.__closeDetails(det) : det.open = false);
  });
}

  function sortAndRender(mode){
    const cards = getCards();
    const keyed = cards.map(c => ({
      el: c,
      date: getDateValue(c),
      complexity: getComplexity(c),
      langs: getLangCount(c),
      idx: cards.indexOf(c) // stable fallback
    }));

    keyed.sort((a,b)=>{
      switch(mode){
        case 'newest':     return b.date - a.date || a.idx - b.idx;
        case 'oldest':     return a.date - b.date || a.idx - b.idx;
        case 'complexity': return b.complexity - a.complexity || a.idx - b.idx;
        case 'languages':  return b.langs - a.langs || a.idx - b.idx;
        default:           return a.idx - b.idx;
      }
    });

    // Reinsert in new order
    const marker = document.createDocumentFragment();
    keyed.forEach(k => marker.appendChild(k.el));
    container.appendChild(marker);
  }

  // initial bind
  sortSelect.addEventListener('change', ()=>{
    closeAllDetails();
    sortAndRender(sortSelect.value);
  });

  // Optional: default sort on load
  // sortAndRender(sortSelect.value);
})();

//search for function

// ===== Project Search (safe, attribute-proof) =====
(function initProjectSearch(){
  const header = document.querySelector('.header');
  const projectsSection = document.getElementById('projects');
  const input = document.getElementById('project-search');
  const btn = document.getElementById('project-search-btn');
  const clearBtn = document.getElementById('project-search-clear');
  const status = document.getElementById('project-search-status');

  if (!projectsSection || !input || !btn || !status) return;

  const cards = () => Array.from(projectsSection.querySelectorAll('.project-card'));
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function clearHighlights(){
    cards().forEach(card => {
      card.querySelectorAll('mark[data-mark]').forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize(); // merge adjacent text nodes
      });
    });
  }

  // Highlight only TEXT nodes (avoid touching attributes/HTML)
  function highlightIn(container, query){
    if (!query) return;
    const rx = new RegExp(escapeRegExp(query), 'gi');

    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          if (node.parentElement && node.parentElement.closest('mark[data-mark]')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(textNode => {
      const text = textNode.nodeValue;
      if (!rx.test(text)) return;
      const frag = document.createDocumentFragment();
      let last = 0;
      text.replace(rx, (m, idx) => {
        if (idx > last) frag.appendChild(document.createTextNode(text.slice(last, idx)));
        const mark = document.createElement('mark');
        mark.setAttribute('data-mark', '');
        mark.textContent = m;
        frag.appendChild(mark);
        last = idx + m.length;
        return m;
      });
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  function adjustScrollTo(el){
    const rect = el.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const headerH = header ? header.offsetHeight : 0;
    window.scrollTo({ top: absoluteTop - headerH - 10, behavior: 'smooth' });
  }

  function runSearch(){
    const q = input.value.trim();
    clearHighlights();

    // Close all details before searching to avoid jumpy layout; open only where needed
    cards().forEach(c => {
      const det = c.querySelector('details');
      if (det) det.open = false;
    });

    if (!q){
      status.textContent = '';
      return;
    }

    const hits = [];

    cards().forEach(card => {
      const summary = card.querySelector('summary');
      // inner "details" section (your content) or fallback to the <details> element
      const detailsContent = card.querySelector('details .details') || card.querySelector('details');

      // quick text check for performance
      const found = card.textContent.toLowerCase().includes(q.toLowerCase());
      if (!found) return;

      const hitInDetails = detailsContent && detailsContent.textContent.toLowerCase().includes(q.toLowerCase());
if (hitInDetails) {
  const host = detailsContent.closest('details');
  if (host) {
    if (window.__openDetails) window.__openDetails(host);
    else host.open = true;
  }
}

      // highlight visible parts
      if (summary) highlightIn(summary, q);
      if (detailsContent) highlightIn(detailsContent, q);

      hits.push(card);
    });

    if (hits.length === 0){
      status.textContent = 'Word not found';
      return;
    }

    status.textContent = `Found in ${hits.length} project${hits.length>1?'s':''}`;
    adjustScrollTo(hits[0]);
  }

  btn.addEventListener('click', runSearch);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); runSearch(); }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    status.textContent = '';
    clearHighlights();
    // Optional: close details again
    // cards().forEach(c => { const det = c.querySelector('details'); if (det) det.open = false; });
  });
})();






(function smoothDetails(){
  const items = document.querySelectorAll('.project-card details');

  function getContent(dt){ return dt.querySelector('.details') || dt; }

  function animateOpen(dt){
    const content = getContent(dt);
    if (dt.open) {                 // already open: normalize
      content.style.height = 'auto';
      content.style.opacity = '1';
      return;
    }
    dt.open = true;                // render content
    content.style.height = '0px';
    content.style.opacity = '0';
    requestAnimationFrame(() => {
      content.style.height = content.scrollHeight + 'px';
      content.style.opacity = '1';
    });
    const onEnd = (ev) => {
      if (ev.propertyName !== 'height') return;
      content.style.height = 'auto';
      content.removeEventListener('transitionend', onEnd);
    };
    content.addEventListener('transitionend', onEnd);
  }

  function animateClose(dt){
    if (!dt.open) return;
    const content = getContent(dt);
    content.style.height = content.scrollHeight + 'px';
    content.style.opacity = '1';
    void content.offsetHeight; // reflow
    content.style.height = '0px';
    content.style.opacity = '0';
    const onEnd = (ev) => {
      if (ev.propertyName !== 'height') return;
      dt.open = false;
      content.removeEventListener('transitionend', onEnd);
    };
    content.addEventListener('transitionend', onEnd);
  }

  // expose for search module
  window.__openDetails  = animateOpen;
  window.__closeDetails = animateClose;

  // existing init for click-driven behaviour …
  items.forEach(dt => {
    const summary = dt.querySelector('summary');
    const content = getContent(dt);
    if (!dt.open){ content.style.height = '0px'; content.style.opacity = '0'; }
    else { content.style.height = 'auto'; content.style.opacity = '1'; }

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      if (!dt.open) animateOpen(dt); else animateClose(dt);
    });
  });
})();
