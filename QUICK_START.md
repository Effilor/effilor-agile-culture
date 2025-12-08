# Quick Start Guide - Agile Culture Assessment
## Deploy Your Assessment in 10 Minutes

This guide will help you deploy the Agile Culture Assessment from scratch to live URL.

---

## Prerequisites

Before starting, you need:
- [ ] GitHub account
- [ ] Vercel account (free tier works fine)
- [ ] SendGrid account with API key

---

## Step 1: Create GitHub Repository (2 minutes)

1. Go to https://github.com/new
2. Repository name: `agile-culture-assessment` (or your preferred name)
3. Visibility: **Public** or **Private** (both work)
4. **Do NOT** check "Initialize with README"
5. Click **Create repository**

---

## Step 2: Upload Files to GitHub (3 minutes)

### Option A: Upload via GitHub Web Interface (Easiest)

1. On your new repository page, click **uploading an existing file**
2. Drag and drop these files:
   - `index.html`
   - `effilor-logo.jpg`
   - `README.md`
   - `QUICK_START.md`
   - `TESTING_CHECKLIST.md`

3. Create `api` folder:
   - Click **Add file** → **Create new file**
   - Type: `api/send-email.js`
   - Paste the content from your local `api/send-email.js`
   - Click **Commit new file**

4. Verify all files are uploaded:
   ```
   ✅ index.html
   ✅ effilor-logo.jpg
   ✅ README.md
   ✅ QUICK_START.md
   ✅ TESTING_CHECKLIST.md
   ✅ api/send-email.js
   ```

### Option B: Upload via Git Command Line

```bash
# In your local project directory
git init
git add .
git commit -m "Initial commit: Agile Culture Assessment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/agile-culture-assessment.git
git push -u origin main
```

---

## Step 3: Deploy to Vercel (2 minutes)

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your GitHub repository: `agile-culture-assessment`
4. Configure Project:
   - **Framework Preset:** Other
   - **Build Command:** Leave EMPTY
   - **Output Directory:** Leave EMPTY
   - **Install Command:** Leave EMPTY
5. Click **Deploy**
6. Wait 30-60 seconds for deployment to complete
7. You'll get a URL like: `https://agile-culture-assessment-xyz.vercel.app`

---

## Step 4: Get SendGrid API Key (2 minutes)

### If you already have SendGrid:
1. Go to https://app.sendgrid.com/settings/api_keys
2. Click **Create API Key**
3. Name: `Agile Assessment - Vercel`
4. Permissions: **Full Access** or **Mail Send**
5. Click **Create & View**
6. **Copy the API key** (starts with `SG.`)
7. Save it securely (you won't see it again)

### If you need to create SendGrid account:
1. Go to https://signup.sendgrid.com/
2. Sign up for free tier (40,000 emails/month for first 30 days, then 100/day)
3. Verify your email
4. Complete sender verification for shankar.ramamurthy@effilor.com
5. Then follow steps above to create API key

---

## Step 5: Add Environment Variable to Vercel (1 minute)

1. Go to your Vercel project dashboard
2. Click **Settings** tab
3. Click **Environment Variables** in left sidebar
4. Add new variable:
   - **Key:** `SENDGRID_API_KEY`
   - **Value:** [Paste your SendGrid API key]
   - **Environment:** Check all three boxes (Production, Preview, Development)
5. Click **Save**

---

## Step 6: Redeploy (1 minute)

**CRITICAL:** After adding environment variables, you MUST redeploy

1. Go to **Deployments** tab
2. Click the three dots (...) on your latest deployment
3. Click **Redeploy**
4. Confirm redeploy

OR

1. Make a tiny change to README.md in GitHub
2. Commit the change
3. Vercel will auto-deploy

---

## Step 7: Test Your Assessment (5 minutes)

Visit your Vercel URL and test:

### Quick Test (1 minute)
1. ✅ Logo displays
2. ✅ Click "Begin Assessment"
3. ✅ Answer one question
4. ✅ Click "Next" - should advance to Q2

### Full Test (5 minutes)
1. Complete entire assessment (all 26 questions)
2. View results screen
3. Click "Request Full Report"
4. Fill in form with real data
5. Submit
6. **CHECK YOUR EMAIL** at shankar.ramamurthy@effilor.com
   - Check inbox
   - Check spam/junk folder
   - Email should arrive within 1-2 minutes

If email doesn't arrive, see **Troubleshooting** below.

---

## Verification Checklist

Before considering deployment complete:

- [ ] Logo displays on welcome screen
- [ ] All 26 questions display correctly
- [ ] Progress bar updates
- [ ] Answer selection works (options highlight)
- [ ] "Next" button only works after selecting answer
- [ ] "Previous" button works
- [ ] Results screen shows:
  - [ ] Total score
  - [ ] Score level badge
  - [ ] Top strength (green box)
  - [ ] Priority area (orange box)
  - [ ] All 6 pillar bars with percentages
- [ ] Email form displays
- [ ] Form submission works
- [ ] **Email actually arrives** at shankar.ramamurthy@effilor.com
- [ ] Email contains all data (contact info + scores + responses)
- [ ] Mobile responsive (test on phone)

---

## Troubleshooting

### Logo Not Displaying
**Problem:** Logo shows broken image icon  
**Solution:**
- Verify `effilor-logo.jpg` is in repository root (not in a folder)
- Check file name is exactly `effilor-logo.jpg` (lowercase, correct spelling)
- File must be at same level as `index.html`

### Email Not Sending
**Problem:** Form submits but no email arrives  
**Solutions:**
1. Verify SendGrid API key is correct
2. Check API key has "Mail Send" permission
3. Confirm environment variable is named exactly: `SENDGRID_API_KEY`
4. Verify you checked all three environment boxes (Production, Preview, Development)
5. **MUST redeploy after adding environment variables**
6. Check Vercel function logs:
   - Go to Deployments → Click your deployment → Functions tab
   - Look for errors in `/api/send-email` logs

### Build Errors
**Problem:** Vercel tries to run a build command  
**Solution:**
- Edit project settings in Vercel
- Override Build Command: Leave empty or set to: `echo "No build needed"`
- Override Output Directory: Leave empty

### Form Submission Error
**Problem:** "There was an error submitting..." message  
**Solutions:**
1. Open browser console (F12) to see error details
2. Check Vercel function logs for server-side errors
3. Verify API endpoint is accessible: `https://YOUR-URL.vercel.app/api/send-email`

---

## What's Next?

After successful deployment:

1. **Share the URL** with your team for testing
2. **Test on multiple devices** (desktop, mobile, tablet)
3. **Test on different browsers** (Chrome, Safari, Firefox)
4. **Complete TESTING_CHECKLIST.md** for comprehensive QA
5. **Set up custom domain** (optional, in Vercel settings)

---

## Getting Help

If you encounter issues:
1. Review this guide carefully
2. Check TESTING_CHECKLIST.md
3. Review Vercel function logs for errors
4. Contact: shankar.ramamurthy@effilor.com

---

## Common Questions

**Q: Can I use a custom domain?**  
A: Yes! In Vercel settings, go to Domains and add your custom domain.

**Q: How do I update the assessment?**  
A: Edit files in GitHub, commit changes, and Vercel auto-deploys.

**Q: Where can I see submission data?**  
A: All submissions email to shankar.ramamurthy@effilor.com with complete data.

**Q: Can I change the email recipient?**  
A: Yes, edit the `to` field in `api/send-email.js` and commit the change.

**Q: Is the assessment secure?**  
A: Yes - HTTPS by default, no data stored on server, emails sent via secure SendGrid API.

---

## Success! 🎉

If you've completed all steps and email arrives successfully, your assessment is live and ready to use!

**Your live URL:** `https://[your-project].vercel.app`

Share this with your target audience and start capturing leads!
