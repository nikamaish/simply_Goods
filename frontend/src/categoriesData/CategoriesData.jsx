// productData.js
const products = [
 { id: 0, name: ' boAt Rockerz 450R', price: '289', img: 'https://m.media-amazon.com/images/I/41ONvDoY5AL._SX300_SY300_QL70_FMwebp_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Zebronics Jet PRO Premium ', price: '289', img: 'https://m.media-amazon.com/images/I/41F0tHCTFWL._SX300_SY300_QL70_FMwebp_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Sony WH-CH520', price: '289', img: 'https://m.media-amazon.com/images/I/41JACWT-wWL._SX679_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Marshall Major IV ', price: '289',img: 'https://m.media-amazon.com/images/I/61x4yN6eUVL._SX679_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Cosmic Byte H11 Gaming ', price: '289', img: 'https://m.media-amazon.com/images/I/617tTpCvQ4L._SL1500_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Airpods Max', price: '289', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604686090000', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Bose New QuietComfort', price: '289', img: 'https://m.media-amazon.com/images/I/51mb-i8N5tL._SX679_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' }, 
  { id: 0, name: 'Razer Blackshark V2 X Gaming ', price: '289', img: 'https://m.media-amazon.com/images/I/418FPB71YuL._SX300_SY300_QL70_FMwebp_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 0, name: 'Leaf Bass Pro', price: '289', img: 'https://www.leafstudios.in/cdn/shop/files/Mainupdated_35a234be-57a2-41b6-b8db-79b54b7f5a7f.jpg?v=1690372991', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 0, name: 'Logitech G733 Lightspeed', price: '289', img: 'https://m.media-amazon.com/images/I/71xNjrzG69L._SX679_.jpg', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },

  { id: 1, name: 'Razer Basilisk V3', price: '169', img: 'https://m.media-amazon.com/images/I/41yrgK99ahL._SX300_SY300_QL70_FMwebp_.jpg', stars: 5, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'Microware Ergonomic Mouse', price: '189', img: 'https://m.media-amazon.com/images/I/41YY9mzu+8L._SY300_SX300_.jpg', stars: 4, off: '10% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'Lenovo Bluetooth, USB Yoga Mouse ', price: '149', img: 'https://m.media-amazon.com/images/I/51HOkfE82KL._SX679_.jpg', stars: 3, off: '12% off', cancelPrice: '129',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'Logitech G102 ', price: '199',img: 'https://m.media-amazon.com/images/I/41hYQ9J7gCL._SX300_SY300_QL70_FMwebp_.jpg', stars: 4, off: '15% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'Corsair Scimitar  ', price: '199',img: 'https://m.media-amazon.com/images/I/61S4llvgPZL._SX679_.jpg', stars: 4, off: '15% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
 

  { id: 1, name: 'MageGee Portable', price: '169', img: 'https://m.media-amazon.com/images/I/617yPJ1t9AL._SL1500_.jpg', stars: 5, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'HP 100 Wired USB Keyboard ', price: '149', img: 'https://vlebazaar.in/image/cache/catalog/hp%20100%20wired-1100x1100w.jpg', stars: 3, off: '12% off', cancelPrice: '129',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'ZEBRONICS Companion 301 2.4GHz ', price: '149', img: 'https://m.media-amazon.com/images/I/41BOg3WueeL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '12% off', cancelPrice: '129',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'Ant Esports MK1000 TKL ', price: '189', img: 'https://m.media-amazon.com/images/I/71MoYTrZ-OL._SX679_.jpg', stars: 4, off: '10% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'HP 230 Wireless ', price: '199',img: 'https://m.media-amazon.com/images/I/71ghHm8ABpL._SX679_.jpg', stars: 4, off: '15% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'i GEAR KeyBee Retro ', price: '189', img: '  https://m.media-amazon.com/images/I/61bw-BHgEsL._SX679_.jpg', stars: 4, off: '10% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
 
 
  // Add more cards as needed
  

  { id: 2, name: 'Camera1', price: '169', img: 'https://p2-ofp.static.pub/fes/cms/2022/09/26/7eddi22dpdakm0vilgk795p1d4i3ky533559.png', stars: 5, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera2', price: '179', img: 'https://m.media-amazon.com/images/I/41rafnfnlqL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer'},
  { id: 2, name: 'Camera3', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera4', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera5', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  
  { id: 3, name: 'Galaxy Watch4', price: '179', img: 'https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-sm-r860nzdainu-481079019?$730_584_PNG$', stars: 3, off: '10% off', cancelPrice: '199' , colorType:'Blue,Lithium Polymer'},
  // { id: 3, name: 'Casio Edifice Analog ', price: '179', img: 'https://m.media-amazon.com/images/I/61SqhamoZbL._SY879_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'Apple Watch Ultra 2', price: '179', img: 'https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Ultra_2_LTE_49mm_Titanium_Orange_Ocean_Band_PDP_Image_Avail_Position-1__en-IN_db6dff4e-cc46-4fd3-8a3f-e68511d1ced0_823x.jpg?v=1698878274', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'Titan Smart Watch ', price: '179', img: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwff2d8bbc/images/Titan/Catalog/90188AP06_3.jpg?sw=800&sh=800', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'Fireboltt Sphere', price: '179', img: 'https://www.fireboltt.com/cdn/shop/products/Black_01_400x.png?v=1677243430', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'Noise ColorFit Pulse', price: '179', img: 'https://m.media-amazon.com/images/I/412dSHwBHGL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199' , colorType:'Blue,Lithium Polymer'},
 { id: 3, name: 'boAt Xtend Smart Watch', price: '179', img: 'https://m.media-amazon.com/images/I/41pfjyUPZLL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199' , colorType:'Blue,Lithium Polymer'},
  

  {id: 4, name: 'Xiaomi Pad 6', price: '179', img: 'https://m.media-amazon.com/images/I/415gV21fNCL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:4, name: 'Apple 2022 iPad Air ', price: '179', img: 'https://m.media-amazon.com/images/I/61smvoZKNRL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' }, 
  {id:4, name: 'Samsung Galaxy Tab S8 ', price: '179', img: 'https://m.media-amazon.com/images/I/81QCuPs6IKL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },  
  {id:4, name: 'Lenovo Tab M10 ', price: '179', img: 'https://m.media-amazon.com/images/I/51KOc8HTlJL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },  
  {id:4, name: 'OnePlus Pad Go ', price: '179', img: 'https://m.media-amazon.com/images/I/31VKTpmJ6pL.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:4, name: 'HONOR Pad X8  ', price: '179', img: 'https://m.media-amazon.com/images/I/31C8xR5JqWL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },  
  {id:4, name: 'Samsung Galaxy Tab A7 Lite ', price: '179', img: 'https://m.media-amazon.com/images/I/915rA4VNXuL._SL1500_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:4, name: 'Redmi Pad  ', price: '179', img: 'https://m.media-amazon.com/images/I/41qmNmmToLL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:4, name: 'Realme Pad 2 ', price: '179', img: 'https://m.media-amazon.com/images/I/611k+zsIqaL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },  
  {id:4, name: 'itel PAD ONE ', price: '179', img: 'https://m.media-amazon.com/images/I/41mSLDST6VL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },

  {id:5, name: 'Samsung Galaxy S23', price: '179', img: 'https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'One Plus 11R ', price: '179', img: 'https://m.media-amazon.com/images/I/41etLpNZV6L._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'Nothing Phone (2) ', price: '179', img: 'https://m.media-amazon.com/images/I/713rQyFyeXL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'Motorola G54 5G ', price: '179', img: 'https://m.media-amazon.com/images/I/71BLE+4XbIL._SY879_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'iQOO Neo 7 Pro', price: '179', img: 'https://m.media-amazon.com/images/I/712pLRfzDYL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'Samsung Galaxy Z Flip3 5G', price: '179', img: 'https://m.media-amazon.com/images/I/41QWqW2riDL._SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'Apple iPhone 15 ', price: '179', img: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'Google Pixel 8 ', price: '179', img: 'https://m.media-amazon.com/images/I/71m09hEhnwL.__AC_SX300_SY300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'Sony Xperia 1 IV  ', price: '179', img: 'https://d1ncau8tqf99kp.cloudfront.net/converted/103060_original_local_1200x1050_converted.webp', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:5, name: 'Asus ROG Phone 6', price: '179', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-5_Yh7hQGCBLku9CzYfFGzquby_wp8HXEpkqjFE9mJce-KlTx091sxEJ_LKlQmsnRNB1X4vD1wYTws0eMAV-OE-wSH7EdzdPS1ddcTNPy8uk_YfeuPKXF', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },

  {id:6,  name: 'LG 4K Ultra HD Smart LED TV', price: '179', img: 'https://m.media-amazon.com/images/I/51hycrXay5L._SY300_SX300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:6,  name: 'Samsung Ready Smart LED TV', price: '179', img: 'https://m.media-amazon.com/images/I/71S8iUPW9bL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:6,  name: 'MI X  Smart Google TV L55M8-A2IN  ', price: '179', img: 'https://m.media-amazon.com/images/I/41gmv26MMiL._SY300_SX300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  {id:6,  name: 'Acer Advanced I Series HD  Smart LED  TV', price: '179', img: 'https://m.media-amazon.com/images/I/511DmhAgHAL._SX679_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },   
  {id:6,  name: 'iFFALCON HD Ready Smart Android LED TV ', price: '179', img: 'https://m.media-amazon.com/images/I/416UDPTvohL._SY300_SX300_QL70_FMwebp_.jpg', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },

];

export default products;
