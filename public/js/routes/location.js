(function() {
    'use strict'

    angular.module('app').component('environment', {
        controller: function(dataService, $stateParams, $http, $interval) {
            const vm = this
            // vm.location = location()
            vm.$onInit = function() {
                vm.event = dataService.findLatestByLocation($stateParams.location)

                $interval(function(){
                    vm.event = dataService.findLatestByLocation($stateParams.location)
                },1000)
            }
            // function location(){
            //     return dataService.location
            // }
        },
        template: `
        <main class="locationMain">
            <div class="locationArea">
                <h1>{{$ctrl.event.name}}</h1>
                <img class="liveImg" src="{{$ctrl.event.image}}">
                <h4>Date/Time taken</h4>
                <h1>{{$ctrl.event.timestamp | amDateFormat:'MMMM Do YYYY'}}</h4>
                <h1>{{$ctrl.event.timestamp | amDateFormat:'h:mm a'}}</h1>
                <h4>Temperature</h4>
                <h1>{{$ctrl.event.temperature}}&#176;f</h1>
            </div>
        </main>

      `
    })

}());
