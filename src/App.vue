<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import shanghaiImage from '../files/shanghai.png'
import hakoneImage from '../files/hakone.png'
import hujisanImage from '../files/hujisan.png'
import yokohamaImage from '../files/yokohama.png'
import graduationDesignImage from './assets/graduation-design.png'
import meImage from './assets/me.jpg'
import shanghaiNightPortraitImage from './assets/Shanghai.jpg'
import simpleWriteImage from './assets/simple-write.png'
import desktopAnimalsImage from './assets/desktop-animals.png'
import animalsImage from './assets/animals.png'
import fujisanPrintImage from './assets/Fujisan.jpg'
import hakonePrintImage from './assets/Hakone.jpg'
import srResNetImage from './assets/SRResNet.png'
import yokohamaPrintImage from './assets/Yokohama.jpg'

const siteMeta = {
  title: 'Wenbo Zhang',
  subtitle: 'Creative developer and interaction designer shaping playful digital experiences.',
  intro:
    'Designed based on my website:',
  website: 'https://imagexhe.github.io/',
  email: 'zhangwenbo527@gmail.com',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/imageXhe' },
    { label: 'itch.io', href: 'https://xxxhe.itch.io/' },
    { label: 'Email', href: 'mailto:zhangwenbo527@gmail.com' },
  ],
  printLabel: 'Switch to Print Layout',
}

const philosophyBeforeColumnsProjectSlugs = new Set(['graduation-design', 'desktop-animals'])

const aboutIntro = {
  name: 'Wenbo Zhang',
  role: '張 文博 / チョウ ブンハク',
  location: 'Working across playful tools and experimental interfaces.',
  bio: [
    'I like simple and practical products: tools that open quickly, feel clear at first touch, and keep only the functions people truly need. Good design, to me, should stay quiet, useful, and easy to return to every day.',
  ],
  dream: [
    'Traveling around the world',
    'Write a novel',
    'Turn my novel into a game',
  ],
  facts: [
    { label: 'Birthday', value: '2003/05/27' },
    { label: 'Base', value: 'China' },
  ],
  contacts: [
    'Email    / zhangwenbo527@gmail.com',
    'HomePage / https://imagexhe.github.io/',
  ],
  languages: [
    'English  / TOEIC 720',
    'Japanese / JLPT N2 95',
  ],
  education: [
    {
      period: '2020.09 - 2024.06',
      program: 'Computer Science and Technology',
      school: 'Wuhan University of Science and Technology',
    },
  ],
  hobbies: [
    'Travel and Scenery',
    'Reading and writing novels',
    'Cooking and Cuisine',
  ],
}

const aboutPractice = {
  lead:
    'Technical stack, practical strengths, and the kind of delivery thinking that supports the portfolio.',
  paragraphs: [
    'Before becoming a designer, one should first become a user.',
    'Only by personally experiencing every detail of a product, can you truly understand what users need.',
  ],
  skills: [
    'Front-End Development',
    'Back-end development',
    'Interaction Design',
    'Responsive Layout',
  ],
  toolbox: [
    'HTML / CSS',
    'JavaScript',
    'Vue 3',
    'Java',
    'Python',
    'C',
    'MySQL',
    'Photoshop',
  ],
  experience: [
    '2023.09 - 2023.12 / Company: 惟众信（湖北）科技有限公司',
    'Role: Development of internal management web pages and WeChat mini-programs',
  ],
  plan: [
    '4D Gaussian Splatting',
    'Animatable Digital Human',
    'Gaussian Avatar',
  ],
}

const projects = [
  {
    slug: 'graduation-design',
    number: '01',
    title: 'Graduation Design',
    summary:
      'Image super-resolution reconstruction system based on deep learning',
    link: '',
    image: graduationDesignImage,
    printInsetImage: srResNetImage,
    printInsetCaption: 'Fig. Simplified image super-resolution reconstruction process',
    highlights: [
      'Trained X4 and X8 SRResNet models with PyTorch on the DF2K dataset.',
      'Built a Flask and Vue workflow for image upload, reconstruction, preview, and download.',
      'Added PSNR and SSIM comparison against Bicubic, ESPCN, and SRGAN on benchmark datasets.',
    ],
    sections: [
      {
        title: 'Creative Background',
        items: [
          'Developed as a graduation project where interface design, research framing, and communication all needed to live in one artifact.',
        ],
      },
      {
        title: 'System Modules',
        items: [
          'Upload images to OSS, select magnification, run Flask/PyTorch inference, then preview or download results.',
          'Compare PSNR and SSIM against Bicubic, ESPCN, and SRGAN across common benchmark datasets.',
        ],
      },
      {
        title: 'Technical Challenges',
        items: [
          'Integrating trained SRResNet models into a Flask inference service while keeping the front-end flow simple.',
          'Handling upload, OSS storage, tensor conversion, model output, preview URL, and download as one continuous pipeline.',
        ],
      },
      {
        title: 'Limitations',
        items: [
          'The MSE loss used by SRResNet can make high-texture results look overly smooth despite good PSNR and SSIM scores.',
          'Only X4 and X8 reconstruction are implemented, and algorithm comparison is based on metrics rather than same-image outputs.',
        ],
      },
    ],
    duration: '2023.12 - 2024.04',
    philosophy:
      'The thesis frames this project as a complete image super-resolution tool: users upload low-resolution images, choose X4 or X8 reconstruction, run SRResNet through a Flask and PyTorch backend, then preview or download the result from OSS-backed storage.',
    tech: ['PyTorch', 'SRResNet', 'Flask + Vue', 'OSS'],
    metrics: ['Type / Graduation Project', 'Role / Full-Stack + Model training', 'Status / Completed'],
    screenMediaHeight: 'clamp(20rem, 48vh, 35rem)',
    printMediaHeight: '48mm',
    printShellGap: '8mm',
    printContentGap: '6mm',
    mediaNotes: [
      'Upload / X4-X8 reconstruction / preview and download workflow; PSNR + SSIM comparison across five benchmark datasets',
    ],
    extraSections: [
      {
        title: 'Model Design',
        items: [
          'SRResNet combines residual blocks for feature recovery with sub-pixel convolution for learned upscaling.',
          'The models were trained for X4 and X8 reconstruction using DF2K, a combination of DIV2K and Flickr2K.',
        ],
      },
      {
        title: 'Interface Flow',
        items: [
          'Vue and Ant Design Vue handle file selection, batch actions, progress prompts, and result display.',
          'Flask connects the front end to OSS storage, model inference, signed preview URLs, and downloadable outputs.',
        ],
      },
    ],
    printMediaSections: [
      {
        title: 'Core Algorithm',
        items: [
          'SRResNet uses residual blocks for feature extraction and sub-pixel convolution for X4/X8 upscaling.',
          'MSE training gives stable metrics, but can smooth fine texture in perceptual results.',
        ],
      },
    ],
    theme: {
      accent: '#7e8794',
      surface:
        'linear-gradient(180deg, rgba(249, 249, 247, 0.96) 0%, rgba(226, 229, 234, 0.94) 100%)',
      glow: 'rgba(185, 193, 207, 0.36)',
    },
    layout: 'split',
  },
  {
    slug: 'simple-write',
    number: '02',
    title: 'Simple Write',
    summary:
      'Lightweight novel editing and text reading software.',
    link: 'https://github.com/imageXhe/simple_write',
    image: simpleWriteImage,
    highlights: [
      'Supports Markdown editing with live preview, syntax highlighting, outlines, and bidirectional links.',
      'Adds a dedicated txt novel-writing view with annotations, mark highlighting, hidden links, and batch export.',
      'Uses local-first warehouses, named config profiles, multilingual UI, and light, dark, and eye-care themes.',
    ],
    sections: [
      {
        title: 'Creative Background',
        items: [
          'Started from the need for a writing environment that can handle both structured Markdown notes and long-form novel drafts without online dependencies.',
          'I had tried many other note-taking and writing apps, but they all had problems such as too many bloated features, paid access, or large file size. That is why Simple Write was born.',
        ],
      },
      {
        title: 'Purpose',
        items: [
          'Let users download an exe, open a local workspace, and begin writing without complex installation or setup.',
          'Bring note-taking, manuscript drafting, file structure, and link navigation into one software.',
        ],
      },
      {
        title: 'Technical Challenges',
        items: [
          'As an emerging framework, Tauri has a relatively small community, and this was my first time working with both Tauri and Rust, so when problems came up during development I had to search through official documentation and related references.',
          'Fortunately, the official documentation is fairly detailed, and this software does not use much backend logic, so I was still able to complete it smoothly.',
        ],
      },
      {
        title: 'Limitations',
        items: [
          'At present, this software is developed and used only by me, so many practical features may still be missing and unknown bugs may remain.',
          'It currently supports only Windows.',
        ],
      },
    ],
    duration: '2024.08 - 2024.11\n2026.04 - Now',
    philosophy:
      'Simple Write is a lightweight and simple text reader/editor. Its features come entirely from my own needs: it is free, small, easy to install, and easy to use.\n“What suits you is the best.”',
    tech: ['Tauri', 'Vue 3', 'Rust', 'Markdown'],
    metrics: ['Type / Desktop Writing Tool', 'Platform / Windows exe', 'State / Active Repository'],
    screenMediaHeight: 'clamp(7.5rem, 15vh, 11rem)',
    printMediaHeight: '10mm',
    printLayout: 'aside',
    printFooterUnderMedia: true,
    theme: {
      accent: '#f7f3ea',
      surface:
        'linear-gradient(180deg, rgba(26, 27, 31, 0.99) 0%, rgba(7, 8, 10, 0.99) 58%, rgba(0, 0, 0, 1) 100%)',
      glow: 'rgba(96, 109, 126, 0.18)',
      text: '#f6f2e8',
      muted: 'rgba(246, 242, 232, 0.72)',
      line: 'rgba(246, 242, 232, 0.12)',
      tagBackground: 'rgba(246, 242, 232, 0.07)',
    },
    layout: 'stacked',
  },
  {
    slug: 'desktop-animals',
    number: '03',
    title: 'Desktop Animals',
    summary:
      'A Windows cozy idle desktop game.',
    link: 'https://xxxhe.itch.io/desktop-animals',
    image: desktopAnimalsImage,
    highlights: [
      'Builds an idle growth loop around buying animals, collecting heart-bubble bonuses, feeding, unlocking slots, and upgrading through the shop.',
      'Includes 12 animals, hidden variants, slime fusion, dye customization, buildings, items, and 9 switchable background scenes.',
      'Uses Godot with desktop-window behaviors such as always-on-top, click-through mode, position and scale controls, auto-save, and offline earnings.',
    ],
    sections: [
      {
        title: 'Creative Background',
        items: [
          'Sometimes, after studying or working in front of a computer screen for too long, I feel bored, so I play idle games such as Melvor Idle and Chillquarium. One day I suddenly wanted to develop my own idle game, and that is how Desktop Animals was born.',
        ],
      },
      {
        title: 'Purpose',
        items: [
          'Let players relax during work or study by glancing at the animals on their desktop, while continuously earning coins over time and unlocking new animals to create a positive feedback loop.',
        ],
      },
      {
        title: 'Technical Challenges',
        items: [
          'Because this was my first time using Godot and my first time developing a game, many parts of the workflow were unfamiliar. I ran into issues with always-on-top windows and click-through behavior, but solved them with AI-assisted debugging.',
        ],
      },
      {
        title: 'Limitations',
        items: [
          'The game has a fixed native resolution of 1920x1080, and the scaling effect is achieved through a workaround, so bugs may appear on other screens.',
          'It currently supports only Windows.',
        ],
      },
    ],
    duration: '2026.04 - 2026.05',
    philosophy:
      'A cozy, low-pressure desktop idle game. Place cute animals in your farm, let them generate coins over time, and come back anytime to collect rewards, expand your setup, and optimize your growth loop.',
    tech: ['Godot', 'GDScript'],
    metrics: ['Type / Cozy Idle Game', 'Platform / itch.io + Windows', 'State / Released'],
    screenMediaHeight: 'clamp(19rem, 44vh, 32rem)',
    printMediaHeight: '44mm',
    printShellGap: '7.5mm',
    printContentGap: '5.5mm',
    mediaNotes: [
      'AI assisted in Code',
    ],
    mediaCaption: 'All assets comply with copyright licenses.',
    printMediaSections: [
      {
        title: 'Technical Challenges',
        items: [
          'Because this was my first time using Godot and my first time developing a game, many parts of the workflow were unfamiliar. I ran into issues with always-on-top windows and click-through behavior, but solved them with AI-assisted debugging.',
        ],
      },
      {
        title: 'Limitations',
        items: [
          'The game has a fixed native resolution of 1920x1080, and the scaling effect is achieved through a workaround, so bugs may appear on other screens.',
          'It currently supports only Windows.',
        ],
      },
    ],
    theme: {
      accent: '#4f7f9b',
      surface:
        'linear-gradient(180deg, rgba(239, 248, 253, 0.96) 0%, rgba(159, 209, 234, 0.96) 100%)',
      glow: 'rgba(159, 209, 234, 0.42)',
    },
    layout: 'media-right',
  },
]

const layoutMode = ref('screen')
const menuOpen = ref(false)
const activeSection = ref('cover')
const pointer = ref({ x: 50, y: 24, active: false })
const reducedMotion = ref(false)

const projectEntries = projects.map((project) => ({
  id: project.slug,
  label: `${project.number} ${project.title}`,
}))

const menuEntries = computed(() => [
  { id: 'toc-screen', label: 'Contents' },
  { id: 'about-intro', label: 'About Me' },
  { id: 'about-practice', label: 'Skills & Practice' },
  ...projectEntries,
])

const printTocEntries = computed(() => [
  {
    label: 'About Me',
    number: '01',
    description: 'Personal profile, contacts, education, and some others.',
  },
  {
    label: 'Skills & Practice',
    number: '02',
    description: 'Working style, toolset, and experience.',
  },
  ...projects.map((project, index) => ({
    label: `${project.number} ${project.title}`,
    number: String(index + 3).padStart(2, '0'),
    description: project.summary,
  })),
])

const tocScreenEntries = computed(() => [
  {
    id: 'about-intro',
    ...printTocEntries.value[0],
  },
  {
    id: 'about-practice',
    ...printTocEntries.value[1],
  },
  ...projects.map((project, index) => ({
    id: project.slug,
    label: `${project.number} ${project.title}`,
    number: String(index + 3).padStart(2, '0'),
    description: project.summary,
  })),
])

const screenPages = computed(() => [
  { id: 'cover' },
  { id: 'toc-screen' },
  { id: 'about-intro' },
  { id: 'about-practice' },
  ...projects.map((project) => ({ id: project.slug })),
])

const menuLabel = computed(() =>
  menuOpen.value ? 'Close navigation overlay' : 'Open navigation overlay',
)

const modeLabel = computed(() =>
  layoutMode.value === 'screen' ? siteMeta.printLabel : 'Return to Screen Layout',
)

let sectionObserver
let revealObserver
let motionQuery

const setLayoutMode = (nextMode) => {
  layoutMode.value = nextMode
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)

  if (!element) {
    return
  }

  const top = window.scrollY + element.getBoundingClientRect().top

  window.scrollTo({
    top,
    behavior:
      reducedMotion.value || layoutMode.value === 'print' ? 'auto' : 'smooth',
  })
  menuOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const updatePointer = (event) => {
  if (layoutMode.value === 'print') {
    return
  }

  const x = (event.clientX / window.innerWidth) * 100
  const y = (event.clientY / window.innerHeight) * 100

  pointer.value = { x, y, active: true }
}

const settlePointer = () => {
  pointer.value = {
    x: pointer.value.x,
    y: pointer.value.y,
    active: false,
  }
}

const onKeydown = (event) => {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
  }
}

const syncReducedMotion = () => {
  reducedMotion.value = motionQuery?.matches ?? false
}

const setupSectionObserver = () => {
  sectionObserver?.disconnect()

  const elements = screenPages.value
    .map((entry) => document.getElementById(entry.id))
    .filter(Boolean)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible[0]?.target?.id) {
        activeSection.value = visible[0].target.id
      }
    },
    {
      rootMargin: '-8% 0px -8% 0px',
      threshold: [0.45, 0.65, 0.85],
    },
  )

  elements.forEach((element) => sectionObserver.observe(element))
}

const setupRevealObserver = () => {
  revealObserver?.disconnect()

  const targets = document.querySelectorAll('[data-page]')

  if (reducedMotion.value || layoutMode.value === 'print') {
    targets.forEach((target) => target.classList.add('is-visible'))
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      })
    },
    {
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0.3, 0.55, 0.75],
    },
  )

  targets.forEach((target) => revealObserver.observe(target))
}

const projectThemeStyle = (project) => ({
  '--project-accent': project.theme.accent,
  '--project-surface': project.theme.surface,
  '--project-glow': project.theme.glow,
  '--project-text': project.theme.text ?? 'var(--text)',
  '--project-muted': project.theme.muted ?? 'var(--muted)',
  '--project-line': project.theme.line ?? 'var(--line)',
  '--project-tag-bg': project.theme.tagBackground ?? 'rgba(255, 251, 245, 0.7)',
  '--project-screen-media-height':
    project.screenMediaHeight ?? 'clamp(18rem, 44vh, 34rem)',
  '--project-print-media-height': project.printMediaHeight ?? '32mm',
  '--project-print-shell-gap': project.printShellGap ?? '3.2mm',
  '--project-print-content-gap': project.printContentGap ?? '2.8mm',
})

watch(layoutMode, (mode) => {
  document.documentElement.dataset.mode = mode
  document.body.classList.toggle('menu-open', menuOpen.value && mode === 'screen')
  if (mode === 'print') {
    menuOpen.value = false
  }
  window.setTimeout(() => {
    setupRevealObserver()
    setupSectionObserver()
  }, 0)
})

watch(menuOpen, (open) => {
  document.body.classList.toggle(
    'menu-open',
    open && layoutMode.value === 'screen',
  )
})

onMounted(() => {
  document.documentElement.dataset.mode = layoutMode.value
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  syncReducedMotion()
  motionQuery.addEventListener('change', syncReducedMotion)
  window.addEventListener('mousemove', updatePointer)
  window.addEventListener('mouseleave', settlePointer)
  window.addEventListener('keydown', onKeydown)
  setupSectionObserver()
  setupRevealObserver()
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
  revealObserver?.disconnect()
  motionQuery?.removeEventListener('change', syncReducedMotion)
  window.removeEventListener('mousemove', updatePointer)
  window.removeEventListener('mouseleave', settlePointer)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="site-shell" :class="[`mode-${layoutMode}`]">
    <div
      class="pointer-aura"
      :class="{ 'pointer-aura--active': pointer.active }"
      :style="{
        '--pointer-x': `${pointer.x}%`,
        '--pointer-y': `${pointer.y}%`,
      }"
      aria-hidden="true"
    />

    <header class="topbar">
      <a class="topbar__mark" href="#cover">TOP</a>
      <div class="topbar__actions">
        <button
          type="button"
          class="topbar__button"
          @click="setLayoutMode(layoutMode === 'screen' ? 'print' : 'screen')"
        >
          {{ modeLabel }}
        </button>
        <button
          type="button"
          class="topbar__button topbar__button--primary"
          :aria-expanded="menuOpen"
          aria-controls="site-menu"
          :aria-label="menuLabel"
          @click="toggleMenu"
        >
          Menu
        </button>
      </div>
    </header>

    <transition name="fade">
      <div
        v-if="menuOpen && layoutMode === 'screen'"
        id="site-menu"
        class="menu-overlay"
      >
        <div class="menu-overlay__frame">
          <div class="menu-overlay__header">
            <p class="menu-overlay__eyebrow">Table of Contents</p>
            <button
              type="button"
              class="menu-overlay__close"
              @click="menuOpen = false"
            >
              Close
            </button>
          </div>
          <nav class="menu-overlay__nav" aria-label="Section navigation">
            <button
              v-for="entry in menuEntries"
              :key="entry.id"
              type="button"
              class="menu-overlay__link"
              :class="{ 'is-active': activeSection === entry.id }"
              @click="scrollToSection(entry.id)"
            >
              {{ entry.label }}
            </button>
          </nav>
          <div class="menu-overlay__footer">
            <a class="menu-overlay__contact" :href="`mailto:${siteMeta.email}`">
              {{ siteMeta.email }}
            </a>
          </div>
        </div>
      </div>
    </transition>

    <main class="page">
      <section id="cover" class="hero screen-page print-page" data-page>
        <img
          :src="hakoneImage"
          alt=""
          class="hero__background-image"
          aria-hidden="true"
        />
        <img
          :src="hakonePrintImage"
          alt="Hakone"
          class="hero__location-image"
        />
        <div class="hero__inner">
          <p class="hero__eyebrow">Portfolio / 2026.06</p>
          <h1 class="hero__title">{{ siteMeta.title }}</h1>
          <p class="hero__subtitle">
            {{ siteMeta.subtitle }}
          </p>
          <p class="hero__intro">
            {{ siteMeta.intro }}
            <a class="hero__link" :href="siteMeta.website">
              {{ siteMeta.website }}
            </a>
          </p>
          <div class="hero__meta">
            <a class="hero__link" :href="`mailto:${siteMeta.email}`">
              {{ siteMeta.email }}
            </a>
          </div>
        </div>
        <p class="background-credit">Background：Hakone</p>
      </section>

      <section id="toc-screen" class="toc-screen screen-page" data-page>
        <img
          :src="hujisanImage"
          alt=""
          class="toc__background-image"
          aria-hidden="true"
        />
        <img
          :src="fujisanPrintImage"
          alt="Fujisan"
          class="toc-screen__location-image"
        />
        <div class="toc-screen__inner">
          <p class="section-head__eyebrow">Contents</p>
          <div class="toc-screen__list">
            <button
              v-for="entry in tocScreenEntries"
              :key="entry.id"
              type="button"
              class="toc-screen__item"
              @click="scrollToSection(entry.id)"
            >
              <span class="toc-screen__item-number">{{ entry.number }}</span>
              <span class="toc-screen__item-copy">
                <strong>{{ entry.label }}</strong>
                <small>{{ entry.description }}</small>
              </span>
            </button>
          </div>
        </div>
        <p class="background-credit">Background：Fujisan</p>
      </section>

      <section id="toc-print" class="toc-print print-page" aria-labelledby="toc-title">
        <img
          :src="hujisanImage"
          alt=""
          class="toc__background-image"
          aria-hidden="true"
        />
        <img
          :src="fujisanPrintImage"
          alt="Fujisan"
          class="toc-print__location-image"
        />
        <div class="toc-print__stack">
          <p class="section-head__eyebrow">Contents</p>
          <h2 id="toc-title" class="section-head__title">Portfolio Index</h2>
        </div>
        <div class="toc-print__columns">
          <div
            v-for="entry in printTocEntries"
            :key="entry.label"
            class="toc-print__card"
          >
            <span>{{ entry.number }}</span>
            <div class="toc-print__card-copy">
              <strong>{{ entry.label }}</strong>
              <p>{{ entry.description }}</p>
            </div>
          </div>
        </div>
        <p class="background-credit">Background：Fujisan</p>
      </section>

      <section id="about-intro" class="about about--intro screen-page print-page" data-page>
        <img
          :src="shanghaiImage"
          alt=""
          class="about__background-image"
          aria-hidden="true"
        />
        <img
          :src="shanghaiNightPortraitImage"
          alt="Wenbo Zhang in Shanghai"
          class="about__print-location-image"
        />
        <p class="about__background-note">
          The background is derived from the pictures I took during my travels.
        </p>
        <div class="section-head">
          <p class="section-head__eyebrow">Profile</p>
          <h2 class="section-head__title">About me</h2>
        </div>
        <div class="about__grid">
          <div class="about__visual-column">
            <div class="about__portrait-frame media-zoom">
              <img :src="meImage" alt="Portrait of Wenbo Zhang" class="about__image media-zoom__image" />
            </div>
            <div class="about__facts" aria-label="Personal facts">
              <article v-for="fact in aboutIntro.facts" :key="fact.label" class="about__fact">
                <span>{{ fact.label }}</span>
                <strong>{{ fact.value }}</strong>
              </article>
            </div>
          </div>
          <div class="about__content">
            <div class="about__intro">
              <p class="about__name">{{ aboutIntro.name }}</p>
              <p class="about__role">{{ aboutIntro.role }}</p>
              <p class="about__location">{{ aboutIntro.location }}</p>
            </div>
            <div class="about__copy">
              <p
                v-for="(paragraph, index) in aboutIntro.bio"
                :key="paragraph"
                :class="{ 'about__bio-lead': index === 0 }"
              >
                {{ paragraph }}
              </p>
              <article class="about__copy-card about__copy-card--education">
                <h3>Education</h3>
                <ul>
                  <li
                    v-for="item in aboutIntro.education"
                    :key="item.school"
                    class="about__education-item"
                  >
                    <span class="about__education-period">{{ item.period }}</span>
                    <span class="about__education-school">
                      {{ item.program }} / {{ item.school }}
                    </span>
                  </li>
                </ul>
              </article>
            </div>
            <div class="about__details about__details--quad">
              <article class="about__detail about__detail--contact">
                <h3>Contact</h3>
                <ul>
                  <li v-for="item in aboutIntro.contacts" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article class="about__detail about__detail--languages">
                <h3>Languages</h3>
                <ul>
                  <li v-for="item in aboutIntro.languages" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article class="about__detail about__detail--dream">
                <h3>Dream</h3>
                <ul>
                  <li
                    v-for="item in aboutIntro.dream"
                    :key="item"
                    class="about__education-item"
                  >
                    <span class="about__education-school">{{ item }}</span>
                  </li>
                </ul>
              </article>
              <article class="about__detail about__detail--hobbies">
                <h3>Hobbies</h3>
                <ul>
                  <li v-for="item in aboutIntro.hobbies" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
        <p class="about__suitability-quote">What suits you is the best</p>
        <p class="background-credit">Background：Shanghai</p>
      </section>

      <section
        id="about-practice"
        class="about about--practice screen-page print-page"
        data-page
      >
        <img
          :src="yokohamaImage"
          alt=""
          class="about-practice__background-image"
          aria-hidden="true"
        />
        <img
          :src="yokohamaPrintImage"
          alt="Yokohama waterfront"
          class="about-practice__print-location-image"
        />
        <div class="section-head">
          <p class="section-head__eyebrow">Practice</p>
          <h2 class="section-head__title">Design, code, and experience</h2>
        </div>
        <div class="about__grid about__grid--practice">
          <div class="about__content about__content--practice">
            <p class="about__lead">{{ aboutPractice.lead }}</p>
            <div class="about__copy">
              <p v-for="paragraph in aboutPractice.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
          <div class="about__practice-column">
            <div class="about__practice-cards">
              <article class="about__practice-card about__practice-card--experience">
                <h3>Experience</h3>
                <ul>
                  <li v-for="item in aboutPractice.experience" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article class="about__practice-card about__practice-card--toolbox">
                <h3>Toolbox</h3>
                <ul class="tag-list">
                  <li v-for="item in aboutPractice.toolbox" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article class="about__practice-card about__practice-card--skills">
                <h3>Core Skills</h3>
                <ul class="tag-list">
                  <li v-for="item in aboutPractice.skills" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article class="about__practice-card about__practice-card--plan">
                <h3>Future Plan</h3>
                <ul class="tag-list">
                  <li v-for="item in aboutPractice.plan" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
        <p class="background-credit">Background：Yokohama</p>
      </section>

      <section
        v-for="project in projects"
        :id="project.slug"
        :key="project.slug"
        class="project-page screen-page print-project"
        :class="[
          `project-page--${project.layout}`,
          project.printLayout ? `project-page--print-${project.printLayout}` : '',
        ]"
        :style="projectThemeStyle(project)"
        data-page
      >
        <div class="project-page__shell">
          <div class="project-page__media-column">
            <div class="project-page__media media-zoom">
              <img
                :src="project.image"
                :alt="`${project.title} artwork`"
                class="project-page__image media-zoom__image"
              />
            </div>
            <div
              v-if="project.printInsetImage"
              class="project-page__print-inset"
            >
              <img
                :src="project.printInsetImage"
                :alt="`${project.title} process diagram`"
                class="project-page__print-inset-image"
              />
              <p
                v-if="project.printInsetCaption"
                class="project-page__print-inset-caption"
              >
                {{ project.printInsetCaption }}
              </p>
            </div>
            <article
              v-if="project.printFooterUnderMedia"
              class="project-page__philosophy-card project-page__philosophy--media-print"
            >
              <h3>Project Logic</h3>
              <p
                v-if="project.slug === 'simple-write'"
                class="project-page__philosophy"
              >
                <span class="project-page__philosophy-copy">
                  {{ project.philosophy.split('\n')[0] }}
                </span>
                <span class="project-page__philosophy-quote">
                  {{ project.philosophy.split('\n').slice(1).join('\n') }}
                </span>
              </p>
              <p v-else class="project-page__philosophy">{{ project.philosophy }}</p>
            </article>
            <article
              v-if="project.slug === 'simple-write'"
              class="project-page__philosophy-card project-page__limitation--media-print"
            >
              <h3>{{ project.sections[3].title }}</h3>
              <p class="project-page__limitation-copy">
                {{ project.sections[3].items.join(' ') }}
              </p>
            </article>
            <a
              v-if="project.printFooterUnderMedia && project.link && project.slug !== 'simple-write'"
              class="project-page__link project-page__link-card project-page__link-card--media-print"
              :href="project.link"
            >
              {{ project.link }}
            </a>
            <p
              v-if="project.mediaCaption"
              class="project-page__media-caption"
            >
              {{ project.mediaCaption }}
            </p>
            <div
              v-if="project.mediaNotes?.length"
              class="project-page__media-notes"
            >
              <p
                v-for="note in project.mediaNotes"
                :key="note"
                class="project-page__media-note"
              >
                {{ note }}
              </p>
            </div>
            <div
              v-if="project.printMediaSections?.length"
              class="project-page__print-media-copy project-page__supplemental"
            >
              <article
                v-for="section in project.printMediaSections"
                :key="section.title"
                class="project-page__supplemental-section"
              >
                <h3>{{ section.title }}</h3>
                <ul>
                  <li v-for="item in section.items" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>
            <div
              v-if="project.printFooterUnderMedia"
              class="project-page__footer project-page__footer--media-print"
            >
              <div class="project-page__stack">
                <span>Duration</span>
                <strong>{{ project.duration }}</strong>
              </div>
              <div class="project-page__stack">
                <span>Technology</span>
                <ul class="tag-list">
                  <li v-for="item in project.tech" :key="item">{{ item }}</li>
                </ul>
              </div>
              <a
                v-if="project.link"
                class="project-page__link"
                :href="project.link"
              >
                {{ project.link }}
              </a>
            </div>
          </div>
          <div class="project-page__content">
            <div class="project-page__header">
              <p class="project-page__number">{{ project.number }}</p>
              <div>
                <h2 class="project-page__title">{{ project.title }}</h2>
                <p class="project-page__summary">{{ project.summary }}</p>
              </div>
            </div>

            <div class="project-page__meta">
              <p v-for="item in project.metrics" :key="item">{{ item }}</p>
            </div>

            <p
              v-if="philosophyBeforeColumnsProjectSlugs.has(project.slug)"
              class="project-page__philosophy project-page__philosophy--before-columns"
            >
              {{ project.philosophy }}
            </p>

            <div class="project-page__columns">
              <div>
                <h3>{{ project.sections[0].title }}</h3>
                <ul>
                  <li v-for="item in project.sections[0].items" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div>
                <h3>{{ project.sections[1].title }}</h3>
                <ul>
                  <li v-for="item in project.sections[1].items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="project-page__supplemental">
              <article class="project-page__supplemental-section">
                <h3>{{ project.sections[2].title }}</h3>
                <ul>
                  <li v-for="item in project.sections[2].items" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article
                v-if="project.slug !== 'simple-write'"
                class="project-page__supplemental-section"
              >
                <h3>{{ project.sections[3].title }}</h3>
                <ul>
                  <li v-for="item in project.sections[3].items" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>

            <p
              v-if="!philosophyBeforeColumnsProjectSlugs.has(project.slug)"
              class="project-page__philosophy"
            >
              {{ project.philosophy }}
            </p>

            <div
              v-if="project.extraSections?.length"
              class="project-page__supplemental"
            >
              <article
                v-for="section in project.extraSections"
                :key="section.title"
                class="project-page__supplemental-section"
              >
                <h3>{{ section.title }}</h3>
                <ul>
                  <li v-for="item in section.items" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>

            <div class="project-page__footer">
              <div class="project-page__stack">
                <span>Duration</span>
                <strong>{{ project.duration }}</strong>
              </div>
              <div class="project-page__stack">
                <span>Technology</span>
                <ul class="tag-list">
                  <li v-for="item in project.tech" :key="item">{{ item }}</li>
                </ul>
              </div>
              <a
                v-if="project.link"
                class="project-page__link"
                :href="project.link"
              >
                {{ project.link }}
              </a>
            </div>
          </div>
        </div>
        <img
          v-if="project.slug === 'desktop-animals'"
          :src="animalsImage"
          alt="Desktop Animals character lineup"
          class="project-page__bottom-animals"
        />
      </section>
    </main>
  </div>
</template>
