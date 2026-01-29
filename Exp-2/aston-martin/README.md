# Aston Martin Supercars Showcase

A responsive Single Page Application (SPA) built with React, Vite, Bootstrap, and Material UI, showcasing Aston Martin supercars with interactive card layouts and modern UI components.

## Features

- **Responsive Design**: Utilizes Bootstrap's grid system and Material UI's responsive components for optimal viewing on all devices.
- **Interactive Cards**: Displays supercar details in Material UI cards with images, descriptions, pricing, and performance specs.
- **Navigation Bar**: Bootstrap-powered responsive navbar with collapsible menu for mobile devices.
- **Search Functionality**: Integrated search form using Bootstrap components.
- **Footer**: Comprehensive footer with company info, links, and contact details using both Bootstrap and Material UI.
- **Modern UI Libraries**: Combines Bootstrap for layout and Material UI for enhanced components following Material Design principles.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: Fast build tool and development server.
- **Bootstrap**: CSS framework for responsive layout and components.
- **Material UI**: React components library based on Material Design.
- **JavaScript**: Programming language for logic and interactivity.

## Screenshots

### Navbar
![Navbar](screenshots/navbar.png)

### Header
![Header](screenshots/header.png)

### Cards
![Cards](screenshots/cards.png)

### Footer
![Footer](screenshots/footer.png)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aston-martin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Project Structure

```
src/
├── components/          # Reusable components (if any)
├── data.js             # Supercar data
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles

public/
├── images/             # Car images
└── vite.svg            # Vite logo

screenshots/            # Screenshots for documentation
```

## Usage

- Browse the supercar collection in a responsive card grid.
- Use the search bar to filter cars (functionality can be extended).
- Navigate using the responsive navbar.
- View car details including price, top speed, and acceleration.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
