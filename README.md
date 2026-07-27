# Frontend Developer Portfolio

> A modern and fully responsive personal portfolio showcasing projects, built with a focus on clean architecture, performance, and accessibility.

## Key Features

- **Component-Driven Architecture:** Built using modular principles ensuring reusability and clean separation of codes.
- **Fluid & Responsive Layouts:** Crafted with CSS Grid and Flexbox for flawless responsiveness across mobile and desktop viewports.
- **Performance Optimized:** Built with Vite for instant Hot Module Replacement (HMR) and fast asset bundling.

## Tech Stack

### Core & Frameworks
- **Languages:** HTML5, CSS3 (Advanced Grid/Flexbox, Custom Properties), JavaScript (ES6+)
- **Libraries & Tooling:** React.js, Vite
- **Design & Prototyping:** Figma (Variable color management, typography scaling, component states)

### Architecture & Engineering
- **Data Flow:** Used a uni-directional prop taking data from a centralized data module.
- **Styling Methodology:** Modular CSS 
- **Version Control:** Git & GitHub


## Project Structure

portfolio-website/
├── public/                # Static assets, favicons, and images
├── src/
│   ├── assets/            # Local image for export
│   ├── components/        # Reusable and stateless UI components 
│   ├── styles/            # Individual components stylesheet
│   ├── App.jsx            # Main application entry point
│   ├── data.js            # Centralized data module that holds and exports raw data arrays
|   ├── index.css          # Global page background and typography
│   └── main.jsx           # React DOM renderer
├── index.html             # HTML root document
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Vite configuration


## Getting Started Locally

Follow these steps to set up and run the project on your local server:

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahlet-1/My-Portofolio.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

