# My Professional Portfolio
<div>
    <img src='https://img.shields.io/badge/React-Enabled-61DAFB?style=flat&logo=react' alt='React' />
    <img src='https://img.shields.io/badge/SCSS-Enabled-CC6699?style=flat&logo=sass' alt='SCSS' />
</div>
<br>

This project aims to showcase my skills, experiences, and projects in an attractive and responsive way, facilitating contact with potential employers and collaborators.

## Main Features
- Presentation of projects and experiences.
- Responsive design optimized for mobile devices.
- Integration with custom fonts.
- UI techniques for interactive layouts.

## Installation

> [!IMPORTANT]
> To run this project, you will need:
> - **Node.js** version 18+
> - **npm** or **yarn**

Follow the steps below to set up the project locally:

1. Clone the repository locally:

```bash
git clone https://github.com/ericshantos/portfolio-app.git
```

2. Access the generated `portfolio-app` directory and run the following script to install dependencies:

```bash
npm install
```

## Usage

Before starting the server, create the `.env` file to store environment variables:

1. Linux/Unix
  
```bash
touch .env
```

2. Windows
```bash
echo. > .env
```

To start the development server, use the command:

```bash
# Start the server
npm run dev
```

## Project Status
Active - The project is under continuous development.

## Contact
For any questions or suggestions, contact me via email at ericshantos13@gmail.com.

## Technologies Used

### **Next.js**
  - **Hybrid Rendering**: The portfolio uses server-side rendering to optimize page loading, improving performance and user experience.
  - **Image Optimization**: Uses the `next/image` component to automatically optimize images, ensuring fast and responsive loading.

### **React.js**
  - **Componentization**: The entire portfolio is structured in React components, making it easy to maintain and reuse code. Each portfolio section (Presentation, Content, Header, and more) is a separate component.
  - **State Management**: Uses hooks like `useState` and `useEffect` to manage component state, such as displaying the contact modal or animating elements when scrolling.

## Repository File and Folder Structure
The repository structure is as follows:

```plaintext
├── README.md                             # Project specifications and documentation
├── LICENSE                               # Project license details
├── package.json                          # Configuration file with project information (dependencies, scripts, etc.)
├── package-lock.json                     # Auto-generated file that locks the project dependencies versions
├── next.config.mjs                       # Next.js specific configuration file
├── jsconfig.json                         # Configuration for advanced JavaScript settings and module resolution
├── eslint.config.mjs                     # ESLint configuration to enforce coding standards and practices
├── src/                                  # Source code directory
|   ├── StateContext.js                   # Defines the global context to manage application state
|   ├── styles/                           # Folder containing project styles (CSS, SASS, etc.)
│   ├── pages/                            # Directory for the pages in the Next.js application
|   |    ├── _app.js                      # Main entry point for initializing the Next.js app
|   |    ├── _document.js                 # Custom Document component to modify the HTML structure
|   |    ├── index.js                     # The landing page of the application
|   |    └── components/                  # Folder for reusable UI and layout components
|   |          ├── ui                     # UI-specific components like buttons, inputs, etc.
|   |          └── layouts                # Layout components that define the structure of pages
|   |                 ├── ContactEmail    # Layout for contact email section
|   |                 ├── Header          # Layout for the header section
|   |                 ├── Main            # Main content layout containing different sections
|   |                 |    ├── AboutMe    # Component displaying the about me section
|   |                 |    ├── ContactMe  # Component for contact information
|   |                 |    ├── Photo      # Component displaying a profile photo
|   |                 |    ├── Projects   # Component for showcasing projects
|   |                 |    └── Skills     # Component displaying skills
|   |                 └── Presentation    # Layout for the presentation section of the page
│   └── utils/                            # Utility functions or helper modules
└── public/                               # Public files served statically
      ├── favicon.ico
      ├── icon-hamburguer.png
      └── foto-perfil.jpg              
```

## License
This project is licensed under the terms of the [MIT License](LICENSE).