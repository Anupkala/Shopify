// accessing by id and classes to update data
const checkboxes = document.querySelectorAll('.chocolate');
const selectedList = document.getElementById('selected');
const totalPriceElement = document.getElementById('total-price');
const noOfItems=document.getElementById('items-selected');

//some variables to track total price ,total items and an array to stored selected chocolates
let totalPrice = 0;
let items=0;
const maxChocolates = 8;
const selectedChocolates = [];

//visiting and checking every checked box
checkboxes.forEach(checkbox => {

    checkbox.addEventListener('change', () => {
        //accessing price and name of chocolate
        const price = parseFloat(checkbox.getAttribute('price'));
        const chocolateName = checkbox.nextSibling.textContent.trim();
        //checking if box is checked or not
        if (checkbox.checked) {
            //again checking if number of items is less than 8 or not if its less pushing it in array else
            //showing alert and unchecking the box 
            if (selectedChocolates.length < maxChocolates) {
                selectedChocolates.push({ name: chocolateName, price: price });
                totalPrice += price; //updating price and total items variables
                items+=1;
            } else {
                checkbox.checked = false;
                alert(`You can select a maximum of ${maxChocolates} chocolates.`);
            }
        
        }
        //if the box is unchecked then finding index of that element and removing it from array and updating 
        //total price and number of items 
        else {
            const index = selectedChocolates.findIndex(choc => choc.name === chocolateName);
            if (index !== -1) {
                selectedChocolates.splice(index, 1);
                totalPrice -= price;
                items-=1;
            }
        }
 //calling both functions to update and display the data
        updateSelectedList();
        updateTotalPrice();
    });
});
//function to update list of selected items and to add items to list
function updateSelectedList() {
    selectedList.innerHTML = '';
    selectedChocolates.forEach(chocolate => {
        const listItem = document.createElement('li');
        listItem.textContent = `${chocolate.name}`;
        selectedList.appendChild(listItem);
    });
}
//function to update total price and display it
function updateTotalPrice() {
    totalPriceElement.textContent = `RS ${totalPrice}`;
    noOfItems.textContent= `ITEMS = ${items}`;

}
