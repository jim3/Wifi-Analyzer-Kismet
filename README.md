### Wifi Analyzer

### Project Description

This parses data from various Kismet data sources, A `wifi card`, `bluetooth adapter` and a notably the `rtl-sdr` v3 dongle. The `rtl-sdr` and `rtl_433` program, which  "decodes radio transmissions from devices on the ISM bands" is really the high point so far. Everything from sensors on a fuel injection to remote controlled blinds are detectable. Pretty scary! lol but very cool. Not sure if I am going to build on this or code a version in Python. I don't code for a living and not sure that'll ever happen (doomed a hobbyist!) so I kind of do whatever I am in the mood for these days. :p  This could make a really good starter project for a beginner (it's very basic but does take some configuring and some code to get it all working). 

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

[Particle Photon 2](https://store.particle.io/collections/wifi/products/photon-2-edge-ml-kit) - Photon 2 + Edge ML Kit

---

### Snippet of JSON response below:
```js
  // ... etc...
   'kismet.device.base.name': 'Ring Setup bf',
    'kismet.device.base.packets.crypt': 0,
    'kismet.device.base.packets.filtered': 0,
    'kismet.device.base.packets.llc': 41
  }
]
/*Clients for Device Key: 4202770D00000000_9EFAC61E41C4*/
[
  {
    'kismet.device.base.first_time': 1697807089,
    'kismet.device.base.macaddr': 'C4:41:1E:C6:FA:9E',
    'dot11.device': {
      'dot11.device.client_disconnects_last': 0,
      'dot11.device.num_probed_ssids': 0,
      'dot11.device.neighbor_report_capable': 0,
      'dot11.device.last_bssid': 'C4:41:1E:C6:FA:9E',
      'dot11.device.wps_m3_last': 0,
      'dot11.device.num_advertised_ssids': 1,
      'dot11.device.last_beaconed_ssid_record': {
        'dot11.advertisedssid.ssidlen': 8,
        'dot11.advertisedssid.cloaked': 0,
        'dot11.advertisedssid.ccx_txpower': 0,
        'dot11.advertisedssid.cisco_client_mfp': 0,
        'dot11.advertisedssid.dot11e_qbss': 0,
        'dot11.advertisedssid.probe_response': 0,
        'dot11.advertisedssid.ht_center_1': 5210,
        'dot11.advertisedssid.maxrate': 866.7,
        'dot11.advertisedssid.beacon': 1,
        'dot11.advertisedssid.ietag_checksum': 3470947301,
        'dot11.advertisedssid.ht_center_2': 0,
        'dot11.advertisedssid.ssid_hash': 387676073,
        'dot11.advertisedssid.ht_mode': 'HT80',
        'dot11.advertisedssid.first_time': 1697807089,
        'dot11.advertisedssid.beaconrate': 10,
        'dot11.advertisedssid.dot11e_channel_utilization_perc': 0,
        'dot11.advertisedssid.dot11d_country': 'US',
        'dot11.advertisedssid.crypt_set': 268436162,
        'dot11.advertisedssid.wpa_mfp_supported': 0,
        'dot11.advertisedssid.last_time': 1697810950,
        'dot11.advertisedssid.dot11e_qbss_stations': 0,
        'dot11.advertisedssid.wps_version': 16,
        'dot11.advertisedssid.dot11r_mobility_domain_id': 0,
        'dot11.advertisedssid.ssid': 'Whiteman',
        'dot11.advertisedssid.wps_config_methods': 0,
        'dot11.advertisedssid.beacons_sec': 17,
        'dot11.advertisedssid.wps_state': 1,
        'dot11.advertisedssid.wpa_mfp_required': 0,
        'dot11.advertisedssid.channel': '48',
        'dot11.advertisedssid.dot11r_mobility': 0
      },
      'dot11.device.last_beacon_timestamp': 1697810950,
      'dot11.device.min_tx_power': 0,
      'dot11.device.num_retries': 0,
      'dot11.device.datasize_retry': 0,
      'dot11.device.probe_fingerprint': 0,
      'dot11.device.num_client_aps': 0,
      'dot11.device.typeset': 1,
      'dot11.device.wps_m3_count': 0,
      'dot11.device.associated_client_map': {
        'F0:A6:54:B6:92:3D': '4202770D00000000_3D92B654A6F0',
        '20:1F:3B:5A:E0:C7': '4202770D00000000_C7E05A3B1F20'
      },
      'dot11.device.response_fingerprint': 0,
      'dot11.device.bss_timestamp': 3166231961657,
      'dot11.device.num_fragments': 0,
      'dot11.device.beacon_fingerprint': 3826098729,
      'dot11.device.datasize': 220,
      'dot11.device.num_responded_ssids': 0,
      'dot11.device.last_sequence': 0,
      'dot11.device.num_associated_clients': 2,
      'dot11.device.advertised_ssid_map': [
        {
          'dot11.advertisedssid.ssidlen': 8,
          'dot11.advertisedssid.cloaked': 0,
          'dot11.advertisedssid.ccx_txpower': 0,
          'dot11.advertisedssid.cisco_client_mfp': 0,
          'dot11.advertisedssid.dot11e_qbss': 0,
          'dot11.advertisedssid.probe_response': 0,
          'dot11.advertisedssid.ht_center_1': 5210,
          'dot11.advertisedssid.maxrate': 866.7,
          'dot11.advertisedssid.beacon': 1,
          'dot11.advertisedssid.ietag_checksum': 3470947301,
          'dot11.advertisedssid.ht_center_2': 0,
          'dot11.advertisedssid.ssid_hash': 387676073,
          'dot11.advertisedssid.ht_mode': 'HT80',
          'dot11.advertisedssid.first_time': 1697807089,
          'dot11.advertisedssid.beaconrate': 10,
          'dot11.advertisedssid.dot11e_channel_utilization_perc': 0,
          'dot11.advertisedssid.location': {
            'kismet.common.location.avg_loc': {
              'kismet.common.location.time_usec': 550589,
              'kismet.common.location.alt': 0,
              'kismet.common.location.geopoint': [
                -84.257191,
                31.621472
              ],
              'kismet.common.location.time_sec': 1697810531,
              'kismet.common.location.fix': 3
            },
            'kismet.common.location.loc_fix': 3,
            'kismet.common.location.max_loc': {
              'kismet.common.location.alt': 106.0429,
              'kismet.common.location.geopoint': [
                -84.257121,
                31.621517
              ]
            },
            'kismet.common.location.min_loc': {
              'kismet.common.location.alt': 82.365799,
              'kismet.common.location.geopoint': [
                -84.257271,
                31.621442
              ]
            },
            'kismet.common.location.last': {
              'kismet.common.location.speed': 0.1044,
              'kismet.common.location.alt': 98.456596,
              'kismet.common.location.geopoint': [
                -84.257207,
                31.621465
              ],
              'kismet.common.location.fix': 3,
              'kismet.common.location.heading': 89.752197
            }
          },
          'dot11.advertisedssid.dot11d_country': 'US',
          'dot11.advertisedssid.crypt_set': 268436162,
          'dot11.advertisedssid.wpa_mfp_supported': 0,
          'dot11.advertisedssid.last_time': 1697810950,
          'dot11.advertisedssid.dot11e_qbss_stations': 0,
          'dot11.advertisedssid.wps_version': 16,
          'dot11.advertisedssid.dot11r_mobility_domain_id': 0,
          'dot11.advertisedssid.ssid': 'Whiteman',
          'dot11.advertisedssid.wps_config_methods': 0,
          'dot11.advertisedssid.beacons_sec': 17,
          'dot11.advertisedssid.wps_state': 1,
          'dot11.advertisedssid.wpa_mfp_required': 0,
          'dot11.advertisedssid.channel': '48',
          'dot11.advertisedssid.dot11r_mobility': 0
        }
      ],
      'dot11.device.client_disconnects': 0,
      'dot11.device.max_tx_power': 0,
      'dot11.device.link_measurement_capable': 0
    },
    'kismet.device.base.crypt': 'WPA2-PSK',
    'kismet.device.base.key': '4202770D00000000_9EFAC61E41C4',
    'kismet.device.base.packets.error': 0,
    'kismet.device.base.packets.total': 17,
    'kismet.device.base.manuf': 'Belkin International Inc.',
    'kismet.device.base.basic_type_set': 1,
    'kismet.server.uuid': '1DAA64CA-6577-11EE-AF40-4B49534D4554',
    'kismet.device.base.related_devices': {},
    'kismet.device.base.packets.rx_total': 0,
    'kismet.device.base.type': 'Wi-Fi AP',
    'kismet.device.base.basic_crypt_set': 2,
    'kismet.device.base.freq_khz_map': {
      '5240000': 17
    },
    'kismet.device.base.packets.tx_total': 17,
    'kismet.device.base.phyname': 'IEEE802.11',
    'kismet.device.base.channel': '48',
    'kismet.device.base.mod_time': 1697810951,
    'kismet.device.base.num_alerts': 0,
    'kismet.device.base.seenby': [
      {
        'kismet.common.seenby.num_packets': 19,
        'kismet.common.seenby.uuid': '5FE308BD-0000-0000-0000-00C0CAB3F5AF',
        'kismet.common.seenby.first_time': 1697807089,
        'kismet.common.seenby.last_time': 1697810950
      }
    ],
    'kismet.device.base.packets.data': 0,
    'kismet.device.base.datasize': 0,
    'kismet.device.base.last_time': 1697810950,
    'kismet.device.base.commonname': 'Whiteman',
    'kismet.device.base.frequency': 5240000,
    'kismet.device.base.name': 'Whiteman',
    'kismet.device.base.packets.crypt': 0,
    'kismet.device.base.packets.filtered': 0,
// ....etc...
```

---

[Kismet](https://www.kismetwireless.net) is an 802.11 layer2 wireless network detector, sniffer, and intrusion detection system. Kismet will work with any wireless card which supports raw monitoring (rfmon) mode, and (with appropriate hardware) can sniff 802.11b, 802.11a, 802.11g, and 802.11n traffic. Kismet also supports plugins which allow sniffing other media such as ADSB (aircraft) traffic, GSM, LTE, and more.


