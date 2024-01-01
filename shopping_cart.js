    //從sessionStorage中讀取使用者所選的甜點的資訊

    var selectedDesserts=JSON.parse(sessionStorage.getItem('selectedDesserts'))||[];

    if(selectedDesserts.length >0){ //表示使用者至少有選擇一個甜點

        var total_price=0;//價格初始值為0
        var shopping_cart_info='';

        selectedDesserts.forEach(function(dessert) {
            var dessert_price=dessert.price*dessert.quantity;
            total_price+=dessert_price;

        selectedCakes.forEach(function(cake) {
        var tableElement = document.querySelector('.table').cloneNode(true);

        // 修改 tableElement 中各個元素的內容
        tableElement.querySelector('.dessert_name').innerText = cake.name;
        tableElement.querySelector('.price').innerText = '價格：' + cake.price;
        tableElement.querySelector('.num').innerText = cake.quantity;
        tableElement.querySelector('.total_price').innerText = '總價：' + cake.price * cake.quantity;

        // 將新的 table 元素添加到 content 元素中
        document.getElementById('content').appendChild(tableElement);
    })
})
}
    else {
        document.getElementById('cakeInfo').innerText = '請先選擇一個蛋糕';
    }

    // 更新數量的函數
    function updateQuantity(cakeName, increment) {
        var selectedCakes = JSON.parse(sessionStorage.getItem('selectedCakes')) || [];

        // 找到要更新數量的蛋糕
        var selectedCake = selectedCakes.find(function(cake) {
            return cake.name === cakeName;
        });

        if (selectedCake) {
            // 更新數量
            selectedCake.quantity += increment;

            // 最小數量為1
            if (selectedCake.quantity < 1) {
                // 如果數量等於0，直接刪除該蛋糕
                removeCake(cakeName);
            } else {
                // 將 updatedCakes 陣列存回 sessionStorage 中
                sessionStorage.setItem('selectedCakes', JSON.stringify(selectedCakes));

                // 重新載入頁面，以更新顯示
                location.reload();
            }
        }
    }
    // 刪除蛋糕的函數
    function removeCake(cakeName) {
        var selectedCakes = JSON.parse(sessionStorage.getItem('selectedCakes')) || [];

        // 找到要刪除的蛋糕的索引
        var cakeIndex = selectedCakes.findIndex(function(cake) {
            return cake.name === cakeName;
        });

        if (cakeIndex !== -1) {
            // 刪除該蛋糕
            selectedCakes.splice(cakeIndex, 1);

            // 將 updatedCakes 陣列存回 sessionStorage 中
            sessionStorage.setItem('selectedCakes', JSON.stringify(selectedCakes));

            // 重新載入頁面，以更新顯示
            location.reload();
        }
    }