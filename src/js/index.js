$('input').iCheck({
	// handle: 'checkbox', // 只对checkbox的选择框渲染新图标
	checkboxClass: 'icheckbox_square-green',
	radioClass: 'iradio_square-green',
	inheritClass: true
});

// ifClicked	用户点击了自定义的输入框或与其相关联的label
// ifChanged	输入框的 checked 或 disabled 状态改变了
// ifChecked	输入框的状态变为 checked
// ifUnchecked	checked 状态被移除
// ifDisabled	输入框状态变为 disabled
// ifEnabled	disabled 状态被移除
// ifCreated	输入框被应用了iCheck样式
// ifDestroyed	iCheck样式被移除
$('.icheck2').on('ifChecked', function(e) {
	console.log(e)
})
$('.icheck2').on('ifUnchecked', function(e) {
	console.log(e)
})

// 将选择框置为选中状态
$('#checked').on('click', function() {
	$('.icheck2').iCheck('check');
})
// 将选择框置为不选中状态
$('#unchecked').on('click', function() {
	$('.icheck2').iCheck('uncheck');
})

// $('#toggle').on('click', function() {
// 	$('.icheck2').iCheck('toggle');
// })

// 将选择框置为禁止选择状态
$('#disable').on('click', function() {
	$('.icheck2').iCheck('disable');
})

// 将选择框置为可选择状态
$('#enable').on('click', function() {
	$('.icheck2').iCheck('enable');
})

// 若改变了原input选择框，更新一下，是ins状态同步
$('#update').on('click', function() {
	$('.icheck2').iCheck('update');
})

// 改变到原来的input选择框样式
$('#destroy').on('click', function() {
	$('.icheck2').iCheck('destroy');
})