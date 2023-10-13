function makeFriendsList(friends) {
elem = document.createElement('ul');
elem.innerHTML = '<ul>' + friends.map(item => '<li>' + item.firstName + ' ' + item.lastName + '</li>') + '</ul>';
return elem;
}
