const books= document.getElementsByClassName("item");
const total = document.getElementById("total");
const availablebooks = Array.from(books);


//const pendingBooks = document.getElementsByClassName("pendingpurchaseditem");
//const pendingPurchasedBooks = Array.from(pendingBooks);
var selectedBooks=[];



document.addEventListener("DOMContentLoaded", async function () {

    if(availablebooks.length>0){
 
    localStorage.setItem("purchasedBook",availablebooks)
    console.log(availablebooks);

        availablebooks.forEach(element => {
        element.addEventListener("click",() => {
            selectedBooks = element;

            const itemDivImage = element.querySelector("img.book")
            //const image = itemDiv.querySelector("img.book")
            const altText = itemDivImage.alt;
            //console.log(altText)
            //console.log(selectedBooks);
            localStorage.setItem("selectedBook",altText);
        });
     
    
    });
    }

    const pendingPurchasedBook = localStorage.getItem("selectedBook")
    //console.log(pendingPurchasedBook);

    if(pendingPurchasedBook!=null){
        //const  pendingPurchasedBookText = document.getElementsByClassName("pendingpurchaseditem").firstChild.innerHTML;
        var pendingPurchasedBookText = document.getElementById("PPI0").firstElementChild.innerHTML;
 

      
        pendingPurchasedBookText = pendingPurchasedBook;
       
        document.getElementById("PPI0").firstElementChild.textContent = pendingPurchasedBookText;
        total.lastElementChild.innerHTML = `<h2> ${150} Kr</h2>`;
        
    }
    /**
     * const pendingPurchasedBooks = localStorage.getItem("selectedBooks")
    if(pendingPurchasedBooks.length >0){
        
        const purchaseOverview = document.querySelectorAll(".pendingpurchaseditem")
        console.log(purchaseOverview)
        const bookTitles = pendingPurchasedBooks;
        
        

        
    //localStorage.setItem("pendingPurchasedBooks",pendingPurchasedBooks);
    //Här vill jag koppla "pendingpurchaseditem till selectedBook"
    
    
    
    }
     */
    
  

   
})