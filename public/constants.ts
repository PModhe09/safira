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
    pincode: "100062",
    phone: "+91-11-26987485/86"
  },
  {
    id: 34,
    name: "Dr. Ram Manohar Lohia Hospital",
    address: "Baba Kharak Singh Marg, Near Gole Dakkhana",
    city: "New Delhi",
    pincode: "100001",
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
    pincode: "110001",
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
  {
    id: 40,
    name: "Safdrarganj Hospital",
    address: "85/5, Shastri Park, Chander Nagar, Trans Yamuna",
    city: "Delhi",
    pincode: "110029",
    phone: 11-26730000
  },
  {
    id: 41,
    name: "Red Cross Hospital",
    address: "Red Cross Bhawan, Golf Links, New Delhi-110003",
    city: "Delhi",
    pincode: "110003",
    phone: 11-43508575
  },
  {
    id:42,
    name:"Lala Ram Saroop T.B Hospital",
    address:"Near Qutab Minar, Aurobindo Marg, Mehrauli",
    city:"Delhi",
    pincode:"110030",
    phone:26854922,
  },
  {
    id:43,
    name:"Rajan Babu Institute of Pulmonary Medicine and Tuberculosis",
    address:"Tagore Park Extension, GTB Nagar",
    city:"Delhi",
    pincode:"110009",
    phone:27113493
  },
  {
    id: 44,
    name: "Mohalla Clinic D-7, khasra no. 34, Hardev Nagar village, Jharoda Majra (same as Constructed property of Sh. Gulab , wazirabad)-Rent Free",
    address: "D-7, khasra no. 34, Hardev Nagar village, Jharoda Majra (same as Constructed property of Sh. Gulab , wazirabad)-Rent Free",
    pincode: "110084",
    phone: ""
  },
  {
    id: 45,
    name: "Mohalla Clinic Jharoda, Milan Vihar, Burari",
    address: "Jharoda, Milan Vihar, Burari",
    pincode: "110084",
    phone: ""
  },
  {
    id: 46,
    name: "Mohalla Clinic Burari,Uttrakhand Enclave",
    address: "Burari,Uttrakhand Enclave",
    pincode: "110084",
    phone: ""
  },
  {
    id: 47,
    name: "Mohalla Clinic DJB Site, Pradhan Enclave, Badarpur Majra",
    address: "DJB Site, Pradhan Enclave, Badarpur Majra",
    pincode: "110044",
    phone: ""
  },
  {
    id: 48,
    name: "Mohalla Clinic Burari Jogi Chopal, Vijay Colony, Delhi",
    address: "Burari Jogi Chopal, Vijay Colony, Delhi",
    pincode: "110084",
    phone: ""
  },
  {
    id: 49,
    name: "Mohalla Clinic Nathupura: - Budh Bazar Road, Nathupura, Burari, Delhi",
    address: "Nathupura: - Budh Bazar Road, Nathupura, Burari, Delhi",
    pincode: "110084",
    phone: ""
  },
  {
    id: 50,
    name: "Mohalla Clinic AAMC, Amrit Vihar, Khasra No - 38/18 Burari, Block A, Delhi 84",
    address: "AAMC, Amrit Vihar, Khasra No - 38/18 Burari, Block A, Delhi 84",
    pincode: "110084",
    phone: ""
  },
  {
    id: 51,
    name: "Mohalla Clinic AAMC Kaushik Enclave, H NO- 78, Gali No- 16, Burari, Delhi-84",
    address: "AAMC Kaushik Enclave, H NO- 78, Gali No- 16, Burari, Delhi-84",
    pincode: "110084",
    phone: ""
  },
  {
    id: 52,
    name: "Mohalla Clinic AAMC Lakshmi Vihar, H NO- 71, Khasra No -417, Gali No- 6b, Burari",
    address: "AAMC Lakshmi Vihar, H NO- 71, Khasra No -417, Gali No- 6b, Burari",
    pincode: "110084",
    phone: ""
  },
  {
    id: 53,
    name: "Mohalla Clinic AAMC Baba colony, Khasra No- 93/4, Gali No- 13, A Block Burari, Delhi",
    address: "AAMC Baba colony, Khasra No- 93/4, Gali No- 13, A Block Burari, Delhi",
    pincode: "110084",
    phone: ""
  },
  {
    id: 54,
    name: "Mohalla Clinic AAMC Sant Nagar, H no- 2165, Block B, Gali no- 60b, Burari, Delhi-84",
    address: "AAMC Sant Nagar, H no- 2165, Block B, Gali no- 60b, Burari, Delhi-84",
    pincode: "110084",
    phone: ""
  },
  {
    id: 55,
    name: "Mohalla Clinic Takia Chowk Chopal, Burari Village, Delhi(Rent free)",
    address: "Takia Chowk Chopal, Burari Village, Delhi(Rent free)",
    pincode: "110084",
    phone: ""
  },
  {
    id: 56,
    name: "Mohalla Clinic Ram Ghat Wazirabad",
    address: "Ram Ghat Wazirabad",
    pincode: "110084",
    phone: ""
  },
  {
    id: 57,
    name: "Mohalla Clinic Near PWD office, Awtar Singh Marg, Gopal Pur",
    address: "Near PWD office, Awtar Singh Marg, Gopal Pur",
    pincode: "110043",
    phone: ""
  },
  {
    id: 58,
    name: "Mohalla Clinic DJB SE office Lucknow road",
    address: "DJB SE office Lucknow road",
    pincode: "110054",
    phone: ""
  },
  {
    id: 59,
    name: "Mohalla Clinic Near crossing under sangam vihar flyover",
    address: "Near crossing under sangam vihar flyover",
    pincode: "110062",
    phone: ""
  },
  {
    id: 60,
    name: "Mohalla Clinic DJB Site, A Block, Nehru Vihar, Mukherjee Nagar, Timarpur",
    address: "DJB Site, A Block, Nehru Vihar, Mukherjee Nagar, Timarpur",
    pincode: "110009",
    phone: ""
  },
  {
    id: 61,
    name: "Mohalla Clinic AAMC Aruna Nagar E-28, Aruna Nagar, Majnu Ka Tila, Delhi",
    address: "AAMC Aruna Nagar E-28, Aruna Nagar, Majnu Ka Tila, Delhi",
    pincode: "110054",
    phone: ""
  },
  {
    id: 62,
    name: "Mohalla Clinic Kabir Basti Malka Ganj (within premise of Raghushalla, Delhi)",
    address: "Kabir Basti Malka Ganj (within premise of Raghushalla, Delhi)",
    pincode: "110007",
    phone: ""
  },
  {
    id: 63,
    name: "Mohalla Clinic AAMC Dr. Satijawali Gali, Malka Ganj, Delhi-110007",
    address: "AAMC Dr. Satijawali Gali, Malka Ganj, Delhi-110007",
    pincode: "110007",
    phone: ""
  },
  {
    id: 64,
    name: "Mohalla Clinic AAMC Wazirabad Khasara No -120, Gali No-17, Main Road, Wazirabad, Delhi",
    address: "AAMC Wazirabad Khasara No -120, Gali No-17, Main Road, Wazirabad, Delhi",
    pincode: "110084",
    phone: ""
  },
  {
    id: 65,
    name: "Mohalla Clinic AAMC Sindorakalan Opposite nav bharti school sindorakalan, Delhi",
    address: "AAMC Sindorakalan Opposite nav bharti school sindorakalan, Delhi",
    pincode: "110085",
    phone: ""
  },
  {
    id: 66,
    name: "Mohalla Clinic AAMC Kamla Nagar, Oppsite Primary School Madavaliya School, Kamla Nagar, Delhi 07",
    address: "AAMC Kamla Nagar, Oppsite Primary School Madavaliya School, Kamla Nagar, Delhi 07",
    pincode: "110007",
    phone: ""
  },
  {
    id: 67,
    name: "Mohalla Clinic BELOW METRO NEAR SAI MANDIR",
    address: "BELOW METRO NEAR SAI MANDIR",
    pincode: "110092",
    phone: ""
  },
  {
    id: 68,
    name: "Mohalla Clinic Central Porta Cabin AAMC Yamuna Pushta Rain Basera Yamuna pusta AC-20",
    address: "Chandni Chowk",
    pincode: "110006",
    phone: ""
  },
  {
    id: 69,
    name: "Mohalla Clinic Central Porta Cabin AAMC Hanuman Mandir Rain Basera, Hanuman Mandir, ISBT, Delhi.",
    address: "Chandni Chowk",
    pincode: "110006",
    phone: ""
  },
  {
    id: 70,
    name: "Mohalla Clinic Central Porta Cabin Plot no. 10797/XV, Opp. Hari Mandir School.",
    address: "Ballimaran",
    pincode: "110006",
    phone: ""
  },
  {
    id: 71,
    name: "Mohalla Clinic Central Porta Cabin Karol Bagh, DJB Office, Motia Khan, Karol Bagh.",
    address: "Karol Bagh",
    pincode: "110005",
    phone: ""
  },
  {
    id: 72,
    name: "Mohalla Clinic Central Porta Cabin AAMC Aram Bagh Near Centeral Park Aaram Bagh Road, Delhi-05",
    address: "Karol Bagh",
    pincode: "110005",
    phone: ""
  },
  {
    id: 73,
    name: "Mohalla Clinic Central Porta Cabin AAMC, Khalsa College, Karol Bagh",
    address: "Karol Bagh",
    pincode: "110005",
    phone: ""
  },
  {
    id: 74,
    name: "Mohalla Clinic Central Porta Cabin AAMC Multani Dhanda Plot no.9857-59, gali no.5/6, Mutani Dhanda, Paharganj",
    address: "Karol Bagh",
    pincode: "110055",
    phone: ""
  },
  {
    id: 75,
    name: "Mohalla Clinic Central Porta Cabin DJB Ramjas pani Tanki, Tank Road, Karol Bagh.",
    address: "Karol Bagh",
    pincode: "110005",
    phone: ""
  },
  {
    id: 76,
    name: "Mohalla Clinic Central Porta Cabin Lala Hardev Sahay Marg, ISBT, Kashmere Gate.",
    address: "Chandni Chowk",
    pincode: "110006",
    phone: ""
  },
  {
    id: 77,
    name: "Mohalla Clinic Central Govt Premises AAMC Tis Hazari",
    address: "Chandni Chowk",
    pincode: "110006",
    phone: ""
  },
  {
    id: 78,
    name: "Mohalla Clinic Central DUSIB AAMC Multani Dhanda, Paharganj, Karol Bagh",
    address: "Karol Bagh",
    pincode: "110005",
    phone: ""
  },
  {
    id: 79,
    name: "Mohalla Clinic Central DUSIB AAMC Community Hall, Block 6, Dev Nagar",
    address: "Karol Bagh",
    pincode: "110005",
    phone: ""
  },
  {
    id: 80,
    name: "Mohalla Clinic Central Porta Cabin AAMC, NG Drain, near Mall Aptt",
    address: "Timarpur",
    pincode: "110054",
    phone: ""
  },
  {
    id: 81,
    name: "Mohalla Clinic Central Porta Cabin AAMC, NG Drain, Indira Basti",
    address: "Timarpur",
    pincode: "110054",
    phone: ""
  },
  {
    id: 82,
    name: "Mohalla Clinic Central DUSIB AAMC Shah Ganj, Lahori Gate",
    address: "Matia Mahal",
    pincode: "110006",
    phone: ""
  },
  {
    id: 83,
    name: "Mohalla Clinic Central DUSIB AAMC Behind Delight Cinema",
    address: "Matia Mahal",
    pincode: "110006",
    phone: ""
  },
  {
    id: 84,
    name: "Mohalla Clinic Central Rentfree AAMC Bhagirath Palace, Suraj Bhan",
    address: "Chandni Chowk",
    pincode: "110006",
    phone: ""
  },
  {
    id: 85,
    name: "Mohalla Clinic Central DUSIB AAMC Rod Gran",
    address: "Ballimaran",
    pincode: "110006",
    phone: ""
  },
  {
    id: 86,
    name: "Mohalla Clinic East Rental House no. 34, near Sai Mandir, Chilla Gaon",
    address: "Trilokpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 87,
    name: "Mohalla Clinic East Porta Cabin AAMC Trilokpuri 12 Block- H.No.12/169-170",
    address: "Trilokpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 88,
    name: "Mohalla Clinic East Porta Cabin Block No-2, JJ Camp",
    address: "Trilokpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 89,
    name: "Mohalla Clinic East Porta Cabin Block No-9 vacant and abandoned space",
    address: "Trilokpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 90,
    name: "Mohalla Clinic East Porta Cabin Block no. 35, Near DSIDC Market",
    address: "Trilokpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 91,
    name: "Mohalla Clinic East Porta Cabin Block No-25 near Sant Nirnkari Samagam Bhawan",
    address: "Trilokpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 92,
    name: "Mohalla Clinic East Porta Cabin Block No-25 near Sant Nirnkari Samagam Bhawan",
    address: "Trilokpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 93,
    name: "Mohalla Clinic East Porta Cabin AAMC Vasundhara Enclave: in front on Persona Elite Gym",
    address: "Kondli",
    pincode: "110096",
    phone: ""
  },
  {
    id: 94,
    name: "Mohalla Clinic East Rental AAMC Pratap Chowk: Pratap Chowk, Dallupura",
    address: "Kondli",
    pincode: "110096",
    phone: ""
  },
  {
    id: 95,
    name: "Mohalla Clinic East Porta Cabin DDA Flats Gazipur",
    address: "Kondli",
    pincode: "110096",
    phone: ""
  },
  {
    id: 96,
    name: "Mohalla Clinic East Porta Cabin AAMC Kondli Gharoli: Kondli Gharoli Dairy Farm",
    address: "Kondli",
    pincode: "110096",
    phone: ""
  },
  {
    id: 97,
    name: "Mohalla Clinic East Porta Cabin AAMC Khichripur: Block 5",
    address: "Khichripur",
    pincode: "110091",
    phone: ""
  },
  {
    id: 98,
    name: "Mohalla Clinic East Porta Cabin AAMC Kalyanpuri: Block no. 19",
    address: "Kalyanpuri",
    pincode: "110091",
    phone: ""
  },
  {
    id: 99,
    name: "Mohalla Clinic East Porta Cabin AAMC Prachin Shiv Mandir, Mayur Vihar phase-3, Pragati Marg Near Bharti Public School",
    address: "Kondli",
    pincode: "110096",
    phone: ""
  },
  {
    id: 100,
    name: "Mohalla Clinic East Rental AAMC Dallupura: Near Samuday Bhawan, Harijan Basti Dallupura Village",
    address: "Kondli",
    pincode: "110096",
    phone: ""
  },
  {
    id: 101,
    name: "Mohalla Clinic East Porta Cabin DJB Site, B.D Block Mayur Vihar Phase-II",
    address: "Patparganj",
    pincode: "110092",
    phone: ""
  },
  {
    id: 102,
    name: "Mohalla Clinic East Rental AAMC West Vinod Nagar: D-55 Gali no. 11",
    address: "Patparganj",
    pincode: "110092",
    phone: ""
  },
  {
    id: 103,
    name: "Mohalla Clinic East Porta Cabin PWD site, Road footpath site at Chander Vihar",
    address: "Mandawali",
    pincode: "110092",
    phone: ""
  },
];

export default wholeList;
