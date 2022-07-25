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