const fileinput = document.querySelector("input"),
downloadbtn = document.querySelector("button");
downloadbtn.addEventListener("click" , e =>{
    e.preventDefault();
    downloadbtn.innerText="downloading file ...";
    fetchfile(fileinput.value);

});
function fetchfile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempurl = URL.createObjectURL(file);
        let atag = document.createElement("a");
        atag.href =tempurl ;
        atag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(atag);
        console.log(tempurl);
        atag.click();
        atag.remove();
        url.revokObjecturl(tempurl);
        downloadbtn.innerText="download file ...";
    }).catch(() => {
        downloadbtn.innerText="download file ...";
        alert("failed to download file");
    })
    
}