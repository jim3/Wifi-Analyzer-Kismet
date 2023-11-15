require("dotenv").config();
const axios = require("axios");
const util = require("util");
const { Sender } = require("@questdb/nodejs-client");

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const server = process.env.SERVER;
const port = process.env.PORT;
const url = `http://${username}:${password}@${server}:${port}`;
const check_session = "/session/check_session";
const accesspoints = "/devices/views/phydot11_accesspoints/devices.json";
const rfsensor = "/devices/views/phy-RFSENSOR/devices.json";

const checkSession = async () => {
    try {
        const response = await axios.get(`${url}${check_session}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// Get RF sensors
const getRFSensors = async () => {
    // calls the kismet `phy-RFSENSOR` endpoint for a list of sensor values (rtl-sdr & rtl_433)
    const response = await axios.get(`${url}${rfsensor}`);
    const data = response.data;
    let arr = [];
    try {
        for (d of data) {
            if (d !== null) {
                const manufacturer = d["kismet.device.base.name"] || "";
                const macaddr = d["kismet.device.base.macaddr"] || "";
                const frequency = d["kismet.device.base.frequency"] || "";
                const last_time = d["kismet.device.base.last_time"] || "";
                arr.push([manufacturer, macaddr, frequency, last_time]);
            }
        }
    } catch (error) {
        console.error("Error fetching RF sensors:", error);
    }
    return arr;
};

// -------------------------------------------------------- //

// Get all clients of a specific access point
const getRelatedClients = async () => {
    // call the `phydot11_accesspoints` to get list of all AP's
    const response = await axios.get(`${url}${accesspoints}`);
    let data = response.data;
    data = Object.keys(data).map((key) => data[key]);
    const ssidToClients = {}; // object to store ssid to clients
    // loop
    try {
        for (const d of data) {
            if (d !== null) {
                // extract all AP device key's so we can make our "all client of ap's" api call
                const deviceKey = d["kismet.device.base.key"] || "";
                const ssid = d["kismet.device.base.name"] || "";

                if (deviceKey && ssid) {
                    // get all clients of a specific access point 
                    // with the `/phy/phy80211/related-to/${deviceKey}/devices.json`
                    const response = await axios.get(
                        `${url}/phy/phy80211/related-to/${deviceKey}/devices.json` 
                    );
                    const relatedClients = response.data;
                    ssidToClients[ssid] = relatedClients; // store ssid to clients
                }
            }
        }
    } catch (error) {
        console.error("Error fetching access points:", error);
    }
    return ssidToClients;
};

// -------------------------------------------------------- //

// uses the QuestDB Node.js Client to insert our values in the db
async function run() {
    const sender = new Sender();
    await sender.connect({ port: 9009, host: "localhost" });

    const rfSensors = await getRFSensors(); // -> [{}, {}, ...]
    // insert the RF sensor data into QuestDB
    for (const sensor of rfSensors) {
        if (sensor.manufacturer) {
            sender
                .table("sensors") // table name
                .stringColumn("manufacturer", sensor.manufacturer)
                .stringColumn("macaddr", sensor.macaddr)
                .floatColumn("frequency", sensor.frequency)
                .timestampColumn("last_time", sensor.last_time)
                .atNow();
        }
    }

    const results = await getRelatedClients(); // -> { ssid: [clients] }
    for (const result in results) {
        if (results.hasOwnProperty(result)) {
            const clients = results[result];

            clients.forEach((client) => {
                const macaddr = client["kismet.device.base.macaddr"] || "";
                const deviceName = client["kismet.device.base.manuf"] || "";
                const last_time = client["kismet.device.base.last_time"] || "";
                let frequency = client["kismet.device.base.frequency"] || "";
                frequency = parseInt(result.frequency) || 0;
                sender
                    .table("clients")
                    .stringColumn("ssid", result)
                    .stringColumn("macaddr", macaddr)
                    .stringColumn("deviceName", deviceName)
                    .timestampColumn("last_time", last_time)
                    .floatColumn("frequency", frequency)
                    .atNow();
            });
        }
    }
    
    await sender.flush();
    await sender.close();
    return new Promise((resolve) => resolve(0));
}

run();
