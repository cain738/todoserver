let result= $('#result');
$(document).ready(function () {
    let input=$('#inp');
    let btn=$('#btn');


    btn.click(function(){
       add(input.val());


    })
});
function update(el){
    let sibling=$(el).prev();
    let grandSibling=sibling.prev();
    let value=grandSibling.val();
    let index= $(el).parent().index();
    console.log(index);
   $.ajax({
        url:'/update',
        method:'post',
        data:{upal:value, index:index},
        success: function(data1){
              console.log(data1);
              sibling.text(data1);
            grandSibling.attr('type','hidden');
        }

    });



}
function changeType(el) {

    $(el).prev().attr('type','text');
}
function delete1(el){
    $(el).parent().remove();
}
function add(val){
    $.ajax({
        url: '/add',
        method: 'post',
        data: {todo:val},
        success: function(data) {
            console.log(data);
            let value=`<li><input type="hidden">
        <span onclick="changeType(this)">${data}</span>
        <button onclick="update(this)">Update</button>
        <button onclick="delete1(this)">Delete</button>
        </li>`;
        result.append(value);

        }
    })

}