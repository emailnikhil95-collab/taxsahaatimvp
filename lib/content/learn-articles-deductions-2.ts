import type { LearnArticle } from "./learn-articles";

export const DEDUCTIONS_ARTICLES_2: LearnArticle[] = [
  {
    slug: "claim-80d-not-in-form-16",
    title: "How to claim Section 80D deductions if not in Form 16",
    description: "Forgot to submit your health insurance proof to your employer? Don't worry. Learn how to claim Section 80D directly while filing your ITR.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["80D", "Form 16", "ITR filing", "health insurance"],
    relatedGlossarySlugs: ["80d", "80c"],
    body: `## Missed the HR deadline? No problem.

Every January, employers ask for investment proofs. If you missed the deadline to submit your health insurance premium receipt, your employer will deduct higher TDS, and your Form 16 will not show your Section 80D deduction.

**You have not lost your money.** You can claim it directly when filing your Income Tax Return (ITR).

### How to claim it yourself
1. **Keep your proofs ready:** You need the premium payment receipt from your insurance company. Ensure it clearly states it is for health insurance under Section 80D.
2. **Check the payment mode:** Remember, the premium must have been paid digitally or via cheque. Cash payments are not allowed.
3. **File under the Old Regime:** Section 80D is only available if you opt for the Old Tax Regime.
4. **Enter it in the ITR form:** When filing on incometax.gov.in, navigate to the 'Deductions' schedule (Schedule VI-A). Locate Section 80D and manually enter the premium amount you paid.

### What happens next?
Because your employer deducted higher tax (ignoring your 80D), claiming it now will lower your final tax liability. This usually results in a **tax refund**. The Income Tax Department will process your return and credit the excess tax back to your bank account.

## LastMinute ITR makes it foolproof
If your Form 16 doesn't have your 80D details, it's easy to forget them. When you use LastMinute ITR, our smart checklist specifically asks if you bought health insurance this year, regardless of what your Form 16 says. We calculate the exact refund impact so you can confidently claim it on the government portal.`,
  },
  {
    slug: "80d-vs-80ddb-medical-deductions",
    title: "Section 80D vs 80DDB: Understanding medical tax deductions",
    description: "Confused between 80D and 80DDB? Understand the difference between health insurance premiums and deductions for specific critical illnesses.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["80D", "80DDB", "medical", "critical illness"],
    relatedGlossarySlugs: ["80d", "senior-citizen"],
    body: `## Decoding medical tax codes

The Income Tax Act (Old Regime) has multiple sections for medical expenses, and mixing them up is a common filing error. The two most confused sections are 80D and 80DDB.

Here is the simple difference: **80D is for prevention and general health, while 80DDB is for specific, severe illnesses.**

### Section 80D: Health Insurance
- **What it covers:** Premiums paid for health insurance policies (mediclaim) and preventive health checkups. For senior citizens without insurance, it covers routine medical bills.
- **Who it covers:** Self, spouse, dependent children, and parents.
- **Limits:** ₹25,000 for non-seniors, ₹50,000 for senior citizens.

### Section 80DDB: Critical Illnesses
- **What it covers:** Actual medical expenses incurred for the treatment of **specified critical diseases** (e.g., Cancer, Chronic Renal failure, Parkinson's, severe Neurological diseases).
- **Who it covers:** Self, spouse, children, parents, and dependent siblings.
- **Limits:** Up to ₹40,000 for non-seniors, and up to ₹1,00,000 for senior citizens.
- **Requirement:** You need a prescription/certificate from a specialist doctor (like an Oncologist or Neurologist) to claim this.

### Can you claim both?
Yes! If you pay health insurance premiums (80D) and also spend money treating a dependent's critical illness (80DDB), you can claim both deductions simultaneously, provided you meet the conditions for each.

*Note: If your health insurance reimburses the critical illness treatment cost, you must subtract the reimbursed amount from your 80DDB claim.*

## Clear up the confusion
Entering the wrong amount in the wrong section can lead to notices. LastMinute ITR asks you plain-English questions about your medical expenses and automatically routes them to either 80D or 80DDB, giving you a clean computation to use on incometax.gov.in.`,
  },
  {
    slug: "hra-exemption-calculator-rules",
    title: "HRA exemption calculator: Find your exact tax-free rent",
    description: "Learn how the HRA exemption is calculated using the 3-step formula. Understand the difference between metro and non-metro rules for tax savings.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["HRA", "rent", "salary", "exemption"],
    relatedGlossarySlugs: ["hra", "80c"],
    body: `## It is not just the rent you pay

If you live in a rented house and receive House Rent Allowance (HRA) as part of your salary, you can save a significant amount of tax under the Old Tax Regime. 

However, a common misconception is that your entire rent is tax-free. The Income Tax Department uses a specific 3-step formula to calculate your exemption.

### The 3-Step HRA Formula
Your tax-exempt HRA is the **lowest** of the following three amounts:

1. **Actual HRA received** from your employer.
2. **Actual rent paid minus 10% of your Basic Salary** (Basic Salary + DA).
3. **50% of Basic Salary** (if you live in a Metro city: Delhi, Mumbai, Chennai, Kolkata) OR **40% of Basic Salary** (for non-metro cities like Bengaluru, Pune, Hyderabad).

### Let's look at an example
- Basic Salary: ₹50,000/month (₹6,00,000/year)
- HRA Received: ₹20,000/month (₹2,40,000/year)
- Rent Paid in Bengaluru (Non-metro): ₹15,000/month (₹1,80,000/year)

**Applying the formula:**
1. Actual HRA: ₹2,40,000
2. Rent paid minus 10% of Basic: ₹1,80,000 - ₹60,000 = **₹1,20,000**
3. 40% of Basic (Non-metro): ₹2,40,000

The lowest is **₹1,20,000**. This is your tax-exempt HRA. The remaining ₹1,20,000 of your HRA becomes taxable salary.

### Metro vs Non-Metro
The Income Tax Act only recognizes Delhi, Mumbai, Chennai, and Kolkata as metros for HRA. Even if you pay high rent in Bengaluru or Gurgaon, you must use the 40% rule.

## Skip the manual math
Calculating HRA manually is tedious, especially if your rent or salary changed mid-year. When you use LastMinute ITR, our engine runs the 3-step formula instantly based on your inputs, showing you exactly how much tax you save before you file on the government portal.`,
  },
  {
    slug: "claim-hra-not-in-form-16",
    title: "How to claim HRA in ITR if not in your Form 16",
    description: "Missed submitting rent receipts to HR? You can still claim your HRA exemption directly while filing your income tax return. Here is the step-by-step guide.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["HRA", "Form 16", "rent", "ITR filing"],
    relatedGlossarySlugs: ["hra", "80c"],
    body: `## Bypass the HR deadline

If you forgot to submit your rent agreement and receipts to your employer by January or February, your employer will calculate your TDS assuming your HRA is fully taxable. Your Form 16 will show zero HRA exemption.

Don't panic. You can still claim the HRA exemption directly when filing your ITR under the Old Tax Regime.

### Step-by-step guide to claiming it yourself

1. **Calculate your exemption:** Use the 3-step HRA formula (Lowest of: Actual HRA, Rent minus 10% Basic, or 50%/40% of Basic) to find your exact exempt amount.
2. **Adjust your taxable salary:** In the ITR form (like ITR-1) on incometax.gov.in, go to the 'Gross Total Income' schedule.
3. **Locate the allowances section:** Look for "Allowances exempt u/s 10".
4. **Select HRA:** Choose "Sec 10(13A) - Allowance to meet expenditure incurred on house rent" from the dropdown.
5. **Enter the amount:** Type in the exempt amount you calculated in Step 1.
6. **Watch your tax drop:** The portal will automatically subtract this from your gross salary, lowering your tax liability and likely generating a refund.

### Keep your proofs ready
When claiming HRA directly in the ITR, you do not upload rent receipts to the portal. However, you **must** keep them safe. If the tax department sends a notice asking for proof, you will need to provide:
- Rent agreement
- Rent receipts or bank statements showing transfers
- Landlord's PAN (if annual rent exceeds ₹1 lakh)

## Let us do the math
Manually adjusting salary figures in the ITR form can be nerve-wracking. LastMinute ITR asks you for your rent details, runs the complex HRA formula, and tells you exactly which box to fill on incometax.gov.in, ensuring you don't make a costly typo.`,
  },
  {
    slug: "paying-rent-to-parents-hra",
    title: "Paying rent to parents: Legal rules to claim HRA",
    description: "Want to claim HRA by paying rent to your parents? Learn the legal requirements, documentation needed, and how to avoid scrutiny from the tax department.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["HRA", "parents", "rent", "tax planning"],
    relatedGlossarySlugs: ["hra", "80c"],
    body: `## Keep it in the family (legally)

If you live with your parents in a house owned by them, and you receive HRA as part of your salary, you can legally pay rent to them and claim the HRA tax exemption under the Old Tax Regime.

However, the Income Tax Department scrutinizes these transactions closely to prevent fake claims. Here is how to do it by the book.

### The Golden Rules
1. **They must own the house:** You cannot pay rent to your parents if they are also renting the house. The property must be legally registered in their name (or one of their names).
2. **You cannot be a co-owner:** If your name is on the property deed, you cannot pay rent to yourself.
3. **Pay via bank transfer:** Do not pay in cash. Set up a monthly NEFT/UPI transfer to your parent's bank account with the remark "Rent for [Month]". This creates an undeniable digital trail.
4. **Sign a rent agreement:** Draft a formal rent agreement between you and your parent(s) and get it notarized.
5. **Get rent receipts:** Ask your parents to sign monthly rent receipts.

### The Tax Impact on Parents
This is the most important part: **The rent you pay becomes your parents' taxable income.**
They must declare this rental income under "Income from House Property" when they file their own ITR. They can claim a 30% standard deduction on this rent, plus any property taxes paid.

If your parents are in a lower tax bracket than you (or have no other income), this strategy saves the family money overall. If they are in the 30% bracket, this strategy might actually increase your family's total tax outgo.

## Plan it right with LastMinute ITR
Before you decide to pay rent to your parents, you need to know if the HRA exemption is actually worth it. LastMinute ITR helps you calculate your exact HRA exemption based on your salary structure, so you can make an informed decision before filing on incometax.gov.in.`,
  },
  {
    slug: "hra-and-home-loan-together",
    title: "Can I claim HRA and Home Loan benefits at the same time?",
    description: "Yes, you can claim both HRA and home loan deductions under specific conditions. Learn the rules for claiming double tax benefits legally.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["HRA", "home loan", "tax planning", "real estate"],
    relatedGlossarySlugs: ["hra", "home-loan"],
    body: `## The double tax benefit

A very common question among salaried taxpayers is: "I am paying an EMI for a home loan, but I also live in a rented house. Can I claim both the Home Loan deduction and the HRA exemption?"

**Yes, absolutely.** The Income Tax Act allows you to claim both benefits under the Old Tax Regime, provided you meet specific conditions.

### Scenario 1: Different Cities (The most common case)
You bought a house in your hometown (e.g., Pune) and are paying an EMI for it. However, your job requires you to live in a rented apartment in another city (e.g., Bengaluru).
- **Can you claim both?** Yes. You can claim HRA for the rent paid in Bengaluru, and Section 24b/80C deductions for the home loan in Pune.

### Scenario 2: Same City, Different Locations
You bought a house in Mumbai, but it is too far from your workplace, or it is too small for your family. So, you rent a different apartment in Mumbai closer to your office.
- **Can you claim both?** Yes, but be prepared to prove why you cannot live in your own house. A valid reason (like distance to work) is acceptable to the tax department.

### Scenario 3: Under-Construction Property
You are paying an EMI for a house that is still under construction, and you currently live in a rented house.
- **Can you claim both?** You can claim HRA for your rent. However, you **cannot** claim the home loan interest (Section 24b) until construction is complete and you receive possession. (You can claim the principal under 80C, though).

### Scenario 4: You rented out your own house
You own a house, put it on rent, and live in another rented house.
- **Can you claim both?** Yes. You claim HRA for the rent you pay. For your owned house, you must declare the rental income you receive, but you can deduct the entire home loan interest against it.

## Keep your story straight
Claiming both benefits is perfectly legal but often triggers automated scrutiny. LastMinute ITR helps you structure your computation clearly, ensuring your HRA and House Property schedules are filled correctly before you submit your return on incometax.gov.in.`,
  },
  {
    slug: "landlord-pan-refusal-hra",
    title: "What happens if my landlord refuses to share PAN for HRA?",
    description: "Paying over ₹1 lakh in annual rent but your landlord won't give their PAN? Find out your options for claiming HRA and the tax implications.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["HRA", "PAN", "landlord", "rent"],
    relatedGlossarySlugs: ["hra", "80c"],
    body: `## The PAN card standoff

To claim House Rent Allowance (HRA) exemption, the Income Tax Department has a strict rule: **If your annual rent exceeds ₹1,00,000 (i.e., more than ₹8,333 per month), you must report your landlord's PAN to your employer.**

But what if your landlord flat-out refuses to give you their PAN? (Usually because they don't want to declare the rental income and pay tax on it).

### Option 1: The Declaration Route
If the landlord does not have a PAN card at all, you can ask them to sign a formal declaration stating they do not possess a PAN. You submit this declaration to your employer along with the rent receipts. 

*Reality check:* Most landlords who refuse to give a PAN actually have one; they just don't want to share it. They are unlikely to sign a false declaration.

### Option 2: Claim it directly in your ITR
If you cannot provide the PAN to your employer, your employer will deduct tax assuming your HRA is fully taxable. 

You can still claim the HRA exemption yourself when filing your ITR on incometax.gov.in. The ITR form does not always force you to enter the landlord's PAN if the rent is just above the limit, but **this is risky.**

If the tax department processes your return and notices a high HRA claim without a landlord PAN, they may send a notice demanding proof. If you cannot produce the PAN then, your claim will be rejected, and you will have to pay the tax with interest.

### The best approach
Always ask for the PAN *before* signing the lease. If a landlord refuses, it is a red flag. 

## File with confidence
Dealing with missing documents is stressful. LastMinute ITR helps you understand exactly what proofs you need for your specific HRA claim amount, so you aren't caught off guard by a tax notice after filing on the government portal.`,
  },
  {
    slug: "section-80gg-rent-deduction-no-hra",
    title: "Section 80GG: Claiming rent deduction without HRA in salary",
    description: "Self-employed or don't get HRA in your salary? You can still claim a tax deduction for rent paid under Section 80GG. Learn the limits and rules.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["80GG", "rent", "HRA", "deductions"],
    relatedGlossarySlugs: ["hra", "80c"],
    body: `## Rent relief for the rest of us

House Rent Allowance (HRA) is great, but what if you are a freelancer, a business owner, or a salaried employee whose company doesn't include HRA in the salary structure? 

You can still get a tax break for the rent you pay under **Section 80GG** of the Old Tax Regime.

### The Conditions
To claim 80GG, you must meet all these rules:
1. You must not receive HRA from an employer.
2. You, your spouse, or your minor child must **not** own a residential property in the city where you currently live and work.
3. If you own a house in another city, you cannot claim it as 'self-occupied' if you are claiming 80GG. It must be treated as 'deemed let-out'.
4. You must file Form 10BA (a simple declaration) on the income tax portal before filing your ITR.

### The Deduction Limit
The deduction under 80GG is the **lowest** of the following three amounts:
1. **₹5,000 per month** (₹60,000 per year).
2. **25% of your Total Income** (Income after all other deductions like 80C, 80D).
3. **Actual Rent Paid minus 10% of Total Income.**

*Because of the strict ₹5,000/month cap, the maximum tax you can save under 80GG is much lower than what is possible with HRA.*

### Example
If your total income is ₹8 lakhs and you pay ₹15,000/month rent:
1. Cap: ₹60,000
2. 25% of Income: ₹2,00,000
3. Rent minus 10% income: ₹1,80,000 - ₹80,000 = ₹1,00,000.
**Your deduction is ₹60,000.**

## Don't miss hidden deductions
Sections like 80GG often go unnoticed by self-employed taxpayers. LastMinute ITR's smart profiling asks if you pay rent. If you don't have HRA, we automatically calculate your 80GG eligibility, ensuring you claim every rupee you deserve before heading to incometax.gov.in.`,
  },
  {
    slug: "section-24b-home-loan-interest",
    title: "Section 24b: Claiming ₹2 lakh interest on your home loan",
    description: "Maximize your tax savings with Section 24b. Learn how to claim up to ₹2 lakh deduction on home loan interest for a self-occupied property.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["home loan", "Section 24b", "interest", "real estate"],
    relatedGlossarySlugs: ["home-loan", "80c"],
    body: `## The biggest tax break for homeowners

If you are paying off a home loan, the Income Tax Act provides massive relief under the Old Tax Regime. While the principal repayment goes under Section 80C, the **interest** you pay is claimed under Section 24(b) under the head "Income from House Property".

### The ₹2 Lakh Limit
For a **self-occupied property** (a house you live in, or a house that is empty because you live in another city for work), you can claim a deduction of up to **₹2,00,000 per financial year** on the home loan interest.

### Crucial Conditions
To get the full ₹2 lakh limit, you must satisfy these rules:
1. The loan must be taken for purchase or construction of a house.
2. The loan must have been taken on or after April 1, 1999.
3. The purchase or construction must be completed within **5 years** from the end of the financial year in which the loan was taken.

*If you fail the 5-year completion rule, or if the loan is for repairs/reconstruction, your interest deduction is capped at a mere ₹30,000.*

### What if the house is rented out?
If you have let out the property on rent, the rules change. You must declare the rental income, but the good news is there is **no upper limit** on the interest deduction. You can deduct the entire interest paid from the rental income. 

However, if this results in a loss under 'House Property', you can only set off up to ₹2 lakh of that loss against your salary or other income in the current year. The rest must be carried forward.

## Get the numbers right
Home loan interest calculations can get complicated, especially with pre-construction interest. LastMinute ITR asks for your bank's home loan interest certificate and tells you exactly what amounts go into Section 24b and 80C, giving you a perfect computation to use on incometax.gov.in.`,
  },
  {
    slug: "joint-home-loan-tax-benefit",
    title: "Joint home loan tax benefits: Double your deductions",
    description: "Co-borrowing a home loan with your spouse? Learn how both of you can claim separate deductions for principal and interest, doubling your tax savings.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "deductions",
    tags: ["home loan", "joint loan", "tax planning", "real estate"],
    relatedGlossarySlugs: ["home-loan", "80c"],
    body: `## Teamwork pays off in taxes

Buying a house in a metro city often requires a joint home loan, usually with a spouse. The Income Tax Department rewards this teamwork by allowing **both co-borrowers** to claim tax deductions on the same loan under the Old Tax Regime.

### Doubling the Limits
If you and your spouse are both co-owners of the property and co-borrowers of the loan, you can each claim:
- **Section 24(b) (Interest):** Up to ₹2,00,000 each. (Total family benefit: ₹4,00,000).
- **Section 80C (Principal):** Up to ₹1,50,000 each. (Total family benefit: ₹3,00,000).

### The Golden Rule: Co-ownership is mandatory
To claim these benefits, you must be a **co-owner** of the property. Just being a co-borrower or guarantor on the loan is not enough. If the house is registered only in your wife's name, but you pay the EMI, you cannot claim any tax deduction.

### How to split the claim
The deductions are split based on your **ownership share** in the property. 
If the deed says 50:50 ownership, you split the principal and interest 50:50. 
If the total interest paid in a year is ₹3,00,000, you claim ₹1,50,000 and your spouse claims ₹1,50,000.

*Note: You cannot claim more than the actual amount paid to the bank.*

## Coordinate your filings
When spouses file separately, it is easy to mess up the math and claim overlapping amounts, which triggers tax notices. LastMinute ITR helps you clearly define your share of the joint loan, ensuring your computation matches your spouse's perfectly before either of you files on incometax.gov.in.`,
  }
];
