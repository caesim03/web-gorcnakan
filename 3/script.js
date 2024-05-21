$(document).ready(function () {
    $('.car-model').change(function () {
        var selectedModels = [];

        $('.car-model:checked').each(function () {
            selectedModels.push($(this).val());
        });

        // Convert array to JSON string
        var data = JSON.stringify(selectedModels);

        // Send AJAX request
        $.ajax({
            url: 'http://localhost:3000/update_car_models',
            type: 'POST',
            data: { carModels: data },
            success: function (response) {
                $('#result').html(`Selected Car Models: ${selectedModels}`);

                displayCarImages(selectedModels);
            },
            error: function (xhr, status, error) {
                console.error(error); // Log any errors to console
            }
        });
    });

    function displayCarImages(selectedModels) {
        // Clear previous images
        $('#carImages').empty();

        selectedModels.forEach(function (model) {
            var img = $('<img>', { src: 'images/' + model.toLowerCase() + '.jpg', alt: model, class: 'car-image' });
            $('#carImages').append(img);
        });
    }
});
