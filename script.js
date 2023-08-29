
let container = document.getElementById("container");
 async function mainfnc()
{
   const response = await fetch(`https://gauravgitacc.github.io/postAppData/auctionData.json`);
   const data= await response.json();
   displaydata(data);

}
 function displaydata(data){

      data.forEach((card)=>{
        let carddiv = document.createElement("div");
        carddiv.className="card";
        carddiv.innerHTML=
        `<div class="card-top">
        <div>
            <strong class="${card.status.toLowerCase()}">${card.status}</strong>
            <p>${card.caseNumber}</p>
        </div>
        <div class="date">
            <p>${card.date}</p>
        </div> 
       </div>
        <div class="card-bottom">
        <h4>${card.fromLocation}</h4>
        <p>${card.toLocation}</p>
        <b class="price">${card.fare}</b>
        </div>`;
        console.log(carddiv.innerHTML)
       container.appendChild(carddiv)
    
      });
     
    }
  mainfnc()