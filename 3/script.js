const carModel = document.querySelectorAll('.car-model')

carModel.forEach(function(car) {
    car.addEventListener('change', function() {
        let selectedModels = [];
        const carChecked = document.querySelectorAll('.car-model:checked')
        carChecked.forEach(function(checkbox) {
            selectedModels.push(checkbox.value)
        })
        fetchData(selectedModels)
    })

    function fetchData(selectedModels) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http:localhost:3000/update_car_models', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                var response = JSON.parse(xhr.responseText);
                displayCarImages(selectedModels);
            } else {
                console.log('Error fetching data');
            }
        };

        // Handle network errors
        xhr.onerror = function() {
            console.log('Network error');
        };

        // Send the request
        xhr.send(JSON.stringify(selectedModels));
    }

    function displayCarImages(selectedModels) {
        const carImages = document.querySelector('#carImages')
        carImages.innerHTML = ''

        selectedModels.forEach(function(model) {
            let img = document.createElement('img');

            // Set attributes of the image element
            img.src = 'images/' + model.toLowerCase() + '.jpg';
            img.alt = model;
            img.className = 'car-image';

            // Append the image element to the container with id 'carImages'
            document.getElementById('carImages').appendChild(img);
        });
    }
})
