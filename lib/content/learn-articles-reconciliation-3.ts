import { LearnArticle } from "./learn-articles";

export const RECONCILIATION_ARTICLES_3: LearnArticle[] = [
  {
    slug: "penalty-for-late-itr-filing",
    title: "Penalties and Interest for Filing Your ITR Late in India",
    description: "Discover the financial consequences of filing your income tax return late, including late fees under Section 234F and interest under Section 234A.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "last-minute",
    tags: ["penalty", "section-234f", "late-filing", "interest"],
    relatedGlossarySlugs: ["tax-notice", "ais"],
    faqs: [
      {
        question: "Do I have to pay a penalty if my income is below the taxable limit?",
        answer: "If your gross total income does not exceed the basic exemption limit (₹2.5 Lakhs or ₹3 Lakhs depending on the regime), you do not have to pay the late filing fee under Section 234F."
      }
    ],
    body: `## The cost of procrastination

Procrastinating on your taxes doesn't just cause stress—it literally costs you money. When you file your Income Tax Return after the July 31st deadline, the Income Tax Department applies specific penalties and interest charges automatically.

## 1. The Late Filing Fee (Section 234F)

This is a flat penalty just for missing the deadline:
- **Income over ₹5 Lakhs:** You will be charged a late fee of **₹5,000**.
- **Income below ₹5 Lakhs:** The late fee is capped at **₹1,000**.
- **Income below exemption limit:** If you don't even meet the threshold to pay taxes, the late fee is **₹0** (but you should still file if you have foreign assets or specific high-value expenses).

## 2. Interest on Unpaid Tax (Section 234A)

If you miss the deadline *and* you owe the government tax money, the clock starts ticking. 
Under Section 234A, you will be charged **1% interest per month** (or part of a month) on the outstanding tax amount. This interest calculates from August 1st until the day you actually file your return.

## 3. Loss of Carry Forward Benefits

If you suffered losses in the stock market (capital losses) or business, the tax rules allow you to carry those losses forward to future years to offset future profits. However, if you file late, you forfeit this right. (Note: Loss from house property is an exception and can still be carried forward).

Don't let these penalties eat into your finances. If you've missed the deadline, use LastMinute ITR to quickly consolidate your documents and calculate your exact penalties so you can file your belated return on incometax.gov.in as soon as possible.`
  },
  {
    slug: "revised-return-vs-belated-return",
    title: "Revised Return vs Belated Return: What's the Difference?",
    description: "Made a mistake or missed the deadline? Understand the key differences between filing a revised return and a belated return for your income taxes.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "last-minute",
    tags: ["revised-return", "belated-return", "itr-correction"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "Can I revise a belated return?",
        answer: "Yes, thanks to recent changes in tax laws, if you file a belated return and later discover a mistake, you can file a revised return to correct it before the December 31st deadline."
      }
    ],
    body: `## Two different ways to fix tax issues

The income tax portal allows you to file different types of returns depending on your situation. The two most common alternative returns are the **Revised Return** and the **Belated Return**. While they sound similar, they serve entirely different purposes.

## The Belated Return: "I'm Late"

A belated return (Section 139(4)) is for people who **completely missed the original July 31st deadline**. 
- You are filing for the first time for that assessment year.
- It comes with late fees (up to ₹5,000) and interest penalties.
- You lose the right to carry forward certain capital and business losses.

## The Revised Return: "I Made a Mistake"

A revised return (Section 139(5)) is for people who **filed on time, but realized they made an error**. 
- Perhaps you forgot to declare a bank account, missed claiming an 80C deduction, or didn't check your AIS for mutual fund sales.
- There are **no late fees** for filing a revised return (though if your correction results in more tax owed, you'll have to pay that tax plus some interest).
- Your original filing date is still respected, so you can still carry forward losses.

## The common deadline

Both Belated and Revised returns share the exact same ultimate deadline: **December 31st** of the Assessment Year. Once the clock strikes midnight on New Year's Eve, your window to file either of these voluntarily closes.

If you realize you need to file either, organize your data smoothly with LastMinute ITR before making your final submission on the government portal.`
  },
  {
    slug: "condonation-of-delay-in-itr",
    title: "Condonation of Delay for ITR: How to Request an Extension",
    description: "Missed the belated return deadline but still need to claim a refund? Learn how to apply for condonation of delay under Section 119(2)(b).",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "last-minute",
    tags: ["condonation", "delay", "section-119", "refund"],
    relatedGlossarySlugs: ["refund", "tax-notice"],
    faqs: [
      {
        question: "Is condonation of delay guaranteed to be approved?",
        answer: "No. Condonation is granted at the discretion of the tax authorities and only in cases of genuine hardship (e.g., severe medical emergencies or natural disasters)."
      }
    ],
    body: `## What happens after December 31st?

You missed the original July 31st deadline. Then, somehow, you missed the December 31st belated return deadline. You haven't filed your taxes at all for the year, and now you realize the government owes you a massive ₹50,000 refund due to excess TDS.

Are you completely out of luck? Not necessarily. Enter **Condonation of Delay**.

## What is Condonation of Delay?

Under Section 119(2)(b), the Income Tax Department allows taxpayers to request special permission to file a return after the final deadlines have passed, specifically to claim a refund or carry forward a loss. 

"Condonation" simply means the tax department is forgiving your delay.

## The strict rules

This is not an automatic right. It is a special plea, and the rules are strict:
1. **Genuine Hardship:** You must prove that you faced a severe, unavoidable circumstance that prevented you from filing. A medical emergency, a death in the family, or a natural disaster are typical valid reasons. "I forgot" will be rejected.
2. **Time Limit:** You can only file for condonation within six years from the end of the relevant assessment year.
3. **No Interest on Refund:** If your condonation is accepted and your refund is processed, you will not be paid the standard interest on that delayed refund.

## How to apply

You must log in to the incometax.gov.in portal, navigate to **Services > Condonation Request**, and submit a formal application detailing your hardship, accompanied by evidence. 

This is a complex process. While LastMinute ITR helps you prepare standard returns easily, a condonation request is a legal plea where we highly recommend consulting a Chartered Accountant to draft your application.`
  },
  {
    slug: "advance-tax-payment-deadlines",
    title: "Advance Tax Payment Deadlines: Who Needs to Pay and When?",
    description: "Do you owe more than ₹10,000 in tax? Learn about advance tax, who is required to pay it, and the important quarterly deadlines to avoid interest.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "last-minute",
    tags: ["advance-tax", "deadlines", "tax-payment"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "Do salaried employees need to pay advance tax?",
        answer: "Usually no, because employers deduct TDS. However, if a salaried employee has significant other income (like rent or capital gains) pushing their net tax due above ₹10,000, they must pay advance tax."
      }
    ],
    body: `## Pay as you earn

The government doesn't want to wait until the end of the year to collect taxes. If you have significant income, they want their share as you earn it. This is the concept of **Advance Tax**.

## Who needs to pay?

If your total estimated tax liability for the year—after subtracting all TDS (Tax Deducted at Source)—is **₹10,000 or more**, you are legally required to pay advance tax. 

*Exception:* Senior citizens (aged 60 or above) who do not have any income from a business or profession are exempt from paying advance tax.

## The Quarterly Deadlines

You cannot pay advance tax all at once at the end of the year without facing penalties. You must pay it in four installments:

1. **On or before June 15th:** Pay 15% of your total estimated tax.
2. **On or before September 15th:** Pay 45% of your total estimated tax (minus what you already paid).
3. **On or before December 15th:** Pay 75% of your total estimated tax.
4. **On or before March 15th:** Pay 100% of your total estimated tax.

## What happens if you miss a deadline?

If you fail to pay or pay less than required, you will be hit with interest penalties under **Sections 234B and 234C**. This is usually 1% per month on the defaulted amount. 

When you prepare your final return in July using tools like LastMinute ITR, any missed advance tax will show up as a hefty Self-Assessment Tax bill complete with interest penalties. Stay proactive and pay your advance tax on the e-Pay Tax portal to save your money.`
  },
  {
    slug: "which-itr-form-to-choose",
    title: "Which ITR Form Should I Choose? A Simple Guide",
    description: "Filing taxes but don't know which form to use? Follow our simple guide to choosing the correct ITR form based on your income sources in India.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["choose-itr", "forms", "salary", "business"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "What happens if I file my return using the wrong ITR form?",
        answer: "Filing with the wrong form will result in the income tax department sending you a Defective Return Notice under Section 139(9), forcing you to refile correctly."
      }
    ],
    body: `## The alphabet soup of tax forms

The Income Tax Department of India has several different ITR forms. Choosing the wrong one isn't just an inconvenience; it will result in your return being rejected as "defective". 

Here is a simplified guide to help you choose the right form before you start your filing journey.

## ITR-1 (Sahaj): The simplest form
**Who it's for:** Resident Indians with a total income up to ₹50 Lakhs.
**Income sources allowed:** 
- Salary or Pension
- ONE House Property
- Other sources (like FD interest or dividends)
- Agricultural income up to ₹5,000
**Do NOT use if:** You have capital gains (sold stocks/mutual funds) or run a business.

## ITR-2: The investor's form
**Who it's for:** Individuals and HUFs not earning from a business.
**Income sources allowed:**
- Everything in ITR-1, but with no ₹50 Lakh cap.
- Capital Gains (you sold shares, mutual funds, or property).
- More than one house property.
- Foreign income or foreign assets.
- Directors of companies or those holding unlisted equity shares.

## ITR-3: The comprehensive business form
**Who it's for:** Individuals and HUFs having income from a proprietary business or profession.
**Income sources allowed:**
- Everything in ITR-2.
- Income from a business or profession (including intraday and F&O trading).

## ITR-4 (Sugam): The presumptive business form
**Who it's for:** Individuals, HUFs, and Firms with total income up to ₹50 Lakhs.
**Income sources allowed:**
- Business or professional income computed under "Presumptive Taxation" (Sections 44AD, 44ADA, 44AE). This means you declare a fixed percentage of your turnover as profit and don't need to maintain complex books.

Not sure where to start? Let LastMinute ITR's companion guide help you categorize your AIS and Form 16 data so you know exactly which form to select on incometax.gov.in.`
  },
  {
    slug: "itr-1-vs-itr-2-differences",
    title: "ITR-1 vs ITR-2: Which Form is Right for Salaried Employees?",
    description: "Salaried but have capital gains or multiple houses? Learn the key differences between ITR-1 and ITR-2 to ensure you file your return correctly.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["itr-1", "itr-2", "salary", "capital-gains"],
    relatedGlossarySlugs: ["ais", "26as"],
    faqs: [
      {
        question: "Can I use ITR-1 if I sold mutual funds this year?",
        answer: "No. Selling mutual funds results in Capital Gains. You must use ITR-2 to report capital gains."
      }
    ],
    body: `## The great salaried dilemma

If you earn a salary, your default thought is to use **ITR-1 (Sahaj)**. It's fast, simple, and the portal practically fills it out for you. However, as modern salaried professionals invest more diversely, many unknowingly outgrow ITR-1 and must graduate to **ITR-2**.

## When ITR-1 is perfect
You should use ITR-1 if your financial life is straightforward:
- Your total income is under ₹50 Lakhs.
- You have a salary.
- You own exactly **one** house (either self-occupied or rented out).
- You earn simple interest from banks or post offices.

## When you MUST switch to ITR-2
You must abandon ITR-1 and use ITR-2 if **any one** of the following is true:

1. **You sold investments:** If you sold stocks, mutual funds, or property, you have Capital Gains. ITR-1 does not have a section for Capital Gains.
2. **You have multiple houses:** If you own two or more house properties, you cannot use ITR-1.
3. **Your income is high:** If your total income crosses ₹50 Lakhs, ITR-1 is not allowed.
4. **You hold foreign assets:** If you own foreign company stocks (RSUs from an MNC employer) or have foreign bank accounts, you must use ITR-2 to fill out the Foreign Assets (FA) schedule.
5. **You hold unlisted shares:** If you invested in startups or hold unlisted equity, you must use ITR-2.

## The risk of getting it wrong
If you force your data into ITR-1 when you have capital gains showing in your AIS, the tax department's automated systems will flag the mismatch and send you a defective return notice. 

Check your AIS carefully. If you see stock sales, accept that you need ITR-2. LastMinute ITR helps you organize your capital gains statements so that filling out the complex ITR-2 on the government portal becomes a breeze.`
  },
  {
    slug: "correct-itr-for-freelancers",
    title: "Choosing the Right ITR Form for Freelancers in India",
    description: "Are you a freelancer, consultant, or gig worker? Discover whether you should file ITR-3 or ITR-4 and how presumptive taxation can help you.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["freelancers", "itr-3", "itr-4", "presumptive-tax"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "Can a freelancer file ITR-1?",
        answer: "No. Freelance income is classified as 'Income from Business or Profession', which requires filing ITR-3 or ITR-4."
      }
    ],
    body: `## The gig economy tax puzzle

If you are a freelancer, a consultant, a content creator, or a gig worker, you are technically a business in the eyes of the Income Tax Department. 

Because your income falls under the head **"Profits and Gains from Business or Profession"**, you cannot use the simple salaried forms (ITR-1 or ITR-2). You must choose between **ITR-3** and **ITR-4**.

## Option 1: ITR-4 (The Easy Route)

ITR-4 (Sugam) is designed for small businesses and professionals who want to opt for the **Presumptive Taxation Scheme (Section 44ADA)**.
- **How it works:** Instead of maintaining detailed books of accounts and tracking every single coffee shop bill as a business expense, you simply declare that **50% of your gross receipts** is your taxable profit.
- **Eligibility:** Your total gross receipts for the year must be ₹50 Lakhs or less (or ₹75 Lakhs if 95% of your receipts are digital).
- **Pros:** It's incredibly simple and saves you from complex accounting.

## Option 2: ITR-3 (The Detailed Route)

ITR-3 is the comprehensive business form. You must use this if:
- You do not want to use presumptive taxation (e.g., your actual profit margin is much lower than 50% and you want to claim your actual business expenses like rent, laptops, and internet).
- Your freelance income exceeds the ₹50 Lakh / ₹75 Lakh limits.
- You have capital gains from selling stocks (ITR-4 does not allow capital gains).

## Which should you choose?

For most freelance professionals starting out, ITR-4 under Section 44ADA is a massive time-saver. However, if you are also an active stock market investor, the presence of capital gains forces you to use the longer ITR-3.

Before you decide, use LastMinute ITR's categorization tools to organize your freelance invoices and AIS data, making it easy to choose the right path on incometax.gov.in.`
  },
  {
    slug: "itr-form-for-capital-gains",
    title: "Which ITR Form to Use for Capital Gains from Stocks?",
    description: "If you've sold stocks or mutual funds, you can't use ITR-1. Learn which ITR form you must use to report short-term and long-term capital gains.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["capital-gains", "stocks", "itr-2", "itr-3"],
    relatedGlossarySlugs: ["ais", "26as"],
    faqs: [
      {
        question: "Do I need to report mutual fund sales if I didn't make a profit?",
        answer: "Yes. Even if you made a loss, you must report the sale. Reporting capital losses actually benefits you, as you can carry them forward to offset future gains."
      }
    ],
    body: `## The investor's tax burden

Investing in stocks and mutual funds is great for wealth creation, but it adds a layer of complexity to your tax filing. The moment you hit 'Sell' on your brokerage app, you trigger a tax event called **Capital Gains** (or Loss).

Because of this, you are immediately disqualified from using the simple ITR-1 form.

## Understanding your trading style

To pick the right form, the tax department looks at *how* you trade:

### Scenario 1: Delivery-based Trading (Use ITR-2)
If you buy shares or mutual funds, hold them for a few days, months, or years, and then sell them, this is considered **Capital Gains**. 
Whether they are Short-Term (STCG) or Long-Term (LTCG), if this is your only market activity, you must file **ITR-2**.

### Scenario 2: Intraday and F&O Trading (Use ITR-3)
If you buy and sell the same share on the same day (Intraday) or trade in Futures and Options (F&O), the tax department views this as **Business Income**, not capital gains. 
Because you now have business income, you must file the much more complex **ITR-3**.

## Don't ignore the AIS

Brokerage firms are required to report your total sale proceeds to the tax department. If you log into the portal and check your AIS, you will see a specific section detailing your 'Sale of Securities'. 

If you ignore this and try to file ITR-1, the system will flag the mismatch and send you a notice.

LastMinute ITR recommends downloading your Capital Gains statements from your brokers (Zerodha, Groww, Upstox, etc.) and keeping them handy. They contain the exact breakdown of STCG and LTCG you need to input into ITR-2 or ITR-3 on the government portal.`
  },
  {
    slug: "presumptive-taxation-itr-4",
    title: "Understanding ITR-4 and Presumptive Taxation (Section 44AD)",
    description: "Learn how small businesses and professionals can save time and effort by filing ITR-4 under the presumptive taxation scheme (Section 44AD/ADA).",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["itr-4", "section-44ad", "presumptive-tax", "business"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "Who can use Section 44AD?",
        answer: "Resident individuals, HUFs, and partnership firms running eligible businesses with a turnover of up to ₹2 Crores (or ₹3 Crores if 95% of receipts are digital) can use Section 44AD."
      }
    ],
    body: `## Accounting made simple

Running a small business or freelance practice is hard enough without having to maintain complex ledgers, track every coffee receipt, and hire expensive accountants. 

To help small taxpayers, the government introduced the **Presumptive Taxation Scheme**, which allows you to file the simplified **ITR-4 (Sugam)** form.

## How Presumptive Taxation Works

Instead of calculating your exact profit by subtracting all your expenses from your revenue, the government allows you to *presume* your profit as a fixed percentage of your total gross receipts.

### For Businesses (Section 44AD)
- Retailers, traders, and small businesses can declare their profit as **8% of cash receipts** and **6% of digital receipts**.
- Turnover limit: Up to ₹2 Crores (or ₹3 Crores if 95% of transactions are digital).

### For Professionals (Section 44ADA)
- Freelancers, doctors, lawyers, and consultants can declare their profit as **50% of their gross receipts**.
- Gross receipts limit: Up to ₹50 Lakhs (or ₹75 Lakhs if 95% of transactions are digital).

## The Catch

If you opt for this scheme, you **cannot claim any business expenses** (like rent, depreciation on laptops, or internet bills). The government assumes that the remaining 50% (or 92%) covers all your expenses. 

If your actual profit margin is much lower and you have exact accounting records to prove it, you might be better off filing the detailed ITR-3 form instead.

## Restrictions of ITR-4

While ITR-4 is simple, you cannot use it if you have:
- Capital gains (sold stocks or property).
- Income from more than one house property.
- Foreign assets or foreign income.

Before jumping into ITR-4, use LastMinute ITR's companion checklist to ensure you meet all the eligibility criteria, so your final filing on incometax.gov.in is flawless.`
  },
  {
    slug: "itr-for-multiple-houses",
    title: "Filing ITR When You Own Multiple House Properties",
    description: "Own more than one house? Learn how rental income and deemed rent are taxed, and which ITR form you need to choose for multiple properties.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["house-property", "rent", "itr-2", "multiple-houses"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "Do I have to pay tax on an empty house?",
        answer: "If you own more than two houses, any house beyond the first two is treated as 'deemed let out'. You have to calculate a notional rent and pay tax on it, even if the house is locked and empty."
      }
    ],
    body: `## Real estate and your tax return

Owning multiple homes is a great investment milestone, but it changes how you interact with the income tax portal. The moment your name is on the deed of a second or third house, the simple ITR-1 form is no longer an option for you.

## The Form Limitation

The Sahaj form (ITR-1) only allows you to report income (or loss) from **one** house property. 
If you own two or more properties—regardless of whether they are rented out or empty—you are legally required to file **ITR-2** (or ITR-3 if you also have business income).

## How multiple houses are taxed

The tax rules treat multiple properties differently:

### 1. Self-Occupied Properties
The law allows you to declare up to **two** houses as "Self-Occupied". This means you live in them, or they are empty but reserved for your use. The rental income for these two houses is considered "Nil". You can also claim a deduction for the home loan interest you pay on them.

### 2. Rented Properties
If you actually rent out a house, you must declare the rent received. The tenant's PAN and rent details might even show up in your AIS. You can claim a flat 30% standard deduction on the rent, plus any municipal taxes and home loan interest paid.

### 3. Deemed Let Out Properties
If you own three or more houses and none of them are rented, the tax department will only let you claim two as self-occupied. The third house (and any beyond that) is treated as **Deemed Let Out**. This means you must calculate a fair market rent for the property and pay tax on that imaginary income, even though the house is empty!

Organizing details for multiple properties can get messy. LastMinute ITR recommends gathering all your loan certificates and municipal tax receipts before navigating the complex property schedules on the incometax.gov.in portal.`
  }
];