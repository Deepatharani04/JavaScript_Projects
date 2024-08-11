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
        var addbook=document.getElementById("add-book")
        var booktitleinput=document.getElementById("book-title-input")      
        var authorinput=document.getElementById("author-input")      
        var descriptioninput=document.getElementById("description-input")     
        
        addbook.addEventListener("click",function(event){
            event.preventDefault()
            var div=document.createElement("div")
            div.setAttribute("class","book-container")
            div.innerHTML=`<h2>${booktitleinput.value}</h2>
           <h4><i>Author Name: </i>${authorinput.value}</h4>
           <p><i>Short Description:</i>${descriptioninput.value}</p>
           <button onclick="deletebook(event)">Delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
        })
        function deletebook(event){
            event.target.parentElement.remove()
        }

        var allcontainer=document.getElementById("all-container")
        var about=document.getElementById("about")
        var upload=document.getElementById("upload")
        var home=document.getElementById("home")
        var aboutus=document.getElementById("about-us")

        upload.addEventListener("click",function(event){
            event.preventDefault()
            container.style.display="block"
            addpopupbutton.style.display="block"
            allcontainer.style.display="none"
            about.style.display="none"
        })
        upload.addEventListener("mouseup",function(){
            alert("You can add any book by clicking the plus button!!!")
        })
        home.addEventListener("click",function(event){
            event.preventDefault()
            container.style.display="none"
            addpopupbutton.style.display="none"
            allcontainer.style.display="block"
            about.style.display="none"
        })
        aboutus.addEventListener("click",function(event){
            event.preventDefault()
            container.style.display="none"
            addpopupbutton.style.display="none"
            allcontainer.style.display="none"
            about.style.display="block"
        })