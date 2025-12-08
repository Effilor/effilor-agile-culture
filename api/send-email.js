const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { userData, results, answers, timestamp } = req.body;
        
        // Initialize SendGrid
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        // Calculate pillar percentages
        const pillarDetails = Object.values(results.pillarScores).map(pillar => {
            const percentage = Math.round((pillar.score / pillar.maxScore) * 100);
            return `${pillar.name}: ${pillar.score}/${pillar.maxScore} (${percentage}%)`;
        }).join('\n');
        
        // Get score level
        let scoreLevel = '';
        if (results.totalScore >= 96) scoreLevel = 'Maturing Agile Culture';
        else if (results.totalScore >= 61) scoreLevel = 'Agile in Form, Not Function';
        else scoreLevel = 'Command-and-Control Culture';
        
        // Prepare question responses
        const questionResponses = Object.entries(answers).map(([qIndex, answer]) => {
            const questionNum = parseInt(qIndex) + 1;
            const answerLabel = ['', 'Strongly Disagree', 'Disagree', 'Neutral/Sometimes', 'Agree', 'Strongly Agree'][answer];
            return `Q${questionNum}: ${answerLabel} (${answer}/5)`;
        }).join('\n');
        
        // Email content
        const emailContent = `
NEW AGILE CULTURE ASSESSMENT SUBMISSION
==========================================

SUBMISSION TIME: ${new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

CONTACT INFORMATION:
--------------------
Name: ${userData.name}
Email: ${userData.email}
Organization: ${userData.organization}
Role: ${userData.role}
Phone: ${userData.phone}

ASSESSMENT RESULTS:
-------------------
Overall Score: ${results.totalScore} / 130
Score Level: ${scoreLevel}

PILLAR SCORES:
--------------
${pillarDetails}

INDIVIDUAL QUESTION RESPONSES:
------------------------------
${questionResponses}

JSON DATA (for easy parsing):
------------------------------
${JSON.stringify({ userData, results, answers, timestamp }, null, 2)}

==========================================
This lead was generated from the Agile Culture Assessment at ${new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        `;
        
        const msg = {
            to: 'shankar.ramamurthy@effilor.com',
            from: 'shankar.ramamurthy@effilor.com',
            subject: `New Agile Culture Assessment - ${userData.name} (${userData.organization})`,
            text: emailContent,
        };
        
        await sgMail.send(msg);
        
        return res.status(200).json({ 
            success: true, 
            message: 'Assessment submitted successfully' 
        });
        
    } catch (error) {
        console.error('Error processing submission:', error);
        return res.status(500).json({ 
            error: 'Failed to process submission',
            details: error.message 
        });
    }
};
