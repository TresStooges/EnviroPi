(function() {
    'use strict'

    angular.module('app').component('environment', {
        controller: function(dataService, $stateParams, $http) {
            const vm = this
            vm.location = location()
            console.log(vm.location);
            vm.$onInit = function() {
                var ourShit = dataService.location
                // const locationId = $stateParams.location
                //  vm.location = dataService.findById(locationId)
            }

            function location(){

                return dataService.location
            }
            // console.log(dataService.location);



        },
        template: `
        <main class="locationMain">
            <div class="locationArea">
                <h1>{{$ctrl.location[$ctrl.location.length -1].name}}</h1>
                <img class="liveImg" src="{{$ctrl.location[$ctrl.location.length -1].image}}">
                <h4>Date/Time taken</h4>
                <h1>{{$ctrl.location[$ctrl.location.length -1].timestamp | amDateFormat:'MMMM Do YYYY'}}</h4>
                <h1>{{$ctrl.location[$ctrl.location.length -1].timestamp | amDateFormat:'h:mm a'}}</h1>
                <h4>Temperature</h4>
                <h1>{{$ctrl.location[$ctrl.location.length -1].temperature}}&#176;f</h1>
            </div>
        </main>

      `
    })

}());
