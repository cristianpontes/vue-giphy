var apiEndPoint = 'http://api.giphy.com/v1/gifs/search';
var publicKey = 'dc6zaTOxFJmzC';

new Vue({
    el: '#app',
    data: {
        query: '',
        results: [],
        current_gif: false
    },
    methods: {
        searchGIFs: function () {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', apiEndPoint + '?q=' + self.query.split(' ').join('+') + '&api_key=' + publicKey);
            xhr.onload = function () {
                self.results = JSON.parse(xhr.responseText).data;
            };
            xhr.send();
        },
        viewGIF: function (gif) {
            this.current_gif = gif.images.original.url;
        }
    }
});
