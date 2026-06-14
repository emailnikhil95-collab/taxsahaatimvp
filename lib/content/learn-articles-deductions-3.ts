import type { LearnArticle } from "./learn-articles";

export const DEDUCTIONS_ARTICLES_3: LearnArticle[] = [
  {
    slug: "under-construction-property-tax-benefit",
    title: "Under-construction property: Claiming home loan tax benefits",
    description: "Paying EMIs for an under-construction flat? Understand when and how you can start claiming tax deductions for your home loan.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["home loan", "under construction", "real estate", "tax planning"],
    relatedGlossarySlugs: ["home-loan", "80c"],
    body: `## The waiting game for tax benefits

Buying an under-construction property means you start paying EMIs (or pre-EMIs) long before you get the keys. But can you claim tax deductions while the house is still being built?

**No, you cannot claim home loan deductions while the property is under construction.**

The Income Tax Act is very clear: you must have **possession** of the property to claim deductions under Section 24b (interest) and Section 80C (principal).

### What happens to the money you pay?
- **Principal Repayment:** Any principal repaid before possession is essentially a lost tax benefit. You cannot claim it now, and you cannot carry it forward.
- **Interest Payment (Pre-EMI):** The interest you pay during the construction phase is called "Pre-construction Interest". You don't lose this benefit, but it is delayed.

### The 5-Installment Rule
Once construction is complete and you receive the possession certificate, you can aggregate all the interest paid during the pre-construction phase. 

You can then claim this total amount in **5 equal annual installments**, starting from the financial year in which construction was completed. 

*Important:* This installment is clubbed with your regular current-year interest, and the total claim is still subject to the overall ₹2 lakh cap for a self-occupied property.

## Keep your certificates safe
You will need the interest certificates for all the years of construction when you finally claim the deduction. LastMinute ITR helps you calculate this 5-installment math effortlessly once you get possession, ensuring you don't miss out on years of accumulated tax benefits when filing on incometax.gov.in.`,
  },
  {
    slug: "pre-construction-interest-deduction",
    title: "Pre-construction interest deduction: The 5-installment rule",
    description: "Learn how to claim the interest paid during the construction phase of your house in 5 equal annual installments after possession.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["home loan", "pre-construction", "interest", "real estate"],
    relatedGlossarySlugs: ["home-loan", "80c"],
    body: `## Unlocking delayed tax benefits

If you paid interest on a home loan while your house was being built, you couldn't claim it immediately. But once you get possession, the Income Tax Act allows you to claim this "pre-construction interest" under Section 24b (Old Regime).

Here is exactly how the math works.

### Step 1: Define the Pre-construction Period
The pre-construction period starts on the date you borrowed the loan. 
It ends on **March 31st of the financial year immediately preceding the year of completion.**

*Example:* You took a loan in July 2023. You got possession in October 2025 (FY 2025-26). 
Your pre-construction period is from July 2023 to March 31, 2025. 
(The interest from April 2025 to March 2026 is considered your regular current-year interest).

### Step 2: Calculate the Total
Add up all the interest paid during that specific pre-construction period. Let's say it totals ₹3,00,000.

### Step 3: Divide by 5
Divide the total by 5. 
₹3,00,000 / 5 = ₹60,000.

### Step 4: Claim it
Starting from the year of possession (FY 2025-26), you can add this ₹60,000 to your regular current-year interest claim. 

If your current year interest is ₹1,50,000, your total claim becomes ₹2,10,000. 
*Note: If the house is self-occupied, your total claim is capped at ₹2,00,000. If it is rented out, there is no cap.*

## We do the math for you
Calculating pre-construction interest manually is prone to errors, especially determining the exact cutoff dates. LastMinute ITR asks for your loan start date and possession date, and automatically runs the 5-installment calculation for you, giving you the precise figure to enter on incometax.gov.in.`,
  },
  {
    slug: "section-80eea-first-time-homebuyer",
    title: "Section 80EEA: Extra ₹1.5 lakh deduction for homebuyers",
    description: "First-time homebuyer? Find out if you qualify for the additional ₹1.5 lakh interest deduction under Section 80EEA on top of Section 24b.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["80EEA", "home loan", "first time buyer", "deductions"],
    relatedGlossarySlugs: ["home-loan", "80c"],
    body: `## A bonus for affordable housing

If you bought your first home recently, the standard ₹2 lakh interest deduction under Section 24b might not cover your entire interest outgo. To promote affordable housing, the government introduced **Section 80EEA** (available under the Old Tax Regime).

This section provides an **additional deduction of up to ₹1.5 lakh** on home loan interest. Combined with Section 24b, a first-time buyer can claim up to ₹3.5 lakh in interest deductions!

### Do you qualify?
To claim 80EEA, you must meet some very strict conditions:
1. **First-time buyer:** You must not own any other residential property on the date the loan is sanctioned.
2. **Loan sanction date:** The loan must have been sanctioned between **April 1, 2019, and March 31, 2022**. (If your loan was sanctioned after this window, you cannot claim 80EEA).
3. **Property value:** The stamp duty value of the house must be **₹45 lakh or less**.
4. **Carpet area:** The carpet area should not exceed 60 sq meters (approx 645 sq ft) in metro cities, or 90 sq meters in non-metros.

### How it works
You must exhaust your ₹2 lakh limit under Section 24b first. 
If you paid ₹2.8 lakh in interest this year:
- Claim ₹2,00,000 under Section 24b.
- Claim the remaining ₹80,000 under Section 80EEA.

## Don't miss out on past loans
Many taxpayers forget about 80EEA because the sanction window closed in 2022. But if your loan was approved back then, you can still claim the deduction today! LastMinute ITR checks your loan sanction date and property value to see if you qualify for this hidden bonus before you file on incometax.gov.in.`,
  },
  {
    slug: "second-home-tax-rules",
    title: "Second home tax rules: Deemed let-out vs self-occupied",
    description: "Own more than one house? Understand the new income tax rules for a second home, deemed let-out properties, and how to calculate taxable income.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["home loan", "second home", "house property", "tax planning"],
    relatedGlossarySlugs: ["home-loan", "80c"],
    body: `## The tax reality of multiple properties

Owning multiple houses is a great investment, but it complicates your Income Tax Return. The tax department treats your primary residence very differently from your second or third home.

### The "Two House" Rule
Previously, you could only claim one house as "self-occupied" (zero taxable rent). Any second house, even if kept locked and empty, was considered "deemed let-out," meaning you had to pay tax on a notional rent.

**The rule changed recently:** You can now claim up to **two houses as self-occupied**. 
For these two houses, the "Annual Annual Value" (taxable rent) is considered NIL. You can claim up to ₹2 lakh in home loan interest across both properties combined.

### What about the third house?
If you own three or more houses, you must choose any two as self-occupied. The third house (and any subsequent ones), if not actually rented out, will be treated as **Deemed Let-Out**.

### How Deemed Let-Out works
For a deemed let-out property, you must calculate the expected market rent it could fetch and declare it as income, even though your pockets are empty.
1. Determine the expected rent.
2. Deduct municipal taxes paid.
3. Claim a flat 30% standard deduction for repairs.
4. Deduct the **entire** home loan interest paid (no ₹2 lakh cap).
5. The final figure is added to your taxable income.

## Complex calculations made easy
Handling multiple properties, municipal taxes, and deemed rent can easily lead to a defective return notice. LastMinute ITR helps you structure your House Property schedule logically, ensuring you optimize which properties to declare as self-occupied before you submit your data to incometax.gov.in.`,
  },
  {
    slug: "section-80ttb-senior-citizen-interest",
    title: "Section 80TTB: ₹50,000 interest deduction for seniors",
    description: "Senior citizens can claim up to ₹50,000 tax-free interest income from banks and post offices under Section 80TTB. Learn how to claim it.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["senior citizens", "80TTB", "interest", "deductions"],
    relatedGlossarySlugs: ["senior-citizen", "80c"],
    body: `## Protecting retirement income

For most senior citizens, interest from fixed deposits and savings accounts is their primary source of income. To protect this, the Income Tax Act provides a special deduction under **Section 80TTB** (available under the Old Tax Regime).

### The Benefit
Senior citizens (aged 60 years or above at any time during the financial year) can claim a deduction of up to **₹50,000** on interest income.

### What interest qualifies?
You can claim this deduction on interest earned from:
- Bank savings accounts
- Bank Fixed Deposits (FDs) and Recurring Deposits (RDs)
- Post office deposits (like SCSS or post office FDs)
- Cooperative society deposits

*Note: Interest from company fixed deposits or bonds does NOT qualify for 80TTB.*

### 80TTA vs 80TTB
Non-senior citizens use Section 80TTA, which only gives a ₹10,000 deduction, and strictly only for savings account interest (not FDs). 
Once you turn 60, you upgrade to 80TTB, which covers all bank deposits up to ₹50,000. You cannot claim both.

### How to report it
First, you must declare all your interest income under the head "Income from Other Sources". Then, you claim the ₹50,000 deduction under Section 80TTB in the deductions schedule.

## Don't pay tax twice
A common mistake seniors make is hiding interest income if TDS was already deducted. You must declare the gross interest, claim the 80TTB deduction, and then claim the TDS credit. LastMinute ITR guides you through this exact flow, ensuring your parents' returns are filed perfectly on incometax.gov.in.`,
  },
  {
    slug: "senior-citizen-tax-slabs-ay-2026-27",
    title: "Income tax slab rates for senior citizens (AY 2026-27)",
    description: "Check the latest income tax slab rates and basic exemption limits for senior (60+ years) and super senior (80+ years) citizens for AY 2026-27.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["senior citizens", "tax slabs", "AY 2026-27", "income tax"],
    relatedGlossarySlugs: ["senior-citizen", "80c"],
    body: `## Age has its privileges

The Income Tax Department categorizes taxpayers by age, offering higher basic exemption limits to older citizens. 

Here are the tax slabs for Assessment Year 2026-27 (Financial Year 2025-26).

### The New Tax Regime (Default)
Under the New Tax Regime, **age does not matter**. The slabs are identical for a 25-year-old, a 65-year-old, and an 85-year-old.
- Up to ₹3,00,000: Nil
- ₹3L to ₹7L: 5%
- ₹7L to ₹10L: 10%
- ₹10L to ₹12L: 15%
- ₹12L to ₹15L: 20%
- Above ₹15L: 30%
*(Plus standard deduction of ₹75,000 for pensioners).*

### The Old Tax Regime (Opt-in)
If you opt for the Old Regime to claim deductions like 80C, 80D, or 80TTB, age becomes very important.

**Senior Citizens (60 to 79 years):**
- Up to ₹3,00,000: Nil (Basic Exemption)
- ₹3L to ₹5L: 5%
- ₹5L to ₹10L: 20%
- Above ₹10L: 30%

**Super Senior Citizens (80 years and above):**
- Up to ₹5,000,000: Nil (Basic Exemption)
- ₹5L to ₹10L: 20%
- Above ₹10L: 30%

### The 87A Rebate
Regardless of age, if your total taxable income is below a certain threshold (₹7 lakh in New Regime, ₹5 lakh in Old Regime), you get a full tax rebate under Section 87A, making your tax liability zero.

## Which regime is better for seniors?
Seniors usually have high medical expenses (80D) and rely on FD interest (80TTB). Because the New Regime removes these deductions, the Old Regime is often mathematically better for retirees. LastMinute ITR's comparator runs your numbers through both regimes instantly, so you can choose the best option before filing on incometax.gov.in.`,
  },
  {
    slug: "form-15h-senior-citizens-tds",
    title: "Form 15H: How senior citizens can stop TDS on FDs",
    description: "Prevent banks from deducting TDS on your fixed deposit interest. Learn when and how senior citizens should submit Form 15H.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["senior citizens", "Form 15H", "TDS", "fixed deposits"],
    relatedGlossarySlugs: ["senior-citizen", "80c"],
    body: `## Keep your interest money in your pocket

If you are a senior citizen relying on Fixed Deposit (FD) interest, you might notice the bank deducting 10% TDS before crediting the money to your account. 

If your total income for the year is below the taxable limit, this TDS is an unnecessary hassle. You have to file an ITR just to claim a refund. **Form 15H** is the solution.

### What is Form 15H?
Form 15H is a self-declaration form submitted by senior citizens (60 years or older) to their bank, stating that their estimated total tax liability for the financial year will be zero. 

Once submitted, the bank will **not** deduct any TDS on your interest income.

### When should you submit it?
You should submit Form 15H at the beginning of the financial year (in April) so the bank doesn't deduct TDS in the first quarter. You must submit a fresh form every year.

### Who is eligible?
1. You must be an Indian resident.
2. You must be 60 years or older during the financial year.
3. Your final tax liability (after claiming deductions like 80C, 80D, 80TTB) must be **zero**.

*Note: Non-senior citizens use Form 15G, which has stricter income limits.*

### What if you forgot?
If you forgot to submit Form 15H and the bank already deducted TDS, you cannot ask the bank to refund it. The TDS is already deposited with the government. 

## Claiming your refund
If TDS was deducted unnecessarily, your only option is to file an Income Tax Return. LastMinute ITR helps you download your AIS, match the TDS credits, and generate a clean computation that ensures the government refunds your money directly to your bank account via incometax.gov.in.`,
  },
  {
    slug: "do-senior-citizens-need-to-file-itr",
    title: "Do senior citizens with only pension and interest need to file ITR?",
    description: "Are senior citizens exempt from filing income tax returns? Understand Section 194P rules and when filing an ITR is still mandatory or beneficial.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["senior citizens", "ITR filing", "pension", "rules"],
    relatedGlossarySlugs: ["senior-citizen", "80c"],
    body: `## The "Exemption" myth explained

A few years ago, the government announced that senior citizens over 75 years old are exempt from filing Income Tax Returns. Many people misunderstood this to mean *all* seniors don't have to file. 

The reality is much stricter. The exemption falls under **Section 194P**, and the conditions are very narrow.

### Who is actually exempt?
To be exempt from filing an ITR, a senior citizen must meet **ALL** of the following conditions:
1. They must be **75 years or older**.
2. Their only source of income must be **Pension and Interest**.
3. Both the pension and the interest must be received in the **same specified bank**.
4. They must submit a declaration to this bank.

If they meet these rules, the bank will calculate their tax, deduct the necessary TDS, and the senior citizen does not have to file an ITR.

### When MUST a senior citizen file?
If you don't meet the strict 194P criteria, the standard rules apply. You **must** file an ITR if your gross total income (before deductions like 80C or 80D) exceeds the basic exemption limit:
- ₹3,00,000 for those aged 60 to 79.
- ₹5,00,000 for those aged 80 and above.

### Why you should file anyway
Even if your income is below the limit, filing an ITR is highly recommended for seniors:
1. **To claim TDS refunds:** If a bank deducted TDS on your FDs, filing an ITR is the only way to get that money back.
2. **Visa applications:** Foreign embassies require ITRs if you plan to visit children abroad.
3. **Loss carry-forward:** If you sold shares at a loss, you must file an ITR to carry that loss forward to future years.

## Helping parents file
Filing taxes for elderly parents can be stressful. LastMinute ITR simplifies the process. You can upload their pension slips and AIS, and we will generate a clear, error-free computation that you can easily submit on their behalf on incometax.gov.in.`,
  },
  {
    slug: "medical-expenditure-seniors-no-insurance",
    title: "Medical expenditure deduction for seniors without insurance",
    description: "Senior citizens without health insurance can claim up to ₹50,000 for routine medical expenses under Section 80D. Learn what bills qualify.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["senior citizens", "80D", "medical bills", "deductions"],
    relatedGlossarySlugs: ["senior-citizen", "80d"],
    body: `## Relief for everyday healthcare costs

As we age, medical expenses increase, but getting comprehensive health insurance becomes difficult and expensive. To provide relief, the Income Tax Act allows a special deduction under Section 80D (Old Regime) for senior citizens who do not have health insurance.

### The ₹50,000 Lifeline
If a senior citizen (60 years or older) does not have any health insurance policy in their name, they can claim a deduction of up to **₹50,000** for medical expenditures incurred during the year.

This can be claimed by the senior citizen themselves (if they are paying and filing their own ITR), or by their adult children (if the children are paying the bills).

### What bills qualify?
Unlike Section 80DDB which requires a critical illness, this 80D provision is for general medical care. It includes:
- Routine doctor consultations
- Medicines and pharmacy bills
- Blood tests, X-rays, and diagnostics
- Hearing aids, pacemakers, or wheelchairs
- Hospitalization costs

### The strict "No Cash" rule
To claim this deduction, the payment must leave a digital footprint. You must pay via cheque, credit/debit card, or UPI. **Cash payments are strictly disallowed.** If you pay the local pharmacy in cash, you cannot claim the tax benefit.

### Keep your records
You do not need to attach the pharmacy bills to your ITR, but you must preserve them. If your return is picked for scrutiny, the tax officer will ask to see the invoices and matching bank statements.

## Claiming it correctly
The ITR form has a specific box for "Medical Expenditure" under the 80D schedule, separate from "Health Insurance Premium". LastMinute ITR ensures you put the right amount in the right box, so your computation is flawless when you file on incometax.gov.in.`,
  },
  {
    slug: "tax-on-family-pension-rules",
    title: "Tax on family pension: Exemptions and reporting rules",
    description: "Receiving a family pension? Understand how it is taxed under 'Income from Other Sources' and the standard deduction available to reduce your tax.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["pension", "senior citizens", "other sources", "tax planning"],
    relatedGlossarySlugs: ["senior-citizen", "80c"],
    body: `## Understanding Family Pension taxation

When a pensioner passes away, their spouse or dependents often receive a "Family Pension". While a regular pension is taxed as "Salary", a family pension is treated differently by the Income Tax Department.

### Where to report it
Because the recipient did not actually work for the employer paying the pension, a family pension is **not** taxed under the head 'Salaries'. 

Instead, it must be reported under the head **"Income from Other Sources"**.

### The Standard Deduction
The government provides a specific standard deduction to reduce the tax burden on family pensioners. Under Section 57(iia), you can claim a deduction equal to:
- **33.33% (one-third) of the family pension received** 
OR
- **₹15,000**

...whichever is **lower**.

*Example:* If a widow receives a family pension of ₹60,000 a year.
One-third of ₹60,000 = ₹20,000.
The maximum limit is ₹15,000.
So, the taxable family pension will be ₹60,000 - ₹15,000 = ₹45,000.

### Armed Forces Exemption
There is a major exception: Family pension received by the widow or children of a member of the Armed Forces who died in the line of duty is **completely exempt from tax**.

## Avoid filing errors
Entering family pension under the 'Salary' schedule is a very common mistake that can lead to incorrect tax calculations and notices. LastMinute ITR's simple questionnaire asks about the source of your income and automatically routes family pension to 'Other Sources', applying the ₹15,000 deduction automatically before you file on incometax.gov.in.`,
  }
];
