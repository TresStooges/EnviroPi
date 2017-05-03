(function() {
    'use strict'

    angular.module('app').component('landingPage', {
        controller: function() {
            const vm = this

            vm.$onInit = function() {

            }

            $('.topButton').on('click', function (event){
                //  $state.go('location')
            })
        },
        template: `
        <main class="homeMain">
            <div class="selectedArea">
                <h3>Welcome to</h3>
                <h1>EnviroPi</h1>
                <h5>Because Mother Nature</h5>
                <h5>shouldnt be the only one</h5>
                <h5>to control the weather</h5>

                <div class="locationButtons">
                    <button ui-sref="environment({location:1})" class="topButton" type="button" name="button">Location 1</button>
                </div>
                <div class="locationButtons">
                    <button ui-sref="environment({location:2})" class="bottomButton" type="button" name="button">Location 2</button>
                </div>
            </div>
        </main>

      `
    })

}());
