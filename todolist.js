var save = document.getElementById("btn1");
var text=document.getElementById("input");
var table = document.getElementById("table");
var value=0;
function deleted(btnName1){
    var rowCount=table.rows.length;
    for(let i=1;i<rowCount;i++)
    {
        var rownum=table.rows[i];
        var rowObj = rownum.cells[3].childNodes[0];  
        if (rowObj.name == btnName1) 
        {  
            if(i!=rowCount-1)
            {
                for(let j=i+1;j<rowCount;j++)
                {
                    rownum=table.rows[j];
                    var count=rownum.cells[0];
                    console.log(count.innerHTML);
                    rownum.cells[0].innerHTML=count.innerHTML-1;   
                }
            }
            table.deleteRow(i); 
            rowCount--; 
            value--;
            break;
        }
    }
}
function finished(btnName2){
    var rowCount2=table.rows.length;
    for(let i=1;i<rowCount2;i++)
    {
        var rownum2=table.rows[i];
        var rowObj2 = rownum2.cells[3].childNodes[2]; 
        if (rowObj2.name == btnName2)
        { 
            rownum2.style.backgroundColor='#34d058';
            rownum2.cells[2].innerHTML= "Completed";
            break;
        }
    } 
}
function edited(btnName0){
    var rowCount0=table.rows.length;
    for(let i=1;i<rowCount0;i++)
    {
        var rownum0=table.rows[i];
        var rowObj0 = rownum0.cells[3].childNodes[1]; 
        console.log(rowObj0.name);
        if (rowObj0.name == btnName0)
        { 
            var typedtext = rownum0.cells[1].innerHTML;
            console.log(typedtext);
            text.value=typedtext;
            save.name="saver";
            var sub=rownum0.cells[1];
            console.log(sub);
            save.onclick = function(){  
                    saveclick(sub);
                    save.name="add"; 
            }
            break;
        }
    }
}
function saveclick(sub){
    if(save.name==="add")
    {
        var table = document.getElementById("table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = value+1;
        cell2.innerHTML = text.value;
        cell3.innerHTML = "In progress";

        var element1 = document.createElement("input");  
        element1.type = "button"; 
        element1.id= "btn3"; 
        var btnName1 = "delete" + (value + 1);  
        element1.name = btnName1;  
        element1.setAttribute('value', 'Delete');  
        element1.onclick = function(){  
            deleted(btnName1);  
        }
        cell4.appendChild(element1);
        
        var element0 = document.createElement("input");
        element0.type = "button"; 
        element0.id= "btn2"; 
        var btnName0 = "edit" + (value + 1);  
        element0.name = btnName0;  
        element0.setAttribute('value', 'Edit');  
        element0.onclick = function(){  
            edited(btnName0);  
        }
        cell4.appendChild(element0);

        var element2 = document.createElement("input");  
        element2.type = "button"; 
        element2.id= "btn4"; 
        var btnName2 = "finish" + (value + 1);  
        element2.name = btnName2;  
        element2.setAttribute('value', 'Finished');  
        element2.onclick = function(){  
            finished(btnName2);  
        }
        cell4.appendChild(element2);
        value = value+1;
        text.value=null;
    }
    if(save.name==="saver"){
        sub.innerHTML=text.value;
        text.value=null; 
    }
}
save.onclick = function(){  
    saveclick();  
}
