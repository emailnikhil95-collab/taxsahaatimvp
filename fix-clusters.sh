#!/bin/bash
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "tax-saving"/cluster: "deductions"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "capital-gains"/cluster: "general"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "f-and-o"/cluster: "general"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "crypto"/cluster: "general"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "freelancer"/cluster: "general"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "ais-26as"/cluster: "ais"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "notices"/cluster: "mistakes"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "refunds"/cluster: "general"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "deadlines"/cluster: "last-minute"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "itr-forms"/cluster: "general"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "salary-components"/cluster: "salaried"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "tax-relief"/cluster: "salaried"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "other-income"/cluster: "general"/g' {} +
find lib/content -name "learn-articles-*.ts" -type f -exec sed -i '' 's/cluster: "tds"/cluster: "general"/g' {} +
