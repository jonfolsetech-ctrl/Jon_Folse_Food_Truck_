'use client';

import type { Metadata } from "next";
import Image from "next/image";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "South Louisiana Food Truck & Catering",
  description: "Find Jon Folse Food Truck in Gonzales, Baton Rouge, New Orleans, and across South Louisiana. Explore our Louisiana menu or book food truck catering.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["FoodEstablishment", "LocalBusiness"],
  name: "Jon Folse Food Truck",
  url: "https://jon-folse-food-truck.jon-folse-tech.chatgpt.site",
  image: "https://jon-folse-food-truck.jon-folse-tech.chatgpt.site/jonfolsefoodtrucklogo.png",
  logo: "https://jon-folse-food-truck.jon-folse-tech.chatgpt.site/jonfolsefoodtrucklogo.png",
  description: "Louisiana food truck and catering serving Gonzales, Baton Rouge, New Orleans, and communities across South Louisiana.",
  servesCuisine: ["Louisiana", "Cajun", "Creole", "Southern"],
  priceRange: "Prices vary by menu and event",
  areaServed: [
    { "@type": "City", name: "Gonzales", containedInPlace: { "@type": "State", name: "Louisiana" } },
    { "@type": "City", name: "Baton Rouge", containedInPlace: { "@type": "State", name: "Louisiana" } },
    { "@type": "City", name: "New Orleans", containedInPlace: { "@type": "State", name: "Louisiana" } },
    { "@type": "AdministrativeArea", name: "South Louisiana" },
  ],
  hasMenu: "https://jon-folse-food-truck.jon-folse-tech.chatgpt.site/#menu",
  sameAs: [],
};

const menuGroups = [
  { eyebrow: "From the pot", title: "Bayou bowls", items: [
    ["Chicken & Andouille Gumbo", "Dark roux, smoked sausage, rice, scallions"],
    ["Crawfish Étouffée", "Louisiana crawfish, rich shellfish gravy, rice"],
    ["Red Beans & Rice", "Slow-simmered beans, smoked sausage, Louisiana rice"],
  ]},
  { eyebrow: "From the griddle", title: "Handhelds", items: [
    ["Cajun Chicken Po’boy", "Blackened chicken, dressed, rémoulade"],
    ["Boudin Melt", "Boudin, pepper jack, caramelized onion, Creole mustard"],
    ["Crispy Shrimp Po’boy", "Cornmeal shrimp, dressed, house rémoulade"],
  ]},
  { eyebrow: "Something extra", title: "Lagniappe", items: [
    ["Cajun Fries", "Seasoned hot fries with house dipping sauce"],
    ["Bread Pudding", "Warm spice, pecan praline sauce"],
    ["Sweet Tea", "Fresh-brewed and Southern sweet"],
  ]},
];
const schedule = [
  ["Thursday", "Location to be announced", "11:00 AM–2:00 PM"],
  ["Friday", "Location to be announced", "5:00–8:00 PM"],
  ["Saturday", "Private event", "Catering availability"],
];
function Flourish() { return <span className="flourish" aria-hidden="true"><i /><b>✦</b><i /></span>; }

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <a className="mini-brand" href="#top" aria-label="Jon Folse Food Truck home"><span className="mini-mark"><Image unoptimized src="/jonfolsefoodtrucklogo.png" alt="" width={42} height={42} /></span><span>Jon Folse<small>Food Truck</small></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#catering">Catering</a><a href="#find-us">Find us</a></nav>
      <a className="button button-small" href="#contact">Book the truck</a>
      <details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><nav aria-label="Mobile navigation"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#catering">Catering</a><a href="#find-us">Find us</a><a href="#contact">Book the truck</a></nav></details>
    </header>

    <section className="hero" id="top">
      <div className="hero-art" aria-hidden="true"><div className="sun" /><div className="skyline"><span /><span /><span /><span /><span /></div><div className="river"><i /><i /><i /></div></div>
      <div className="hero-content" id="main-content">
        <p className="eyebrow light">Gonzales · Baton Rouge · New Orleans · South Louisiana</p>
        <div className="brand-seal"><Image unoptimized className="brand-art" src="/jonfolsefoodtrucklogo.png" alt="Jon Folse Food Truck — rooted in Louisiana, cooked with heritage" width={1256} height={1256} priority /></div>
        <h1>Good food has a way<br />of bringing folks together.</h1>
        <p className="hero-copy">Deep Louisiana flavor, generous portions, and warm food truck catering from Gonzales and Baton Rouge to New Orleans and communities across South Louisiana.</p>
        <div className="hero-actions"><a className="button" href="#menu">Explore the menu</a><a className="text-link" href="#find-us">See where we’re rolling <span aria-hidden="true">→</span></a></div>
      </div>
      <div className="scroll-cue" aria-hidden="true">Scroll to taste <span>↓</span></div>
    </section>
    <section className="marquee" aria-label="Our values"><div><span>Made from scratch</span><b>✦</b><span>Louisiana roots</span><b>✦</b><span>Served with soul</span><b>✦</b><span>Gather round</span></div></section>

    <section className="section menu-section" id="menu">
      <div className="section-heading"><p className="eyebrow">Straight from the cast-iron pot</p><h2>A little taste of Louisiana</h2><Flourish /><p>Built on the dishes that feed a crowd and start a story. Menu and availability may change with the season.</p></div>
      <div className="menu-grid">{menuGroups.map((group,index)=><article className="menu-card" key={group.title}><div className="menu-number">0{index+1}</div><p className="eyebrow">{group.eyebrow}</p><h3>{group.title}</h3><ul>{group.items.map(([name,description])=><li key={name}><div><strong>{name}</strong><span className="price">Price TBD</span></div><p>{description}</p></li>)}</ul></article>)}</div>
      <p className="menu-note">Ask about vegetarian options and current allergen information when ordering.</p>
    </section>

    <section className="story-section" id="story">
      <div className="story-image"><div className="story-frame"><span className="story-fleur" aria-hidden="true">⚜</span><p>Louisiana<br /><strong>heritage</strong><br />on wheels</p></div><div className="story-stamp">Made with<br />Louisiana soul</div></div>
      <div className="story-copy"><p className="eyebrow light">Our story</p><h2>Where the river runs deep, so do the flavors.</h2><Flourish /><p>Jon Folse Food Truck is a celebration of Louisiana’s table—where French, African, Spanish, Native American, and Caribbean influences have met for generations.</p><p>We carry that spirit forward with slow-built flavor, familiar hospitality, and food made to be shared. No pretense. No shortcuts. Just a good meal and a place for everybody to pull up a chair.</p><div className="signature">Jon Folse <span>Food Truck</span></div></div>
    </section>

    <section className="section catering-section" id="catering">
      <div className="catering-copy"><p className="eyebrow">South Louisiana food truck catering</p><h2>Big flavor.<br />Your occasion.</h2><p>From backyard celebrations in Gonzales to company lunches in Baton Rouge and private events near New Orleans, we bring the kitchen, the hospitality, and a menu your guests will talk about long after the last bite.</p><ul className="check-list"><li>Private parties & celebrations</li><li>Corporate lunches & team events</li><li>Festivals & community gatherings</li><li>Custom menu options</li></ul><a className="button button-navy" href="#contact">Start your catering inquiry</a></div>
      <div className="catering-poster" aria-label="Catering from intimate gatherings to big celebrations"><span>Pass a good time</span><strong>YOUR<br />PARTY.<br />OUR POT.</strong><div className="pot" aria-hidden="true"><i>♨</i></div><small>From intimate gatherings<br />to big celebrations</small></div>
    </section>

    <section className="schedule-section" id="find-us">
      <div className="section-heading light-heading"><p className="eyebrow light">Find the truck in South Louisiana</p><h2>Come meet us down the road</h2><Flourish /><p>Our mobile schedule changes with events and the seasons. Follow our stops throughout Gonzales, Greater Baton Rouge, Greater New Orleans, and South Louisiana.</p></div>
      <div className="schedule-wrap"><div className="schedule-card"><div className="schedule-head"><span>This week</span><small>Sample schedule · update before launch</small></div>{schedule.map(([day,place,time])=><div className="schedule-row" key={day}><strong>{day}</strong><span>{place}</span><time>{time}</time></div>)}</div><aside className="location-card"><span className="fleur" aria-hidden="true">⚜</span><h3>Want us in your neighborhood?</h3><p>Tell us where the hungry folks are.</p><a href="#contact">Invite the truck <span aria-hidden="true">→</span></a></aside></div>
      <div className="service-area" aria-labelledby="service-area-title"><p className="eyebrow light">Service area</p><h3 id="service-area-title">Serving events across South Louisiana</h3><p>Based on availability, Jon Folse Food Truck serves Gonzales and Ascension Parish, Baton Rouge and the Capital Region, New Orleans and surrounding communities, plus private events throughout South Louisiana.</p><ul><li>Gonzales & Ascension Parish</li><li>Greater Baton Rouge</li><li>Greater New Orleans</li><li>South Louisiana events</li></ul></div>
    </section>

    <section className="gallery-section" aria-labelledby="gallery-title"><div className="gallery-title-wrap"><p className="eyebrow">Scenes from the road</p><h2 id="gallery-title">Pull up hungry</h2></div><div className="gallery-grid"><figure className="gallery-one"><div className="gallery-art bowl" aria-hidden="true"><span>✦</span></div><figcaption>Slow-built Louisiana flavor</figcaption></figure><figure className="gallery-two"><div className="gallery-art quarter" aria-hidden="true"><span>NEW ORLEANS</span></div><figcaption>Heritage in every detail</figcaption></figure><figure className="gallery-three"><div className="gallery-art truck" aria-hidden="true"><span>JON FOLSE</span></div><figcaption>Rolling to a stop near you</figcaption></figure></div></section>

    <section className="contact-section" id="contact"><div><p className="eyebrow light">Let’s feed some folks</p><h2>Ready to get<br />something cooking?</h2></div><div className="contact-copy"><p>Whether you’re planning an event, inviting the truck to your neighborhood, or just wondering what’s in the pot—we’d love to hear from you.</p><a className="button" href="mailto:your-email@example.com?subject=Jon%20Folse%20Food%20Truck%20Inquiry">Send an inquiry</a><p className="placeholder-note">Replace <strong>your-email@example.com</strong> with the business email before launch.</p></div></section>
    <footer><a className="footer-brand" href="#top"><span>JON FOLSE</span><small>FOOD TRUCK</small></a><div className="footer-links"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#catering">Catering</a><a href="#find-us">Schedule</a></div><div className="footer-contact"><span>Louisiana · On the move</span><a href="mailto:your-email@example.com">your-email@example.com</a><span>(000) 000-0000</span></div><div className="footer-bottom"><span>© 2026 Jon Folse Food Truck</span><span>Made with soul in Louisiana</span></div></footer>
  </main>;
}
