FROM python:3.11-slim

WORKDIR /app

# Install system dependencies (Node.js and npm for React build)
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Copy Python requirements
COPY requirements_new.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements_new.txt

# Copy entire project
COPY . .

# Install Node dependencies and build React frontend
RUN npm install --legacy-peer-deps

# Build React app
RUN npm run build

# Expose port
EXPOSE 8000

# Start FastAPI server from testing directory
CMD ["sh", "-c", "cd /app && uvicorn testing.main_new:app --host 0.0.0.0 --port 8000"]
