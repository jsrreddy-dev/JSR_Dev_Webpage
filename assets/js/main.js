let tircolor = document.getElementById('tircolor');
let context = tircolor.getContext('2d');
let gradient = context.createLinearGradient(0,0,tircolor.width,0)

gradient.addColorStop("0.1","orange");
gradient.addColorStop("0.4","white");
gradient.addColorStop("0.5","indigo");
gradient.addColorStop("0.7","white");
gradient.addColorStop("0.9","green")

context.font = "60px verdana";
context.fillStyle=gradient;
context.fillText("INDIA",60,120);