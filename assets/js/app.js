var apiEndPoint = 'http://api.giphy.com/v1/gifs/search';
var publicKey = 'dc6zaTOxFJmzC';

new Vue({
    el: '#app',
    data: {
        query: '',
        results: false,
        current_gif: false,
        viewer_element: document.getElementById('app-viewer')
    },
    methods: {
        searchGIFs: function () {
            var self = this;
            axios.get(apiEndPoint, {
                params: {
                    api_key: publicKey,
                    q: self.query.split(' ').join('+'),
                    limit: 50
                }
            })
            .then(function (response) {
                self.results = response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        viewGIF: function (gif) {
            this.current_gif = gif.images.original.url;
        }
    }
});
