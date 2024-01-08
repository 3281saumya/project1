const search = ()=>
{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("lawyer-list");
    const lawyer =document.querySelectorAll(".lawyers");
    const lname =document.getElementsByTagName('h4');

    for(var i=0; i < lname.length ; i++)
    {
        let match=lawyer[i].getElementsByTagName('h4')[0];

        if(match)
        {
         let textvalue = match.textContent || match.innerHTML

         if(textvalue.toUpperCase().indexOf(searchbox) > -1)
         {
            lawyer[i].style.display="lawyers";
         }
         else{
            lawyer[i].style.display="none";
         }
        }
    }
}