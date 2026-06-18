# Market Data Index — 120 Blog Articles

Per-domain research files with the stat/number/source used in each article body.

| Domain | File | Articles |
|--------|------|----------|
| Salaried & Regime | [MARKET_DATA_salaried.md](./MARKET_DATA_salaried.md) | 30 |
| Investors & Freelancers | [MARKET_DATA_investor.md](./MARKET_DATA_investor.md) | 30 |
| Deductions & Senior Citizens | [MARKET_DATA_deductions.md](./MARKET_DATA_deductions.md) | 30 |
| Reconciliation, Notices & Deadlines | [MARKET_DATA_reconciliation.md](./MARKET_DATA_reconciliation.md) | 30 |

## Image prompts (AI generation)

| Domain | File |
|--------|------|
| Salaried & Regime | [IMAGE_PROMPTS_salaried.json](./IMAGE_PROMPTS_salaried.json) |
| Investors & Freelancers | [IMAGE_PROMPTS_investor.json](./IMAGE_PROMPTS_investor.json) |
| Deductions & Senior Citizens | [IMAGE_PROMPTS_deductions.json](./IMAGE_PROMPTS_deductions.json) |
| Reconciliation, Notices & Deadlines | [IMAGE_PROMPTS_reconciliation.json](./IMAGE_PROMPTS_reconciliation.json) |

## Word export

Full library with image prompts embedded per article: `LastMinute_ITR_Blog_Library_120.docx` (project root). Regenerate with:

```bash
npx tsx scripts/export-blogs.ts && python3 scripts/build_blogs_doc.py
```
