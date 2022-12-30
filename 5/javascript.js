function clock(){
    document.body.innerHTML="";

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    document.write("Date: " +day+ "." +month+ "." +year+ "<br>");
    document.write("Time: " +hour+ ":" +minutes+ ":" +seconds+ "<br>");
}