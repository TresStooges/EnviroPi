(function() {
    'use strict'

    angular.module('app').component('environment', {
        controller: function() {
            const vm = this

            vm.$onInit = function() {
            }

        },
        template: `
        <main class="locationMain">
            <div class="locationArea">
                <h1>Location 1</h1>
                <img class="liveImg" src="https://i.ytimg.com/vi/NAfauLBWwmQ/maxresdefault.jpg">
                <h4>Date/Time taken</h4>
                <h1>May 2, 2017</h1>
                <h1>11:55pm</h1>
                <h4>Temperature</h4>
                <h1>74&#176;f</h1>


            </div>
        </main>

      `
    })

}());
