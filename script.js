function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


var currentPageURL = window.location.href;
var lastModifiedDate = new Date(document.lastModified);
var formattedDate = lastModifiedDate.toLocaleString();
var infoContainer = document.createElement("div");
infoContainer.innerHTML = "Page URL: " + currentPageURL + "<br>Last Modified: " + formattedDate;


document.body.appendChild(infoContainer);




// reference code for connecting contact form to google sheet: https://github.com/jamiewilson/form-to-google-sheets




  const scriptURL = 'https://script.google.com/macros/s/AKfycbzvjKgK40gV4gtgcVMvkjxmlQZu9jOvkYbUojwP8V-yY28PEqPmpl0DWG-GiXWAFUSWJg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message Sent"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
      } )
      .catch(error => console.error('Error!', error.message))
  })
