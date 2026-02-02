# Medicine Inventory Frontend

A React-based frontend application for managing and viewing medicine inventory. This app displays a list of medicines with details like name, brand, expiry date, quantity, and price. It includes search functionality and visual indicators for medicines nearing expiry or low stock.

## Features

- **Medicine List Display**: View all medicines in a responsive data grid.
- **Search Functionality**: Search medicines by name.
- **Expiry Alerts**: Rows are highlighted in red if the medicine expires within 30 days.
- **Low Stock Alerts**: Rows are highlighted in yellow if the quantity is below 10.
- **Responsive Design**: Built with Material-UI for a clean, modern interface.

## Tech Stack

- **React**: Frontend framework
- **Vite**: Build tool and development server
- **Material-UI (MUI)**: UI component library
- **MUI Data Grid**: For displaying tabular data

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vishalrjpt02/Complete-React-JS.git
   cd Complete-React-JS/08_MED_WEB_APP/MEDICHINE_APP_FRONT/medicine-inventory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure the backend API is running on `http://localhost:5231` (see backend documentation for setup).

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

3. The app will fetch medicine data from the backend API and display it in the grid.

## API Integration

This frontend app communicates with a backend API at `http://localhost:5231/api/Getmedicine` to retrieve medicine data. Ensure the backend is running and accessible.

## Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # Entry point
├── index.css        # Global styles
├── App.css          # App-specific styles
├── assets/          # Static assets
└── component/       # Reusable components (e.g., MedicineList.jsx)
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is part of the Complete-React-JS repository. Check the main repository for licensing information.
