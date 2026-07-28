/* proposal-hub — CONTENT INSTANCE: Crēdo Legal integrated engagement (window.HUB).
 * The chassis (index.html) is never edited; it renders entirely from this file.
 *
 * Prepared by Prota Studios (Vernon Steward) for Crēdo Legal. This hub proposes merging the
 * live advertising engine and content library Credo already has with a ground-up website
 * build, on the path to one integrated hub (the concept mockup embedded in "The integrated hub").
 *
 * House style: no em-dashes, no emojis in agency voice, hedge current-state reads with
 * "may / could / might", second person, American English. Pricing is set (see Commercials);
 * names marked [ ... ] are placeholders to confirm before this goes to Credo.
 */

var WEB = "https://start.credolegal.com/";
var HUB_LIVE = "https://2-human.github.io/public-credo-hub/";

var IC = {
  doc:    `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v13"/><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v14H6a2 2 0 0 0-2 1.2z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H12v14h6a2 2 0 0 1 2 1.2z"/></svg>`,
  list:   `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h5M10 17h5"/></svg>`,
  chart:  `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6M20 16v-9"/></svg>`,
  nodes:  `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6h5a2 2 0 0 1 2 2v2M7 18h5a2 2 0 0 0 2-2v-2"/></svg>`,
  send:   `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-7-7 18-2-7-9-4z"/></svg>`,
  window: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>`,
  layers: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>`,
  clock:  `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  coins:  `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M15 12c3.3 0 6-1.3 6-3"/><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>`,
  people: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9.5" r="2.6"/><path d="M3.5 20v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1"/><path d="M16 14.2a4 4 0 0 1 4.5 4.3V20"/></svg>`,
};

window.HUB = {

  /* ---- AGENCY (Prota Studios) ---------------------------------------------- */
  agency: {
    name: "",
    unit: "",
    org:  "Prota Studios",
    lang: "en",
    logo: { src: "assets/prota-logo.png" },
    favicon: "assets/prota-favicon-large.png",
    tokens: {
      accent: "#c9a15a", accentStrong: "#a8823c", accentSoft: "#f3ead6",
      ink: "#12141d", ink2: "#1d2130", inkMuted: "rgba(18,20,29,.56)",
      sidebar: "#0d1122", bg: "#f6f5f1", bgAlt: "#ecebe1", hairline: "rgba(18,20,29,.12)",
      onDark: "#f3ecdd",
    },
    fonts: { display: "Georgia,'Times New Roman',serif", body: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif" },
  },

  /* ---- PITCH --------------------------------------------------------------- */
  brand: {
    proposalFor: "Crēdo Legal",
    foot: "Prota Studios.<br>Integrated engagement proposal for Crēdo Legal. This is a review draft; commercials are set, a few names are to be confirmed.",
  },
  favicon: "assets/prota-favicon-large.png",
  defaultView: "intro",
  WEB: WEB,

  /* ---- NAV ----------------------------------------------------------------- */
  nav: [
    { section: "Proposal", items: [
      { view: "intro",   label: "Overview",   icon: IC.doc },
      { view: "recs",    label: "The plan",   icon: IC.list },
    ]},
    { section: "What exists today", items: [
      { view: "engine",     label: "The engine",        icon: IC.send },
      { view: "properties", label: "Online properties", icon: IC.nodes, badge: 9 },
    ]},
    { section: "The build", items: [
      { view: "website", label: "The website, two paths", icon: IC.window },
      { view: "hub",     label: "Integrated hub · concept", icon: IC.layers },
      { view: "roadmap", label: "Build plan & phasing",   icon: IC.clock },
      { view: "pricing", label: "Commercials",            icon: IC.coins },
    ]},
    { section: "Team", items: [
      { view: "people",  label: "Team & roles", icon: IC.people },
    ]},
  ],

  /* ---- PER-VIEW TOOLBAR ---------------------------------------------------- */
  VIEWS: {
    intro:   { title: "Overview", sub: "One acquisition engine, one website, one hub", open: HUB_LIVE, openLabel: "Open the concept hub ↗" },
    recs:    { title: "The plan", sub: "Merge the engine you have with the website you need" },
    engine:  { title: "What is live, and what is ready", sub: "Live Meta and Google campaigns, plus a content library ready to launch" },
    properties: { title: "Credo's online properties", sub: "A first audit of every property and profile, to set the activity for each" },
    website: { title: "The website, two paths", sub: "Validate on Webflow first, or build custom now (our recommendation)" },
    hub:     { title: "The integrated hub", sub: "A concept mockup of the integrated hub, shown with sample data", open: HUB_LIVE, openLabel: "Open in new tab ↗", tbBadge: "Concept" },
    roadmap: { title: "Build plan & phasing", sub: "Website in about four to six weeks; the CRM comes later" },
    pricing: { title: "Commercials", sub: "One monthly retainer from day one, $15K across three tracks; the CRM comes later" },
    people:  { title: "Team & roles", sub: "Who owns what across Credo and Prota" },
  },

  /* ---- SOCIAL chrome (chassis requires PF + social even when unused) -------- */
  PF: {
    linkedin: { name: "LinkedIn", cls: "li", tag: "in" },
    facebook: { name: "Facebook", cls: "fb", tag: "f"  },
  },
  social: [],

  /* ---- CRM (STAGES required by schema; no CRM view in this proposal) -------- */
  STAGES: { "New": "st-new", "Qualified": "st-contacted", "Signed": "st-visit", "Nurture": "st-quoted", "Closed": "st-lost" },
  leads: [],

  /* ---- EDITORIAL VIEWS ----------------------------------------------------- */
  html: {

    intro: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>Overview</h1>
      <p class="brief__lede">Credo already runs live Meta and Google campaigns across the seven debt verticals, has a brand website at credolegal.com and a conversion microsite at start.credolegal.com, and a large content library is already written. The microsite is being redesigned now. What has not started yet is the always-on social program and the content publishing pipeline, and there is no system that ties the content, the audiences, and the channels together. This proposal redesigns the website along the new microsite, launches what is ready, and sets a clear path to one integrated hub.</p>
      <div class="brief__body">
        <p>Today the paid campaigns point at the Webflow microsite, and the brand website is a separate, older build; the two do not share one design. The ads should keep running while we work. But the written content is not yet publishing, the social program has not gone live, and the lead, once captured, has nowhere structured to go. The opportunity is not to start over. It is to unify what exists, launch what is built, and give the engine a destination worthy of it.</p>
        <p class="brief__aside">Start with <b>The plan</b> for the strategy in four moves. <b>The engine</b> is what is live and what is ready to launch. <b>The website, two paths</b> lays out the build decision and our recommendation. <b>The integrated hub</b> is the concept, a mockup with sample data. <b>Build plan</b> and <b>Commercials</b> are the how and the how-much.</p>
      </div>
      <div class="brief__sec">
        <p class="brief__num">&rarr;</p>
        <div class="brief__body">
          <h2>The shape of the engagement</h2>
          <p>Two tracks that reinforce each other, not two separate projects.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">Run and launch</div><div class="state__v">Prota keeps the live Meta and Google campaigns optimized, and launches the content pipeline and always-on social program that are built but not yet started. Acquisition never goes dark.</div></div>
            <div class="state__row"><div class="state__k">Redesign the site</div><div class="state__v">Redesign credolegal.com to match the new microsite, phase one, in about four to six weeks, so the brand site and the funnel share one design system.</div></div>
            <div class="state__row"><div class="state__k">Grow into the hub</div><div class="state__v">The website is the first module of an integrated hub. The CRM (a case portal, email and SMS sequences, and call-center integration) comes later, on the architecture in The integrated hub.</div></div>
            <div class="state__row"><div class="state__k">One North Star</div><div class="state__v">Measured on a blended goal: more qualified leads, a stronger brand, and higher lifetime value per signed client. Not clicks for their own sake.</div></div>
          </div>
        </div>
      </div>
      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. This hub is a review draft; commercial figures are placeholders.</p></div>
    </div>
  `,

    recs: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>The plan</h1>
      <p class="brief__lede">Four moves. Where Credo stands today, the strategy that connects the pieces, what we would build first, and how it adds up to a blended result rather than a vanity metric.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>Where Credo stands today</h2>
          <p>A strong engine, running on rented ground. This is the honest current-state read, and some of it may shift as we get into the work.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">Live ad engine</div><div class="state__v">A Meta campaign of 14 ads across 5 vertical ad sets, and 7 Google search campaigns across 19 ad groups plus Performance Max, all in Credo's own accounts. Already producing leads.</div></div>
            <div class="state__row"><div class="state__k">Content written, not yet live</div><div class="state__v">Around 52 articles are already written and 32 landing-page configurations cover all seven clusters. The always-on social program and the content publishing pipeline are prepared but have not started yet. Raw material for a compounding asset, ready to launch.</div></div>
            <div class="state__row"><div class="state__k">Website and microsite, not unified</div><div class="state__v">Credo has a live brand website (credolegal.com) and a conversion microsite (start.credolegal.com). The microsite is being redesigned now; the website is an older, separate build. They do not yet share one design system.</div></div>
            <div class="state__row"><div class="state__k">Disconnected data</div><div class="state__v">A captured lead has nowhere structured to go. Content, audiences, and channels live in separate tools, so nothing compounds across them.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>The strategy: one content-centric system</h2>
          <p>Stop treating the website, the ads, the content, and the eventual CRM as separate builds. Treat them as projections over three shared stores: the content you produce, the audiences you reach, and the interactions between them. The website becomes the centerpiece the engine points at, and the same architecture that renders the site later renders email, SMS, and the case portal.</p>
          <p class="brief__aside">This is the idea behind the concept in <b>The integrated hub</b>. A bounded CRM and a bounded CMS stop making sense when content, people, and interactions are the real nouns and every surface is a filtered view over them.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>What we would build first</h2>
          <p>The website, custom, in about four to six weeks, while the engine keeps running. The seven clusters and the existing landing pages give us the content and the structure on day one, so this is an assembly and elevation job, not a blank page.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Track</span><span>Phase one (now)</span><span>Then</span></div>
            <div class="ledger__row"><span class="lg-seg">Website</span><span class="lg-build">Redesign credolegal.com to match the new microsite, the seven clusters as its spine, built to the YMYL trust bar</span><span class="lg-why">First module of the hub</span></div>
            <div class="ledger__row"><span class="lg-seg">Ads</span><span class="lg-build">Keep running and optimizing Meta and Google, repointed at the new site</span><span class="lg-why">Feeds the funnel</span></div>
            <div class="ledger__row"><span class="lg-seg">Content</span><span class="lg-build">Launch the content pipeline and the always-on social program, publishing into the new site</span><span class="lg-why">Compounds over time</span></div>
            <div class="ledger__row"><span class="lg-seg">Data</span><span class="lg-build">One lead capture that feeds a single, structured record</span><span class="lg-why">Email, SMS, portal grow from here</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">04</p>
        <div class="brief__body">
          <h2>How it adds up: a blended North Star</h2>
          <p>The engagement is measured on three lenses at once, because a debt-defense practice is won on all three, not one.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Lens</span><span>What moves</span><span>How the build helps</span></div>
            <div class="ledger__row"><span class="lg-seg">Leads</span><span class="lg-now">Qualified consultation requests, at or under a target cost per lead</span><span class="lg-why">A faster, higher-trust site and cluster pages should lift conversion on the same media spend</span></div>
            <div class="ledger__row"><span class="lg-seg">Brand</span><span class="lg-now">A credible, owned Credo presence that meets the trust bar for legal and financial topics</span><span class="lg-why">Owned site plus a real content library builds the authority paid traffic converts against</span></div>
            <div class="ledger__row"><span class="lg-seg">Lifetime value</span><span class="lg-now">More signed clients, and more value per client, from the leads you already pay for</span><span class="lg-why">Email, SMS, and the case portal nurture and retain what the funnel captures</span></div>
          </div>
          <p style="margin-top:.9rem">The headline number Prota would report on is qualified leads at target cost, read alongside the brand and lifetime-value trend, so the media spend is judged on the whole result and not on raw click volume.</p>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. Counts reflect the current live build and may change as the work begins.</p></div>
    </div>
  `,

    engine: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>What is live, and what is ready</h1>
      <p class="brief__lede">This is not a pitch built on slides. The paid campaigns below are live in Credo's own accounts today. The content library is written and the always-on social program is prepared; both are ready to launch, not yet running. The website build gives all of it a destination.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>Paid acquisition, both platforms</h2>
          <div class="ledger">
            <div class="ledger__head"><span>Channel</span><span>What is live</span><span>Creative</span></div>
            <div class="ledger__row"><span class="lg-seg">Meta Ads</span><span class="lg-now">1 campaign, 5 vertical ad sets, 14 ads, 6 message variants and 6 headlines per ad, compliant with the Credit special-ad category</span><span class="lg-why">A full creative library including a Bold hand-gesture set and animated reels, safe-zone checked</span></div>
            <div class="ledger__row"><span class="lg-seg">Google Ads</span><span class="lg-now">7 search campaigns, 19 ad groups, responsive search ads with callouts, structured snippets and call extensions, plus Performance Max</span><span class="lg-why">Two Performance Max asset groups with images and video, and a full extension set</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>Content and funnel, built and ready to launch</h2>
          <div class="state">
            <div class="state__row"><div class="state__k">Articles</div><div class="state__v">Around 52 articles already written across the seven debt clusters. The publishing pipeline has not started yet; launching it is part of this engagement.</div></div>
            <div class="state__row"><div class="state__k">Social</div><div class="state__v">An always-on LinkedIn and Facebook program is prepared, one post each per day drawn from the article library. Not yet live.</div></div>
            <div class="state__row"><div class="state__k">Landing pages</div><div class="state__v">32 landing-page configurations built across all seven clusters, each with the qualifier funnel and per-cluster tracking, reviewable on the hub.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>Reviewable now</h2>
          <p>Every surface above already lives on a review hub you can open. These are the working artifacts the website build assembles into one place.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Surface</span><span>What it holds</span><span>Open</span></div>
            <div class="ledger__row"><span class="lg-seg">Ad review hub</span><span class="lg-now">Meta feed preview plus a Google builder, and the full upload handoff</span><span class="lg-build"><a href="https://2-human.github.io/credo-public-meta-ads-preview/" target="_blank" rel="noopener">Meta &amp; Google ↗</a></span></div>
            <div class="ledger__row"><span class="lg-seg">Landing pages &amp; blog</span><span class="lg-now">The cluster landing pages, the blog, and the statute, phone and ads maps</span><span class="lg-build"><a href="https://2-human.github.io/credo-public-harassment-lp/" target="_blank" rel="noopener">LP hub ↗</a></span></div>
            <div class="ledger__row"><span class="lg-seg">Social program</span><span class="lg-now">The planned always-on calendar and the prepared post library</span><span class="lg-build"><a href="https://2-human.github.io/credo-public-social-hub/" target="_blank" rel="noopener">Social hub ↗</a></span></div>
          </div>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. Live surfaces are review candidates; ad copy and creative remain subject to compliance sign-off.</p></div>
    </div>
  `,

    properties: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>Credo's online properties</h1>
      <p class="brief__lede">A first audit of the properties and profiles Credo has today, pulled from public sources, so this proposal can decide property by property what we do with each. A full access, analytics and ownership audit is part of phase one. The proposed activities below are a starting point, not the final call.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>Owned web</h2>
          <div class="ledger">
            <div class="ledger__head"><span>Property</span><span>State today</span><span>Proposed activity</span></div>
            <div class="ledger__row"><span class="lg-seg">credolegal.com</span><span class="lg-now">Brand website, live. About, Services, Blog, FAQ, Contact. An older build.</span><span class="lg-why">Redesign to match the new microsite. The hub's first module.</span></div>
            <div class="ledger__row"><span class="lg-seg">start.credolegal.com</span><span class="lg-now">Conversion microsite and funnel, on Webflow. Being redesigned now.</span><span class="lg-why">Finish the redesign; the funnel the ads point at.</span></div>
            <div class="ledger__row"><span class="lg-seg">Client portal</span><span class="lg-now">Enrolled-client area. Access to confirm.</span><span class="lg-why">Fold into the hub's case-portal module.</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>Social profiles</h2>
          <div class="ledger">
            <div class="ledger__head"><span>Profile</span><span>State today</span><span>Proposed activity</span></div>
            <div class="ledger__row"><span class="lg-seg">LinkedIn</span><span class="lg-now">/company/credo-legal. Active, around 1.1K followers, posting.</span><span class="lg-why">Anchor the always-on program here.</span></div>
            <div class="ledger__row"><span class="lg-seg">Facebook</span><span class="lg-now">Credo Legal Page, around 20 followers, dormant. The Page the Meta ads run from.</span><span class="lg-why">Reactivate with the always-on program.</span></div>
            <div class="ledger__row"><span class="lg-seg">Instagram</span><span class="lg-now">@credo_legal, around 10 followers, dormant.</span><span class="lg-why">Reactivate, or park with a clear decision.</span></div>
            <div class="ledger__row"><span class="lg-seg">YouTube / TikTok / X</span><span class="lg-now">No US-firm channel found.</span><span class="lg-why">Decide whether to open. PMax already uses video a channel could host.</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>Reviews and reputation</h2>
          <div class="ledger">
            <div class="ledger__head"><span>Property</span><span>State today</span><span>Proposed activity</span></div>
            <div class="ledger__row"><span class="lg-seg">Google Business</span><span class="lg-now">Credo Legal Services Professional Corporation. 4.6 stars, 113 reviews, One Liberty Plaza, New York. Live.</span><span class="lg-why">Own it: reviews, posts, Q&amp;A, and a consistent name and address.</span></div>
            <div class="ledger__row"><span class="lg-seg">Trustpilot</span><span class="lg-now">trustpilot.com/review/credolegal. Reviews present.</span><span class="lg-why">Claim it and wire a review-generation step into the funnel.</span></div>
            <div class="ledger__row"><span class="lg-seg">BBB</span><span class="lg-now">Credo Legal Services, P.A., listed in Jacksonville, Florida. Profile plus complaints.</span><span class="lg-why">Monitor and respond; part of the trust bar for this category.</span></div>
            <div class="ledger__row"><span class="lg-seg">Third-party mentions</span><span class="lg-now">JustAnswer, Reddit and similar. Not owned.</span><span class="lg-why">Monitor. Not a channel to run.</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">!</p>
        <div class="brief__body">
          <h2>One flag: the name and address vary</h2>
          <p>Across profiles the identity is not consistent. Google Business and Trustpilot show "Credo Legal Services Professional Corporation" in New York, BBB shows "Credo Legal Services, P.A." in Jacksonville, Florida, and Facebook lists Atlanta, Georgia. For a legal and financial brand, a consistent name, address and phone across every property affects both local search and trust. A consolidation pass is worth putting on the list.</p>
        </div>
      </div>

      <p style="margin-top:.4rem;font-size:.86rem;color:var(--ink-muted)">The ad accounts (Meta, and Google 9399506772), the pixel and analytics, and the tracking numbers are the managed infrastructure behind the funnel; those are covered in <b>The engine</b>.</p>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. Audit from public sources, 28 Jul 2026; to be confirmed with account access.</p></div>
    </div>
  `,

    website: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>The website, two paths</h1>
      <p class="brief__lede">The microsite at start.credolegal.com is being redesigned now. The question is how to bring the brand website, credolegal.com, onto that same new design. Two honest ways: rebuild it on Webflow, or build it custom to match the microsite. Both are laid out below. Prota recommends building custom.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>The two paths, side by side</h2>
          <div class="ledger">
            <div class="ledger__head"><span>&nbsp;</span><span>Path A &middot; Rebuild on Webflow</span><span>Path B &middot; Custom, matching the microsite</span></div>
            <div class="ledger__row"><span class="lg-seg">Speed to a live site</span><span class="lg-now">Fast to a first draft in a visual builder</span><span class="lg-why">Comparable here, because the microsite is already being built custom and its design carries straight over</span></div>
            <div class="ledger__row"><span class="lg-seg">Cost over the engagement</span><span class="lg-now">Two builds: the Webflow site, then the custom rebuild</span><span class="lg-why">One build. No migration, no rework</span></div>
            <div class="ledger__row"><span class="lg-seg">Path to the hub</span><span class="lg-now">Webflow does not become the hub; it is thrown away at migration</span><span class="lg-why">The site is the hub's first module on day one</span></div>
            <div class="ledger__row"><span class="lg-seg">Ownership</span><span class="lg-now">Design locked to a third-party platform and its subscription</span><span class="lg-why">You own the code and the stack outright</span></div>
            <div class="ledger__row"><span class="lg-seg">Best when</span><span class="lg-now">The design direction is genuinely unproven and needs cheap validation first</span><span class="lg-why">The direction is known, and speed to the integrated system matters</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>Why we recommend building custom</h2>
          <p>The microsite is already being redesigned custom, and the seven clusters, the copy and the review hubs are built and converting, so the design direction is proven and the assets are custom code. Rebuilding the brand website on Webflow would fork the design across two platforms, cost a second build, and still not arrive at the hub. Building the website custom, to match the microsite, gives one design system and one path.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">One design system</div><div class="state__v">The microsite is custom; a custom website matches it exactly. Webflow would split the brand across two platforms.</div></div>
            <div class="state__row"><div class="state__k">Straight to the hub</div><div class="state__v">The custom site is module one of the integrated hub, not a detour that gets discarded.</div></div>
            <div class="state__row"><div class="state__k">Speed is no longer the trade-off</div><div class="state__v">Building custom with Claude, on top of assets that already exist, is fast enough to hold the four-to-six-week window.</div></div>
          </div>
          <p class="brief__aside">If Credo would rather see a Webflow validation build first, Path A is fully workable and we will scope it. The recommendation is a recommendation, not a precondition.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>What phase one delivers</h2>
          <p>A redesigned credolegal.com that matches the new microsite, built to the trust bar that legal and financial topics demand, with the seven debt clusters as its spine and the funnel wired in. The brand site and the microsite share one design system, and the site is architected as the first module of the integrated hub, the concept in The integrated hub.</p>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. Either path can be scoped; Path B is the recommendation.</p></div>
    </div>
  `,

    hub: `
    <div style="display:flex;flex-direction:column;height:100%">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;padding:.6rem clamp(1rem,4vw,2rem);background:#0d1122;color:#f3ecdd;border-bottom:1px solid rgba(255,255,255,.12);font-size:.82rem;line-height:1.45">
        <span><b style="color:#c9a15a;font-weight:700">Concept, not a live product</b> &nbsp;&middot;&nbsp; A concept mockup of the integrated hub, shown with sample data to make the direction concrete. Content, audiences, and interactions as shared stores, with the website, ads, email, SMS, call center, and case portal as modules over them. The website is module one; the CRM comes later.</span>
        <a href="${HUB_LIVE}" target="_blank" rel="noopener" style="color:#c9a15a;text-decoration:none;white-space:nowrap;border:1px solid rgba(201,161,90,.5);padding:.4rem .85rem;border-radius:6px">Open in new tab &#8599;</a>
      </div>
      <iframe src="${HUB_LIVE}" title="Crēdo integrated hub (concept mockup)" style="flex:1;min-height:0;width:100%;border:0;background:#fff"></iframe>
    </div>
  `,

    roadmap: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>Build plan &amp; phasing</h1>
      <p class="brief__lede">Phase one is the website redesign, in about four to six weeks, with the engine running the whole time. The CRM comes later, as a separate addition once the website and the engine are running.</p>

      <div class="brief__sec">
        <p class="brief__num">&infin;</p>
        <div class="brief__body">
          <h2>Run and launch, from day one</h2>
          <p>Prota keeps the live Meta and Google campaigns optimized, and launches then runs the content pipeline and the always-on social program, which are built but not yet started. The build never interrupts acquisition.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">1</p>
        <div class="brief__body">
          <h2>Phase one: the website redesign (about 4 to 6 weeks), then ongoing improvement</h2>
          <div class="state">
            <div class="state__row"><div class="state__k">Weeks 1 to 2</div><div class="state__v">Design aligned to the new microsite, the seven-cluster site structure and templates built, the lead funnel and tracking wired in.</div></div>
            <div class="state__row"><div class="state__k">Weeks 3 to 4</div><div class="state__v">Cluster pages and the article library populated from existing content, trust-bar and accessibility pass, speed pass.</div></div>
            <div class="state__row"><div class="state__k">Weeks 5 to 6</div><div class="state__v">Ads and content repointed to the new site, launch, and the first read on conversion against the legacy pages.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">2</p>
        <div class="brief__body">
          <h2>Later: the CRM and the rest of the hub</h2>
          <p>The CRM is deliberately left for later, as a separate addition once the website and the engine are running. It is the case portal, the email and SMS sequences, and the call-center integration, each a projection over the same shared data the website already uses, so each is additive rather than a fresh build. Scoped and priced when Credo is ready, not part of the day-one retainer.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Later</span><span>Module</span><span>What it adds</span></div>
            <div class="ledger__row"><span class="lg-seg">Case portal</span><span class="lg-build">Intake and qualification</span><span class="lg-why">Turns a lead into a structured, workable client record</span></div>
            <div class="ledger__row"><span class="lg-seg">Email and SMS</span><span class="lg-build">Nurture sequences</span><span class="lg-why">Converts and retains leads the funnel already captures</span></div>
            <div class="ledger__row"><span class="lg-seg">Call center</span><span class="lg-build">Qualification integration</span><span class="lg-why">Closes the loop from first touch to signed case</span></div>
          </div>
          <p class="brief__aside">The full module map is the concept in <b>The integrated hub</b>. This is the direction, priced separately when the time comes.</p>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. Timeline is an estimate and assumes timely content and compliance sign-off.</p></div>
    </div>
  `,

    pricing: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>Commercials</h1>
      <p class="brief__lede">One monthly retainer from day one, across three tracks. Website development sits inside the retainer and transitions into improvement and maintenance on the same line. The CRM comes later, as a separate addition.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>The monthly retainer</h2>
          <div class="ledger">
            <div class="ledger__head"><span>Track</span><span>What it covers</span><span>Per month</span></div>
            <div class="ledger__row"><span class="lg-seg">Paid campaigns</span><span class="lg-now">Managing and optimizing the live Meta and Google campaigns, creative and reporting</span><span class="lg-why"><b>$7,500</b></span></div>
            <div class="ledger__row"><span class="lg-seg">Website</span><span class="lg-now">Redesigning credolegal.com to match the microsite, then ongoing improvement and maintenance</span><span class="lg-why"><b>$2,500</b></span></div>
            <div class="ledger__row"><span class="lg-seg">Content and organic social</span><span class="lg-now">Launching and running the content pipeline and the always-on social program</span><span class="lg-why"><b>$5,000</b></span></div>
            <div class="ledger__row"><span class="lg-seg">Total retainer</span><span class="lg-now">All three tracks, from day one</span><span class="lg-why"><b>$15,000</b></span></div>
            <div class="ledger__row"><span class="lg-seg">Media budget</span><span class="lg-now">Paid spend on Meta and Google, billed at cost, set by Credo</span><span class="lg-why"><b>Pass-through</b></span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>How to read it</h2>
          <div class="state">
            <div class="state__row"><div class="state__k">Retainer from day one</div><div class="state__v">All three tracks run monthly from the start. There is no separate upfront project fee; the website build sits inside the website track.</div></div>
            <div class="state__row"><div class="state__k">Build, then maintain</div><div class="state__v">The website track begins as the redesign and continues as improvement and maintenance on the same monthly fee.</div></div>
            <div class="state__row"><div class="state__k">The CRM comes later</div><div class="state__v">The case portal, the email and SMS sequences, and the call-center integration are a later addition, scoped and priced when Credo is ready. They are not in this retainer.</div></div>
            <div class="state__row"><div class="state__k">Media is separate</div><div class="state__v">Ad spend is Credo's budget, passed through at cost. The retainer is for the work, not a markup on media.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. Retainer is $15,000 per month across the three tracks; media budget separate.</p></div>
    </div>
  `,

    people: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Proposal for Crēdo Legal</p>
      <h1>Team &amp; roles</h1>
      <p class="brief__lede">Who owns what across the two teams. One dependency sits above the rest: compliance sign-off on ad and site copy for a legal and financial audience belongs on the critical path, not at the end of it.</p>
      <div class="people">
        <div class="person"><div class="person__av">VS</div><div class="person__body"><h3>Vernon Steward</h3><p class="person__role">CEO, Prota Studios</p><p class="person__bio">Owns the engagement: strategy, the website build, media management, and the phasing into the hub, with the Prota team on build and ad ops.</p></div></div>
        <div class="person"><div class="person__av">PB</div><div class="person__body"><h3>Prota build team</h3><p class="person__role">Design &amp; development, Prota</p><p class="person__bio">Builds the website redesign and, later, the CRM modules on the shared content, audience, and interaction architecture.</p></div></div>
        <div class="person"><div class="person__av">PM</div><div class="person__body"><h3>Prota media team</h3><p class="person__role">Paid &amp; content, Prota</p><p class="person__bio">Optimizes the live Meta and Google campaigns, and launches and runs the content pipeline and always-on social program through the engagement.</p></div></div>
        <div class="person"><div class="person__av">CL</div><div class="person__body"><h3>[ Credo lead ]</h3><p class="person__role">Client owner, Crēdo Legal</p><p class="person__bio">Owns approval of scope, brand direction, and the go-decision on each phase. To be confirmed.</p></div></div>
        <div class="person"><div class="person__av">CC</div><div class="person__body"><h3>[ Credo compliance ]</h3><p class="person__role">Legal &amp; compliance, Crēdo Legal</p><p class="person__bio">Signs off ad and site copy and disclaimers for the legal and financial audience. The gating dependency in the timeline. To be confirmed.</p></div></div>
      </div>
      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Crēdo Legal. Credo roles marked to be confirmed.</p></div>
    </div>
  `,

  },

};
