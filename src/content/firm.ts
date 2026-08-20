/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *  Every piece of copy on this site is read from this file.
 *  To launch with the real client's details, edit only this file.
 *
 *  Anything marked  [PLACEHOLDER]  must be replaced before launch.
 *  Run a search for "PLACEHOLDER" to find everything outstanding.
 * ─────────────────────────────────────────────────────────────
 */

export const firm = {
  // ── Identity ──────────────────────────────────────────────
  name: "[PLACEHOLDER] Firm Name LLP",
  shortName: "[PLACEHOLDER] Firm",
  tagline: "Considered counsel for consequential decisions.",
  founded: "[PLACEHOLDER] 1998",

  // ── Contact ───────────────────────────────────────────────
  phone: "[PLACEHOLDER] +1 (555) 010-0000",
  email: "[PLACEHOLDER] hello@firmname.com",
  address: {
    line1: "[PLACEHOLDER] 100 Example Street",
    line2: "Suite 1200",
    city: "[PLACEHOLDER] City",
    region: "[PLACEHOLDER] State",
    postalCode: "[PLACEHOLDER] 00000",
    country: "[PLACEHOLDER] Country",
  },

  // ── SEO ───────────────────────────────────────────────────
  // Update to the real domain once Vercel is connected.
  siteUrl: "https://cl-lawfirm-site.vercel.app",
  metaDescription:
    "[PLACEHOLDER] A short, specific description of the firm and who it serves. Around 150 characters — this is what appears in search results.",

  // ── Compliance ────────────────────────────────────────────
  // Attorney advertising rules vary by jurisdiction. Confirm the
  // exact required wording with the client's bar association.
  jurisdiction: "[PLACEHOLDER] Jurisdiction",
  disclaimer:
    "The information on this website is provided for general informational purposes only and does not constitute legal advice. Viewing this site or contacting the firm does not create an attorney–client relationship. Do not send confidential information until such a relationship has been established in writing.",
  advertisingNotice: "[PLACEHOLDER] Attorney advertising. Prior results do not guarantee a similar outcome.",
} as const;

// ── Navigation ──────────────────────────────────────────────
export const nav = [
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Contact", href: "/contact" },
] as const;

// ── Practice Areas ──────────────────────────────────────────
// Add, remove, or reorder freely. Each generates its own page
// at /practice-areas/[slug] automatically.
export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate",
    title: "Corporate & Commercial",
    summary: "Formation, governance, and the agreements that hold a business together.",
    description:
      "[PLACEHOLDER] Two or three sentences describing how the firm approaches this work and what makes its perspective distinct. Write for a client deciding whether to call, not for another lawyer.",
    services: [
      "Entity formation and structuring",
      "Shareholder and partnership agreements",
      "Mergers and acquisitions",
      "Commercial contracts",
      "Corporate governance",
    ],
  },
  {
    slug: "disputes",
    title: "Dispute Resolution",
    summary: "Litigation, arbitration, and the negotiations that avoid both.",
    description:
      "[PLACEHOLDER] Describe the firm's posture in disputes — settlement-first, trial-ready, sector-specific. Be concrete.",
    services: [
      "Commercial litigation",
      "Arbitration and mediation",
      "Contract disputes",
      "Debt recovery",
      "Regulatory investigations",
    ],
  },
  {
    slug: "property",
    title: "Real Estate & Property",
    summary: "Acquisitions, leases, and title work across the transaction lifecycle.",
    description:
      "[PLACEHOLDER] Describe the property work the firm handles and the clients it serves.",
    services: [
      "Commercial acquisitions and disposals",
      "Lease negotiation and review",
      "Title investigation",
      "Development and planning",
      "Landlord and tenant matters",
    ],
  },
  {
    slug: "employment",
    title: "Employment",
    summary: "Advising both sides of the employment relationship, carefully.",
    description:
      "[PLACEHOLDER] Note whether the firm acts for employers, employees, or both — clients look for this specifically.",
    services: [
      "Contracts and handbooks",
      "Termination and severance",
      "Workplace investigations",
      "Discrimination and harassment claims",
      "Restrictive covenants",
    ],
  },
];

// ── Attorneys ───────────────────────────────────────────────
// Each generates a profile page at /attorneys/[slug].
export type Attorney = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  admissions: string[];
  education: string[];
  languages: string[];
  email: string;
  practiceAreas: string[]; // must match practiceArea slugs above
};

export const attorneys: Attorney[] = [
  {
    slug: "placeholder-partner",
    name: "[PLACEHOLDER] Managing Partner",
    role: "Managing Partner",
    bio: "[PLACEHOLDER] A short biography in the attorney's own register. Lead with the kind of work they do and who they do it for, then credentials. Two paragraphs at most.",
    admissions: ["[PLACEHOLDER] Bar admission, year"],
    education: ["[PLACEHOLDER] LL.B., University, year"],
    languages: ["English"],
    email: "[PLACEHOLDER] name@firmname.com",
    practiceAreas: ["corporate", "disputes"],
  },
  {
    slug: "placeholder-associate",
    name: "[PLACEHOLDER] Senior Associate",
    role: "Senior Associate",
    bio: "[PLACEHOLDER] Short biography.",
    admissions: ["[PLACEHOLDER] Bar admission, year"],
    education: ["[PLACEHOLDER] LL.B., University, year"],
    languages: ["English"],
    email: "[PLACEHOLDER] name@firmname.com",
    practiceAreas: ["property", "employment"],
  },
];

// ── Firm values / approach ──────────────────────────────────
export const principles = [
  {
    marker: "§ 1",
    title: "Plain answers",
    body: "[PLACEHOLDER] Clients are told what is likely to happen, in language they can act on, before they are told what it will cost.",
  },
  {
    marker: "§ 2",
    title: "Proportionate work",
    body: "[PLACEHOLDER] The response is scaled to the matter. Not every problem needs a memorandum.",
  },
  {
    marker: "§ 3",
    title: "Continuity of counsel",
    body: "[PLACEHOLDER] The lawyer you meet is the lawyer who handles the file.",
  },
];
