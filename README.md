### Wifi Analyzer

### Project Description

This parses data from various Kismet data sources, A `wifi card`, `bluetooth adapter` and a notably the `rtl-sdr` v3 dongle. The `rtl-sdr` and `rtl_433` program, which "decodes radio transmissions from devices on the ISM bands" is really the high point so far. Everything from sensors on a fuel injection to remote controlled blinds are detectable. Pretty scary! lol but very cool. Not sure if I am going to build on this or code a version in Python. I don't code for a living and not sure that'll ever happen (doomed a hobbyist!) so I kind of do whatever I am in the mood for these days. :p This could make a really good starter project for a beginner (it's very basic but does take some configuring and some code to get it all working).

Please let me know if you have any issues getting things started or anything else. I am very receptive on and offline so please feel free to get in touch!

---

## Technologies (to be) Used

### Software

[Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine

[Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js

[Kismet Wireless API](https://www.kismetwireless.net/docs/api) - Restful API for Kismet Wireless

### Hardware

[ALFA AWUS036ACM](https://www.amazon.com/Network-AWUS036ACM-Long-Range-Wide-Coverage-High-Sensitivity/dp/B08BJS8FXD) - ALFA AWUS036ACM 802.11ac Wi-Fi USB 3.0 adapter

[RTL-SDR V3](https://www.amazon.com/dp/B0BMKB3L47?th=1) - RTL-SDR V3 R860 RTL2832U Kit with 1PPM TCXO SMA F Software Defined Radio

---

Snippet of RFSensors output using the npm package `table`:

```
╔══════════════════════════╤═══════════════════╤════════╤════════════╗
║ AlectoV1-Temperature-231 │ 02:E7:9A:07:82:4C │ 433998 │ 1699569850 ║
╟──────────────────────────┼───────────────────┼────────┼────────────╢
║ Hyundai-VDO-95f412e5     │ 02:05:05:02:FC:08 │ 433958 │ 1699568335 ║
╟──────────────────────────┼───────────────────┼────────┼────────────╢
║ DSC-Security-4863542     │ 36:36:5F:04:4E:19 │ 433927 │ 1699568336 ║
╟──────────────────────────┼───────────────────┼────────┼────────────╢
║ Schrader-18F2376         │ 03:81:81:01:0A:06 │ 433903 │ 1699569197 ║
╟──────────────────────────┼───────────────────┼────────┼────────────╢
║ Schrader-18F227B         │ 03:8C:8C:01:13:06 │ 433907 │ 1699569038 ║
╟──────────────────────────┼───────────────────┼────────┼────────────╢
║ DSC-Security-2398523     │ 9B:3B:5F:04:4E:19 │ 433922 │ 1699569036 ║
╟──────────────────────────┼───────────────────┼────────┼────────────╢
║ Schrader-18F237F         │ 03:91:91:01:1A:06 │ 433905 │ 1699569083 ║
╟──────────────────────────┼───────────────────┼────────┼────────────╢
║ Hyundai-VDO-95f41384     │ 03:D8:D8:01:A4:08 │ 433954 │ 1699569178 ║
╚══════════════════════════╧═══════════════════╧════════╧════════════╝
```

---

### Installation Instructions

1. Clone the repo

`https://github.com/jim3/Wifi-Analyzer-Kismet.git`

2. Install dependencies

`npm install`

3. Run the program

`node index.js`

---
