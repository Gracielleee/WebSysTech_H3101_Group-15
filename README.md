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

| Aspect                 | Description                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| Structural Elements    | Uses semantic `<header>` and `<nav>` landmarks with ARIA roles for keyboard and screen reader accessibility. |
| Logo and Branding      | Logo links to homepage with descriptive alt text and ARIA attributes for assistive technologies.             |
| Responsive Navigation  | Bootstrap offcanvas menus for small screens with toggler button for mobile usability.                        |
| Accessibility Features | Navigation links use `role="menuitem"` and menus use `role="menubar"` with clear `aria-labels`.              |
| Icons                  | FontAwesome icons with `aria-hidden="true"` for decorative use.                                              |
| Booking Button         | Prominently styled "BOOK NOW" button with accessible `aria-label`, opens modal booking form.                 |
| Visual Design          | Glassmorphic navbar with backdrop blur and transparency for modern aesthetics.                               |
| Sticky Navbar          | Navbar remains visible with drop shadow for improved navigation feedback.                                    |
| Active Link Logic      | Refactored to use `data-page-id` attributes on `<body>` and nav links for dynamic active state detection.    |
| Screen Reader Support  | Adds visually hidden "current" text on active menu item for screen reader clarity.                           |

---

#### Booking Form Modal

| Aspect            | Description                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modal Structure   | Bootstrap modal with ARIA roles (`role="dialog"`, `aria-modal="true"`) and labels for screen reader support.                                          |
| Form Fields       | Inputs and selects use explicit `<label>` associations and `aria-describedby` to link with helper/error messages.                                     |
| Validation        | Combines HTML5 validation with custom JavaScript rules for email and Philippine phone number formats.                                                 |
| Custom Validators | Email validation excludes invalid domains; phone validation accepts local/international formats with normalization of spaces, dashes, and plus signs. |
| UX Enhancements   | Validation state resets on modal show/hide or form reset; feedback provided via Bootstrap toasts instead of intrusive alerts.                         |
| Accessibility     | Ensures keyboard navigation, screen reader support, and color contrast compliance per WCAG 2.1 standards.                                             |

---

#### Global CSS Styles

| Aspect            | Description                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| Root Variables    | Defines theme colors, fonts, border-radius, and transition durations for consistent branding.           |
| Reset & Utility   | Universal box-sizing and typographic resets for cross-browser consistency.                              |
| Navigation Styles | Glassmorphic effects, blur, shadows, responsive logo scaling via CSS `clamp()`, and sticky positioning. |
| Responsive Design | Media queries optimize layout and typography for mobile and tablet breakpoints.                         |
| Footer Styling    | Layered background image with gradient overlay and CSS grid layout for flexible responsiveness.         |
| Accessibility     | Utility classes like `.visually-hidden` for screen reader-only content.                                 |
| Required Field UX | Automatic red asterisks for required fields with helper text explaining their meaning.                  |

---

#### Global JavaScript Scripts

| Script          | Purpose and Features                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| bookingForm.js  | Manages booking form validation, modal control, and UX states with custom validators and toast feedback.                                              |
| footer.js       | Validates newsletter subscription emails with inline feedback and resets validation on form reset.                                                    |
| validators.js   | Reusable functions for email format validation, domain restrictions, and flexible Philippine phone number normalization.                              |
| toastHelper.js  | Centralized `showToast()` function using Bootstrap toasts for consistent, non-blocking notifications across booking, subscription, and contact forms. |
| top-menu-nav.js | Refactored logic to highlight active nav link using `data-page-id` from `<body>` and nav links, replacing filename-based detection.                   |

---

### Key Feature Enhancements

| Area                      | Description                                                                                                     | User Benefit                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Accessibility             | ARIA roles, `aria-describedby`, explicit labels, tablist semantics, modal landmarks, color contrast compliance. | Improved clarity and usability for screen reader and keyboard users.   |
| Flexible Phone Validation | Accepts spaces, dashes, and optional leading plus (`+`); normalizes input before validation.                    | Supports realistic user input formats, reducing frustration.           |
| Toast Notifications       | Replaced `alert()` popups with Bootstrap toasts via shared helper.                                              | Smooth, non-intrusive feedback across all forms.                       |
| Navigation Logic          | Refactored active link detection using `data-page-id` attributes on `<body>` and nav links.                     | More reliable across routing setups and avoids brittle filename logic. |
| Booking Flow UX           | Preselects suite in modal via `data-suite` attribute; resets validation state on modal open/close.              | Streamlined booking experience with contextual form behavior.          |
| Responsive Logo           | Uses CSS `clamp()` for adaptive logo sizing across screen sizes.                                                | Maintains branding clarity on all devices.                             |
| Required Field UX         | Adds automatic red asterisks and helper text for required fields.                                               | Improves form clarity and accessibility.                               |
| Newsletter Modal          | Bootstrap-based popup modal with validation and user-friendly dismissal (permanent or timed reappearance).      | Engaging subscription flow with flexible user control.                 |
| Dining Page Sliders       | Bootstrap 5 `carousel-fade`, lazy loading, extended image sets, autoplay pause/resume logic.                    | Elegant transitions, better performance, and energy efficiency.        |

---

### Summary Visualization

| Component           | Accessibility                                                                                                    | UX Improvements                                                                  | Technical Highlights                                                                              | Design Approach                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Header & Navigation | Semantic roles, ARIA labels, visually hidden current indicators, sticky nav landmarks, `data-page-id` logic      | Responsive offcanvas, dynamic active state, improved keyboard focus              | Refactored active link logic using `data-page-id`, responsive logo via CSS `clamp()`              | Consistent branding, scalable UI                  |
| Booking Form Modal  | ARIA labels, `aria-describedby`, explicit `<label>` associations, accessible button labels, WCAG contrast checks | Toast feedback, flexible phone input, preselected suite booking, validation UX   | Modular JS validation, input normalization, Bootstrap modal integration, centralized toast helper | Clear feedback UI, accessible form structure      |
| Global CSS Styles   | Screen reader support utilities, semantic tab structure, contrast compliance                                     | Responsive typography and layout, helper text for required fields                | CSS variables, resets, reusable utility classes, vertical centering for offcanvas                 | Theming and aesthetic consistency                 |
| Global JavaScript   | Validation, notification modularity, ARIA role enhancements, tablist semantics                                   | Unified toast messaging system, input flexibility, modal state resets            | Reusable validators, toast helper, tab accessibility logic, visibility-aware carousel autoplay    | Clean separation and modularity                   |
| Dining Page Sliders | ARIA labels for controls, lazy loading, tab visibility-aware autoplay                                            | Smooth fading transitions, richer image sets, energy-efficient autoplay behavior | Bootstrap 5 `carousel-fade`, lazy loading, IIFE autoplay logic                                    | Elegant transitions, performance-conscious design |

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
