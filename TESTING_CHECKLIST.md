# Testing Checklist - Agile Culture Assessment
## Comprehensive QA Protocol

Complete this checklist before declaring the assessment ready for production use.

---

## Pre-Deployment Testing

### Code Review
- [ ] All files present in repository
- [ ] `index.html` file size is reasonable (~50-60KB)
- [ ] `effilor-logo.jpg` is in repository root
- [ ] `api/send-email.js` has correct recipient email
- [ ] No hardcoded test data or console.logs left in code

### Environment Setup
- [ ] SendGrid API key configured in Vercel
- [ ] Environment variable named exactly: `SENDGRID_API_KEY`
- [ ] All three environments checked (Production, Preview, Development)
- [ ] Project redeployed after adding environment variables

---

## Desktop Testing (Chrome)

### Welcome Screen
- [ ] Effilor logo displays correctly (not broken image)
- [ ] Logo size is appropriate (~300px)
- [ ] Heading: "Agile Culture Assessment" displays
- [ ] Three stat boxes show correct numbers (26, 8-10, 6)
- [ ] "What You'll Discover" section is readable
- [ ] "Begin Assessment" button is visible and clickable
- [ ] Button hover effect works (lift + shadow)

### Question Flow (Test with Q1-Q5)
- [ ] Logo displays (smaller, ~120px)
- [ ] Progress bar shows "Question 1 of 26"
- [ ] Progress percentage shows "4% Complete"
- [ ] Progress bar fills correctly
- [ ] Pillar badge displays ("Agile Principle")
- [ ] Question text displays clearly
- [ ] All 5 answer options display
- [ ] Answer options have hover effect
- [ ] Can select an answer
- [ ] Selected answer highlights in purple
- [ ] "Next" button is disabled until answer selected
- [ ] "Next" button enables after selecting answer
- [ ] "Next" button hover effect works
- [ ] "Previous" button appears on Q2+
- [ ] "Previous" button works correctly
- [ ] Can change answer before clicking Next
- [ ] Progress updates correctly when advancing

### Complete Assessment (All 26 Questions)
- [ ] All questions display correctly
- [ ] Progress bar reaches 100% on Q26
- [ ] No JavaScript errors in console (F12)
- [ ] Can go back and change previous answers
- [ ] Question numbers are sequential (1-26)
- [ ] Last question shows "View Results" instead of "Next"

### Results Screen
- [ ] Logo displays
- [ ] "Your Agile Culture Profile" heading shows
- [ ] Overall score displays (format: "XX / 130")
- [ ] Score level badge shows correct level:
  - Command-and-Control Culture (26-60)
  - Agile in Form, Not Function (61-95)
  - Maturing Agile Culture (96-130)
- [ ] Score description paragraph shows
- [ ] Top Strength box displays (green, with checkmark)
- [ ] Priority Area box displays (orange, with warning icon)
- [ ] Both boxes show pillar name and percentage
- [ ] "Pillar Breakdown" section shows all 6 pillars
- [ ] All pillar bars display with correct colors
- [ ] Pillar percentages are accurate
- [ ] Bar widths match percentages
- [ ] Level labels show under each bar
- [ ] "Get Your Detailed Report" section displays
- [ ] "Request Full Report" button is visible and clickable

### Email Form
- [ ] Logo displays
- [ ] "Request Your Detailed Report" heading shows
- [ ] All 5 form fields display:
  - Full Name
  - Email Address
  - Organization Name
  - Job Role/Title
  - Phone Number
- [ ] Required fields are marked with *
- [ ] Form validation works (try submitting empty)
- [ ] Email validation works (try invalid email)
- [ ] Privacy notice displays at bottom
- [ ] "Back to Results" button works
- [ ] "Send My Report" button is visible

### Form Submission & Thank You
- [ ] Fill form with test data
- [ ] Click "Send My Report"
- [ ] Thank you screen displays
- [ ] Checkmark icon shows
- [ ] User's name displays in heading
- [ ] Email address displays correctly
- [ ] "24 hours" message shows
- [ ] Contact information displays

---

## Email Delivery Testing

### Email Arrival
- [ ] Check inbox at shankar.ramamurthy@effilor.com
- [ ] If not in inbox, check Spam/Junk folder
- [ ] Email arrives within 1-2 minutes
- [ ] Subject line format: "New Agile Culture Assessment - [Name] ([Organization])"

### Email Content Verification
- [ ] Submission timestamp displays (IST timezone)
- [ ] Contact information section complete:
  - Name
  - Email
  - Organization
  - Role
  - Phone (or "Not provided")
- [ ] Assessment results section shows:
  - Overall score (X / 130)
  - Score level name
- [ ] Pillar scores section shows all 6 pillars with:
  - Score (X/Y format)
  - Percentage
- [ ] Individual question responses section shows all 26 questions:
  - Question number
  - Answer label
  - Numeric score
- [ ] JSON data section is properly formatted
- [ ] All data is accurate (matches what was entered)

---

## Desktop Testing (Other Browsers)

### Safari
- [ ] Welcome screen displays correctly
- [ ] Can complete full assessment
- [ ] Results display correctly
- [ ] Email form works
- [ ] Submission successful

### Firefox
- [ ] Welcome screen displays correctly
- [ ] Can complete full assessment
- [ ] Results display correctly
- [ ] Email form works
- [ ] Submission successful

### Edge (if applicable)
- [ ] Welcome screen displays correctly
- [ ] Can complete full assessment
- [ ] Results display correctly
- [ ] Email form works
- [ ] Submission successful

---

## Mobile Testing (Required)

Test on actual mobile device (iPhone or Android):

### Welcome Screen
- [ ] Logo displays and scales appropriately
- [ ] Text is readable without zooming
- [ ] Stat boxes stack properly on mobile
- [ ] "What You'll Discover" section is readable
- [ ] "Begin Assessment" button is easily tappable
- [ ] No horizontal scrolling

### Question Screen
- [ ] Logo displays at appropriate size
- [ ] Progress bar is visible and readable
- [ ] Question text is readable without zooming
- [ ] Answer options are easily tappable
- [ ] Answer options don't overlap or cut off
- [ ] Selected answer highlights correctly
- [ ] Buttons are large enough to tap easily
- [ ] "Previous" and "Next" buttons don't overlap

### Results Screen
- [ ] All content displays without horizontal scroll
- [ ] Score is readable
- [ ] Strength/Priority boxes stack vertically
- [ ] Pillar bars display correctly
- [ ] Percentages are readable
- [ ] "Request Full Report" button is easily tappable

### Email Form
- [ ] All form fields display properly
- [ ] Mobile keyboard appears when tapping fields
- [ ] Can type in all fields
- [ ] Form validation works on mobile
- [ ] Buttons are easily tappable
- [ ] No layout issues

### Thank You Screen
- [ ] All content displays properly
- [ ] Email address is readable
- [ ] No horizontal scrolling

---

## Scoring Accuracy Testing

### Test Case 1: All "Strongly Agree" (Score = 130)
- [ ] Answer all 26 questions with "Strongly Agree"
- [ ] Expected total score: 130/130
- [ ] Expected level: "Maturing Agile Culture"
- [ ] All pillars should show high percentages

### Test Case 2: All "Strongly Disagree" (Score = 26)
- [ ] Answer all 26 questions with "Strongly Disagree"
- [ ] Expected total score: 26/130
- [ ] Expected level: "Command-and-Control Culture"
- [ ] All pillars should show low percentages

### Test Case 3: All "Neutral" (Score = 78)
- [ ] Answer all 26 questions with "Neutral/Sometimes"
- [ ] Expected total score: 78/130
- [ ] Expected level: "Agile in Form, Not Function"
- [ ] All pillars should show ~60% range

### Test Case 4: Mixed Answers
- [ ] Answer with varied responses
- [ ] Verify total score makes sense
- [ ] Check pillar percentages are accurate
- [ ] Top strength should be highest pillar
- [ ] Priority area should be lowest pillar

---

## Performance Testing

- [ ] Welcome screen loads in < 2 seconds
- [ ] Question transitions are smooth (no lag)
- [ ] Results screen renders quickly
- [ ] No console errors at any point
- [ ] No console warnings (except informational Tailwind CDN)
- [ ] Logo loads quickly (not delayed)
- [ ] Form submission responds within 2-3 seconds

---

## Security & Privacy Testing

- [ ] HTTPS enabled (green padlock in browser)
- [ ] No sensitive data visible in URL
- [ ] No data stored in browser localStorage (optional check)
- [ ] Email transmission is secure (SendGrid uses TLS)
- [ ] Privacy notice displays on email form
- [ ] No data leakage in error messages

---

## Edge Cases & Error Handling

### Navigation Edge Cases
- [ ] Try clicking "Next" without selecting answer (should be disabled)
- [ ] Try clicking "Previous" on Q1 (button shouldn't appear)
- [ ] Try browser back button during assessment (should handle gracefully)
- [ ] Try browser forward button (should handle gracefully)
- [ ] Try refreshing page mid-assessment (expected: restarts)

### Form Validation
- [ ] Submit empty form (should show validation errors)
- [ ] Submit with invalid email (should show error)
- [ ] Submit with only required fields (should work)
- [ ] Submit with all fields including phone (should work)
- [ ] Try very long text in fields (should handle gracefully)

### Network Errors
- [ ] Test with slow connection (3G simulation)
- [ ] Test form submission with network tab open (check request)
- [ ] If submission fails, error message should be helpful

---

## Final Verification Before Going Live

- [ ] Assessment is deployed to production URL
- [ ] Custom domain configured (if applicable)
- [ ] All tests above passed
- [ ] At least 2 people have completed full test
- [ ] Email notifications are reliable (test 3+ times)
- [ ] No critical issues remain
- [ ] Documentation is up to date (README, QUICK_START)
- [ ] Partner/client has reviewed and approved

---

## Sign-Off

**Tester Name:** _______________________  
**Date:** _______________________  
**Version Tested:** _______________________  
**Deployment URL:** _______________________

**Overall Result:**  
- [ ] PASS - Ready for production
- [ ] CONDITIONAL PASS - Minor issues, document below
- [ ] FAIL - Critical issues must be fixed before launch

**Notes/Issues:**
```
[Document any issues, concerns, or observations here]
```

---

## Post-Launch Monitoring (First 24 Hours)

- [ ] Monitor for email deliverability (all submissions arriving?)
- [ ] Check for user-reported issues
- [ ] Review any error logs in Vercel
- [ ] Verify mobile traffic works correctly
- [ ] Confirm assessment is being completed (not abandoned mid-way)

---

## Maintenance Schedule

**Weekly:**
- [ ] Check email deliverability
- [ ] Review any error logs

**Monthly:**
- [ ] Test full assessment flow
- [ ] Verify email still arriving correctly
- [ ] Check for any browser compatibility issues

**Quarterly:**
- [ ] Full regression testing
- [ ] Review and update content if needed
- [ ] Check for SendGrid API changes

---

**Remember:** This assessment represents Effilor's brand and expertise. Thorough testing ensures a professional experience that builds trust with potential clients.
