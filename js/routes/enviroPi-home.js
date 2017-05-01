(function() {
  'use strict'

  angular.module('app')
    .component('landingPage', {
      controller: function () {
        const vm = this

        vm.$onInit = function () {
        //   vm.houses = houseService.houses
        }
      },
      template: `
        <div>
            <button type="button" name="button">Location 1</button>
            <button type="button" name="button">Location 2</button>

        </div>

      `
    })

}());
