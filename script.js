TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_F260C8FD_E726_D494_41EC_CB9D4542E30E",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366, this.camera_CDA846CC_E726_5CFB_41E3_7ED2624C13E5); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -30.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 67,
           "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "hfov": 7.43,
        "pitch": -9.52
       }
      ],
      "items": [
       {
        "yaw": -30.52,
        "hfov": 7.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 135,
           "width": 134,
           "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -9.52
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_F24179D6_E726_5497_41BC_AECEDD280436",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3, this.camera_CDAD16D5_E726_5C95_41E9_6D36D39A7EF5); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 87.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 67,
           "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "hfov": 7.52,
        "pitch": -3.24
       }
      ],
      "items": [
       {
        "yaw": 87.05,
        "hfov": 7.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 135,
           "width": 134,
           "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -3.24
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_F21A9FC1_E73A_2CEC_41E6_46C44B9297FF",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466, this.camera_CDD486C3_E726_5CED_41EB_71E4D3EC5BED); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -1.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 67,
           "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "hfov": 7.5,
        "pitch": -6
       }
      ],
      "items": [
       {
        "yaw": -1.13,
        "hfov": 7.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 135,
           "width": 134,
           "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -6
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7.jpeg"
      }
     ]
    }
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_F2E51B88_E73A_357B_41E1_E794E2DF3C6D",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19, this.camera_CDBE26F1_E726_5CAD_41E6_B1901EE7FEA5); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -21.23,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 67,
              "width": 67,
              "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.47,
           "pitch": -7.51
          }
         ],
         "items": [
          {
           "yaw": -21.23,
           "hfov": 7.47,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 135,
              "width": 134,
              "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -7.51
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_F001D273_E73E_57AC_41E8_B345997C458A",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3, this.camera_CDA1C6DF_E726_5C95_41E2_E9E587E675A7); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 20.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 67,
              "width": 67,
              "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.39,
           "pitch": -11.27
          }
         ],
         "items": [
          {
           "yaw": 20.22,
           "hfov": 7.39,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 135,
              "width": 134,
              "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -11.27
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_F1A950D5_E73E_3495_41E0_F24C8D2E0A3F",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7, this.camera_CDA776E7_E726_5CB5_41E8_394FBD2747E6); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -169.95,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 67,
              "width": 67,
              "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.23,
           "pitch": -16.3
          }
         ],
         "items": [
          {
           "yaw": -169.95,
           "hfov": 7.23,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 135,
              "width": 134,
              "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -16.3
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466.jpeg"
         }
        ]
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_F3B9CD4D_E726_2DF5_41CD_8AFF1B21C43D",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466, this.camera_CD87D712_E726_5D6C_41EB_E5018004AF48); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -170.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 7.42,
              "pitch": -10.27
             }
            ],
            "items": [
             {
              "yaw": -170.45,
              "hfov": 7.42,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 135,
                 "width": 134,
                 "url": "media/panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -10.27
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3.jpeg"
            }
           ]
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466",
          "backwardYaw": 20.22,
          "yaw": -170.45,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3_t.jpg",
        "id": "panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3",
        "class": "Panorama",
        "pitch": 0,
        "partial": false,
        "label": "Livingroom",
        "hfovMax": 120,
        "hfovMin": 60,
        "hfov": 360
       },
       "backwardYaw": -170.45,
       "yaw": 20.22,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7",
       "backwardYaw": -1.13,
       "yaw": -169.95,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_F33E3B0D_E72A_3574_4167_202CE8E12620",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A, this.camera_CC62C72E_E726_5DB4_417E_C4152A1DE322); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 79,
                 "width": 83,
                 "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 9.18,
              "pitch": -8.89
             }
            ],
            "items": [
             {
              "yaw": 0,
              "hfov": 9.18,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 158,
                 "width": 166,
                 "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -8.89
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_F321DDEC_E72A_6CB4_41EA_AB7116E5E5BC",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466, this.camera_CC685725_E726_5DB4_41E8_AD7F04F639FA); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 87.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "hfov": 7.39,
              "pitch": -11.27
             }
            ],
            "items": [
             {
              "yaw": 87.3,
              "hfov": 7.39,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 135,
                 "width": 134,
                 "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -11.27
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_F1ADDF51_E726_2DEC_41DD_A8FE75DB2D1E",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7, this.camera_CD9DA71C_E726_5D94_41C7_70F139EDAD4C); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -96.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "hfov": 7.4,
              "pitch": -10.77
             }
            ],
            "items": [
             {
              "yaw": -96.59,
              "hfov": 7.4,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 135,
                 "width": 134,
                 "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -10.77
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19.jpeg"
            }
           ]
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_F27EA843_E73A_53EC_41E7_1C4DA3B48D02",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19, this.camera_CDD1E6BA_E726_5C9F_41EA_F363D5258873); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -90.31,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 67,
                    "width": 67,
                    "url": "media/panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 7.42,
                 "pitch": -10.27
                }
               ],
               "items": [
                {
                 "yaw": -90.31,
                 "hfov": 7.42,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 135,
                    "width": 134,
                    "url": "media/panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -10.27
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19",
             "backwardYaw": -96.59,
             "yaw": -90.31,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7_t.jpg",
           "id": "panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7",
           "class": "Panorama",
           "pitch": 0,
           "partial": false,
           "label": "Bathroom",
           "hfovMax": 120,
           "hfovMin": 60,
           "hfov": 360
          },
          "backwardYaw": -90.31,
          "yaw": -96.59,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466",
          "backwardYaw": -21.23,
          "yaw": 87.3,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_F261F78F_E73A_3D74_41E2_DB94B80E8CBF",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19, this.camera_CD8A4702_E726_5D6F_41A0_33D1EFC2AE74); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 49.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 67,
                    "width": 67,
                    "url": "media/panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 7.5,
                 "pitch": -5.5
                }
               ],
               "items": [
                {
                 "yaw": 49.36,
                 "hfov": 7.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 135,
                    "width": 134,
                    "url": "media/panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -5.5
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19",
             "backwardYaw": 0,
             "yaw": 49.36,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A_t.jpg",
           "id": "panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A",
           "class": "Panorama",
           "pitch": 0,
           "partial": false,
           "label": "Bedroom",
           "hfovMax": 120,
           "hfovMin": 60,
           "hfov": 360
          },
          "backwardYaw": 49.36,
          "yaw": 0,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_t.jpg",
        "id": "panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19",
        "class": "Panorama",
        "pitch": 0,
        "partial": false,
        "label": "BedroomEntrance",
        "hfovMax": 120,
        "hfovMin": 120,
        "hfov": 360
       },
       "backwardYaw": 87.3,
       "yaw": -21.23,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_t.jpg",
     "id": "panorama_EEC393EA_E71A_F4BF_41C8_52794B058466",
     "class": "Panorama",
     "pitch": 0,
     "partial": false,
     "label": "Waypoint",
     "hfovMax": 120,
     "hfovMin": 60,
     "hfov": 360
    },
    "backwardYaw": -169.95,
    "yaw": -1.13,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_F3970D05_E727_ED74_41CC_2BE693AEA659",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7, this.camera_CDB4F6F9_E726_5C9D_41D2_B079B141BD20); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -93.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 67,
              "width": 67,
              "url": "media/panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.46,
           "pitch": -8.26
          }
         ],
         "items": [
          {
           "yaw": -93.33,
           "hfov": 7.46,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 135,
              "width": 134,
              "url": "media/panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -8.26
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366.jpeg"
         }
        ]
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7",
       "backwardYaw": -30.52,
       "yaw": -93.33,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366_t.jpg",
     "id": "panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366",
     "class": "Panorama",
     "pitch": 0,
     "partial": false,
     "label": "Washroom",
     "hfovMax": 120,
     "hfovMin": 60,
     "hfov": 360
    },
    "backwardYaw": -93.33,
    "yaw": -30.52,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_F677EF01_E72A_2D6C_41C8_52BE2CF9AD5F",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7, this.camera_CD80D70A_E726_5D7C_41CF_AD9F4BF03554); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -169.95,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 97,
              "width": 112,
              "url": "media/panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 12.22,
           "pitch": -13.41
          }
         ],
         "items": [
          {
           "yaw": -169.95,
           "hfov": 12.22,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 194,
              "width": 224,
              "url": "media/panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -13.41
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3.jpeg"
         }
        ]
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7",
       "backwardYaw": 87.05,
       "yaw": -169.95,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3_t.jpg",
     "id": "panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3",
     "class": "Panorama",
     "pitch": 0,
     "partial": false,
     "label": "Kitchen",
     "hfovMax": 120,
     "hfovMin": 60,
     "hfov": 360
    },
    "backwardYaw": -169.95,
    "yaw": 87.05,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_t.jpg",
  "id": "panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7",
  "class": "Panorama",
  "pitch": 0,
  "partial": false,
  "label": "Entrance",
  "hfovMax": 150,
  "hfovMin": 120,
  "hfov": 360
 },
 {
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.04,
   "pitch": -7.47
  }
 },
 "this.panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_EECC852E_E71A_3DB4_41E0_A3DF492E00D7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_EECCBD41_E71A_2DEC_41E2_3853847A89A3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_EEC393EA_E71A_F4BF_41C8_52794B058466_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_EECC4C6B_E71A_D3BC_41E4_ABBD2EC9B366_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_EEC3848B_E71A_D37C_41BB_22D398F72BC3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_EECCBDE2_E71A_2CAC_41DD_14158F9C2C19_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_EEC06495_E71A_5C95_41C3_D4120D8CF96A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "end": "this.trigger('tourEnded')"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_ED057F18_E71A_2D9C_41E8_3AAE40ACEAA7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CDD1E6BA_E726_5C9F_41EA_F363D5258873",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.41,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CDD486C3_E726_5CED_41EB_71E4D3EC5BED",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.05,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CDA846CC_E726_5CFB_41E3_7ED2624C13E5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.67,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CDAD16D5_E726_5C95_41E9_6D36D39A7EF5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.05,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CDA1C6DF_E726_5C95_41E2_E9E587E675A7",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.55,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_CDA776E7_E726_5CB5_41E8_394FBD2747E6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.87,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CDBE26F1_E726_5CAD_41E6_B1901EE7FEA5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.7,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_CDB4F6F9_E726_5C9D_41D2_B079B141BD20",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.48,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CD8A4702_E726_5D6F_41A0_33D1EFC2AE74",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -180,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_CD80D70A_E726_5D7C_41CF_AD9F4BF03554",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.95,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CD87D712_E726_5D6C_41EB_E5018004AF48",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159.78,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CD9DA71C_E726_5D94_41C7_70F139EDAD4C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.69,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CC685725_E726_5DB4_41E8_AD7F04F639FA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.77,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_CC62C72E_E726_5DB4_417E_C4152A1DE322",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -130.64,
   "pitch": 0
  }
 }
], "children": [
 {
  "playbackBarHeadWidth": 6,
  "toolTipBorderColor": "#767676",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "minHeight": 50,
  "transitionDuration": 500,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "paddingBottom": 0,
  "playbackBarBorderRadius": 0,
  "paddingRight": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarRight": 0,
  "shadow": false,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingBottom": 4,
  "paddingTop": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "progressLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingLeft": 6,
  "transitionMode": "blending",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "progressRight": 0,
  "toolTipDisplayTime": 600,
  "progressOpacity": 1,
  "playbackBarHeight": 10,
  "progressHeight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "toolTipPaddingRight": 6,
  "height": "100%",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadow": true,
  "width": "100%",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "borderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadHeight": 15,
  "progressBottom": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderRadius": 3,
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "minWidth": 100,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontSize": 12,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowOpacity": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderSize": 0
 }
], 
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "verticalAlign": "top",
 "height": "100%",
 "minHeight": 20,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "startPanoramaWithCamera": function(media, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "delayed",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "data": {
  "name": "Player540"
 },
 "contentOpaque": false,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "vrPolyfillScale": 1,
 "borderRadius": 0
})