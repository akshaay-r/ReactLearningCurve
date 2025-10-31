function customRender(reactElement,container){
    // repetive
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    const domElement = document.createElement(reactElement.type)
    container.appendChild(domElement)
    domElement.innerHTML = reactElement.children
    //iterative
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props.prop)
    } 
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://gooogle.com',
        target : '_blank'
    },
    children : 'Cick me to visi google'
};

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

