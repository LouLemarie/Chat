$('#button').on('click', function (e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "src/query.php",
        data: {},
        beforeSend: () => {
            $('#result').empty();
        },
        success: function (response) {
            $('#result').append('<h4>' +  response + '<h4>')

        },
        error: function () {
            console.error('error')
        }
    })
})
