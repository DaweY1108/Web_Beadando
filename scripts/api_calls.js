async function get_barbers(elementId) {
    fetch('api/get_barbers.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(fetchedData => {
        for (let i = 0; i < fetchedData.length; i++) {
            let imageLoc = "assets/barbers/" + fetchedData[i].id + ".jpg";
            let name = fetchedData[i].full_name;
            let description = fetchedData[i].description;
            let skills = fetchedData[i].skills;
            let html = `<div class='container mx-auto mt-5 col-12'>
                            <div class='row justify-content-center pb-5'>
                                <div class='card card-bg col-md-6 mt-100'>
                                    <div class='card-content'>
                                        <div class='card-body'>
                                            <div class='row'>
                                                <div class='col-md-4'>
                                                    <img src='${imageLoc}' alt='${name}' class='img-fluid shadow border-1'>
                                                </div>
                                                <div class='col-md-8'>
                                                    <h4 class='text-center my-3'>${name}</h4>
                                                    <h5>Bemutatkozás</h5>
                                                    <hr style='border-width: 1px; border-color: black'>
                                                    <h6>${description}</h6>
                                                    <br>
                                                    <h5>Skillek</h5>
                                                    <hr style='border-width: 1px; border-color: black'>
                                                    <h6>${skills}</h6>
                                                </div>
                                            </div>
                                            <div class='row justify-content-right pt-3'>
                                                <button type='button' class='btn btn-lg btn-block btn-dark'>Foglalok</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            document.getElementById(elementId).innerHTML += html;
        }
    })
    .catch(error => console.error('Error:', error));
}

async function get_services(elementId) {
    fetch('api/get_services.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(fetchedData => {
        for (let i = 0; i < fetchedData.length; i++) {
            let price = fetchedData[i].price;
            let name = fetchedData[i].name;
            let description = fetchedData[i].description;
            let html = `
            <div class='card card-bg mb-4 box-shadow'>
                <div class='card-header'>
                    <h4 class='my-0 font-weight-normal'>${name}</h4>
                </div>
                <div class='card-body'>
                    <h1 class='card-title pricing-card-title'>${price} Ft</small></h1>
                    <ul class='list-unstyled mt-3 mb-4'>
                    <li>${description}</li>
                    </ul>
                    <button type='button' class='btn btn-lg btn-block btn-dark'>Foglalok</button>
                </div>
            </div>
            `;
            document.getElementById(elementId).innerHTML += html;
        }
    })
    .catch(error => console.error('Error:', error));
}

/*
    Galéria adatainak lekérése, majd html kód felépítése
*/

async function get_gallery(elementId) {
    fetch('api/get_gallery.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(fetchedData => {
        for (let i = 0; i < fetchedData.length; i++) {
            let name = fetchedData[i].full_name;
            let opinion = fetchedData[i].opinion;
            let photoID = fetchedData[i].photoID;
            let html = `
            <div class='row card-bg py-3 border my-3'>
                <div class='col-md-4 py-2 bg-light shadow mx-2'>
                    <div class='d-flex flex-column justify-content-md-start justify-content-center align-items-center'>
                        <img src='operations/op_getImage.php?id=${photoID}' alt='' class='img-fluid border border-dark my-2 shadow'/>
                        <h6 class='card-title text-center py-3'>${name}</h6>
                    </div>
                </div>
                <div class='col-md-7 mx-4'>
                    <div class='media-body'>
                        <h5 class='card-text text-justify px-2 py-3'>${opinion}</h5>
                    </div>
                </div>
            </div>
            `;
            document.getElementById(elementId).innerHTML += html;
        }
    })
    .catch(error => console.error('Error:', error));
}
