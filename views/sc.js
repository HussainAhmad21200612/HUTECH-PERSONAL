var data=[];
const add=document.getElementById("add");
const checkbox=document.getElementById("checkbox");

const delbtn=document.getElementById("delete");
// add.addEventListener("click",()=>{
//   // const val=text.value;
//   const text=document.getElementById("name");
//   if (text.value){
//   const todo={
//     text:text.value,
//     completed:false
//   }
//   fetch("/todo",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(todo)
  
//   }).then((res)=>{
//     if (res.status===200){
//       //display in UI todo
//       createTodo(todo);
//       console.log("todo added");
//     }
//     else{
//       alert("Error in saving data");
//     }
//   })
// }
//   });
// const rmv=document.getElementById("rmv");

const hoverSrc = "/images/recycle-bin.png";

const originalSrc = "/images/bin.png";
  const hoverImage = new Image();
  hoverImage.src = hoverSrc;
  function changeImageOnHover(e) {
    e.target.src = hoverSrc;
    // rmv.src = hoverSrc;
  }
  function revertImage(e) {
    e.target.src = originalSrc;
    // rmv.src = originalSrc;
  }

const rmv=document.querySelectorAll("img#rmv");
for(var i=0;i<rmv.length;i++){

  rmv[i].addEventListener("mouseover",changeImageOnHover);


rmv[i].addEventListener("mouseout",revertImage);
}


  function createTodo(todo){
    if (todo.text){
      console.log("heyy");
      // const tbdy=document.getElementById("tbody");
      const tr=document.createElement("tr");
      const td1=document.createElement("td");
      const input=document.createElement("input");
      input.type="checkbox";
      input.id="packers";
      input.style.marginRight="10px";
      input.addEventListener("change",()=>{
        fetch("/update",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body:JSON.stringify({
                property : 'text',
                value : todo.text
            })
        }).then((res)=>{
            if (res.status===200){
                console.log("success");
            }
            else{
                alert('something weird happened');
            }
        });
        });

      const label=document.createElement("label");
      label.htmlFor="packers";
      label.classList="strikethrough";
      if (todo.completed){
        input.checked=true;
      }
      const text=todo.text;
      label.appendChild(document.createTextNode(text));
      td1.appendChild(input);
      td1.appendChild(label);
      td1.style.textAlign="left";
      const td3=document.createElement("td");
      // const btn=document.createElement("button");
      // btn.id="delete";
      // btn.classList="btn";
      // btn.onclick=deleteTodo;
      
      // btn.appendChild(document.createTextNode("X"));
        // const lst=document.getElementById("list");
  var removeTask = document.getElementById('delete');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "X");
  removeTask.setAttribute("id", "delete");
  removeTask.setAttribute("class", "btn btn-outline-success");
  removeTask.setAttribute("style", "font-size: 0.8rem;text-align: center;padding: 0px 0px 0px 0px;");
  // removeTask.addEventListener('click', function(e) {
  //     console.log(tr.childNodes[0].childNodes[1].innerHTML);
  //     fetch("/delete",{
  //       method:"POST",
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //       body:JSON.stringify({
  //       property : 'text',
  //       value : tr.childNodes[0].childNodes[1].innerHTML})
  //     }).then((res)=>{
  //       if (res.status===200){
  //           console.log("success");
  //         }
  //         else{
  //           alert('something weird happened');
  //         }
  //       });
  //     lst.removeChild(tr);
  // }, false);
     
      td3.appendChild(removeTask);
      // td3.appendChild(btn);
      tr.appendChild(td1);
      tr.appendChild(td3);
  
      document.getElementsByTagName("table")[0].appendChild(tr);
    
      }
  }

// const lab=document.getElem
// const packers=document.getElementsByClassName("packers");
// console.log(packers);
// // const val=packers[0].value;
// console.log(val);
// for(var i=0;i<packers.length;i++){
//   var val=packers[i].value;
// packers[i].addEventListener("change",()=>{
//     // console.log(packers[i].value)
//     fetch("/update",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//             },
//         body:JSON.stringify({
//             property : 'text',
//             value : val
//         })
//     }).then((res)=>{
//         if (res.status===200){
//             console.log("success");
//         }
//         else{
//             alert('something weird happened');
//         }
//     });
//     });
//   }
const pack=document.querySelectorAll("input[type=checkbox]");
for(var i=0;i<pack.length;i++){
  pack[i].addEventListener("change",update)
}
function update(e){
  console.log(e.target.value);
  fetch("/update",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      property : 'text',
      value : e.target.value
    })
  }).then((res)=>{
    if (res.status===200){
      console.log("success");
    }
    else{
      alert('something weird happened');
    }
  });
}

const del=document.querySelectorAll("button#delete");
for(var i=0;i<del.length;i++){
  del[i].addEventListener("click",deleteTodo)
}
function deleteTodo(e){

  const lr=e.target.parentElement.parentElement.parentElement.parentElement;
  // const d=e.target.childNodes;
  const tr=e.target.parentElement.parentElement.parentElement;
  const ls=document.getElementById("list");
  // ls.removeChild(tr);
  // console.log(tr);
  // console.log(tr.parentElement,tr.parentElement.parentElement);
  // const lr=tr.parentElement.parentElement;
  lr.removeChild(tr);
  console.log(e.target,e.target.name,lr,tr);
  fetch("/delete",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      property : 'text',
      value : e.target.name
    })
  }).then((res)=>{
    if (res.status===200){
      console.log("success");
    }
    else{
      alert('something weird happened');
    }
  });
}




  // const lst=document.getElementById("list");
  // var removeTask = document.getElementById('delete');
  // // removeTask.setAttribute('type', 'button');
  // // removeTask.setAttribute("value", "X");
  // // removeTask.setAttribute("id", "delete");
  // // removeTask.setAttribute("class", "btn btn-outline-success");
  // // removeTask.setAttribute("style", "font-size: 0.8rem;text-align: center;padding: 0px 0px 0px 0px;");
  // removeTask.addEventListener('click', function(e) {
  //     console.log(tr.childNodes[0].childNodes[1].innerHTML);
  //     fetch("/delete",{
  //       method:"POST",
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //       body:JSON.stringify({
  //       property : 'text',
  //       value : tr.childNodes[0].childNodes[1].innerHTML})
  //     }).then((res)=>{
  //       if (res.status===200){
  //           console.log("success");
  //         }
  //         else{
  //           alert('something weird happened');
  //         }
  //       });
  //     lst.removeChild(tr);
  // }, false);

const sgn=document.getElementById("sgn");

// sgn.addEventListener("click", () => {
//   // Perform logout logic here, such as clearing session data or redirecting to a login page
//   fetch("/logout", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   console.log("User logged out");
// });

fetch("/todo-data").then((res)=>{
    if (res.status===200){
        return res.json();
    }
    else{
        alert("Error in fetching data");
    }
    }).then((todos)=>{
        todos.forEach((todo)=>{
            // createTodo(todo);
        })
    }
    );