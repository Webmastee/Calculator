// Product data for each system
const productData = {
  phantom: {
    name: "Phantom",
    tagline: "Ultimate Performance",
    processor: "Intel Core i9-14900K",
    graphics: "NVIDIA RTX 4090",
    memory: "64GB DDR5-6000",
    storage: "2TB NVMe SSD",
    cooling: "Custom Liquid Cooling",
    power: "1200W Platinum",
    price: "4,999"
  },
  shadow: {
    name: "Shadow",
    tagline: "Stealth Performance",
    processor: "Intel Core i7-14700K",
    graphics: "NVIDIA RTX 4080",
    memory: "32GB DDR5-5600",
    storage: "1TB NVMe SSD",
    cooling: "AIO Liquid Cooling",
    power: "850W Gold",
    price: "3,299"
  },
  nova: {
    name: "Nova",
    tagline: "Explosive Power",
    processor: "AMD Ryzen 9 7950X",
    graphics: "NVIDIA RTX 4070 Ti",
    memory: "32GB DDR5-5200",
    storage: "1TB NVMe SSD",
    cooling: "Premium Air Cooling",
    power: "750W Gold",
    price: "2,799"
  },
  vortex: {
    name: "Vortex",
    tagline: "Maximum Overdrive",
    processor: "AMD Ryzen 7 7700X",
    graphics: "NVIDIA RTX 4060 Ti",
    memory: "16GB DDR5-4800",
    storage: "500GB NVMe SSD",
    cooling: "High-Performance Air",
    power: "650W Bronze",
    price: "1,899"
  }
};

// Initialize Swiper
let systemsSwiper;

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper
  systemsSwiper = new Swiper('.systems-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    on: {
      init: function() {
        // Set initial product data
        updateProductDetails('phantom');
      },
      slideChange: function() {
        // Update product details when slide changes
        const activeSlide = this.slides[this.realIndex];
        const systemId = activeSlide.getAttribute('data-system');
        updateProductDetails(systemId);
      }
    }
  });

  // Add click event listeners to slides
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach(slide => {
    slide.addEventListener('click', function() {
      const systemId = this.getAttribute('data-system');
      updateProductDetails(systemId);
      
      // Add visual feedback
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });

  // Add hover effects for better UX
  slides.forEach(slide => {
    slide.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    
    slide.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});

// Function to update product details
function updateProductDetails(systemId) {
  const data = productData[systemId];
  if (!data) return;

  // Update all product details with smooth transitions
  const elements = {
    'system-name': data.name,
    'system-tagline': data.tagline,
    'processor': data.processor,
    'graphics': data.graphics,
    'memory': data.memory,
    'storage': data.storage,
    'cooling': data.cooling,
    'power': data.power,
    'price': data.price
  };

  // Add fade out effect
  const productDetails = document.querySelector('.product-details');
  productDetails.style.opacity = '0.7';
  productDetails.style.transform = 'translateY(10px)';

  // Update content
  Object.keys(elements).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = elements[id];
    }
  });

  // Add fade in effect
  setTimeout(() => {
    productDetails.style.opacity = '1';
    productDetails.style.transform = 'translateY(0)';
  }, 200);

  // Update active slide styling
  updateActiveSlide(systemId);
}

// Function to update active slide styling
function updateActiveSlide(systemId) {
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach(slide => {
    const slideSystemId = slide.getAttribute('data-system');
    if (slideSystemId === systemId) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.9)';
  }
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    systemsSwiper.slidePrev();
  } else if (e.key === 'ArrowRight') {
    systemsSwiper.slideNext();
  }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next slide
      systemsSwiper.slideNext();
    } else {
      // Swipe right - previous slide
      systemsSwiper.slidePrev();
    }
  }
}

// Add performance optimization
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
    if (systemsSwiper) {
      systemsSwiper.update();
    }
  }, 250);
});