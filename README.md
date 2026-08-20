# cl_lawfirm_site

Law firm website. Next.js 14 (App Router), TypeScript, Tailwind CSS. Deployed on Vercel.

---

## Editing content

**All copy lives in one file:** `src/content/firm.ts`

Firm name, contact details, practice areas, attorney profiles, and legal
disclaimers are read from there. Nothing else needs to be touched to launch
with real content.

Search the repository for `PLACEHOLDER` to find everything still outstanding.

Adding a practice area or an attorney to that file automatically generates its
page and adds it to the navigation, footer, and sitemap. No new files required.

---

## Before launch

- [ ] Replace every `PLACEHOLDER` in `src/content/firm.ts`
- [ ] Replace placeholder copy on the About page (`src/app/about/page.tsx`)
- [ ] Set `siteUrl` to the real domain
- [ ] Confirm disclaimer and attorney advertising wording with the client's bar association — requirements vary by jurisdiction
- [ ] Wire up the contact form (see below)
- [ ] Add attorney photographs

## Contact form

`src/app/api/contact/route.ts` currently validates submissions and logs them.
It does not yet send email. To connect it:

1. `npm install resend`
2. In Vercel → Settings → Environment Variables, add `RESEND_API_KEY` and `ENQUIRY_INBOX`
3. Uncomment the `SEND EMAIL` block in the route

Never commit API keys to this repository.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Design notes

Palette is gold, charcoal, and bone. Layout follows a full-bleed photographic
hero, alternating image/text bands, card grids, and a testimonials block.

Typefaces: Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (labels).

### Images

Photographs go in `public/images/` — see the README there for filenames and
sizes. Missing files fall back to a gradient placeholder, so the site looks
intact before photography arrives.

### Two things deliberately left out

**Press logos.** The reference design carried an "As seen in" bar with CNN,
NBC, CBS, Forbes and others. Those are trademarks, and displaying them without
genuine coverage is false advertising — for a law firm that is a bar
disciplinary risk, not just a marketing exaggeration. `pressMentions` in
`src/content/firm.ts` is empty and the bar does not render until it is filled
with real, linkable coverage.

**Results claims.** Phrases like "recovering millions every year" trigger
mandatory disclaimer requirements in most jurisdictions and are restricted
outright in some. If the client wants results messaging, confirm the required
wording with their bar association first and make sure the figures are
verifiable.
