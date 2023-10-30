require("dotenv").config();
const axios = require("axios");
const util = require("util");

// Global variables
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const server = process.env.SERVER;
const port = process.env.PORT;
const url = `http://${username}:${password}@${server}:${port}`;
const check_session = "/session/check_session";

// -------------------------------------------------------- //

// Check session validity
const checkSession = async () => {
    try {
        const response = await axios.get(`${url}${check_session}`);
        console.log(response.data); // for debugging
        return response.data;
    } catch (error) {
        console.log(error);
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
        return data;
    } catch (error) {
        console.error("Error fetching access points:", error);
    }
};

// -------------------------------------------------------- //

// Log APs related clients function
const getRelatedClients = async () => {
    try {
        const accessPoints = await getAllAccessPoints();
        const ssidToClients = {}; // object to store ssid to clients

        for (const accessPoint of accessPoints) {
            if (accessPoint !== null) {
                const deviceKey = accessPoint["kismet.device.base.key"] || "";
                const ssid = accessPoint["kismet.device.base.name"] || "";

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
            console.log(
                `${ssid} clients are: ${util.inspect(relatedClients, {
                    showHidden: false,
                    depth: null,
                })} clients.`
            );
            console.log("-----------------------------------");
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
        console.log(util.inspect(data, { depth: 4, compact: false }));
        // loop
        data.forEach((d) => {
            if (d !== null) {
                let deviceKey = d["kismet.device.base.key"] || {};
                let allData = d || {}; // all data
                console.log(util.inspect(allData, { depth: 8, compact: false }));
            }
        });
    } catch (error) {
        console.error("Error fetching bluetooth devices:", error);
    }
};

// -------------------------------------------------------- //

// main
const analyzer = async () => {
    console.log("Starting analyzer...");
    try {
        const response = await axios.get(
            `${url}/devices/views/phydot11_accesspoints/devices.json`
        );
        let data = response.data;
        data = Object.keys(data).map((key) => data[key]);
        console.log(util.inspect("Access Points:", data, { depth: 8, compact: false }));

        // call functions
        checkSession();
        getAllAccessPoints();
        getRelatedClients();
        getBluetooth();
    } catch (error) {
        console.error("Error fetching access points:", error);
    }
};

// -------------------------------------------------------- //

// call main function
analyzer();
