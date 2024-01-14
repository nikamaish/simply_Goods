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
  

  { id: 2, name: 'Camera1', price: '169', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 5, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera2', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer'},
  { id: 2, name: 'Camera3', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera4', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera5', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'SanDisk1', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199' , colorType:'Blue,Lithium Polymer'},
  { id: 3, name: 'Cellecor', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'Boat', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },

];

export default products;
