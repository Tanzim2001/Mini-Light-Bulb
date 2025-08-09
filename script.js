document.addEventListener('DOMContentLoaded', function() {
    const bulb = document.querySelector('.bulb');
    const string = document.querySelector('.string');
    const container = document.querySelector('.container');
    
    // Create room light effect element
    const roomLight = document.createElement('div');
    roomLight.className = 'room-light';
    container.appendChild(roomLight);
    
    // Track bulb state
    let isBulbOn = false;
    
    string.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the bulb click event from triggering
        
        // Animate string pull
        string.classList.add('string-pulled');
        
        // Toggle bulb state after small delay to simulate pulling action
        setTimeout(function() {
            isBulbOn = !isBulbOn;
            
            if (isBulbOn) {
                bulb.classList.add('bulb-on');
                roomLight.classList.add('on');
            } else {
                bulb.classList.remove('bulb-on');
                roomLight.classList.remove('on');
            }
            
            // Reset string position after a delay
            setTimeout(function() {
                string.classList.remove('string-pulled');
            }, 300);
        }, 150);
    });
});