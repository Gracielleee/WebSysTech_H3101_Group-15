# WebSysTech_H3101_Group-15

Repository for the Web Systems and Technology course.
A.Y 2025-2026

## Wireframe Documentation

Please check [this link](https://github.com/Gracielleee/WebSysTech_H3101_Group-15/blob/main/WIREFRAME.md) for the wireframe documentation.

## MS 1 Project Documentation

### **Experience Page Refactoring**

What Changed: 
Rewrote the Experience page from **Materialize + jQuery** to **Bootstrap 5 + Vanilla JavaScript**

---

📁 New File Structure
```
experience.html    ← Updated with Bootstrap
experience.css     ← Clean OCSS methodology
experience.js      ← NEW: Vanilla JavaScript (replaces jQuery)
img/               ← Images renamed properly
```

---

🔄 Framework Migration

| **Before** | **After** |
|------------|-----------|
| Materialize CSS | Bootstrap 5 |
| jQuery | Vanilla JavaScript |
| Inline CSS | External CSS only |
| Generic image names | Semantic naming |

---

💡 Key Improvements

**HTML**
- ✅ Bootstrap 5 components (modals, dropdowns, forms)
- ✅ Proper semantic structure
- ✅ All inline styles removed
- ✅ Better accessibility

**CSS** 
- ✅ OCSS methodology (organized, no inline styles)
- ✅ BEM naming: `.experience-header__title`
- ✅ Responsive design
- ✅ Better performance

**JavaScript**
- ✅ **No more jQuery dependency** 
- ✅ Modern ES6+ JavaScript
- ✅ Object-oriented structure
- ✅ Form validation & error handling
- ✅ Performance optimized

---

🛠️ What Developers Need to Know

**Dependencies**
```html
<!-- Only these external libraries needed -->
<link href="bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
<script src="bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
<!-- No jQuery required! -->
```

**CSS Classes**
```css
/* New naming convention */
.experience-header          /* Block */
.experience-header__title   /* Block__Element */
.experience-card--active    /* Block--Modifier */
```

**JavaScript Structure**
```javascript
// Main controller class
class ExperienceController {
    // Handles all page functionality
    // Form validation, modals, parallax, etc.
}
```

**Image Names**
```
OLD: spa.jpg, pool.jpg, adventure.jpg
NEW: experience-massage-therapy.jpg, experience-pool-hero.jpg
```

---

🐛 Bugs Fixed
- ✅ Experience title now properly centered on black background
- ✅ Parallax images display correctly
- ✅ Section sizing consistency 
- ✅ Mobile responsiveness improved

---

🔥 Quick Start for Developers

1. Replace old files** with new ones
2. Update image paths** to new naming convention
3. No jQuery setup needed** - everything works with vanilla JS
4. CSS is organized** - easy to find and modify styles
5. Forms have validation** - real-time feedback included

### **Access Page**

#### Tools and Techniques Used

- **HTML5 & Semantic Markup**  
  Utilized semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`) to structure content clearly and improve accessibility.

- **CSS3 with Modern Features and BEM Methodology**  
  Leveraged CSS Grid and Flexbox for flexible and responsive layouts, CSS variables for consistent theming, and `clamp()` for fluid typography scaling.  
  Adopted Block Element Modifier (BEM) naming conventions in CSS and HTML to improve class naming clarity, modularity, and maintainability.

- **Accessibility Best Practices**  
  Implemented ARIA roles and attributes, keyboard-focus-visible styles, descriptive labels, and structured focus states to enhance usability for screen readers and keyboard users.

- **External Libraries**  
  Integrated Google Material Icons and FontAwesome for intuitive, scalable iconography, enhancing visual cues without adding image asset weight.

- **Responsive and Modular Design**  
  Developed a mobile-first responsive layout using CSS Grid and Flexbox, designed with reusable BEM blocks and elements. This makes future integration with CSS frameworks like Bootstrap or Tailwind more straightforward.

- **Performance and Security**  
  Adopted deferred loading for external scripts and appropriate iframe attributes (`loading="lazy"`, `referrerpolicy`) to optimize loading speed and user security.

- **Collaboration-Focused Documentation and Comments**  
  Added detailed comments in CSS and HTML to clearly identify sections, blocks, and elements, facilitating easier collaboration and future project maintenance.

#### Challenges Faced and Improvements Made

- **Transition to BEM Naming**  
  Refactored all CSS and HTML classes following the BEM methodology to systematically separate blocks, elements, and modifiers. This improved code readability, prevented style clashes, and enhanced scalability for future project growth.

- **Preparation for CSS Framework Integration**  
  Structured classes to be compatible with Bootstrap or Tailwind utility classes, facilitating potential migration or hybrid use without rewriting major portions of code.

- **Responsive Navigation Menu Enhancements**  
  Improved dropdown menu behavior and accessibility on smaller screens, supporting keyboard navigation and consistent visual focus cues.

- **Theming Consistency and Variable Use**  
  Enhanced maintainability by using CSS variables across colors, font families, and border radii, simplifying theme adjustments and ensuring visual consistency.

- **Form Accessibility and User Experience**  
  Enhanced form controls with semantic labels, focus states, and appropriate HTML attributes (`autocomplete`, `novalidate`) to create an intuitive and frictionless contact experience.

- **Flexible Layout Using CSS Grid**  
  Moved from fixed-width flexbox columns to a responsive grid system with auto-fit and minmax to better adapt to variable screen sizes while preserving content structure.

- **Performance Optimizations**  
  Continued emphasizing non-blocking resource loading and minimal CSS overrides to ensure fast page load and smooth user interaction.

#### Design and Development Decisions

- **Mobile-First, Accessibility-First Approach**  
  Focused on ensuring an inclusive, accessible experience for all users starting from mobile devices upward.

- **Semantic and Well-Commented Markup**  
  Maintained best practices in semantic tagging combined with detailed comments to improve project understandability and search engine optimization (SEO).

- **BEM and Modular CSS for Scalable Styling**  
  Adopted BEM to improve maintainability and make the stylesheet modular and easy to extend.

- **Icon Libraries for Lightweight UI Enhancement**  
  Used Material Icons and FontAwesome to efficiently include rich iconography with minimal performance impact.

- **Iterative Development with Documentation**  
  Incorporated multiple refinement cycles supported by clear documentation and comments, resulting in cleaner, more maintainable code ready for potential collaboration and future feature additions.
