document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const bedroomsInput = document.querySelector("input[name='bedrooms']");
    const bathroomsInput = document.querySelector("input[name='bathrooms']");
    const floorsInput = document.querySelector("input[name='floors']");
    const yrBuiltInput = document.querySelector("input[name='yr_built']");
    const submitButton = document.querySelector("input[type='submit']");

    form.addEventListener("submit", function(event) {
        let valid = true;
        let errorMessage = "";

        if (bedroomsInput.value <= 0) {
            valid = false;
            errorMessage += "Bedrooms must be greater than 0.\n";
        }

        if (bathroomsInput.value <= 0) {
            valid = false;
            errorMessage += "Bathrooms must be greater than 0.\n";
        }

        if (floorsInput.value <= 0) {
            valid = false;
            errorMessage += "Floors must be greater than 0.\n";
        }

        if (yrBuiltInput.value <= 0) {
            valid = false;
            errorMessage += "Year of Build must be greater than 0.\n";
        }

        if (!valid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});