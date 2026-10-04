# Jai Shree Radha Plywood Pvt. Ltd. — Complete Website Plan & Content

> **How to use this file:** Everything in `[square brackets]` is a placeholder. Replace it with a real fact. Never publish invented numbers, certifications or years. Google and AI engines reward specific, true details.

---

## PART 1: COMPANY ANALYSIS

### 1.1 What the company is
- **Name:** Jai Shree Radha Plywood Private Limited
- **Business:** Plywood supply and distribution (sale of plywood for furniture, interiors, residential, commercial and construction use)
- **Base:** Ward No. 13, Sahwajpur, PO Bhadreshwar, PS Bathnaha, Forbesganj, Dist. Araria, Bihar, PIN 854316
- **Leader:** Jay Prakash Mandal, Managing Director
- **Phone / WhatsApp:** +91 70911 61465
- **Tagline (deck):** Strong Foundations. Superior Plywood. Built to Last.
- **Closing line (deck):** Building Strength. Delivering Quality. Growing with Trust.

### 1.2 Who the customers are (B2B first)
| Segment | What they need |
|---|---|
| Dealers & distributors | Steady stock, fair pricing, repeat supply |
| Retailers / shop owners | Reliable brand-quality sheets, quick restocking |
| Furniture makers & carpenters | Uniform thickness, clean surface, no warping |
| Contractors & builders | Bulk quantity, on-time delivery |
| Interior designers | Variety, finish quality, advice on the right type |
| Homeowners (via dealers) | Durable, safe, good-value material |

### 1.3 Strengths to highlight
1. B2B focus with bulk and repeat-order supply
2. Consistency message: thickness, finish, strength
3. Local presence in Seemanchal (Araria, Forbesganj, Purnia, Kishanganj, Katihar region), where organised plywood suppliers are fewer
4. Growing market (the deck cites India at about USD 7.17B in 2025 and about 5% yearly growth; verify with a source before publishing)
5. Clear growth plan: dealer network, B2B partnerships, regional expansion

### 1.4 Gaps to fix before launch
| Gap in the deck | Fix |
|---|---|
| No product list, grades, thicknesses or sizes | Add the real range (Products page) |
| Not clear if you manufacture or only trade/distribute | Decide the exact wording and use it everywhere |
| No years in business, client count or projects | Add real numbers |
| No certifications | Mention ISI / IS 303 / IS 710 / BWP / BWR / other marks **only if you hold them** |
| Email `jayparkas709116@gmail.com` looks like a typo | Confirm; ideally use `info@yourdomain.com` |
| Stock images (bird, call-centre man) | Replace with real photos: godown, stacks, team, delivery |
| Competitor table with "Unorganized players ✗" | Do **not** publish; it reads as negative. Convert into positive "Why choose us" points |
| Team photo is low quality | Use a clear, professional photo |

### 1.5 Brand personality
**Trustworthy · Strong · Honest · Dependable · Warm · Local-rooted · Growth-minded**

Voice: simple, confident, practical. Speak like a trusted supplier, not a corporate brochure. Short sentences. Mix English with a Hindi version later (Hindi search is very large in Bihar).

---

## PART 2: DESIGN SYSTEM & COLOUR THEME

### 2.1 Colour palette (taken from your deck and extended for web)

| Role | Name | HEX | Where to use |
|---|---|---|---|
| Primary dark | Deep Charcoal | `#1E1B18` | Header, footer, hero overlay, dark sections |
| Brand accent | Teak Gold | `#B8956A` | Buttons, icons, underlines, highlights, "PRIVATE LIMITED" style text |
| Secondary | Walnut Brown | `#5A3E2B` | Sub-headings, hover states, borders |
| Light background | Warm Cream | `#F7F1E8` | Main page background, alternate sections |
| Soft tan | Sand | `#D2BBA0` | Cards, tags, soft panels (deck's card colour) |
| Surface | White | `#FFFFFF` | Cards, forms, text areas |
| Action accent | Amber | `#D98E3F` | Main CTA buttons, price/offer badges, table headers (use sparingly) |
| Text dark | Ink | `#2B2622` | Body text on light backgrounds |
| Text muted | Stone | `#6F655B` | Captions, secondary text |
| Success | WhatsApp Green | `#25D366` | WhatsApp button only |

**Ratio guide:** 60% Cream/White · 25% Charcoal · 10% Teak Gold · 5% Amber/other.

**Accessibility:** Use Ink `#2B2622` on Cream/White and white text on Charcoal. Do not put white text on Sand or Teak Gold for small text (low contrast). Use Charcoal text there.

### 2.2 CSS variables (copy into your site)
```css
:root {
  --charcoal: #1E1B18;
  --teak: #B8956A;
  --walnut: #5A3E2B;
  --cream: #F7F1E8;
  --sand: #D2BBA0;
  --white: #FFFFFF;
  --amber: #D98E3F;
  --ink: #2B2622;
  --stone: #6F655B;
  --whatsapp: #25D366;
}
```

### 2.3 Typography
| Use | Font | Weight |
|---|---|---|
| Headings (H1–H3) | **Montserrat** | 700 / 800 |
| Body, buttons, forms | **Poppins** | 400 / 500 / 600 |
| Hindi text (later) | **Noto Sans Devanagari** | 400 / 600 |

Sizes (desktop): H1 52–60px · H2 36–40px · H3 24px · Body 17–18px · Line-height 1.6.
Mobile: H1 34px · H2 26px · Body 16px.

### 2.4 Visual style
- Real wood-grain textures as subtle section backgrounds
- Large, sharp photos of stacked plywood, edges and layers (macro shots of plywood layers look premium)
- Rounded cards (16–24px radius) and arch/pill-shaped image frames, as in your deck
- Thin dashed Teak Gold outlines on key image frames (deck signature)
- Generous white space; one idea per section
- Icons: simple line icons in Teak Gold
- Subtle animation only: fade-up on scroll, hover lift on cards. Keep the site fast

### 2.5 Buttons
| Type | Style |
|---|---|
| Primary CTA | Amber `#D98E3F` background, white text, rounded, bold |
| Secondary | Teak Gold outline, Charcoal text |
| WhatsApp | Green, floating bottom-right on every page |
| Call | Sticky "Call Now" bar on mobile |

### 2.6 Photography checklist (replace stock images)
- [ ] Godown/warehouse with stacked plywood
- [ ] Close-ups of plywood layers and edges
- [ ] Different thicknesses laid side by side
- [ ] Loading / delivery vehicle
- [ ] Jay Prakash Mandal, professional portrait
- [ ] Team at work, customer visits
- [ ] Finished furniture or interiors made with your plywood (with permission)
- [ ] Shop signboard / office exterior (helps Google Maps trust)

Save images as WebP, under 200 KB each, with descriptive file names (e.g. `bwp-plywood-stack-forbesganj.webp`).

---

## PART 3: SITEMAP (WHAT PAGES TO KEEP)

### Core pages (must have)
| # | Page | URL | Goal |
|---|---|---|---|
| 1 | Home | `/` | First impression, trust, route visitors |
| 2 | About Us | `/about-us/` | Credibility, story, leadership |
| 3 | Products | `/products/` | Show range (you sell a physical product, so "Products" beats "Services") |
| 4 | Contact Us | `/contact-us/` | Enquiries, calls, map |

### Recommended extra pages (strong for growth)
| # | Page | URL | Why |
|---|---|---|---|
| 5 | Dealer & Distributor Enquiry | `/become-a-dealer/` | Your main revenue goal |
| 6 | FAQ | `/faq/` | Best for AI engines and featured snippets |
| 7 | Blog | `/blog/` | Long-term SEO traffic |
| 8 | Gallery | `/gallery/` | Real photos build trust |
| 9 | Privacy Policy & Terms | `/privacy-policy/` | Legal, required for forms |

### Optional later
- Individual product pages (`/products/bwp-plywood/`)
- Location pages (`/plywood-supplier-purnia/`) **only** if you really serve those areas
- Hindi version (`/hi/`)

### Navigation
**Header:** Home · About · Products · Dealer Enquiry · Blog · Contact · [Get a Quote] (button)
**Footer:** Quick links, product list, contact details, map link, social links, copyright.

---

## PART 4: PAGE CONTENT

---

### PAGE 1: HOME

**Meta title (under 60 characters):**
`Jai Shree Radha Plywood | Plywood Supplier in Araria, Bihar`

**Meta description (under 160 characters):**
`Strong, durable plywood for furniture, interiors and construction. Bulk supply for dealers, carpenters and builders across Bihar. Call +91 70911 61465.`

#### Hero section
**H1:** Strong Foundations. Superior Plywood. Built to Last.

**Sub-headline:** Jai Shree Radha Plywood Pvt. Ltd. supplies reliable, quality-focused plywood to dealers, furniture makers, contractors and builders across Araria, Forbesganj and Bihar.

**Buttons:** `[Explore Our Plywood]` `[Become a Dealer]` `[Chat on WhatsApp]`

**Background:** Dark Charcoal overlay on a photo of stacked plywood. Teak Gold text for "Built to Last."

#### Trust strip (use only real numbers)
| [__]+ years in plywood trade | [__]+ dealers & clients served | Bulk orders welcome | Timely delivery across Bihar |

#### Section: Quick introduction
**H2:** Plywood You Can Build On

Jai Shree Radha Plywood Private Limited is a plywood supply company based in Forbesganj, Araria, Bihar. We provide durable, consistent plywood for furniture, interiors, residential and commercial spaces and construction. Our customers include dealers, retailers, carpenters, furniture makers, contractors, builders and interior professionals. [Read our story →]

#### Section: Why builders and carpenters trust us
**H2:** Four Promises in Every Sheet

| Icon | Heading | Text |
|---|---|---|
| Layers | **Consistent Quality** | Uniform thickness and surface finish, sheet after sheet, so your work comes out right every time. |
| Shield | **Lasting Strength** | Structural stability and dependable performance for furniture, interiors and construction. |
| Truck | **Dependable Supply** | Stock availability and timely delivery so your project never waits. |
| Handshake | **Honest Service** | Clear quotes, responsive support and long-term relationships, from one sheet to bulk orders. |

#### Section: Plywood for every application
**H2:** Find the Right Plywood for Your Project

Cards (each links to the Products page):
1. **Furniture** — Beds, wardrobes, cabinets and tables that stay strong for years.
2. **Interiors** — Panelling, partitions and ceilings with a smooth, clean finish.
3. **Residential** — Reliable material for homes, kitchens and renovations.
4. **Commercial** — Shops, offices and showrooms built to handle daily use.
5. **Construction** — Strong boards for site work and structural requirements.

#### Section: Who we serve
**H2:** Partners in Every Part of the Trade

Dealers & Distributors · Retailers · Furniture Manufacturers & Workshops · Contractors & Builders · Interior Designers & Architects

#### Section: Local strength
**H2:** Built for the Way Bihar Builds

Homes, shops and offices across Bihar are growing, and so is the need for plywood that lasts. Based in Forbesganj, Araria, we understand local requirements, timelines and budgets, and we are growing our dealer and distributor network across the region.

#### Section: How ordering works
**H2:** Simple Ordering in 4 Steps
1. **Tell us your need:** type, thickness and quantity.
2. **Get a clear quote:** transparent pricing, no confusion.
3. **Confirm your order:** we prepare and pack.
4. **Receive delivery:** on time, at your shop or site.

#### Section: Dealer invitation (dark Charcoal background)
**H2:** Grow Your Business With Us

Looking for a dependable plywood partner? Join our dealer and distributor network and enjoy steady supply, consistent quality and responsive support. `[Become a Dealer]`

#### Section: FAQ preview
Show 3 questions from the FAQ page with a `[View all FAQs]` link.

#### Final CTA
**H2:** Planning a Project or Stocking Your Shop? Let's Talk Plywood.
`[Call +91 70911 61465]` `[WhatsApp]` `[Send Enquiry]`

---

### PAGE 2: ABOUT US

**Meta title:** `About Jai Shree Radha Plywood | Plywood Business in Forbesganj, Bihar`
**Meta description:** `Learn about Jai Shree Radha Plywood Pvt. Ltd., a Forbesganj, Araria-based plywood business built on quality, reliability and long-term customer relationships.`

**H1:** About Jai Shree Radha Plywood Private Limited

#### Opening paragraph (answer-first; AI engines quote this style)
Jai Shree Radha Plywood Private Limited is a plywood supply company based in Forbesganj, Araria district, Bihar. We provide durable, quality-focused plywood for furniture, interiors, residential and commercial spaces and construction. We serve dealers, retailers, carpenters, furniture makers, contractors and builders.

#### Our story
[Write 3–4 real sentences: who started the company, in what year, why, and what gap in the local market you saw. Example structure: "The company was founded in [year] by Jay Prakash Mandal with a simple goal: to bring consistent, dependable plywood to the builders and carpenters of Seemanchal. Today we supply [type of customers] across [areas]."]

#### What we do
We supply plywood for four main purposes:
- **Furniture:** beds, wardrobes, cabinets, tables
- **Interiors:** panelling, partitions, ceilings
- **Residential and commercial spaces:** homes, shops, offices
- **Construction:** site and structural needs

#### The problem we solve
Plywood quality can vary from one batch to the next. That affects strength, finish and your reputation with your own customers. We focus on uniform thickness, surface quality, structural stability and dependable stock, so carpenters, dealers and contractors can work with confidence.

#### Our mission
To deliver reliable, quality-focused plywood solutions that meet the needs of furniture, interiors, construction and other applications, with a strong focus on product consistency, durability, customer satisfaction and dependable service.

#### Our vision
To build Jai Shree Radha Plywood as a trusted name in the plywood industry through quality, reliability, continuous improvement and long-term customer relationships, while expanding our presence in the market.

#### Our values
| Value | Meaning |
|---|---|
| Quality | We never compromise on the sheet that leaves our godown |
| Reliability | We deliver what we promise, when we promise |
| Durability | We choose plywood that lasts |
| Customer Commitment | Your project is our priority |
| Integrity | Honest pricing and honest advice |
| Continuous Improvement | We keep getting better |

#### Leadership
**Jay Prakash Mandal, Managing Director**
Jay Prakash Mandal leads the company's operations, customer relationships and growth across the furniture, interior, residential, commercial and construction markets. He is committed to quality-focused plywood, customer satisfaction and long-term value creation. [Add: years of experience, background, a short personal quote, and a clear professional photo.]

> "[Add a one-line personal quote about quality or trust.]" — Jay Prakash Mandal

#### Where we are going
We are expanding our dealer and distributor network, building stronger B2B partnerships, widening our product range and gradually entering new regional markets, with quality always first.

**CTA:** Want to partner with us? `[Become a Dealer]` `[Contact Us]`

---

### PAGE 3: PRODUCTS

**Meta title:** `Plywood Products | Furniture, Interior & Bulk Plywood in Bihar`
**Meta description:** `Explore plywood for furniture, interiors, residential, commercial and construction use. Bulk supply for dealers and contractors in Araria, Forbesganj and across Bihar.`

**H1:** Our Plywood Range: Built for Every Project

**Intro:** From a single wardrobe to a full housing project, the right plywood makes the difference. Here is what we supply, and how to choose.

> ⚠️ **List only what you actually stock.** Delete any row below you do not supply.

#### Product overview
| Product | Best for | Key points |
|---|---|---|
| **Furniture Plywood** | Beds, wardrobes, cabinets, tables | Smooth finish, strong screw-holding, stable |
| **Interior Plywood** | Wall panelling, partitions, false ceilings, modular interiors | Clean surface, easy to laminate or veneer |
| **Waterproof / BWP (Boiling Waterproof) Plywood** | Kitchens, bathrooms, damp areas | Resists moisture, long life in humid conditions |
| **Commercial Plywood** | General use, shops, offices | Economical, versatile |
| **Marine-Grade Plywood** | High-moisture or demanding uses | Extra water resistance |
| **Construction / Shuttering Plywood** | Concrete formwork, site work | Strong and reusable |
| **Bulk Supply** | Dealers, retailers, builders | Large quantities, repeat orders |

#### Product detail template (repeat for each product)
**[Product name]**
- **What it is:** [one clear sentence]
- **Best for:** [uses]
- **Thickness options:** [e.g. 6mm, 9mm, 12mm, 18mm, 19mm: only what you stock]
- **Sizes:** [e.g. 8ft x 4ft: confirm]
- **Grade / certification:** [e.g. ISI, IS 303, IS 710: only if held]
- **Photo:** real photo with alt text
- **Button:** `[Get a Quote]` `[WhatsApp for Price]`

#### Bulk and dealer supply
**H2:** Stocking a Shop or Running a Large Project?

We offer bulk quantities, repeat-order convenience and clear pricing for dealers, distributors, retailers, contractors and builders. Tell us your monthly requirement and we will prepare a supply plan. `[Request Bulk Quote]`

#### Quick buying guide (very good for SEO and AI answers)
**H2:** Which Plywood Should You Choose?

| If you are building... | Choose... |
|---|---|
| Wardrobes, beds, cabinets | Furniture-grade plywood with a smooth finish |
| Kitchen cabinets, bathroom units | Waterproof (BWP) plywood |
| Partitions, wall panels, ceilings | Interior-grade plywood |
| Concrete formwork on site | Shuttering plywood |
| A shop or office fit-out | Commercial plywood |

#### How to check plywood quality before you buy
1. Check that the thickness is the same across the whole sheet.
2. Look at the edges: layers should be even, with no gaps or patches.
3. Check the surface for cracks, bubbles or rough areas.
4. Hold the sheet and check it is not bent or twisted.
5. Ask for the grade, certification and brand marking.

#### Not sure what to choose?
Tell us what you are building. Our team will recommend the right type and thickness. `[WhatsApp Us]`

---

### PAGE 4: CONTACT US

**Meta title:** `Contact Jai Shree Radha Plywood | Forbesganj, Araria, Bihar`
**Meta description:** `Get a plywood quote or become a dealer. Call +91 70911 61465 or visit us at Sahwajpur, Forbesganj, Araria, Bihar 854316.`

**H1:** Let's Talk Plywood

**Intro:** Need a quote, bulk pricing or dealership details? Reach out and we will respond promptly.

#### Contact details
| | |
|---|---|
| **Company** | Jai Shree Radha Plywood Private Limited |
| **Phone / WhatsApp** | +91 70911 61465 |
| **Email** | [confirm the correct email address] |
| **Address** | Ward No. 13, Sahwajpur, PO Bhadreshwar, PS Bathnaha, Forbesganj, Dist. Araria, Bihar, PIN 854316 |
| **Working hours** | [e.g. Mon–Sat, 9:00 AM – 7:00 PM] |
| **Map** | Embed Google Map + link to Google Business Profile |

#### Enquiry form
Fields: Full Name · Phone (required) · Email · I am a (Dealer / Distributor / Carpenter / Furniture Maker / Contractor / Builder / Interior Designer / Other) · Product needed · Quantity / monthly requirement · City / area · Message
Button: `[Send Enquiry]`

**After submitting:** "Thank you! We will contact you within [24 hours]."

#### Quick-action buttons
`[Call Now]` `[WhatsApp]` `[Get Directions]`

---

### PAGE 5: BECOME A DEALER / DISTRIBUTOR

**Meta title:** `Plywood Dealership & Distributorship in Bihar | Jai Shree Radha Plywood`
**Meta description:** `Become a plywood dealer or distributor with Jai Shree Radha Plywood. Consistent quality, dependable supply and long-term support. Enquire today.`

**H1:** Become a Jai Shree Radha Plywood Dealer or Distributor

**Intro:** We are expanding our dealer and distributor network across Bihar. If you run a plywood or hardware shop, or want to start one, let's grow together.

#### What you get
- Consistent, dependable plywood quality
- Steady stock availability
- Clear and competitive pricing
- Responsive support and quick communication
- Long-term partnership [add real benefits: credit terms, marketing support, exclusive area, etc.]

#### Who can apply
Plywood dealers · Hardware shop owners · Distributors · Retailers · Wholesalers · Interior material suppliers

#### How it works
1. Submit the enquiry form
2. We call you and understand your area and requirement
3. Discuss products, pricing and terms
4. Start supply

#### Dealer form fields
Name · Shop/Firm name · Phone · City/District · Years in business · Monthly plywood requirement · Message → `[Apply Now]`

---

### PAGE 6: FAQ

**Meta title:** `Plywood FAQs | Jai Shree Radha Plywood, Forbesganj Bihar`
**Meta description:** `Answers to common questions on buying plywood, bulk orders, dealership, waterproof plywood and delivery from Jai Shree Radha Plywood in Araria, Bihar.`

**H1:** Frequently Asked Questions About Plywood

*(Keep answers 40–60 words, direct and complete. Replace brackets with facts.)*

**1. Where can I buy plywood in Araria or Forbesganj?**
Jai Shree Radha Plywood Pvt. Ltd. supplies plywood from Forbesganj, Araria, Bihar. We serve dealers, contractors, carpenters, furniture makers and builders. Call +91 70911 61465 or send an enquiry for pricing and availability.

**2. Do you supply plywood in bulk?**
Yes. We handle bulk and repeat orders for dealers, retailers, furniture manufacturers, contractors and builders. Share your product type, thickness and quantity, and we will send a clear quote.

**3. Which plywood is best for kitchens and bathrooms?**
Waterproof (BWP) plywood is the recommended choice because it resists moisture better than ordinary plywood. [Confirm you stock BWP.] Avoid using plain commercial plywood where water contact is likely.

**4. Which plywood is best for wardrobes and beds?**
Furniture-grade plywood with a smooth surface and consistent thickness works best. For wardrobes, 18mm is commonly used for the main body and thinner boards for backs. [Confirm thicknesses you stock.]

**5. How can I become a dealer or distributor?**
Call +91 70911 61465 or fill in the Dealer Enquiry form. Share your location, shop details and monthly requirement, and our team will contact you to discuss supply and terms.

**6. Do you deliver outside Forbesganj?**
[Yes, we deliver across Araria, Purnia, Kishanganj, Katihar and nearby districts. Confirm the exact areas and any minimum order.]

**7. What thicknesses and sizes do you offer?**
[List your real thicknesses and sizes, e.g. 4mm to 25mm, 8ft x 4ft.] Contact us if you need a specific size.

**8. How do I check if plywood is good quality?**
Check for uniform thickness, even edge layers without gaps, a smooth surface with no cracks, and a flat, unbent sheet. Ask for grade and certification details before buying.

**9. How soon will I get a quote?**
We respond to every enquiry within [24 hours], and usually sooner on WhatsApp.

**10. How do I contact Jai Shree Radha Plywood?**
Call or WhatsApp +91 70911 61465, or visit Ward No. 13, Sahwajpur, Forbesganj, Araria, Bihar 854316.

---

### PAGE 7: BLOG

**Blog page H1:** Plywood Guides and Tips

**Starter article ideas** (publish 2 per month; 800–1,200 words each, with a real FAQ at the end)
1. Types of Plywood in India: A Simple Guide
2. BWP vs Commercial Plywood: Which Should You Buy?
3. How to Check Plywood Quality Before Buying (7-Point Checklist)
4. Best Plywood Thickness for Wardrobes, Beds and Kitchens
5. What Affects Plywood Price in Bihar?
6. Plywood vs MDF vs Particle Board: What Is the Difference?
7. How to Choose Plywood for a Modular Kitchen
8. How Dealers Can Choose a Reliable Plywood Supplier
9. Plywood Market in India: Trends and Growth (cite sources)
10. How to Store Plywood Properly to Avoid Warping

---

### PAGE 8: GALLERY
**H1:** Our Stock, Our Work
Sections: Godown & Stock · Plywood Range · Deliveries · Projects & Finished Work. Every photo needs alt text and a short caption.

---

### GLOBAL ELEMENTS

**Footer text:**
Jai Shree Radha Plywood Private Limited: Strong Foundations. Superior Plywood. Built to Last.
Ward No. 13, Sahwajpur, PO Bhadreshwar, PS Bathnaha, Forbesganj, Dist. Araria, Bihar 854316
+91 70911 61465 · [email]
© [Year] Jai Shree Radha Plywood Private Limited. All rights reserved.

**Floating WhatsApp message (pre-filled):** "Hello, I want to know about plywood prices and availability."

**Announcement bar (optional):** Bulk orders & dealer enquiries welcome: call +91 70911 61465

---

## PART 5: SEO STRATEGY

### 5.1 Keyword map
| Page | Primary keyword | Secondary keywords |
|---|---|---|
| Home | plywood supplier in Araria Bihar | plywood dealer Forbesganj, bulk plywood Bihar |
| About | plywood company Forbesganj | plywood business Araria, plywood manufacturer/supplier Bihar |
| Products | plywood for furniture and interiors Bihar | BWP plywood Araria, commercial plywood Bihar, shuttering plywood |
| Dealer | plywood dealership Bihar | plywood distributor enquiry, become plywood dealer |
| FAQ | plywood FAQs | which plywood is best for kitchen, plywood quality check |
| Contact | plywood shop Forbesganj | plywood supplier near me Araria |

Nearby location keywords (use only if you truly serve): Purnia, Kishanganj, Katihar, Supaul, Madhepura, Saharsa, Siliguri.

### 5.2 On-page rules
- One H1 per page, with keyword and location where natural
- Primary keyword in the first 100 words, one H2, the meta title and an image alt text
- Short paragraphs (2–3 lines). Use tables and bullet lists
- Descriptive alt text on every image: "Stacked BWP plywood sheets at Jai Shree Radha Plywood godown, Forbesganj"
- Internal links: Home → Products → Dealer → Contact; blog posts → Products
- URLs short and lowercase with hyphens
- Page speed: WebP images, lazy loading, under 3 seconds on mobile
- Mobile-first design (most Bihar traffic is mobile)
- SSL (HTTPS), XML sitemap, robots.txt

### 5.3 Local SEO (very important for you)
1. Create and verify **Google Business Profile**: category "Plywood supplier" / "Plywood store"; add photos, products, hours, phone, website
2. Keep **NAP (Name, Address, Phone) identical** everywhere: website, Google, IndiaMART, Justdial, Sulekha, TradeIndia, Facebook, Instagram
3. Ask happy dealers and customers for Google reviews; reply to every review
4. Add products to Google Business Profile with photos
5. Get listed on IndiaMART, Justdial, TradeIndia, ExportersIndia
6. Embed the Google Map on the Contact page

### 5.4 Technical SEO checklist
- [ ] Google Search Console set up, sitemap submitted
- [ ] Google Analytics 4 installed
- [ ] Canonical tags on every page
- [ ] Open Graph / social preview image (1200 x 630)
- [ ] Favicon
- [ ] 404 page
- [ ] Core Web Vitals passing
- [ ] No duplicate titles or descriptions

---

## PART 6: GEO (GENERATIVE ENGINE OPTIMIZATION)

Goal: get ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews to quote and recommend your company.

### 6.1 Writing rules
1. **Answer first.** Start each section with a direct 1–2 sentence answer, then add detail.
2. **Be specific and factual.** "BWP plywood resists moisture" is better than "high-quality plywood".
3. **Name the entity clearly and repeatedly:** "Jai Shree Radha Plywood Private Limited, a plywood supplier in Forbesganj, Araria, Bihar."
4. **Use question headings** ("Which plywood is best for kitchens?").
5. **Use tables and lists.** AI engines extract them easily.
6. **Cite sources** for every statistic (name, year). Do not use unsourced figures.
7. **Show expertise:** author name and role on blog posts (Jay Prakash Mandal or a team member), plus a "last updated" date.
8. **Keep facts consistent** across the website and all listings.

### 6.2 Structured data (schema markup)
Add JSON-LD in the site's `<head>`.

**LocalBusiness / Organization (all pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jai Shree Radha Plywood Private Limited",
  "description": "Plywood supplier in Forbesganj, Araria, Bihar, serving dealers, contractors, carpenters, furniture makers and builders.",
  "url": "[https://yourwebsite.com]",
  "logo": "[https://yourwebsite.com/logo.png]",
  "image": "[https://yourwebsite.com/storefront.jpg]",
  "telephone": "+91 70911 61465",
  "email": "[email]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ward No. 13, Sahwajpur, PO Bhadreshwar, PS Bathnaha",
    "addressLocality": "Forbesganj",
    "addressRegion": "Bihar",
    "postalCode": "854316",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "[lat]", "longitude": "[long]" },
  "openingHours": "Mo-Sa [09:00]-[19:00]",
  "areaServed": ["Araria", "Forbesganj", "Purnia", "Kishanganj", "Katihar"],
  "founder": { "@type": "Person", "name": "Jay Prakash Mandal", "jobTitle": "Managing Director" },
  "sameAs": ["[Google Business Profile URL]", "[Facebook]", "[Instagram]", "[IndiaMART]", "[Justdial]"]
}
```

**FAQPage** (FAQ page): wrap each Q&A in `FAQPage` schema.
**Product** (each product page): name, description, image, brand, and `offers` only if you show prices.
**BreadcrumbList:** on all inner pages.
**Article:** on blog posts, with author and date.

### 6.3 Extra GEO assets
- Create `/llms.txt` at the website root:
```
# Jai Shree Radha Plywood Private Limited
> Plywood supplier in Forbesganj, Araria, Bihar, serving dealers, retailers, carpenters, furniture makers, contractors and builders.

## Key pages
- [Products](https://yourwebsite.com/products/): plywood range and buying guide
- [About](https://yourwebsite.com/about-us/): company, mission, leadership
- [Become a Dealer](https://yourwebsite.com/become-a-dealer/): dealership enquiry
- [FAQ](https://yourwebsite.com/faq/): common plywood questions
- [Contact](https://yourwebsite.com/contact-us/): phone, address, map
```
- In `robots.txt`, do not block AI crawlers (GPTBot, Google-Extended, PerplexityBot, ClaudeBot) if you want to be cited.
- Publish a short "Company Facts" box on the About page: legal name, location, founded, MD, business type, phone, areas served.
- Get mentioned on trusted third-party sites: Google Business Profile, IndiaMART, Justdial, Sulekha, local news, industry directories. AI engines trust repeated, consistent mentions.
- Collect reviews with real text; AI engines read them.

### 6.4 Company Facts box (copy into About page)
| Fact | Detail |
|---|---|
| Legal name | Jai Shree Radha Plywood Private Limited |
| Business | Plywood supply and distribution |
| Location | Forbesganj, Araria, Bihar, India |
| Managing Director | Jay Prakash Mandal |
| Founded | [year] |
| Customers | Dealers, distributors, retailers, furniture makers, contractors, builders, interior professionals |
| Applications | Furniture, interiors, residential, commercial, construction |
| Phone / WhatsApp | +91 70911 61465 |
| Areas served | [list] |

---

## PART 7: MARKET FACTS (ONLY USE WITH A SOURCE)

The deck includes these figures. **Verify each with a source and cite it** before putting it on the website (for example, a named market-research report and year), or leave them out.

| Metric | Figure in deck |
|---|---|
| Global plywood market, 2025 | USD 56.63 billion |
| Global projection, 2030 | USD 71.86 billion |
| Global CAGR 2025–2030 | 4.88% |
| India plywood market, 2025 | USD 7.17 billion |
| India projection, 2033 | USD 10.61 billion |
| India CAGR 2026–2033 | 5.0% |

Suggested safe wording: "According to [Source, Year], India's plywood market is projected to reach about USD 10.6 billion by 2033, driven by housing, furniture and interiors demand."

---

## PART 8: CONVERSION & TRUST ELEMENTS

- Floating **WhatsApp** button and sticky **Call** bar on mobile
- "Get a Quote" button in the header
- Customer testimonials (real names, shops, photos with permission)
- Client/dealer logos (with permission)
- Certification badges (only if held)
- "Why choose us" strip on every key page
- Clear response-time promise
- Visible address and phone in the header or footer
- Enquiry forms with minimal fields (name, phone, requirement)
- Thank-you page with tracking for form submissions

### Testimonial template
> "[Short real quote about quality, delivery or service.]"
> **[Name], [Role], [Shop/Firm], [City]**

---

## PART 9: LAUNCH CHECKLIST

**Content**
- [ ] All placeholders replaced with real facts
- [ ] Product list, thicknesses, sizes, grades confirmed
- [ ] Real photos uploaded; stock photos removed
- [ ] Market statistics sourced or removed
- [ ] Email address verified
- [ ] Privacy policy and terms added

**SEO / GEO**
- [ ] Meta titles and descriptions added
- [ ] Schema added and tested (Google Rich Results Test)
- [ ] `llms.txt`, `robots.txt`, XML sitemap in place
- [ ] Google Search Console and Analytics connected
- [ ] Google Business Profile verified
- [ ] IndiaMART / Justdial / Sulekha listings created with identical NAP

**Technical**
- [ ] HTTPS active
- [ ] Mobile layout tested on real phones
- [ ] Page speed tested (PageSpeed Insights)
- [ ] Forms tested and emails received
- [ ] WhatsApp and call buttons tested

**After launch (first 90 days)**
- [ ] Publish 2 blog posts per month
- [ ] Request 10+ Google reviews from real customers
- [ ] Add a Hindi version
- [ ] Review Search Console monthly and improve pages that get impressions but few clicks

---

## PART 10: HINDI TAGLINES (OPTIONAL, FOR HINDI VERSION)

- मजबूत नींव। बेहतरीन प्लाईवुड। टिकाऊ गुणवत्ता।
- जय श्री राधा प्लाईवुड: भरोसे की ताकत, गुणवत्ता की पहचान।
- डीलर, कारपेंटर और बिल्डर्स के लिए विश्वसनीय प्लाईवुड सप्लायर, फारबिसगंज (अररिया), बिहार।

---

*End of document.*
