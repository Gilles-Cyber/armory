import { ReactNode } from 'react';

export interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
  description: string;
  specs: { label: string; value: string }[];
  shortSpecs: ReactNode;
  reviews: { text: string; author: string; initials: string; highlight?: boolean }[];
  similarItems: { title: string; price: string; category: string; image: string }[];
}

export const products: Product[] = [
  {
    id: 'operator-01',
    title: 'Operator 01 Custom',
    price: '$3,450.00',
    category: 'Tactical Sidearms',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdbYh7zH4tjofiGHhzbbeyIYxSw73Z2xacbPTdDCaTt4WSGlV08TIJKxceMdqyNQJ2Ayqvvt7t4KRJ6ufgBFbVusfr-EU4vC94IOPjm6NIfUhDIvI64fYxVPFnMUwhGfgvtq4Y9P-WQg3Eq7nFvvtOYt1sJlURPo-lf2a8PpeSmIMRoaWvWvpNjqEG0Fv9jEXwvfLTHZq6heisJFAIrfc_GB1cUeci03xy0LneTvO3C0t2vXJoYMWlZsKpQRWwzizfPRbSuWb1h5A',
    badge: 'Limited Edition',
    description: 'Engineered for those who demand absolute reliability and match-grade precision. Each Operator 01 undergoes a 48-hour hand-fitting process by master armorers to ensure perfect slide-to-frame fitment.',
    specs: [
      { label: 'Caliber', value: '9MM LUGER' },
      { label: 'Capacity', value: '17+1' },
      { label: 'Finish', value: 'Black Nitride' },
      { label: 'Grip', value: 'Aggressive Texture' }
    ],
    shortSpecs: 'Caliber: 9mm / Cap: 17+1',
    reviews: [
      { text: '"The mechanical precision is unmatched. The trigger break is crisp like glass breaking."', author: 'Operator Vance', initials: 'J.V.' },
      { text: '"Over 2,000 rounds without a single malfunction. This is my go-to for duty use."', author: 'Specialist Miller', initials: 'M.K.', highlight: true },
      { text: '"The finish is incredibly durable. Still looks brand new after 6 months of holster wear."', author: 'Agent Sterling', initials: 'S.R.' }
    ],
    similarItems: [
      { title: 'Viper Compact 9', price: '$1,890.00', category: 'Striker Series', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVeQcGV8HuowIyiS8PPCEwVGebKpbammdL4RkxgQcDZOiVEG-jaLDsNyJtj_EM4q3t2cjMwAWI-5u9kR3trUlkK-SfM4JkyAEv9MruzAXUNrLUbL6xxEflxulX2-KPm7yRMJTEd9oCVFPf4RKhAFBtmBnkhXd3RI8V28HjFnFqDy8Vw6dyGMeUqxPbDtrring_0vT6_N99B08hOlPHjRPouxYVXxKUNnSvV1edWyQyaUVe-LdzjGYT3GkqEgC8pPaE8GDdVo7ZKPg' },
      { title: 'Apex Match-Grade', price: '$5,200.00', category: 'Competition', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMb8J21LpWVsoh0b4bf6ovwX8CtgX3ERStI4UTFGKM7IiguWgoxuW_v3JfcnBrTUhViJ143odo7JGZt3uuiOcJFllYHPABHihSAJJhnf2e95oc2xBvxJlX8W-zJ8K1N1O-ZSt042In0XEGVPYEpW3oN4-u0TKdwR7D9I73rjI5wihQKwS4WKyCnztiDAvtdLDlJ_9NvJWicMSYO7xWNTDorwThBA7kGTJkhqABxUYQxIdJfxLhKqxnNUmLFKT6xZM_6YSnpKhle4' }
    ]
  },
  {
    id: 'viper-compact-9',
    title: 'Viper Compact 9',
    price: '$1,890.00',
    category: 'Striker Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVeQcGV8HuowIyiS8PPCEwVGebKpbammdL4RkxgQcDZOiVEG-jaLDsNyJtj_EM4q3t2cjMwAWI-5u9kR3trUlkK-SfM4JkyAEv9MruzAXUNrLUbL6xxEflxulX2-KPm7yRMJTEd9oCVFPf4RKhAFBtmBnkhXd3RI8V28HjFnFqDy8Vw6dyGMeUqxPbDtrring_0vT6_N99B08hOlPHjRPouxYVXxKUNnSvV1edWyQyaUVe-LdzjGYT3GkqEgC8pPaE8GDdVo7ZKPg',
    description: 'Sleek modern subcompact pistol with gold barrel accents. Designed for ultimate concealment without sacrificing firepower.',
    specs: [
      { label: 'Caliber', value: '9MM PARA' },
      { label: 'Capacity', value: '12+1' },
      { label: 'Barrel', value: '3.1" Gold TiN' },
      { label: 'Weight', value: '18.5 oz' }
    ],
    shortSpecs: 'Caliber: 9mm / Barrel: 3.1"',
    reviews: [
      { text: '"The gold accents are beautiful, and it shoots flatter than any other subcompact."', author: 'CCW Daily', initials: 'C.D.' },
      { text: '"Perfect balance of size and performance."', author: 'Tactical Review', initials: 'T.R.', highlight: true }
    ],
    similarItems: [
      { title: 'Operator 01 Custom', price: '$3,450.00', category: 'Tactical Sidearms', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdbYh7zH4tjofiGHhzbbeyIYxSw73Z2xacbPTdDCaTt4WSGlV08TIJKxceMdqyNQJ2Ayqvvt7t4KRJ6ufgBFbVusfr-EU4vC94IOPjm6NIfUhDIvI64fYxVPFnMUwhGfgvtq4Y9P-WQg3Eq7nFvvtOYt1sJlURPo-lf2a8PpeSmIMRoaWvWvpNjqEG0Fv9jEXwvfLTHZq6heisJFAIrfc_GB1cUeci03xy0LneTvO3C0t2vXJoYMWlZsKpQRWwzizfPRbSuWb1h5A' }
    ]
  },
  {
    id: 'apex-match-grade',
    title: 'Apex Match-Grade',
    price: '$5,200.00',
    category: 'Competition',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMb8J21LpWVsoh0b4bf6ovwX8CtgX3ERStI4UTFGKM7IiguWgoxuW_v3JfcnBrTUhViJ143odo7JGZt3uuiOcJFllYHPABHihSAJJhnf2e95oc2xBvxJlX8W-zJ8K1N1O-ZSt042In0XEGVPYEpW3oN4-u0TKdwR7D9I73rjI5wihQKwS4WKyCnztiDAvtdLDlJ_9NvJWicMSYO7xWNTDorwThBA7kGTJkhqABxUYQxIdJfxLhKqxnNUmLFKT6xZM_6YSnpKhle4',
    description: 'High-precision bolt-action sniper rifle with advanced optics. Engineered for extreme distance and repeatable accuracy.',
    specs: [
      { label: 'Caliber', value: '.308 WIN' },
      { label: 'Barrel', value: '24" Heavy' },
      { label: 'Optic', value: '6-24x50' },
      { label: 'Trigger', value: 'Two-Stage' }
    ],
    shortSpecs: 'Caliber: .308 WIN / Barrel: 24"',
    reviews: [
      { text: '"Consistently hitting steel at 1000 yards. The optics are crystal clear."', author: 'Long Range Pro', initials: 'L.P.' },
      { text: '"The best out-of-the-box precision rifle available."', author: 'Marksman Monthly', initials: 'M.M.', highlight: true }
    ],
    similarItems: [
      { title: 'Precision Marksman', price: '$6,800.00', category: 'Precision Rifles', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVhNK-HuxcDDkiD1e9cjk0c7__ikXoGDoOeAe-Dy12dy4LiYlbGaN7Kz4M9pVMzW_5XJqjvX9wthdSkMiyG6RllaRIO3MIrcma5Cn1CaXrIkV6eFWiTLpIZoepuQoq3tlBFpXohDrZKYlODQRyr2nl_6F5DcBA2eLn3dMlPo8MJSix8pnpBH19Zzf6HxmqBnBZe7A3jy-7hxHqqpUMtHshCXBUTiEKt0H6a8JFPj1UxWX1pYMkCzDc9EmwoZhoD5t9EP10jJpV74g' }
    ]
  },
  {
    id: 'precision-marksman',
    title: 'Precision Marksman',
    price: '$6,800.00',
    category: 'Precision Rifles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVhNK-HuxcDDkiD1e9cjk0c7__ikXoGDoOeAe-Dy12dy4LiYlbGaN7Kz4M9pVMzW_5XJqjvX9wthdSkMiyG6RllaRIO3MIrcma5Cn1CaXrIkV6eFWiTLpIZoepuQoq3tlBFpXohDrZKYlODQRyr2nl_6F5DcBA2eLn3dMlPo8MJSix8pnpBH19Zzf6HxmqBnBZe7A3jy-7hxHqqpUMtHshCXBUTiEKt0H6a8JFPj1UxWX1pYMkCzDc9EmwoZhoD5t9EP10jJpV74g',
    description: 'The ultimate long-range platform. Built on a monolithic chassis with a 24-inch match-grade barrel, the Precision Marksman is capable of sub-MOA performance at 1,000 yards.',
    specs: [
      { label: 'Caliber', value: '.338 LAPUA' },
      { label: 'Barrel', value: '24" Match' },
      { label: 'Finish', value: 'Tungsten Cerakote' },
      { label: 'Action', value: 'Bolt Action' }
    ],
    shortSpecs: 'Caliber: .338 LAPUA / Finish: Tungsten',
    reviews: [
      { text: '"Sub-MOA out of the box. The chassis ergonomics are perfect for long sessions."', author: 'Sniper Elite', initials: 'S.E.' },
      { text: '"The best long-range rifle I have ever owned. Worth every penny."', author: 'Range Master', initials: 'R.M.', highlight: true }
    ],
    similarItems: [
      { title: 'Apex Match-Grade', price: '$5,200.00', category: 'Competition', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMb8J21LpWVsoh0b4bf6ovwX8CtgX3ERStI4UTFGKM7IiguWgoxuW_v3JfcnBrTUhViJ143odo7JGZt3uuiOcJFllYHPABHihSAJJhnf2e95oc2xBvxJlX8W-zJ8K1N1O-ZSt042In0XEGVPYEpW3oN4-u0TKdwR7D9I73rjI5wihQKwS4WKyCnztiDAvtdLDlJ_9NvJWicMSYO7xWNTDorwThBA7kGTJkhqABxUYQxIdJfxLhKqxnNUmLFKT6xZM_6YSnpKhle4' }
    ]
  },
  {
    id: 'breacher-x12',
    title: 'Breacher X-12',
    price: '$1,450.00',
    category: 'Dynamic Response',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVOrlnFJTPsFrI-Xp-adI9Iiy3vdk0cJ4IkzfK8BC3tu4fLz8i6N8dh4k9DbzLvzlLWenYJl3iCqQrxgp3zEAC8EVRUIFwFhqGLt1HuUNO7sey7I7oERoDwCA223_RPw_FgKLOv4IvVTOpmiJiJVXk1ocvY7slHcMj3Zin0dS_VeMagMnIzq3iHq38NUlS-5tRYuKE5QSM1xxPrXNHazx0P_wEx_r_aBqdXr3WkK27fCPnwO3nUixyNr3OU8ihuuS8xKVp4L_FKnE',
    description: 'A compact, semi-automatic 12-gauge designed for rapid entry and close-quarters defense. Featuring a gas-piston system that significantly reduces felt recoil.',
    specs: [
      { label: 'Gauge', value: '12 GA' },
      { label: 'Capacity', value: '5+1' },
      { label: 'Barrel', value: '18.5"' },
      { label: 'System', value: 'Gas Piston' }
    ],
    shortSpecs: 'Gauge: 12 GA / Cap: 5+1',
    reviews: [
      { text: '"Fast, reliable, and surprisingly soft-shooting for a 12-gauge."', author: 'Entry Team Lead', initials: 'E.T.' },
      { text: '"The perfect home defense platform. Built like a tank."', author: 'Security Pro', initials: 'S.P.', highlight: true }
    ],
    similarItems: [
      { title: 'Ghost Operator', price: '$2,150.00', category: 'Stealth Series', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgyLTNqvRU3fjiKDJ6IoVntIFkl1tYg-6AxZE8PegZ50XIoRPT6jRsYUf8ar04jfOQ_T5u9KtU0H9Ilhbgt2dXLqF7rasVnC9br0MdSfZlxFk-38itp_qHCfDeGdLtlQz1wlKLTZhYfgTy7S3IqHzu1tmumiNuZcUjjZOlQBJq6LOfHkXcm6krSmKkAr4St9S00bE03ftDNqw-3U-PMbAtJ70xbYeU11QoOu9MQ44mQ4WQPpqmmJKJazsQtRdzWqvJuZN42n1o0mY' }
    ]
  },
  {
    id: 'ghost-operator',
    title: 'Ghost Operator',
    price: '$2,150.00',
    category: 'Stealth Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgyLTNqvRU3fjiKDJ6IoVntIFkl1tYg-6AxZE8PegZ50XIoRPT6jRsYUf8ar04jfOQ_T5u9KtU0H9Ilhbgt2dXLqF7rasVnC9br0MdSfZlxFk-38itp_qHCfDeGdLtlQz1wlKLTZhYfgTy7S3IqHzu1tmumiNuZcUjjZOlQBJq6LOfHkXcm6krSmKkAr4St9S00bE03ftDNqw-3U-PMbAtJ70xbYeU11QoOu9MQ44mQ4WQPpqmmJKJazsQtRdzWqvJuZN42n1o0mY',
    description: 'Modern black handgun with red dot sight and threaded barrel. Optimized for suppressed operations and low-light environments.',
    specs: [
      { label: 'Caliber', value: '9MM' },
      { label: 'Optic', value: 'Reflex Sight' },
      { label: 'Barrel', value: 'Threaded' },
      { label: 'Finish', value: 'Matte Black' }
    ],
    shortSpecs: 'Caliber: 9mm / Optic: Reflex',
    reviews: [
      { text: '"The red dot is perfectly zeroed out of the box."', author: 'Night Ops', initials: 'N.O.' },
      { text: '"Extremely quiet when suppressed."', author: 'Silent Professional', initials: 'S.P.', highlight: true }
    ],
    similarItems: [
      { title: 'Operator 01 Custom', price: '$3,450.00', category: 'Tactical Sidearms', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdbYh7zH4tjofiGHhzbbeyIYxSw73Z2xacbPTdDCaTt4WSGlV08TIJKxceMdqyNQJ2Ayqvvt7t4KRJ6ufgBFbVusfr-EU4vC94IOPjm6NIfUhDIvI64fYxVPFnMUwhGfgvtq4Y9P-WQg3Eq7nFvvtOYt1sJlURPo-lf2a8PpeSmIMRoaWvWvpNjqEG0Fv9jEXwvfLTHZq6heisJFAIrfc_GB1cUeci03xy0LneTvO3C0t2vXJoYMWlZsKpQRWwzizfPRbSuWb1h5A' }
    ]
  },
  {
    id: 'mk-iv-tactical',
    title: 'MK IV Tactical',
    price: '$2,800.00',
    category: 'Heritage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUgHhyezzuRUq_Hh9p4JZE3-ShhzB9XypPOJyQxUvNtgt6f0GyMRpdJxupmCdxYb_SP_1Mj8RqIXoCAGb8sPpyKUFuIlveB8eOUjRSA9BqLAGsgxSdoWz1Pom7QmOwE6j5-wXcbm4ln7CG7O4Nk40vgT-CxTootv31rjNmCu0hnqQnBNtS5tHGrKIxmcEhlKFAj3Y9cf_aivZAnEXwxpXclCsg4WcCrGMFkOmB0uXtH4hPrT7MglFH3A3gsXUHHrS92v2Qs3rdk4A',
    description: 'Compact tactical carbine with folding stock and suppressor. A versatile platform for urban reconnaissance and rapid response.',
    specs: [
      { label: 'Caliber', value: '5.56 NATO' },
      { label: 'Stock', value: 'Folding' },
      { label: 'Suppressor', value: 'Integrated' },
      { label: 'Rail', value: 'M-LOK' }
    ],
    shortSpecs: 'Caliber: 5.56 NATO / Stock: Folding',
    reviews: [
      { text: '"The folding stock makes it incredibly easy to transport."', author: 'Urban Recon', initials: 'U.R.' },
      { text: '"Reliable and accurate in a compact package."', author: 'Tactical Gear', initials: 'T.G.', highlight: true }
    ],
    similarItems: [
      { title: 'Urban Recon', price: '$3,100.00', category: 'Recon Series', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiylBIbdzhiykfUAk8oavmdkIcQVbOLnpn4MrylW3f1YIDyJWXMbvnfzq5Z_ydPOLz3vdIrWh0DpFMjYPaImhWas5wv9r1DZ5LJsknT521J3JO3IKWxdG9SMeFbghzGybbLTIJIMv69__10AKave8PDbSAl1-lclvPz10gS0VlVM4ytf8BhMHduKX7vE3vMlsBvPyvxIhE0xVHwCLCWB7zc8cESPWZ69dfd28buGZfRZwCE1QCMdgRPwLxdj0v4P4cnp5y8WIVYwA' }
    ]
  },
  {
    id: 'striker-series',
    title: 'Striker Series',
    price: '$980.00',
    category: 'Striker Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc5T6UIDzRDWzRpKOjL7tzjLCtAMz74l0T4EU97eIcfaFAhma9t4SWSZB8HKmsFAAvTG1tzCT76Ak8qQJv7WhWCZuf5y-BXJrxDizNzSM4YcOiDshtCeJPmu3nWVkrmCMqyWPveECuo6nc0zvp47hcirZE7KsyqY3XumJvx66GufOPATPLWI7iv5SAd89k_RRPk1oZbA-23b4Usx5s2aTCIqZQ2_LebLLN4bkJjLe16UTr4EAOWBDKoLaaxmayxmucBEk5XD-qVkY',
    description: 'Striker fired modern service pistol with flat trigger and modular frame. Built for duty use and extreme durability.',
    specs: [
      { label: 'Caliber', value: '.45 ACP' },
      { label: 'Trigger', value: 'Flat Face' },
      { label: 'Frame', value: 'Modular' },
      { label: 'Sights', value: 'Night Sights' }
    ],
    shortSpecs: 'Caliber: .45 ACP / Trigger: Flat',
    reviews: [
      { text: '"The flat trigger is a game changer for accuracy."', author: 'Duty Officer', initials: 'D.O.' },
      { text: '"Solid, reliable, and fits the hand perfectly."', author: 'Grip Expert', initials: 'G.E.', highlight: true }
    ],
    similarItems: [
      { title: 'Special Ops Sidearm', price: '$2,400.00', category: 'Tactical Sidearms', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrlvIakhLKjhTrA_gFMgue0G6sxCi919NSDAgDtbbLJ-vdQm1CJVuT3jz8AsU5L8SC02bGCHWP0DVMOeZIZT2pmGv6SwLLK62O8N8tH4aM09I1T1utjLqjDL8CONnrEwUNfcO1CrKuhkV33_N0oixDHhZKKGoJH3x01dHfWVVU-iysSAkAh5_3DTxQZe3YkXvQ-0xXrfxf0kwNPVSYAfsUhrxUP2iUEkDF64S1EKhLzTirwv-jSi1wNacOFi5hjN7OGqKfz3A0BzM' }
    ]
  },
  {
    id: 'competition-grade-ar',
    title: 'Competition Grade AR',
    price: '$3,200.00',
    category: 'Competition',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCget2vMClmzz2v5e0ERG0IBkY84zzCxElAVpNtiuQCfgK3J31TnlOebF-lTFwTgSodd1CPf_WtzIInf5ajkNHl5DNebxdKOkSy9Ficu9sZBPGE3ROaeKY8eiYjwVCQbHsuA1R14K8Zd7TOKnSgdTWTATT-pa79MN_45LRAsx-CGHkeXn1cuXnnHCiQTpN9BxhV3tw8WCAiHaPuK4nJ70ql9n0Ta0Zu83iZHJg3MDQ6XYP8rF1CmmjhqycQIoiv_nRdaOyd9Fm9tY8',
    description: 'Skeletonized competition rifle with high-end optic and compensator. Designed for speed and precision in competitive shooting.',
    specs: [
      { label: 'Caliber', value: '.223 WYLDE' },
      { label: 'Weight', value: '5.8 lbs' },
      { label: 'Optic', value: '1-6x LPVO' },
      { label: 'Comp', value: 'Match Grade' }
    ],
    shortSpecs: 'Caliber: .223 WYLDE / Weight: 5.8 lbs',
    reviews: [
      { text: '"Incredibly light and fast on transitions."', author: '3-Gun Champ', initials: '3.G.' },
      { text: '"The recoil is non-existent with this compensator."', author: 'Speed Shooter', initials: 'S.S.', highlight: true }
    ],
    similarItems: [
      { title: 'MK IV Tactical', price: '$2,800.00', category: 'Heritage', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUgHhyezzuRUq_Hh9p4JZE3-ShhzB9XypPOJyQxUvNtgt6f0GyMRpdJxupmCdxYb_SP_1Mj8RqIXoCAGb8sPpyKUFuIlveB8eOUjRSA9BqLAGsgxSdoWz1Pom7QmOwE6j5-wXcbm4ln7CG7O4Nk40vgT-CxTootv31rjNmCu0hnqQnBNtS5tHGrKIxmcEhlKFAj3Y9cf_aivZAnEXwxpXclCsg4WcCrGMFkOmB0uXtH4hPrT7MglFH3A3gsXUHHrS92v2Qs3rdk4A' }
    ]
  },
  {
    id: 'special-ops-sidearm',
    title: 'Special Ops Sidearm',
    price: '$2,400.00',
    category: 'Tactical Sidearms',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrlvIakhLKjhTrA_gFMgue0G6sxCi919NSDAgDtbbLJ-vdQm1CJVuT3jz8AsU5L8SC02bGCHWP0DVMOeZIZT2pmGv6SwLLK62O8N8tH4aM09I1T1utjLqjDL8CONnrEwUNfcO1CrKuhkV33_N0oixDHhZKKGoJH3x01dHfWVVU-iysSAkAh5_3DTxQZe3YkXvQ-0xXrfxf0kwNPVSYAfsUhrxUP2iUEkDF64S1EKhLzTirwv-jSi1wNacOFi5hjN7OGqKfz3A0BzM',
    description: 'Full size combat handgun with flared magwell and tactical light. The standard for elite special operations units.',
    specs: [
      { label: 'Caliber', value: '9MM' },
      { label: 'Light', value: '1000 Lumens' },
      { label: 'Magwell', value: 'Flared' },
      { label: 'Capacity', value: '21+1' }
    ],
    shortSpecs: 'Caliber: 9mm / Cap: 21+1',
    reviews: [
      { text: '"The magwell makes reloads lightning fast."', author: 'Spec Ops', initials: 'S.O.' },
      { text: '"The integrated light is incredibly bright."', author: 'Tactical Pro', initials: 'T.P.', highlight: true }
    ],
    similarItems: [
      { title: 'Ghost Operator', price: '$2,150.00', category: 'Stealth Series', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgyLTNqvRU3fjiKDJ6IoVntIFkl1tYg-6AxZE8PegZ50XIoRPT6jRsYUf8ar04jfOQ_T5u9KtU0H9Ilhbgt2dXLqF7rasVnC9br0MdSfZlxFk-38itp_qHCfDeGdLtlQz1wlKLTZhYfgTy7S3IqHzu1tmumiNuZcUjjZOlQBJq6LOfHkXcm6krSmKkAr4St9S00bE03ftDNqw-3U-PMbAtJ70xbYeU11QoOu9MQ44mQ4WQPpqmmJKJazsQtRdzWqvJuZN42n1o0mY' }
    ]
  },
  {
    id: 'urban-recon',
    title: 'Urban Recon',
    price: '$3,100.00',
    category: 'Recon Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiylBIbdzhiykfUAk8oavmdkIcQVbOLnpn4MrylW3f1YIDyJWXMbvnfzq5Z_ydPOLz3vdIrWh0DpFMjYPaImhWas5wv9r1DZ5LJsknT521J3JO3IKWxdG9SMeFbghzGybbLTIJIMv69__10AKave8PDbSAl1-lclvPz10gS0VlVM4ytf8BhMHduKX7vE3vMlsBvPyvxIhE0xVHwCLCWB7zc8cESPWZ69dfd28buGZfRZwCE1QCMdgRPwLxdj0v4P4cnp5y8WIVYwA',
    description: 'Compact survival carbine with integrated suppressor and simple iron sights. Optimized for the .300 Blackout cartridge.',
    specs: [
      { label: 'Caliber', value: '300 BLK' },
      { label: 'Barrel', value: '9" Suppressed' },
      { label: 'Sights', value: 'Iron Sights' },
      { label: 'Weight', value: '6.2 lbs' }
    ],
    shortSpecs: 'Caliber: 300 BLK / Weight: 6.2 lbs',
    reviews: [
      { text: '"The perfect PDW for urban environments."', author: 'Recon Lead', initials: 'R.L.' },
      { text: '"Quiet, compact, and powerful."', author: 'Stealth Specialist', initials: 'S.S.', highlight: true }
    ],
    similarItems: [
      { title: 'MK IV Tactical', price: '$2,800.00', category: 'Heritage', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUgHhyezzuRUq_Hh9p4JZE3-ShhzB9XypPOJyQxUvNtgt6f0GyMRpdJxupmCdxYb_SP_1Mj8RqIXoCAGb8sPpyKUFuIlveB8eOUjRSA9BqLAGsgxSdoWz1Pom7QmOwE6j5-wXcbm4ln7CG7O4Nk40vgT-CxTootv31rjNmCu0hnqQnBNtS5tHGrKIxmcEhlKFAj3Y9cf_aivZAnEXwxpXclCsg4WcCrGMFkOmB0uXtH4hPrT7MglFH3A3gsXUHHrS92v2Qs3rdk4A' }
    ]
  },
  {
    id: 'elite-tactical-rifle',
    title: 'Elite Tactical Rifle',
    price: '$4,200.00',
    category: 'Rifles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsrYRjnU2yYhbDqCcRkrdXLQEUwMvYRG6uyH4ysKvoVpJSFgoY5Z9brRvKvTTM9XWRrpp0AEguneGXR8NYTwQEOSdSA4Pnf4mkiEF-hwTl-VFBbia1C4a-0_xVsIrcxCXP601ldXeRoq2PBS0LqPDkw-iEUe5b_Gf0OgBVkMmLxYdnpGqK79rnMfjlXHsUFoyJLGkK2bMIgLKvkTrXATmL1MZyuv0C046neHrYAMVbURR-GoKV0JPUPgHZL-ojJCnThdxWNW1IGrg',
    description: 'Cinematic close-up of a high-end tactical rifle. Precision engineered for the modern operator.',
    specs: [
      { label: 'Caliber', value: '5.56 NATO' },
      { label: 'Barrel', value: '16" Match' },
      { label: 'Finish', value: 'Matte Black' },
      { label: 'Rail', value: 'Picatinny' }
    ],
    shortSpecs: 'Caliber: 5.56 NATO / Barrel: 16"',
    reviews: [
      { text: '"The build quality is exceptional. Very accurate at range."', author: 'Spec Ops Miller', initials: 'S.M.' }
    ],
    similarItems: [
      { title: 'MK IV Tactical', price: '$2,800.00', category: 'Heritage', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUgHhyezzuRUq_Hh9p4JZE3-ShhzB9XypPOJyQxUvNtgt6f0GyMRpdJxupmCdxYb_SP_1Mj8RqIXoCAGb8sPpyKUFuIlveB8eOUjRSA9BqLAGsgxSdoWz1Pom7QmOwE6j5-wXcbm4ln7CG7O4Nk40vgT-CxTootv31rjNmCu0hnqQnBNtS5tHGrKIxmcEhlKFAj3Y9cf_aivZAnEXwxpXclCsg4WcCrGMFkOmB0uXtH4hPrT7MglFH3A3gsXUHHrS92v2Qs3rdk4A' }
    ]
  },
  {
    id: 'master-handgun-kit',
    title: 'Master Handgun Kit',
    price: '$1,250.00',
    category: 'Handguns',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq6rv2smn6XDaqj1-Vear_L0VNcydQD3q915SlFfY60aT8uUhSKrYAVhs8r6wMXEgqGJNG5JK_pbbpiC_r7UqCIjaGBhVaFXJpc6cyjdFLU3XNAh-X1-2hykEIdGC-zzW0gslQAim0Dxh2PFIQPVvQdLGF42CappvFiZJO3wDP4ZU-10H2oDfFv7QKzy3M0K2EaEetG3u9nPemSxpdqvMMIIKKhsUx8FE0sZre4x2uUiJOwqSAMoEQdvWfPhrMtNObVxw7yFsS1ZE',
    description: 'Handgun selection on a technical workbench with various parts and cleaning equipment. Perfect for the enthusiast armorer.',
    specs: [
      { label: 'Type', value: 'Maintenance Kit' },
      { label: 'Includes', value: 'Tools & Parts' },
      { label: 'Compatibility', value: 'Universal' }
    ],
    shortSpecs: 'Type: Maintenance Kit / Universal',
    reviews: [
      { text: '"Everything you need to keep your sidearms in top shape."', author: 'Gunsmith Jack', initials: 'G.J.' }
    ],
    similarItems: [
      { title: 'Operator 01 Custom', price: '$3,450.00', category: 'Tactical Sidearms', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdbYh7zH4tjofiGHhzbbeyIYxSw73Z2xacbPTdDCaTt4WSGlV08TIJKxceMdqyNQJ2Ayqvvt7t4KRJ6ufgBFbVusfr-EU4vC94IOPjm6NIfUhDIvI64fYxVPFnMUwhGfgvtq4Y9P-WQg3Eq7nFvvtOYt1sJlURPo-lf2a8PpeSmIMRoaWvWvpNjqEG0Fv9jEXwvfLTHZq6heisJFAIrfc_GB1cUeci03xy0LneTvO3C0t2vXJoYMWlZsKpQRWwzizfPRbSuWb1h5A' }
    ]
  },
  {
    id: 'carbon-fiber-rifle',
    title: 'Carbon Fiber Rifle',
    price: '$5,500.00',
    category: 'Rifles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK1WSpflUMwjM8FKYh-gC_wkWkGzIjcYsxIPF8LbTVfFGyAbqtO5nwVsrUK2pVW_l31CILssru_pHOD8BA9hfY1xQqc95iz2wfKVMlPeg-iJXvT4oSYwQZssm3z-qqc83sDzHPzmBkqDpKKQ6whbDL4RpId20jjY0omn0hbywSFnFWnadD_g6QS9uezMCd2Tq9tLVrxMK66sw2P-yGiuZnhqTnIBDgifAgkbeT3lK-snpYNcImICUpNj-tLPwxYsLMZBwxgKiU1q4',
    description: 'Detailed view of a semi-automatic tactical rifle receiver with carbon fiber textures. Lightweight and incredibly strong.',
    specs: [
      { label: 'Material', value: 'Carbon Fiber' },
      { label: 'Weight', value: '4.5 lbs' },
      { label: 'Caliber', value: '5.56 NATO' }
    ],
    shortSpecs: 'Material: Carbon Fiber / 4.5 lbs',
    reviews: [
      { text: '"The weight savings are incredible without sacrificing accuracy."', author: 'Lightweight Pro', initials: 'L.P.' }
    ],
    similarItems: [
      { title: 'Elite Tactical Rifle', price: '$4,200.00', category: 'Rifles', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsrYRjnU2yYhbDqCcRkrdXLQEUwMvYRG6uyH4ysKvoVpJSFgoY5Z9brRvKvTTM9XWRrpp0AEguneGXR8NYTwQEOSdSA4Pnf4mkiEF-hwTl-VFBbia1C4a-0_xVsIrcxCXP601ldXeRoq2PBS0LqPDkw-iEUe5b_Gf0OgBVkMmLxYdnpGqK79rnMfjlXHsUFoyJLGkK2bMIgLKvkTrXATmL1MZyuv0C046neHrYAMVbURR-GoKV0JPUPgHZL-ojJCnThdxWNW1IGrg' }
    ]
  },
  {
    id: 'combat-shotgun',
    title: 'Combat Shotgun',
    price: '$1,850.00',
    category: 'Shotguns',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvUKsmw4plKr9doF2SiR1WEl1mr-ZeYkkMGM8cksc-7FGMc8VP3-ROBnZs_8z6qRXFPiZm1mFJvdzeBOc7yGiSZYzrGvDKeFmJqi0zqnM9R_o830chX-8yNW7thCvaUxzM3-a22iZqrh9sj0Yotj3VsqAiVFw9MCZGNVl4OFpha2pNlVm_IsX8v90Xd1IQueqobrc3LIWUWFETGcH8ZapHI9UzkPUZlzcPcAkpyLk5rZ7xnSkXSsNgj-4sXtH-v9kk27ERvOIWJbQ',
    description: 'Heavy-duty combat shotgun with shell carrier on the stock. Reliable in the grittiest environments.',
    specs: [
      { label: 'Gauge', value: '12 GA' },
      { label: 'Capacity', value: '7+1' },
      { label: 'Action', value: 'Pump' }
    ],
    shortSpecs: 'Gauge: 12 GA / Cap: 7+1',
    reviews: [
      { text: '"Solid as a rock. Never fails to cycle."', author: 'Breacher Bob', initials: 'B.B.' }
    ],
    similarItems: [
      { title: 'Breacher X-12', price: '$1,450.00', category: 'Dynamic Response', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVOrlnFJTPsFrI-Xp-adI9Iiy3vdk0cJ4IkzfK8BC3tu4fLz8i6N8dh4k9DbzLvzlLWenYJl3iCqQrxgp3zEAC8EVRUIFwFhqGLt1HuUNO7sey7I7oERoDwCA223_RPw_FgKLOv4IvVTOpmiJiJVXk1ocvY7slHcMj3Zin0dS_VeMagMnIzq3iHq38NUlS-5tRYuKE5QSM1xxPrXNHazx0P_wEx_r_aBqdXr3WkK27fCPnwO3nUixyNr3OU8ihuuS8xKVp4L_FKnE' }
    ]
  },
  {
    id: 'operator-gear-set',
    title: 'Operator Gear Set',
    price: '$2,950.00',
    category: 'Gear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtjm6MJGshSSQnWAJogQGcTdiHIYskWl_YoH6_mtO43_qgnqTmK3RiiiFWEEWeZ2giQaQsevEXJdjFwsDjiaQ6z7kqNS2j4mX9dv_IcvL58sV6fwx5K0MYROKx1bR4TNpRfeUYY6JwUSTHmTjx0zlyxL2wv0cXCu1OZ8PGFdW79NfZVo8hIR2OcnGp9EPWc1F57xY4mGf8ScrOLbAdaCkGE3vRqbVjjqmlW_wZeBmKQzePS048EpFl8n0vAYVanxav1tct6k5-ntE',
    description: 'Tactical equipment including plate carrier, helmet, and communication gear. Complete protection for the modern operator.',
    specs: [
      { label: 'Protection', value: 'Level IV' },
      { label: 'Includes', value: 'Carrier, Helmet, Comms' },
      { label: 'Weight', value: '15 lbs' }
    ],
    shortSpecs: 'Protection: Level IV / Complete Set',
    reviews: [
      { text: '"The best gear I have used. Comfortable and secure."', author: 'Spec Ops Sam', initials: 'S.S.' }
    ],
    similarItems: [
      { title: 'Urban Recon', price: '$3,100.00', category: 'Recon Series', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiylBIbdzhiykfUAk8oavmdkIcQVbOLnpn4MrylW3f1YIDyJWXMbvnfzq5Z_ydPOLz3vdIrWh0DpFMjYPaImhWas5wv9r1DZ5LJsknT521J3JO3IKWxdG9SMeFbghzGybbLTIJIMv69__10AKave8PDbSAl1-lclvPz10gS0VlVM4ytf8BhMHduKX7vE3vMlsBvPyvxIhE0xVHwCLCWB7zc8cESPWZ69dfd28buGZfRZwCE1QCMdgRPwLxdj0v4P4cnp5y8WIVYwA' }
    ]
  }
];
