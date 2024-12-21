let rendreCards = (arr, container,options) => {
   arr.forEach(path => container.innerHTML += ` <div class="col-6 col-sm-3 mb-4 possibleCard ${options && options.class}"><img class="img-fluid shadow rounded "
                     src="assests${path}" alt="Card" ${options && Object.keys(options).map(option=>`${option}="${options[option]}"`).join(' ')}></div>
               `)

}
export default rendreCards;