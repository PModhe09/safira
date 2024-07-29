const wholeList = [
  {
    id: 1,
    name: "Aruna Asaf Ali Govt. Hospital",
    address: "Rajpur Road, Delhi",
    pincode: "110054",
    phone: 23965532,
    fax: "23922333",
    imageUrl: "https://aaagh.delhi.gov.in/sites/default/files/intro/aruna_asaf_ali_govt_hospital.png",
  },
  {
    id: 2,
    name: "Acharyaashree Bhikshu Hospital",
    address: "Moti Nagar, New Delhi",
    pincode: "110015",
    phone: 25423011,
    fax: "25448806",
    imageUrl: "https://asbh.delhi.gov.in/sites/default/files/intro/acharya_shree_bhikshu_hospital.png"
  },
  {
    id: 3,
    name: "Attar Sain Jain Hospital",
    address: "Lawrence Road, New Delhi",
    pincode: "110035",
    phone: 27153357,
    fax: "27106441",
    imageUrl: "https://content3.jdmagicbox.com/comp/delhi/80/011p1503980/catalogue/attar-sain-jain-eye-hospital-lawrence-road-industrial-area-delhi-eye-hospitals-vzm3jf1qi9.jpg"
  },
  {
    id: 4,
    name: "Baba Saheb Ambedkar Hospital",
    address: "Sector 6, Rohini, New Delhi",
    pincode: "110085",
    phone: 27055585,
    fax: "27058108",
    imageUrl: "https://bsah.delhi.gov.in/sites/default/files/bsah/intro/dr._baba_saheb_ambedkar_hospital.jpg"
  },
  {
    id: 5,
    name: "Bhagwan Mahaveer Hospital",
    address: "Pitampura, Delhi",
    pincode: "110034",
    phone: 27034535,
    fax: "27033948",
    imageUrl: "https://content.jdmagicbox.com/comp/delhi/63/011p72263/catalogue/bhagwan-mahavir-hospital-pitampura-delhi-hospitals-11n094w9zl.jpg"
  },
  {
    id: 6,
    name: "Babu Jagjivan Ram Hospital",
    address: "Jahangir Puri, New Delhi",
    pincode: "110033",
    phone: 27631810,
    fax: "27631610",
    imageUrl: "https://content3.jdmagicbox.com/comp/delhi/36/011p85736/catalogue/babu-jagjivan-ram-hospital-bhalswa-jahangirpuri-delhi-hospitals-h4gzvqrluy.jpg"
  },
  {
    id: 7,
    name: "Central Jail Hospital",
    address: "Jail Road, Hari Nagar, Delhi",
    pincode: "110064",
    phone: 28520012,
    fax: ""
  },
  {
    id: 8,
    name: "Chacha Nehru Bal Chikitsalaya",
    address: "Geeta Colony, Delhi",
    pincode: "110031",
    phone: 21210215,
    fax: "21210203"
  },
  {
    id: 9,
    name: "Dadadev Mother & Child Hospital",
    address: "Nasirpur Near Dabrimore Janakpuri, New Delhi",
    pincode: "110018",
    phone: 25395536,
    fax: "25395542"
  },
  {
    id: 10,
    name: "Deen Dayal Upadhyay Hospital",
    address: "Hari Nagar, New Delhi",
    pincode: "110064",
    phone: 25494337,
    fax: "25494264"
  },
  {
    id: 11,
    name: "Deep Chand Bandhu Hospital",
    address: "Kokiwala Bagh, Ashok Vihar, Phase-IV, New Delhi",
    pincode: "",
    phone: 27305953,
    fax: ""
  },
  {
    id: 12,
    name: "Delhi State Cancer Institution",
    address: "GTB Hospital Complex, Shahadara, Delhi",
    pincode: "110095",
    phone: 22110505,
    fax: ""
  },
  {
    id: 13,
    name: "Dr. Hedgewar Arogya Sansthan",
    address: "Karkardooma, Delhi",
    pincode: "110032",
    phone: 22393155,
    fax: "22393354"
  },
  {
    id: 14,
    name: "Dr. N.C. Joshi Hospital",
    address: "Karol Bagh, New Delhi",
    pincode: "110005",
    phone: 23611786,
    fax: "23523677"
  },
  {
    id: 15,
    name: "Govind Ballabh Pant Hospital (G.B.P.H.)",
    address: "Jawahar Lal Nehru Marg, Delhi",
    pincode: "110002",
    phone: 23238109,
    fax: "23239442"
  },
  {
    id: 16,
    name: "Guru Govind Singh Govt. Hospital",
    address: "Raghubir Nagar, New Delhi",
    pincode: "110027",
    phone: 25984549,
    fax: "25989417"
  },
  {
    id: 17,
    name: "Guru Nanak Eye Center",
    address: "Maharaja Ranjit Singh Marg, New Delhi",
    pincode: "110002",
    phone: 23236931,
    fax: "23230033"
  },
  {
    id: 18,
    name: "Guru Teg Bahadur Hospital (G.T.B.H.)",
    address: "Shahdara, Delhi",
    pincode: "110095",
    phone: 22581730,
    fax: "22581928"
  },
  {
    id: 19,
    name: "Institute of Liver & Biliary Sciences (I.L.B.S.)",
    address: "Vasant Kunj, Delhi",
    pincode: "110057",
    phone: 46300000,
    fax: ""
  },
  {
    id: 20,
    name: "Institute of Human Behaviour and Allied Sciences (I.H.B.A.S.)",
    address: "Shahdara, Delhi",
    pincode: "110095",
    phone: 22112136,
    fax: ""
  },
  {
    id: 21,
    name: "Janakpuri Super Speciality Hospital",
    address: "Janakpuri, Delhi",
    pincode: "110058",
    phone: 25552023,
    fax: ""
  },
  {
    id: 22,
    name: "Lal Bahadur Shastri Hospital (L.B.S.)",
    address: "Khichri Pur, New Delhi",
    pincode: "110091",
    phone: 22774145,
    fax: "22786808"
  },
  {
    id: 23,
    name: "Lok Nayak Hospital",
    address: "Jawahar Lal Nehru Marg, Delhi",
    pincode: "110002",
    phone: 23236000,
    fax: "23232870"
  },
  {
    id: 24,
    name: "Maharishi Balmiki Hospital",
    address: "Pooth Khurd, New Delhi",
    pincode: "110039",
    phone: 27761521,
    fax: "27761522"
  },
  {
    id: 25,
    name: "Pt. Madan Mohan Malviya Hospital",
    address: "Malviya Nagar, New Delhi",
    pincode: "110017",
    phone: 26680603,
    fax: ""
  },
  {
    id: 26,
    name: "Maulana Azad Institute of Dental Sciences",
    address: "M.A.M.C. J.L. Nehru Marg, New Delhi",
    pincode: "110002",
    phone: 23233925,
    fax: ""
  },
  {
    id: 27,
    name: "Poor House Hospital",
    address: "Beggers Home G.T.B.Ngr, Delhi",
    pincode: "110009",
    phone: 23965532,
    fax: ""
  },
  {
    id: 28,
    name: "Rajiv Gandhi Super Speciality Hospital",
    address: "Tahirpur, New Delhi",
    pincode: "110064",
    phone: 65252480,
    fax: ""
  },
  {
    id: 29,
    name: "Rao Tula Ram Memorial Hospital",
    address: "Jaffar pur, New Delhi",
    pincode: "110073",
    phone: 25318444,
    fax: "25318012, 25318070"
  },
  {
    id: 30,
    name: "Sardar Vallabh Bhai Patel Hospital",
    address: "Patel Nagar, New Delhi",
    pincode: "110008",
    phone: 25885944,
    fax: "25881396"
  },
  {
    id: 31,
    name: "AIIMS",
    address: "Ansari Nagar",
    city: "New Delhi",
    pincode: "110029",
    phone: "+91-11-26864851"
  },
  {
    id: 32,
    name: "Bara Hindu Rao Hospital",
    address: "Subzi Mandi",
    city: "New Delhi",
    pincode: "110007",
    phone: "+91-11-22932362"
  },
  {
    id: 33,
    name: "Batra Hospital",
    address: "1 Tughlabad Institutional Area, Mehrauli Badarpur Road",
    city: "New Delhi",
    pincode: "62",
    phone: "+91-11-26987485/86"
  },
  {
    id: 34,
    name: "Dr. Ram Manohar Lohia Hospital",
    address: "Baba Kharak Singh Marg, Near Gole Dakkhana",
    city: "New Delhi",
    pincode: "1",
    phone: +91-11-23365525
  },
  {
    id: 35,
    name: "Friends Medicos (For Surgical & Medical Emergencies)",
    address: "Khosla Hospital, BP Block, Shalimar Bagh",
    city: "Delhi",
    pincode: "110052",
    phone: +91-11-27403378
  },
  {
    id: 36,
    name: "Holy Angels Hospital (Davai Shop)",
    address: "Plot B, Community Centre, Basant Lok, Vasant Vihar",
    city: "New Delhi",
    pincode: "110057",
    phone: +91-11-26142832
  },
  {
    id: 37,
    name: "Lok Nayak Hospital",
    address: "Nehru Marg, Delhi Gate",
    city: "New Delhi",
    pincode: "110002",
    phone: 11-23233400
  },
  {
    id: 38,
    name: "New Delhi Medicos",
    address: "12-15, Old R.K. Ashram Marg, Gate No 6, Dr Ram Manohar Lohia Hospital",
    city: "Delhi",
    pincode: "1",
    phone: 1123347151
  },
  {
    id: 39,
    name: "Savitri Medicos",
    address: "85/5, Shastri Park, Chander Nagar, Trans Yamuna",
    city: "Delhi",
    pincode: "110051",
    phone: 11-22220141
  },
];

export default wholeList;
