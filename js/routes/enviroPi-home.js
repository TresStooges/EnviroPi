(function() {
    'use strict'

    angular.module('app').component('landingPage', {
        controller: function() {
            const vm = this

            vm.$onInit = function() {
            }

            $('.topButton').on('click', function (event){
                $state.go('')
                console.log("You clicked me!");
            })
        },
        template: `
        <main>
            <div class="selectedArea">
                <h1>Welcome to EnviroPi</h1>
                <h5> Because Mother Nature shouldnt be the only one to control the weather</h5>
                <div class="locationButtons">
                    <button class="topButton" type="button" name="button">Location 1</button>
                </div>
                <div class="locationButtons">
                    <button class="bottomButton" type="button" name="button">Location 2</button>
                </div>
            </div>
        </main>

      `
    })

}());
