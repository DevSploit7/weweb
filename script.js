
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
        image: "public/images/tridenthills/township from above.jpeg",
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
        image: "public/images/dlfvalleygardens/Dlf complex.webp",
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
    const propertyCard = `
        <div class="property-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-500 hover:shadow-2xl">
            <div class="relative">
                <img src="${property.image}" alt="${property.title}" class="w-full h-64 object-cover" loading="lazy">
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
