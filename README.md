# WebSysTech_H3101_Group-15

Repository for the Web Systems and Technology course.
A.Y 2025-2026

## Wireframe Documentation

Please check [this link](https://github.com/Gracielleee/WebSysTech_H3101_Group-15/blob/main/WIREFRAME.md) for the wireframe documentation.

---

## MS 2 Project Documentation

### Common Elements and Components

This section documents the implementation details and design considerations for the common elements and components used consistently across all pages of the Skye Suites static website. These elements include the header and navigation, booking form, global CSS styles, and common JavaScript scripts that enhance functionality and user experience.

---

#### Header and Navigation

| Aspect                 | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| Structural Elements    | The header uses semantic `<header>` and `<nav>` landmarks with ARIA roles for accessibility.   |
| Logo and Branding      | Logo is linked to homepage with descriptive alt text and aria-label for screen readers.        |
| Responsive Navigation  | Implements a Bootstrap offcanvas menu for small screens with a toggler button.                 |
| Accessibility Features | Navbar links have `role="menuitem"` and menus have `role="menubar"` with proper aria labels.   |
| Icons                  | FontAwesome icons visually reinforce menu items; icons have appropriate aria-hidden or labels. |
| Booking Button         | Prominent "BOOK NOW" button triggers a modal booking form, styled for emphasis.                |
| Visual Design          | Glassmorphic navbar with `backdrop-filter` blur and semi-transparent backgrounds.              |
| Sticky Navbar          | Positioned sticky at the top with shadow for visibility during scroll.                         |

---

#### Booking Form Modal

| Aspect            | Description                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| Modal Structure   | Bootstrap modal included with accessible aria labels and roles for dialogs.                       |
| Form Fields       | Includes inputs for contact info, booking details with labels linked to inputs.                   |
| Validation        | Uses built-in HTML5 validation with `novalidate` and custom validation logic in JavaScript.       |
| Custom Validators | Email and Philippine phone number custom validators check format and disallow invalid domains.    |
| UX Enhancements   | Form resets validation on modal show/hide and reset buttons, with confirmation alerts on success. |
| Accessibility     | Proper keyboard and screen reader support for modal and form controls.                            |

---

#### Global CSS Styles

| Aspect            | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Root Variables    | Defines color palette, fonts, radius, and transitions for consistent theming and branding.   |
| Reset & Utility   | Universal box-sizing and base styles for typography and layout normalization.                |
| Navigation Styles | Glassmorphic nav with blur, shadow, sticky positioning, and responsive logo sizing.          |
| Responsive Design | Media queries for logo size and heading text scale on smaller screens.                       |
| Footer Styling    | Footer uses layered background with gradient overlay and responsive grid layout for columns. |
| Accessibility     | Utility classes such as `.visually-hidden` for screen reader-only content.                   |

---

#### Global JavaScript Scripts

| Script                     | Purpose and Features                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| bookingForm.js             | Handles booking form validation with custom rules and Bootstrap modal control; manages UX interaction states. |
| footer-subscriptionForm.js | Validates newsletter subscription form email; manages validation feedback states visually and on reset.       |
| validators.js              | Contains reusable validation functions: email format and domain checks plus Philippine phone number regex.    |

---

Summary Visualization

| Component           | Key Features                      | Accessibility                  | UX Considerations      | Styling Approach         |
| ------------------- | --------------------------------- | ------------------------------ | ---------------------- | ------------------------ |
| Header & Navigation | Semantic, Responsive, Icons       | ARIA roles and labels          | Sticky, Offcanvas menu | Glassmorphic, Shadow     |
| Booking Form Modal  | Modal Dialog, Validated Inputs    | ARIA labeled, keyboard support | Reset state management | Bootstrap styled, Alerts |
| Global CSS          | Root Variables, Reset, Responsive | Screen reader utility classes  | Responsive adjustments | Consistent theming       |
| Global JS           | Validation logic in modules       | Manages visual feedback        | Prevents form errors   | Modular, reusable        |

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
