/* 
    Raj Jewellery Workshop - Custom JavaScript
*/

// Configuration
const WHATSAPP_NUMBER = "916379109151"; // Replace with actual business WhatsApp number (include country code, without +)

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('mainNavbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll Reveal Animation Trigger
        revealElements();
    });

    // Initial check for navbar and reveal
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    revealElements();

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
                
                // Scroll to element with offset for navbar
                const navbarHeight = navbar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Collection Data ---
    const collectionItems = [
        "jewellery-01.jpg",
        "jewellery-02.jpg",
        "jewellery-03.jpg",
        "jewellery-04.jpg",
        "jewellery-05.jpg",
        "jewellery-06.jpg",
        "jewellery-07.jpg",
        "jewellery-08.jpg",
        "jewellery-09.jpg",
        "jewellery-10.jpg"
    ];

    const galleryGrid = document.getElementById('gallery-grid');

    if (galleryGrid) {
        // Change grid class for a masonry-like or 5-column look on desktop if possible
        // We'll use 2 columns on mobile, 3 on tablet, 5 on desktop (col-6 col-md-4 col-lg-auto)
        collectionItems.forEach((img, index) => {
            const delay = (index % 5) * 0.1;
            const itemHTML = `
                <div class="col-6 col-md-4 col-lg flex-lg-grow-0 fade-in-up gallery-col" style="transition-delay: ${delay}s;">
                    <div class="gallery-card bg-deep-black border-gold-thin h-100">
                        <div class="gallery-img-container overflow-hidden position-relative cursor-pointer h-100" onclick="openModal('${img}')">
                            <img src="images/collection/${img}" alt="Jewellery Design" loading="lazy" class="img-fluid w-100 object-fit-cover lazy placeholder-img h-100" onerror="this.src='https://placehold.co/600x600/17120C/C9A227?text=Jewellery+${index+1}'">
                            <div class="gallery-img-overlay d-flex align-items-center justify-content-center">
                                <i class="bi bi-zoom-in text-gold display-6"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            galleryGrid.innerHTML += itemHTML;
        });
    }

    // --- Scroll Reveal Animation Logic ---
    function revealElements() {
        const revealElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Point at which element becomes visible

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
});

// --- Modal Functionality & Dynamic WhatsApp Link ---
function openModal(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
    
    // Set actual image if it's not a placeholder, else set the URL directly
    const isUrl = imageSrc.startsWith('http');
    modalImage.src = isUrl ? imageSrc : `images/collection/${imageSrc}`;
    
    // Set dynamic WhatsApp URL
    const message = `Hello, I found this jewellery design on your website and would like to know more about it.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    modalWhatsAppBtn.href = whatsappUrl;
    modalWhatsAppBtn.setAttribute('target', '_blank');
    
    // Show Modal
    const collectionModal = new bootstrap.Modal(document.getElementById('collectionModal'));
    collectionModal.show();
}

// --- Global WhatsApp Function ---
function openWhatsApp(type) {
    let message = "Hello, I found Raj Jewellery Workshop through your website. I would like to know more about your jewellery.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// --- Specific Item WhatsApp Function ---
function enquireAboutItem(itemName) {
    const message = `Hello, I am interested in the ${itemName} shown on your website. Could you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}
