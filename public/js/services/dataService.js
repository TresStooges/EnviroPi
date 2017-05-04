(function() {
    'use strict'

    angular.module('app')
    .service('dataService', service)

    service.$inject = ['$http', "$rootScope", "$interval"]

    function service ($http, $rootScope, $interval) {
        const vm = this
        this.location = []
        this.ready = $http.get('https://enviropi-backend.herokuapp.com/environment')
            .then(function(response){
                response.data.forEach(element => {
                    vm.location.push(element)
                    // $rootScope.$digest()
                })
            })
            $interval(function(){
                $http.get('https://enviropi-backend.herokuapp.com/environment')
                    .then(function(response){
                        response.data.forEach(element => {
                            vm.location.push(element)
                            // $rootScope.$digest()
                        })
                    })
            },1000)
            // .catch('Not working')

            this.findById = function (locations) {
                return this.location.find(location => location.location == locations)
            }

            this.findLatestByLocation = function(locationId){
                return this.location.filter(function(location){
                    return location.location == locationId
                })
                .pop()
            }

            this.listOfLocation = function () {
                return _.uniqBy(_.map(this.location, (v) => _.pick(v, ["location", "name"])), "location")
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
