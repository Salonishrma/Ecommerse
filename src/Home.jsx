import React, { useState } from 'react';
import './Men.css';
function Home(){
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
  
    const products = [
      {
        id: 1,
        name: "SOLETHREADS Stellar Sneakers",
        image: "https://m.media-amazon.com/images/I/5184XJcvbEL._SY695_.jpg",
        price: "₹820",
        mrp: "₹11,999",
        discount: "45% off",
        sizes: ["6UK", "7UK", "8UK", "9UK"],
        colors: {
          beige: "https://m.media-amazon.com/images/I/5184XJcvbEL._SY695_.jpg",
          pink: "https://m.media-amazon.com/images/I/518Mthzy7jL._SY695_.jpg"
        },
        details: {
          material: "Polyurethane",
          closureType: "Lace-Up",
          heelType: "No Heel",
          waterResistance: "Water Resistant",
          soleMaterial: "Polyurethane",
          style: "Sneakers",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹820.00 with 77% savings"
      },
      {
        id: 2,
        name: "Campus Mens Syrus Running Shoe",
        image: "https://m.media-amazon.com/images/I/71flVch58cL._SY695_.jpg",
        price: "₹1,075",
        mrp: "₹1,790",
        discount: "45% off",
        sizes: ["9UK", "10UK"],
        colors: {
          black: "https://m.media-amazon.com/images/I/61HoEdqpIzL._SY695_.jpg",
          grey: "https://m.media-amazon.com/images/I/81Ll9mEruzL._SX695_.jpg",
          blue:"https://m.media-amazon.com/images/I/71flVch58cL._SY695_.jpg"
        },
        details: {
          material: "Polyurethane",
          closureType: "Lace-Up",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Rubber",
          style: "Boat Shoes",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹1,075 with 66% savings"
      },
      
      {
          id: 3,
          name: "ASIAN Men's Wonder Sports Running,Walking & Gym Shoes",
          image: "https://m.media-amazon.com/images/I/41mWz2aRrTL._SY695_.jpg",
          price: "₹5,175",
          mrp: "₹8,790",
          discount: "75% off",
          sizes: ["7UK", "8UK", "9UK", "10UK"],
          colors: {
            white: "https://m.media-amazon.com/images/I/41mWz2aRrTL._SY695_.jpg",
            navy: "https://m.media-amazon.com/images/I/81Ppvv3MLpL._SY695_.jpg",
            Black :"https://m.media-amazon.com/images/I/61q46ZUUugL._SY695_.jpg"
          },
          details: {
            material: "Rubber",
            closureType: "Lace-Up",
            heelType: "Flat",
            waterResistance: "Not Water Resistant",
            soleMaterial: "Ethylene Vinyl Acetate",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹51,75 with 66% savings"
        },
  
        {
          id: 4,
          name: "ASIAN Men's Tarzan-11 White Casual Sneaker High-Neck Shoes",
          image: "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg",
          price: "₹749",
          mrp: "₹889",
          discount: "10% off",
          sizes: ["6UK", "8UK", "10UK"],
          colors: {
            WHITE_NAVY: "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg",
            GREY_BLACK: "https://m.media-amazon.com/images/I/81GNU-vMAmL._SY695_.jpg",
            WHITE_LGREY :"https://m.media-amazon.com/images/I/71IyctflYQL._SY695_.jpg",
            WHITE_MUSTARD:"https://m.media-amazon.com/images/I/71JRRh-Bx7L._SY695_.jpg"
          },
          details: {
            material: "Synthetic",
            closureType: "Lace-Up",
            heelType: "Flat",
            waterResistance: "Not Water Resistant",
            soleMaterial: "Polyvinyl Chloride",
            style:"walking",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹749 with 10% savings"
        },
        {
          id: 5,
          name: "OHO Bubbles Men Ortho slippers",
          image: "https://m.media-amazon.com/images/I/71zBUjpA9-L._SY695_.jpg",
          price: "₹349",
          mrp: "₹589",
          discount: "10% off",
          sizes: ["6UK", "7UK", "8UK"],
          colors: {
            Tan: "https://m.media-amazon.com/images/I/71zBUjpA9-L._SY695_.jpg",
            Red  :"https://m.media-amazon.com/images/I/61O8U9W1cfL._SY695_.jpg",
            black :"https://m.media-amazon.com/images/I/710Fo6iIPXL._SY695_.jpg",
            blue:"https://m.media-amazon.com/images/I/81QKegvY4nL._SY695_.jpg",
            olive:"https://m.media-amazon.com/images/I/71wg31NrJJL._SY695_.jpg"
          },
          details: {
            material: "Synthetic",
            closureType: "Slip-on",
            heelType: "Flat",
            waterResistance: "Waterproof",
            soleMaterial: "Ethylene Vinyl Acetate",
            style:"casual",
            StrapTypeT:"Thong",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹349 with 20% savings"
        },
  
        {
          id: 6,
          name: "Nivia HY-Court 2.0 Badminton Shoe",
          image: "https://m.media-amazon.com/images/I/71uwtcGCLNL._SY695_.jpg",
          price: "₹1299",
          mrp: "₹2589",
          discount: "60% off",
          sizes: ["5UK", "8UK", "10UK"],
          colors: {
            White_Blue: "https://m.media-amazon.com/images/I/71uwtcGCLNL._SY695_.jpg",
            Red_Black  :"https://m.media-amazon.com/images/I/71FgXlqWWiL._SY695_.jpg",
            Whie_Red :"https://m.media-amazon.com/images/I/81f+jwmUwcL._SY695_.jpg",
            Yello_Blue:"https://m.media-amazon.com/images/I/71u3p1pulEL._SY695_.jpg",
          },
          details: {
            material: "Ethylene Vinyl Acetate",
            closureType: "Lace-up",
            heelType: "Flat",
            waterResistance: "not water resistance",
            soleMaterial: "Ethylene Vinyl Acetate",
            style:"HY-Court 2.0 Badminton Shoe",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹1299 with 60% savings"
        },
        {
     id: 1,
      name: "FASHIMO Casual Boots for Women and Girl's Parent",
      image: "https://m.media-amazon.com/images/I/71dvCDw3RmL._SY695_.jpg",
      price: "₹820",
      mrp: "₹1,999",
      discount: "45% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        pink: "https://m.media-amazon.com/images/I/71dvCDw3RmL._SY695_.jpg",
        Light_Pista: "https://m.media-amazon.com/images/I/71gnyArK6sL._SY695_.jpg",
        Black:"https://m.media-amazon.com/images/I/71u1YXj6NQL._SY695_.jpg",
        sky:"https://m.media-amazon.com/images/I/71ebL7gl0PL._SY695_.jpg"
      },
      details: {
        material: "Synthetic",
        closureType: "Lace-Up",
        heelType: "Block Heel",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Rubber",
        style: "Closed Toe",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹820.00 with 77% savings"
    },
    {
      id: 2,
      name: "Bhogati Fashion Jutti for Ethnic Shoes ",
      image: "https://m.media-amazon.com/images/I/714x1m4UVBL._SY695_.jpg",
      price: "₹775",
      mrp: "₹990",
      discount: "25% off",
      sizes: ["3UK","4UK","5UK", "6UK"],
      colors: {
        Cream: "https://m.media-amazon.com/images/I/6117eH2iKkL._SY695_.jpg",
        Black: "https://m.media-amazon.com/images/I/61Y5IjffQWL._SY695_.jpg",
        Blue:"https://m.media-amazon.com/images/I/714x1m4UVBL._SY695_.jpg",
        Silver:"https://m.media-amazon.com/images/I/71p4pNDek3L._SY695_.jpg"
      },
      details: {
        material: "Faux Leather, Polyvinyl Chloride",
        closureType: "Pull-On",
        heelType: "Flat",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Faux Leather, Polyvinyl Chloride",
        style: "Mooti cach",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹775 with 66% savings"
    },
    
    {
        id: 3,
        name: "Double Cut Heeled Sandals Square Toe Sandals ",
        image: "https://m.media-amazon.com/images/I/51vLJbdLGNL._SY695_.jpg",
        price: "₹575",
        mrp: "₹879",
        discount: "35% off",
        sizes: ["3UK", "4UK", "5UK", "6UK"],
        colors: {
          white: "https://m.media-amazon.com/images/I/51pvaiaQmqL._SY695_.jpg",
          Beige: "https://m.media-amazon.com/images/I/51vLJbdLGNL._SY695_.jpg",
          Black :"https://m.media-amazon.com/images/I/616678-XLPL._SY695_.jpg"
        },
        details: {
          material: "Faux Leather",
          closureType: "Fashion Sandal",
          heelType: "Block Heel",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Polyurethane",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹575 with 16% savings"
      },

      {
        id: 4,
        name: "Smart & Sleek Women's Sequins Block Heels ",
        image: "https://m.media-amazon.com/images/I/61BqoqiAFWL._SY695_.jpg",
        price: "₹749",
        mrp: "₹889",
        discount: "10% off",
        sizes: ["6UK", "8UK", "10UK"],
        colors: {
          Silver: "https://m.media-amazon.com/images/I/615U91N5l7L._SY695_.jpg",
          Gold: "https://m.media-amazon.com/images/I/61BqoqiAFWL._SY695_.jpg",
          Sultan :"https://m.media-amazon.com/images/I/61Fso5OSukL._SY695_.jpg",
        },
        details: {
          material: "Faux Leather",
          closureType: "Slip-on",
          heelType: "Blok Heel ",
          waterResistance: "Water Resistant",
          soleMaterial: "Polyvinyl Chloride",
          style:"Fashion Sandal",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹749 with 10% savings"
      },
      {
        id: 5,
        name: "DIPYO Fancy Wedding Embroidery Wedges Heel",
        image: "https://m.media-amazon.com/images/I/71TosHwyk2L._SY695_.jpg",
        price: "₹849",
        mrp: "₹1,289",
        discount: "10% off",
        sizes: ["3UK", "4UK", "5UK"],
        colors: {
          pink:"https://m.media-amazon.com/images/I/71TosHwyk2L._SY695_.jpg",
          golden:"https://m.media-amazon.com/images/I/71L7EZaCDaL._SY695_.jpg"
        },
        details: {
          material: "Polyvinyl Chloride",
          closureType: "Boa",
          heelType: "Wedge Heel",
          waterResistance: "Waterproof",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"Wedge",
          StrapTypeT:"Thong",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹849 with 40% savings"
      },

      {
        id: 6,
        name: "Women's Party-wear Designer Wedding Slip-on ",
        image: "https://m.media-amazon.com/images/I/51MYkpKpWDL._SY695_.jpg",
        price: "₹1299",
        mrp: "₹2589",
        discount: "60% off",
        sizes: ["6UK", "7UK", "8UK"],
        colors: {
          Peach: "https://m.media-amazon.com/images/I/51kn4T0o7GL._SY695_.jpg",
          Grey  :"https://m.media-amazon.com/images/I/51MYkpKpWDL._SY695_.jpg",
          Copper :"https://m.media-amazon.com/images/I/51fIh2ZZe2L._SY695_.jpg",
          Black:"https://m.media-amazon.com/images/I/51vuEny3BZL._SY695_.jpg",
        },
        details: {
          material: "Ethylene Vinyl Acetate",
          closureType: "Lace-up",
          heelType: "Flat",
          waterResistance: "not water resistance",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"HY-Court 2.0 Badminton Shoe",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹1299 with 60% savings"
      },
      {
      id: 1,
      name: "Campus Men's SLAKE Running Shoes",
      image: "https://m.media-amazon.com/images/I/71+dEU7Mx+L._SY695_.jpg",
      price: "₹1469",
      mrp: "₹1945",
      discount: "25% off",
      sizes: ["6UK", "7UK", "8UK", "9UK"],
      colors: {
        White_Grey: "https://m.media-amazon.com/images/I/61yFgbZ-aSL._SY695_.jpg",
        Black: "https://m.media-amazon.com/images/I/61EY64D3HjL._SY695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Lace-Up",
        heelType: "No Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Polyurethane",
        style: "Sneakers",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹1469 with 25% savings"
    },
    {
      id: 2,
      name: "Campus Men's North Plus Running Shoes",
      image: "https://m.media-amazon.com/images/I/616JlGqyoWL._SY695_.jpg",
      price: "₹1,075",
      mrp: "₹1,790",
      discount: "45% off",
      sizes: ["9UK", "10UK"],
      colors: {
        black: "https://m.media-amazon.com/images/I/61NLkoMf2rL._SY695_.jpg",
        grey: "https://m.media-amazon.com/images/I/616JlGqyoWL._SY695_.jpg",
        blue:"https://m.media-amazon.com/images/I/61q+1kg3saL._SY695_.jpg",
        white:"https://m.media-amazon.com/images/I/61BYUJs8HAL._SY695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Lace-Up",
        heelType: "Flat",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Phylon",
        style: "Sneaker",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹1,075 with 66% savings"
    },
    
    {
        id: 3,
        name: "Campus Men's Camp Marlon Running Shoes",
        image: "https://m.media-amazon.com/images/I/61n+Ev+hFLL._SY695_.jpg",
        price: "₹975",
        mrp: "₹1,790",
        discount: "75% off",
        sizes: ["7UK", "8UK", "9UK", "10UK"],
        colors: {
          wine:"https://m.media-amazon.com/images/I/61n+Ev+hFLL._SY695_.jpg",
          white: "https://m.media-amazon.com/images/I/61Uy3n50jGL._SY695_.jpg",
          navy: "https://m.media-amazon.com/images/I/61C40nddi7L._SY695_.jpg",
          Black :"https://m.media-amazon.com/images/I/61swUY21t+L._SY695_.jpg"
        },
        details: {
          material: "Rubber",
          closureType: "Lace-Up",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Ethylene Vinyl Acetate",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹975 with 66% savings"
      },

      {
        id: 4,
        name: "Red Tape Sports Walking Shoes for Men ",
        image: "https://m.media-amazon.com/images/I/61zWRRfqMGL._SY695_.jpg",
        price: "₹2,749",
        mrp: "₹3,889",
        discount: "40% off",
        sizes: ["6UK", "8UK", "10UK"],
        colors: {
          WHITE: "https://m.media-amazon.com/images/I/61hrfItCnsL._SY695_.jpg",
          BLACK: "https://m.media-amazon.com/images/I/61yRKjxkAfL._SY695_.jpg",
          BLUE :"https://m.media-amazon.com/images/I/61zWRRfqMGL._SY695_.jpg",
        },
        details: {
          material: "Synthetic",
          closureType: "Lace-Up",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "EVA+TPR+PAINT",
          style:"walking",
          countryOfOrigin: "Bangladesh"
        },
        limitedTimeDeal: "₹2,749 with 50% savings"
      },
      {
        id: 5,
        name: "Vector X Chaser Kids Football Shoes",
        image: "https://m.media-amazon.com/images/I/61KBKMOfcVL._SY695_.jpg",
        price: "649",
        mrp: "₹789",
        discount: "10% off",
        sizes: ["6UK", "7UK", "8UK"],
        colors: {
          Blue_Black_Green: "https://m.media-amazon.com/images/I/61LMXufzjmL._SY695_.jpg",
          Multicolor :"https://m.media-amazon.com/images/I/71z4nXk0DlL._SX695_.jpg",
          Black_Green :"https://m.media-amazon.com/images/I/51QGohqhnLL._SY695_.jpg",
          White_blue:"https://m.media-amazon.com/images/I/81m7SyrcKxL._SX695_.jpg",
          
        },
        details: {
          material: "Synthetic",
          closureType: "Lace-Up",
          heelType: "Flat",
          waterResistance: "Waterproof",
          soleMaterial: "Faux Leather",
          style:"Football Shoes",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "6349 with 20% savings"
      },

      {
        id: 6,
        name: "Nivia HY-Court 2.0 Badminton Shoe",
        image: "https://m.media-amazon.com/images/I/71uwtcGCLNL._SY695_.jpg",
        price: "₹1299",
        mrp: "₹2589",
        discount: "60% off",
        sizes: ["5UK", "8UK", "10UK"],
        colors: {
          White_Blue: "https://m.media-amazon.com/images/I/71uwtcGCLNL._SY695_.jpg",
          Red_Black  :"https://m.media-amazon.com/images/I/71FgXlqWWiL._SY695_.jpg",
          Whie_Red :"https://m.media-amazon.com/images/I/81f+jwmUwcL._SY695_.jpg",
          Yello_Blue:"https://m.media-amazon.com/images/I/71u3p1pulEL._SY695_.jpg",
        },
        details: {
          material: "Ethylene Vinyl Acetate",
          closureType: "Lace-up",
          heelType: "Flat",
          waterResistance: "not water resistance",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"HY-Court 2.0 Badminton Shoe",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹1299 with 60% savings"
      },
      {
        id: 1,
        name: "APTUS Girls Special Occasion Trendy Glitter",
        image: "https://m.media-amazon.com/images/I/61T+siJdvqL._SY695_.jpg",
        price: "₹620",
        mrp: "₹999",
        discount: "45% off",
        sizes: ["2 Years", "2.5 Years", "3 Years", "3.5 Years"],
        colors: {
          pink: "https://m.media-amazon.com/images/I/71CS0W2v7KL._SY695_.jpg",
          while: "https://m.media-amazon.com/images/I/61XMVmvwohL._SY695_.jpg",
          purple:"https://m.media-amazon.com/images/I/71wRQVvpxxL._SY695_.jpg",
          grey:"https://m.media-amazon.com/images/I/61T+siJdvqL._SY695_.jpg"
        },
        details: {
          material: "Synthetic/Sole TPR",
          closureType: "Buckle",
          heelType: "Block Heel",
          waterResistance: "Not Water Resistant",
          soleMaterial: "TPR",
          style: "Ankle Strap",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹620 with 77% savings"
      },
      {
        id: 2,
        name: "Liberty Boys Bastian-2e Sneaker ",
        image: "https://m.media-amazon.com/images/I/61smpQgbcCL._SY695_.jpg",
        price: "₹475",
        mrp: "₹790",
        discount: "25% off",
        sizes: ["1 Years","2 Years","3 Years"],
        colors: {
          Green: "https://m.media-amazon.com/images/I/61smpQgbcCL._SY695_.jpg",
          Blue:"https://m.media-amazon.com/images/I/61oN833U1pL._SY695_.jpg",
          Grey:"https://m.media-amazon.com/images/I/61OPZKzRpnL._SY695_.jpg"
        },
        details: {
          material: "Canvas",
          closureType: "Pull-On",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Rubber",
          style: "Sneaker",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹475 with 66% savings"
      },
      
      {
          id: 3,
          name: "Superminis Unisex-baby's Bootie",
          image: "https://m.media-amazon.com/images/I/61NDN5D-0DL._SY695_.jpg",
          price: "₹375",
          mrp: "₹579",
          discount: "35% off",
          sizes: ["6-12 Month", "1 Years", "2 Years"],
          colors: {
            Peach: "https://m.media-amazon.com/images/I/61NDN5D-0DL._SY695_.jpg",
            Sky: "https://m.media-amazon.com/images/I/617B+Ku7K7L._SY695_.jpg",
            Pink :"https://m.media-amazon.com/images/I/61HAN0OFipL._SY695_.jpg"
          },
          details: {
            material: "Fur",
            closureType: "Loop",
            heelType: "Flat",
            waterResistance: "Not Water Resistant",
            soleMaterial: "Polyurethane",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹375 with 16% savings"
        },
  
        {
          id: 4,
          name: "Redburg Kids LED Light Up Shoes ",
          image: "https://m.media-amazon.com/images/I/41TZwDwdP5L.jpg",
          price: "₹749",
          mrp: "₹889",
          discount: "10% off",
          sizes: ["3 Years", "3.5 Years", "4 Years", "4.5 Years"],
          colors: {
            Pink: "https://m.media-amazon.com/images/I/41TZwDwdP5L.jpg",
            Red: "https://m.media-amazon.com/images/I/81khHFAHYQL._SY695_.jpg",
          },
          details: {
            material: "Mesh, Ethylene Vinyl Acetate",
            closureType: "Hook & Loop",
            heelType: "Flat ",
            waterResistance: "Not Water Resistant",
            soleMaterial: "Ethylene Vinyl Acetate",
            style:"Sneaker",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹749 with 10% savings"
        },
  
        {
          id: 6,
          name: "SVAAR Slingback Clog Shoes for Boys & Girls ",
          image: "https://m.media-amazon.com/images/I/51kaDG0yZgL._SX695_.jpg",
          price: "₹499",
          mrp: "₹889",
          discount: "40% off",
          sizes: ["2 Years","3 Years","3.5 Years","4 Years",],
          colors: {
           Blue:"https://m.media-amazon.com/images/I/51kaDG0yZgL._SX695_.jpg",
           Brown:"https://m.media-amazon.com/images/I/61-aka4ZShL._SX695_.jpg"
          },
          details: {
            material: "Ethylene Vinyl Acetate",
            closureType: "Backstrap",
            heelType: "No Heel",
            waterResistance: "Water Proof",
            soleMaterial: "Ethylene Vinyl Acetate",
            style:"Clogs",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹499 with 60% savings"
        },
        {
            id: 3,
            name: "Marc Loire Women's Ethnic Slip On",
            image: "https://m.media-amazon.com/images/I/61jKs+9SL7L._SY695_.jpg",
            price: "₹620",
            mrp: "₹799",
            discount: "45% off",
            sizes: ["3UK", "4UK", "5UK", "6UK"],
            colors: {
              Golden:"https://m.media-amazon.com/images/I/61jKs+9SL7L._SY695_.jpg",
            },
            details: {
              material: "Polyurethane",
              closureType: "Lace-Up",
              heelType: "No Heel",
              waterResistance: "Water Resistant",
              soleMaterial: "Rubber",
              style: "Sneakers",
              countryOfOrigin: "India"
            },
            limitedTimeDeal: "₹620.00 with 77% savings"
          },
          {
            id: 4,
            name: "purosoft EVA Light Weight Comfortable Floater For Men's",
            image: "https://m.media-amazon.com/images/I/61jYI297EtL._SY695_.jpg",
            price: "₹349",
            mrp: "₹489",
            discount: "25% off",
            sizes: ["6UK", "8UK", "9UK", "10UK"],
            colors: {
              black:"https://m.media-amazon.com/images/I/61jYI297EtL._SY695_.jpg",
              black2:"https://m.media-amazon.com/images/I/713T2H-LwcL._SY695_.jpg",
              black3:"https://m.media-amazon.com/images/I/71qcdh4qFNL._SY695_.jpg"
            },
            details: {
              material: "Polyurethane",
              closureType: "Pull- on ",
              heelType: "No Heel",
              waterResistance: "Water Resistant",
              soleMaterial: "Rubber",
              style: "Traditional",
              countryOfOrigin: "India"
            },
            limitedTimeDeal: "₹349.00 with 17% savings"
          },
          {
            id: 5,
            name: "Doctor Walk® Extra Soft Ortho Slippers",
            image: "https://m.media-amazon.com/images/I/61sMJecQLnL._SY695_.jpg",
            price: "₹299",
            mrp: "₹179",
            discount: "35% off",
            sizes: ["3UK", "4UK", "5UK", "6UK"],
            colors: {
              black:"https://m.media-amazon.com/images/I/61sMJecQLnL._SY695_.jpg",
              Maroon:"https://m.media-amazon.com/images/I/61sMJecQLnL._SY695_.jpg",
              Red:"https://m.media-amazon.com/images/I/613E5lZ3b3L._SY695_.jpg"
            },
            details: {
              material: "Faux Leather",
              closureType: "Slip On ",
              heelType: "No Heel",
              waterResistance: "Water Resistant",
              soleMaterial: "Rubber",
              style: "Flip Flop",
              countryOfOrigin: "India"
            },
            limitedTimeDeal: "₹299.00 with 19% savings"
          },
      
    ];
  
    const handleProductClick = (product) => {
      setSelectedProduct(product);
      setSelectedColor('');
      setSelectedSize('');
    };
  
    const handleColorChange = (color) => {
      setSelectedColor(color);
    };
  
    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
  
    const handleAddToCart = () => { 
      
    };
  
    const handleBuyNow = () => {
     
    };
  
    return (
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-discount">M.R.P: <span className="mrp">{product.mrp}</span> ({product.discount})</div>
              <div className="product-delivery">Free delivery by Beverly</div>
              <div className="func-button">
                  <button className="click-here" onClick={() => handleProductClick(product)}>Click Here</button>
              </div>
            </div>
            {selectedProduct && selectedProduct.id === product.id && (
              <div className="product-details">
                <h2>Product details</h2>
                <img
                  src={selectedColor ? selectedProduct.colors[selectedColor] : selectedProduct.image}
                  alt={selectedProduct.name}
                  className="center"
                />
                <p>Material type: {selectedProduct.details.material}</p>
                <p>Closure type: {selectedProduct.details.closureType}</p>
                <p>Heel type: {selectedProduct.details.heelType}</p>
                <p>Water resistance level: {selectedProduct.details.waterResistance}</p>
                <p>Sole material: {selectedProduct.details.soleMaterial}</p>
                <p>Style: {selectedProduct.details.style}</p>
                <p>Country of Origin: {selectedProduct.details.countryOfOrigin}</p>
                <div className="limited-time-deal">
                  <p>Limited time deal</p>
                  <p>{selectedProduct.limitedTimeDeal}</p>
                </div>
                <h5>Select Color</h5>
                <div>
                  {Object.keys(selectedProduct.colors).map((color) => (
                    <button key={color} onClick={() => handleColorChange(color)}>{color}</button>
                  ))}
                </div>
                <h5>Select Size</h5>
                <div>
                  <select value={selectedSize} onChange={(e) => handleSizeChange(e.target.value)}>
                    <option value="">Select Size</option>
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <button className='but' onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                  <button className='butt' onClick={handleBuyNow}>Buy Now</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  export default Home;