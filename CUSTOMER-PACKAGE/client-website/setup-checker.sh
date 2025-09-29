#!/bin/bash
# Professional Website Template - Quick Setup Script
# Run this script to check your customization progress

echo "🚀 PROFESSIONAL WEBSITE TEMPLATE - SETUP CHECKER"
echo "=================================================="
echo ""

# Function to check if placeholder exists in files
check_placeholder() {
    local placeholder=$1
    local description=$2
    
    if grep -r "$placeholder" *.html >/dev/null 2>&1; then
        echo "❌ TODO: $description"
        echo "   Replace: $placeholder"
    else
        echo "✅ DONE: $description"
    fi
}

echo "📋 CUSTOMIZATION CHECKLIST:"
echo ""

echo "🏢 COMPANY INFORMATION:"
check_placeholder "[COMPANY_NAME]" "Update company name"
check_placeholder "[PHONE_NUMBER]" "Add phone number"
check_placeholder "[EMAIL_ADDRESS]" "Add email address"
check_placeholder "[STREET_ADDRESS]" "Add street address"
check_placeholder "[CITY_STATE_ZIP]" "Add city, state, ZIP"
echo ""

echo "📝 CONTENT & MARKETING:"
check_placeholder "[HERO_HEADLINE]" "Customize hero headline"
check_placeholder "[HERO_DESCRIPTION]" "Update hero description"  
check_placeholder "[YOUR_SERVICES]" "Define your services"
check_placeholder "[YOUR_INDUSTRY]" "Specify your industry"
check_placeholder "[FOUNDED_YEAR]" "Add founding year"
echo ""

echo "👥 TEAM INFORMATION:"
check_placeholder "[CEO_NAME]" "Add CEO name"
check_placeholder "[COO_NAME]" "Add COO name"
check_placeholder "[DIRECTOR_NAME]" "Add Director name"
echo ""

echo "🎨 ASSETS TO REPLACE:"
if [ ! -f "assets/images/company-logo.svg" ]; then
    echo "❌ TODO: Replace company logo (assets/images/company-logo.svg)"
else
    echo "✅ DONE: Company logo exists"
fi

if [ ! -f "assets/images/favicon.ico" ]; then
    echo "❌ TODO: Add favicon (assets/images/favicon.ico)"
else
    echo "✅ DONE: Favicon exists"
fi
echo ""

echo "🔧 TECHNICAL SETUP:"
if grep -r "localhost" *.html >/dev/null 2>&1; then
    echo "❌ TODO: Update any localhost URLs for production"
else
    echo "✅ DONE: No localhost URLs found"
fi

if grep -r "\[CURRENT_YEAR\]" *.html >/dev/null 2>&1; then
    echo "❌ TODO: Update copyright year"
else
    echo "✅ DONE: Copyright year updated"
fi
echo ""

echo "📊 SETUP SUMMARY:"
total_placeholders=$(grep -r "\[.*\]" *.html 2>/dev/null | wc -l)
if [ $total_placeholders -eq 0 ]; then
    echo "🎉 CONGRATULATIONS! Your website is ready to launch!"
    echo ""
    echo "📋 FINAL CHECKLIST:"
    echo "   □ Test contact form functionality"
    echo "   □ Check mobile responsiveness"
    echo "   □ Verify all images load correctly"
    echo "   □ Upload to hosting platform"
    echo "   □ Set up custom domain (optional)"
    echo "   □ Add Google Analytics (optional)"
else
    echo "⚠️  Found $total_placeholders placeholders still to replace"
    echo ""
    echo "💡 TIP: Use Find & Replace (Ctrl+H) in your editor to quickly replace placeholders!"
    echo ""
    echo "📖 Need help? Check these files:"
    echo "   • TEMPLATE-CONFIG.txt - All placeholders listed"
    echo "   • CUSTOMIZATION-GUIDE.md - Step-by-step instructions"
    echo "   • README.md - Complete documentation"
fi

echo ""
echo "🚀 Ready to launch? Upload your files to:"
echo "   • Netlify (drag & drop)"
echo "   • Vercel (GitHub integration)"  
echo "   • Traditional hosting (FTP upload)"
echo ""
echo "💬 Need support? Check documentation or contact us!"
echo "=================================================="