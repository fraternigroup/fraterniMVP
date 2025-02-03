function toggleElements() {
    const socialIcons = document.querySelector('.social-icons');
    const buttons = document.querySelector('.cta-buttons');

    socialIcons.style.display = 'flex';
    
    socialIcons.style.justifyContent = 'center';
    socialIcons.style.alignItems = 'center';
    socialIcons.style.gap = '1rem';

    buttons.style.display = 'flex';
}

