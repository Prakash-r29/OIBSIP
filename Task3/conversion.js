
        function convertTemperature() {
            // Get input values
            const temperature = parseFloat(document.getElementById('temperature').value);
            const conversion = document.getElementById('conversion').value;
            const resultElement = document.getElementById('result');
            
            // Validate input
            if (isNaN(temperature)) {
                resultElement.innerHTML = 'Please enter a valid number';
                return;
            }
            
            let result, fromUnit, toUnit;
            
            // Perform conversion based on selection
            switch(conversion) {
                case 'c-to-f':
                    result = (temperature * 9/5) + 32;
                    fromUnit = 'Celsius';
                    toUnit = 'Fahrenheit';
                    break;
                case 'f-to-c':
                    result = (temperature - 32) * 5/9;
                    fromUnit = 'Fahrenheit';
                    toUnit = 'Celsius';
                    break;
                case 'c-to-k':
                    result = temperature + 273.15;
                    fromUnit = 'Celsius';
                    toUnit = 'Kelvin';
                    break;
                case 'k-to-c':
                    result = temperature - 273.15;
                    fromUnit = 'Kelvin';
                    toUnit = 'Celsius';
                    break;
                case 'f-to-k':
                    result = (temperature - 32) * 5/9 + 273.15;
                    fromUnit = 'Fahrenheit';
                    toUnit = 'Kelvin';
                    break;
                case 'k-to-f':
                    result = (temperature - 273.15) * 9/5 + 32;
                    fromUnit = 'Kelvin';
                    toUnit = 'Fahrenheit';
                    break;
            }
            
            // Check for absolute zero violations
            if ((toUnit === 'Kelvin' && result < 0) || 
                (fromUnit === 'Kelvin' && temperature < 0)) {
                resultElement.innerHTML = 'Temperature cannot be below absolute zero (0 Kelvin)';
                return;
            }
            
            // Display the result (rounded to 2 decimal places)
            resultElement.innerHTML = `${temperature} ${fromUnit} =><span>${result.toFixed(2)} ${toUnit}</span>`;
        }