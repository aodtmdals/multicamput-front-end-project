const headerDropdownItem = document.querySelectorAll(".header-dropdown-item");
const headerMoreBtn = document.getElementById("dropdown-btn");
const headerDropdown = document.getElementById("subMenuItem1"); 


function showHeaderDropdown(){
    headerDropdown.classList.remove("hidden");
    headerMoreBtn.classList.add("select-dropdown");
}
function hiddenHeaderDropdown(){
    headerDropdown.classList.add("hidden");
    headerMoreBtn.classList.remove("select-dropdown");
}


headerMoreBtn.addEventListener('click', function(){
    headerClickCount++;
    if(headerClickCount%2 == 0){
        hiddenHeaderDropdown();
    }else{
        showHeaderDropdown();
    }
});

for(let item = 0; item < headerDropdownItem.length; item++){
    headerDropdownItem[item].addEventListener('click', function(event){
        headerClickCount = 0;
        event.preventDefault();
        hiddenHeaderDropdown();
    });
}