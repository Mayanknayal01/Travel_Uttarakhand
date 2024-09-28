// banner component images
import trek from "./images/trek.jpg";
import homestays from "./images/homestays.jpg";
import travel from "./images/travel.jpg";
import banner_bg from "./images/banner.jpg";
// uttarakhand district slider images
import nainital from "./images/nainital.jpg"
import uttarkashi from "./images/uttarkashi.jpg"
import udhamsinghnagar from "./images/udhamsinghnagar.jpg"
import tehri from "./images/tehri.jpg"
import rudraprayag from "./images/rudraprayag.jpg"
import pithoragarh from "./images/pithoragarh.jpg"
import pauri from "./images/pauri.jpg"
import haridwar from "./images/haridwar.jpg"
import dehradun from "./images/dehradun.jpg"
import champawat from "./images/champawat.jpg"
import chamoli from "./images/chamoli.jpg"
import bageshwar from "./images/bageshwar.jpg"
import almora from "./images/almora.jpg"
// trek component images
import difficulty from "./images/difficulty.jpg";
import duration from "./images/duration.jpg";
import nagtibba_trek from "./images/nagtibba-trek.jpg";
import bhramtal_trek from "./images/bhramtal-trek.jpg";
import kedarkantha_trek from "./images/Kedarkantha-trek.jpg";
import tungnath_trek from "./images/tungnath-trek.jpg";
// about us images
import beauty1 from "./images/beauty1.jpg";
import beauty2 from "./images/beauty2.jpg";
import beauty3 from "./images/beauty3.jpg";
import trekbg from "./images/trekbg.jpg";
// services images
import trekking from "./images/trekking.jpg";
import homestays1 from "./images/homestays1.jpg";
import travelpackage from "./images/travelpackage.jpg";
// footer images
import footer from "./images/footer.png";


export const dist_slider = [
  {
    id: 1,
    dist_img : nainital,
    name: "Nainital",
  },
  {
    id: 2,
    dist_img : almora,
    name: "Almora",
  },
  {
    id: 3,
    dist_img : bageshwar,
    name: "Bageshwar",
  },
  {
    id: 4,
    dist_img : chamoli,
    name: "Chamoli",
  },
  {
    id: 5,
    dist_img : champawat,
    name: "Champawat",
  },
  {
    id: 6,
    dist_img : dehradun,
    name: "Dehradun",
  },
  {
    id: 7,
    dist_img : haridwar,
    name: "Haridwar",
  },
  {
    id: 8,
    dist_img : pauri,
    name: "Pauri Garhwal",
  },
  {
    id: 9,
    dist_img : pithoragarh,
    name: "Pithoragarh",
  },
  {
    id: 10,
    dist_img : rudraprayag,
    name: "Rudraprayag",
  },
  {
    id: 11,
    dist_img : tehri,
    name: "Tehri Garhwal",
  },
  {
    id: 12,
    dist_img : udhamsinghnagar,
    name: "Udham Singh Nagar",
  },
  {
    id: 13,
    dist_img : uttarkashi,
    name: "Uttarkashi",
  }
]

export const track_items = [
  {
    id: 1,
    name: "Nag Tibba Trek",
    duration: "1N/2D",
    difficulty: "Easy - Moderate",
    real_price: 6499,
    discounted_price: 3499,
    image: nagtibba_trek,
    difficulty_image: difficulty,
    dur_image: duration,
  },
  {
    id: 1,
    name: "Bhramtal Trek",
    duration: "4N/5D",
    difficulty: "Easy - Moderate",
    real_price: 11999,
    discounted_price: 7999,
    image: bhramtal_trek,
    difficulty_image: difficulty,
    dur_image: duration,
  },{
    id: 1,
    name: "Kedarkantha Trek",
    duration: "4N/5D",
    difficulty: "Easy - Moderate",
    real_price: 8999,
    discounted_price: 5999,
    image: kedarkantha_trek,
    difficulty_image: difficulty,
    dur_image: duration,
  },{
    id: 1,
    name: "Tungnath Trek",
    duration: "2N/3D",
    difficulty: "Easy - Moderate",
    real_price: 7999,
    discounted_price: 4999,
    image: tungnath_trek,
    difficulty_image: difficulty,
    dur_image: duration,
  },
];

export const banner_Slider = {
    trek,
    homestays,
    travel

}

export const banner_background = {
  banner_bg
}

export const dist_slider_img = {
  nainital,
  almora,
  bageshwar,
  chamoli,
  champawat,
  dehradun,
  haridwar,
  pauri,
  pithoragarh,
  rudraprayag,
  tehri,
  udhamsinghnagar,
  uttarkashi
}

export const about_us_img = {
  beauty1,
  beauty2,
  beauty3,
  trekbg
}

export const services_img = {
  trekking,
  homestays1,
  travelpackage
}

export const footer_img = {
  footer
}