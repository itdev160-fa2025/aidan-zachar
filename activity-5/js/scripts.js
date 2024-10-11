var data = [
    {
        name: 'GitLens',
        description: 'Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more',
        author: 'GitKraken',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: 35760286,
        stars: 4.5,
        price: 0,
        selector: 'e1'
    },
    {
        name: 'CSS Peek',
        description: 'Allow peeking to css ID and class strings as definitions from html files to respective CSS. Allows peek and goto definition.',
        author: 'Pranay Prakash',
        url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
        downloads: 6294977,
        stars: 4.5,
        price: 0,
        selector: 'e2'
    }
];

function Extension(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function (id) {
    return document.getElementById(id);
}

varWriteExtensionInfo = function(extension) {
    var selector = extension.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = extension.name;
    descEl.textContent = extension.description;
    authEl.textContent = 'by: ' + extension.author;
    downloadEl.textContent = extension.getFormattedDownloads() + ' downloads';
    starsEl.textContent = extension.getFormattedStars() + ' stars';
}

var init = function() {
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var gitlens = new Extension(data[0]);
    varWriteExtensionInfo(gitlens);

    var csspeek = new Extension(data[1]);
    varWriteExtensionInfo(csspeek);
}

init();