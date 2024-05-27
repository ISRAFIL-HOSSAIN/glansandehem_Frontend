const stockholmPostCodes = new Set([
  13820,
  12500,
  12501,
  12502,
  12503,
  12505,
  12521,
  12522,
  12523,
  12524,
  12525,
  12530,
  12531,
  12532,
  12533,
  12534,
  12535,
  12540,
  12541,
  12542,
  12543,
  12544,
  12546,
  12547,
  12548,
  12551,
  12552,
  12553,
  12554,
  12555,
  12556,
  12557,
  12558,
  12559,
  12560,
  12570,
  12571,
  12572,
  12573,
  12574,
  12586,
  12520,
  12545,
  12002,
  12003,
  12004,
  12005,
  12010,
  12038,
  12039,
  12040,
  12044,
  12050,
  12051,
  12052,
  12053,
  12054,
  12055,
  12056,
  12057,
  12058,
  12059,
  12060,
  12804,
  12805,
  12841,
  12842,
  12843,
  12844,
  12845,
  12846,
  12847,
  12848,
  12400,
  12403,
  12404,
  12421,
  12422,
  12425,
  12430,
  12431,
  12432,
  12433,
  12436,
  12450,
  12451,
  12452,
  12453,
  12454,
  12455,
  12456,
  12457,
  12458,
  12459,
  ,
  12460,
  12461,
  12462,
  12463,
  12464,
  12465,
  12466,
  12467,
  12470,
  12471,
  12472,
  12473,
  12474,
  12475,
  12476,
  12420,
  13237,
  13244,
  13247,
  13248,
  19700,
  19720,
  19721,
  19722,
  19725,
  19730,
  19731,
  19732,
  19733,
  19734,
  19735,
  19736,
  19740,
  19791,
  19792,
  19793,
  16100,
  16102,
  16103,
  16104,
  16105,
  16107,
  16111,
  16124,
  16125,
  16126,
  16184,
  16120,
  16700,
  16714,
  16715,
  16717,
  16719,
  16721,
  16722,
  16724,
  16731,
  16732,
  16733,
  16735,
  16736,
  16737,
  16738,
  16739,
  16740,
  16741,
  16743,
  16745,
  16751,
  16752,
  16753,
  16754,
  16755,
  16756,
  16757,
  16744,
  16761,
  16762,
  16763,
  16764,
  16765,
  16766,
  16767,
  16771,
  16772,
  16773,
  16774,
  16775,
  16776,
  16780,
  16781,
  16720,
  16758,
  16800,
  16810,
  16827,
  16830,
  16831,
  16832,
  16833,
  16834,
  16835,
  16836,
  16837,
  16838,
  16839,
  16840,
  16841,
  16842,
  16843,
  16844,
  16845,
  16846,
  16847,
  16848,
  16849,
  16850,
  16851,
  16852,
  16853,
  16854,
  16855,
  16856,
  16857,
  16858,
  16859,
  16860,
  16861,
  16862,
  16863,
  16864,
  16865,
  16866,
  16867,
  16868,
  16869,
  16870,
  16871,
  16872,
  16873,
  16874,
  16875,
  16876,
  16877,
  16878,
  16880,
  16820,
  18220,
  17817,
  17820,
  12200,
  12203,
  12206,
  12231,
  12232,
  12233,
  12234,
  12237,
  12238,
  12239,
  12240,
  12241,
  12242,
  12243,
  12244,
  12245,
  12246,
  12247,
  12248,
  12249,
  12260,
  12262,
  12263,
  12264,
  12265,
  12266,
  12286,
  12288,
  12220,
  12047,
  12048,
  12114,
  12115,
  12130,
  12131,
  12132,
  12133,
  12134,
  12187,
  12300,
  12301,
  12303,
  12305,
  12321,
  12322,
  12323,
  12324,
  12326,
  12327,
  12328,
  12331,
  12332,
  12333,
  12334,
  12340,
  12341,
  12342,
  12343,
  12344,
  12346,
  12347,
  12348,
  12349,
  12350,
  12352,
  12353,
  12354,
  12355,
  12356,
  12357,
  12358,
  12359,
  12360,
  12363,
  12371,
  12372,
  12373,
  12386,
  12320,
  12387,
  12361,
  13420,
  13439,
  12600,
  12601,
  12609,
  12626,
  12628,
  12629,
  12630,
  12631,
  12632,
  12633,
  12634,
  12635,
  12636,
  12637,
  12638,
  12639,
  12640,
  12641,
  12642,
  12647,
  12648,
  12649,
  12650,
  12651,
  12652,
  12653,
  12654,
  12655,
  12677,
  12678,
  12679,
  12689,
  12900,
  12904,
  12906,
  12907,
  12918,
  12921,
  12922,
  12923,
  12930,
  12931,
  12932,
  12933,
  12934,
  12935,
  12936,
  12937,
  12938,
  12939,
  12940,
  12941,
  12942,
  12943,
  12944,
  12945,
  12946,
  12947,
  12948,
  12949,
  12950,
  12951,
  12952,
  12953,
  12954,
  12955,
  12956,
  12957,
  12920,
  76320,
  13636,
  13637,
  13638,
  13612,
  13620,
  16500,
  16510,
  16511,
  16512,
  16513,
  16515,
  16516,
  16521,
  16522,
  16523,
  16524,
  16552,
  16553,
  16554,
  16555,
  16556,
  16557,
  16558,
  16559,
  16560,
  16561,
  16562,
  16563,
  16564,
  16565,
  16566,
  16570,
  16571,
  16572,
  16573,
  16574,
  16575,
  16576,
  16577,
  16578,
  16520,
  14120,
  17520,
  17572,
  17700,
  17720,
  17746,
  15320,
  15326,
  12100,
  12105,
  12106,
  12111,
  12112,
  12113,
  12116,
  12117,
  12118,
  12121,
  12122,
  12123,
  12124,
  12135,
  12136,
  12137,
  12138,
  12139,
  12140,
  12143,
  12144,
  12145,
  12146,
  12147,
  12148,
  12149,
  12150,
  12151,
  12152,
  12153,
  12154,
  12155,
  12156,
  12162,
  12163,
  12177,
  12186,
  12189,
  12119,
  12120,
  16400,
  16406,
  16407,
  16419,
  16421,
  16422,
  16425,
  16426,
  16428,
  16430,
  16431,
  16432,
  16433,
  16434,
  16435,
  16436,
  16437,
  16438,
  16439,
  16440,
  16441,
  16442,
  16443,
  16444,
  16445,
  16446,
  16447,
  16448,
  16451,
  16452,
  16453,
  16455,
  16471,
  16472,
  16473,
  16474,
  16475,
  16476,
  16477,
  16478,
  16479,
  16481,
  16487,
  16488,
  16491,
  16493,
  16494,
  16496,
  16497,
  16499,
  16420,
  16423,
  16424,
  16429,
  16495,
  19600,
  19601,
  19602,
  19620,
  19621,
  19622,
  19623,
  19624,
  19628,
  19630,
  19631,
  19632,
  19633,
  19634,
  19635,
  19636,
  19637,
  19638,
  19639,
  19640,
  19641,
  19680,
  19681,
  19685,
  19691,
  19692,
  19693,
  18105,
  18120,
  18186,
  18187,
  19500,
  19502,
  19503,
  19506,
  19510,
  19518,
  19519,
  19520,
  19521,
  19522,
  19523,
  19524,
  19525,
  19530,
  19531,
  19532,
  19533,
  19534,
  19535,
  19536,
  19540,
  19541,
  19542,
  19543,
  19544,
  19545,
  19546,
  19547,
  19550,
  19551,
  19552,
  19553,
  19554,
  19555,
  19556,
  19557,
  19558,
  19559,
  19580,
  19581,
  19582,
  19583,
  19585,
  19591,
  19592,
  19593,
  19594,
  13120,
  13156,
  13159,
  13162,
  13172,
  13173,
  13192,
  13193,
  76120,
  14520,
  15520,
  15535,
  15581,
  14920,
  14820,
  76220,
  14420,
  14452,
  19000,
  19002,
  19010,
  19011,
  19012,
  19017,
  19020,
  19070,
  19080,
  19081,
  19082,
  19083,
  19084,
  19085,
  19504,
  19570,
  19571,
  19572,
  19595,
  19596,
  13203,
  13205,
  13285,
  13220,
  13320,
  13339,
  19300,
  19320,
  19321,
  19322,
  19323,
  19324,
  19328,
  19330,
  19331,
  19332,
  19333,
  19334,
  19335,
  19336,
  19337,
  19340,
  19341,
  19391,
  12700,
  12702,
  12703,
  12721,
  12722,
  12723,
  12724,
  12725,
  12726,
  12730,
  12731,
  12732,
  12733,
  12734,
  12735,
  12736,
  12737,
  12738,
  12739,
  12740,
  12741,
  12742,
  12743,
  12744,
  12745,
  12746,
  12747,
  12748,
  12749,
  12751,
  12761,
  12781,
  12785,
  12786,
  12787,
  12720,
  12760,
  12800,
  12821,
  12822,
  12823,
  12824,
  12830,
  12831,
  12832,
  12833,
  12834,
  12835,
  12836,
  12838,
  12839,
  12820,
  14220,
  12806,
  12807,
  12862,
  12863,
  12864,
  12865,
  12866,
  12867,
  12868,
  12869,
  12885,
  15103,
  15105,
  15107,
  15113,
  15120,
  15156,
  15157,
  15167,
  15184,
  15220,
  15228,
  15259,
  19100,
  19102,
  19118,
  19120,
  19121,
  19122,
  19123,
  19124,
  19126,
  19127,
  19128,
  19129,
  19131,
  19133,
  19134,
  19135,
  19136,
  19137,
  19138,
  19139,
  19140,
  19141,
  19142,
  19143,
  19144,
  19145,
  19146,
  19147,
  19148,
  19149,
  19150,
  19160,
  19161,
  19162,
  19163,
  19164,
  19181,
  19183,
  19184,
  19185,
  19186,
  19189,
  19190,
  19197,
  19200,
  19205,
  19206,
  19207,
  19208,
  19210,
  19220,
  19221,
  19230,
  19232,
  19248,
  19251,
  19252,
  19253,
  19254,
  19255,
  19256,
  19257,
  19258,
  19259,
  19265,
  19266,
  19267,
  19268,
  19269,
  19270,
  19271,
  19272,
  19273,
  19274,
  19275,
  19276,
  19277,
  19278,
  19279,
  19280,
  19281,
  19276,
  19277,
  19278,
  19279,
  19280,
  19281,
  16920,
  16940,
  16974,
  16989,
  17020,
  17084,
  17108,
  17112,
  17120,
  17179,
  17183,
  17188,
  17193,
  17199,
  17330,
  17331,
  16300,
  16303,
  16304,
  16305,
  16308,
  16310,
  16319,
  16321,
  16329,
  16340,
  16341,
  16342,
  16343,
  16344,
  16345,
  16346,
  16347,
  16350,
  16351,
  16352,
  16353,
  16354,
  16355,
  16356,
  16357,
  16361,
  16362,
  16363,
  16364,
  16365,
  16366,
  16367,
  16368,
  16370,
  16371,
  16372,
  16373,
  16374,
  16375,
  16376,
  16377,
  16380,
  16385,
  16389,
  16391,
  16320,
  16388,
  10004,
  10005,
  10012,
  10019,
  10026,
  10028,
  10029,
  10031,
  10040,
  10041,
  10044,
  10052,
  10054,
  10055,
  10061,
  10064,
  10073,
  10074,
  10110,
  10120,
  10121,
  10122,
  10123,
  10124,
  10125,
  10126,
  10127,
  10128,
  10129,
  10130,
  10131,
  10132,
  10133,
  10134,
  10135,
  10136,
  10137,
  10138,
  10139,
  10152,
  10155,
  10156,
  10158,
  10101,
  10153,
  10154,
  10159,
  10204,
  10214,
  10217,
  10220,
  10221,
  10222,
  10223,
  10224,
  10225,
  10226,
  10227,
  10228,
  10229,
  10230,
  10231,
  10232,
  10233,
  10234,
  10235,
  10239,
  10240,
  10241,
  10242,
  10243,
  10244,
  10245,
  10246,
  10247,
  10248,
  10249,
  10250,
  10251,
  10252,
  10253,
  10254,
  10260,
  10261,
  10262,
  10263,
  10264,
  10265,
  10266,
  10267,
  10268,
  10269,
  10270,
  10271,
  10272,
  10273,
  10274,
  10215,
  10216,
  10218,
  10301,
  10302,
  10303,
  10304,
  10305,
  10306,
  10307,
  10310,
  10311,
  10312,
  10313,
  10314,
  10315,
  10316,
  10317,
  10318,
  10320,
  10321,
  10322,
  10323,
  10324,
  10325,
  10326,
  10327,
  10329,
  10332,
  10333,
  10334,
  10335,
  10336,
  10337,
  10338,
  10339,
  10350,
  10351,
  10352,
  10354,
  10355,
  10359,
  10360,
  10361,
  10362,
  10363,
  10364,
  10365,
  10366,
  10367,
  10368,
  10369,
  10370,
  10371,
  10372,
  10373,
  10374,
  10375,
  10377,
  10378,
  10380,
  10382,
  10383,
  10384,
  10385,
  10386,
  10387,
  10388,
  10389,
  10390,
  10391,
  10392,
  10393,
  10394,
  10395,
  10396,
  10397,
  10398,
  10399,
  10376,
  10379,
  10405,
  10420,
  10422,
  10425,
  10430,
  10431,
  10432,
  10435,
  10440,
  10441,
  10450,
  10451,
  10455,
  10460,
  10462,
  10465,
  10406,
  10500,
  10506,
  10507,
  10509,
  10510,
  10511,
  10512,
  10515,
  10516,
  10517,
  10518,
  10519,
  10520,
  10521,
  10522,
  10523,
  10524,
  10525,
  10526,
  10530,
  10531,
  10532,
  10533,
  10534,
  10535,
  10536,
  10539,
  10540,
  10544,
  10545,
  10546,
  10552,
  10553,
  10560,
  10561,
  10570,
  10571,
  10578,
  10580,
  10582,
  10583,
  10588,
  10599,
  10547,
  10549,
  10550,
  10569,
  10573,
  10574,
  10600,
  10610,
  10611,
  10612,
  10614,
  10618,
  10620,
  10626,
  10627,
  10630,
  10631,
  10632,
  10635,
  10636,
  10638,
  10640,
  10642,
  10644,
  10645,
  10647,
  10648,
  10650,
  10654,
  10655,
  10656,
  10657,
  10658,
  10660,
  10661,
  10664,
  10665,
  10666,
  10667,
  10670,
  10675,
  10677,
  10678,
  10680,
  10682,
  10685,
  10688,
  10691,
  10629,
  10637,
  10643,
  10653,
  10663,
  10700,
  10707,
  10721,
  10722,
  10723,
  10724,
  10725,
  10726,
  10767,
  10768,
  10769,
  10770,
  10772,
  10775,
  10776,
  10777,
  10780,
  10781,
  10782,
  10785,
  10786,
  10788,
  10791,
  10795,
  10796,
  10710,
  10760,
  10790,
  10900,
  10901,
  10902,
  10903,
  10904,
  10905,
  10906,
  10907,
  10908,
  10909,
  10910,
  10911,
  10912,
  10913,
  10914,
  10915,
  10916,
  10917,
  10918,
  10919,
  10920,
  10921,
  10922,
  10923,
  10924,
  10925,
  10926,
  10927,
  10928,
  10929,
  10930,
  10931,
  10932,
  10933,
  10934,
  10935,
  10936,
  10937,
  10938,
  10939,
  10940,
  10941,
  10942,
  10943,
  10944,
  10945,
  10946,
  10947,
  10948,
  10949,
  10950,
  10951,
  10952,
  10953,
  10954,
  10955,
  10956,
  10957,
  10958,
  10959,
  10960,
  10961,
  10962,
  10963,
  10964,
  10965,
  10966,
  10967,
  10968,
  10969,
  10970,
  10971,
  10972,
  10973,
  10974,
  10975,
  10976,
  10977,
  10978,
  10979,
  10980,
  10981,
  10982,
  10983,
  10984,
  10985,
  10986,
  10987,
  10988,
  10989,
  10990,
  10991,
  10992,
  10993,
  10994,
  10995,
  10996,
  10997,
  10998,
  10999,
  11000,
  11001,
  11002,
  11003,
  11004,
  11005,
  11006,
  11007,
  11008,
  11009,
  11010,
  11011,
  11012,
  11013,
  11015,
  11016,
  11017,
  11019,
  11020,
  11022,
  11023,
  11025,
  11026,
  11027,
  11029,
  11030,
  11034,
  11037,
  11039,
  11043,
  11045,
  11046,
  11049,
  11050,
  11051,
  11052,
  11053,
  11054,
  11055,
  11056,
  11057,
  11058,
  11059,
  11060,
  11069,
  11070,
  11075,
  11076,
  11077,
  11078,
  11079,
  11080,
  11081,
  11082,
  11083,
  11084,
  11085,
  11086,
  11087,
  11088,
  11089,
  11090,
  11091,
  11092,
  11093,
  11094,
  11095,
  11096,
  11097,
  11098,
  11099,
  11101,
  11102,
  11115,
  11120,
  11121,
  11122,
  11123,
  11124,
  11127,
  11128,
  11129,
  11130,
  11131,
  11134,
  11135,
  11136,
  11137,
  11138,
  11139,
  11140,
  11143,
  11144,
  11145,
  11146,
  11147,
  11148,
  11149,
  11151,
  11152,
  11153,
  11156,
  11157,
  11160,
  11161,
  11164,
  11171,
  11173,
  11174,
  11175,
  11176,
  ,
  11177,
  11181,
  11182,
  11183,
  11184,
  11185,
  11186,
  11187,
  11188,
  11189,
  11191,
  11192,
  11193,
  11194,
  11195,
  11196,
  11197,
  11198,
  11199,
  11201,
  11202,
  11203,
  11204,
  11206,
  11214,
  11215,
  11216,
  11217,
  11218,
  11219,
  11220,
  11221,
  11222,
  11223,
  11224,
  11225,
  11226,
  11227,
  11228,
  11229,
  11230,
  11231,
  11232,
  11233,
  11234,
  11235,
  11236,
  11237,
  11238,
  11239,
  11240,
  11241,
  11242,
  11243,
  11244,
  11245,
  11246,
  11247,
  11248,
  11249,
  11250,
  11251,
  11252,
  11253,
  11254,
  11255,
  11256,
  11257,
  11258,
  11259,
  11260,
  11261,
  11262,
  11263,
  11264,
  11265,
  11266,
  11267,
  11269,
  11273,
  11274,
  11275,
  11276,
  11277,
  11278,
  11281,
  11282,
  11283,
  11284,
  11285,
  11286,
  11287,
  11288,
  11289,
  11292,
  11293,
  11294,
  11296,
  11297,
  11298,
  11272,
  11279,
  11280,
  11301,
  11302,
  11303,
  11304,
  11320,
  11321,
  11322,
  11323,
  11324,
  11325,
  11326,
  11327,
  11328,
  11329,
  11330,
  11331,
  11332,
  11333,
  11334,
  11335,
  11336,
  11337,
  11338,
  11339,
  11340,
  11341,
  11342,
  11343,
  11344,
  11345,
  11346,
  11347,
  11348,
  11349,
  11350,
  11351,
  11352,
  11353,
  11354,
  11355,
  11356,
  11357,
  11358,
  11359,
  11360,
  11361,
  11362,
  11363,
  11364,
  11365,
  11366,
  11367,
  11368,
  11369,
  11376,
  11380,
  11381,
  11382,
  11383,
  11384,
  11385,
  11386,
  11387,
  11388,
  11389,
  11390,
  11391,
  11392,
  11393,
  11394,
  11395,
  11396,
  11397,
  11398,
  11399,
  11378,
  11379,
  11401,
  11415,
  11416,
  11417,
  11418,
  11419,
  11420,
  11421,
  11422,
  11423,
  11424,
  11425,
  11426,
  11427,
  11428,
  11429,
  11430,
  11431,
  11432,
  11433,
  11434,
  11435,
  11436,
  11437,
  11438,
  11439,
  11440,
  11441,
  11442,
  11443,
  11444,
  11445,
  11446,
  11447,
  11448,
  11449,
  11450,
  11451,
  11452,
  11453,
  11454,
  11455,
  11456,
  11457,
  11458,
  11459,
  11460,
  11475,
  11476,
  11478,
  11479,
  11480,
  11481,
  11482,
  11483,
  11484,
  ,
  11485,
  11486,
  11487,
  11488,
  11489,
  11492,
  11494,
  11495,
  11497,
  11498,
  11499,
  11402,
  11411,
  11473,
  11490,
  11501,
  11502,
  11520,
  11521,
  11522,
  11523,
  11524,
  11525,
  11526,
  11527,
  11528,
  11529,
  11530,
  11531,
  11532,
  11533,
  11534,
  11535,
  11536,
  11537,
  11538,
  11539,
  11540,
  11541,
  11542,
  11543,
  11544,
  11545,
  11546,
  11547,
  11548,
  11549,
  11550,
  11553,
  11556,
  11557,
  11558,
  11559,
  11560,
  11571,
  11573,
  11574,
  11577,
  11578,
  11579,
  11580,
  11582,
  11583,
  11584,
  11587,
  11588,
  11589,
  11590,
  11591,
  11592,
  11593,
  11594,
  11595,
  11599,
  11551,
  11576,
  11596,
  11597,
  11601,
  11618,
  11620,
  11621,
  11622,
  11623,
  11624,
  11625,
  11628,
  11629,
  11630,
  11631,
  11632,
  11633,
  11634,
  11635,
  11636,
  11637,
  11638,
  11639,
  11640,
  11641,
  11642,
  11643,
  11644,
  11645,
  11646,
  11647,
  11648,
  11661,
  11662,
  11663,
  11664,
  11665,
  11666,
  11667,
  11668,
  11674,
  11685,
  11688,
  11691,
  11692,
  11693,
  11694,
  11681,
  11705,
  11718,
  11726,
  11727,
  11728,
  11729,
  11730,
  11731,
  11732,
  11733,
  11734,
  11735,
  11736,
  11737,
  11738,
  11739,
  11740,
  11741,
  11743,
  11750,
  11760,
  11761,
  11762,
  11763,
  11764,
  11765,
  11766,
  11767,
  11768,
  11769,
  11770,
  11771,
  11775,
  11783,
  11784,
  11785,
  11786,
  11788,
  11790,
  11791,
  11792,
  11793,
  11794,
  11795,
  11797,
  11798,
  11799,
  11701,
  11754,
  11755,
  11756,
  11757,
  11758,
  11759,
  11780,
  11796,
  11801,
  11805,
  11818,
  11820,
  11821,
  11822,
  11823,
  11824,
  11825,
  11826,
  11827,
  11828,
  11829,
  11830,
  11842,
  11846,
  11847,
  11848,
  11849,
  11850,
  11851,
  11852,
  11853,
  11854,
  11855,
  11856,
  11857,
  11858,
  11859,
  11860,
  11861,
  11862,
  11863,
  11864,
  11865,
  11866,
  11867,
  11869,
  11872,
  11880,
  11882,
  11883,
  11885,
  11886,
  11887,
  11888,
  11889,
  11890,
  11891,
  11892,
  11893,
  11894,
  11895,
  11881,
  12000,
  12001,
  12006,
  12007,
  12008,
  12009,
  12011,
  12012,
  12013,
  12014,
  12015,
  12016,
  12017,
  12018,
  12019,
  12021,
  12022,
  12023,
  12024,
  12025,
  12026,
  12030,
  12031,
  12032,
  12033,
  12064,
  12065,
  12066,
  12067,
  12068,
  12071,
  12078,
  12079,
  12080,
  12082,
  12083,
  12086,
  12087,
  12088,
  12090,
  12020,
  12061,
  12062,
  12063,
  12069,
  12070,
  12081,
  12129,
  12580,
  12581,
  12582,
  12608,
  12611,
  12612,
  12613,
  12614,
  12615,
  12616,
  12617,
  12618,
  12625,
  12627,
  12675,
  12680,
  12686,
  12688,
  12619,
  12620,
  12681,
  12729,
  13129,
  13155,
  13188,
  13191,
  13110,
  13185,
  13189,
  13570,
  14182,
  14186,
  14199,
  14584,
  16186,
  16189,
  16216,
  16287,
  16289,
  16394,
  16480,
  ,
  16482,
  16483,
  16484,
  16485,
  16486,
  16489,
  16492,
  16498,
  16490,
  16982,
  16984,
  16985,
  16986,
  16992,
  16999,
  16987,
  17087,
  17116,
  17175,
  17176,
  17177,
  17281,
  17290,
  17298,
  17350,
  17380,
  17381,
  17382,
  17383,
  17311,
  17332,
  17333,
  17334,
  17335,
  17336,
  17337,
  17338,
  17339,
  17340,
  17341,
  17342,
  17343,
  17344,
  17345,
  17351,
  17365,
  17386,
  18282,
  18288,
  19587,
  19040,
  19045,
  19046,
  19047,
  19050,
  19060,
  19090,
  12126,
  12127,
  12128,
  12188,
  17205,
  17214,
  17215,
  17220,
  17420,
  17441,
  17461,
  17462,
  17463,
  17465,
  17466,
  17486,
  17487,
  17488,
  18420,
  18310,
  18320,
  18368,
  18715,
  18720,
  18726,
  18727,
  18728,
  18729,
  18730,
  18731,
  18732,
  18733,
  18734,
  18735,
  18736,
  18737,
  18738,
  18740,
  18741,
  18742,
  18743,
  18744,
  18745,
  18746,
  18750,
  18751,
  18752,
  18753,
  18754,
  18762,
  18763,
  18764,
  18765,
  18766,
  18767,
  18768,
  18769,
  18770,
  18772,
  18773,
  18774,
  18775,
  18776,
  18777,
  18780,
  17307,
  17308,
  17320,
  17323,
  17324,
  17325,
  17326,
  17327,
  17328,
  17329,
  17360,
  14620,
  14720,
  14745,
  13520,
  19400,
  19402,
  19404,
  19405,
  19410,
  19417,
  19418,
  19419,
  19420,
  19421,
  19422,
  19423,
  19426,
  19427,
  19428,
  19429,
  19430,
  19431,
  19432,
  19433,
  19434,
  19435,
  19436,
  19437,
  19438,
  19439,
  19440,
  19441,
  19442,
  19443,
  19444,
  19445,
  19446,
  19447,
  19449,
  19451,
  19452,
  19453,
  19454,
  19455,
  19456,
  19457,
  19460,
  19461,
  19462,
  19463,
  19464,
  19465,
  19466,
  19467,
  19468,
  19469,
  19470,
  19471,
  19472,
  19473,
  19474,
  19475,
  19476,
  19477,
  19478,
  19479,
  19480,
  19481,
  19482,
  19483,
  19484,
  19486,
  19487,
  19488,
  19489,
  19491,
  19492,
  19498,
  18620,
  18647,
  18656,
  16200,
  16206,
  16211,
  16212,
  16215,
  16220,
  16243,
  16244,
  16245,
  16246,
  16247,
  16250,
  16251,
  16252,
  16253,
  16254,
  16255,
  16256,
  16257,
  16258,
  16260,
  16261,
  16262,
  16263,
  16264,
  16265,
  16266,
  16267,
  16268,
  16270,
  16271,
  16272,
  16273,
  16274,
  16283,
  16288,
  16201,
  16213,
  14346,
  14320,
  13900,
  13920,
  13931,
  13720,
  13742,
  18520,
]);

const validatePostCode = (code) => {
  if (!code || isNaN(code) || code.toString().length !== 5) {
    return false;
  }

  return stockholmPostCodes.has(parseInt(code));
};

export default validatePostCode;
