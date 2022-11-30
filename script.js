const pages = ["index.html","resume.html","background.html","contact.html","truss.html"]

function onKeyUp (e){
    console.log(e)
    console.log(e.srcElement.tabIndex)
    index = e.srcElement.tabIndex
    console.log(e.target.nodeName)
    eleType = e.target.nodeName
    if (e.key === "Enter" && isValidTarget(e)) window.location.assign(pages[index])
}

function isValidTarget (e){
    //console.log(e.target.srcElement.class)
    console.log(e.target.className)

    return e.target.nodeName === "LI" || e.target.className === "project-card" 
}