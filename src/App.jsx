import React, { useState, useEffect } from 'react'
import './App.css'

// Curated high quality authentic candid event photography
const IMAGES = {
  heroCandid: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
  storyMain: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
  storyLaugh: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  storyGrandma: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  photoStory: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
  weddingCard: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
  gradCard: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  birthdayCard: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
  gatheringCard: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
  teamRahmat: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  teamSarah: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  teamAndi: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  finalSunset: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=80',
}

const INITIAL_GALLERY = [
  {
    id: 1,
    category: 'weddings',
    title: 'Five minutes before everyone arrived.',
    author: 'Maya',
    time: '2:15 PM',
    hearts: 38,
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'graduations',
    title: 'Dad pretending he was not crying.',
    author: 'Kevin',
    time: '11:42 AM',
    hearts: 54,
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'birthdays',
    title: 'Best seat in the room.',
    author: 'Tari',
    time: '8:20 PM',
    hearts: 29,
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'quiet',
    title: 'Someone had to document this.',
    author: 'Naya',
    time: '4:10 PM',
    hearts: 67,
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'birthdays',
    title: 'Still laughing about this.',
    author: 'Reza',
    time: '9:45 PM',
    hearts: 43,
    img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'weddings',
    title: '11:47 PM. Shoe change after the first dance.',
    author: 'Citra',
    time: '11:47 PM',
    hearts: 82,
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    category: 'quiet',
    title: 'Grandma watching the dance floor.',
    author: 'Budi',
    time: '10:05 PM',
    hearts: 91,
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    category: 'graduations',
    title: 'The unplanned confetti explosion.',
    author: 'Aris',
    time: '1:30 PM',
    hearts: 48,
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    category: 'gatherings',
    title: 'Everyone talking over everyone else.',
    author: 'Dewi',
    time: '5:24 PM',
    hearts: 35,
    img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [gallery, setGallery] = useState(INITIAL_GALLERY)
  const [lightboxItem, setLightboxItem] = useState(null)
  
  // Create Event Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: 'Maya & Rama Wedding',
    eventType: 'Wedding',
    date: '2026-11-14',
    code: 'OUR-LENS-8492',
  })
  const [eventCreated, setEventCreated] = useState(false)

  // Live Stream Simulation State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [uploadFormData, setUploadFormData] = useState({
    author: '',
    caption: '',
    photoIdx: 0,
  })
  const [liveStreamMoments, setLiveStreamMoments] = useState([
    {
      id: 'm1',
      author: 'Dimas',
      caption: 'Right before the entrance',
      time: '2 mins ago',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'm2',
      author: 'Alya',
      caption: 'Table 6 having too much fun',
      time: '6 mins ago',
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'm3',
      author: 'Rian',
      caption: 'Best dessert table in history',
      time: '14 mins ago',
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'm4',
      author: 'Clara',
      caption: 'Grandpa dancing with the kids',
      time: '21 mins ago',
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    },
  ])

  // Track window scroll for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard accessibility: Close modals on Escape key (R-32)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCreateModalOpen(false)
        setLightboxItem(null)
        setIsUploadModalOpen(false)
        setMobileNavOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Like interaction for photo cards
  const handleLike = (e, id) => {
    e.stopPropagation()
    setGallery((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, hearts: item.hearts + 1 } : item
      )
    )
    if (lightboxItem && lightboxItem.id === id) {
      setLightboxItem((prev) => ({ ...prev, hearts: prev.hearts + 1 }))
    }
  }

  // Handle new moment upload submission in live simulation
  const handleUploadSubmit = (e) => {
    e.preventDefault()
    if (!uploadFormData.author.trim() || !uploadFormData.caption.trim()) return

    const sampleImages = [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80',
    ]

    const newMoment = {
      id: 'm_' + Date.now(),
      author: uploadFormData.author,
      caption: uploadFormData.caption,
      time: 'Just now',
      img: sampleImages[uploadFormData.photoIdx % sampleImages.length],
    }

    setLiveStreamMoments([newMoment, ...liveStreamMoments])
    setIsUploadModalOpen(false)
    setUploadFormData({ author: '', caption: '', photoIdx: 0 })
  }

  // Filter gallery items
  const filteredGallery =
    activeFilter === 'all'
      ? gallery
      : gallery.filter((item) => item.category === activeFilter)

  return (
    <div className="ourlens-app">
      {/* -------------------------------------------
          NAVIGATION (Sticky with subtle blur on scroll)
      -------------------------------------------- */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="nav-brand" aria-label="OurLens Home">
            <svg
              className="nav-brand-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
            </svg>
            <span>OurLens</span>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#the-story" className="nav-link">Moments</a></li>
              <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
              <li><a href="#gallery" className="nav-link">Gallery</a></li>
              <li><a href="#our-team" className="nav-link">Our Team</a></li>
              <li><a href="#event-types" className="nav-link">Events</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-primary nav-cta-desktop"
              onClick={() => {
                setEventCreated(false)
                setIsCreateModalOpen(true)
              }}
            >
              Create an Event
            </button>
            <button
              type="button"
              className="mobile-toggle"
              aria-expanded={mobileNavOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileNavOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileNavOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li>
              <a
                href="#the-story"
                className="mobile-nav-link"
                onClick={() => setMobileNavOpen(false)}
              >
                Moments
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="mobile-nav-link"
                onClick={() => setMobileNavOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="mobile-nav-link"
                onClick={() => setMobileNavOpen(false)}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#our-team"
                className="mobile-nav-link"
                onClick={() => setMobileNavOpen(false)}
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#event-types"
                className="mobile-nav-link"
                onClick={() => setMobileNavOpen(false)}
              >
                Events
              </a>
            </li>
          </ul>
          <div className="mobile-nav-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setMobileNavOpen(false)
                setEventCreated(false)
                setIsCreateModalOpen(true)
              }}
            >
              Create an Event
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* -------------------------------------------
            SECTION 1: HERO SECTION
        -------------------------------------------- */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <span className="hero-badge-tag">A shared memory book</span>
                <h1 className="hero-headline">The moments you didn't see.</h1>
                <p className="hero-supporting">
                  The big moments are easy to remember. It's everything in between that makes a day feel like yours.
                </p>
                <p className="hero-subtext">
                  Let your guests add their own little pieces to the story.
                </p>
                <div className="hero-cta-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setEventCreated(false)
                      setIsCreateModalOpen(true)
                    }}
                  >
                    Create an Event
                  </button>
                  <a href="#gallery" className="btn btn-secondary">
                    See the Moments
                  </a>
                </div>
                <div>
                  <a href="#the-story" className="hero-scroll-cue">
                    <span className="hero-scroll-icon">↓</span>
                    <span>Scroll to discover the moments</span>
                  </a>
                </div>
              </div>

              <div className="hero-visual-container">
                <div className="washi-tape washi-tape-top" />
                <div className="hero-main-photo-frame">
                  <img
                    src={IMAGES.heroCandid}
                    alt="Friends laughing together candidly during an outdoor event"
                    className="hero-main-photo"
                  />
                  <div className="hero-caption">Someone caught this.</div>
                </div>
                <div className="handwritten-note hero-note-1">
                  Someone caught this.
                </div>
                <div className="handwritten-note hero-note-2">
                  Not planned. Still worth remembering.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 2: THE STORY
        -------------------------------------------- */}
        <section id="the-story" className="section-wrapper story-section">
          <div className="container">
            <div className="story-header">
              <span className="section-tag">Unplanned perspectives</span>
              <h2 className="section-title">
                There's always more happening than the camera sees.
              </h2>
              <p className="story-prose">
                At every celebration, people are taking photos:
                <br />
                A friend catches a ridiculous laugh. Someone takes a blurry photo before the ceremony.
                Grandma smiles when nobody is looking. Your best friend saves a moment you completely missed.
              </p>
              <p className="story-prose-highlight">
                Most of those photos stay inside someone's phone.
              </p>
            </div>

            {/* Scrapbook organic collage */}
            <div className="scrapbook-grid">
              <div className="scrapbook-left">
                <div className="washi-tape washi-tape-top" />
                <div className="scrapbook-card-primary">
                  <img
                    src={IMAGES.storyMain}
                    alt="A spontaneous happy laugh captured from across the table"
                  />
                  <div className="scrapbook-caption">Table 4 at 10:14 PM</div>
                </div>
                <div className="scrapbook-note-callout">
                  Nobody posed for this.
                </div>
              </div>

              <div className="scrapbook-right">
                <div className="scrapbook-card-secondary tilt-right">
                  <img
                    src={IMAGES.storyLaugh}
                    alt="Two guests sharing an inside joke"
                  />
                  <div className="scrapbook-caption">Right before the speeches</div>
                </div>

                <div className="scrapbook-card-secondary tilt-left">
                  <img
                    src={IMAGES.storyGrandma}
                    alt="Grandma smiling quietly while observing the room"
                  />
                  <div className="scrapbook-caption">Grandma watching from the quiet corner</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 3: THE PROBLEM
        -------------------------------------------- */}
        <section className="section-wrapper problem-section">
          <div className="container">
            <div className="problem-grid">
              <div className="problem-content">
                <span className="section-tag">The quiet loss</span>
                <h2 className="section-title">
                  Everyone has a camera.
                  <br />
                  Not everyone remembers to share.
                </h2>
                <p className="section-description">
                  Your guests probably took photos you would love to see. They just never found their way back to you.
                </p>

                <div className="problem-flow">
                  <div className="flow-step-item">
                    <div className="flow-indicator">1</div>
                    <div className="flow-text">Camera Roll on each guest's phone</div>
                  </div>
                  <div className="flow-down-arrow">↓</div>
                  <div className="flow-step-item">
                    <div className="flow-indicator">2</div>
                    <div className="flow-text">Forgotten in the week following the celebration</div>
                  </div>
                  <div className="flow-down-arrow">↓</div>
                  <div className="flow-step-item">
                    <div className="flow-indicator">3</div>
                    <div className="flow-text">Never seen by the people who lived it</div>
                  </div>
                </div>
              </div>

              <div className="problem-visual">
                <div className="phone-mockup-frame">
                  <div className="phone-screen">
                    <div className="phone-header-bar">
                      <span>9:41</span>
                      <span>Camera Roll</span>
                      <span>Select</span>
                    </div>
                    <div className="phone-photo-grid">
                      <img src={IMAGES.heroCandid} alt="Thumbnail 1" className="phone-thumb" />
                      <img src={IMAGES.storyLaugh} alt="Thumbnail 2" className="phone-thumb" />
                      <img src={IMAGES.storyGrandma} alt="Thumbnail 3" className="phone-thumb" />
                      <img src={IMAGES.weddingCard} alt="Thumbnail 4" className="phone-thumb" />
                      <img src={IMAGES.gradCard} alt="Thumbnail 5" className="phone-thumb" />
                      <img src={IMAGES.birthdayCard} alt="Thumbnail 6" className="phone-thumb" />
                      <img src={IMAGES.gatheringCard} alt="Thumbnail 7" className="phone-thumb" />
                      <img src={IMAGES.storyMain} alt="Thumbnail 8" className="phone-thumb" />
                      <img src={IMAGES.photoStory} alt="Thumbnail 9" className="phone-thumb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 4: INTRODUCING OURLENS
        -------------------------------------------- */}
        <section className="section-wrapper intro-section">
          <div className="container">
            <span className="section-tag">A gentle ritual</span>
            <h2 className="section-title">
              So we made sharing part of the celebration.
            </h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              One QR code is all it takes. No app downloads, no account setup for your guests.
            </p>

            <div className="intro-table-display">
              {/* Physical Table Card */}
              <div className="qr-card-physical">
                <div className="washi-tape washi-tape-top" />
                <div className="qr-card-logo">Our Lens</div>
                <div className="qr-card-tagline">Scan. Share. Remember.</div>
                <div className="qr-code-graphic" aria-label="Event QR Code illustration">
                  <svg viewBox="0 0 100 100" width="120" height="120">
                    <rect x="10" y="10" width="25" height="25" fill="#2C5E3B" rx="3" />
                    <rect x="15" y="15" width="15" height="15" fill="#FFF" rx="2" />
                    <rect x="18" y="18" width="9" height="9" fill="#2C5E3B" rx="1" />
                    <rect x="65" y="10" width="25" height="25" fill="#2C5E3B" rx="3" />
                    <rect x="70" y="15" width="15" height="15" fill="#FFF" rx="2" />
                    <rect x="73" y="18" width="9" height="9" fill="#2C5E3B" rx="1" />
                    <rect x="10" y="65" width="25" height="25" fill="#2C5E3B" rx="3" />
                    <rect x="15" y="70" width="15" height="15" fill="#FFF" rx="2" />
                    <rect x="18" y="73" width="9" height="9" fill="#2C5E3B" rx="1" />
                    <rect x="45" y="15" width="8" height="8" fill="#2C5E3B" />
                    <rect x="45" y="35" width="14" height="8" fill="#2C5E3B" />
                    <rect x="65" y="45" width="10" height="10" fill="#2C5E3B" />
                    <rect x="45" y="65" width="12" height="12" fill="#2C5E3B" />
                    <rect x="65" y="70" width="15" height="15" fill="#2C5E3B" />
                  </svg>
                </div>
                <div className="qr-card-footer-note">Your memories belong here.</div>
              </div>

              {/* Guest Scan Preview */}
              <div className="guest-scan-demo">
                <div className="guest-scan-card">
                  <h3 className="scan-action-title">Place it on every table</h3>
                  <p className="scan-action-desc">
                    When friends and family sit down, they simply point their phone camera at the card. The upload gallery opens in their browser immediately.
                  </p>
                  <ul className="scan-perk-list">
                    <li className="scan-perk-item">
                      <svg className="scan-perk-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>No guest accounts or passwords to remember</span>
                    </li>
                    <li className="scan-perk-item">
                      <svg className="scan-perk-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Original resolution photos preserved cleanly</span>
                    </li>
                    <li className="scan-perk-item">
                      <svg className="scan-perk-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Hosts download the entire archive with one click</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 5: HOW IT WORKS
        -------------------------------------------- */}
        <section id="how-it-works" className="section-wrapper steps-section">
          <div className="container">
            <span className="section-tag">Simple by design</span>
            <h2 className="section-title">Four little steps. That's it.</h2>
            <p className="section-description">
              Designed so guests of any age can participate in under thirty seconds.
            </p>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">01</div>
                <div className="step-icon-wrap" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                    <circle cx="12" cy="7" r="1.5" />
                  </svg>
                </div>
                <h3 className="step-title">Scan</h3>
                <p className="step-desc">Point your camera at the QR code sitting on the table.</p>
              </div>

              <div className="step-card">
                <div className="step-num">02</div>
                <div className="step-icon-wrap" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <h3 className="step-title">Pick</h3>
                <p className="step-desc">Choose the moments you want to share straight from your camera roll.</p>
              </div>

              <div className="step-card">
                <div className="step-num">03</div>
                <div className="step-icon-wrap" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="step-title">Say something</h3>
                <p className="step-desc">Add a caption, if you feel like it. Who took it, or what happened.</p>
              </div>

              <div className="step-card">
                <div className="step-num">04</div>
                <div className="step-icon-wrap" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className="step-title">Remember</h3>
                <p className="step-desc">Your photo becomes part of the permanent event gallery for everyone to keep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 6: PHOTO PREVIEW / OUR GALLERY
        -------------------------------------------- */}
        <section id="gallery" className="section-wrapper gallery-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="section-tag">The collective story</span>
              <h2 className="section-title">
                A hundred little perspectives.
                <br />
                One beautiful memory.
              </h2>
              <p className="section-description" style={{ margin: '0 auto' }}>
                Every perspective adds texture: click any moment to inspect it or send a heart.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="gallery-filters" role="tablist" aria-label="Gallery Categories">
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
                role="tab"
                aria-selected={activeFilter === 'all'}
              >
                All Perspectives
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'weddings' ? 'active' : ''}`}
                onClick={() => setActiveFilter('weddings')}
                role="tab"
                aria-selected={activeFilter === 'weddings'}
              >
                Weddings
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'graduations' ? 'active' : ''}`}
                onClick={() => setActiveFilter('graduations')}
                role="tab"
                aria-selected={activeFilter === 'graduations'}
              >
                Graduations
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'birthdays' ? 'active' : ''}`}
                onClick={() => setActiveFilter('birthdays')}
                role="tab"
                aria-selected={activeFilter === 'birthdays'}
              >
                Birthdays
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'quiet' ? 'active' : ''}`}
                onClick={() => setActiveFilter('quiet')}
                role="tab"
                aria-selected={activeFilter === 'quiet'}
              >
                Quiet Moments
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-masonry">
              {filteredGallery.map((item) => (
                <article
                  key={item.id}
                  className="gallery-item"
                  onClick={() => setLightboxItem(item)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setLightboxItem(item)
                    }
                  }}
                  aria-label={`View moment: ${item.title}`}
                >
                  <div className="gallery-photo-wrapper">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="gallery-photo"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item-footer">
                    <div>
                      <h4 className="gallery-item-caption">{item.title}</h4>
                      <p className="gallery-item-meta">
                        Taken by {item.author} at {item.time}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="gallery-heart-btn"
                      onClick={(e) => handleLike(e, item.id)}
                      aria-label={`Love this photo, currently ${item.hearts} hearts`}
                    >
                      <span>♥</span>
                      <span>{item.hearts}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 7: PHOTO STORY (Cinematic Break)
        -------------------------------------------- */}
        <section className="photo-story-section">
          <img
            src={IMAGES.photoStory}
            alt="Warm golden light filtering through an evening outdoor gathering"
            className="story-bg-image"
          />
          <div className="story-overlay" />
          <div className="container">
            <div className="photo-story-content">
              <span className="section-tag" style={{ color: 'var(--accent-gold)' }}>
                Between the official frames
              </span>
              <h2 className="story-big-quote">
                You might remember the ceremony.
                <br />
                But you'll probably remember this too.
              </h2>
              <p className="story-subquote">
                The moments between the official photographs are where the feeling lives: the unprompted laughter, the whispered jokes, and the quiet glances across the room.
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 8: EVENT TYPES
        -------------------------------------------- */}
        <section id="event-types" className="section-wrapper events-section">
          <div className="container">
            <span className="section-tag">Every celebration</span>
            <h2 className="section-title">Made for the days worth remembering.</h2>
            <p className="section-description">
              Wherever people gather to celebrate someone they care about.
            </p>

            <div className="event-cards-grid">
              <div className="event-card">
                <div className="event-card-img-wrap">
                  <img
                    src={IMAGES.weddingCard}
                    alt="Warm wedding celebration table"
                    className="event-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="event-card-body">
                  <div className="event-card-tag">Weddings</div>
                  <h3 className="event-card-title">Weddings</h3>
                  <p className="event-card-desc">
                    Every laugh, happy tear, dance floor disaster, and quiet moment.
                  </p>
                </div>
              </div>

              <div className="event-card">
                <div className="event-card-img-wrap">
                  <img
                    src={IMAGES.gradCard}
                    alt="Graduation celebration laughter"
                    className="event-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="event-card-body">
                  <div className="event-card-tag">Graduations</div>
                  <h3 className="event-card-title">Graduations</h3>
                  <p className="event-card-desc">
                    From the ceremony to the celebrations nobody planned.
                  </p>
                </div>
              </div>

              <div className="event-card">
                <div className="event-card-img-wrap">
                  <img
                    src={IMAGES.birthdayCard}
                    alt="Birthday candle moment"
                    className="event-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="event-card-body">
                  <div className="event-card-tag">Birthdays</div>
                  <h3 className="event-card-title">Birthdays</h3>
                  <p className="event-card-desc">
                    The photos that happen before anyone says "cheese".
                  </p>
                </div>
              </div>

              <div className="event-card">
                <div className="event-card-img-wrap">
                  <img
                    src={IMAGES.gatheringCard}
                    alt="Family and friends picnic gathering"
                    className="event-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="event-card-body">
                  <div className="event-card-tag">Gatherings</div>
                  <h3 className="event-card-title">Gatherings</h3>
                  <p className="event-card-desc">
                    Family days, reunions, parties, and everything in between.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 9: OUR TEAM
        -------------------------------------------- */}
        <section id="our-team" className="section-wrapper team-section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px auto' }}>
              <span className="section-tag">Human craft</span>
              <h2 className="section-title">The people behind OurLens.</h2>
              <p className="section-description" style={{ margin: '0 auto' }}>
                We're a small team who believes the best memories are often the ones nobody planned.
              </p>
            </div>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-photo-wrap">
                  <img
                    src={IMAGES.teamRahmat}
                    alt="Portrait of Rahmat Maulana"
                    className="team-photo"
                  />
                </div>
                <h3 className="team-name">Rahmat Maulana</h3>
                <div className="team-role">Creative Director</div>
                <p className="team-quote">
                  "Turns ordinary moments into things worth looking twice at."
                </p>
              </div>

              <div className="team-card">
                <div className="team-photo-wrap">
                  <img
                    src={IMAGES.teamSarah}
                    alt="Portrait of Sarah"
                    className="team-photo"
                  />
                </div>
                <h3 className="team-name">Sarah</h3>
                <div className="team-role">Product Designer</div>
                <p className="team-quote">
                  "Obsessed with tiny details and beautiful interfaces."
                </p>
              </div>

              <div className="team-card">
                <div className="team-photo-wrap">
                  <img
                    src={IMAGES.teamAndi}
                    alt="Portrait of Andi"
                    className="team-photo"
                  />
                </div>
                <h3 className="team-name">Andi</h3>
                <div className="team-role">Developer</div>
                <p className="team-quote">
                  "Makes sure everything works when everyone else is busy celebrating."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 10: WHY OURLENS
        -------------------------------------------- */}
        <section id="why-ourlens" className="section-wrapper why-section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
              <span className="section-tag">Perspective</span>
              <h2 className="section-title">
                Because one photographer can't be everywhere.
              </h2>
            </div>

            <div className="comparison-grid">
              <div className="comparison-col">
                <h3 className="comparison-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span>The Official Camera</span>
                </h3>
                <ul className="comparison-traits">
                  <li className="comparison-trait-item">
                    <span className="trait-dot" />
                    <span>Beautiful</span>
                  </li>
                  <li className="comparison-trait-item">
                    <span className="trait-dot" />
                    <span>Polished</span>
                  </li>
                  <li className="comparison-trait-item">
                    <span className="trait-dot" />
                    <span>Planned</span>
                  </li>
                </ul>
              </div>

              <div className="comparison-col highlight">
                <h3 className="comparison-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                  </svg>
                  <span>Everyone Else's Camera</span>
                </h3>
                <ul className="comparison-traits">
                  <li className="comparison-trait-item">
                    <span className="trait-dot" />
                    <span>Unexpected</span>
                  </li>
                  <li className="comparison-trait-item">
                    <span className="trait-dot" />
                    <span>Funny</span>
                  </li>
                  <li className="comparison-trait-item">
                    <span className="trait-dot" />
                    <span>Personal</span>
                  </li>
                  <li className="comparison-trait-item">
                    <span className="trait-dot" />
                    <span>Real</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="why-punchline">
              "We think you need both."
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 11: A REAL EVENT EXPERIENCE (Live Simulation)
        -------------------------------------------- */}
        <section className="section-wrapper live-demo-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span className="section-tag">Interactive experience</span>
              <h2 className="section-title">See an actual event in motion.</h2>
              <p className="section-description" style={{ margin: '0 auto' }}>
                Test the guest experience directly: contribute a memory to Sarah and Dimas's celebration below.
              </p>
            </div>

            <div className="live-event-container">
              <div className="live-event-header">
                <div className="live-event-title-group">
                  <h3>Sarah & Dimas</h3>
                  <div className="live-event-subtitle">Wedding Celebration Gallery</div>
                </div>

                <div className="live-metrics-strip">
                  <div className="metric-pill">
                    <strong>328</strong> moments collected
                  </div>
                  <div className="metric-pill">
                    <strong>12</strong> people shared today
                  </div>
                  <div className="metric-pill">
                    Last uploaded 2 minutes ago
                  </div>
                  <div className="metric-pill" style={{ color: 'var(--accent-terracotta)' }}>
                    Most loved moment ♥
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsUploadModalOpen(true)}
                  >
                    Upload a Moment
                  </button>
                </div>
              </div>

              <div className="live-stream-grid">
                {liveStreamMoments.map((m) => (
                  <div key={m.id} className="live-stream-card">
                    <img src={m.img} alt={m.caption} className="live-stream-img" />
                    <div className="live-stream-caption">{m.caption}</div>
                    <div className="live-stream-author">
                      From {m.author} • {m.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 12: TESTIMONIALS
        -------------------------------------------- */}
        <section className="section-wrapper testimonials-section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <span className="section-tag">Reflections</span>
              <h2 className="section-title">
                People remembered more than they expected.
              </h2>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "I knew our photographer would capture the important stuff. I didn't realize how much I would love seeing everything our friends caught."
                </p>
                <div className="testimonial-author">Sarah (Wedding)</div>
              </div>

              <div className="testimonial-card">
                <p className="testimonial-text">
                  "The funniest photos from graduation were actually the ones my friends took."
                </p>
                <div className="testimonial-author">Dimas (Graduation)</div>
              </div>

              <div className="testimonial-card">
                <p className="testimonial-text">
                  "My favorite photo from my birthday wasn't even one I knew existed."
                </p>
                <div className="testimonial-author">Naya (Birthday)</div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------
            SECTION 13: FINAL EMOTIONAL CTA
        -------------------------------------------- */}
        <section className="final-cta-section">
          <img
            src={IMAGES.finalSunset}
            alt="Warm sunset celebration in the field"
            className="final-cta-bg"
          />
          <div className="container">
            <div className="final-cta-content">
              <h2 className="final-cta-h1">Don't just keep the big moments.</h2>
              <div className="final-cta-h2">Keep everything in between.</div>
              <p className="final-cta-sub">
                Create an OurLens gallery for your next celebration.
              </p>

              <div className="final-cta-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setEventCreated(false)
                    setIsCreateModalOpen(true)
                  }}
                >
                  Create Your Event
                </button>
                <a href="#how-it-works" className="btn btn-secondary">
                  See How It Works
                </a>
              </div>

              <div className="final-brand-mark">
                <span className="final-brand-name">OurLens</span>
                <span className="final-tagline">
                  Capture the moments. Share the memories.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------------------------------
          FOOTER
      -------------------------------------------- */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">OurLens</div>
              <p style={{ marginTop: '6px' }}>
                Capture the moments. Share the memories.
              </p>
            </div>

            <nav aria-label="Footer Navigation">
              <ul className="footer-nav">
                <li><a href="#the-story">Moments</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#our-team">Our Team</a></li>
                <li>
                  <button
                    type="button"
                    style={{ fontSize: '0.95rem', color: 'var(--primary-forest)', fontWeight: 600 }}
                    onClick={() => {
                      setEventCreated(false)
                      setIsCreateModalOpen(true)
                    }}
                  >
                    Create Event
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>Made for the moments between the moments.</span>
            <span>© 2026 OurLens. All memories preserved.</span>
          </div>
        </div>
      </footer>

      {/* -------------------------------------------
          MODAL: CREATE AN EVENT
      -------------------------------------------- */}
      {isCreateModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsCreateModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-create-title"
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsCreateModalOpen(false)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            {!eventCreated ? (
              <div>
                <span className="section-tag">New Celebration</span>
                <h3 id="modal-create-title" className="section-title" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
                  Create Your Event Gallery
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  Enter your celebration details to receive your custom QR code card.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setEventCreated(true)
                  }}
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="event-name">Event Name</label>
                    <input
                      id="event-name"
                      type="text"
                      className="form-input"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      placeholder="e.g. Maya & Rama's Wedding"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="event-type">Celebration Type</label>
                    <select
                      id="event-type"
                      className="form-select"
                      value={newEvent.eventType}
                      onChange={(e) => setNewEvent({ ...newEvent, eventType: e.target.value })}
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Gathering">Family Gathering / Reunion</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="event-date">Date of Celebration</label>
                    <input
                      id="event-date"
                      type="date"
                      className="form-input"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ marginTop: '28px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setIsCreateModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Generate Event Card
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <span className="section-tag">Event Ready</span>
                <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
                  {newEvent.title}
                </h3>
                <p>
                  Your guest gallery is set up. Place this QR card on your tables.
                </p>

                <div className="qr-preview-box">
                  <div className="washi-tape washi-tape-top" />
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600 }}>
                    OUR LENS
                  </div>
                  <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--primary-forest)', margin: '4px 0 16px 0' }}>
                    {newEvent.title}
                  </div>
                  <div className="qr-code-graphic" style={{ width: '130px', height: '130px' }}>
                    <svg viewBox="0 0 100 100" width="100" height="100">
                      <rect x="10" y="10" width="25" height="25" fill="#2C5E3B" rx="3" />
                      <rect x="15" y="15" width="15" height="15" fill="#FFF" rx="2" />
                      <rect x="18" y="18" width="9" height="9" fill="#2C5E3B" rx="1" />
                      <rect x="65" y="10" width="25" height="25" fill="#2C5E3B" rx="3" />
                      <rect x="70" y="15" width="15" height="15" fill="#FFF" rx="2" />
                      <rect x="73" y="18" width="9" height="9" fill="#2C5E3B" rx="1" />
                      <rect x="10" y="65" width="25" height="25" fill="#2C5E3B" rx="3" />
                      <rect x="15" y="70" width="15" height="15" fill="#FFF" rx="2" />
                      <rect x="18" y="73" width="9" height="9" fill="#2C5E3B" rx="1" />
                      <rect x="45" y="15" width="8" height="8" fill="#2C5E3B" />
                      <rect x="45" y="35" width="14" height="8" fill="#2C5E3B" />
                      <rect x="65" y="45" width="10" height="10" fill="#2C5E3B" />
                      <rect x="45" y="65" width="12" height="12" fill="#2C5E3B" />
                    </svg>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Scan to drop your photos
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--primary-forest)', marginTop: '4px' }}>
                    {newEvent.code}
                  </div>
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      alert('QR code card ready for download.')
                    }}
                  >
                    Download Printable Card
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsCreateModalOpen(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------
          MODAL: PHOTO LIGHTBOX
      -------------------------------------------- */}
      {lightboxItem && (
        <div
          className="modal-backdrop"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
        >
          <div
            className="modal-dialog lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setLightboxItem(null)}
              aria-label="Close Lightbox"
            >
              ✕
            </button>
            <div className="lightbox-img-wrapper">
              <img
                src={lightboxItem.img}
                alt={lightboxItem.title}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-details">
              <div>
                <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.8rem', color: 'var(--text-ink)', marginBottom: '4px' }}>
                  {lightboxItem.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Contributed by <strong>{lightboxItem.author}</strong> at {lightboxItem.time}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ color: 'var(--accent-terracotta)', display: 'flex', alignItems: 'center', gap: '6px' }}
                onClick={(e) => handleLike(e, lightboxItem.id)}
              >
                <span>♥</span>
                <span>{lightboxItem.hearts}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------
          MODAL: UPLOAD A MOMENT (Live simulation)
      -------------------------------------------- */}
      {isUploadModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsUploadModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="upload-modal-title"
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsUploadModalOpen(false)}
              aria-label="Close dialog"
            >
              ✕
            </button>
            <span className="section-tag">Sarah & Dimas Celebration</span>
            <h3 id="upload-modal-title" className="section-title" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
              Add Your Moment
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Simulate contributing a candid photo to the live event gallery.
            </p>

            <form onSubmit={handleUploadSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="guest-name">Your Name</label>
                <input
                  id="guest-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Maya, Tari, Kevin"
                  value={uploadFormData.author}
                  onChange={(e) => setUploadFormData({ ...uploadFormData, author: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guest-caption">Caption</label>
                <input
                  id="guest-caption"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Dancing when nobody watched"
                  value={uploadFormData.caption}
                  onChange={(e) => setUploadFormData({ ...uploadFormData, caption: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="photo-choice">Choose a Candid Snapshot</label>
                <select
                  id="photo-choice"
                  className="form-select"
                  value={uploadFormData.photoIdx}
                  onChange={(e) => setUploadFormData({ ...uploadFormData, photoIdx: Number(e.target.value) })}
                >
                  <option value={0}>Friends laughing at Table 2</option>
                  <option value={1}>Someone holding the sparkler</option>
                  <option value={2}>Spontaneous group toast</option>
                </select>
              </div>

              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsUploadModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Post to Live Stream
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
