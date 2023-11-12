### Wifi Analyzer

### Project Description

This parses data from various Kismet data sources, A `wifi card`, `bluetooth adapter` and a notably the `rtl-sdr` v3 dongle. The `rtl-sdr` and `rtl_433` program, which "decodes radio transmissions from devices on the ISM bands" is really the high point so far. Everything from sensors on a fuel injection to remote controlled blinds are detectable. Pretty scary! lol but very cool. Please let me know if you have any issues getting things started or anything else. I am very receptive on and offline so please feel free to get in touch.

The tech stack keeps evolving as I learn...so as of 11/11/2023 this sheds the console formatting in favor of integrating the [QuestDB](https://questdb.io/) time-series database and a Grafana dashboard. I am already getting visualizations out of query with Grafana but nothing I'd want to show as this project has pretty just started. The focus will be on QuestDB though as it's something I am interested in...and Hopefully I can somehow integrate my Particle IoT device and my personal website into this...

---

## Technologies (to be) Used

### Software

[Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine

[QuestDB](https://questdb.io/) - QuestDB is an open-source time-series database for high throughput ingestion and fast SQL queries with operational simplicity

[Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js

[Kismet Wireless API](https://www.kismetwireless.net/docs/api) - Restful API for Kismet Wireless (one of my favorite API's)

[RTL_433](https://github.com/merbanan/rtl_433) - Program to decode radio transmissions from devices on the ISM bands. Amazing project!

### Hardware

[RTL-SDR V3](https://www.amazon.com/dp/B0BMKB3L47?th=1) - RTL-SDR V3 R860 RTL2832U Kit with 1PPM TCXO SMA F Software Defined Radio

[ALFA AWUS036ACM](https://www.amazon.com/Network-AWUS036ACM-Long-Range-Wide-Coverage-High-Sensitivity/dp/B08BJS8FXD) - ALFA AWUS036ACM 802.11ac Wi-Fi USB 3.0 adapter

---

### Installation Instructions

1. Clone the repo

`https://github.com/jim3/Wifi-Analyzer-Kismet.git`

2. Install dependencies

`npm install`

3. Run the program

`node index.js`

---
