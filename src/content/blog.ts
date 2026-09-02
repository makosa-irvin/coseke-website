export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string */
  publishedAt: string;
  categoryId: string; // links to solutionCategories in content/solutions.ts
  relatedSolutionSlug?: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-an-edrms",
    title: "What is an EDRMS, and does your institution actually need one?",
    excerpt:
      "A plain-language explanation of what an Electronic Document & Records Management System actually does, and the signs that suggest you're ready for one.",
    publishedAt: "2026-02-10",
    categoryId: "records",
    relatedSolutionSlug: "edrms",
    body: [
      {
        type: "paragraph",
        text: "EDRMS is one of those acronyms that gets thrown around in tenders and IT strategy documents long before anyone explains what it actually means. Stripped of the jargon, an Electronic Document & Records Management System does three things: it gives every document a single home, it controls who can see, edit, or approve that document, and it keeps a record of who did what to it and when.",
      },
      {
        type: "paragraph",
        text: "That's a meaningful upgrade from the setup most organizations actually have, which is usually some mix of a shared drive, a handful of departmental email inboxes, a filing cabinet, and whatever system a previous IT lead configured before they left. None of that is wrong exactly, it just wasn't designed to answer the questions that come up later: which version of this contract is current, who approved this payment, and can we produce this file within the hour if a regulator asks for it.",
      },
      { type: "heading", text: "Signs you're past the point where a shared drive works" },
      {
        type: "list",
        items: [
          "Finding a specific document reliably takes a phone call, not a search",
          "Two people have, at some point, edited different versions of the same file without knowing it",
          "An audit or regulatory request has taken longer than it should have because files were scattered across departments",
          "Approvals happen over email, with no single record of who signed off on what",
          "You're retaining paper originals indefinitely because nobody's confident the digital copy is authoritative",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are really about document volume. A small registry with a few thousand files can hit all five; a large one with good habits and a simple structure might hit none. What actually forces the move to a proper EDRMS is accountability: the moment someone outside your organization, an auditor, a regulator, a court, needs to trust that what you're showing them is complete, current, and unaltered.",
      },
      { type: "heading", text: "What actually changes after implementation" },
      {
        type: "paragraph",
        text: "The visible change is search: full-text search across scanned and native documents, so retrieval stops depending on someone remembering which folder a file lives in. The less visible but more important change is workflow. Once documents live in one governed system, routing something for approval, an invoice, a policy exception, a new account, becomes a tracked process instead of an email chain that quietly stalls in someone's inbox.",
      },
      {
        type: "paragraph",
        text: "It's worth being honest about what an EDRMS doesn't fix on its own: bad filing habits don't disappear just because the software changed, and a system nobody's trained to use reverts to email within a few months. The technology is the easier half of the project. The harder half, and the one that actually determines whether it sticks, is agreeing on retention rules, access levels, and naming conventions before a single document gets migrated.",
      },
    ],
  },
  {
    slug: "digitization-backlog-where-to-start",
    title: "You have decades of paper. Here's where a digitization project actually starts.",
    excerpt:
      "Scanning is the easy part. The work that determines whether a digitization project succeeds happens before a single page goes through a scanner.",
    publishedAt: "2026-03-04",
    categoryId: "records",
    relatedSolutionSlug: "digitization",
    body: [
      {
        type: "paragraph",
        text: "Most conversations about digitizing a paper archive start with a question about scanners: how fast, how many, how much. That's a reasonable question, but it's the wrong first question. Production scanners are a solved problem, capacity is mostly a matter of budget and time. The part that actually determines whether a digitization project delivers a searchable record or just an expensive folder of images is the indexing plan, and that has to be settled before anything gets scanned.",
      },
      { type: "heading", text: "Start with a sample, not the whole archive" },
      {
        type: "paragraph",
        text: "Before committing to an indexing structure across an entire archive, it's worth pulling a representative sample, a few hundred files spanning different departments and years, and indexing that first. This surfaces the inconsistencies that always exist in a real archive: files that don't match any category cleanly, inconsistent naming across departments, records that were supposed to be destroyed years ago but weren't. Finding these in a sample of 300 files is a afternoon's work. Finding them after 300,000 files have already been scanned against the wrong structure is a much more expensive problem.",
      },
      { type: "heading", text: 'Decide what "done" looks like before you start' },
      {
        type: "list",
        items: [
          "What fields does every document need indexed against (date, department, document type, reference number)?",
          "Who is allowed to see which categories of document once they're digital?",
          "What happens to the physical original once it's scanned, destroyed, retained on-site, or moved to off-site storage?",
          "What's the retention period for each document type, and who's responsible for enforcing it?",
        ],
      },
      {
        type: "paragraph",
        text: "These are governance questions, not scanning questions, and they're usually the ones that stall a project midway through if they weren't answered up front. A digitization bureau can move through backlog quickly once the rules are set. What consistently slows a project down is discovering three months in that nobody agreed on what to do with duplicates, or that two departments have been using the same reference number format for different things.",
      },
      { type: "heading", text: "Day-forward matters as much as the backlog" },
      {
        type: "paragraph",
        text: "It's tempting to think of digitization as a one-time project: clear the backlog, then move on. But an archive that stops growing on paper only happens if day-forward documents are captured digitally from day one. Otherwise the backlog reappears within a year or two, just with a smaller number attached to it. The strongest projects treat backlog conversion and day-forward capture as two halves of the same rollout, not a project followed by a separate decision later.",
      },
    ],
  },
  {
    slug: "board-packs-without-the-printing",
    title: "Board packs without the printing: what a board portal actually changes",
    excerpt:
      'Beyond "no more printing," a digital board portal changes who can access papers, how late changes get handled, and what the record of a decision actually looks like.',
    publishedAt: "2026-03-22",
    categoryId: "governance",
    relatedSolutionSlug: "board-portal",
    body: [
      {
        type: "paragraph",
        text: "The pitch for a board portal usually leads with printing: no more binding two hundred pages the night before a meeting, no more couriering board packs to directors in different cities. That's real, but it undersells what actually changes once board governance moves off paper.",
      },
      { type: "heading", text: "Late changes stop being a crisis" },
      {
        type: "paragraph",
        text: "In a paper process, a change to the agenda two days before a meeting means reprinting and redistributing, or worse, handing out a loose page and hoping everyone inserts it in the right place. In a portal, an updated paper replaces the old version for every director at once, with a clear record of what changed and when. The board secretary's job shifts from logistics to substance.",
      },
      { type: "heading", text: "The record of the meeting becomes more defensible" },
      {
        type: "paragraph",
        text: "This is the part that matters most for regulated entities: every paper a director viewed, every annotation, every vote, is timestamped. If a decision is ever questioned, the question isn't \"do we still have the minutes,\" it's a matter of pulling an exact record of what was in front of the board at the moment they decided. For SACCOs, pension schemes, and other member-governed organizations, that's not a convenience feature, it's what regulators and auditors are increasingly expecting to see.",
      },
      { type: "heading", text: "What doesn't change" },
      {
        type: "paragraph",
        text: "A portal doesn't fix a badly run meeting, and it doesn't replace the judgment of a good board secretary. Papers still need to go out with enough lead time to be read properly, agendas still need discipline, and directors still need to actually open the app rather than asking someone to print it for them anyway. The technology removes the logistics friction; it doesn't remove the need for good governance practice underneath it.",
      },
    ],
  },
  {
    slug: "virtual-agm-checklist",
    title: "Running a virtual or hybrid AGM: a practical checklist",
    excerpt:
      "Quorum, identity verification, and voting all work differently online. A checklist for SACCOs, cooperatives, and member-owned organizations planning a virtual or hybrid AGM.",
    publishedAt: "2026-04-08",
    categoryId: "governance",
    relatedSolutionSlug: "virtual-agms",
    body: [
      {
        type: "paragraph",
        text: "An AGM run online has to answer the same governance questions an in-person one does, who's actually present, is there a quorum, was the vote counted correctly, it just has to answer them without a physical room to rely on. Below is a practical checklist for organizations planning their first virtual or hybrid AGM.",
      },
      { type: "heading", text: "Before the meeting" },
      {
        type: "list",
        items: [
          "Confirm your governing rules actually permit a virtual or hybrid AGM, some SACCO and cooperative bylaws still assume physical attendance and may need amending first",
          "Decide how member identity will be verified at sign-in, not just a name entry, but something that maps back to your membership register",
          "Publish clear joining instructions well ahead of time, including a fallback for members with limited connectivity",
          "Test the voting mechanism with a small group before the actual meeting",
        ],
      },
      { type: "heading", text: "During the meeting" },
      {
        type: "list",
        items: [
          "Track quorum in real time, not just at sign-in, since attendance can fluctuate through a long meeting",
          "Keep a clear record of who joined, when, and whether by video or proxy",
          "For hybrid meetings, make sure remote members can actually hear and be heard in the room, this is where hybrid AGMs most often fail in practice",
          "Record proceedings, not just minutes but the session itself where your governance rules allow it",
        ],
      },
      { type: "heading", text: "After the meeting" },
      {
        type: "paragraph",
        text: "The output of a virtual AGM needs to be at least as defensible as a physical one: an attendance record, a voting record with results by resolution, and minutes that a regulator or auditor could review without having to take anyone's word for what happened. This is where the platform matters more than the meeting itself, since these records need to be retrievable months or years later, not just accurate on the day.",
      },
    ],
  },
  {
    slug: "records-retention-101",
    title: "Records retention 101: how long do you actually have to keep it?",
    excerpt:
      "\"Keep everything forever\" isn't a retention policy, it's the absence of one. A practical starting point for organizations that don't have documented retention rules yet.",
    publishedAt: "2026-05-06",
    categoryId: "records",
    relatedSolutionSlug: "physical-archiving",
    body: [
      {
        type: "paragraph",
        text: "Ask most organizations how long they're required to keep a given category of document, and the honest answer is usually \"we're not entirely sure, so we keep it all.\" That's not a retention policy, it's the absence of one, and it creates two problems at once: unnecessary storage cost for records that could legally be destroyed, and genuine risk from records that should have been destroyed but weren't, since older data that should be gone is also data that can be requested, leaked, or subpoenaed.",
      },
      { type: "heading", text: "Retention periods aren't one-size-fits-all" },
      {
        type: "paragraph",
        text: "Different document categories carry different retention obligations, often set by sector-specific regulation, tax law, or statutes of limitation rather than one general records law. A financial institution's transaction records, an employer's payroll records, and a hospital's patient files are all governed by different rules, sometimes with different retention periods even within the same organization. This is precisely why \"keep everything indefinitely\" feels safer than it is: it doesn't actually satisfy any specific requirement, it just avoids the work of finding out what the requirement is.",
      },
      { type: "heading", text: "A practical starting point" },
      {
        type: "list",
        items: [
          "Inventory your major document categories, don't start with individual files, start with categories: contracts, HR records, financial records, correspondence, and so on",
          "For each category, identify the applicable retention requirement, this usually means a conversation with legal or compliance, not a guess",
          "Document the retention period and the destruction trigger, is it years from creation, years from contract end, years after an employee leaves",
          "Assign ownership for enforcing it, a retention schedule nobody's responsible for enforcing is just a document",
        ],
      },
      {
        type: "paragraph",
        text: "This is one of the areas where digitizing records actually helps enforce good practice rather than just following it: once retention rules are configured into a records system, disposal can be scheduled and flagged automatically instead of depending on someone remembering to check. The policy still has to be decided by people who understand the regulatory context, the software just makes sure it's actually followed once it's set.",
      },
    ],
  },
  {
    slug: "erp-vs-spreadsheets",
    title: "ERP vs. spreadsheets: when finance and operations need one system",
    excerpt:
      "Spreadsheets scale further than people expect. Here's how to tell when your organization has actually outgrown them, rather than just finding them annoying.",
    publishedAt: "2026-06-01",
    categoryId: "systems",
    relatedSolutionSlug: "erp",
    body: [
      {
        type: "paragraph",
        text: "Spreadsheets are a genuinely good tool, and organizations often run finance, inventory, and reporting on them for years longer than the jokes about spreadsheet chaos would suggest. The honest question isn't whether spreadsheets are bad, it's whether the specific problems they create at your current size and complexity are worth solving with something built for the job.",
      },
      { type: "heading", text: "The tell isn't volume, it's reconciliation" },
      {
        type: "paragraph",
        text: "A single well-maintained spreadsheet can handle a surprising amount of data. What breaks down first isn't usually volume, it's having the same information exist in more than one place: finance's numbers and operations' numbers, tracked separately, that are supposed to match but need manual reconciliation to confirm they do. The moment closing the books involves cross-checking multiple spreadsheets against each other rather than reading one source, that reconciliation work becomes a recurring cost that grows with the organization.",
      },
      { type: "heading", text: "Signs the reconciliation cost has outgrown the tool" },
      {
        type: "list",
        items: [
          "Month-end close takes days of manual cross-checking between departments",
          "Two people can produce different numbers for the same metric, and it takes real effort to work out why",
          "Inventory or procurement decisions are made on data that's already a week or more out of date by the time it's reviewed",
          "Growth means adding more spreadsheets rather than more structure",
        ],
      },
      { type: "heading", text: "What an ERP actually buys you" },
      {
        type: "paragraph",
        text: "The core value of an ERP isn't features, it's a single source of truth: finance, procurement, and inventory reading from the same underlying data instead of separately maintained files that are periodically reconciled. Reporting reflects the current state of the business rather than last month's export. That's a real operational change, but it's also a real implementation project, configuring the system around how your organization actually works, not the other way around, is what determines whether it delivers that value or just becomes an expensive, unused system alongside the spreadsheets people quietly keep using anyway.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(categoryId: string): BlogPost[] {
  return blogPosts.filter((p) => p.categoryId === categoryId);
}
