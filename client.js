const WebSocket = require('ws')
const { cv_37bit } = require('./function/fun');
var http = require('http');
function connect() {
    var ws = new WebSocket('ws://localhost:4000');
    ws.onopen = function () {
        // subscribe to some channels
        // ws.send(JSON.stringify({
        //     //.... some message the I must send when I connect ....
        // }));
    };

    ws.onmessage = function (e) {
        console.log('Message:', e.data);
        // open_door(e.data, 'CON4');
    };

    ws.onclose = function (e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        setTimeout(function () {
            connect();
        }, 1000);
    };

    ws.onerror = function (err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        ws.close();
    };
}

// connect();
open_door('e.data', 'CON4');

async function open_door(data, port) {
    console.log(cv_37bit(2639, 144233));
    // const count_person = await person.count({ licence_plate: data.PlateText });
    // if (count_person > 0) {
    //     const persons = await person.findOne({ licence_plate: data.PlateText });
    //     const hid = persons.card_number;
    //     // const faccode = 2639;
    //     // const cardnumbers = 144233;
    //     // const faccode = converter.hexToDec(hid.substring(0, 8));
    //     // const cardnumbers = converter.hexToDec(hid.substring(8, 16));
    //     // 37 bit
    //     // const checksum = cv_37bit(faccode, cardnumbers);
    //     // const hex1 = crc16xmodem(checksum.toString()).toString(16).substr(0, 2);
    //     // const hex2 = crc16xmodem(checksum.toString()).toString(16).substr(crc16xmodem(checksum.toString()).toString(16).length - 2);

    //     // const senddata = Buffer.from(checksum.toString() + hex2ascii(hex1.toString(16)) + hex2ascii(hex2.toString(16)), 'ascii');
    //     // const code = parseInt((faccode.toString(16).padStart(8, "0") + cardnumbers.toString(16).padStart(8, "0")), 16);
    //     // const code = parseInt(hid, 16);
    //     // const udpclient = dgram.createSocket('udp4');
    //     const msg_data = 'Time : ' + moment().format('YYYY-MM-DD HH:mm:ss') + ' Name : ' + persons.person_name
    //     const count_logdata = await logdatas.count({ licence_plates: data.PlateText, ip_address: data.CameraIP })
    //     if (count_logdata == 0) {

            // var url = {
            //     host: '192.168.1.111',
            //     // port: 8001,
            //     path: '/command.html?command=' + port + ',' + cv_37bit(2639, 144233),
            // };
            // http.get(url, function (resp) {
            //     var completeResponse = '';
            //     resp.on('data', function (chunk) {
            //         completeResponse += chunk;
            //     });
            //     resp.on('end', function (chunk) {
            //         console.log(completeResponse);
            //     });
            // });

            // udpclient.send(senddata, 0, senddata.length, 8888, ip_udp, function (err, bytes) {
            // 	console.log(msg_data);
            // 	udpclient.close();
            // });

    //         await logdatas.create([{
    //             times: moment().format('YYYY-MM-DD HH:mm:ss'),
    //             person_number: persons.person_number,
    //             licence_plates: persons.licence_plate,
    //             ip_address: data.CameraIP,
    //         },]);
    //     } else {
    //         const logdata = await logdatas.findOne({ ip_address: data.CameraIP }).sort({ times: 'desc' }).limit(1);
    //         if (persons.licence_plate != logdata.licence_plates) {
    //             udpclient.send(senddata, 0, senddata.length, 8888, ip_udp, function (err, bytes) {
    //                 console.log(msg_data);
    //                 udpclient.close();
    //             });
    //             await logdatas.create([{
    //                 times: moment().format('YYYY-MM-DD HH:mm:ss'),
    //                 person_number: persons.person_number,
    //                 licence_plates: persons.licence_plate,
    //                 ip_address: data.CameraIP,
    //             },]);
    //         }
    //     }
    // }
}