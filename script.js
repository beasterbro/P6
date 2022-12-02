const pages = ["index.html","resume.html","background.html","contact.html","truss.html"]

function onKeyUp (e){
    index = e.srcElement.tabIndex
    eleType = e.target.nodeName
    if (e.key === "Enter" && isValidTarget(e)) window.location.assign(pages[index])
}

function isValidTarget (e){
    //console.log(e.target.srcElement)
    return e.target.nodeName === "LI" || e.target.className === "project-card" 
}