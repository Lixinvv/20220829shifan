window.onload=function()
{
    var aa = document.getElementsByClassName('lunbo')[0]
	var divList = aa.children
	var divListLength = divList.length
    var count=0
     setInterval(()=>{
        if (count+1 == divListLength) {
            aa.scrollTop=0
        } else {
           count++
           let top=count*330
           aa.scrollTop=top
        }
     },2000)
}
