   document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');
            
            // Filter projects based on category
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filterValue = button.getAttribute('data-filter');
                    
                    projectCards.forEach(card => {
                        if (filterValue === 'all') {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 10);
                        } else {
                            const categories = card.getAttribute('data-category').split(' ');
                            
                            if (categories.includes(filterValue)) {
                                card.style.display = 'block';
                                setTimeout(() => {
                                    card.style.opacity = '1';
                                    card.style.transform = 'translateY(0)';
                                }, 10);
                            } else {
                                card.style.opacity = '0';
                                card.style.transform = 'translateY(20px)';
                                setTimeout(() => {
                                    card.style.display = 'none';
                                }, 300);
                            }
                        }
                    });
                });
            });
            
            // Add animation delay to project cards for staggered effect
            projectCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });