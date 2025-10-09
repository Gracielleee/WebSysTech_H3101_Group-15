# WebSysTech_H3101_Group-15

Repository for the Web Systems and Technology course.
A.Y 2025-2026

## Wireframe Documentation

Please check [this link](https://github.com/Gracielleee/WebSysTech_H3101_Group-15/blob/main/WIREFRAME.md) for the wireframe documentation.

---

## MS 2 Project Documentation

**To be filled**

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
