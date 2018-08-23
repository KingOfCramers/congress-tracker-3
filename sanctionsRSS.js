const Parser = require("rss-parser");

let parser = new Parser();

parser.parseURL('http://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Documents/ofac.xml').then((feed) => {
  let count = 0;
  feed.items.forEach(item => {
    count++
    console.log(count);
    // console.log(`${item.title}: ${item.link}`);
  })
});