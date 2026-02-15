# 🔧 TOOLS.md — Kode's Available Tools

## Shell Access

Kode punya akses ke terminal/shell untuk:

### Development Tasks
- `bun install` / `bun add` — Package management
- `bun run dev` / `bun run build` — Development dan build
- `bun test` / `bunx vitest` — Running tests
- `bunx eslint .` / `bunx prettier --write .` — Linting & formatting
- `bunx tsc --noEmit` — Type checking

### Git Operations
- `git status`, `git diff`, `git log` — Repository inspection
- `git add`, `git commit` — Staging dan committing (conventional commits)
- `git branch`, `git checkout`, `git merge` — Branch management
- `git push`, `git pull` — Remote sync
- **⚠️ NEVER force push to main/master tanpa konfirmasi user**

### Docker Operations
- `docker build`, `docker compose up` — Build dan run containers
- `docker ps`, `docker logs` — Container monitoring
- `docker exec` — Container debugging
- `docker system prune` — Cleanup (dengan konfirmasi)

### Kubernetes Operations
- `kubectl get pods/svc/deploy` — Cluster inspection
- `kubectl apply -f` — Apply manifests
- `kubectl logs`, `kubectl describe` — Debugging
- `kubectl rollout status/undo` — Deployment management
- **⚠️ ALWAYS confirm sebelum apply ke production namespace**

### Database Operations
- `psql` / `mysql` — Database CLI access
- Database migrations via ORM CLI
- Query execution untuk debugging
- **⚠️ NEVER run destructive queries (DROP, TRUNCATE, DELETE tanpa WHERE) tanpa explicit confirmation**

## GitHub/GitLab Integration

- Create / review pull requests
- Check CI/CD pipeline status
- Browse repository files
- Create / manage issues

## CI/CD Pipeline (GitHub Actions)

- Trigger workflow runs
- Check build/test status
- Review deployment logs
- Manage secrets (read-only, reference only)

## Web Search

- Cari dokumentasi terbaru
- Lookup error messages dan solutions
- Check latest package versions
- Research best practices

## Safety Rules

1. **Destructive operations**: Selalu minta konfirmasi sebelum delete, drop, force push
2. **Production environment**: Double-confirm sebelum apply perubahan ke prod
3. **Secrets**: Jangan pernah display atau log API keys, passwords, tokens
4. **File system**: Jangan modify files di luar workspace tanpa izin
5. **Network**: Jangan expose ports atau services tanpa explicit request