
// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Lead Capture Modal
const leadModal = document.getElementById('lead-modal');
const closeModalBtn = document.getElementById('close-modal');
const leadForm = document.getElementById('lead-form');

window.addEventListener('load', () => {
    if (!sessionStorage.getItem('modalShown')) {
        setTimeout(() => {
            leadModal.classList.remove('hidden');
        }, 2000);
    }
});

closeModalBtn.addEventListener('click', () => {
    leadModal.classList.add('hidden');
    sessionStorage.setItem('modalShown', 'true');
});

leadModal.addEventListener('click', (e) => {
    if (e.target === leadModal) {
        leadModal.classList.add('hidden');
        sessionStorage.setItem('modalShown', 'true');
    }
});

leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    leadModal.classList.add('hidden');
    sessionStorage.setItem('modalShown', 'true');
    leadForm.reset();
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Property listings
const properties = [
    {
        id: 1,
        title: "Trident Hills",
        type: "For Sale",
        price: "Call for price",
        location: "Panchkula Extension",
        beds: 4,
        baths: "4 + Servant Room",
        sqft: 3207,
        description: "Experience luxury living where the hills meet high-end design.",
        images: [
            "public/images/tridenthills/Township.jpeg",
            "public/images/tridenthills/balcony.jpeg",
            "public/images/tridenthills/building.jpeg",
            "public/images/tridenthills/dam.jpeg",
            "public/images/tridenthills/exterior again.jpeg",
            "public/images/tridenthills/exterior building.jpeg",
            "public/images/tridenthills/exterior of floor.jpeg",
            "public/images/tridenthills/greenry.jpeg",
            "public/images/tridenthills/kitchen.jpeg",
            "public/images/tridenthills/lake.jpeg",
            "public/images/tridenthills/living room.jpeg",
            "public/images/tridenthills/livingroom.jpeg",
            "public/images/tridenthills/livinig room2.jpeg",
            "public/images/tridenthills/main living area.jpeg",
            "public/images/tridenthills/nature.jpeg",
            "public/images/tridenthills/sitting are.jpeg",
            "public/images/tridenthills/sofa area.jpeg",
            "public/images/tridenthills/sunset.jpeg",
            "public/images/tridenthills/tearrace sitting.jpeg",
            "public/images/tridenthills/terrace.jpeg",
            "public/images/tridenthills/township from above.jpeg",
            "public/images/tridenthills/window.jpeg"
        ],
        highlights: [
            "Spacious 4 BHK Residences + Servant Room",
            "3207 sq. ft. Super Area",
            "5-Star Clubhouse Facilities",
            "Fully Gated Township with 24x7 Security",
            "Surrounded by Nature"
        ],
        amenities: [
            "Designer Modular Kitchen",
            "Wide Balconies",
            "Air-Conditioned Lobbies",
            "Private Parking",
            "Power Backup",
            "Landscaped Parks"
        ]
    },
    {
        id: 2,
        title: "DLF Valley Garden",
        type: "For Sale",
        price: "Call for price",
        location: "Panchkula Extension",
        beds: 4,
        baths: "4 + Servant Room",
        sqft: 3207,
        description: "Perfect home for elevated lifestyles.",
        images: [
            "public/images/dlfvalleygardens/2nd bedroom.webp",
            "public/images/dlfvalleygardens/Bedroom.webp",
            "public/images/dlfvalleygardens/Clubhouse.webp",
            "public/images/dlfvalleygardens/Dlf complex.webp",
            "public/images/dlfvalleygardens/ariel view.webp",
            "public/images/dlfvalleygardens/clubhouse_indoors.webp",
            "public/images/dlfvalleygardens/complex.webp",
            "public/images/dlfvalleygardens/dining area.webp",
            "public/images/dlfvalleygardens/kitchen.webp",
            "public/images/dlfvalleygardens/living room.webp",
            "public/images/dlfvalleygardens/pool.webp",
            "public/images/dlfvalleygardens/township.webp"
        ],
        highlights: [
            "Walking Trails & Nature Parks",
            "Foothills of Shivalik",
            "Part of Smart Township",
            "Near Kasauli, Morni Hills",
            "Easy access to Chandigarh"
        ],
        amenities: [
            "Designer Modular Kitchen",
            "Wide Balconies",
            "Air-Conditioned Lobbies",
            "Private Parking",
            "Power Backup",
            "Landscaped Parks"
        ]
    }
];

const propertyListings = document.getElementById('property-listings');
properties.forEach(property => {
    const highlightsList = property.highlights.map(h => `<li>${h}</li>`).join('');
    const amenitiesList = property.amenities.map(a => `<li>${a}</li>`).join('');
    const imageSlides = property.images.map((img, index) => `
        <div class="w-full h-64 object-cover ${index !== 0 ? 'hidden' : ''}" data-slide="${index}">
            <img src="${img}" alt="${property.title}" class="w-full h-full object-cover" loading="lazy">
        </div>
    `).join('');

    const propertyCard = `
        <div class="property-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-500 hover:shadow-2xl">
            <div class="relative">
                <div class="carousel-container w-full h-64 overflow-hidden relative">
                    ${imageSlides}
                </div>
                <button class="carousel-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"><i class="fas fa-chevron-right"></i></button>
                <div class="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">${property.type}</div>
            </div>
            <div class="p-6">
                <h3 class="text-2xl font-bold mb-2 text-secondary">${property.title}</h3>
                <p class="text-gray-600 mb-4 font-semibold"><i class="fas fa-map-marker-alt text-primary mr-2"></i>${property.location}</p>
                <div class="flex justify-between items-center mb-4 border-b pb-4">
                    <span class="text-2xl font-bold text-primary">${property.price}</span>
                    <div class="flex space-x-4">
                        <span class="text-gray-700 font-medium"><i class="fas fa-bed text-primary mr-1"></i> ${property.beds}</span>
                        <span class="text-gray-700 font-medium"><i class="fas fa-bath text-primary mr-1"></i> ${property.baths}</span>
                        <span class="text-gray-700 font-medium"><i class="fas fa-ruler-combined text-primary mr-1"></i> ${property.sqft} sqft</span>
                    </div>
                </div>
                <p class="text-gray-700 mb-6">${property.description}</p>
                <div class="mb-6">
                    <h4 class="text-xl font-bold text-dark mb-3">Key Highlights</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">${highlightsList}</ul>
                </div>
                <div class="mb-6">
                    <h4 class="text-xl font-bold text-dark mb-3">Amenities</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">${amenitiesList}</ul>
                </div>
                <a href="#contact" class="block text-center bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">Book Site Visit</a>
            </div>
        </div>
    `;
    propertyListings.innerHTML += propertyCard;
});

document.querySelectorAll('.property-card').forEach(card => {
    const prevBtn = card.querySelector('.carousel-prev');
    const nextBtn = card.querySelector('.carousel-next');
    const slides = card.querySelectorAll('.carousel-container > div');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('hidden', i !== index);
        });
    }

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});
