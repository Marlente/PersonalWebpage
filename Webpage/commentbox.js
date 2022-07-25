var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box-name").value + ", " + document.getElementById("comment-box-email").value + ":";
 
    var li1 = document.createElement("li");
    var text1 = document.createTextNode(commentBoxValue);
    li1.appendChild(text1);
    document.getElementById("unordered").appendChild(li1);

    var commentBoxComment= document.getElementById("comment-box-comment").value;
 
    var li2 = document.createElement("li");
    var text2 = document.createTextNode(commentBoxComment);
    li2.appendChild(text2);
    document.getElementById("unordered").appendChild(li2);
 
});

var comment = document.getElementById("comment-box-comment");

$(comment).keyup(function() {
if(this.value.length > 140) {
    document.getElementById("lengthcount").innerHTML = 'Total characters exceed 140';
    console.log('Total characters exceed 140');
    comment.setAttribute("class", "border-2 px-3 py-2 bg-red-300")
} 
else {
    document.getElementById("lengthcount").innerHTML= comment.value.length.toString() + '/140';
    console.log(this.value.length + '/140');
    comment.setAttribute("class", "px-3 py-2");
}       
 });