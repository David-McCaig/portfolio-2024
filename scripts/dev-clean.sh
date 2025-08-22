#!/bin/bash

echo "🧹 Cleaning up existing Next.js processes..."

# Kill any existing Next.js development servers
pkill -f "next dev" || true
pkill -f "next-server" || true

# Wait a moment for processes to terminate
sleep 2

echo "✅ Cleanup complete! Starting development server..."

# Try to start with Turbopack first
echo "🚀 Attempting to start with Turbopack..."
if npm run dev:fast; then
    echo "✅ Turbopack started successfully!"
else
    echo "⚠️  Turbopack failed, falling back to standard development server..."
    npm run dev:fallback
fi
