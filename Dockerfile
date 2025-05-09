# 1. Use official node image
FROM node:23-slim

# 2. Set working directory
WORKDIR /app

# 3. Copy and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# 4. Copy source code
COPY . .

# 5. Build the app
RUN pnpm run build

# 6. Preview the build
CMD ["pnpm", "run", "preview"]
