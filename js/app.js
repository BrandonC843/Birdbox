function forEach(arr, cb){
	for(var i = 0; i < arr.length; i++){
		cb(arr[i], i, arr)
	}
}

let dataHtmlStringOfRows = ''
let tableBodyEl = document.querySelector('.table_group-chat tbody')
forEach(friendsListData, function(data, index, array){
   console.log(data.name.first);


var dataHtmlRow = '<tr>'

   dataHtmlRow     +=  '<td> <img src="'+ data.name.photo+'"> </td>'
   dataHtmlRow   +=  '<td> ' + data.name.title + '</td>'
   dataHtmlRow   +=  '<td> ' + data.name.first + '</td>'
   dataHtmlRow   +=  '<td> ' + data.name.last + '</td>'
   dataHtmlRow   +=  '<td> ' + data.information.troll + '</td>'
   dataHtmlRow   +=  '<td> ' + data.information.lame + '</td>'
   dataHtmlRow   +=  '<td> ' + data.information.hipster + '</td>'
   dataHtmlRow   +=  '<td> ' + data.information.sacko + '</tr>'

   dataHtmlRow += '<tr>'

   dataHtmlStringOfRows += dataHtmlRow

   tableBodyEl.innerHTML = dataHtmlStringOfRows
})
