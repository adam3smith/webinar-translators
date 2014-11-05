//Note that this is just a fragment and won't run without the Framework code, which I've left out here to avoid cluttering. It might be a good exercise to finish the Framework code below in Scaffold

{
	"translatorID": "ee5bed1e-3465-4109-9127-a24ff769308c",
	"label": "github",
	"creator": "Sebastian Karcher",
	"target": "^https?://github\\.com/[^\\/]+/.+",
	"minVersion": "1.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "g",
	"lastUpdated": "2014-11-03 11:14:29"
}

/** Articles */
FW.Scraper({
itemType : 'webpage',
detect : FW.Xpath('//span[contains(@class, "repo-root")]//span[@itemprop="title"]'),
title : FW.Xpath('//span[contains(@class, "repo-root")]//span[@itemprop="title"]').text().trim(),
attachments : [{ url: FW.Url(),
title: "github repository",
type: "text/html" }],
creators : FW.Xpath('//div[@class="article-author"]//div[@class="author-name"]'+
'|//div[contains(@class, "field-name-field-author")]//a').text().split(/ and /).cleanAuthor("author"),
date : FW.Xpath('//div[@class="authorship"]/time/@datetime').text(),
abstractNote : FW.Xpath('//div[@class="repository-description"]').text(),
publicationTitle : "Boston Review",
language : "en-US"
});
