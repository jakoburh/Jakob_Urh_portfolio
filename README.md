# Jakob Urh Veler — Interactive Web Portfolio

A personal web portfolio built from scratch using **HTML, CSS and JavaScript**.

The project began as an attempt to create something more expressive than a conventional online CV.

Instead of presenting professional information on a single static page, the website is designed around two sides of the same person:

- a **professional side** containing projects, education, work experience and recommendations;
- a **personal side** leading into `break_down`, an interactive post-apocalyptic branching dialogue exploring values, identity and personal experiences.

The two sides are connected through a custom **yin-yang landing page**.

The project was designed and coded without a website template or frontend framework.

> **Status:** Functional first version / ongoing redesign and refinement.

---

# Concept

A conventional CV is useful because it is concise.

It is also limited.

It can list skills, education and work experience, but it gives relatively little space to show:

- how someone thinks;
- how they learn;
- how their projects developed;
- how different experiences connect;
- or the personality behind the document.

I therefore wanted the web version of my CV to complement rather than simply reproduce the PDF version.

The central idea became:

**professional information should remain easy to access, while visitors who are curious can explore much further.**

This eventually led to a website divided into professional and personal sides.

---

# Landing page

The homepage is built around an interactive yin-yang symbol.

One side represents the **professional portfolio**, while the other represents the **personal side**.

The yin-yang design was chosen because I did not want to separate professional identity and personality as if they belonged to completely different people.

Technical ability, work experience, values, curiosity and personal development all influence each other.

At the same time, visitors should be able to choose how deeply they want to explore.

Someone interested only in my work can go directly to:

- projects;
- education;
- experience;
- recommendations;
- CV;
- GitHub.

Someone who wants to understand the person behind those things can enter the personal side.

---

## Landing-page interaction

The homepage uses HTML and CSS to create several interactive elements.

These include:

- an animated yin-yang symbol;
- expanding yin and yang halves on hover;
- changing background overlays;
- hidden text revealed when hovering;
- a small information card;
- language-selection controls;
- a contextual avatar;
- speech bubbles that react to the part of the page being explored.

The yin and yang sections scale and move in opposite directions when hovered, making the split between the two sides visually more obvious.

The background also changes depending on which side the visitor is exploring.

---

# Professional side

The professional side acts as an expanded version of my CV.

It currently contains:

- projects;
- education;
- professional experience;
- recommendations;
- navigation and contact information.

Rather than reproducing a PDF CV line by line, I wanted each section to take advantage of what a website can do differently.

---

# Projects

The project section contains expandable cards describing my work.

Current projects include:

- interactive web portfolio;
- Data, AI & ML salary analysis;
- World Happiness Report analysis;
- social-media-use analysis;
- additional projects as they are added.

Each project can contain:

- a short description;
- tools used;
- focus areas;
- methodology;
- results;
- supporting files or links.

The project cards use HTML `<details>` elements with JavaScript-controlled opening and closing animations.

---

## Project sorting

Projects can be reordered dynamically.

The current JavaScript supports sorting by:

- newest;
- oldest;
- complexity;
- number of languages/tools used.

Project metadata are stored directly in the HTML using `data-*` attributes.

JavaScript reads these attributes, sorts the cards and reinserts them into the page without requiring a reload.

---

## Project search

I also implemented a project-search system.

Visitors can search for terms such as:

- regression;
- Streamlit;
- Python;
- Excel;
- visualization.

The search system:

1. checks the text of every project;
2. identifies matching projects;
3. automatically opens relevant project details;
4. highlights matching words;
5. scrolls to the first result;
6. reports how many projects contain the searched term.

The highlighting system operates on text nodes rather than replacing HTML directly, reducing the risk of accidentally damaging element attributes or markup.

---

# Contextual avatar

A small avatar accompanies the visitor through the professional page.

The avatar is not a chatbot.

Instead, it contains sets of predefined dialogue associated with different parts of the website.

When the visitor moves between sections, the avatar changes what it talks about.

Current contexts include:

- general navigation;
- projects;
- education;
- work experience;
- recommendations;
- header/navigation.

For example, while the visitor is exploring projects, the avatar comments on my approach to learning through experimentation and why older projects remain visible.

When the visitor moves to education, the dialogue changes to educational experiences and lessons learned there.

---

## Keyboard interaction

The avatar dialogue can be navigated using:

- `A` — previous line;
- `D` — next line.

The dialogue loops when the beginning or end of the current set is reached.

Keyboard shortcuts are disabled while the visitor is typing inside an input or editable field so that they do not interfere with normal text entry.

The avatar itself can also be minimized by clicking it.

---

# Recommendations as a newspaper

I did not want recommendation letters to appear as another plain block of text.

Instead, I experimented with presenting them as a fictional old-style newspaper article titled:

**In Their Words**

The section uses:

- serif typography;
- pull quotes;
- large opening letters;
- asymmetric image-and-text layouts;
- article-style headlines;
- thin divider lines;
- excerpts from professional recommendations.

This section currently includes recommendations from previous employers and can be expanded as additional references are added.

The design is intentionally different from the rest of the professional page because the content is no longer written by me.

It represents how other people describe working with me.

---

# Education

The education section presents both qualifications and the competencies developed through them.

It currently includes:

### BSc Biochemistry  
University of Ljubljana, Faculty of Chemistry and Chemical Technology

Topics and competencies include:

- biochemical and molecular-biological problem solving;
- laboratory work;
- statistical and computational analysis;
- bioinformatics;
- interpretation of scientific results;
- independent learning;
- teamwork;
- research responsibility.

### Pharmaceutical Technician  
Gymnasium and VET School for Chemistry and Pharmacy Ruše

The section includes experience related to:

- pharmacology;
- pharmaceutical products;
- inventory;
- laboratory and pharmacy practice;
- patient/customer communication.

---

# Work experience

The professional side also summarizes work outside academia.

Current areas include:

- hospitality;
- customer service;
- home care;
- pharmacy internships;
- reception/security;
- other practical work experience.

I deliberately included these experiences because my professional development has not taken place only through university.

Jobs involving customers, patients, guests and colleagues helped develop skills that are difficult to demonstrate through technical projects alone:

- communication;
- reliability;
- adaptability;
- conflict resolution;
- independence;
- prioritization;
- working under pressure.

---

# Personal side

The personal half of the website is designed to lead into a separate project called **`break_down`**.

`break_down` is an interactive branching narrative set inside a hand-drawn post-apocalyptic environment.

Instead of reading another biography, the visitor communicates with a fictionalized version of me through an old CRT television.

The visitor can choose what to ask and how to respond.

Major topics include:

- values;
- family;
- Slovenia;
- relationships;
- identity;
- personal development;
- difficult experiences.

The project combines:

- creative writing;
- JavaScript;
- JSON;
- HTML/CSS;
- digital illustration;
- branching narrative design.

Keeping `break_down` as a separate repository allows the web portfolio to remain relatively professional and navigable while still giving interested visitors access to a much more personal project.

---

# Tools

## Frontend

- HTML
- CSS
- JavaScript

## Layout and interface

- CSS Grid
- Flexbox
- SVG
- responsive sizing with `clamp()`
- CSS transitions
- hover states
- custom layouts
- semantic HTML elements

## JavaScript

The project uses JavaScript for:

- contextual avatar dialogue;
- keyboard controls;
- smooth navigation;
- collapsible interface elements;
- project sorting;
- project searching;
- search highlighting;
- animated `<details>` elements.

No frontend framework was used.

---

# Design approach

I deliberately avoided using a premade portfolio template.

This made development slower, but it forced me to think about the interface myself.

I had to decide:

- how information should be organized;
- what deserved immediate visibility;
- what could remain hidden until requested;
- how professional and personal information should be separated;
- when interaction improves usability;
- and when interaction simply becomes unnecessary decoration.

The current version is therefore also a record of how I learned frontend development.

---

# Progressive disclosure

One principle used throughout the site is **progressive disclosure**.

Not every piece of information needs to be visible simultaneously.

Examples include:

- project cards expanding only when selected;
- avatar dialogue appearing contextually;
- the header being collapsible;
- additional information appearing on hover;
- professional and personal content being separated at the landing page.

This keeps the site from becoming one enormous wall of text while still allowing visitors to explore more deeply if they want to.

---

# What I learned

This was my first larger web-development project and taught me substantially more than simply writing HTML tags.

## HTML structure

I learned how to divide a larger page into meaningful sections and reusable components.

These included:

- navigation;
- project cards;
- education;
- experience;
- references;
- interactive elements.

---

## CSS layout

The website became an exercise in:

- Grid;
- Flexbox;
- positioning;
- responsive sizing;
- transitions;
- pseudo-elements;
- SVG manipulation;
- typography;
- custom visual layouts.

The yin-yang landing page in particular required experimenting with SVG transformations and hover states.

---

## JavaScript and DOM manipulation

The professional page helped me understand how JavaScript interacts with HTML.

I used event listeners and DOM manipulation to create:

- section-sensitive dialogue;
- keyboard interaction;
- project sorting;
- search;
- highlighting;
- expandable content;
- animated interface changes.

---

## Separating behaviour into functions

As the JavaScript became larger, repeated operations were moved into functions such as:

- displaying dialogue;
- cycling dialogue;
- searching projects;
- opening project details;
- closing project details;
- sorting cards.

This helped me understand why even relatively small websites benefit from separating repeated behaviour into reusable pieces.

---

## Designing for different visitors

One of the most useful lessons was realizing that visitors do not all want the same thing.

A recruiter may want:

**CV → projects → GitHub → contact**

Someone evaluating technical work may want:

**project → methodology → source code**

Someone simply curious about me may want:

**personal side → `break_down`**

The website therefore tries to support different levels of engagement rather than forcing everyone through the same experience.

---

# Current limitations

The project is still an early frontend project and several parts need improvement.

## Content requires updating

Some information in the current professional page was written before I graduated and therefore needs to be synchronized with my current CV.

Project descriptions, employment dates and education information also require periodic manual updates.

---

## Placeholder links

Some links in the current version still use placeholder URLs.

These need to be replaced with the final:

- GitHub repositories;
- downloadable CV;
- LinkedIn profile;
- project files;
- professional page;
- `break_down` personal page.

---

## Language system

The landing page currently displays English and Slovenian language controls, but the full translation system has not yet been implemented.

---

## Frontend-only architecture

The website is entirely frontend-based.

There is currently:

- no backend;
- no database;
- no content-management system.

Updating information therefore requires editing the source files manually.

---

## Responsiveness

Responsive sizing is already used throughout the CSS, but the website still requires additional testing across:

- phones;
- tablets;
- laptops;
- ultrawide screens;
- different browsers.

The more experimental layouts, particularly the avatar and newspaper-style references, may require additional mobile-specific styling.

---

## Accessibility

The site still needs more work regarding:

- keyboard navigation beyond current shortcuts;
- screen-reader behaviour;
- focus indicators;
- colour contrast;
- semantic labels;
- reduced-motion preferences.

Visual experimentation came before accessibility in the first version, so this is an area for future improvement.

---

## Code organization

The first version grew organically while I was learning.

As a result:

- some CSS rules are repetitive;
- some JavaScript could be separated into smaller modules;
- naming is not always consistent;
- comments sometimes function as personal learning notes rather than production documentation.

I have intentionally kept much of this visible because the repository also documents my learning progression.

---

# Possible future improvements

Possible future development includes:

- redesigning the professional side into a book-inspired interface;
- preserving fast navigation while introducing stronger visual storytelling;
- connecting all project cards directly to their GitHub repositories;
- linking the personal side to `break_down`;
- updating all content to match my current CV;
- replacing placeholder links;
- completing English/Slovenian language switching;
- improving mobile responsiveness;
- improving accessibility;
- adding reduced-motion support;
- refactoring CSS;
- splitting JavaScript into smaller modules;
- improving semantic HTML;
- expanding recommendation content;
- adding my thesis and newer projects;
- improving project filtering;
- deploying the finished portfolio online.

---

# Possible book redesign

One idea for a later version is to redesign the professional side around the visual language of a book.

Sections could become chapters such as:

1. About
2. Projects
3. Education
4. Experience
5. Recommendations
6. Contact

The purpose would not be to simulate a physical book literally.

Navigation should remain fast and obvious.

Instead, the book concept could provide a more coherent visual identity using:

- chapter headings;
- page-like layouts;
- serif typography;
- illustrations;
- page numbering;
- editorial composition.

The existing newspaper-style recommendation section already experiments with this kind of visual storytelling.

---

# Why I keep this project

This project is not primarily evidence that I am a professional frontend developer.

It documents how I taught myself the fundamentals of building an interactive website.

It required me to combine:

**structure + visual design + interaction + content + usability**

rather than treating HTML, CSS and JavaScript as isolated technologies.

It also connects the rest of my portfolio.

My scientific and data-analysis projects show what I have worked on.

My standard CV summarizes my background.

My recommendation letters show how other people experienced working with me.

`break_down` explores the person behind those things.

The web portfolio is the interface that brings them together.

Like several of my early projects, it is intentionally preserved as part of my learning progression rather than rewritten to pretend that I knew everything from the beginning.
