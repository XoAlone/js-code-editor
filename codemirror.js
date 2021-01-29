// Editor
const jsEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineWrapping: true,
  lineNumbers: true,
  theme: "ayu-mirage",
  mode: "javascript",
});

// Important Functions
function execute() {
  const code = jsEditor.doc.getValue();
  if (!code)
    return alert(
      "Please input JavaScript code into the editor before executing!"
    );
  try {
    eval(code);
  } catch (err) {
    console.error(err.message);
  }
}

function clearEditor() {
  const clear = document.getElementById("clear");
  if (!jsEditor.doc.getValue()) return alert("Nothing to clear!");
  if (clear.innerHTML === "Are you sure?") {
    clear.innerHTML = "Clear Editor";
    jsEditor.doc.setValue("");
    alert("Cleared Editor!");
  } else {
    clear.innerHTML = "Are you sure?";
  }
}
