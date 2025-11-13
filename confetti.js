'use strict';

function confetti() {
    // Settings
    const particles = 150;
    const spread = 70;
    const sizeMin = 3;
    const sizeMax = 12;
    const particleColors = [
        '#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#a29bfe',
        '#fd79a8', '#00cec9', '#fab1a0', '#e17055', '#74b9ff'
    ];

    // Create container
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(container);

    // Create particles
    for (let i = 0; i < particles; i++) {
        createParticle(container);
    }

    // Remove container after animation
    setTimeout(() => {
        document.body.removeChild(container);
    }, 5000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = sizeMin + Math.random() * (sizeMax - sizeMin);
    const color = particleColors[Math.floor(Math.random() * particleColors.length)];
    
    // Random shapes
    const shapes = ['circle', 'rectangle', 'triangle', 'heart'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        top: -50px;
        left: ${Math.random() * 100}%;
        border-radius: ${shape === 'circle' ? '50%' : shape === 'heart' ? '50% 50% 0 0' : '2px'};
        transform: ${shape === 'triangle' ? 'rotate(45deg)' : 'none'};
        opacity: ${0.7 + Math.random() * 0.3};
        pointer-events: none;
    `;

    // Special styling for hearts
    if (shape === 'heart') {
        particle.style.transform = 'rotate(45deg)';
        particle.style.borderRadius = '50% 50% 0 0';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.position = 'relative';
        
        const heartBefore = document.createElement('div');
        heartBefore.style.cssText = `
            content: '';
            position: absolute;
            top: -${size/2}px;
            left: 0;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
        `;
        
        const heartAfter = document.createElement('div');
        heartAfter.style.cssText = `
            content: '';
            position: absolute;
            top: 0;
            left: -${size/2}px;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
        `;
        
        particle.appendChild(heartBefore);
        particle.appendChild(heartAfter);
    }

    container.appendChild(particle);

    // Animation
    const animation = particle.animate([
        {
            transform: `translate3d(${(Math.random() - 0.5) * spread}vw, 0, 0) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate3d(${(Math.random() - 0.5) * spread * 2}vw, ${80 + Math.random() * 20}vh, 0) rotate(${360 * (2 + Math.random() * 2)}deg)`,
            opacity: 0.7
        }
    ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
        fill: 'forwards'
    });

    // Remove particle after animation
    animation.onfinish = () => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    };
}

// Versi Confetti yang Lebih Sederhana (Alternative)
function simpleConfetti() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(container);

    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#a29bfe'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const size = 5 + Math.random() * 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            top: -20px;
            left: ${Math.random() * 100}%;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            opacity: 0.8;
        `;

        container.appendChild(confetti);

        // Simple animation
        const animation = confetti.animate([
            {
                transform: `translateY(0) translateX(0) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translateY(100vh) translateX(${(Math.random() - 0.5) * 200}px) rotate(${360 * 3}deg)`,
                opacity: 0
            }
        ], {
            duration: 2000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
        });

        animation.onfinish = () => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        };
    }

    setTimeout(() => {
        if (container.parentNode) {
            document.body.removeChild(container);
        }
    }, 5000);
}

// Confetti dengan Emoji
function emojiConfetti() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        font-size: 20px;
    `;
    document.body.appendChild(container);

    const emojis = ['🎉', '🎊', '✨', '❤️', '🥳', '🎂', '🎁', '⭐', '💫', '🌟'];
    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        confetti.textContent = emoji;
        confetti.style.cssText = `
            position: absolute;
            top: -30px;
            left: ${Math.random() * 100}%;
            font-size: ${20 + Math.random() * 15}px;
            opacity: 0.9;
            user-select: none;
        `;

        container.appendChild(confetti);

        const animation = confetti.animate([
            {
                transform: `translateY(0) translateX(0) rotate(0deg) scale(1)`,
                opacity: 1
            },
            {
                transform: `translateY(100vh) translateX(${(Math.random() - 0.5) * 300}px) rotate(${360 * 2}deg) scale(0.5)`,
                opacity: 0
            }
        ], {
            duration: 2500 + Math.random() * 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
        });

        animation.onfinish = () => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        };
    }

    setTimeout(() => {
        if (container.parentNode) {
            document.body.removeChild(container);
        }
    }, 5000);
}

// Export functions untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { confetti, simpleConfetti, emojiConfetti };
}