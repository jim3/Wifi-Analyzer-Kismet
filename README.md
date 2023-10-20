### Wifi Analyzer

This is just an initialization of the project...as always, this repo is more of a learning exercise than anything else, sort of my "coding diary", for lack of a better term. I happen to pick up a lot of "toys" recently and looking to build some cool things with them...

### Project Description

One very useful endpoint of the Kismet Wireless API is the "Device views" endpoint. Specifically, when just getting started is the "Access point devies view":
`/devices/views/phydot11_accesspoints/devices.json`

This endpoint returns Wi-Fi access point devices _only_. Read more about it here: [Access points device view#](https://www.kismetwireless.net/docs/api/wifi_dot11/#access-points-device-view)

The other useful (and related) endpoing is the _"Wi-fi related devices"_ endpoint: `/phy/phy80211/related-to/{DEVICEKEY}/devices.json`. This endpoint will return an array of complete device records of the associated devices, for example the clients associated to a particular access point. These two endpoints are very useful for starting out with the Kismet Wireless API.

**Note**: Credit should go to [Introduction to Kismet Wireless REST API](https://www.youtube.com/watch?v=3LJo4RPT9JE) excellent YouTube videos for the "tip" on what the above mentioned endpoints can do. I hope to build on this and add some additional functionality. If you are just getting started check out his videos, it'll save you some time.

---

## Technologies (to be) Used

### Software

[Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine

[Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js

[Kismet Wireless API](https://www.kismetwireless.net/docs/api) - Restful API for Kismet Wireless

### Hardware

[ALFA AWUS036ACM](https://www.amazon.com/Network-AWUS036ACM-Long-Range-Wide-Coverage-High-Sensitivity/dp/B08BJS8FXD) - ALFA AWUS036ACM 802.11ac Wi-Fi USB 3.0 adapter

[RTL-SDR V3](https://www.amazon.com/dp/B0BMKB3L47?th=1) - RTL-SDR V3 R860 RTL2832U Kit with 1PPM TCXO SMA F Software Defined Radio

[Particle Photon 2](https://store.particle.io/collections/wifi/products/photon-2-edge-ml-kit) - Photon 2 + Edge ML Kit

---

### Example Output
```js
]
Clients for Device Key: 4202770D00000000_4DC413D3B968
[
  {
    'kismet.device.base.first_time': 1697740385,
    'kismet.device.base.macaddr': '68:B9:D3:13:C4:4D',
    'dot11.device': {
      'dot11.device.client_disconnects_last': 0,
      'dot11.device.num_probed_ssids': 0,
      'dot11.device.neighbor_report_capable': 0,
      'dot11.device.last_bssid': '68:B9:D3:13:C4:4D',
      'dot11.device.wps_m3_last': 0,
      'dot11.device.num_advertised_ssids': 1,
      'dot11.device.last_beaconed_ssid_record': [Object],
      'dot11.device.last_beacon_timestamp': 1697757346,
      'dot11.device.min_tx_power': 0,
      'dot11.device.num_retries': 0,
      'dot11.device.datasize_retry': 0,
      'dot11.device.probe_fingerprint': 0,
      'dot11.device.num_client_aps': 0,
      'dot11.device.typeset': 257,
      'dot11.device.wps_m3_count': 0,
      'dot11.device.associated_client_map': {},
      'dot11.device.response_fingerprint': 0,
      'dot11.device.bss_timestamp': 19341005261,
      'dot11.device.num_fragments': 0,
      'dot11.device.beacon_fingerprint': 1794870389,
      'dot11.device.datasize': 0,
      'dot11.device.num_responded_ssids': 0,
      'dot11.device.last_sequence': 0,
      'dot11.device.num_associated_clients': 0,
      'dot11.device.advertised_ssid_map': [Array],
      'dot11.device.client_disconnects': 0,
      'dot11.device.max_tx_power': 0,
      'dot11.device.link_measurement_capable': 0
    },
    'kismet.device.base.crypt': 'Open',
    'kismet.device.base.key': '4202770D00000000_4DC413D3B968',
    'kismet.device.base.packets.error': 0,
    'kismet.device.base.packets.total': 7308,
    'kismet.device.base.manuf': 'Shenzhen Trolink Technology CO, LTD',
    'kismet.device.base.basic_type_set': 1,
    'kismet.device.base.packets.rrd': {
      'kismet.common.rrd.day_vec': [Array],
      'kismet.common.rrd.blank_val': 0,
      'kismet.common.rrd.last_time': 1697757353,
      'kismet.common.rrd.serial_time': 1697757353,
      'kismet.common.rrd.minute_vec': [Array],
      'kismet.common.rrd.hour_vec': [Array]
    },
    'kismet.device.base.tx_packets.rrd': {
      'kismet.common.rrd.day_vec': [Array],
      'kismet.common.rrd.blank_val': 0,
      'kismet.common.rrd.last_time': 1697757353,
      'kismet.common.rrd.serial_time': 1697757353,
      'kismet.common.rrd.minute_vec': [Array],
      'kismet.common.rrd.hour_vec': [Array]
    },
    'kismet.server.uuid': '44829CC4-6708-11EE-8F94-4B49534D4554',
    'kismet.device.base.related_devices': {},
    'kismet.device.base.packets.rx_total': 0,
    'kismet.device.base.type': 'Wi-Fi AP',
    'kismet.device.base.basic_crypt_set': 0,
    'kismet.device.base.freq_khz_map': {
      '2412000': 455,
      '2417000': 297,
      '2422000': 539,
      '2427000': 744,
      '2432000': 773,
      '2437000': 2223,
      '2442000': 317,
      '2447000': 54,
      '2452000': 452,
      '2457000': 63,
      '2462000': 568,
      '2467000': 530,
      '2472000': 289,
      '2484000': 1,
      '5180000': 2,
      '5200000': 1
    },
    'kismet.device.base.packets.tx_total': 7308,
    'kismet.device.base.phyname': 'IEEE802.11',
    'kismet.device.base.channel': '5',
    'kismet.device.base.mod_time': 1697757347,
    'kismet.device.base.num_alerts': 0,
    'kismet.device.base.seenby': [
      [Object]
    ],
    'kismet.device.base.packets.data': 0,
    'kismet.device.base.datasize': 0,
    'kismet.device.base.last_time': 1697757346,
    'kismet.device.base.commonname': 'WVCA98G9MW7PVHYR',
    'kismet.device.base.signal': {
      'kismet.common.signal.type': 'dbm',
      'kismet.common.signal.carrierset': 3,
      'kismet.common.signal.last_signal': -75,
      'kismet.common.signal.encodingset': 3,
      'kismet.common.signal.maxseenrate': 60,
      'kismet.common.signal.max_signal': 12,
      'kismet.common.signal.max_noise': 0,
      'kismet.common.signal.last_noise': 0,
      'kismet.common.signal.min_noise': 0,
      'kismet.common.signal.signal_rrd': [Object],
      'kismet.common.signal.min_signal': -86
    },
    'kismet.device.base.frequency': 2472000,
    'kismet.device.base.name': 'WVCA98G9MW7PVHYR',
    'kismet.device.base.packets.crypt': 0,
    'kismet.device.base.packets.filtered': 0,
    'kismet.device.base.packets.llc': 7308
  }
]
Clients for Device Key: 4202770D00000000_F86384B33F38
[
  {
    'kismet.device.base.first_time': 1697740386,
    'kismet.device.base.macaddr': '38:3F:B3:84:63:F8',
    'dot11.device': {
      'dot11.device.client_disconnects_last': 1697756756,
      'dot11.device.num_probed_ssids': 0,
      'dot11.device.neighbor_report_capable': 0,
      'dot11.device.wpa_handshake_list': [Object],
      'dot11.device.last_bssid': '38:3F:B3:84:63:F8',
      'dot11.device.wps_m3_last': 0,
      'dot11.device.num_advertised_ssids': 1,
      'dot11.device.last_beaconed_ssid_record': [Object],
      'dot11.device.responded_ssid_map': [Array],
      'dot11.device.last_beacon_timestamp': 1697757346,
      'dot11.device.ssid_beacon_packet': [Object],
      'dot11.device.min_tx_power': 0,
      'dot11.device.num_retries': 1988,
      'dot11.device.datasize_retry': 980170,
      'dot11.device.probe_fingerprint': 0,
      'dot11.device.num_client_aps': 0,
      'dot11.device.typeset': 259,
      'dot11.device.wps_m3_count': 0,
      'dot11.device.associated_client_map': [Object],
      'dot11.device.response_fingerprint': 0,
      'dot11.device.bss_timestamp': 45711258598,
      'dot11.device.num_fragments': 5,
      'dot11.device.beacon_fingerprint': 3198191836,
      'dot11.device.datasize': 2979630,
      'dot11.device.num_responded_ssids': 1,
      'dot11.device.last_sequence': 0,
      'dot11.device.num_associated_clients': 14,
      'dot11.device.advertised_ssid_map': [Array],
      'dot11.device.client_disconnects': 2,
      'dot11.device.max_tx_power': 0,
      'dot11.device.link_measurement_capable': 0
    },
    'kismet.device.base.crypt': 'WPA2-PSK',
    'kismet.device.base.key': '4202770D00000000_F86384B33F38',
    'kismet.device.base.packets.error': 0,
    'kismet.device.base.packets.total': 5555,
    'kismet.device.base.manuf': 'Vantiva USA LLC',
    'kismet.device.base.basic_type_set': 9,
    // ... truncated for brevity
]
```

---

[Kismet](https://www.kismetwireless.net) is an 802.11 layer2 wireless network detector, sniffer, and intrusion detection system. Kismet will work with any wireless card which supports raw monitoring (rfmon) mode, and (with appropriate hardware) can sniff 802.11b, 802.11a, 802.11g, and 802.11n traffic. Kismet also supports plugins which allow sniffing other media such as ADSB (aircraft) traffic, GSM, LTE, and more.


