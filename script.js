 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
           let area = Math.PI * radius ** 2;
	 let areaTwoDecimals = area.toFixed(2); // 2 decimal places
	 return areaTwoDecimals;
}
calculateArea();
