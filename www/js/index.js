/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    var x = localStorage.getItem("x");
    var array = [];
    if (x != "null") {
        let datos = localStorage.getItem("Datos");
        array = datos.split(',');
        for (i in array) {
            let newelem = $("<li><a href=''>"+array[i]+'</a><button class="deleteButton">Eliminar</button></li>');
            $("ul").append(newelem);
            $(".ui-listview").listview("refresh");
        }
    };


    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    $( '#addButton' ).click(function() {
        let text = $('#newtask').val();
        array.push(text);
        x=1;
        //json.stringify(datos);
        let newelem = $("<li><a href=''>"+text+'</a><button class="deleteButton">Eliminar</button></li>');
        $("ul").append(newelem);
        localStorage.setItem("Datos", array);
        localStorage.setItem("x", x);
        $(".ui-listview").listview("refresh");

        $(".deleteButton").on('click', function() {
            $(this).parent().remove();
            const text = $(this).parent().text();
            const text2 = text.slice(0, -8);
            var myIndex = array.indexOf(text2);
            if (myIndex !== -1) {
                array.splice(myIndex, 1);
            }
            localStorage.setItem("Datos", array);
            if (array.length == 0){
                x = null;
                localStorage.setItem("x", x);
            }
        });
    });


}
