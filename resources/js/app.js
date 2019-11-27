var UIcontroller = (function () {
    
    var DOMstrings = {
        nav_bar: 'nav',
        logoTxt1: '#logo-printx',
        logoTxt2: '#logo-sol'
        
    };
    
    var animateCSS = function (e, animation, speed, delay, infinite, callback) {
        var node = document.querySelector(e);
        var del = 'delay-' + delay + 's';
        node.classList.add('animated', animation);
        infinite ? node.classList.add('infinite') : true;
        if (speed) {
            node.classList.add(speed);
        }
        if (delay) {
            node.classList.add(del);
        }
        
        function handleAnimationEnd() {
            
            node.classList.remove('animated', animation, speed, del, 'infinite');
            node.removeEventListener('animationend', handleAnimationEnd);
            
            if (typeof callback === 'function') {callback(); }
        }
        
        node.addEventListener('animationend', handleAnimationEnd);
    };
    
    return {
        
        stickyNav: function () {
            var sticky = document.querySelector(DOMstrings.nav_bar).offsetTop + 1;
            /*console.log(sticky);
            console.log(window.pageYOffset);*/
            if (window.pageYOffset <= sticky) {
                document.querySelector(DOMstrings.nav_bar).classList.remove('sticky');
                if (document.querySelector(DOMstrings.logoTxt1).style.visibility === 'hidden') {
                    document.querySelector(DOMstrings.logoTxt1).style.visibility = 'visible';
                    animateCSS(DOMstrings.logoTxt1, 'fadeIn', 'slow', 0, 0, function () {
                        return true;
                    });
                    document.querySelector(DOMstrings.logoTxt2).style.visibility = 'visible';
                    animateCSS(DOMstrings.logoTxt2, 'fadeIn', 'fast', 0, 0, function () {
                        return true;
                    });
                }
            } else {
                document.querySelector(DOMstrings.nav_bar).classList.add('sticky');
                /*Animation*/
                if (document.querySelector(DOMstrings.logoTxt1).style.visibility === 'visible') {
                    animateCSS(DOMstrings.logoTxt1, 'fadeOut', 'faster', 0, 0, function () {
                        document.querySelector(DOMstrings.logoTxt1).style.visibility = 'hidden';
                    });
                    animateCSS(DOMstrings.logoTxt2, 'fadeOut', 'faster', 0, 0, function () {
                        document.querySelector(DOMstrings.logoTxt2).style.visibility = 'hidden';
                    });
                }
                
            }
        },
        
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
    
})();

var controller = (function (UIctrl) {
    
    var setupEventListeners = function () {
        var DOM = UIctrl.getDOMstrings();
        
        
        document.addEventListener('scroll', UIctrl.stickyNav);
    };
    
    return {
        init: function () {
            console.log('Application launched succesfully');
            
            
            setupEventListeners();
        }
    };
    
})(UIcontroller);

controller.init();