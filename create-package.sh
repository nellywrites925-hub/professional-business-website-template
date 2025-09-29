#!/bin/bash
# Template Packaging Script
# This script creates a customer-ready ZIP package

echo "🎯 Creating Customer Package for Professional Business Template..."

# Create temporary packaging directory
PACKAGE_DIR="Professional-Business-Template-v1.0"
rm -rf "$PACKAGE_DIR" 2>/dev/null
mkdir "$PACKAGE_DIR"

echo "📦 Copying customer files..."

# Copy customer-ready files
cp -r client-website "$PACKAGE_DIR/"
cp -r demo-site "$PACKAGE_DIR/"
cp -r docs "$PACKAGE_DIR/"
cp README.md "$PACKAGE_DIR/"
cp LICENSE "$PACKAGE_DIR/"
cp CHANGELOG.md "$PACKAGE_DIR/"
cp .gitignore "$PACKAGE_DIR/"
cp CUSTOMER-PACKAGE/CUSTOMER-README.md "$PACKAGE_DIR/START-HERE.md"

echo "📄 Excluding business materials..."
# Business materials are automatically excluded since we don't copy them

echo "🗜️ Creating ZIP file..."
zip -r "${PACKAGE_DIR}.zip" "$PACKAGE_DIR"

echo "🧹 Cleaning up..."
rm -rf "$PACKAGE_DIR"

echo "✅ Package created: ${PACKAGE_DIR}.zip"
echo ""
echo "📋 Package Contents:"
echo "  ✓ client-website/ (main template)"
echo "  ✓ demo-site/ (professional example)"  
echo "  ✓ docs/ (customization & deployment guides)"
echo "  ✓ README.md (project overview)"
echo "  ✓ LICENSE (usage rights)"
echo "  ✓ CHANGELOG.md (version history)"
echo "  ✓ START-HERE.md (customer welcome guide)"
echo ""
echo "🚀 Ready for sale! Upload ${PACKAGE_DIR}.zip to your platform."