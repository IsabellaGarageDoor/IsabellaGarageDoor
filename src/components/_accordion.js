// Function to toggle accordion visibility and arrow rotation
function toggleAccordion(button) {
    const clickedContent = button.nextElementSibling;
    const clickedArrow = button.querySelector('.accordion-arrow');

    // Close any other open accordions
    document.querySelectorAll('.accordion-content').forEach(content => {
        if (content !== clickedContent && (content.style.maxHeight !== '0px' && content.style.maxHeight !== '')) {
            content.style.maxHeight = '0px';
            const arrow = content.previousElementSibling.querySelector('.accordion-arrow');
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
    });

    // Toggle the clicked accordion
    if (clickedContent.style.maxHeight === '0px' || clickedContent.style.maxHeight === '') {
        // Open it
        clickedContent.style.maxHeight = clickedContent.scrollHeight + 'px';
        clickedArrow.style.transform = 'rotate(180deg)';
    } else {
        // Close it
        clickedContent.style.maxHeight = '0px';
        clickedArrow.style.transform = 'rotate(0deg)';
    }
}

// Function to initialize accordions (set them to closed on load)
function initializeAccordions() {
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.maxHeight = '0px';
    });
}

// Ensure the `toggleAccordion` function is globally accessible
// This is necessary because your HTML uses `onclick="toggleAccordion(this)"`
window.toggleAccordion = toggleAccordion;

// Run initialization when the DOM is fully loaded for the first time
document.addEventListener('DOMContentLoaded', initializeAccordions);

// If you are using Astro's View Transitions, this ensures the accordions
// are re-initialized correctly after a "soft" navigation (client-side route change).
document.addEventListener('astro:after-swap', initializeAccordions);