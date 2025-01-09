import { GameModel } from "../contracts/game-model";


export const database: GameModel[] = [
    {
        "id": 1,
        "name": "Black Myth: Wukong",
        "minimum_age": 16,
        "purchase_link": "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
        "price": "R$199,99",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/257048125/movie480_vp9.webm?t=1729236218",
        "minimum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i5-8400 / AMD Ryzen 5 2600",
          "memory": "16 GB RAM",
          "graphics": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
          "storage": "50 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i7-9700K / AMD Ryzen 7 3700X",
          "memory": "32 GB RAM",
          "graphics": "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800",
          "storage": "50 GB available space"
        },
        "dlc": {
          "has_dlc": false,
          "total_dlc": 0,
          "dlc_names": []
        }
      },
      {
        "id": 2,
        "name": "ELDEN RING",
        "minimum_age": 18,
        "purchase_link": "https://store.steampowered.com/app/1245620/ELDEN_RING/",
        "price": "R$229,90",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/256889456/movie480_vp9.webm?t=1654109241",
        "minimum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i5-8400 / AMD Ryzen 3 3300X",
          "memory": "12 GB RAM",
          "graphics": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
          "storage": "60 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10/11",
          "processor": "Intel Core i7-8700K / AMD Ryzen 5 3600X",
          "memory": "16 GB RAM",
          "graphics": "NVIDIA GeForce GTX 1070 / AMD Radeon RX Vega 56",
          "storage": "60 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 1,
          "dlc_names": ["ELDEN RING - Expansion Pass"]
        }
      },
      {
        "id": 3,
        "name": "Ghost of Tsushima VERSÃO DO DIRETOR",
        "minimum_age": 18,
        "purchase_link": "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_VERSO_DO_DIRETOR/",
        "price": "R$249,90",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/257022058/movie480_vp9.webm?t=1715871580",
        "minimum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i5-8400 / AMD Ryzen 5 2600",
          "memory": "16 GB RAM",
          "graphics": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
          "storage": "60 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10/11",
          "processor": "Intel Core i7-9700K / AMD Ryzen 7 3700X",
          "memory": "32 GB RAM",
          "graphics": "NVIDIA GeForce RTX 2080 / AMD Radeon RX 6800",
          "storage": "60 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 2,
          "dlc_names": ["Iki Island Expansion", "Digital Deluxe Upgrade"]
        }
      },
      {
        "id": 4,
        "name": "Sekiro™: Shadows Die Twice - GOTY Edition",
        "minimum_age": 18,
        "purchase_link": "https://store.steampowered.com/app/814380/Sekiro/",
        "price": "R$199,99",
        "video_link": "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/movie.mp4",
        "minimum_recommendations": {
          "os": "Windows 7/8/10",
          "processor": "Intel Core i3-2100 / AMD FX-6300",
          "memory": "4 GB RAM",
          "graphics": "NVIDIA GeForce GTX 760 / AMD Radeon HD 7950",
          "storage": "25 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i5-2500K / AMD Ryzen 5 1400",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 970 / AMD Radeon RX 570",
          "storage": "25 GB available space"
        },
        "dlc": {
          "has_dlc": false,
          "total_dlc": 0,
          "dlc_names": []
        }
      },
      {
        "id": 5,
        "name": "DARK SOULS™ III",
        "minimum_age": 16,
        "purchase_link": "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
        "price": "R$179,99",
        "video_link": "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/movie.mp4",
        "minimum_recommendations": {
          "os": "Windows 7 SP1 64bit",
          "processor": "Intel Core i3-2100 / AMD FX-6300",
          "memory": "4 GB RAM",
          "graphics": "NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7950",
          "storage": "25 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10 64bit",
          "processor": "Intel Core i7-3770 / AMD FX-8350",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 970 / ATI Radeon RX 570",
          "storage": "25 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 2,
          "dlc_names": ["Ashes of Ariandel", "The Ringed City"]
        }
      },
      {
        "id": 6,
        "name": "DARK SOULS™ II",
        "minimum_age": 16,
        "purchase_link": "https://store.steampowered.com/app/335300/DARK_SOULS_II/",
        "price": "R$129,99",
        "video_link": "https://cdn.cloudflare.steamstatic.com/steam/apps/335300/movie.mp4",
        "minimum_recommendations": {
          "os": "Windows 7 SP1 64bit",
          "processor": "Intel Core 2 Duo E8500 / AMD Phenom II X2 555",
          "memory": "4 GB RAM",
          "graphics": "NVIDIA GeForce GTX 465 / ATI Radeon HD 6870",
          "storage": "15 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10 64bit",
          "processor": "Intel Core i5 3570 / AMD FX-8350",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7850",
          "storage": "15 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 3,
          "dlc_names": ["Crown of the Sunken King", "Crown of the Old Iron King", "Crown of the Ivory King"]
        }
      },
      {
        "id": 7,
        "name": "F1® 24",
        "minimum_age": 12,
        "purchase_link": "https://store.steampowered.com/app/000000/F1_24/",
        "price": "R$299,99",
        "video_link": "https://cdn.cloudflare.steamstatic.com/steam/apps/000000/movie.mp4",
        "minimum_recommendations": {
          "os": "Windows 10 64bit",
          "processor": "Intel Core i3-2130 / AMD FX 4300",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GTX 1050 Ti / AMD RX 560",
          "storage": "80 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 11 64bit",
          "processor": "Intel Core i7-9700K / AMD Ryzen 7 3700X",
          "memory": "16 GB RAM",
          "graphics": "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800",
          "storage": "80 GB available space"
        },
        "dlc": {
          "has_dlc": false,
          "total_dlc": 0,
          "dlc_names": []
        }
      },





      {
        "id": 4,
        "name": "Sekiro™: Shadows Die Twice - GOTY Edition",
        "minimum_age": 18,
        "purchase_link": "https://store.steampowered.com/app/814380/Sekiro/",
        "price": "R$274,00",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/256806899/movie480_vp9.webm?t=1603837979",
        "minimum_recommendations": {
          "os": "Windows 7/8/10",
          "processor": "Intel Core i3-2100 / AMD FX-6300",
          "memory": "4 GB RAM",
          "graphics": "NVIDIA GeForce GTX 760 / AMD Radeon HD 7950",
          "storage": "25 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i5-2500K / AMD Ryzen 5 1400",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 970 / AMD Radeon RX 570",
          "storage": "25 GB available space"
        },
        "dlc": {
          "has_dlc": false,
          "total_dlc": 0,
          "dlc_names": []
        }
      },
      {
        "id": 5,
        "name": "DARK SOULS™ III",
        "minimum_age": 16,
        "purchase_link": "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
        "price": "R$229,90",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/256663134/movie480.webm?t=1700587302",
        "minimum_recommendations": {
          "os": "Windows 7 SP1 64bit",
          "processor": "Intel Core i3-2100 / AMD FX-6300",
          "memory": "4 GB RAM",
          "graphics": "NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7950",
          "storage": "25 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10 64bit",
          "processor": "Intel Core i7-3770 / AMD FX-8350",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 970 / ATI Radeon RX 570",
          "storage": "25 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 2,
          "dlc_names": ["Ashes of Ariandel", "The Ringed City"]
        }
      },
      {
        "id": 6,
        "name": "DARK SOULS™ II",
        "minimum_age": 16,
        "purchase_link": "https://store.steampowered.com/app/335300/DARK_SOULS_II/",
        "price": "R$154,90",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/2038280/movie480.webm?t=1447372195",
        "minimum_recommendations": {
          "os": "Windows 7 SP1 64bit",
          "processor": "Intel Core 2 Duo E8500 / AMD Phenom II X2 555",
          "memory": "4 GB RAM",
          "graphics": "NVIDIA GeForce GTX 465 / ATI Radeon HD 6870",
          "storage": "15 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10 64bit",
          "processor": "Intel Core i5 3570 / AMD FX-8350",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7850",
          "storage": "15 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 3,
          "dlc_names": ["Crown of the Sunken King", "Crown of the Old Iron King", "Crown of the Ivory King"]
        }
      },
      {
        "id": 7,
        "name": "F1® 24",
        "minimum_age": 12,
        "purchase_link": "https://store.steampowered.com/app/2488620/F1_24/",
        "price": "R$359,00",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/257027461/movie480_vp9.webm?t=1717208070",
        "minimum_recommendations": {
          "os": "Windows 10 64bit",
          "processor": "Intel Core i3-2130 / AMD FX 4300",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GTX 1050 Ti / AMD RX 560",
          "storage": "80 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 11 64bit",
          "processor": "Intel Core i7-9700K / AMD Ryzen 7 3700X",
          "memory": "16 GB RAM",
          "graphics": "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800",
          "storage": "80 GB available space"
        },
        "dlc": {
          "has_dlc": false,
          "total_dlc": 0,
          "dlc_names": []
        }
      },



      {
        "id": 8,
        "name": "DRAGON BALL: Sparking! ZERO",
        "minimum_age": 12,
        "purchase_link": "https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/",
        "price": "R$282,50",
        "video_link": "https://www.youtube.com/watch?v=j9mTwNMJydM",
        "minimum_recommendations": {
          "os": "Windows 7",
          "processor": "Intel Core i3-4160 / AMD Ryzen 3 1200",
          "memory": "6 GB RAM",
          "graphics": "NVIDIA GeForce GTX 750 Ti / AMD Radeon RX 460",
          "storage": "20 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i7-6700K / AMD Ryzen 5 1600",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
          "storage": "20 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 2,
          "dlc_names": ["Dragon Ball Sparking! Zero - Expansion Pack", "Dragon Ball Sparking! Zero - Special Moves DLC"]
        }
      },
      {
        "id": 9,
        "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles",
        "minimum_age": 12,
        "purchase_link": "https://store.steampowered.com/app/1490890/Demon_Slayer_Kimetsu_no_Yaiba_The_Hinokami_Chronicles/",
        "price": "R$ 289,00",
        "video_link": "https://video.cloudflare.steamstatic.com/store_trailers/256842621/movie480_vp9.webm?t=1626110279",
        "minimum_recommendations": {
          "os": "Windows 7",
          "processor": "Intel Core i3-4160 / AMD Ryzen 3 1200",
          "memory": "8 GB RAM",
          "graphics": "NVIDIA GeForce GTX 960 / AMD Radeon RX 460",
          "storage": "30 GB available space"
        },
        "maximum_recommendations": {
          "os": "Windows 10",
          "processor": "Intel Core i7-6700 / AMD Ryzen 5 1600",
          "memory": "16 GB RAM",
          "graphics": "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
          "storage": "30 GB available space"
        },
        "dlc": {
          "has_dlc": true,
          "total_dlc": 2,
          "dlc_names": ["Demon Slayer - Hinokami Chronicles - Additional Character Pack", "Demon Slayer - Hinokami Chronicles - Story DLC"]
        }
      }
];