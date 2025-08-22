#!/bin/bash

echo "🔍 Performance Check for Next.js Development"
echo "=========================================="

echo ""
echo "📊 Memory Usage:"
ps aux | grep -E "(next|node)" | grep -v grep | awk '{print $6/1024 " MB - " $11}' | head -5

echo ""
echo "🔥 CPU Usage:"
ps aux | grep -E "(next|node)" | grep -v grep | awk '{print $3 "% - " $11}' | head -5

echo ""
echo "🌐 Network Connections:"
lsof -i :3000 2>/dev/null || echo "No connections on port 3000"

echo ""
echo "💾 Disk Usage:"
du -sh .next 2>/dev/null || echo "No .next directory found"
du -sh node_modules 2>/dev/null || echo "No node_modules directory found"

echo ""
echo "✅ Performance check complete!"
