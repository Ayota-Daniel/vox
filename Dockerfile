# =========================
# 1️⃣ Base image
# =========================
FROM oven/bun:1.3 AS base
WORKDIR /app

# =========================
# 2️⃣ Dependencies
# =========================
FROM base AS deps

# Copy lockfile & package.json
COPY bun.lock package.json ./

# Install dependencies
RUN bun install --frozen-lockfile

# =========================
# 3️⃣ Build
# =========================
FROM base AS builder

ENV NODE_ENV=production

# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Generate Prisma client (if Prisma is used)
RUN bunx prisma generate

# Build Next.js app
RUN bun run build

# =========================
# 4️⃣ Production runner
# =========================
FROM oven/bun:1.3-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only what is needed
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Start Next.js with Bun
CMD ["bun", "run", "start"]
