# Multi-Step Form with Real-Time Collaboration (Frontend Only)

This project is a frontend application built to demonstrate a multi-step form with real-time collaboration capabilities. It leverages modern tools and frameworks for building responsive and interactive user interfaces.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/), [Redux](https://redux.js.org/), or Context API
- **UI Components**: [ShadCN UI](https://shadcn.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## Features

### Step 1: Setting Up the Project
- Initialized a Next.js application with Tailwind CSS and ShadCN.
- Configured Tailwind CSS for dark mode using the `class` strategy.
- Created a layout with a header, main content area, and footer.
- Added a working dark mode toggle.

### Step 2: Multi-Step Form Layout
- Created a multi-step form with:
  - **Step 1**: Personal Information (static inputs)
  - **Step 2**: Address Details (static inputs)
  - **Step 3**: Preferences (static toggles/checkboxes)
  - **Step 4**: Review & Submit (summary)
- Integrated navigation using ShadCN UI’s Tabs component or a custom stepper.

### Step 3: Form State Management
- Implemented global state management using Zustand, Redux, or Context API.
- Updated form state dynamically with persistent data across steps.
- Added client-side validation with real-time error display.

### Step 4: Animations and Transitions
- Integrated Framer Motion for:
  - Step transitions.
  - Input focus and button interaction effects.
- Enhanced progress bar with ShadCN UI’s Progress component.

### Step 5: Mock API Integration
- Simulated real-time collaboration using Next.js API routes.
- Reflected periodic updates from mock API in the form state.

### Step 6: UI/UX Enhancements
- Added tooltips and placeholders for form fields using ShadCN Tooltip.
- Ensured full responsiveness across devices (mobile, tablet, desktop).
- Polished dark mode for seamless adaptation.

### Step 7: Stretch Goals (Optional)
- Toast notifications for submissions and errors.
- Accessibility improvements (WCAG standards).
- Localization support using `next-i18next`.
- Unit tests with Jest and React Testing Library.

---

## Getting Started

### Prerequisites
- Node.js v16+ and npm/yarn installed on your machine.

### Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory:

cd multi-step-form


3. Install dependencies:

npm install



Running the Development Server

npm run dev

Visit http://localhost:3000 to view the app in your browser.


---

Deliverables

Basic setup with working dark mode toggle.

A functional multi-step form with animations and state management.

Mock API integration for real-time collaboration.

Responsive and accessible UI with optional advanced features.



---

License

This project is licensed under the MIT License. See the LICENSE file for details.


---

Acknowledgments

Next.js

Tailwind CSS

ShadCN UI

Framer Motion


You can copy and save this content as `README.md` for your GitHub repository. Let me know if additional adjustments are needed!
