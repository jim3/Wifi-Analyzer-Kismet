require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const { table } = require("table");

// Global variables
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const server = process.env.SERVER;
const port = process.env.PORT;
const url = `http://${username}:${password}@${server}:${port}`;
const check_session = "/session/check_session";
const interface_list = "/datasource/list_interfaces.json";
const all_sources = `${url}/datasource/all_sources.json`;

// -------------------------------------------------------- //

// Check session validity
const checkSession = async () => {
    try {
        const response = await axios.get(`${url}${check_session}`);
        // console.log(response.data); // for debugging
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// -------------------------------------------------------- //

// Get RF sensors
const getRFSensors = async () => {
    const response = await axios.get(`${url}/devices/views/phy-RFSENSOR/devices.json`);
    const data = response.data;
    // console.log(util.inspect(data, { depth: 4, compact: false }));
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

            const output = table(arr);
            console.log(output);
        }
    } catch (error) {
        console.error("Error fetching RF sensors:", error);
    }
};

// -------------------------------------------------------- //

// Get all clients of a specific access point
const getRelatedClients = async (data) => {
    try {
        const ssidToClients = {}; // object to store ssid to clients

        for (const d of data) {
            if (d !== null) {
                const deviceKey = d["kismet.device.base.key"] || "";
                const ssid = d["kismet.device.base.name"] || "";

                if (deviceKey && ssid) {
                    const response = await axios.get(
                        `${url}/phy/phy80211/related-to/${deviceKey}/devices.json`
                    );
                    const relatedClients = response.data;
                    ssidToClients[ssid] = relatedClients;
                }
            }
        }

        for (const ssid in ssidToClients) {
            const relatedClients = ssidToClients[ssid];
            // list of clients
            console.log(
                `${ssid} ${util.inspect(relatedClients, {
                    showHidden: false,
                    depth: null,
                })}`
            );
        }
    } catch (error) {
        console.error("Error fetching access points:", error);
    }
};

// -------------------------------------------------------- //

const getBluetooth = async () => {
    try {
        const response = await axios.get(
            `${url}/devices/views/phy-Bluetooth/devices.json`
        );
        const data = response.data;
        // console.log(util.inspect(data, { depth: 4, compact: false }));
        // loop
        data.forEach((d) => {
            if (d !== null) {
                let deviceKey = d["kismet.device.base.key"] || {};
            }
        });
    } catch (error) {
        console.error("Error fetching bluetooth devices:", error);
    }
};

// -------------------------------------------------------- //

// Log all access points
const getAllAccessPoints = async () => {
    try {
        const response = await axios.get(
            `${url}/devices/views/phydot11_accesspoints/devices.json`
        );
        let data = response.data;
        data = Object.keys(data).map((key) => data[key]);
        getRelatedClients(data);
    } catch (error) {
        console.error("Error fetching access points:", error);
    }
};

checkSession();
getRFSensors();
getAllAccessPoints();
getBluetooth();
