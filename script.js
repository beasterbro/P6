const pages = ["index.html","resume.html","background.html","contact.html","truss.html"]

function onKeyUp (e){
    index = e.srcElement.tabIndex
    eleType = e.target.nodeName
    console.log(e.target.children[0].href)
    if (e.key === "Enter" && isValidTarget(e)) window.location.assign(e.target.children[0].href)
}

function isValidTarget (e){
    //console.log(e.target.srcElement)
    return e.target.children[0].href//e.target.nodeName === "LI" || e.target.className === "project-card" 
}