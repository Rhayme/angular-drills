angular.module('apiApp').service('marvelSer', function($http) {

    this.getData = function() {
        return $http({
            method: 'GET',
            url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1dfb9685746dbaf138e49c3da6368edd&hash=04286b6b41bf3b36676908cf57180ac1'
        }).then(function(response) {
            var characters = response.data.data.results;
            // console.log(characters);
            var copyHero = characters.map(function(hero) {

                return {
                    name: hero.name,
                    thumb: hero.thumbnail.path + "/portrait_fantastic." +
                        hero.thumbnail.extension,
                    link: hero.urls[0].url + 'target="_blank"'

                }
            })

            return copyHero;
        })

    }

})