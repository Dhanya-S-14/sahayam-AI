# Sahayam AI - Missing Person Intelligence Platform

![Sahayam AI Banner](https://img.shields.io/badge/Sahayam%20AI-Missing%20Person%20Platform-00C2FF?style=for-the-badge&logo=shield&logoColor=white)

## Overview

**Sahayam AI** is an enterprise-level AI-powered missing person intelligence platform designed for police departments, NGOs, and citizens. The platform leverages artificial intelligence, face recognition, and community coordination to reunite missing persons with their families.

## Features

### Core Features
- **AI-Powered Verification** - Automated complaint validation with GENUINE/SUSPICIOUS/REVIEW status
- **Face Recognition** - Upload photos and search for face matches across the database
- **Live Sightings** - Real-time sighting reports from citizens and authorities
- **Location Intelligence** - Interactive heatmap with hotspot analysis
- **Case Management** - Complete case lifecycle management
- **FIR Registration** - Automatic First Information Report generation
- **Analytics Dashboard** - Comprehensive statistics and trends

### User Roles
- **Citizens** - Report missing persons, track cases, submit sightings
- **Police Officers** - Manage cases, verify complaints, coordinate searches
- **NGO Partners** - Coordinate rescue operations

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: React hooks

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sahayam-ai.git
cd sahayam-ai

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
sahayam-ai/
├── src/
│   ├── components/
│   │   ├── AIVerification.jsx      # AI complaint verification
│   │   ├── AlertsFeed.jsx          # Real-time alerts
│   │   ├── AlertsNotifications.jsx  # Notification management
│   │   ├── AnalyticsReports.jsx     # Analytics dashboard
│   │   ├── AuditLogs.jsx          # Compliance tracking
│   │   ├── CaseDetails.jsx        # Case information
│   │   ├── CaseManagement.jsx      # Case list/management
│   │   ├── ComplaintRegistration.jsx # 4-step complaint form
│   │   ├── CrowdResponse.jsx       # Community feedback
│   │   ├── FaceRecognition.jsx     # Face matching
│   │   ├── FIRStatus.jsx          # FIR display
│   │   ├── Header.jsx             # Top navigation
│   │   ├── LiveMap.jsx            # Interactive map
│   │   ├── LiveSightings.jsx      # Sighting reports
│   │   ├── LocationClustering.jsx  # Heatmap
│   │   ├── LocationIntelligence.jsx # Location analysis
│   │   ├── NotificationSystem.jsx # Pop-up notifications
│   │   ├── PredictionPanel.jsx    # AI predictions
│   │   ├── SettingsPage.jsx       # User settings
│   │   └── Sidebar.jsx            # Side navigation
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Entry point
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Design System

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Deep Blue | #0A1F44 | Primary/Sidebar |
| Cyan | #00C2FF | Accent/Highlights |
| Yellow | #FFD166 | Secondary Accent |
| White | #FFFFFF | Background |

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

## Complaint Workflow

1. **Citizen Form** - Fill 4-step complaint form
2. **AI Verification** - Analyze data completeness, image, duplicates
3. **Status** - GENUINE / SUSPICIOUS / REVIEW
4. **FIR Generated** - FIR Number + Case ID

## AI Verification Analysis

The AI verification system analyzes complaints across multiple dimensions:

1. **Data Completeness** - All required fields properly filled
2. **Image Authenticity** - Clear, human photos
3. **Duplicate Detection** - Similar cases in database
4. **Consistency Check** - Age matches appearance
5. **Location Validation** - Realistic locations
6. **Reporter Credibility** - Valid contact information

## Security Features

- Role-based access control
- HIPAA compliant data handling
- Encrypted data transmission
- Audit logging for all actions
- Government security standards

## Analytics Metrics

- Total missing cases
- Active searches
- Matches found
- Resolution rate
- Average resolution time
- Hotspot analysis
- Age/gender distribution

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Team

Developed for Tamil Nadu Police & Government of India

---

**Built with ❤️ for a safer India**

For emergencies, call **112**
