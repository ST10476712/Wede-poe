document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.mission-vision h3');
    accordionHeaders.forEach(header => {
        const content = header.nextElementSibling;
        
        content.style.display = 'none';
        header.classList.add('accordion-header-closed');

        header.addEventListener('click', () => {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                header.classList.remove('accordion-header-closed');
                header.classList.add('accordion-header-open');
            } else {
                content.style.display = 'none';
                header.classList.remove('accordion-header-open');
                header.classList.add('accordion-header-closed');
            }
        });
    });
});


function loadDynamicContent() {
    console.log('--- Dynamic Content Loader Started ---');
    const contentData = [
        { title: 'The Agristream Difference', text: 'We use sustainable farming techniques that enrich the soil and protect biodiversity.', category: 'story' },
        { title: 'Community Focus', text: 'We regularly host farm tours and workshops to engage with our local community.', category: 'community' }
    ];

    const targetSection = document.querySelector('.about-intro');

    if (targetSection) {
        contentData.forEach(item => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('dynamic-info-block', item.category);

            const newHeader = document.createElement('h3');
            newHeader.textContent = item.title;

            const newParagraph = document.createElement('p');
            newParagraph.textContent = item.text;

            newDiv.appendChild(newHeader);
            newDiv.appendChild(newParagraph);

            targetSection.appendChild(newDiv);
        });
        console.log(`Successfully loaded ${contentData.length} dynamic content blocks.`);
    } else {
        console.error('Target section for dynamic content not found.');
    }
}
loadDynamicContent();


document.addEventListener('DOMContentLoaded', () => {
    
    
    const welcomeHeader = document.querySelector('header h1');
    if (welcomeHeader && welcomeHeader.parentNode.style.backgroundColor === 'rgb(23, 184, 23)') {
        setTimeout(() => {
            const parentHeader = welcomeHeader.parentNode;
            parentHeader.style.backgroundColor = 'rgb(50, 205, 50)';
            parentHeader.style.color = '#333';
        }, 500);
    }
    
    
    const productCta = document.querySelector('.hero .cta-button');
    if (productCta) {
        productCta.addEventListener('click', (event) => {
            if (!productCta.classList.contains('cta-active')) {
                productCta.classList.add('cta-active'); 
                productCta.textContent = 'Loading Products...';
                
                setTimeout(() => {
                    
                }, 300); 
            }
        });
    }
    console.log('Agristream Homepage JavaScript Loaded. Welcome banner transitioning...');
});


const ALL_PRODUCTS = [
    { id: 1, name: "Free-Range Eggs", category: "Eggs", details: "Our happy hens roam freely, spending their days foraging for insects and grasses. This natural diet produces eggs with vibrant, golden yolks and exceptional flavor. Available by the dozen.", price: 45.00, images: ["_images/FB_IMG_1756066088273.jpg", "_images/FB_IMG_1756066091422.jpg", "_images/FB_IMG_1756066096772.jpg"] },
    { id: 2, name: "Seasonal Mixed Vegetable ", category: "Organic Produce", details: "Grown with a focus on soil health, our seasonal vegetables are bursting with flavor and nutrients. We never use synthetic chemicals, ensuring you get the freshest, cleanest produce possible.", price: 120.00, images: ["_images/vegetables.jpg", "_images/FB_IMG_1756059870615.jpg", "_images/FB_IMG_1756059873741.jpg"] },
    { id: 3, name: "Our Livestock", category: "Livestock", details: "Our Livestock are 100% pasture-raised on lush, open land. This results in lean, flavorful meat that is rich in nutrients and free from hormones or antibiotics. Available in various cuts and quantities.", price: 185.00, images: ["_images/IMG-20250824-WA0058.jpg", "_images/FB_IMG_1756065247865.jpg", "_images/FB_IMG_1756065259166.jpg"] },
    { id: 4, name: "Seasonal Fruits", category: "Organic Produce", details: "Nature’s sweet, seed-bearing treasures, offering a burst of flavor and vital nutrients.", price: 55.00, images: ["_images/FB_IMG_1756069010856.jpg", "_images/FB_IMG_1756069039890.jpg", "_images/FB_IMG_1756069053263.jpg"] },
];

const container = document.getElementById('product-list-container');
const searchInput = document.getElementById('product-search');
const filterSelect = document.getElementById('product-filter');
const sortSelect = document.getElementById('product-sort');
const mainContent = document.querySelector('main');

function renderProducts(productsToRender) {
    if (!container) return;
    container.innerHTML = '';

    if (productsToRender.length === 0) {
        container.innerHTML = '<p class="no-results">No products found matching your criteria. Try adjusting your search or filter.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.dataset.category = product.category;

        const imageHtml = product.images.map(src => 
            `<img src="${src}" alt="${product.name} image" class="product-image" data-full-src="${src}" width="180" height="150">`
        ).join('');
        
        productDiv.innerHTML = `
            <div class="product-image-gallery">
                ${imageHtml}
            </div>
            <h4>${product.name}</h4>
            <p>${product.details}</p>
            <p class="product-price">R ${product.price.toFixed(2)}</p>
            <a href="enquiry.html" class="cta-button small-cta">Enquire Now</a>
        `;
        
        container.appendChild(productDiv);
    });
    initLightboxListeners();
}

function filterAndSortProducts() {
    let filteredList = [...ALL_PRODUCTS];
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredList = filteredList.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.details.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    const selectedCategory = filterSelect.value;
    if (selectedCategory !== 'all') {
        filteredList = filteredList.filter(product => product.category === selectedCategory);
    }
    const sortValue = sortSelect.value;
    if (sortValue === 'name-asc') {
        filteredList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'name-desc') {
        filteredList.sort((a, b) => b.name.localeCompare(a.name));
    }
    renderProducts(filteredList);
}

function createLightbox() {
    const lightboxHtml = `
        <div id="lightbox-modal" class="lightbox-modal">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-content" id="lightbox-image">
            <div id="lightbox-caption"></div>
        </div>
    `;
    if (mainContent) {
        mainContent.insertAdjacentHTML('beforeend', lightboxHtml);
    }
}

function initLightboxListeners() {
    const images = document.querySelectorAll('.product-image');
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    const captionText = document.getElementById('lightbox-caption');

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.dataset.fullSrc || this.src;
            captionText.innerHTML = this.alt;
        }
    });
    
    const span = document.getElementsByClassName("lightbox-close")[0];
    if (span) {
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (container && searchInput && filterSelect && sortSelect) {
        createLightbox();
        renderProducts(ALL_PRODUCTS);
        
        searchInput.addEventListener('input', filterAndSortProducts);
        filterSelect.addEventListener('change', filterAndSortProducts);
        sortSelect.addEventListener('change', filterAndSortProducts);
    }
});


function validateContactForm(form) {
    let isValid = true;
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const subject = form.elements['subject'].value.trim();
    const message = form.elements['message'].value.trim();

    if (name.length < 2) {
        displayError('name', 'Name is required and must be at least 2 characters long.');
        isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayError('email', 'Please enter a valid email address (e.g., user@domain.com).');
        isValid = false;
    }
    if (subject === '') {
        displayError('subject', 'Subject cannot be empty.');
        isValid = false;
    }
    if (message.length < 10) {
        displayError('message', 'Message must be at least 10 characters long.');
        isValid = false;
    }
    return isValid;
}

function displayError(inputName, errorMessage) {
    const inputElement = document.getElementById(inputName);
    if (inputElement) {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error-message');
        errorElement.textContent = `* ${errorMessage}`;
        
        inputElement.parentNode.appendChild(errorElement);
        inputElement.classList.add('input-error');
    }
}

function clearErrorMessages() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
    
    const inputErrors = document.querySelectorAll('.input-error');
    inputErrors.forEach(input => input.classList.remove('input-error'));

    const successMessage = document.getElementById('form-success-message');
    if (successMessage) {
        successMessage.remove();
    }
}

function handleContactSubmission(form) {
    const name = form.elements['name'].value.trim();
    console.log(`--- Form Data Ready for Submission (Simulated) for ${name} ---`);

    const successDiv = document.createElement('div');
    successDiv.id = 'form-success-message';
    successDiv.classList.add('success-message');
    successDiv.innerHTML = `✅ **Thank you, ${name}!** Your message has been sent (simulated).`;
    
    form.parentNode.insertBefore(successDiv, form);
    form.reset();
}

function initializeMap() {
    
    const farmCoordinates = [-23.00, 30.30]; 
    const mapZoom = 12;

    
    const map = L.map('agristream-map').setView(farmCoordinates, mapZoom);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    L.marker(farmCoordinates).addTo(map)
        .bindPopup("<b>Agristream Farm</b><br>stand 162, Vuwani Tshivhulana.")
        .openPopup();
}


document.addEventListener('DOMContentLoaded', () => {
    
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            clearErrorMessages();
            
            if (validateContactForm(this)) {
                handleContactSubmission(this);
            }
        });
    }

    
    const mapElement = document.getElementById('agristream-map');
    if (mapElement && typeof L !== 'undefined') { 
        initializeMap();
    }
});



function validateEnquiryForm(form) {
    let isValid = true;
    const fullName = form.elements['full_name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const message = form.elements['message'].value.trim();

    if (fullName.length < 4) {
        displayEnquiryError('full_name', 'Full Name is required and must be at least 4 characters long.');
        isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayEnquiryError('email', 'Please enter a valid email address.');
        isValid = false;
    }
    if (phone !== '' && !/^\+?[\d\s]{7,15}$/.test(phone)) {
        displayEnquiryError('phone', 'Please enter a valid phone number format (e.g., +27 12 345 6789).');
        isValid = false;
    }
    if (message.length < 15) {
        displayEnquiryError('message', 'Please provide a detailed message of at least 15 characters.');
        isValid = false;
    }
    return isValid;
}

function handleEnquiryProcessing(form) {
    const enquiryType = form.elements['enquiry_type'].value;
    const fullName = form.elements['full_name'].value.trim();
    let responseText = '';

    switch (enquiryType) {
        case 'products':
            responseText = `Thank you, ${fullName}. For **Product** enquiries, we've sent a link to our current price list to your email.`;
            break;
        case 'livestock':
            responseText = `Thank you, ${fullName}. For **Livestock** enquiries, we will follow up with you directly via email to discuss specs and cost options within 24 hours.`;
            break;
        case 'community':
            responseText = `Thank you, ${fullName}. Your interest in our **Community Initiatives** is valued! Check your email for a detailed community program schedule and application form.`;
            break;
        case 'general':
        default:
            responseText = `Thank you, ${fullName}. Your **General Enquiry** has been logged. We will review your message and get back to you within 2 business days.`;
            break;
    }

    displayEnquiryResponse(responseText, form);
    console.log(`Enquiry successfully processed for type: ${enquiryType}`);
    form.reset();
}

function displayEnquiryError(inputName, errorMessage) {
    const inputElement = document.getElementById(inputName);
    if (inputElement) {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error-message');
        errorElement.textContent = `* ${errorMessage}`;
        
        inputElement.parentNode.appendChild(errorElement);
        inputElement.classList.add('input-error');
    }
}

function clearEnquiryFeedback() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
    
    const inputErrors = document.querySelectorAll('.input-error');
    inputErrors.forEach(input => input.classList.remove('input-error'));
    
    const previousResponse = document.getElementById('enquiry-response-message');
    if (previousResponse) {
        previousResponse.remove();
    }
}

function displayEnquiryResponse(message, form) {
    const responseDiv = document.createElement('div');
    responseDiv.id = 'enquiry-response-message';
    responseDiv.classList.add('response-message');
    responseDiv.innerHTML = `✅ **Enquiry Processed!** ${message}`;
    
    form.parentNode.insertBefore(responseDiv, form);
}


document.addEventListener('DOMContentLoaded', () => {
    const enquiryForm = document.querySelector('.enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            clearEnquiryFeedback();

            if (validateEnquiryForm(this)) {
                handleEnquiryProcessing(this);
            }
        });
    }
});