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
        <main>
            <div class = "heading-wrapper wrapper">
               <h1 class = "location-name">{{$ctrl.event.name}}</h1>
            </div>
            <div class = "image-wrapper wrapper">
                <div class = "image-placeholder" style="background-image: url({{$ctrl.event.image}})"></div>
             </div>
    
            <div class = "date-time-wrapper wrapper">
               <div class = "date-time-label label">Last Updated:</div>
               <div class = "date">{{$ctrl.event.timestamp | amDateFormat:'MMMM Do YYYY'}}</div>
               <di class = "time">{{$ctrl.event.timestamp | amDateFormat:'h:mm a'}}</di>
            </div>
    
            <div class = "temperature-wrapper wrapper">
                <div class = "temperature-label label"> Temperature</div>
                <div class = "temperature">{{$ctrl.event.temperature}}&#176;F</div>
            </div>
        </main>


      `
    })

}());
