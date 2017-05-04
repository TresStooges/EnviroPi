(function() {
    'use strict'

    angular.module('app')
    .service('dataService', service)

    service.$inject = ['$http']

    function service ($http) {
        const vm = this
        this.location = []
        $http.get('https://enviropi-backend.herokuapp.com/environment')
            .then(function(response){
                response.data.forEach(element => {
                    vm.location.push(element)
                })
            })
            .catch('Not working')

            this.findById = function (locations) {
                return this.location.find(location => location.location == locations)
            }

    }






            // this.location = [
            //     {
            //         id: 1,
            //         location: 1,
            //         name: 'Veg Room1',
            //         dateTime: new Date(),
            //         temperature: 75.5,
            //         imgPath: 'https://s3-us-west-2.amazonaws.com/enviropitresstooges/customname3.png'
            //     },
            //     {
            //         id: 2,
            //         location: 2,
            //         name: 'Flower Room',
            //         dateTime: new Date(),
            //         temperature: 68.8,
            //         imgPath: 'https://static.pexels.com/photos/4825/red-love-romantic-flowers.jpg'
            //     }
            //
            // ]

    // })

}());
