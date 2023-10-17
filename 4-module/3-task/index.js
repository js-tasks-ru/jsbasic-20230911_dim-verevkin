function highlight(table) {
    for (let row of table.rows) 
    {
      for(let cell of row.cells) 
      {
         if(cell.dataset.available){
         cell.dataset.available == 'true' ? row.classList.add('available'): row.classList.add('unavailable');
         }
         else{
          row.setAttribute('hidden', '');
         };
         
         if(cell.cellIndex == 1){
          if (cell.innerHTML < 18){
            row.style.textDecoration = 'line-through';
          }
         }
         
         if(cell.cellIndex == 2){
          switch (cell.innerHTML){
            case 'm':{ row.classList.add('male'); break};
            case 'f':{ row.classList.add('female'); break};
          }
         }
      }
    }
  }  