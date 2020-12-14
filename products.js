fetch('https://fierce-depths-92159.herokuapp.com/')
    .then(response => response.json())
    .then((json) => {
        var i;
        for (let i = 0; i < json.length; i++) 
        {
            if (i % 2 == 0) 
            {
                var FinalElement1 = document.createElement('div');
                FinalElement1.className = 'row justify-content-center no-gutters mb-5 mb-lg-0';
                var Content1 = `<div class="col-lg-6"><img class="img-fluid" src="III"/></div>
                                <div class="col-lg-6">
                                <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h2 class="text-white">NNN</h2>
                                <p class="mb-0 text-white-50">DDD</p>
                                <h4 class="text-white">Price: PPP $</h4>
                                <a class="btn btn-primary mx-auto" href="LLL">Buy Now!</a>
                                <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                                </div>
                                </div>
                                </div>`;
                var Product1 = Content1.replace("III", json[i].image);
                Product1 = Product1.replace("NNN", json[i].name);
                Product1 = Product1.replace("DDD", json[i].description);
                Product1 = Product1.replace("PPP", json[i].price);
                Product1 = Product1.replace("LLL", json[i].link);
                FinalElement1.innerHTML = Product1;
                document.getElementById('container').appendChild(FinalElement1);
            }

            if (i % 2 != 0)
            {
                var FinalElement2 = document.createElement('div');
                FinalElement2.className = 'row justify-content-center no-gutters';
                var Content2 = `<div class="col-lg-6"><img class="img-fluid" src="III"/></div>
                                <div class="col-lg-6 order-lg-first">
                                <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h2 class="text-white">NNN</h2>
                                <p class="mb-0 text-white-50">DDD</p>
                                <h4 class="text-white">Price: PPP $</h4>
                                <a class="btn btn-primary mx-auto" href="LLL">Buy Now!</a>
                                <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                                </div>
                                </div>
                                </div>`;
                var Product2 = Content2.replace("III", json[i].image);
                Product2 = Product2.replace("NNN", json[i].name);
                Product2 = Product2.replace("DDD", json[i].description);
                Product2 = Product2.replace("PPP", json[i].price);
                Product2 = Product2.replace("LLL", json[i].link);
                FinalElement2.innerHTML = Product2;
                document.getElementById('container').appendChild(FinalElement2);
            }
        }
    });