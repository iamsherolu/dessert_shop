    function show_menu_items(){
        document.getElementById("show_menu_overlay").style.display="block";
    }

    function off_menu_overlay(){
        document.getElementById("show_menu_overlay").style.display="none";
    } 

//點選dessert_menu_btn，可以跳到指定位置，且不會被上方menu擋住 
function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    var dessert_menu_layout_height = document.getElementById('dessert_menu_layout').offsetHeight;

    if (targetSection) {
        // 調整滾動位置，減去 dessert_menu_layout的高度
        window.scroll({
        top: targetSection.offsetTop - dessert_menu_layout_height,
        behavior: 'smooth'
        });
    }
    }

    var cartCount = localStorage.getItem('cartCount') || 0;
    var cartCountItem = document.getElementById('cartCount');
    cartCountItem.textContent = cartCount;
    
    function addToCart() {
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        cartCountItem.textContent = cartCount; 
    }
    