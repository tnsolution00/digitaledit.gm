
import heroPhoto from './images/hero.jpg';
import goldenHourPhoto from './images/golden-hour.jpg';
import modernMusePhoto from './images/modern-muse.jpg';
import quietLuxuryPhoto from './images/quiet-luxury.jpg';
import eventsPhoto from './images/events.jpg';
import heritagePhoto from './images/heritage.jpg';
import afterglowPhoto from './images/afterglow.jpg';
import essentialPhoto from './images/essential.jpg';
import signaturePhoto from './images/signature.jpg';
import editorialPhoto from './images/editorial.jpg';
import eventPackagePhoto from './images/event-package.jpg';
import founderPhoto from './images/founder.jpg';
import picture1 from './pictures/image1.jpg';
import picture2 from './pictures/image2.jpg';
import picture3 from './pictures/image3.jpg';
import picture4 from './pictures/image4.jpg';
import picture5 from './pictures/image5.jpg';
import picture6 from './pictures/image6.jpg';
import picture7 from './pictures/image7.jpg';
import picture8 from './pictures/image8.jpg';
import picture9 from './pictures/image9.jpg';
import picture10 from './pictures/image10.jpg';
import picture11 from './pictures/image11.jpg';
import picture12 from './pictures/image12.jpg';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ArrowUpRight, Menu, X, Instagram, MessageCircle, Sparkles, Aperture, Image as ImageIcon, Heart, ChevronDown, Check, ArrowRight } from 'lucide-react';
import './styles.css';

const WHATSAPP_NUMBER = '2204199710'; // DigitalEdit.gm WhatsApp
const INSTAGRAM_URL = 'https://www.instagram.com/digitaledit.gm/';

/* ============================================================
   PHOTO IMPORTS — EDIT YOUR IMAGE FILENAMES HERE
   1. Put your photos in: public/images/
   2. Keep the filenames below in sync with your actual files.
   3. Example: public/images/hero.jpg is referenced as /images/hero.jpg
   JPG, JPEG, PNG and WEBP are supported by the browser.
   ============================================================ */
const SITE_PHOTOS = {
  hero: heroPhoto,
  goldenHour: goldenHourPhoto,
  modernMuse: modernMusePhoto,
  quietLuxury: quietLuxuryPhoto,
  events: eventsPhoto,
  heritage: heritagePhoto,
  afterglow: afterglowPhoto,
};

// Add, remove, or rename portfolio items here. Every gallery card and its
// enlarged click-to-view preview automatically use the same image path.
const portfolio = [
  { title: 'Golden Hour', category: 'Portraits', tag: 'PORTRAIT STUDY', image: SITE_PHOTOS.goldenHour, desc: 'A signature portrait by DigitalEdit.gm.' },
  { title: 'The Modern Muse', category: 'Editorial', tag: 'EDITORIAL', image: SITE_PHOTOS.modernMuse, desc: 'Fashion-forward imagery by DigitalEdit.gm.' },
  { title: 'Quiet Luxury', category: 'Portraits', tag: 'STUDIO PORTRAIT', image: SITE_PHOTOS.quietLuxury, desc: 'A refined studio portrait by DigitalEdit.gm.' },
  { title: 'A Day to Remember', category: 'Events', tag: 'CELEBRATION', image: SITE_PHOTOS.events, desc: 'A special moment captured by DigitalEdit.gm.' },
  { title: 'Heritage', category: 'Editorial', tag: 'CULTURE & STYLE', image: SITE_PHOTOS.heritage, desc: 'Culture, style and expression by DigitalEdit.gm.' },
  { title: 'Afterglow', category: 'Retouching', tag: 'COLOUR & RETOUCH', image: SITE_PHOTOS.afterglow, desc: 'A finished image by DigitalEdit.gm.' },
];
const services = [
  { n: '01', icon: Camera, title: 'Portrait Photography', text: 'Individual, graduation, birthday and personal-brand portraits made to feel timeless.', gallery: [
    { title: 'Portrait Study 01', image: picture1, caption: 'A timeless portrait, captured with intention.' },
    { title: 'Portrait Study 02', image: picture2, caption: 'Natural expression and refined light.' },
    { title: 'Portrait Study 03', image: picture3, caption: 'Personality and detail in every frame.' },
  ] },
  { n: '02', icon: Sparkles, title: 'Premium Photo Editing', text: 'Careful retouching, skin refinement, colour grading and polished final images.', gallery: [
    { title: 'Retouching 01', image: picture4, caption: 'Careful retouching with a natural finish.' },
    { title: 'Retouching 02', image: picture5, caption: 'Colour, tone and detail brought together.' },
    { title: 'Retouching 03', image: picture6, caption: 'A polished final image, ready to be seen.' },
  ] },
  { n: '03', icon: ImageIcon, title: 'Events & Celebrations', text: 'Meaningful moments captured with detail, emotion and a refined final finish.', gallery: [
    { title: 'Celebration 01', image: picture7, caption: 'The moments that deserve to be remembered.' },
    { title: 'Celebration 02', image: picture8, caption: 'Atmosphere, emotion and beautiful details.' },
    { title: 'Celebration 03', image: picture9, caption: 'Stories from moments shared together.' },
  ] },
  { n: '04', icon: Aperture, title: 'Fashion & Editorial', text: 'Creative portraits, beauty imagery and bold visual stories with magazine-inspired style.', gallery: [
    { title: 'Editorial 01', image: picture10, caption: 'Fashion-forward imagery with a distinct point of view.' },
    { title: 'Editorial 02', image: picture11, caption: 'Style, confidence and creative expression.' },
    { title: 'Editorial 03', image: picture12, caption: 'A bold visual story, finished with care.' },
  ] },
];

// Official pricing: D800 per photography session, including up to 10 photos.
// Transportation is compulsory and charged separately according to location.
const SESSION_PRICE = 800;
const MAX_PHOTOS_PER_SESSION = 10;
const packages = [
  {
    name: 'Photography Session',
    image: essentialPhoto,
    label: 'STANDARD SESSION',
    price: `D${SESSION_PRICE.toLocaleString('en-US')}`,
    details: [
      'One professional photography session',
      'Up to 10 professionally captured photos',
      'Professional photo editing',
      'High-resolution digital delivery',
      'Compulsory transportation fee quoted separately',
    ],
  },
  {
    name: 'Event Coverage',
    image: eventPackagePhoto,
    label: 'SPECIAL MOMENTS',
    price: 'Custom Quote',
    details: [
      'Photography coverage tailored to your event',
      'Photo quantity agreed before booking',
      'Professional editing',
      'Transportation quoted according to location',
    ],
  },
];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', service: 'Portrait Photography', date: '', message: '' });
  const [sent, setSent] = useState(false);
  const filters = ['All', 'Portraits', 'Editorial', 'Events', 'Retouching'];
  const shown = activeFilter === 'All' ? portfolio : portfolio.filter(p => p.category === activeFilter);
  const whatsapp = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello DigitalEdit.gm, I'd like to make an enquiry.\nName: ${form.name}\nService: ${form.service}\nPreferred date: ${form.date || 'Flexible'}\nLocation (for compulsory transportation fee): Please confirm with me.\nDetails: ${form.message || 'Please share availability and pricing.'}`;
    window.open(whatsapp(msg), '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="topline"><span>THE ART OF BEING SEEN</span><span>PHOTOGRAPHY · RETOUCHING · THE GAMBIA</span></div>
    <header className="nav">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark"><Aperture size={26}/></span><span><strong>DigitalEdit<span>.gm</span></strong><small>PHOTOGRAPHY STUDIO</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {[['Home','#home'],['Portfolio','#portfolio'],['Packages','#packages'],['Meet the owner','#founder'],['Services','#services'],['Contact','#contact']].map(([label,href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Book a session <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" style={{ backgroundImage: `url("${SITE_PHOTOS.hero}")` }} role="img" aria-label="DigitalEdit.gm featured photography" />
        <div className="hero-vignette"/>
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.7}}>CAPTURED WITH INTENTION <span>✳</span> FINISHED WITH ART</motion.p>
          <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>Every image.<br/><em>A little more</em> <span>extraordinary.</span></motion.h1>
          <motion.p className="hero-copy" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}}>Premium photography and high-class photo editing, crafted to bring out the most beautiful version of every moment.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}>
            <a className="button button-gold" href="#portfolio">Explore the portfolio <ArrowUpRight size={17}/></a>
            <a className="text-link" href="#contact"><span className="play-icon"><Camera size={18}/></span> Let’s create something</a>
          </motion.div>
          <div className="hero-note"><span className="note-line"/><span>THE DETAILS MAKE THE DIFFERENCE</span></div>
        </div>
        <div className="hero-caption"><span>01 / 06</span><span>PORTRAIT STUDY — EDITORIAL FINISH</span></div>
        <a href="#portfolio" className="scroll-cue">SCROLL TO DISCOVER <ChevronDown size={15}/></a>
      </section>

      <section className="intro section-pad" id="approach">
        <div className="intro-kicker"><span className="gold-dot"/> OUR POINT OF VIEW</div>
        <div className="intro-grid">
          <h2>Not just a photo.<br/><em>A feeling that stays.</em></h2>
          <div className="intro-copy"><p>Light, expression, colour, detail. We bring every element together to create images that feel considered, confident and unmistakably you.</p><p>From the first frame to the final retouch, our approach is simple: preserve what makes you you, then elevate the details.</p><a className="underlined-link" href="#services">Discover our craft <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="stats-row"><div><strong>01</strong><span>Every detail matters</span></div><div><strong>02</strong><span>Natural, refined retouching</span></div><div><strong>03</strong><span>Made to be remembered</span></div></div>
      </section>

      <section className="packages-section section-pad" id="packages">
        <div className="section-heading">
          <div><p className="eyebrow dark-eyebrow">CHOOSE YOUR EXPERIENCE</p><h2>Photography, <em>beautifully priced.</em></h2></div>
          <p className="section-side-copy">One professional photography session costs D800 and includes up to 10 beautifully captured and edited photos. Transportation is compulsory and charged separately according to your location.</p>
        </div>
        <div className="package-grid">
          {packages.map((item, index) => (
            <article className="package-card" key={item.name}>
              <div className="package-image-wrap">
                <img src={item.image} alt={`${item.name} photography package example`} loading="lazy" />
                <span>{item.label}</span>
              </div>
              <div className="package-content">
                <p className="package-number">PACKAGE 0{index + 1}</p>
                <h3>{item.name}</h3>
                <strong className="package-price">{item.price}</strong>
                {item.name === 'Photography Session' && <p className="package-photo-count">Maximum {MAX_PHOTOS_PER_SESSION} photos included</p>}
                <ul>{item.details.map(detail => <li key={detail}><Check size={15} />{detail}</li>)}</ul>
                <a className="package-cta" href={whatsapp(`Hello DigitalEdit.gm, I am interested in ${item.name}. ${item.name === 'Photography Session' ? 'I understand the session costs D800 and includes up to 10 professionally captured and edited photos.' : 'Please share your event coverage quotation.'} Please confirm availability and the compulsory transportation fee for my location: [my location].`)} target="_blank" rel="noreferrer">Enquire about this package <ArrowUpRight size={16}/></a>
              </div>
            </article>
          ))}
        </div>
        <p className="package-note">A photography session costs D800 and includes up to 10 professionally captured and edited photos. Additional sessions can be discussed. Transportation is compulsory and charged separately according to your location. Event coverage is quoted individually.</p>
      </section>

      <section className="founder-section section-pad" id="founder">
        <div className="founder-image">
          <img src={founderPhoto} alt="Westward Princess, founder of DigitalEdit.gm" loading="lazy" />
          <span>THE CREATIVE VISION</span>
        </div>
        <div className="founder-copy">
          <p className="eyebrow dark-eyebrow">MEET THE FOUNDER</p>
          <h2>The vision behind <em>the lens.</em></h2>
          <h3>Westward Princess</h3>
          <p>At the heart of DigitalEdit.gm is Westward Princess, the creative mind behind the brand. With a passion for photography, visual expression and the details that make an image memorable, she is building a creative space dedicated to capturing moments and presenting every image with care.</p>
          <p>DigitalEdit.gm is guided by a simple belief: every photograph has a story worth telling. From the first frame to the final edit, the aim is to bring that story forward through thoughtful imagery and a refined finish.</p>
          <a className="founder-link" href={whatsapp('Hello Westward Princess, I would love to learn more about DigitalEdit.gm and your photography services.')} target="_blank" rel="noreferrer">Connect with the founder <ArrowUpRight size={16}/></a>
          <small>Founder biography: a brand introduction based on the details currently provided. A personal founder photograph and more background can be added later.</small>
        </div>
      </section>

      <section className="portfolio-section section-pad" id="portfolio">
        <div className="section-heading"><div><p className="eyebrow dark-eyebrow">A SELECTION OF OUR WORK</p><h2>Stories in <em>every frame.</em></h2></div><p className="section-side-copy">A glimpse into the portraits, moments and transformations that inspire us.</p></div>
        <div className="filters" role="group" aria-label="Filter portfolio">{filters.map(f => <button key={f} className={activeFilter === f ? 'filter active' : 'filter'} onClick={() => setActiveFilter(f)}>{f}</button>)}</div>
        <motion.div layout className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((item,i) => <motion.button layout key={item.title} className={`work-card work-${i%3}`} onClick={() => setSelected(item)} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} transition={{duration:.3}} aria-label={`View ${item.title}`}>
              <img src={item.image} alt={item.title} loading="lazy"/><span className="work-shade"/><span className="work-tag">{item.tag}</span><span className="work-info"><span><strong>{item.title}</strong><small>{item.category}</small></span><span className="work-arrow"><ArrowUpRight size={18}/></span></span>
            </motion.button>)}
          </AnimatePresence>
        </motion.div>
        
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading light-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Crafted with care.<br/><em>Finished with feeling.</em></h2></div><p className="section-side-copy">A considered creative service for the moments and images you want to keep close.</p></div>
        <div className="service-list">{services.map((s) => <button type="button" className="service-row service-explore" key={s.n} onClick={() => setActiveService(s)} aria-label={`Explore ${s.title}`}><span className="service-number">{s.n}</span><span className="service-icon"><s.icon size={22}/></span><span className="service-main"><h3>{s.title}</h3><p>{s.text}</p></span><span className="service-explore-label">EXPLORE <ArrowUpRight size={20}/></span></button>)}</div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div><p>Beautiful images do more than show a moment.<br/><em>They let you feel it again.</em></p><span>DIGITALEDIT.GM — OUR PHILOSOPHY</span>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-left"><p className="eyebrow dark-eyebrow">YOUR MOMENT, BEAUTIFULLY TOLD</p><h2>Let’s make<br/><em>it unforgettable.</em></h2><p>Tell us what you have in mind. We’ll help you plan a session or find the right finishing touch for your photographs.</p><div className="contact-links"><a href={whatsapp('Hello DigitalEdit.gm, I would like to enquire about a photography session.')} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat on WhatsApp <ArrowUpRight size={16}/></a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={18}/> Follow on Instagram <ArrowUpRight size={16}/></a></div></div>
        <form className="contact-form" onSubmit={submit}>
          <label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="How should we address you?"/></label>
          <div className="form-row"><label>I'm interested in<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>Portrait Photography</option><option>Premium Photo Editing</option><option>Events & Celebrations</option><option>Fashion & Editorial</option><option>Photography package</option><option>Other enquiry</option></select></label><label>Preferred date<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label></div>
          <label>Tell us a little more<textarea rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What are you imagining?"/></label>
          <button className="button button-dark" type="submit">Send an enquiry <ArrowUpRight size={17}/></button>
          {sent && <p className="form-success"><Check size={15}/> WhatsApp should open with your enquiry. If it didn't, use the WhatsApp link beside this form.</p>}
          <small className="form-note">This form opens WhatsApp with your details; it does not store submissions on a server.</small>
        </form>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Aperture size={24}/></span><span><strong>DigitalEdit<span>.gm</span></strong><small>PHOTOGRAPHY STUDIO</small></span></a><p>Photographs to keep. Details to remember.</p><div><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a><a href={whatsapp('Hello DigitalEdit.gm!')} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a></div><small>© {new Date().getFullYear()} DigitalEdit.gm. Designed with intention.</small></footer>

    <AnimatePresence>{activeService && <motion.div className="service-gallery-backdrop" role="dialog" aria-modal="true" aria-label={`${activeService.title} gallery`} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setActiveService(null)}><motion.section className="service-gallery-modal" initial={{y:28,opacity:0,scale:.985}} animate={{y:0,opacity:1,scale:1}} exit={{y:24,opacity:0}} transition={{duration:.28}} onClick={e => e.stopPropagation()}><div className="service-gallery-top"><div><p className="eyebrow dark-eyebrow">DIGITALEDIT.GM · SERVICE {activeService.n}</p><h2>{activeService.title}</h2><p>{activeService.text}</p></div><button type="button" className="service-gallery-close" onClick={() => setActiveService(null)} aria-label="Close gallery"><X size={22}/></button></div><div className="service-gallery-grid">{activeService.gallery.map((photo, index) => <article className="service-gallery-card" key={`${activeService.n}-${photo.title}-${index}`}><img src={photo.image} alt={photo.title} loading="lazy"/><div><span>0{index + 1} / 0{activeService.gallery.length}</span><h3>{photo.title}</h3><p>{photo.caption}</p></div></article>)}</div><div className="service-gallery-footer"><span>HAVE A PROJECT IN MIND?</span><a href={whatsapp(`Hello DigitalEdit.gm, I am interested in ${activeService.title}. Please share your availability and pricing.`)} target="_blank" rel="noreferrer" className="button button-dark">Enquire about this service <ArrowUpRight size={16}/></a></div></motion.section></motion.div>}</AnimatePresence>

    <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}><motion.div className="work-modal" initial={{y:20,scale:.98}} animate={{y:0,scale:1}} exit={{y:20}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close project"><X/></button><img src={selected.image} alt={selected.title}/><div className="modal-copy"><span>{selected.tag}</span><h3>{selected.title}</h3><p>{selected.desc}</p><a href="#contact" onClick={()=>setSelected(null)}>Discuss a similar look <ArrowRight size={16}/></a></div></motion.div></motion.div>}</AnimatePresence>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);