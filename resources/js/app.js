var UIcontroller = (function() {
    
    var DOMstrings = {
        nav_row: 'nav-row';
        
    };
    
    return {
        
        stickyNav: function () {
            if (document.body.scrollTop < 15) {
                document.querySelector(DOMstrings.nav_row).classList.remove('sticky');
            } else {
                document.querySelector(DOMstrings.nav_row).classList.add('sticky');
            }
        },
        
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
    
});

var controller = (function() {
    
    var setupEventListeners = function(UIcntrl) {
        var DOM = UIcntrl.getDOMstrings();
        
        
        document.addEventListener('scroll', UIcntrl.stickyNav);
    };
    
    return {
        init: function() {
            console.log('Application launched succesfully');
            
            
            setupEventListeners();
        }
    };
    
})(UIcontroller);

controller.init();