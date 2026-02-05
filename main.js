onload = () => {
    document.body.classList.remove("container");

    const button = document.querySelector('.button button');
    if (button) {
        button.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'button_click', {
                    'event_category': 'engagement',
                    'event_label': 'special_gift_button',
                    'transport_type': 'beacon'
                });
            }
        });
    }
};
