import { LearnArticle } from "./learn-articles";

export const RECONCILIATION_ARTICLES_2: LearnArticle[] = [
  {
    slug: "notice-for-high-value-transactions",
    title: "Income Tax Notice for High-Value Transactions: What to Do",
    description: "Did you get a notice for buying property, mutual funds, or cash deposits? Understand how high-value transactions are tracked and how to respond.",
    readMinutes: 6,
    publishedAt: "2026-06-15",
    cluster: "mistakes",
    tags: ["high-value-transactions", "notice", "sft"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "How does the tax department know about my high-value transactions?",
        answer: "Banks, mutual fund houses, and registrars are required to file a Statement of Financial Transactions (SFT) reporting large cash deposits, property purchases, and major investments linked to your PAN."
      }
    ],
    body: `## The eyes of the tax department

In the modern digital age, trying to hide a massive cash deposit or a luxury property purchase from the taxman is nearly impossible. The Income Tax Department uses the **Statement of Financial Transactions (SFT)** to track high-value transactions linked to your PAN.

## What triggers this notice?

You might receive an SMS, email, or formal notice via the e-Compliance portal if you engaged in activities such as:
- Depositing ₹10 Lakhs or more in cash into a savings account.
- Buying mutual funds, shares, or bonds worth ₹10 Lakhs or more in a year.
- Paying credit card bills of ₹1 Lakh or more in cash, or ₹10 Lakhs or more via any mode.
- Purchasing or selling immovable property valued at ₹30 Lakhs or more.

If you made these transactions but filed an ITR showing an income of only ₹5 Lakhs, the system's alarms go off. The department will ask you to explain the source of these funds.

## How to respond

If you receive an inquiry under the e-Campaign or a formal notice:
1. **Log in to the compliance portal:** Access this through incometax.gov.in.
2. **Review the information:** Look at the specific SFT entry they are questioning.
3. **Submit your response:** You can select options like "Information is correct", "Information is not fully correct", or "Information relates to other PAN".
4. **Explain the source:** If the information is correct, you must explain where the money came from (e.g., past savings, a loan, sale of another property, or agricultural income).

Honesty is the best policy here. Reconciling your major financial moves using your AIS before you file via the government portal ensures you aren't caught off guard. LastMinute ITR helps you review your AIS to ensure no high-value SFT is missed.`
  },
  {
    slug: "tds-mismatch-notice-resolution",
    title: "Resolving TDS Mismatch Notices from the Tax Department",
    description: "Facing a TDS mismatch notice? Learn how to reconcile your claimed TDS with Form 26AS and take the right steps to resolve the issue quickly.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "mistakes",
    tags: ["tds", "mismatch", "notice", "26as"],
    relatedGlossarySlugs: ["26as", "tax-notice"],
    faqs: [
      {
        question: "Why did my TDS claim get rejected in the 143(1) intimation?",
        answer: "TDS claims are usually rejected if the amount you claimed in your ITR does not exactly match the TDS credit available in your Form 26AS at the time of processing."
      }
    ],
    body: `## The frustration of uncredited TDS

You paid your taxes. Your employer or bank deducted TDS and gave you a certificate (Form 16 or Form 16A). You claimed this TDS in your Income Tax Return. But then, you get an intimation under Section 143(1) saying your TDS claim was rejected, creating a tax demand!

Welcome to the **TDS Mismatch**.

## Why does a TDS mismatch happen?

The Income Tax Department's computers process your return automatically. They blindly follow one rule: **If the TDS is not in your Form 26AS, you don't get credit for it.**

A mismatch usually happens because:
1. Your deductor (employer/bank) hasn't filed their TDS return yet.
2. The deductor made a typo in your PAN while filing their TDS return.
3. You claimed the wrong TAN (Tax Deduction Account Number) in your ITR.
4. You claimed TDS for the wrong financial year.

## How to fix it

1. **Check Form 26AS:** Log in to the tax portal and view your Form 26AS. Does the TDS show up there?
2. **Contact the Deductor:** If the TDS is missing from 26AS, the tax department cannot help you. You must contact your employer or bank and ask them to revise their TDS return and correct your PAN.
3. **File a Rectification:** Once the deductor fixes the issue and the TDS appears in your Form 26AS, you can log in to the portal and file a Rectification Request under Section 154, asking the department to re-process your return.

Never file your return blindly. Using companion tools like LastMinute ITR to verify your Form 16 against your Form 26AS *before* you file on incometax.gov.in will save you from this headache.`
  },
  {
    slug: "how-to-check-itr-refund-status",
    title: "How to Check Your Income Tax Refund Status Online Easily",
    description: "Waiting for your tax refund? Learn the easiest ways to track your income tax refund status online using your PAN and acknowledgment number.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["refund-status", "pan", "e-filing", "tax-refund"],
    relatedGlossarySlugs: ["refund", "ais"],
    faqs: [
      {
        question: "Where can I check my income tax refund status?",
        answer: "You can check your refund status by logging into the incometax.gov.in portal or by visiting the NSDL-TIN refund tracking website."
      }
    ],
    body: `## Where is my money?

You successfully filed your ITR, e-verified it, and the computation showed you are owed a refund. Now comes the hard part: waiting. 

If you are eager to know when that money will hit your bank account, you can track its status online.

## Method 1: The e-Filing Portal (Most Detailed)

This is the most comprehensive way to check the status of your processing and refund.
1. Log in to **incometax.gov.in** using your PAN and password.
2. Go to **e-File > Income Tax Returns > View Filed Returns**.
3. Look at the return for the relevant Assessment Year.
4. You will see a timeline showing the status: *Return Filed*, *Return Verified*, *Return Processing*, and finally *Processing Completed*. 
5. If a refund has been issued, the date of issue and amount will be displayed here.

## Method 2: The NSDL (TIN) Website (Quick Check)

If you just want a fast update without logging into the main portal:
1. Visit the **TIN NSDL Refund Tracking** page.
2. Enter your **PAN** and select the **Assessment Year**.
3. Enter the captcha code and click submit.
4. The screen will show whether the refund has been paid, returned, or is still pending.

## What do the statuses mean?
- **Processed / Refund Determined:** The tax department has approved your refund, and it has been sent to the State Bank of India (SBI) for processing.
- **Refund Paid:** The money has been credited to your bank account via ECS/NEFT.
- **Refund Failed:** There was an issue with your bank account (e.g., wrong IFSC, account closed, or not pre-validated). 

Always ensure your bank account is pre-validated on the portal to avoid failures.`
  },
  {
    slug: "reasons-for-refund-failure",
    title: "Why Did My Income Tax Refund Fail? Common Reasons",
    description: "Has your tax refund failed? Discover the most common reasons for refund failure, such as unvalidated bank accounts, and how to fix them fast.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["refund-failure", "bank-validation", "errors"],
    relatedGlossarySlugs: ["refund", "tax-notice"],
    faqs: [
      {
        question: "Will I lose my tax refund if it fails?",
        answer: "No, you won't lose your money. You simply need to correct the bank account issue and raise a 'Refund Reissue Request' on the e-filing portal."
      }
    ],
    body: `## The heartbreak of a failed refund

You tracked your ITR status for weeks, waiting for that sweet tax refund. Finally, the status updates, but instead of "Paid", it says **"Refund Failed"**. 

Don't panic! The money isn't lost. It just means the State Bank of India (which processes refunds) couldn't successfully transfer the funds to your account. 

## Top 4 reasons for refund failure

1. **Bank Account Not Pre-Validated:** This is the #1 reason. The income tax portal requires your bank account to be "pre-validated" (linking your PAN with the bank). If it's not, the refund will bounce.
2. **Name Mismatch:** The name on your PAN card does not perfectly match the name on your bank account.
3. **Invalid IFSC Code:** Bank mergers in India have caused many IFSC codes to change. If you provided an old IFSC code in your ITR, the transfer will fail.
4. **Account Closed or Inactive:** You provided details for a bank account that is now dormant, frozen, or closed.

## How to fix it

First, identify the problem. Log in to the incometax.gov.in portal and check your bank account details under your profile. 

If the account isn't pre-validated, complete the pre-validation steps. If the account is closed, add a new, active bank account and ensure it gets pre-validated. 

Once you have a healthy, pre-validated bank account linked to your profile, you will need to manually request the tax department to try sending the money again. This is called a **Refund Reissue Request**.

LastMinute ITR reminds you during your preparation phase to double-check your bank details so you don't face these delays after filing on the government portal.`
  },
  {
    slug: "how-to-raise-refund-reissue",
    title: "How to Raise a Refund Reissue Request on the Tax Portal",
    description: "If your tax refund failed, you can request it again. Follow our step-by-step guide to raise a refund reissue request on the income tax portal.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["refund-reissue", "tax-portal", "failed-refund"],
    relatedGlossarySlugs: ["refund", "ais"],
    faqs: [
      {
        question: "How long does a refund reissue take?",
        answer: "Once you successfully raise a refund reissue request with a pre-validated bank account, it typically takes 15 to 30 days for the money to be credited."
      }
    ],
    body: `## Trying again

If your income tax refund failed due to a bank account issue, the tax department won't automatically try sending it again. You have to explicitly ask them to retry. 

This process is called raising a **Refund Reissue Request**. 

## Prerequisites

Before you raise the request, you **must** ensure you have at least one active, pre-validated bank account linked to your income tax profile. If you request a reissue to the same faulty bank account, it will just fail again.

## Step-by-step process

1. **Log in:** Go to incometax.gov.in and log in with your PAN and password.
2. **Navigate to Services:** On the top menu, click on **Services** and then select **Refund Reissue**.
3. **Create Request:** Click on the button that says **Create Refund Reissue Request**.
4. **Select the Year:** The portal will show a list of Assessment Years where a refund has failed. Select the relevant year and click **Continue**.
5. **Choose Bank Account:** You will see a list of your pre-validated bank accounts. Select the account where you want the money sent.
6. **E-Verify:** You must e-verify this request to confirm it's really you. Use Aadhaar OTP or Net Banking to complete the e-verification.
7. **Submit:** Once verified, submit the request. You will receive a success message and a Transaction ID.

## The waiting game (again)

Once submitted, sit tight. The new request will be processed, and assuming your bank account validation holds up, the money should reflect in your account within a few weeks. 

Always double-check your bank details before you hit submit on the government portal—it saves you from having to do this dance entirely!`
  },
  {
    slug: "refund-adjusted-against-demand",
    title: "Why Was My Tax Refund Adjusted Against a Past Demand?",
    description: "Did the tax department reduce your refund? Learn about Section 245, why your refund was adjusted against an old demand, and what you can do.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["section-245", "tax-demand", "refund-adjustment"],
    relatedGlossarySlugs: ["refund", "tax-notice"],
    faqs: [
      {
        question: "Can the tax department legally take my refund to pay old dues?",
        answer: "Yes. Under Section 245 of the Income Tax Act, the department has the power to set off any outstanding tax demands against a current year's refund."
      }
    ],
    body: `## When your refund gets hijacked

You filed your ITR, expecting a handsome refund of ₹20,000. The processing completes, but you only receive ₹5,000 in your bank account. Then, you get an intimation notice saying the remaining ₹15,000 was "adjusted against an outstanding demand."

What just happened?

## Section 245 explained

Under **Section 245** of the Income Tax Act, the tax department is legally allowed to take your current year's refund and use it to pay off any tax debts you owe from previous years. 

If they find that you owe them money from three years ago, they will seize your current refund to settle that old score.

## The process (and your rights)

The department cannot do this silently. Before they adjust your refund, they are required to send you an **Intimation under Section 245**. 

This notice acts as a warning: *"We see you are owed a refund, but you owe us past tax. We are planning to adjust it. Speak now if you disagree."*

You usually have **30 days** to respond to this notice on the e-filing portal.

## What you should do

1. **Verify the old demand:** Check your portal under 'Outstanding Demands'. Was the past demand genuine? Did you forget to pay it?
2. **If the demand is correct:** You don't need to do anything. The department will adjust the refund, clear your old debt, and send you any remaining balance.
3. **If the demand is wrong:** Perhaps you already paid that old demand, or it was raised due to a mismatch error. You must urgently respond to the Section 245 notice on the portal, disagree with the adjustment, and attach proof (like an old paid challan).

Don't let past mistakes haunt your current returns. Ensuring your data is perfect using companion platforms like LastMinute ITR before filing on incometax.gov.in helps keep your record clean.`
  },
  {
    slug: "timeline-for-income-tax-refund",
    title: "How Long Does It Take to Get Your Income Tax Refund?",
    description: "Curious about refund timelines? Understand the income tax refund process, how long it usually takes, and what factors can delay your money.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["refund-timeline", "processing", "e-filing"],
    relatedGlossarySlugs: ["refund", "ais"],
    faqs: [
      {
        question: "Is there a fixed time limit for issuing a tax refund?",
        answer: "No, there is no strict legal time limit. However, most electronically filed and verified ITRs are processed within 20 to 45 days."
      }
    ],
    body: `## The waiting game

"I filed my taxes two days ago, where is my refund?" 

It's the most common question tax professionals hear in July. The truth is, while the Income Tax Department's new CPC 2.0 system is incredibly fast, refunds are not instant. 

## The standard timeline

For most salaried individuals who file simple returns (like ITR-1), the timeline looks like this:
1. **Filing & E-verification:** The clock doesn't start until you e-verify your return. 
2. **Processing (10 to 30 days):** The computers compare your return against your Form 26AS and AIS. If everything matches, they issue a 143(1) intimation.
3. **Refund Issuance (5 to 15 days):** Once processed, the refund mandate is sent to the State Bank of India (SBI), which transfers the money to your pre-validated bank account.

**Total average time:** 20 to 45 days from the date of e-verification.

## Why some refunds take longer

If you've been waiting for months, one of these factors might be in play:
- **Complex Returns:** ITR-2 or ITR-3 (involving capital gains or business income) require more thorough checks and generally take longer to process than ITR-1.
- **Mismatches:** If your claimed TDS doesn't match your Form 26AS, processing will be halted.
- **Bank Validation Issues:** Your refund was approved, but the bank transfer failed because your account isn't pre-validated.
- **Pending Verification:** You filed the return but forgot to e-verify it using Aadhaar OTP.

Be patient, ensure your bank account is pre-validated, and track your status on the incometax.gov.in portal. And remember, resolving mismatches early with tools like LastMinute ITR helps ensure you don't face processing delays.`
  },
  {
    slug: "pre-validate-bank-for-refund",
    title: "How to Pre-Validate Your Bank Account for Tax Refunds",
    description: "To get your income tax refund, your bank account must be pre-validated. Learn how to quickly pre-validate your account on the e-filing portal.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "general",
    tags: ["bank-validation", "refund", "e-filing", "portal"],
    relatedGlossarySlugs: ["refund", "ais"],
    faqs: [
      {
        question: "Why do I need to pre-validate my bank account?",
        answer: "The income tax department only issues electronic refunds to bank accounts where the PAN matches the bank's records. Pre-validation confirms this match."
      }
    ],
    body: `## The golden ticket to your refund

You can file the most perfect tax return in the world, but if your bank account isn't "pre-validated" on the income tax portal, you will not receive your refund. Period.

Since the tax department stopped issuing paper cheques, all refunds are routed electronically via SBI. To prevent fraud, they ensure the money only goes to an account strictly linked to your PAN.

## What does pre-validation mean?

Pre-validation is a digital handshake. The income tax portal pings your bank and asks, *"Does the PAN we have match the PAN you have for this account number?"* If the bank says yes, your account is validated.

## How to pre-validate in 3 steps

1. **Log in to the Portal:** Go to incometax.gov.in and log in.
2. **Go to Bank Accounts:** Click on **My Profile** and select **My Bank Accounts**. 
3. **Add or Validate:** 
   - If your account is listed but shows "Validation in progress" or "Failed", check the details.
   - If your account is not listed, click **Add Bank Account**. Enter your account number, account type, and IFSC code.
   - Click **Validate**.

## How long does it take?

Usually, the validation process is completed within 24 to 48 hours. Once successful, the status will change to **Validated**. 

Make sure you enable the toggle that says **"Nominate for Refund"** next to the validated account.

At LastMinute ITR, we always advise checking your bank validation status *before* you finalize your preparation and move to incometax.gov.in to file. It saves weeks of frustration later.`
  },
  {
    slug: "last-date-to-file-itr",
    title: "Income Tax Return (ITR) Filing Deadlines You Cannot Miss",
    description: "Stay compliant and avoid penalties! Get a complete list of important income tax return (ITR) filing deadlines for salaried individuals and businesses.",
    readMinutes: 4,
    publishedAt: "2026-06-15",
    cluster: "last-minute",
    tags: ["deadlines", "due-dates", "itr-filing"],
    relatedGlossarySlugs: ["ais", "tax-notice"],
    faqs: [
      {
        question: "What is the last date to file ITR for salaried employees?",
        answer: "For individual taxpayers and salaried employees whose accounts do not require a tax audit, the due date is usually July 31st of the assessment year."
      }
    ],
    body: `## The clock is ticking

In the world of income tax, timing is everything. Missing a deadline doesn't just result in late fees; it can prevent you from carrying forward losses and cause you to pay extra interest on your tax dues.

Here is a simple breakdown of the critical ITR filing deadlines you need to remember.

## 1. The Regular Due Date (July 31)
For the vast majority of Indian taxpayers—including salaried employees, freelancers, and small business owners who do not require a tax audit—the deadline to file the original ITR is **July 31st** of the Assessment Year.

## 2. The Audit Due Date (October 31)
If you run a large business or your professional receipts exceed certain limits requiring your accounts to be audited by a Chartered Accountant, your deadline is extended to **October 31st**.

## 3. The Belated Return Deadline (December 31)
Missed the July 31st deadline? You aren't completely locked out. You can still file a "Belated Return" until **December 31st** of the Assessment Year. However, this comes with late fees (up to ₹5,000) and interest penalties.

## 4. The Revised Return Deadline (December 31)
If you filed on time but realized you made a mistake (like forgetting to declare FD interest from your AIS), you can file a "Revised Return" to fix it. The deadline to revise your return is also **December 31st**.

## Don't wait for the last day

The income tax portal often faces heavy traffic in the final days of July. Use companion tools like LastMinute ITR to prepare your data, reconcile your AIS, and be ready to file on incometax.gov.in well before the portal starts lagging.`
  },
  {
    slug: "how-to-file-belated-return",
    title: "Missed the ITR Deadline? How to File a Belated Return",
    description: "Forgot to file your ITR by July 31? Learn how to file a belated return, understand the penalties involved, and discover the final cutoff date.",
    readMinutes: 5,
    publishedAt: "2026-06-15",
    cluster: "last-minute",
    tags: ["belated-return", "missed-deadline", "penalty"],
    relatedGlossarySlugs: ["tax-notice", "ais"],
    faqs: [
      {
        question: "Can I claim a refund if I file a belated return?",
        answer: "Yes, you can still claim your tax refund when filing a belated return, but you may lose out on some of the interest the government pays on delayed refunds."
      }
    ],
    body: `## So, you missed the July 31st deadline

Life gets busy, and sometimes the July 31st tax deadline slips right past you. If you are sitting in August realizing you haven't filed your Income Tax Return, don't panic. The government gives you a second chance.

This second chance is called a **Belated Return**, filed under Section 139(4) of the Income Tax Act.

## How is it different from a regular return?

Filing a belated return is technically the same process as filing a regular return. You use the exact same forms (ITR-1, ITR-2, etc.) and file on the same portal (incometax.gov.in). 

However, there are three major consequences:
1. **Late Fees:** Under Section 234F, you will have to pay a penalty. It is ₹5,000 for income above ₹5 Lakhs, and ₹1,000 if your income is below ₹5 Lakhs.
2. **Interest on Dues:** If you owe taxes, you will be charged an extra 1% interest per month (Section 234A) on the outstanding amount until you file.
3. **Loss of Benefits:** You cannot carry forward certain financial losses (like capital losses in the stock market) to offset against future gains.

## The absolute final deadline

You don't have unlimited time to file a belated return. The absolute final cutoff is **December 31st** of the Assessment Year. If you miss this date, you cannot file a voluntary return at all for that year, leaving you vulnerable to severe tax notices.

## How to file

1. Calculate your income using your Form 16 and AIS.
2. Ensure you add the Section 234F late fee to your tax computation.
3. Pay the total tax plus late fees via the e-Pay Tax system.
4. Select "Section 139(4) - Belated" when filling out your ITR details.
5. Submit and e-Verify.

Even if you are late, precision matters. LastMinute ITR helps you organize your belated filing data so you can submit an error-free return on the government portal.`
  }
];