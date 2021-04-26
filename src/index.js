import Orcamento from './modules/Orcamento'

function component() {
  const element = document.createElement('div');
  element.innerHTML = new Orcamento().valor

  return element;
}

document.body.appendChild(component());
