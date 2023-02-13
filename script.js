let input = document.getElementById('input')
let btn = document.getElementById('btn')
let results = document.getElementById('results')

btn.addEventListener('click', function () {
    let inputvalue = input.value
    let apikey = "f2402681"
    let url = `http://www.omdbapi.com/?apikey=${apikey}&t=${inputvalue}`;
    const image = `http://img.omdbapi.com/?apikey=${apikey}&`

    fetch(url)
        .then((response) => response.json())
        .then((res) => {
            const movie = res;
            const posterUrl = `${image}&i=${movie.imdbID}`
            const html=`
            <div>
            <img src="${posterUrl}" alt="${movie.title}">
            <p>Released in ${movie.year}</p>
            <p>IMDB Rating: ${movie.imdbRating}</p>
            <p>Cast: ${movie.Actors}</p>
            <p>Director: ${movie.Director}</p>
            </div>
            `;
            results.innerHTML=html;
        })
})