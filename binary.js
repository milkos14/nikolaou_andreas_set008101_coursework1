function encode() {
  var output = document.getElementById("outputmessage");
  var input = document.getElementById("inputmessage").value;
  output.value = "";
  for (var i = 0; i < input.length; i++) {
      output.value += input[i].charCodeAt(0).toString(2) + " ";
  }
}

function decode() {
  var output = '';
  
  var input = document.getElementById("inputmessage").value;
  var splitInput = input.split(" ");
  for (i = 0; i < splitInput.length; i++) {
    output += String.fromCharCode((parseInt(splitInput[i], 2)));
  }
  document.getElementById("outputmessage").value = output;
}