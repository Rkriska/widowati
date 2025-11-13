// Inisialisasi variabel global
let currentSlide = 0;
let isTransitioning = false;
let confettiInterval;

// Fungsi untuk memulai musik
function playMusic() {
    const music = document.getElementById('background-music');
    music.volume = 0.5;
    
    const playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Autoplay prevented:', error);
            // Tampilkan tombol play manual jika autoplay gagal
            showManualPlayButton();
        });
    }
}

// Fungsi untuk menampilkan tombol play manual
function showManualPlayButton() {
    const startBtn = document.getElementById('startBtn');
    startBtn.innerHTML = '<i class="fas fa-play-circle"></i> Klik untuk Memulai Musik';
    startBtn.onclick = function() {
        playMusic();
        startPresentation();
    };
}

// Fungsi untuk memulai presentasi
function startPresentation() {
    document.getElementById('startScreen').classList.add('d-none');
    currentSlide = 1;
    showSlideSatu();
}

// Fungsi untuk menampilkan konfeti
function showConfetti() {
    // Simple confetti effect tanpa library external
    createConfetti();
}

// Fungsi untuk membuat confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9a9e', '#6b5b95'];
    const container = document.getElementById('content');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.5};
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: fall ${Math.random() * 3 + 2}s linear forwards;
        `;
        container.appendChild(confetti);
        
        // Hapus confetti setelah animasi selesai
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// CSS untuk confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Fungsi untuk berpindah slide
function nextSlide() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    currentSlide++;
    
    // Sembunyikan semua slide
    document.querySelectorAll('.slides, #slideSatu, #slideLima, #slideEnam, #slideTujuh').forEach(slide => {
        slide.classList.add('d-none');
    });
    
    // Sembunyikan tap indicator
    document.getElementById('tap').classList.add('d-none');
    
    // Tampilkan slide berikutnya berdasarkan currentSlide
    switch(currentSlide) {
        case 1:
            showSlideSatu();
            break;
        case 2:
            showSlideDua();
            break;
        case 3:
            showSlideTiga();
            break;
        case 4:
            showSlideEmpat();
            break;
        case 5:
            showSlideLima();
            break;
        case 6:
            showSlideEnam();
            break;
        case 7:
            showSlideTujuh();
            break;
    }
}

// Slide 1: Gambar HBD
function showSlideSatu() {
    const slideSatu = document.getElementById('slideSatu');
    slideSatu.classList.remove('d-none');
    
    setTimeout(() => {
        document.getElementById('tap').classList.remove('d-none');
        isTransitioning = false;
    }, 3000);
}

// Slide 2: Pesan 1
function showSlideDua() {
    const slideDua = document.getElementById('slideDua');
    slideDua.classList.remove('d-none');
    
    // TypeIt untuk pesan pertama
    new TypeIt("#teks1", {
        strings: [
            "Happy late birthday kak yang ke __!!",
            "List doa ku sholat jumat ini",
            "Semoga kakak selalu diberikan kesehatan mental dan fisik ",
            "Semoga Tajir konglo ampe 7 turunan",
            "Semoga ke jogja lagi yaa truss mainnn <3",
        ],
        startDelay: 500,
        speed: 30,
        waitUntilVisible: true,
        afterComplete: function() {
            setTimeout(() => {
                document.getElementById('tap').classList.remove('d-none');
                isTransitioning = false;
            }, 1000);
        }
    }).go();
}

// Slide 3: Pesan 2
function showSlideTiga() {
    const slideTiga = document.getElementById('slideTiga');
    slideTiga.classList.remove('d-none');
    
    // TypeIt untuk pesan kedua
    new TypeIt("#teks2", {
        strings: [
            "PLIS SURVIVE YA DI KALIMANTAN ",
            "barakallah fi umrik, jan bosen bosen ke jogja fak.",
            "Wish all you the best",
            "- 0823136647**"
        ],
        startDelay: 500,
        speed: 30,
        waitUntilVisible: true,
        afterComplete: function() {
            setTimeout(() => {
                document.getElementById('tap').classList.remove('d-none');
                isTransitioning = false;
            }, 1000);
        }
    }).go();
}

// Slide 4: Pertanyaan
function showSlideEmpat() {
    const slideEmpat = document.getElementById('slideEmpat');
    slideEmpat.classList.remove('d-none');
    
    const btnGak = document.getElementById('gak');
    const btnSuka = document.getElementById('suka');
    
    btnGak.addEventListener('click', function() {
        const x = Math.random() * (window.innerWidth - 300);
        const y = Math.random() * (window.innerHeight - 200);
        slideEmpat.style.position = 'absolute';
        slideEmpat.style.left = x + 'px';
        slideEmpat.style.top = y + 'px';
    });

    btnSuka.addEventListener('click', function() {
        slideEmpat.style.animation = 'bounceOut 0.8s forwards';
        setTimeout(() => {
            isTransitioning = false;
            nextSlide();
        }, 800);
    });
    
    isTransitioning = false;
}

// Slide 5: Hati
function showSlideLima() {
    const slideLima = document.getElementById('slideLima');
    const trims = document.getElementById('trims');
    
    slideLima.classList.remove('d-none');
    
    // TypeIt untuk terima kasih
    new TypeIt("#trims", {
        strings: ["Terimakasih."],
        startDelay: 500,
        speed: 100,
        loop: false,
        waitUntilVisible: true,
    }).go();

    setTimeout(() => {
        trims.classList.remove('d-none');
    }, 800);

    setTimeout(() => {
        document.getElementById('tap').classList.remove('d-none');
        isTransitioning = false;
    }, 3000);
}

// Slide 6: Galeri Foto
function showSlideEnam() {
    const slideEnam = document.getElementById('slideEnam');
    const nextBtn = document.getElementById('nextBtn');
    
    slideEnam.classList.remove('d-none');
    
    nextBtn.addEventListener('click', function() {
        isTransitioning = false;
        nextSlide();
    });
    
    isTransitioning = false;
}

// Slide 7: Pesan Akhir
function showSlideTujuh() {
    const slideTujuh = document.getElementById('slideTujuh');
    const footer = document.getElementById('footer');
    const restartBtn = document.getElementById('restartBtn');
    
    slideTujuh.classList.remove('d-none');
    footer.classList.remove('d-none');
    
    // Tampilkan konfeti
    showConfetti();
    
    // Loop konfeti setiap 5 detik
    confettiInterval = setInterval(() => {
        showConfetti();
    }, 5000);

    restartBtn.addEventListener('click', function() {
        clearInterval(confettiInterval);
        restartPresentation();
    });
    
    isTransitioning = false;
}

// Fungsi restart presentasi
function restartPresentation() {
    currentSlide = 0;
    
    // Sembunyikan semua elemen
    document.querySelectorAll('.slides, #slideSatu, #slideLima, #slideEnam, #slideTujuh, #tap, #footer').forEach(el => {
        el.classList.add('d-none');
    });
    
    // Reset elemen yang perlu direset
    document.getElementById('trims').classList.add('d-none');
    document.getElementById('slideEmpat').style = '';
    
    // Hapus semua confetti
    document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
    
    // Tampilkan start screen
    document.getElementById('startScreen').classList.remove('d-none');
}

// Touch gesture support
let touchStartX = 0;
let touchStartY = 0;

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Event listener untuk tombol start
    document.getElementById('startBtn').addEventListener('click', function() {
        playMusic();
        startPresentation();
    });
    
    // Event listener untuk tap/klik di mana saja
    document.body.addEventListener('click', function(e) {
        // Jangan trigger jika klik pada elemen yang memiliki event handler sendiri
        if (e.target.closest('#startBtn') || 
            e.target.closest('#gak') || 
            e.target.closest('#suka') ||
            e.target.closest('#nextBtn') ||
            e.target.closest('#restartBtn') ||
            e.target.closest('.photo-card')) {
            return;
        }
        
        const tap = document.getElementById('tap');
        if (!tap.classList.contains('d-none') && !isTransitioning) {
            nextSlide();
        }
    });
    
    // Touch events untuk mobile
    document.body.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.body.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        // Swipe kiri untuk next slide
        if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) && diffX > 0) {
            const tap = document.getElementById('tap');
            if (!tap.classList.contains('d-none') && !isTransitioning) {
                nextSlide();
            }
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            const tap = document.getElementById('tap');
            if (!tap.classList.contains('d-none') && !isTransitioning) {
                nextSlide();
            }
        } else if (e.key === 'Escape') {
            restartPresentation();
        }
    });
    
    // Preload images untuk performance yang lebih baik
    preloadImages();
});

// Fungsi untuk preload images
function preloadImages() {
    const imageUrls = [
        './img/hbd1.png',
        './img/background.jpg',
        'https://via.placeholder.com/300x300/ff6b6b/ffffff?text=Photo+1',
        'https://via.placeholder.com/300x300/4ecdc4/ffffff?text=Photo+2',
        'https://via.placeholder.com/300x300/ffe66d/333333?text=Photo+3'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Error handling global
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
    // Fallback ke slide berikutnya jika ada error
    if (isTransitioning) {
        isTransitioning = false;
        setTimeout(() => nextSlide(), 1000);
    }
});

// Service Worker untuk caching (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('SW registered: ', registration);
        }).catch(function(registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}