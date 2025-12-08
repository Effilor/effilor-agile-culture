# Agile Culture Assessment - Lead Magnet

A professional assessment tool to diagnose organizational Agile culture maturity across 6 key dimensions.

## Overview

**Assessment Name:** Agile Culture Assessment  
**Questions:** 26 behavioral questions  
**Time:** 8-10 minutes  
**Output:** Comprehensive diagnostic results with pillar breakdown

## Features

- ✅ Single-page application (no dependencies)
- ✅ Professional UI with Effilor branding
- ✅ Real-time progress tracking
- ✅ Instant results with visual breakdowns
- ✅ Optional email capture for detailed report
- ✅ Mobile-responsive design
- ✅ Serverless email delivery via SendGrid

## Six Assessment Pillars

1. **Agile Principle** - Understanding & Application
2. **Trust** - Psychological Safety & Empowerment
3. **Self Organizing** - Team Autonomy
4. **Collaborate** - Working Together
5. **Sustainable Pace** - Predictability & Balance
6. **Retrospectives** - Learning Culture

## File Structure

```
agile-culture-assessment/
├── index.html              # Main assessment (single file)
├── effilor-logo.jpg        # Logo image
├── api/
│   └── send-email.js       # Vercel serverless function
├── README.md               # This file
├── QUICK_START.md          # 10-minute deployment guide
└── TESTING_CHECKLIST.md    # QA protocol
```

## Technology Stack

- **Frontend:** HTML, CSS (Tailwind via CDN), Vanilla JavaScript
- **Deployment:** Vercel (serverless, auto-deploy from GitHub)
- **Email:** SendGrid API
- **Fonts:** Playfair Display (headings) + Inter (body)

## Deployment

See [QUICK_START.md](QUICK_START.md) for step-by-step deployment instructions.

Quick overview:
1. Create GitHub repository
2. Upload all files
3. Connect to Vercel
4. Add SendGrid API key to environment variables
5. Deploy and test

## Configuration

### Environment Variables (Vercel)

Required:
- `SENDGRID_API_KEY` - Your SendGrid API key with Mail Send permission

### Email Recipient

All assessment submissions are sent to: `shankar.ramamurthy@effilor.com`

To change the recipient, edit the `to` field in `api/send-email.js`.

## Scoring Logic

### Overall Scores
- **26-60 points:** Command-and-Control Culture
- **61-95 points:** Agile in Form, Not Function
- **96-130 points:** Maturing Agile Culture

### Pillar Scores (Percentage-based)
- **0-40%:** Needs Urgent Attention
- **41-60%:** Emerging Capability
- **61-80%:** Developing Strength
- **81-100%:** Agile Maturity

### Reverse-Scored Questions

The following questions are reverse-scored (disagreement = higher Agile maturity):
- Q1, Q3, Q5, Q7, Q8, Q11, Q14, Q16, Q18, Q19, Q20, Q21, Q26

## Testing

After deployment, complete these tests:

1. ✅ Logo displays correctly
2. ✅ All 26 questions navigate properly
3. ✅ Progress bar updates accurately
4. ✅ Answer selection works
5. ✅ Scoring calculates correctly
6. ✅ Results screen displays pillar breakdown
7. ✅ Email form submission works
8. ✅ Email arrives at shankar.ramamurthy@effilor.com
9. ✅ Mobile responsive (test on phone)
10. ✅ All data included in email notification

See [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) for comprehensive QA protocol.

## Troubleshooting

### Logo not displaying
- Verify `effilor-logo.jpg` is in repository root
- Check file name spelling (case-sensitive)

### Email not sending
- Confirm SendGrid API key is set in Vercel environment variables
- Verify key has "Mail Send" permission
- Redeploy after adding environment variables
- Check Vercel function logs for errors

### Tailwind CDN warning
- Informational only, safe to ignore
- Assessment uses Tailwind's core utility classes

## Lead Data Format

Each submission email includes:
- Contact information (name, email, organization, role, phone)
- Overall score and level
- Pillar-by-pillar breakdown
- All individual question responses
- JSON-formatted data for easy parsing

## Support

For questions or issues:
- Email: shankar.ramamurthy@effilor.com
- Review: TESTING_CHECKLIST.md and QUICK_START.md

## License

Proprietary - Effilor Consulting Services
