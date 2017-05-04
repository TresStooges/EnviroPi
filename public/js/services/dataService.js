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
                        while(vm.location.length > 0) {
                            vm.location.pop()
                        }
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

            this.findAllByLocation = function(locationId){
                return this.location.filter(function(location){
                    return location.location == locationId
                })
                .sort(function(a,b){
                    return a.timestamp > b.timestamp
                })
            }
            this.findLatestByLocation = function(locationId){
                return this.findAllByLocation(locationId)
                .pop()
            }

            this.getLatestTenByLocation = function(locationId){
                return this.findAllByLocation(locationId).slice(-10)

            }

            this.listOfLocation = function () {
                return _.uniqBy(_.map(this.location, (v) => _.pick(v, ["location", "name"])), "location")
            }




    }







    // })

}());
