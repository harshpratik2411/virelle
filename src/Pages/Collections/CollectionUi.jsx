import React from 'react';
import img1 from '../../assets/Products/img1.jpg';
import img2 from '../../assets/Products/img2.jpg';
import img3 from '../../assets/Products/img3.jpg';
import img4 from '../../assets/Products/img4.jpg';
import img7 from '../../assets/Products/img7.jpg';
import img8 from '../../assets/Products/img8.jpg';
import img10 from '../../assets/Products/img10.jpg';
import img11 from '../../assets/Products/img11.jpg';  
import img13 from '../../assets/Collections/img13.jpg'
import img14 from '../../assets/Collections/img14.jpg'
import img15 from '../../assets/Collections/img15.jpg'
import img16 from '../../assets/Collections/img16.jpg'
import img17 from '../../assets/Collections/img17.jpg'
import img18 from '../../assets/Collections/img18.jpg'
import img19 from '../../assets/Collections/img19.jpg'
import img20 from '../../assets/Collections/img20.jpg'
import img21 from '../../assets/Collections/img21.jpg'
import img22  from '../../assets/Collections/img22.jpg'
import img12 from '../../assets/Products/img12.jpg'
import img23 from '../../assets/Collections/img23.jpg'
import img24 from '../../assets/Collections/img24.jpg'
import img25 from '../../assets/Collections/img25.jpg'
import img26 from '../../assets/Collections/img26.jpg' 
 


const  CollectionUi = [
  {
    id: '1',
    name: 'Indian Traditional saree',
    brand: 'Virelle',
    image: img13,
    originalPrice: 2499,
    discountPrice: 1999,
    description: 'A stylish and breathable white shirt perfect for casual outings.',
  },
  {
    id: '2',
    name: 'Black Street goun',
    brand: 'Virelle',
    image: img2,
    originalPrice: 1999,
    discountPrice: 1399,
    description: 'Stay warm and stylish with this black streetwear black  hoodie.',
    color:"colorful",
  },
  {
    id: '3',
    name: 'Denim neon Jacket',
    brand: 'Virelle',
    image: img12,
    originalPrice: 2499,
    discountPrice: 1799,
    description: 'Classic denim jacket for all-season fashion and parties.',
     color:"black",
  },
  {
    id: '4',
    name: 'Yellow body goun',
    brand: 'Virelle',
    image: img4,
    originalPrice: 1799,
    discountPrice: 1299,
    description: 'Comfortable and stylish chinos for your everyday look and styling.',
     color:"red",
  },
  {
    id: '5',
    name: 'Summer suit',
    brand: 'Virell ',
    image: img4,
    originalPrice: 5299,
    discountPrice: 4999,
    description: 'Soft cotton polo t-shirt, great for summer vibes.',
     color:"yellow",
  },
  {
    id: '6',
    name: 'Caster combo pines',
    brand: 'Virelle',
    image: img10,
    originalPrice: 1599,
    discountPrice: 1099,
    description: 'Perfect for office or formal occasions and parties.',
     color:"yellow",
  },
  {
    id: '7',
    name: 'Rome fashion',
    brand: 'Virelle',
    image: img15,
    originalPrice: 1299,
    discountPrice: 899,
    description: 'Soft cotton polo t-shirt, great for summer vibes.',
     color:"blue",
  },
  {
    id: '8',
    name: 'Formal Red suits',
    brand: 'Virelle',
    image: img12,
    originalPrice: 1999,
    discountPrice: 1399,
    description: 'Perfect for office or formal occasions and weeddings.',
     color:"blue",
  },
  {
    id: '9',
    name: 'Indian Traditional saree',
    brand: 'Virelle',
    image: img16,
    originalPrice: 1499,
    discountPrice: 999,
    description: 'A stylish and breathable white shirt perfect for casual outings.',
     color:"rec",
  },
  {
    id: '10',
    name: 'Black Street goun',
    brand: 'Virelle',
    image: img17,
    originalPrice: 2999,
    discountPrice: 1299,
    description: 'Stay warm and stylish with this black streetwear black  hoodie.',
     color:"blue",
  },
  {
    id: '11',
    name: 'Denim neon Jacket',
    brand: 'Virelle',
    image: img18,
    originalPrice: 2499,
    discountPrice: 1799,
    description: 'Classic denim jacket for all-season fashion and parties.',
     color:"blue",
  },
  {
    id: '12',
    name: 'Yellow body goun',
    brand: 'Virelle',
    image: img19,
    originalPrice: 1799,
    discountPrice: 1299,
    description: 'Comfortable and stylish chinos for your everyday look and styling.',
     color:"yellow",
  },
  {
    id: '13',
    name: 'Summer suit',
    brand: 'Virell ',
    image: img20,
    originalPrice: 1299,
    discountPrice: 899,
    description: 'Soft cotton polo t-shirt, great for summer vibes.',
     color:"blue",
  },
  {
    id: '14',
    name: 'Caster combo pines',
    brand: 'Virelle',
    image: img21,
    originalPrice: 1599,
    discountPrice: 1099,
    description: 'Perfect for office or formal occasions and parties.',
     color:"white",
  },
  {
    id: '15',
    name: 'Rome fashion',
    brand: 'Virelle',
    image: img22,
    originalPrice: 2299,
    discountPrice: 999,
    description: 'Soft cotton polo t-shirt, great for summer vibes.',
     color:"mixed",
  },
  {
    id: '16',
    name: 'Formal Red suits',
    brand: 'Virelle',
    image: img23,
    originalPrice: 3599,
    discountPrice: 2099,
    description: 'Perfect for office or formal occasions and weeddings.',
     color:"blue",
  },
  {
    id: '17',
    name: 'Rome fashion',
    brand: 'Virelle',
    image: img24,
    originalPrice: 2299,
    discountPrice: 1899,
    description: 'Soft cotton polo t-shirt, great for summer vibes.',
     color:"black",
  },
  {
    id: '18',
    name: 'Formal Red suits',
    brand: 'Virelle',
    image: img25,
    originalPrice: 1499,
    discountPrice: 1199,
    description: 'Perfect for office or formal occasions and weeddings.',
     color:"colorful",
  },
  {
    id: '19',
    name: 'Rome fashion',
    brand: 'Virelle',
    image: img26,
    originalPrice: 1299,
    discountPrice: 899,
    description: 'Soft cotton polo t-shirt, great for summer vibes.',
     color:"black",
  },
  {
    id: '20',
    name: 'Formal Red suits',
    brand: 'Virelle',
    image: img23,
    originalPrice: 4599,
    discountPrice: 2099,
    description: 'Perfect for office or formal occasions and weeddings.',
     color:"black",
  },
  
];

export default CollectionUi;
