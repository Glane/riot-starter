

var itemTemplate = $('#templates .item').html();

var newItemHtml = $.render(itemTemplate, { name: 'Dewberry', price: 0.15 });
$('#store').append(newItemHtml);

var items = [
  { name: 'NAME', price: 0 },
  { name: 'NAME', price: 0 },
  { name: 'NAME', price: 0 }
];