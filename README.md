# Wede-poe
final poe
# AgriStream: Sustainable Farming Website Project

## Project Overview
This project is a static website developed for **AgriStream**, a sustainable farm located in Vuwani, Limpopo, South Africa. The site serves as a comprehensive online brochure and platform for customer interaction, focusing on regenerative agriculture practices and farm-fresh produce.

## Structure and Technologies Used
* **HTML5:** Semantic structure for 5 core pages (`index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`).
* **CSS3:** Styling using responsive design principles and Flexbox/Grid for complex layouts (e.g., forms, product listings).
* **JavaScript (Vanilla JS):** Used for **Part 3 Functionality** including:
    * Dynamic loading, searching, filtering, and sorting of product listings.
    * Client-side form validation and error handling.
    * Interactive Accordion (Mission/Vision sections on `about.html`).
    * Image Lightbox Gallery functionality on `products.html`.
    * Integration of Leaflet library for the Interactive Map on `contact.html`.
* **SEO:** Implemented comprehensive On-Page and Off-Page SEO elements (`robots.txt`, `sitemap.xml`).

---

## CHANGELOG: Record of Development (Part 3)

### **Part 3 Edits & Enhancements**

| Date | Change/Edit Description | Files Affected | Rubric Alignment |
| :--- | :--- | :--- | :--- |
| 2025-11-18 | **Implemented ALL JavaScript Functionality:** Added dynamic product loading, search/filter/sort logic, accordion functionality for `about.html`, and lightbox gallery for product images. | `script.js`, `products.html`, `about.html`, `style.css` | Interactive Elements, Dynamic Content |
| 2025-11-18 | **Implemented Form Validation:** Added client-side JavaScript validation with error/success messaging for both the Enquiry and Contact forms. | `script.js`, `enquiry.html`, `contact.html` | Validation, Error Handling |
| 2025-11-19 | **Applied Consistent Two-Column Form Layout:** Refactored the HTML of `enquiry.html` and `contact.html` and updated `style.css` to use Flexbox/Grid (`.form-row`, `.form-group`) for a clean, two-column form structure. | `enquiry.html`, `contact.html`, `style.css` | Form Controls, User Experience |
| 2025-11-19 | **Corrected Product Controls Layout:** Updated CSS to use Flexbox to align the Search, Filter, and Sort controls horizontally across the page. | `style.css` | Contact Controls |
| 2025-11-19 | **Implemented SEO Files:** Created and configured `robots.txt` and `sitemap.xml` for crawler instructions and site structure indexing. | `robots.txt`, `sitemap.xml` | Additional SEO Requests |

### **Corrections Based on Part 2 Feedback**

| Date | Change/Edit Description | Files Affected | Part 2 Feedback Addressed |
| :--- | :--- | :--- | :--- |
| 2025-11-16 | **Logo Resizing/Styling:** Updated CSS (`.logo-container`) to ensure the AgriStream logo is responsive and does not force page scrolling. | `style.css` | "The logo picture fills out the top part of the website, forcing the user to scroll." |
| 2025-11-16 | **Added Missing Tags:** Added missing `<footer>` and `<div>` tags to improve document structure and validity. | `contact.html`, `products.html` | "Some tags are not closed. footer, div, body.html on contact page." |
| 2025-11-17 | **Implemented Comments:** Added detailed HTML and CSS comments for code clarity and documentation. | All HTML/CSS files | "There are no comments on code." |
| 2025-11-17 | **Link Correction:** Ensured all internal navigation links (especially on the Products page) are fully functional and link to the correct pages. | `products.html`, `index.html` | "products webpage does not link to any page." |

## References

* **Leaflet:**
    * Leaflet. (n.d.). *Leaflet – a JavaScript library for interactive maps*. Retrieved from https://leafletjs.com/
* **W3C (HTML/CSS Standards):**
    * W3C. (n.d.). *HTML Living Standard*. Retrieved from https://html.spec.whatwg.org/
    * W3C. (n.d.). *CSS Cascading Style Sheets*. Retrieved from https://www.w3.org/Style/CSS/
* **MDN Web Docs (JavaScript/Validation):**
    * MDN Web Docs. (n.d.). *Using the Fetch API*. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    * MDN Web Docs. (n.d.). *Client-side form validation*. Retrieved from https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
* **General Web Development/SEO:**
    * Google Search Central. (n.d.). *Build and submit a sitemap*. Retrieved from https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    * Google Search Central. (n.d.). *Learn about robots.txt files*. Retrieved from https://developers.google.com/search/docs/crawling-indexing/robots/intro
