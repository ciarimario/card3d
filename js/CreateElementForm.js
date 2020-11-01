export class CreateElementForm {
  createinput(label, type, name, id, placeholder = "Remplissez ce champs") {
    if (type === "text") {
      return `<p>
      <label for="${id}">${label}</label>
      <input type="${type}" name="${name}" placeholder="${placeholder}">
      </p>`;
    }
  }
}
