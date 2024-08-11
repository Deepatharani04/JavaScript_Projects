var popupoverlay=document.querySelector(".popup-overlay")
        var popupbox=document.querySelector(".popup-box")
        var addpopupbutton=document.getElementById("add-popup-button")
        addpopupbutton.addEventListener("click",function(){
            popupoverlay.style.display="block"
            popupbox.style.display="block"
        })
        var cancelpopup=document.getElementById("cancel-popup")
        cancelpopup.addEventListener("click",function(event){
        event.preventDefault()
        popupoverlay.style.display="none"
        popupbox.style.display="none"
        })  
        var container=document.querySelector(".container")
        var addrecipe=document.getElementById("add-recipe")
        var recipetitleinput=document.getElementById("recipe-title-input")      
        var recipeingrediantsinput=document.getElementById("recipe-ingrediants-input")      
        var recipeprocedureinput=document.getElementById("recipe-procedure-input")     
        
        addrecipe.addEventListener("click",function(event){
            event.preventDefault()
            var div=document.createElement("div")
            div.setAttribute("class","recipe-container")
            div.innerHTML=`<h2>${recipetitleinput.value}</h2>
           <h4><i>Ingrediants: </i>${recipeingrediantsinput.value}</h4>
           <p><i><b>Procedure:  </b></i>${recipeprocedureinput.value}</p>
           <button onclick="deleterecipe(event)">Delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
        })
        function deleterecipe(event){
            event.target.parentElement.remove()
        }
        alert("Add Your Own Recipe By clicking The Plus Button!!!")