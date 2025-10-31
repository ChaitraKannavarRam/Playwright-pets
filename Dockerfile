# Dockerfile — recommended: use official Playwright image
FROM mcr.microsoft.com/playwright:v1.56.0-jammy

# Create app directory
WORKDIR /workspace

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install npm deps (Playwright browsers already present in image)
RUN npm ci

# Copy project files
COPY . .

# Default command — run tests
CMD ["npx", "playwright", "test", "--reporter=list"]
