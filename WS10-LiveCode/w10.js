let htmlEditor = ace.edit('html');
htmlEditor.setTheme("ace/theme/monokai");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.resize();

let cssEditor = ace.edit('css');
cssEditor.setTheme("ace/theme/monokai");
cssEditor.session.setMode("ace/mode/css");
cssEditor.resize();

let jsEditor = ace.edit('js');
jsEditor.setTheme("ace/theme/monokai");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.resize();

function compiler() {
    let htmlValue = htmlEditor.getValue();
    let cssValue = cssEditor.getValue();
    let jsValue = jsEditor.getValue();
    let result = document.getElementById('result').contentWindow.document;

    result.open();
    result.writeln(
        `
        <style>${cssValue}</style>
        ${htmlValue}
        <script>${jsValue}</script>
        `
    );
    result.close();
}

let allButtons = document.querySelectorAll("#button-wrapper button");
let allPanels = document.querySelectorAll("#ide-container .panel-wrapper")

function switchPanel(panelIndex) {
    switcher(panelIndex);
}
switchPanel(0);

function runEdit(panelIndex) {
    switcher(panelIndex);
    compiler();
}

function switcher(panelIndex) {
    allButtons.forEach(node => {
        node.style.background = "";
    })
    allButtons[panelIndex].style.background = "#151515";
    allPanels.forEach(node => {
        node.style.display = "none";
    })
    allPanels[panelIndex].style.display = "block";

}