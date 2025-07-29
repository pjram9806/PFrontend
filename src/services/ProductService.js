class ProductService {
    static productsList = [
            {
                id:1,
                name:'Mi Watch',
                img:'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666844819.27166740.png',
                price:2500,
                qty:2
            },
            {
                id:2,
                name:'Titan Watch',
                img:'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dweb549088/images/Titan/Catalog/90177TM02_2.jpg?sw=600&sh=600',
                price:5500,
                qty:1
            },
            {
                id:3,
                name:'FastTrack Watch',
                img:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24605604/2023/10/4/7bd33d57-c0d3-49d4-a80e-652630eb6b581696412206154-Fastrack-Men-Metal-Straps-Analogue-Watch-3277NM05-2681696412-15.jpg',
                price:6500,
                qty:3
            },
            {
                id:4,
                name:'Sonata Watch',
                img:'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4d8fcf84/images/Sonata/Catalog/77083NM01_1.jpg?sw=800&sh=800',
                price:2500,
                qty:11
            },
            {
                id:5,
                name:'Fossil Watch',
                img:'https://static.helioswatchstore.com/media/catalog/product/m/e/me3098_1.jpg',
                price:15000,
                qty:5
            },
        ];

    static getAllProducts()
    {
        return this.productsList;
    };
}

export default ProductService;