const {remote} = require('electron');
const {Menu, MenuItem} = remote;

var menu = new Menu();

var rowAbove = new MenuItem({
  label: 'Insert row above',
  click: function() {
    var range = hot.getSelectedRange();
    var start = Math.min(range.from.row, range.to.row);
    hot.alter('insert_row', start);
    hot.deselectCell();
  }
});

var rowBelow = new MenuItem({
  label: 'Insert row below',
  click: function() {
    var range = hot.getSelectedRange();
    var end = Math.max(range.from.row, range.to.row);
    hot.alter('insert_row', (end + 1));
    hot.deselectCell();
  }
});

var columnLeft = new MenuItem({
  label: 'Insert column left',
  click: function() {
    var range = hot.getSelectedRange();
    var start = Math.min(range.from.col, range.to.col);
    hot.alter('insert_col', start);
    hot.deselectCell();
  }
});

var columnRight = new MenuItem({
  label: 'Insert column right',
  click: function() {
    var range = hot.getSelectedRange();
    var end = Math.max(range.from.col, range.to.col);
    hot.alter('insert_col', (end + 1));
    hot.deselectCell();
  }
});

var removeRow = new MenuItem({
  label: 'Remove entire row',
  click: function() {
    hot.alter('remove_row', hot.getSelected()[0])
    hot.deselectCell()
  }
})

var removeCol = new MenuItem({
  label: 'Remove entire column',
  click: function() {
    hot.alter('remove_col', hot.getSelected()[1])
    hot.deselectCell()
  }
})

menu.append(rowAbove);
menu.append(rowBelow);
menu.append(new MenuItem({ type: 'separator' }));
menu.append(columnLeft);
menu.append(columnRight);
menu.append(new MenuItem({ type: 'separator' }));
menu.append(removeRow);
menu.append(removeCol);
