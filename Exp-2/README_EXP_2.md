# Supercar-Hub: Multi-Library UI Showcase

A professional Single Page Application (SPA) built with **React** and **Vite** that demonstrates the successful integration of two major UI component libraries: **Bootstrap 5** and **Material UI (MUI)**. This project fulfills the requirements for a series of academic lab experiments focusing on modern web design, component-based architecture, and library interoperability.

---

## 🚀 Project Overview
The "Supercar-Hub" platform is designed to showcase high-performance vehicles through a modern web interface. It serves as a practical implementation of:
- **Responsive Layouts**: Ensuring the UI adapts to mobile, tablet, and desktop screens.
- **Library Integration**: Combining Bootstrap's utility-first approach with Material UI's design-system approach.
- **Dynamic Rendering**: Using React's state and mapping capabilities to display data.

---

## 🧪 Detailed Experiments Summary

### Experiment-1: Designing UI Using Bootstrap Components
- **Aim**: To design a responsive user interface using Bootstrap in an SPA.
- **Status**: ✅ Completed.
- **Technical Detail**: Integrated Bootstrap 5 via npm and utilized core components like buttons, typography, and container systems to build the base UI.

### Experiment-2: Card-Based Layout Using Bootstrap
- **Aim**: To create a card-based UI layout using Bootstrap components.
- **Status**: ✅ Completed.
- **Technical Detail**: Implemented a dynamic grid system (`row`, `col`) to render an array of supercar data (Bugatti, McLaren, Lotus) into clean, centered Bootstrap cards.

### Experiment-3: UI Design Using Material UI Components
- **Aim**: To design a user interface using Material UI components in React.
- **Status**: ✅ Completed.
- **Technical Detail**: Developed an "MUI Exclusive Services" section using `@mui/material`. This section showcases MUI-specific features like `Paper` for elevation, `Card` for content containment, and a vertical `Grid` stack for specialized information.

### Experiment-4: Responsive Navigation Bar
- **Aim**: To design a responsive navigation bar using a UI component library.
- **Status**: ✅ Completed.
- **Technical Detail**: Built a dark-themed header with navigation links that adjust automatically to different screen sizes, providing a consistent entry point for the application.

---

## 🛠️ Technology Stack & Requirements
- **Core**: React 18+ (Vite)
- **Styling**: 
  - Bootstrap 5.3+
  - Material UI 6.0+ (MUI)
- **Runtime**: Node.js (Recommended v20.19.0+ or v22.12.0+)
- **IDE**: Visual Studio Code / Cascade

---

## 📂 Project Structure
```text
card_app/
├── src/
│   ├── assets/          # Car images (c1.jpg, c2.jpg, c3.jpg)
│   ├── Navbar.jsx       # Experiment-4: Responsive Header
│   ├── App.jsx          # Experiment-1, 2, & 3: Main Layout
│   └── main.jsx         # App entry point with CSS/JS imports
├── package.json         # Dependency and Script management
└── README.md            # Lab documentation