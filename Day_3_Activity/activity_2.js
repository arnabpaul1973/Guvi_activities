async function getCountries() {
    let url = "https://restcountries.com/v3.1/all";
    try {
        let res = await fetch(url);
        console.log(res);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCountries() {
    let users = await getCountries();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2><em>${user.name.common}</em></h2>
                            <p>Flag : ${user.flag}</p>
                            <p>Region : ${user.region}</p>
                            <p>Sub-region : ${user.subregion}</p>
                            <p>Population : ${user.population}</p>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderCountries();