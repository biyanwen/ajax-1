let getCss = document.querySelector('#getCSS');
getCss.onclick = () => {
    const cssHttp = new XMLHttpRequest()
    cssHttp.open('GET', "./style.css")
    cssHttp.onreadystatechange = () => {
        if (cssHttp.readyState === 4 && cssHttp.status === 200) {
            let styleElement = document.createElement('style');
            styleElement.innerHTML = cssHttp.response
            document.head.appendChild(styleElement)
        }
    }
    cssHttp.send()
}

let getJS = document.querySelector('#getJS');
getJS.onclick = () => {
    const jsHttp = new XMLHttpRequest()
    jsHttp.open('GET', './2.js')
    jsHttp.onreadystatechange = () => {
        if (jsHttp.readyState === 4 && jsHttp.status === 200) {
            let scriptElement = document.createElement('script');
            scriptElement.innerHTML = jsHttp.response
            document.body.appendChild(scriptElement)
        }
    }
    jsHttp.send()
}

let getHTML = document.querySelector('#getHTML');
getHTML.onclick = () => {
    const htmlHttp = new XMLHttpRequest()
    htmlHttp.open('GET', "./3.html")
    htmlHttp.onreadystatechange = () => {
        if (htmlHttp.readyState === 4 && htmlHttp.status === 200) {
            let divElement = document.createElement('div');
            divElement.innerHTML = htmlHttp.response
            document.body.appendChild(divElement)
        }
    }
    htmlHttp.send()
}

let getXML = document.querySelector('#getXML');
getXML.onclick = () => {
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', "./4.xml")
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            const dom = xmlHttp.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    }

    xmlHttp.send()
}

let getJson = document.querySelector('#getJSON')
getJson.onclick = () => {
    const jsonHttp = new XMLHttpRequest()
    jsonHttp.open('GET', "./5.json")
    jsonHttp.onreadystatechange = () => {
        if (jsonHttp.readyState === 4 && jsonHttp.status === 200) {
            let parse = JSON.parse(jsonHttp.response);
            console.log(parse)
        }
    }
    jsonHttp.send()
}

