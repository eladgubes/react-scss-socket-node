export default {
    getCategories
}

var categories = [
    {
        title: 'Performers',
        description: 'So, you\'re planning to have an amazing event and you need to get some music for that event. Here you\'ll the most professional singers, bands, DJ\'s , night hosts, and pretty much everything you need to make your event full with music and joy. In this section you\'ll find everything you need on that topic. All you got to do is click on of the images and start your selection.',
        mainImgUrl: 'https://i.ibb.co/rmkypf1/63.jpg',
        catData: [
            {
                imgTag: 'Choose a Band',
                imgUrl: 'http://grooveit.co.il/wp-content/uploads/2017/06/BalkanGroove-band-15.jpg',
                searchKey: 'band'
            },
            {
                imgTag: 'Choose a Host',
                imgUrl: 'https://i.ibb.co/BTtkttG/800.jpg',
                searchKey: 'host'
            },
            {
                imgTag: 'Choose a DJ',
                imgUrl: 'https://i.ibb.co/yVxfV85/Omcch-BElcuw-DDh-FCw-FAgm4-DJwb-IHMBPc-URr-H9u-VYCRhzn-WFsvq8g-LYLHtkf-Adr-Gvm-klna-Gt5mhq-Smu-Ktsj1d-BYjar-I8un-IHNKy-X2kb-ZKQ72w9jq9-ZK3-Snca-0-MYSs5x9-A.png',
                searchKey: 'dj'
            },
            {
                imgTag: 'Choose a Singer',
                imgUrl: 'https://i.ibb.co/kgQK0Bd/bruno-mars-12114-12497-hd-wallpapers.jpg',
                searchKey: 'singer'
            },

        ]

    },
    {
        title: 'Food and Alcohol',
        description: 'So, you\'re planning to have an amazing event and you want your guests to get the best food in that event. In our Food and Alcohol section you\'ll find the top of the top cheff and bartenders we got here in the state. You can have a vegeterian meal at your event, or even meat only, or you can have them both! Simply click on one of the categories here and satrt your selection.',
        mainImgUrl: 'https://i.ibb.co/TPyw9Gj/pairing-wine-with-food-01.jpg',
        catData: [
            {
                imgTag: 'Choose Vegan Food',
                imgUrl: 'https://i.ibb.co/SKxKgn9/Delicious-field-salad2.jpg',
                searchKey: 'food'
            },
            {
                imgTag: 'Choose Konditorei',
                imgUrl: 'https://i.ibb.co/GVXjHRG/Banana-cake-e977d1b.jpg',
                searchKey: 'Konditorei'
            },
            {
                imgTag: 'Choose Alcohol',
                imgUrl: 'https://i.ibb.co/ZXNH992/cheff-food-3.jpg',
                searchKey: 'alcohol'
            },
            {
                imgTag: 'Choose Meet Meal',
                imgUrl: 'https://i.ndtvimg.com/i/2017-01/red-meat-620_620x350_81484123075.jpg',
                searchKey: 'food'
            },
        ]
    },
    {
        title: 'Comprehensive services',
        description: 'So, you\'re planning to have an amazing event and you need to get some special services for that event. Services such as professional photographers, maybe a fancy transportation, professional event designer or even heavy weight security? In this section you\'ll find everything you need on that topic. All you got to do is click on of the images and start your selection.',
        mainImgUrl: 'https://i.ibb.co/85brrsS/fortuneindia-2019-11-50a40f06-784e-4d5c-8538-cfdc2df54668-IMG-0542.jpg',
        catData: [
            {
                imgTag: 'Choose Security',
                imgUrl: 'https://i.ibb.co/6DhXjNs/4lry9ev-XLx87-S56sgn-L49-Td-Ro-Fg-QZv5-Oe56-I6ss-Bu-Blkru8-Q5q-Haj899c-Rr-Hqe-Xm-SIbakf-Fpm8-OPCCHw-M2-Hk-E5-B9-D95-I6z2du2-HJgj6t4r-Wg-LGDEK5xa-AWt-N7-Xl-WKw-A.jpg',
                searchKey: 'security'
            },
            {
                imgTag: 'Choose Photographers',
                imgUrl: 'https://i.ibb.co/dg7Tzxr/Freelance-photographers.jpg',
                searchKey: 'photographer'
            },
            {
                imgTag: 'Rent a limo',
                imgUrl: 'https://edelswiss-limousine.ch/wp-content/uploads/2019/10/The-Excalibur-Limousine-1024x768.jpg',
                searchKey: 'limo'
            },
            {
                imgTag: 'Choose Event Decorator',
                imgUrl: 'https://i.ibb.co/C7J1hWs/design-decor-decoration-wedding-celebration-white-roses-green-leaves-candles-bouquets-flowers-decorating-120851463.jpg',
                searchKey: 'decoration'
            },
        ]
    },

]


function getCategories() {
    return Promise.resolve(categories)
}
