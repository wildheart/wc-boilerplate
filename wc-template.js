const tagName = 'wc-template'
const template = document.createElement('template')
const css = `
<style>

</style>
`
const html = ''
template.innerHTML = `${css}${html}`
class Template extends HTMLElement {
  constructor() {
		super()
	}
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
			this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
  static get observedAttributes() {
    return ["style"]
  }
  set style(value) {
    this.setAttribute('style', value)
  }
  attributeChangedCallback(name, oldVal, newVal) {
	  
  }
}
const register = () => customElements.define(tagName, Template);
window.WebComponents ? window.WebComponents.waitFor(register) : register()
