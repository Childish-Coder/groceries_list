var input = document.getElementById('new'),
	items = document.querySelector('.items'),
	saved_items,
	item,
	newitem,
	list_items = []
//variables needs declared above

//make line throught the item on click
function tick_item(num) {
	item_btn = document.querySelectorAll('#item_btn')
	if (item_btn[num].classList.contains('ticked')) {
		item_btn[num].checked = false
		item_btn[num].classList.remove('ticked')
	} else {
		item_btn[num].checked = true
		item_btn[num].classList.add('ticked')
	}
}

//function for crating new item
function create_item(item_name) {
	newitem = `<div class="item" onclick="tick_item(${list_items.length})">
  <input type="checkbox" name="item_btn" id="item_btn" /><p>${item_name}</p></div>`
	items.innerHTML += newitem
	list_items.push(item_name)
	localStorage.setItem(`item${list_items.length}`, item_name)
}

//event listener for create_item function
input.addEventListener('keyup', function (e) {
	if (e.key === 'Enter') {
		e.preventDefault()
		value = input.value
		if (value == '') {
			alert("New item can't be empty")
		} else {
			create_item(value)
		}
		input.value = ''
	}
})

//function for deleting all items in the lists
function delete_items() {
	if (confirm('Are you sure you want to delete all items in the list')) {
		items.innerHTML = ''
		list_items.length = 0
		localStorage.clear()
	}
}

//function for getting items from localstorage
function get_saved() {
	var keys = Object.keys(localStorage),
		i = 0,
		key

	for (; (key = keys[i]); i++) {
		list_items.push(localStorage.getItem(key))
	}
	list_items.forEach((j) => {
		newitem = `<div class="item" onclick="tick_item(${list_items.length})">
               <input type="checkbox" name="item_btn" id="item_btn" />
               <p>${j}</p></div>`
		items.innerHTML += newitem
	})
}
