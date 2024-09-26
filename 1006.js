
const A = 5.0;
const B = 7.5;
const C = 5.5;

if (A < 0 || A > 10 || B < 0 || B > 10 || C < 0 || C > 10) {
    console.log("As notas devem estar entre 0 e 10.");
} else {
    
    const media = (A * 2 + B * 3 + C * 5) / (2 + 3 + 5);
  
    console.log("MEDIA = " + media.toFixed(1));
}    