    function show_menu_items(){
        document.getElementById("show_menu_overlay").style.display="block";
    }

    function off_menu_overlay(){
        document.getElementById("show_menu_overlay").style.display="none";
    }
    function change_btn_color(buttonId){
        // JavaScript函數，用於改變按鈕的背景顏色
        var hopping_cart_btn = document.getElementById(buttonId);

        // 將按鈕B的背景顏色設置為橙色
        hopping_cart_btn.style.backgroundColor = 'orange';
        
        // 禁用按鈕A的點擊事件，防止再次改變按鈕B的顏色
        document.getElementById('add_btn').onclick = null;
    
    }

//當使用者按下加入購物籃按鈕時，會將商品資訊傳到shopping_cart.html，並顯示出來購買清單
    function selectedDessert(dessertId){
        var desser_info=document.getElementById(dessertId);
        var dessert_name=desser_info.querySelector('.dessert_title').innerText;
        var dessert_price=desser_info.querySelector('.price').innerText;

        // 檢查 sessionStorage 中是否已存在 selectedDesserts:把selectedDesserts轉成js可以處理的對象
       var selectedDesserts=JSON.parse(sessionStorage.getItem('selectedDesserts'))|| []

       var existingDessert=selectedDesserts.find(function(dessert){
            return dessert.name===dessert_name;
       });

       if(existingDessert){
            existingDessert.quantity+=1;
       }
       else{
            selectedDessert.push({name:dessert_name,price:dessert_price,quantity:1});
       }

       
       sessionStorage.setItem('selectedDesserts',JSON.stringify(selectedDesserts));
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