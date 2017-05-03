(function() {
    'use strict'

    angular.module('app').component('environment', {
        controller: function(dataService, $stateParams) {
            const vm = this

            vm.$onInit = function() {
                const locationId = $stateParams.location
                vm.location = dataService.findById(locationId)
                console.log(vm.location);
            }
        },
        template: `
        <main class="locationMain">
            <div class="locationArea">
                <h1>{{$ctrl.location.name}}</h1>
                <img class="liveImg" src="{{$ctrl.location.imgPath}}">
                <h4>Date/Time taken</h4>
                <h1>{{$ctrl.location.dateTime | amDateFormat:'MMMM Do YYYY'}}</h4>
                <h1>{{$ctrl.location.dateTime | amDateFormat:'h:mm a'}}</h1>
                <h4>Temperature</h4>
                <h1>{{$ctrl.location.temperature}}&#176;f</h1>
            </div>
        </main>

      `
    })

}());
