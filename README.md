# WebSysTech_H3101_Group-15

Repository for the Web Systems and Technology course.
A.Y 2025-2026

## Wireframe Documentation

Please check [this link](https://github.com/Gracielleee/WebSysTech_H3101_Group-15/blob/main/WIREFRAME.md) for the wireframe documentation.

---

## MS 2 Project Documentation

### Common Elements and Components

This section documents the design and implementation details for the core reusable elements and components found consistently across all pages of the Skye Suites static website. It covers structural layout, accessibility, styling, validation, and user experience improvements aimed at ensuring a consistent, usable, and accessible user interface.

---

#### Header and Navigation

| Aspect                 | Description                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Structural Elements    | The header uses semantic `<header>` and `<nav>` landmarks with ARIA roles ensuring keyboard and screen reader accessibility. |
| Logo and Branding      | The logo links to the homepage, includes descriptive alt text, and ARIA attributes for assistive technologies.               |
| Responsive Navigation  | Employs Bootstrap offcanvas menus for small screens using a toggler button, enhancing mobile usability.                      |
| Accessibility Features | Navigation links use `role="menuitem"` and menus `role="menubar"` with clear aria-labels.                                    |
| Icons                  | FontAwesome provides visual iconography with proper aria-hidden settings for decorativeness.                                 |
| Booking Button         | A prominently styled "BOOK NOW" button opens a modal booking form, visually distinct for call-to-action emphasis.            |
| Visual Design          | Glassmorphic navbar with backdrop blur and transparency improves aesthetics and focus.                                       |
| Sticky Navbar          | Navbar remains visible by sticking to the top with drop shadow for better page navigation feedback.                          |

---

#### Booking Form Modal

| Aspect            | Description                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modal Structure   | Uses Bootstrap modal with proper ARIA roles and labels, supporting screen readers and keyboard navigation.                                                                         |
| Form Fields       | Includes well-labeled inputs with accessibility enhancements such as `aria-describedby` linking inputs to validation messages for context.                                         |
| Validation        | Combines HTML5 native validation with custom JavaScript rules for email and Philippine phone number formats.                                                                       |
| Custom Validators | Email validation excludes invalid domains; phone validation accepts local, international, and flexible formatted Philippine numbers by normalizing spaces, dashes, and plus signs. |
| UX Enhancements   | Resets validation state on modal show/hide or reset, providing feedback without intrusive alerts.                                                                                  |
| Accessibility     | Ensures keyboard accessibility and screen reader support throughout form controls and state updates.                                                                               |

---

#### Global CSS Styles

| Aspect            | Description                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| Root Variables    | Defines theme colors, fonts, border-radius, and transition durations for consistent site-wide branding.            |
| Reset & Utility   | Implements universal box-sizing and typographic base resets for cross-browser consistency and layout stability.    |
| Navigation Styles | Provides glassmorphic styles with blur effects, shadows, responsive logo scaling, and sticky positioning.          |
| Responsive Design | Incorporates media queries optimizing font sizes and layout for mobile and tablet breakpoints.                     |
| Footer Styling    | Uses layered background image with gradient overlay and CSS grids for flexible columnar layout on various devices. |
| Accessibility     | Adds utility classes like `.visually-hidden` for content optimized for screen readers.                             |

---

#### Global JavaScript Scripts

| Script                     | Purpose and Features                                                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bookingForm.js             | Manages booking form validation, integrating custom email and phone validators, Bootstrap modal control, and UX states.                                                |
| footer-subscriptionForm.js | Validates newsletter subscription emails with dynamic inline feedback and resets validation on form reset.                                                             |
| validators.js              | Contains reusable functions for email format validation, domain restrictions, and flexible Philippine phone number validation with normalization.                      |
| toastHelper.js             | Provides a centralized `showToast` function leveraging Bootstrap toasts for consistent, non-blocking user notifications across forms (booking, subscription, contact). |

---

### Key Feature Enhancements

| Area                      | Description                                                                                                                     | User Benefit                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Accessibility             | Added `aria-describedby` attributes in booking form inputs linking form controls with helper/error messages for assistive tech. | Improved clarity and usability for screen reader users.                 |
| Flexible Phone Validation | Enhanced phone input validation to permit spaces, dashes, and optional leading plus (`+`), normalizing input before validation. | Supports realistic user input formats, reducing validation frustration. |
| Toast Notifications       | Replaced `alert()` popups with Bootstrap toast notifications via a shared toast helper for inline, graceful success feedback.   | Provides smooth, non-intrusive feedback enhancing UX continuity.        |

---

### Summary Visualization

| Component           | Accessibility                       | UX Improvements                  | Technical Highlights                | Design Approach                    |
| ------------------- | ----------------------------------- | -------------------------------- | ----------------------------------- | ---------------------------------- |
| Header & Navigation | Semantic roles, ARIA labels         | Responsive offcanvas, sticky nav | Icon integration, glassmorphic blur | Consistent branding, scalable UI   |
| Booking Form Modal  | ARIA labels, `aria-describedby`     | Validation UX, toast feedback    | Modular JS validation, state resets | Bootstrap modal, clear feedback UI |
| Global CSS Styles   | Screen reader support utilities     | Responsive typography and layout | CSS variables, resets               | Theming and aesthetic consistency  |
| Global JavaScript   | Validation, notification modularity | Unified toast messaging system   | Reusable validators & toast helper  | Clean separation and modularity    |

---

## MS 1 Project Documentation

**[Link to MS 1 source code](https://github.com/Gracielleee/WebSysTech_H3101_Group-15/tree/ms1)**

### Tree

```sh
root/
├── access.html
├── dining.html
├── experience.html
├── index.html
├── suites.html
|
├── css/                       # Consolidated Stylesheets
│   ├── access.css
│   ├── dining.css
│   ├── experience.css
│   ├── index.css
│   └── suites.css
|
└── images/                    # All Project Media Assets
    ├── hotel.jpg              # Example: Footer background
    ├── lobby.jpg              # Example: Showcase header
    ├── restaurant.jpg         # Example: Dining section
    └── (20+ additional images for sections, suites, and experience activities...)

```

---

### Core Technology and Methodology

The project is built on a strong foundation of **HTML5** for semantic structure and **CSS3** for styling.

- **Styling Consistency:** The primary methodology used is **BEM (Block Element Modifier)** naming, which is uniformly applied across **all pages** (Index, Suites, Dining, Access, and Experience) for modularity and reusability.
- **Dependencies:** All pages utilize **Normalize.css** for browser consistency and rely on **Font Awesome** and **Google Material Icons** for lightweight, scalable iconography.

---

### Design and Development Decisions

All development adhered to a mobile-first, accessibility-first approach, prioritizing a consistent and inclusive user experience across the entire site.

- **Site-Wide Consistency:** A critical decision was to maintain a **shared HTML structure** for the header, navigation, and footer across **all five pages**. This ensures a unified look and feel and allows for massive CSS code reuse.
- **Responsive Layout:** CSS variables, Flexbox, and CSS Grid are used extensively for fluid and responsive layouts. The navigation dynamically switches between a **dropdown menu** (on mobile) and a **horizontal navigation bar** (on desktop) for optimal user experience.
- **Theming:** CSS Variables (`:root`) are used to manage colors, fonts, and measurements, making global theme changes simple and instantaneous across the entire project.
- **Accessibility:** **Semantic HTML5** and best practices for accessibility, including proper ARIA roles and keyboard focus styles, were integrated from the start.

---

### Refactoring and Key Improvements

Significant efforts were made to clean and modernize the codebase, removing technical debt and improving user interface elements.

- **Experience Page Modification:** The single largest refactoring was the **complete overhaul of the Experience Page**. It moved from Materialize/jQuery stack to a **Vanilla CSS** environment, resulting in faster performance and easier maintenance.
- **CSS Cleanup:** **All inline CSS was removed** from the HTML files (Index and Suites), and the CSS was reorganized using the BEM methodology. This directly improved code readability and maintainability.
- **UI Enhancements:**
  - **Access Page** layouts were improved by switching to a more adaptive **CSS Grid** system.
  - The **Dining Page** saw its showcase background lightened by reducing gradient opacity, and its footer was improved by making the subscription button **full-width** with better spacing.
  - The **Index and Suites** pages were standardized with the modern horizontal navigation bar, replacing older dropdown menus.
