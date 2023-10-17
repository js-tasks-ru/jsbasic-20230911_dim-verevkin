function makeDiagonalRed(table) {
  for (const row of table.rows) {
    for (const cell of row.cells){
      if (row.rowIndex == cell.cellIndex)
        table.rows[row.rowIndex].cells[cell.cellIndex].style.backgroundColor = 'red';
    }
  }
}
