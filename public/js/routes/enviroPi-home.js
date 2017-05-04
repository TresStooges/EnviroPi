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
        <main class = "landing-page-main">
            <div class="heading-wrapper landing-page-heading-wrapper">
                <h1>Welcome to EnviroPi</h1>
            </div>

            <div class = "tagline-wrapper">
                <div>Because Mother Nature shouldn't be the only one to control the weather.</div>
            </div>
            <div class = "location-list-wrapper">
                <div ng-repeat="location in $ctrl.myLocations" class="location-button">
                    <button class = "location-button-text-wrapper" ui-sref="environment({location:location.location})">
                        <div>{{location.name}}</div>
                    </div>
                </button>
            </div>

            </div>
        </main>

      `
    })

}());
