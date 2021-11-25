export class ElementBuilder {
  constructor(tag) {
    this.tag = tag;
  }
  setId(id) {
    this.id = id;
    return this;
  }
  setClasses(classes) {
    this.classes = classes;
    return this;
  }
  setAttributes(attributes) {
    this.attributes = attributes;
    return this;
  }
  setChildren(children) {
    this.children = children;
    return this;
  }
  setText(text) {
    this.text = text;
    return this;
  }
  build() {
    const element = document.createElement(this.tag);

    if (this.id) element.id = this.id;
    if (this.classes) element.classList.add(...this.classes);
    if (this.attributes) {
      for (const [attr, value] of Object.entries(this.attributes)) {
        element.setAttribute(attr, value.toString());
      }
    }
    if (this.children) {
      this.children.forEach((child) => {
        element.appendChild(child);
      });
    }
    if (this.text) element.textContent = this.text;

    return element;
  }
}
