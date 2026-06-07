<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const siteMeta = {
  title: 'Atelier Portfolio',
  subtitle:
    'A placeholder editorial showcase for selected digital and visual design work.',
  intro:
    'Built for calm reading on screen and disciplined export on paper, with motion reserved for moments that deserve attention.',
  email: 'hello@portfolio-placeholder.com',
  socialLinks: [
    { label: 'Behance', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
  printLabel: 'Switch to Print Layout',
}

const about = {
  name: 'Firstname Lastname',
  role: 'Multidisciplinary Designer and Front-End Collaborator',
  location: 'Based in Placeholder City, working globally.',
  bio: [
    'I shape visual systems, interfaces, and digital stories with a focus on clarity, rhythm, and emotional restraint. The portfolio is structured to read like an editorial sequence rather than a loose gallery.',
    'This placeholder version keeps every section concise so the same content can perform well on a large screen, a laptop, or an exported A4 PDF without losing hierarchy.',
  ],
  photoLabel: 'Portrait Placeholder',
  contacts: [
    'Email: hello@portfolio-placeholder.com',
    'Phone: +00 000 000 0000',
    'Location: Placeholder City',
  ],
  resume: [
    '2024 - Present / Independent design direction for digital products and visual identities.',
    '2021 - 2024 / Senior product designer for interface systems and launch storytelling.',
    '2018 - 2021 / Visual designer focused on editorial web experiences and campaign pages.',
  ],
  skills: [
    'Art Direction',
    'Editorial Layout',
    'UI Design',
    'Motion Systems',
    'Vue Prototyping',
    'Design Writing',
  ],
  experience: [
    'Leads concept framing, interface structure, and polished front-end presentation.',
    'Works across product, brand, and narrative layers to keep design intent coherent.',
    'Builds prototypes that translate well from concept review to client-ready presentation.',
  ],
}

const projects = [
  {
    slug: 'north-star-platform',
    number: '01',
    title: 'North Star Platform',
    summary:
      'A concept website for a design systems practice, balancing technical trust with a distinctly human editorial rhythm.',
    heroImage: 'System Narrative Placeholder',
    link: '#',
    highlights: [
      'Clarified service positioning with layered case-study storytelling.',
      'Built a visual cadence that kept technical detail readable without flattening the brand voice.',
      'Paired restrained motion with strong type contrast for a more intentional first impression.',
    ],
    duration: '6 weeks',
    philosophy:
      'The project asked how a systems-led studio could feel authoritative without becoming cold. The design response was to slow the reading pace, foreground the wording, and use motion as punctuation rather than decoration. The goal was to help visitors understand both the precision of the work and the care behind it.',
    tech: ['Vue 3', 'Vite', 'CSS Grid', 'Motion Tokens'],
    metrics: ['Role / Lead Design', 'Format / Website Prototype', 'Output / Screen + PDF'],
  },
  {
    slug: 'archive-of-motion',
    number: '02',
    title: 'Archive of Motion',
    summary:
      'A portfolio case for documenting moving-image work with enough structure to remain printable and review-friendly.',
    heroImage: 'Motion Archive Placeholder',
    link: '#',
    highlights: [
      'Translated time-based work into a sequence that still reads well as static pages.',
      'Used image-led composition to preserve visual energy across desktop and print layouts.',
      'Created compact metadata blocks for collaborators, timeline, and production notes.',
    ],
    duration: '4 weeks',
    philosophy:
      'Many motion-heavy portfolios lose their meaning when removed from a browser. This case was shaped around the opposite challenge: making each frame hold its own, while still hinting at the sequence beyond it. The intention was to prove that archival clarity can feel elegant instead of administrative.',
    tech: ['Vue 3', 'Intersection Observer', 'Responsive Typography', 'Print CSS'],
    metrics: ['Role / Design + Prototype', 'Format / Case Study', 'Output / Responsive Archive'],
  },
  {
    slug: 'signal-and-tone',
    number: '03',
    title: 'Signal and Tone',
    summary:
      'An experiment in presenting research, interface decisions, and launch messaging as one unified reading experience.',
    heroImage: 'Research Story Placeholder',
    link: '#',
    highlights: [
      'Merged strategy notes and polished visuals into one persuasive narrative frame.',
      'Introduced chapter markers to keep long-form project rationale digestible.',
      'Balanced analytical language with tactile, atmosphere-building composition.',
    ],
    duration: '5 weeks',
    philosophy:
      'The main design question was how to give process enough room without overwhelming the viewer. Instead of separating research and final work into different visual languages, the site treated them as parts of the same argument. The desired outcome was confidence: every visual choice should feel traceable to a clear reason.',
    tech: ['Vue 3', 'Semantic HTML', 'Anchor Navigation', 'A4 Pagination'],
    metrics: ['Role / Product Storytelling', 'Format / Deep Case', 'Output / Portfolio Module'],
  },
  {
    slug: 'quiet-launch',
    number: '04',
    title: 'Quiet Launch',
    summary:
      'A campaign landing page placeholder exploring how a soft visual system can still deliver a memorable entry point.',
    heroImage: 'Launch Frame Placeholder',
    link: '#',
    highlights: [
      'Designed a dramatic hero using scale, spacing, and light instead of loud color.',
      'Made hover and reveal behavior feel precise while remaining subdued.',
      'Prepared the layout for handoff into a clean PDF presentation format.',
    ],
    duration: '3 weeks',
    philosophy:
      'This direction was built on the belief that impact does not require noise. By removing unnecessary surfaces and letting contrast, whitespace, and sequencing do the work, the page gained a quieter confidence. The success metric was simple: it should feel memorable both in a browser and on printed paper.',
    tech: ['Vue 3', 'Custom Properties', 'Clamp Typography', 'Print-First Adjustments'],
    metrics: ['Role / Visual Direction', 'Format / Launch Concept', 'Output / Static Site'],
  },
]

const layoutMode = ref('screen')
const menuOpen = ref(false)
const activeSection = ref('about')
const pointer = ref({ x: 50, y: 24, active: false })
const reducedMotion = ref(false)

const menuEntries = computed(() => [
  { id: 'about', label: 'About' },
  ...projects.map((project) => ({
    id: project.slug,
    label: `${project.number} ${project.title}`,
  })),
])

const menuLabel = computed(() =>
  menuOpen.value ? 'Close navigation overlay' : 'Open navigation overlay',
)

const modeLabel = computed(() =>
  layoutMode.value === 'screen' ? siteMeta.printLabel : 'Return to Screen Layout',
)

const sectionIds = menuEntries.value.map((entry) => entry.id)
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

  const top = window.scrollY + element.getBoundingClientRect().top - 24

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

  const elements = sectionIds
    .map((id) => document.getElementById(id))
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
      rootMargin: '-20% 0px -45% 0px',
      threshold: [0.2, 0.4, 0.6],
    },
  )

  elements.forEach((element) => sectionObserver.observe(element))
}

const setupRevealObserver = () => {
  revealObserver?.disconnect()

  const targets = document.querySelectorAll('[data-reveal]')

  if (reducedMotion.value || layoutMode.value === 'print') {
    targets.forEach((target) => target.classList.add('is-visible'))
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.2,
    },
  )

  targets.forEach((target) => revealObserver.observe(target))
}

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
      <a class="topbar__mark" href="#cover">A / P</a>
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
      <section id="cover" class="hero print-page">
        <div class="hero__inner">
          <p class="hero__eyebrow">Selected Works / 2026 Edition</p>
          <h1 class="hero__title">
            A calm portfolio shaped for immersive reading and clean paper export.
          </h1>
          <p class="hero__subtitle">
            {{ siteMeta.subtitle }}
          </p>
          <p class="hero__intro">
            {{ siteMeta.intro }}
          </p>
          <div class="hero__meta">
            <a class="hero__link" :href="`mailto:${siteMeta.email}`">
              {{ siteMeta.email }}
            </a>
            <span class="hero__divider" aria-hidden="true"></span>
            <span>Editorial Calm / Vue Portfolio</span>
          </div>
        </div>
        <div class="hero__panel" aria-hidden="true">
          <div class="hero__panel-card" data-reveal>
            <span>Screen Mode</span>
            <strong>Spatial, animated, image-led</strong>
          </div>
          <div class="hero__panel-card" data-reveal>
            <span>Print Mode</span>
            <strong>Single-column, paginated, restrained</strong>
          </div>
        </div>
      </section>

      <section id="toc-print" class="toc-print print-page" aria-labelledby="toc-title">
        <div class="section-head">
          <p class="section-head__eyebrow">Contents</p>
          <h2 id="toc-title" class="section-head__title">Portfolio Index</h2>
        </div>
        <ol class="toc-print__list">
          <li>
            <span>About</span>
            <span>01</span>
          </li>
          <li v-for="project in projects" :key="project.slug">
            <span>{{ project.number }} {{ project.title }}</span>
            <span>{{ Number(project.number) + 1 }}</span>
          </li>
        </ol>
      </section>

      <section id="about" class="about print-page" data-reveal>
        <div class="section-head">
          <p class="section-head__eyebrow">Profile</p>
          <h2 class="section-head__title">About the Practice</h2>
        </div>
        <div class="about__grid">
          <div class="about__portrait">
            <div class="about__portrait-frame">
              <span>{{ about.photoLabel }}</span>
            </div>
          </div>
          <div class="about__content">
            <div class="about__intro">
              <p class="about__name">{{ about.name }}</p>
              <p class="about__role">{{ about.role }}</p>
              <p class="about__location">{{ about.location }}</p>
            </div>
            <div class="about__copy">
              <p v-for="paragraph in about.bio" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
            <div class="about__details">
              <article>
                <h3>Contact</h3>
                <ul>
                  <li v-for="item in about.contacts" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article>
                <h3>Resume</h3>
                <ul>
                  <li v-for="item in about.resume" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article>
                <h3>Skills</h3>
                <ul class="tag-list">
                  <li v-for="item in about.skills" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article>
                <h3>Experience</h3>
                <ul>
                  <li v-for="item in about.experience" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="works">
        <div class="section-head works__head" data-reveal>
          <p class="section-head__eyebrow">Selected Works</p>
          <h2 class="section-head__title">Four placeholder cases with room for deeper real content later.</h2>
        </div>

        <article
          v-for="project in projects"
          :id="project.slug"
          :key="project.slug"
          class="project print-project"
          data-reveal
        >
          <div class="project__media">
            <div class="project__image">
              <span>{{ project.heroImage }}</span>
            </div>
          </div>
          <div class="project__content">
            <div class="project__header">
              <p class="project__number">{{ project.number }}</p>
              <div>
                <h3 class="project__title">{{ project.title }}</h3>
                <p class="project__summary">{{ project.summary }}</p>
              </div>
            </div>

            <div class="project__meta">
              <p v-for="item in project.metrics" :key="item">{{ item }}</p>
            </div>

            <div class="project__columns">
              <div>
                <h4>Design Highlights</h4>
                <ul>
                  <li v-for="item in project.highlights" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div>
                <h4>Project Logic</h4>
                <p class="project__philosophy">{{ project.philosophy }}</p>
              </div>
            </div>

            <div class="project__footer">
              <div class="project__stack">
                <span class="project__label">Duration</span>
                <strong>{{ project.duration }}</strong>
              </div>
              <div class="project__stack">
                <span class="project__label">Technology</span>
                <ul class="tag-list">
                  <li v-for="item in project.tech" :key="item">{{ item }}</li>
                </ul>
              </div>
              <a class="project__link" :href="project.link">Project Link Placeholder</a>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
