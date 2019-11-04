function searchForBooks()
{
    let search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        success: function(data)
        {
            console.log(data);
            document.getElementById('results').innerHTML = "Authors of book: ";
            data.items[0].volumeInfo.authors.forEach(e => concatOutput(e));
            //document.getElementById('results').innerHTML += "<br />Title of book: ";
            document.getElementById('results').innerHTML += "<br /><img src=" + data.items[0].volumeInfo.imageLinks.thumbnail + "</img>";
            concatOutput(data.items[0].volumeInfo.title);
        },
        type: 'GET'
    })
}

function concatOutput(output)
{
    //document.getElementById('results').innerHTML += " " + output;
    document.getElementById('results').innerHTML += output.concat(" ");
}

document.getElementById('button').addEventListener('click', searchForBooks, false);