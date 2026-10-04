#!/usr/bin/env sh
set -eu
mkdir -p backups
STAMP=$(date +%Y%m%d_%H%M%S)
PGPASSWORD="${POSTGRES_PASSWORD:-sims_password}" pg_dump -h "${POSTGRES_HOST:-localhost}" -U "${POSTGRES_USER:-sims}" -d "${POSTGRES_DB:-sims}" -Fc > "backups/sims_${STAMP}.dump"
echo "Backup written to backups/sims_${STAMP}.dump"
