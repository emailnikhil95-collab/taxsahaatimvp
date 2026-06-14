import { LearnArticle } from "./learn-articles";

export const RECONCILIATION_ARTICLES_1: LearnArticle[] = [
  {
    slug: "ais-vs-26as-differences",
    title: "AIS vs Form 26AS: What's the Difference and Which to Use?",
    description: "Confused between AIS and Form 26AS? Learn the key differences and find out which document you need to check before filing your income tax return.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "ais",
    tags: ["ais", "26as", "itr-filing", "tax-documents"],
    relatedGlossarySlugs: ["ais", "26as"],
    faqs: [
      {
        question: "Is AIS the same as Form 26AS?",
        answer: "No. Form 26AS primarily shows tax credits like TDS and TCS, while AIS (Annual Information Statement) shows a much broader range of financial transactions including savings interest, mutual fund sales, and more."
      }
    ],
    body: `## Don't mix up your tax documents

When you log into the Income Tax portal, you'll see two major documents: **Form 26AS** and the **AIS** (Annual Information Statement). It's easy to get confused, but knowing the difference is crucial for a smooth tax filing process.

## What is Form 26AS?

Think of Form 26AS as your tax credit passbook. It mainly shows:
- **TDS (Tax Deducted at Source):** The tax your employer or bank deducted before paying you.
- **TCS (Tax Collected at Source):** Tax collected on certain large purchases (like foreign travel packages or cars).
- **Advance Tax / Self-Assessment Tax:** Taxes you paid yourself during the year.

If you claim a tax credit in your ITR, it **must** appear in your Form 26AS.

## What is AIS?

AIS is a much wider net. It includes everything in Form 26AS, plus third-party reporting of your financial life:
- Saving bank account interest
- Fixed Deposit (FD) interest
- Mutual fund and stock transactions
- Large credit card payments or property purchases

## Which one should you use?

You need **both**. 
1. Use **Form 26AS** to confirm your tax credits and TDS.
2. Use **AIS** to ensure you don't miss reporting any hidden income (like that ₹5,000 savings interest you forgot about).

Filing your return without checking your AIS is the fastest way to get a tax notice. At LastMinute ITR, our tools help you cross-verify your Form 16 against both these documents so you can file on incometax.gov.in with confidence.

*Remember: LastMinute ITR is your companion. We help you prepare, but you file your return on the official portal.*`
  },
  {
    slug: "form-16-and-ais-mismatch",
    title: "Form 16 and AIS Mismatch: How to Fix It Before Filing ITR",
    description: "Does your Form 16 not match your AIS? Discover simple steps to resolve mismatches and avoid getting an income tax notice from the department.",
    readMinutes: 7,
    publishedAt: "2026-06-15",
    cluster: "ais",
    tags: ["form-16", "ais", "mismatch", "tax-notice"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "What should I do if my AIS shows more income than my Form 16?",
        answer: "If the AIS data is correct (e.g., bank interest you forgot to tell your employer about), you must include it in your ITR. If the AIS data is incorrect, submit feedback on the portal."
      }
    ],
    body: `## The classic tax filing headache

You've got your Form 16 from HR. You download your AIS from the income tax portal. You compare them, and the numbers don't match. Don't panic—this is one of the most common issues for salaried taxpayers in India.

## Why do mismatches happen?

Your employer creates your Form 16 based only on the salary they paid you and the investment proofs you submitted. However, your AIS gathers data from everywhere:
- **Banks:** Reporting FD and savings account interest.
- **Mutual Fund Houses:** Reporting your SIPs and stock sales.
- **Previous Employers:** Reporting salary if you switched jobs mid-year and didn't tell your new employer.

As a result, your AIS often shows a higher income than your Form 16.

## How to fix the mismatch

### Step 1: Accept the correct additions
If your AIS shows ₹10,000 as savings interest from HDFC Bank, and you actually earned it, you must report it. Add this under 'Income from Other Sources' when preparing your return.

### Step 2: Pay any due tax
If this extra income pushes up your tax liability, you'll need to pay Self-Assessment Tax before you hit submit on the portal.

### Step 3: Dispute incorrect data
Sometimes, AIS gets it wrong (like duplicating an entry). If an entry doesn't belong to you, use the AIS portal to submit feedback marking it as "Information is not fully correct" or "Information relates to another PAN".

## Let us help you reconcile

Comparing line-by-line can be tedious. LastMinute ITR's smart tools help you reconcile your Form 16 data with your AIS automatically, highlighting the exact gaps you need to address before you file on incometax.gov.in.`
  },
  {
    slug: "how-to-submit-ais-feedback",
    title: "How to Submit Feedback on AIS for Incorrect Transactions",
    description: "Found a transaction in your AIS that doesn't belong to you? Learn how to submit feedback on the income tax portal to correct your AIS data.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "ais",
    tags: ["ais", "feedback", "tax-portal", "errors"],
    relatedGlossarySlugs: ["ais", "26as"],
    faqs: [
      {
        question: "Can I correct my AIS data if it's wrong?",
        answer: "Yes, the income tax portal allows you to submit feedback on any transaction in your AIS that you believe is incorrect, duplicated, or belongs to someone else."
      }
    ],
    body: `## When the tax department makes a mistake

Your AIS (Annual Information Statement) is powerful, but it isn't perfect. Sometimes banks or brokers make reporting errors, resulting in transactions appearing under your PAN that don't belong to you. Or worse, a transaction might be reported twice.

If you file your ITR without correcting these errors, you might end up paying more tax than you owe.

## Step-by-step: How to submit AIS feedback

Here is how you can correct your AIS directly on the income tax portal:

1. **Log in to the Portal:** Go to incometax.gov.in and log in with your PAN and password.
2. **Access AIS:** Click on the 'Services' tab and select 'Annual Information Statement (AIS)'.
3. **Open the Statement:** Click on the 'AIS' tile. You will see Part A (General Info) and Part B (TDS, SFT, etc.).
4. **Select the Transaction:** Navigate to the category where the error is (e.g., SFT Information). Find the specific incorrect transaction and click on it.
5. **Click 'Optional' to give feedback:** On the transaction detail screen, you will see a feedback button. 
6. **Choose the right option:** You can select from options like:
   - Information is not fully correct
   - Information relates to other PAN/Year
   - Information is duplicate / included in other information
   - Information is denied
7. **Submit:** Provide the correct details if asked, and submit.

## What happens next?

Once submitted, the Taxpayer Information Summary (TIS) will automatically update to reflect your feedback, ensuring your pre-filled ITR data is accurate.

Take 10 minutes to review your AIS. It's a simple step that LastMinute ITR highly recommends before you finalize your numbers and head over to the government portal to file.`
  },
  {
    slug: "what-is-tis-in-income-tax",
    title: "What is TIS in Income Tax? Taxpayer Information Summary",
    description: "Understand what the Taxpayer Information Summary (TIS) is, how it differs from AIS, and why it is crucial for accurate income tax e-filing in India.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "ais",
    tags: ["tis", "ais", "tax-summary", "e-filing"],
    relatedGlossarySlugs: ["ais", "26as"],
    faqs: [
      {
        question: "What is the difference between AIS and TIS?",
        answer: "AIS provides a detailed, line-by-line breakdown of every financial transaction reported to the tax department. TIS is a consolidated summary of that AIS data, grouped by income category, ready to be pre-filled into your ITR."
      }
    ],
    body: `## The summary sheet for your taxes

When you visit the Annual Information Statement (AIS) section on the income tax portal, you are presented with two options: AIS and TIS. 

While AIS gets all the attention, **TIS (Taxpayer Information Summary)** is actually what the tax department uses to pre-fill your Income Tax Return.

## What exactly is TIS?

If AIS is the detailed receipt from the grocery store showing every item you bought, TIS is the final bill showing just the category totals. 

TIS aggregates all the granular data from your AIS into neat, summarized categories such as:
- Total Salary
- Total Interest from Savings Accounts
- Total Interest from Deposits
- Total Dividend Income

## Why TIS matters

When you start filing your return on incometax.gov.in, the portal pulls the aggregated numbers directly from your TIS. 

If you submit feedback on a wrong transaction in your AIS (for example, marking a duplicated FD interest entry as 'duplicate'), your TIS will instantly recalculate and show the new, corrected total. The TIS shows two values:
1. **Reported Value:** What the banks/brokers originally reported.
2. **Processed Value:** The corrected value after taking your feedback into account.

## How to use it

You don't need to overthink TIS. Just remember: always review your detailed AIS first. If everything is correct, your TIS is ready to go. You can then use these summarized TIS figures to cross-check your computation in LastMinute ITR before you securely file your taxes on the government portal.`
  },
  {
    slug: "fixed-deposit-interest-in-ais",
    title: "How FD Interest is Reported in AIS: A Guide for Taxpayers",
    description: "Learn how your fixed deposit (FD) interest is captured in the Annual Information Statement (AIS) and how to report it correctly in your ITR.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "ais",
    tags: ["fd-interest", "ais", "banking", "tax-reporting"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "Do I have to pay tax on FD interest if TDS was already deducted?",
        answer: "Yes. TDS is usually 10%, but if you fall in the 20% or 30% tax bracket, you must report the interest and pay the remaining tax as Self-Assessment Tax."
      }
    ],
    body: `## The most commonly missed income

For decades, many salaried taxpayers simply ignored their Fixed Deposit (FD) interest when filing their taxes. They assumed that because the bank deducted TDS (Tax Deducted at Source), their tax job was done. 

Today, the **Annual Information Statement (AIS)** has changed the game entirely.

## How your bank reports to the AIS

Every bank is legally required to report the interest you earn to the Income Tax Department. This data flows directly into your AIS under the 'Interest from Deposit' section. 

Even if you submitted Form 15G or 15H to stop the bank from deducting TDS, the bank *still* reports the total interest earned to the tax department. No TDS does not mean no tax!

## What you need to do

When you sit down to prepare your taxes, follow these steps:
1. **Check your AIS:** Look at the total 'Interest from Deposit'.
2. **Add it to your income:** This amount must be declared under 'Income from Other Sources' in your ITR.
3. **Claim the TDS:** If the bank deducted TDS, make sure you claim that credit (it will reflect in your Form 26AS).
4. **Pay the difference:** If your tax slab is 30% and the bank only deducted 10% TDS, you owe the remaining 20% to the government. You must pay this as Self-Assessment Tax before filing.

## Avoid the mismatch notice

Failing to declare the exact FD interest shown in your AIS is a guaranteed way to receive an automated tax notice. LastMinute ITR's companion tools help you pull all these interest figures together so you don't miss a rupee when you file on incometax.gov.in.`
  },
  {
    slug: "mutual-fund-transactions-in-ais",
    title: "Tracking Mutual Fund and Stock Transactions in Your AIS",
    description: "Wondering how the tax department knows about your stock trades? Discover how mutual fund and equity transactions are tracked and reported in your AIS.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "ais",
    tags: ["mutual-funds", "stocks", "ais", "capital-gains"],
    relatedGlossarySlugs: ["ais", "26as"],
    faqs: [
      {
        question: "If AIS shows my mutual fund sale, do I pay tax on the whole amount?",
        answer: "No. The AIS usually shows the 'Gross Sale Consideration' (total sale value). You only pay tax on your Capital Gains (Sale value minus Purchase cost)."
      }
    ],
    body: `## Big brother is watching your portfolio

If you've bought or sold stocks, or redeemed mutual funds, you've probably noticed these transactions sitting glaringly in your Annual Information Statement (AIS). 

The Income Tax Department now receives highly detailed data from depositories (like CDSL/NSDL), mutual fund registrars (like CAMS/KFintech), and brokers. Here is what you need to know.

## What exactly shows up?

In your AIS, you will likely see:
1. **Sale of Securities and Units of Mutual Funds:** This shows the total money you received from selling stocks or mutual funds.
2. **Dividends:** Any dividend payouts received directly into your bank account.
3. **Purchase of Securities:** Sometimes, large purchases of mutual funds or shares are also reported.

## The 'Gross Sale' trap

Here is where many taxpayers panic. Your AIS might show a 'Sale of Mutual Funds' worth ₹5 Lakhs. **Do not add ₹5 Lakhs to your taxable income!**

The AIS reports the *gross sale value*. For income tax purposes, you are only taxed on the *Capital Gains*. 
- **Capital Gain = Sale Value - Purchase Cost**
If you bought those funds for ₹4.8 Lakhs, your actual taxable gain is only ₹20,000. 

## Which ITR form do you need?

If you have capital gains from selling mutual funds or stocks, you **cannot file ITR-1**. You must upgrade to **ITR-2** (or ITR-3 if you do intraday/F&O trading). 

Reporting these gains requires filling out the complex Schedule CG. While you will file your actual return on incometax.gov.in, LastMinute ITR helps you figure out exactly which form you need and how to structure your capital gains data correctly.`
  },
  {
    slug: "section-143-1-intimation-explained",
    title: "Section 143(1) Intimation Explained: Is It a Tax Notice?",
    description: "Received an intimation under Section 143(1)? Don't panic. Learn what this document means, why you received it, and what steps you need to take next.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "mistakes",
    tags: ["section-143-1", "intimation", "tax-notice"],
    relatedGlossarySlugs: ["tax-notice", "refund"],
    faqs: [
      {
        question: "Do I need to reply to a Section 143(1) intimation?",
        answer: "Only if the intimation shows a tax demand (tax payable). If it shows a refund or zero demand, no action is required."
      }
    ],
    body: `## The email that scares everyone

A few weeks after you file your ITR, you receive an email from the Income Tax Department with a password-protected PDF. The subject line mentions **"Intimation under Section 143(1)"**. 

Your heart drops. Is it a tax notice? Are you being audited?

Take a deep breath. **An intimation is not a scrutiny notice.** It is simply an automated receipt from the tax department's computer system (CPC).

## What does it mean?

When you file your ITR, the tax department's computers automatically process the numbers. They check for basic arithmetic errors, verify your tax credits (TDS), and compare your income against your Form 26AS. 

The 143(1) intimation is the result of that automated check. It will tell you one of three things:

1. **Your return is accepted as is:** The tax you calculated matches their calculation perfectly. No action needed.
2. **You are owed a refund:** The department calculated that you paid more tax than required. Your refund will be processed soon. No action needed.
3. **There is a tax demand:** The department found a discrepancy (like a math error, a missed TDS credit, or disallowed deductions). They have calculated that you owe more tax. **Action required.**

## How to read the document

The PDF has two columns:
- **As provided by taxpayer in Return of Income:** The numbers you filed.
- **As computed under section 143(1):** The numbers the tax department calculated.

## What to do if there is a demand

If the right column shows higher tax, you have 30 days to respond. You can either agree with the demand and pay the tax on the portal, or disagree and file a rectification/response explaining why their calculation is wrong.

Using LastMinute ITR to double-check your numbers against your AIS and 26AS before filing on incometax.gov.in is the best way to ensure your 143(1) intimation brings good news, not a demand.`
  },
  {
    slug: "defective-return-notice-139-9",
    title: "Got a Defective Return Notice Under Section 139(9)? Fix It",
    description: "Find out why you might receive a defective return notice under Section 139(9) and follow our step-by-step guide to correct and resubmit your ITR.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "mistakes",
    tags: ["section-139-9", "defective-return", "notice"],
    relatedGlossarySlugs: ["tax-notice", "ais"],
    faqs: [
      {
        question: "How many days do I have to reply to a defective return notice?",
        answer: "You typically have 15 days from the date of receiving the notice under Section 139(9) to correct the defects and resubmit your return."
      }
    ],
    body: `## What makes a return "defective"?

You thought you were done with your taxes, but then you receive a notice under **Section 139(9)** stating your return is "defective". 

A defective return doesn't mean you're in legal trouble; it simply means there is missing or inconsistent information in the ITR you submitted. The tax department cannot process it until you fix the errors.

## Common reasons for a Section 139(9) notice

Here are the most frequent mistakes that trigger this notice:
1. **TDS claimed but income not offered:** You claimed a TDS refund, but you forgot to declare the corresponding income (like FD interest) in your return.
2. **Wrong ITR form:** You filed ITR-1, but your AIS showed capital gains from mutual funds (which requires ITR-2).
3. **Incomplete audit details:** You filed ITR-4 or ITR-3 for a business but left the balance sheet or audit information blank when it was required.
4. **Unpaid taxes:** You filed your return but haven't paid the self-assessment tax due.

## How to fix a defective return

Don't ignore this notice! If you don't respond within 15 days, your original ITR will be treated as "invalid" (as if you never filed it at all), which can lead to late filing penalties.

1. **Log in:** Go to the incometax.gov.in portal.
2. **Navigate:** Go to *Pending Actions* > *e-Proceedings*.
3. **View Notice:** Click on the notice to read the exact error code and description.
4. **Agree or Disagree:** Select whether you agree with the defect.
5. **Upload Revised ITR:** If you agree, you will need to prepare a fresh, corrected XML/JSON file and upload it in response to the notice.

Correcting a defective return can be stressful. We recommend using a companion guide like LastMinute ITR to ensure you select the right form and report all income the first time, ensuring your actual filing on incometax.gov.in goes smoothly.`
  },
  {
    slug: "outstanding-tax-demand-notice",
    title: "How to Handle an Outstanding Income Tax Demand Notice",
    description: "Received a demand notice for outstanding tax? Learn how to verify the demand, agree or disagree with it on the portal, and pay your dues safely.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "mistakes",
    tags: ["tax-demand", "notice", "tax-payment", "portal"],
    relatedGlossarySlugs: ["tax-notice", "refund"],
    faqs: [
      {
        question: "What happens if I ignore an outstanding tax demand?",
        answer: "If ignored, the tax department can charge penal interest under Section 220(2), adjust the demand against your future tax refunds, or even initiate recovery proceedings."
      }
    ],
    body: `## The dreaded tax demand

Receiving an "Outstanding Tax Demand" notice from the Income Tax Department can ruin your week. This notice means the taxmen believe you owe them more money for a specific assessment year.

Whether it's due to a mismatch in TDS, a disallowed deduction, or a calculation error on your part, you must take action quickly.

## Step 1: Don't panic, verify it first

Before you rush to pay, confirm the demand is genuine. 
1. Log in to the income tax portal (incometax.gov.in).
2. Go to **Pending Actions > Response to Outstanding Demand**.
3. You will see a list of any demands. Check the Assessment Year and the amount.
4. Download the accompanying Intimation order to see *why* the demand was raised. Look for differences between what you filed and what they calculated.

## Step 2: Choose your response

You have a few options when responding on the portal:

- **Demand is correct:** If you made a mistake and agree you owe the money, select this option. You will then be prompted to pay the tax online via the e-Pay Tax portal.
- **Demand is partially correct:** You agree with some parts but not others. You will need to provide reasons and evidence for the part you disagree with.
- **Disagree with the demand:** If you have proof that the department made an error (like failing to consider a TDS certificate you have), select this. You must provide a valid reason, such as "TDS credit mismatched" or "Demand already paid".

## Step 3: Follow up

If you pay the demand, keep the challan receipt safe. If you disagree, keep an eye on your portal dashboard for the department's response to your justification.

The easiest way to avoid outstanding demands is meticulous preparation. By reconciling your Form 16, AIS, and 26AS using tools like LastMinute ITR before you file on the official portal, you minimize the risk of nasty surprises later.`
  },
  {
    slug: "how-to-reply-to-tax-notice",
    title: "How to Reply to an Income Tax Notice Online: Simple Guide",
    description: "Don't ignore income tax notices! Follow our simple, jargon-free guide on how to read, understand, and reply to a tax notice on the e-filing portal.",
    readMinutes: 7,
    publishedAt: "2026-06-15",
    cluster: "mistakes",
    tags: ["tax-notice", "e-filing", "compliance", "reply"],
    relatedGlossarySlugs: ["tax-notice", "ais"],
    faqs: [
      {
        question: "Can I reply to an income tax notice online?",
        answer: "Yes, almost all income tax notices must be replied to online through the 'e-Proceedings' tab on the incometax.gov.in portal. You do not need to visit a tax office."
      }
    ],
    body: `## The golden rule: Never ignore a notice

If you receive an income tax notice, the worst thing you can do is bury your head in the sand. Ignoring a notice can lead to heavy penalties, prosecution, or your tax refund being withheld. 

Thankfully, responding to a notice in India is now a fully digital, faceless process. You do not need to visit the Income Tax office.

## Step 1: Identify the type of notice

Read the subject line or the top of the PDF. Is it:
- **Section 143(1):** An intimation of successful processing or a math error.
- **Section 139(9):** A defective return (you need to fix errors).
- **Section 143(2):** A scrutiny notice (they want to audit your return in detail).
- **Section 148:** Income escaping assessment (they believe you hid income).

## Step 2: Log in to the e-Proceedings portal

1. Go to **incometax.gov.in** and log in.
2. Navigate to **Pending Actions** > **e-Proceedings**.
3. You will see a list of all active notices. Click on the notice you wish to respond to.

## Step 3: Draft your response

The portal will provide a structured way to respond. Depending on the notice, you might be asked to:
- Agree or disagree with an addition to your income.
- Upload supporting documents (like rent receipts, bank statements, or TDS certificates).
- Submit a revised ITR.

**Keep it professional:** Write clear, concise explanations. If you are uploading documents, make sure they are in PDF format and clearly named.

## When to seek help

If it's a simple 143(1) intimation about a math error, you can likely handle it yourself. However, if you receive a scrutiny notice under 143(2) or 148, it is highly recommended to seek the help of a Chartered Accountant (CA).

At LastMinute ITR, we believe in empowering you to file correctly the first time to avoid this hassle entirely. Always cross-check your documents before filing on the official government portal.`
  }
];