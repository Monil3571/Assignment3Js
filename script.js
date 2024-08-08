// script.js
document.getElementById('orderButton').addEventListener('click', function() {
    // Capture form values
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(el => el.value);
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(el => el.value);

    // Create Smoothie object
    const smoothie = new Smoothie(name, size, base, ingredients, toppings);
    
    // Display the smoothie summary
    document.getElementById('smoothieSummary').innerHTML = smoothie.describe();
});

// Smoothie class
class Smoothie {
    constructor(name, size, base, ingredients, toppings) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.toppings = toppings;
    }

    describe() {
        return `
            <h2>Thank you, ${this.name}!</h2>
            <p>Your ${this.size} smoothie with ${this.base} as the base includes:</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(', ')}</p>
            <p><strong>Toppings:</strong> ${this.toppings.join(', ')}</p>
        `;
    }
}
