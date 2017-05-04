(function() {
    'use strict'

    angular.module('app').component('landingPage', {
        controller: function(dataService, $interval) {
            const vm = this

            vm.$onInit = function() {
                dataService.ready.then(function(){
                    vm.myLocations = dataService.listOfLocation()
                })
            }
        },
        template: `
        <main class="homeMain">
            <div class="selectedArea">
                <h3>Welcome to</h3>
                <h1>EnviroPi</h1>
                <h5>Because Mother Nature</h5>
                <h5>shouldnt be the only one</h5>
                <h5>to control the weather</h5>

                <div ng-repeat="location in $ctrl.myLocations" class="locationButtons">
                    <button ui-sref="environment({location:location.location})" class="topButton" type="button" name="button">{{location.name}}</button>
                </div>

            </div>
        </main>

      `
    })

}());
