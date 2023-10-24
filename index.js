const axios = require("axios");
require("dotenv").config();
const util = require("util");

// -------------------------------------------------------- //

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
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// Fetch all access points and related clients
const fetchAccessPoints = async () => {
    try {
        const response = await axios.get(
            `${url}/devices/views/phydot11_accesspoints/devices.json`
        );
        const data = response.data;
        const accessPoints = Object.keys(data).map((key) => data[key]);

        // Function to fetch related clients for a given device
        const fetchRelatedClients = async (deviceKey) => {
            try {
                const response = await axios.get(
                    `${url}/phy/phy80211/related-to/${deviceKey}/devices.json`
                );
                const clientsData = response.data;
                console.log("Clients for Device Key:", deviceKey);
                console.log(util.inspect(clientsData, { depth: 2, compact: false })); // for debugging
            } catch (error) {
                console.error("Error fetching related clients:", error);
            }
        };

        accessPoints.forEach((accessPoint) => {
            const deviceKey = accessPoint["kismet.device.base.key"] || {};
            fetchRelatedClients(deviceKey); // fetch related clients for this device
        });
    } catch (error) {
        console.error("Error fetching access points:", error);
    }
};

checkSession();
fetchAccessPoints();
