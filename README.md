# ThreatForge

**ICS / OT Cybersecurity Freelance Consultant Portfolio**

ThreatForge is a premium, 15-page responsive HTML/CSS/JS template tailored specifically for freelance industrial cybersecurity consultants. It embraces an "Industrial-Utilitarian × Retro-Futuristic" design aesthetic, drawing inspiration from SCADA operator panels, HMI touchscreens, and DCS workstations.

## 🚀 Features

- **15 Production-Ready Pages**: Home, Home 2, About, Services, Threat Cases, Compliance, Blog, Contact, Login, Register, Dashboard, 404, Coming Soon, and single-item views.
- **OT-Specific Content**: Accurate ICS terminology (Purdue Model, SCADA, PLC, DCS, IEC 62443, NIST SP 800-82).
- **Light/Dark Mode**: Defaults to Light Mode (`#FFFFFF` background). Includes a seamless toggle to pure black Dark Mode (`#000000`).
- **RTL Support**: Built-in support for Right-to-Left languages via an `rtl.css` override and logical CSS properties.
- **Client Portal / Dashboard**: A highly detailed, static mock dashboard for manufacturing clients to review vulnerability assessments, patch schedules, network segmentation, and compliance reports.
- **Accessibility & SEO**: WCAG 2.1 AA compliant, proper semantic HTML tags, JSON-LD Schema integration, and focus ring styling.
- **No Frameworks Required**: Built with Vanilla HTML5, CSS3, and ES6 JavaScript.

## 📂 File Structure

```text
/
├── index.html                  # Home (Default)
├── home2.html                  # Home 2 (Alternate layout)
├── about.html                  # Consultant Bio
├── services.html               # ICS Cybersecurity Services
├── threat-cases.html           # Case Studies (ICS specific)
├── threat-case-single.html     # Single Case Study Detail
├── compliance.html             # Frameworks & Self-Assessment
├── blog.html                   # Blog / Intelligence Feed
├── blog-single.html            # Single Blog Post
├── contact.html                # Secure Communications
├── login.html                  # Auth: Login
├── register.html               # Auth: Register
├── dashboard.html              # Secure Client Portal
├── 404.html                    # Error Page
├── coming-soon.html            # Coming Soon / Waitlist
├── assets/
│   ├── css/
│   │   ├── style.css           # Global Styles & Theme Variables
│   │   ├── dashboard.css       # Dashboard-Specific Overrides
│   │   └── rtl.css             # RTL Override Rules
│   └── js/
│       ├── main.js             # Global JS (Theme, Nav, Validation)
│       └── dashboard.js        # Dashboard Tabs & Interactivity
└── README.md                   # Project Documentation
```

## 🛠 Usage

1. **Local Development**: Just open any `.html` file in a modern browser or use a local development server like VS Code Live Server.
2. **Theme Toggle**: The template detects system preferences and defaults to light mode. It utilizes `localStorage` to save user preference.
3. **RTL Toggle**: Click the `<->` icon in the navigation to toggle the layout direction.
4. **Form Integration**: Replace the `action` attribute in `contact.html` with your actual Formspree or equivalent form endpoint.
5. **Dashboard Data**: The dashboard is populated with static placeholder data for demonstration purposes. To connect to an actual database, replace the static HTML table structures with dynamically generated rows in your backend framework of choice.

## 🛡️ License
Designed for ICSEC / ThreatForge internal use. All engagements governed by signed NDA.
