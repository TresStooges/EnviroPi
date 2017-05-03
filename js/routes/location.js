(function() {
    'use strict'

    angular.module('app').component('location', {
        controller: function() {
            const vm = this

            vm.$onInit = function() {
            }

        },
        template: `
        <main>
            <div class="selectedArea">
                <h1>Location 1</h1>

            </div>
        </main>

      `
    })

}());
