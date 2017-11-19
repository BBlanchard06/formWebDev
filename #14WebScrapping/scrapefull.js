const puppeteer = require('puppeteer');

let scrape = async () => {
  // Actual Scraping goes Here...
  
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('http://books.toscrape.com/');
	await page.waitFor(1000);

	const result = await page.evaluate( () => {
		
		let data = []; // Create an empty array
	  	let elements = document.querySelectorAll('.product_pod');

	  	for (i = 0; i < elements.length; i++) {
		
	    let title = elements[i].querySelector('h3').innerText;
		let price = elements[i].querySelector('.price_color').innerText;

		data.push({title, price}); // Push the data to our array
	  	

		}
		
		return data;
	})


	var fs = require('fs');
	fs.writeFile("./textScrap.json", JSON.stringify(result,null,2), (err) => {
	    if (err) {
	    console.error(err);
	    return;
	    };
		console.log("File has been created");
	});

	return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});

