var seletedRow=null;

const clearData=()=>{
    document.getElementById("bookname").value  ="";
    document.getElementById("authorname").value="";
    document.getElementById("pages").value     ="";
}

document.getElementById("books-form").addEventListener('submit',(e)=>{
    e.preventDefault();
   const Book=  document.getElementById("bookname").value;  
   const Author=  document.getElementById("authorname").value;
   const pages= document.getElementById("pages").value;   
   
   if(Book=="" ||Author==""|| pages==""){
    alert("Please fill the fields");
   }

   else{
     if(seletedRow==null){
        const list=document.getElementById("book-list");
        const tr=document.createElement("tr");

        tr.innerHTML=`
        <td>${Book}</td>
        <td>${Author}</td>
        <td>${pages}</td>
        <td>
        <a href="#" class="btn btn-warning edit">Edit</a>
        <a href="#" class="btn btn-danger delete">Delete</a>
        <a href="#" class="btn btn-primary info">Info</a>
        </td>
        `;

        list.appendChild(tr)
        seletedRow=null
     }
     else{
        seletedRow.children[0].textContent=Book;
        seletedRow.children[1].textContent=Author;
        seletedRow.children[2].textContent=pages;
        seletedRow=null
     }
     clearData();
   };
   
})




document.getElementById("book-list").addEventListener('click', (e)=>{
    target=e.target;
    // edit
    if(target.classList.contains("edit")){
        seletedRow= target.parentElement.parentElement;
        document.getElementById("bookname").value = seletedRow.children[0].textContent;
        document.getElementById("authorname").value=seletedRow.children[1].textContent
        document.getElementById("pages").value=seletedRow.children[2].textContent;     
    }
    // Delete
    else if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
    }
    
    else if(target.classList.contains("info")){
        seletedRow= target.parentElement.parentElement;
        const Book=seletedRow.children[0].innerHTML;
        const Author=seletedRow.children[1].innerHTML;
        const pages=seletedRow.children[2].innerHTML;

      const information=document.getElementById("information");
      const heading=document.createElement("h1");
      const heading1=document.createElement("h2");
      const paragraph=document.createElement("p");

      heading.innerHTML=`
      The name of books is:  ${Book}
      `
      heading1.innerHTML=`
      The name of books Author is:  ${Author}
      `
      paragraph.innerHTML=`
      The Number of pages are:  ${pages}
      `
      information.appendChild(heading)
      information.appendChild(heading1)
      information.appendChild(paragraph)

      
        
    }
})

// Search
const Search=()=> {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchvalue");
    filter = input.value.toUpperCase();
    table = document.getElementById("books-data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
