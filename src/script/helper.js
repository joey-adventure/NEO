export {
    debounce,
    customerData,
    colorMap
}

const customerData = {
    'sysver': {'title': 'Android\u64cd\u4f5c\u7cfb\u7edf', 'datas': [{'key': '2.3', 'value': 0.00021344717182497}, {'key': '4.1', 'value': 0.0012133772491585}, {'key': '4.2', 'value': 0.0011339986523158}, {'key': '4.3', 'value': 0.001777390744211}, {'key': '4.4', 'value': 0.024215939767972}, {'key': '5.0', 'value': 0.012146198189654}, {'key': '5.1', 'value': 0.14649225082758}, {'key': '6.0', 'value': 0.19861406819651}, {'key': '7.0', 'value': 0.13360977047951}, {'key': '7.1', 'value': 0.14822187815135}, {'key': '8.0', 'value': 0.18752659353473}, {'key': '8.1', 'value': 0.14390401653728}, {'key': 'API', 'value': 0.00093107049790666}]},
    'segment': {
        'title': '\u4eba\u7fa4\u504f\u597d',
        'datas': [{'key': '\u51fa\u884c\u8fbe\u4eba', 'value': 0.069385456464822}, {'key': '\u8d2d\u7269\u8fbe\u4eba', 'value': 0.33137836491909}, {'key': '\u7b56\u7565\u5854\u9632\u6e38\u620f\u7231\u597d\u8005', 'value': 0.0029566653426732}, {'key': '\u624b\u673a\u536b\u58eb\u8fbe\u4eba', 'value': 0.066982667982145}, {'key': '\u7172\u5267\u4e00\u65cf', 'value': 0.076911959936709}, {'key': '\u65c5\u6e38\u8fbe\u4eba', 'value': 0.058483185227403}, {'key': '\u7eb8\u724c\u6e38\u620f\u7231\u597d\u8005', 'value': 0.0037953955361622}, {'key': '\u5bf9\u6218\u6e38\u620f\u7231\u597d\u8005', 'value': 0.04730343691943}, {'key': '\u65e9\u6559\u4e00\u65cf', 'value': 0.0039060988653966}, {'key': '\u4e70\u8f66\u4e00\u65cf', 'value': 0.002484137450917}, {'key': '\u5bb6\u653f\u9700\u6c42\u8005', 'value': 0.00079019958767103}, {
            'key': '\u6362\u88c5\u6e38\u620f\u7231\u597d\u8005',
            'value': 0.00041876816924101
        }, {'key': '\u4f11\u95f2\u6e38\u620f\u7231\u597d\u8005', 'value': 0.001189263785675}, {'key': '\u4fdd\u9669\u8fbe\u4eba', 'value': 0.002772720507885}, {'key': '\u7535\u5b50\u4ea7\u54c1\u7231\u597d\u8005', 'value': 0.002369272513235}, {'key': '\u5907\u5b55\u4e00\u65cf', 'value': 0.00095240127616402}, {'key': '\u76f4\u64ad\u7231\u597d\u8005', 'value': 0.0047936309987633}, {'key': '\u8131\u53e3\u79c0\u7231\u597d\u8005', 'value': 0.025293753585053}, {'key': '\u529e\u516c\u8fbe\u4eba', 'value': 0.050265636815909}, {'key': '\u7406\u8d22\u8fbe\u4eba', 'value': 0.10610335677549}, {'key': '\u501f\u8d37\u4e00\u65cf', 'value': 0.0088985972021434}, {'key': '\u7535\u5b50\u4e66\u7231\u597d\u8005', 'value': 0.00038068647654502}, {'key': '\u8bed\u8a00\u5b66\u4e60\u8005', 'value': 0.02346028574857}, {
            'key': '\u517b\u989c\u8fbe\u4eba',
            'value': 0.0032419227909724
        }, {'key': '\u97f3\u4e50\u7231\u597d\u8005', 'value': 0.019584210148516}, {'key': '\u542c\u65b0\u95fb\u4e00\u65cf', 'value': 0.0021429945838758}, {'key': '\u7f8e\u62cd\u8fbe\u4eba', 'value': 0.005474148891847}, {'key': '\u7a7a\u6218\u6e38\u620f\u7231\u597d\u8005', 'value': 0.020620123574983}, {'key': '\u6c42\u804c\u62db\u8058\u4e00\u65cf', 'value': 0.024949426824386}, {'key': '\u65f6\u5c1a\u8fbe\u4eba', 'value': 0.032711231098321}]
    },
    'screensize': {
        'title': 'Android\u5206\u8fa8\u7387',
        'datas': [{'key': '1080x1920', 'value': 0.56316532400111}, {'key': '1080x1980', 'value': 0.00011730205278592}, {'key': '1080x2008', 'value': 0.00042381546274761}, {'key': '1080x2009', 'value': 0.00088084956469015}, {'key': '1080x2040', 'value': 0.0011514083224569}, {'key': '1080x2160', 'value': 0.11752397553571}, {'key': '1080x2200', 'value': 0.00027055875776677}, {'key': '1080x2220', 'value': 0.0070421525653443}, {'key': '1080x2240', 'value': 0.034112758971039}, {'key': '1080x2244', 'value': 0.020373798576463}, {'key': '1080x2248', 'value': 0.0028642858372423}, {'key': '1080x2280', 'value': 0.032481194649637}, {'key': '1080x2316', 'value': 0.0011028251473761}, {'key': '1080x2340', 'value': 0.0015506488691526}, {'key': '1200x1920', 'value': 0.001012267366619}, {'key': '1440x2560', 'value': 0.047794099153704}, {
            'key': '1440x2880',
            'value': 0.00021321961620469
        }, {'key': '1440x2960', 'value': 0.00063167529629054}, {'key': '1600x2560', 'value': 0.0014547313057338}, {'key': '480x800', 'value': 0.00033052166899061}, {'key': '480x854', 'value': 0.0033026832046821}, {'key': '540x960', 'value': 0.0079034121439183}, {'key': '600x1024', 'value': 0.00070575395665736}, {'key': '720x1280', 'value': 0.13236352695775}, {'key': '720x1440', 'value': 0.011234917673783}, {'key': '720x1480', 'value': 0.00029239766081871}, {'key': '720x1493', 'value': 0.0016784100888475}, {'key': '720x1494', 'value': 0.00044565436579956}, {'key': '720x1496', 'value': 0.0027212723249997}, {'key': '720x1500', 'value': 0.00011730205278592}, {'key': '720x1520', 'value': 0.0021823241654431}, {'key': '720x1560', 'value': 0.00033927763547183}, {'key': '768x1280', 'value': 0.00090223405405731}, {'key': '810x1440', 'value': 0.00093818870625223}, {
            'key': '810x1665',
            'value': 0.0002219755826859
        }, {'key': '946x1682', 'value': 0.00015325670498084}]
    },
    'occupation': {'title': '\u804c\u4e1a', 'datas': [{'key': '\u4f01\u4e1a\u767d\u9886', 'value': 0.53318097060289}, {'key': '\u653f\u5e9c\u4ee5\u53ca\u4e8b\u4e1a\u5355\u4f4d\u4eba\u5458', 'value': 0.0067646873091425}, {'key': '\u533b\u751f', 'value': 0.018609849061762}, {'key': '\u6559\u5e08', 'value': 0.025758980855322}, {'key': '\u670d\u52a1\u4e1a\u4eba\u5458', 'value': 0.17790440439894}, {'key': '\u5de5\u4eba', 'value': 0.075888404285019}, {'key': '\u4e2a\u4f53\u6237\/\u81ea\u7531\u804c\u4e1a', 'value': 0.06992911198841}, {'key': '\u5728\u8bfb\u5b66\u751f', 'value': 0.068497360911046}, {'key': '\u5176\u4ed6', 'value': 0.023466230587471}]},
    'network': {'title': '\u7f51\u7edc', 'datas': [{'key': '2g', 'value': 0.016975612390347}, {'key': '3g', 'value': 0.0016576868090772}, {'key': '4g', 'value': 0.21267612469549}, {'key': 'cell', 'value': 0.0033291821883246}, {'key': 'wifi', 'value': 0.76536139391676}]},
    'model_level': {'title': '\u624b\u673a\u4ef7\u4f4d', 'datas': [{'key': '\u9ad8', 'value': 0.65482648903423}, {'key': '\u4e2d', 'value': 0.2778662779504}, {'key': '\u4f4e', 'value': 0.067307233015375}]},
    'model': {
        'title': 'Android\u578b\u53f7',
        'datas': [{'key': '15', 'value': 0.00011689070718878}, {'key': '1503-A01', 'value': 0.0001531393568147}, {'key': '1509-A00', 'value': 0.00011689070718878}, {'key': '1707-A01', 'value': 0.00027003006400348}, {'key': '1801-A01', 'value': 0.0039880046833775}, {'key': '2013022', 'value': 0.0007049981919503}, {'key': '2014011', 'value': 0.00084425649595431}, {'key': '2014811', 'value': 0.00011689070718878}, {'key': '2014813', 'value': 0.001723182913836}, {'key': '8692-M02', 'value': 0.00027003006400348}, {'key': 'A0001', 'value': 0.00036613190207562}, {'key': 'A31', 'value': 0.00038692077119226}, {'key': 'A51', 'value': 0.00049200564668938}, {'key': 'A680Q', 'value': 0.001043864481825}, {'key': 'ALLVIEW8735BA1_6951B', 'value': 0.00099739585276901}, {'key': 'ALP-AL00', 'value': 0.026593773951115}, {'key': 'ALP-TL00', 'value': 0.0019960286475431}, {
            'key': 'ANE-AL00',
            'value': 0.0016571623576684
        }, {'key': 'ASUS_X002', 'value': 0.00011689070718878}, {'key': 'ATH-AL00', 'value': 0.00069601515452531}, {'key': 'ATH-TL00H', 'value': 0.00011689070718878}, {'key': 'ATU-AL10', 'value': 0.00021299254526092}, {'key': 'AUM-AL00', 'value': 0.00021299254526092}, {'key': 'AUM-AL20', 'value': 0.00021299254526092}, {'key': 'BAC-AL00', 'value': 0.0013036745663984}, {'key': 'BAC-L22', 'value': 0.0002219755826859}, {'key': 'BGO-DL09', 'value': 0.00011689070718878}, {'key': 'BKL-AL00', 'value': 0.00050539020607963}, {'key': 'BKL-AL20', 'value': 0.0040856923737112}, {'key': 'BLA-AL00', 'value': 0.027349823706019}, {'key': 'BLA-L29', 'value': 0.0018493984441433}, {'key': 'BLA-TL00', 'value': 0.0004830226092644}, {'key': 'BLN-AL10', 'value': 0.0066312606801067}, {'key': 'BLN-AL20', 'value': 0.00042316942081818}, {'key': 'BLN-AL40', 'value': 0.0032634545643156}, {
            'key': 'BLN-TL10',
            'value': 0.0014698495723468
        }, {'key': 'BND-AL10', 'value': 0.00088050514558023}, {'key': 'BTV-DL09', 'value': 0.0013362621426437}, {'key': 'BYD QIN', 'value': 0.00040928836800749}, {'key': 'C105-6', 'value': 0.00088050514558023}, {'key': 'C105-8', 'value': 0.00036613190207562}, {'key': 'C106', 'value': 0.00071680402364195}, {'key': 'C106-8', 'value': 0.00033886628987468}, {'key': 'C106-9', 'value': 0.00027003006400348}, {'key': 'CAM-TL00', 'value': 0.00011689070718878}, {'key': 'CAM-TL00H', 'value': 0.00062070218556982}, {'key': 'CAM-UL00', 'value': 0.0002219755826859}, {'key': 'CHANGHONGS16', 'value': 0.00021299254526092}, {'key': 'CHE1-CL20', 'value': 0.0010711300940259}, {'key': 'CHE2-TL00M', 'value': 0.00011689070718878}, {'key': 'CHE2-UL00', 'value': 0.00011689070718878}, {'key': 'CHM-TL00', 'value': 0.00021299254526092}, {'key': 'CHM-TL00H', 'value': 0.00027003006400348}, {
            'key': 'CHM-UL00',
            'value': 0.00036613190207562
        }, {'key': 'CLT-AL00', 'value': 0.024812503694589}, {'key': 'CLT-AL01', 'value': 0.011390618772733}, {'key': 'COL-AL10', 'value': 0.0024960968895784}, {'key': 'COOLPAD 8675-FHD', 'value': 0.00072736578876553}, {'key': 'COOLPAD A8-930', 'value': 0.00093877960632786}, {'key': 'COOLPAD Y82-520', 'value': 0.00011689070718878}, {'key': 'COOLPAD Y891', 'value': 0.00037511493950061}, {'key': 'COR-AL10', 'value': 0.00033886628987468}, {'key': 'CPH1701', 'value': 0.00036613190207562}, {'key': 'CPH1707', 'value': 0.00099739585276901}, {'key': 'CUN-AL00', 'value': 0.0019153865899802}, {'key': 'CUN-TL00', 'value': 0.0002219755826859}, {'key': 'DIG-AL00', 'value': 0.0001531393568147}, {'key': 'DLI-AL10', 'value': 0.00038692077119226}, {'key': 'DLI-TL20', 'value': 0.00021299254526092}, {'key': 'DOOV A5', 'value': 0.0004830226092644}, {
            'key': 'DOOV L520S',
            'value': 0.00066874954232438
        }, {'key': 'DOOV L525', 'value': 0.00051437324350462}, {'key': 'DUK-AL20', 'value': 0.0021479310623527}, {'key': 'DUK-TL30', 'value': 0.00071838275134054}, {'key': 'EDI-AL10', 'value': 0.0025214672741547}, {'key': 'EML-AL00', 'value': 0.021896053053896}, {'key': 'EML-L29', 'value': 0.00038692077119226}, {'key': 'EML-TL00', 'value': 0.00042316942081818}, {'key': 'EVA-AL00', 'value': 0.0010919189631426}, {'key': 'EVA-AL10', 'value': 0.011367420021366}, {'key': 'EVA-L09', 'value': 0.00050539020607963}, {'key': 'EVA-L29', 'value': 0.00011689070718878}, {'key': 'EVA-TL00', 'value': 0.0063322315684768}, {'key': 'F100L', 'value': 0.0007049981919503}, {'key': 'F8132', 'value': 0.00011689070718878}, {'key': 'F8332', 'value': 0.0001531393568147}, {'key': 'FIG-AL10', 'value': 0.0011309832824721}, {'key': 'FLA-AL10', 'value': 0.00092855962689781}, {
            'key': 'FLA-AL20',
            'value': 0.00032988325244969
        }, {'key': 'FRD-AL00', 'value': 0.004261346910505}, {'key': 'FRD-AL10', 'value': 0.0094270869954684}, {'key': 'FRD-DL00', 'value': 0.00069601515452531}, {'key': 'G0215D', 'value': 0.0004830226092644}, {'key': 'G0245D', 'value': 0.00011689070718878}, {'key': 'G621-TL00', 'value': 0.0007844033075081}, {'key': 'G8342', 'value': 0.00021299254526092}, {'key': 'GIONEE F6L', 'value': 0.00033886628987468}, {'key': 'GIONEE GN5006', 'value': 0.00032988325244969}, {'key': 'GIONEE GN5007', 'value': 0.0001531393568147}, {'key': 'GIONEE M7', 'value': 0.0021854166539837}, {'key': 'GIONEE M7L', 'value': 0.0016649084530883}, {'key': 'GIONEE M7PLUS', 'value': 0.0004830226092644}, {'key': 'GIONEE S10', 'value': 0.0012910304555928}, {'key': 'GIONEE S10B', 'value': 0.0001531393568147}, {'key': 'GIONEE S10L', 'value': 0.0011142865599578}, {
            'key': 'GN3002L',
            'value': 0.0001531393568147
        }, {'key': 'GN3003', 'value': 0.00027003006400348}, {'key': 'GN3003L', 'value': 0.00033886628987468}, {'key': 'GN5001S', 'value': 0.0015855033375305}, {'key': 'GN5003', 'value': 0.0006361619660791}, {'key': 'GN5005', 'value': 0.00036613190207562}, {'key': 'GN8001', 'value': 0.0013725107922696}, {'key': 'GN8002S', 'value': 0.0011142865599578}, {'key': 'GN8003', 'value': 0.00058810748476152}, {'key': 'GN8003L', 'value': 0.00052825429631531}, {'key': 'GN9006', 'value': 0.0007844033075081}, {'key': 'GN9010', 'value': 0.0007844033075081}, {'key': 'GOME 2018X38A', 'value': 0.0001531393568147}, {'key': 'GT-I9082', 'value': 0.00032988325244969}, {'key': 'GT-I9158V', 'value': 0.00029239766081871}, {'key': 'GT-N7108', 'value': 0.00088050514558023}, {'key': 'H60-L01', 'value': 0.0018192847519081}, {'key': 'H60-L11', 'value': 0.001043864481825}, {
            'key': 'HM 2A',
            'value': 0.0017023940447193
        }, {'key': 'HM NOTE 1S', 'value': 0.00011689070718878}, {'key': 'HTC D728W', 'value': 0.00099739585276901}, {'key': 'HTC ONE_E8', 'value': 0.00049200564668938}, {'key': 'HTC U-3W', 'value': 0.00021299254526092}, {'key': 'HUAWEI C199', 'value': 0.00066751260031932}, {'key': 'HUAWEI CAZ-AL10', 'value': 0.00036613190207562}, {'key': 'HUAWEI CAZ-TL20', 'value': 0.00011689070718878}, {'key': 'HUAWEI CRR-UL00', 'value': 0.00038692077119226}, {'key': 'HUAWEI G7-TL00', 'value': 0.00011689070718878}, {'key': 'HUAWEI G7-UL20', 'value': 0.00021299254526092}, {'key': 'HUAWEI GRA-TL00', 'value': 0.00099739585276901}, {'key': 'HUAWEI GRA-UL00', 'value': 0.00040928836800749}, {'key': 'HUAWEI GRA-UL10', 'value': 0.0016571623576684}, {'key': 'HUAWEI MLA-AL00', 'value': 0.00066751260031932}, {'key': 'HUAWEI MLA-AL10', 'value': 0.0019238802585478}, {
            'key': 'HUAWEI MLA-TL10',
            'value': 0.00032988325244969
        }, {'key': 'HUAWEI MT7-TL00', 'value': 0.0001531393568147}, {'key': 'HUAWEI MT7-TL10', 'value': 0.002003774742963}, {'key': 'HUAWEI NXT-AL10', 'value': 0.01146178129945}, {'key': 'HUAWEI NXT-DL00', 'value': 0.00098559714564038}, {'key': 'HUAWEI NXT-TL00', 'value': 0.0013362621426437}, {'key': 'HUAWEI P7-L05', 'value': 0.00049200564668938}, {'key': 'HUAWEI P7-L07', 'value': 0.00066751260031932}, {'key': 'HUAWEI P8MAX', 'value': 0.0018791379403543}, {'key': 'HUAWEI RIO-AL00', 'value': 0.0033071146482309}, {'key': 'HUAWEI RIO-TL00', 'value': 0.00023378141437756}, {'key': 'HUAWEI SC-UL10', 'value': 0.00021299254526092}, {'key': 'HUAWEI TAG-AL00', 'value': 0.00067931843201097}, {'key': 'HUAWEI TAG-TL00', 'value': 0.0011142865599578}, {'key': 'HUAWEI TIT-AL00', 'value': 0.00027003006400348}, {'key': 'HUAWEI TIT-TL00', 'value': 0.00066874954232438}, {
            'key': 'HUAWEI VNS-AL00',
            'value': 0.00029239766081871
        }, {'key': 'HUAWEI VNS-DL00', 'value': 0.00036613190207562}, {'key': 'HUAWEI VNS-L31', 'value': 0.00021299254526092}, {'key': 'HUAWEI VNS-TL00', 'value': 0.0007844033075081}, {'key': 'HUAWEI Y635-TL00', 'value': 0.0001531393568147}, {'key': 'HWI-AL00', 'value': 0.0038135799640257}, {'key': 'INE-AL00', 'value': 0.00072736578876553}, {'key': 'JMM-AL10', 'value': 0.00049200564668938}, {'key': 'KIW-AL10', 'value': 0.0020644409247556}, {'key': 'KIW-TL00', 'value': 0.0004830226092644}, {'key': 'KIW-TL00H', 'value': 0.0001531393568147}, {'key': 'KIW-UL00', 'value': 0.00027003006400348}, {'key': 'KNT-AL10', 'value': 0.0031314458623111}, {'key': 'KNT-AL20', 'value': 0.0028960857202349}, {'key': 'KNT-UL10', 'value': 0.0007844033075081}, {'key': 'KOOBEE S509', 'value': 0.0001531393568147}, {'key': 'L50T', 'value': 0.00011689070718878}, {
            'key': 'LA-S31',
            'value': 0.00072736578876553
        }, {'key': 'LA-S9', 'value': 0.00051437324350462}, {'key': 'LA-X7', 'value': 0.00011689070718878}, {'key': 'LDN-AL00', 'value': 0.00032988325244969}, {'key': 'LDN-AL20', 'value': 0.00011689070718878}, {'key': 'LE X620', 'value': 0.00038692077119226}, {'key': 'LE X820', 'value': 0.0011818858438239}, {'key': 'LENOVO S860E', 'value': 0.00011689070718878}, {'key': 'LETV X500', 'value': 0.0001531393568147}, {'key': 'LG-H818', 'value': 0.00011689070718878}, {'key': 'LLD-AL00', 'value': 0.0001531393568147}, {'key': 'LLD-AL30', 'value': 0.00021299254526092}, {'key': 'LLD-TL10', 'value': 0.0001531393568147}, {'key': 'LON-AL00', 'value': 0.013112176299413}, {'key': 'LON-AL00-PD', 'value': 0.0006361619660791}, {'key': 'LON-L29', 'value': 0.00033886628987468}, {'key': 'M1 E', 'value': 0.0011142865599578}, {'key': 'M1 METAL', 'value': 0.00011689070718878}, {
            'key': 'M15',
            'value': 0.0012808104761627
        }, {'key': 'M2 E', 'value': 0.00069601515452531}, {'key': 'M2 NOTE', 'value': 0.0006312639506934}, {'key': 'M3', 'value': 0.00011689070718878}, {'key': 'M3 MAX', 'value': 0.00044677395963847}, {'key': 'M3 NOTE', 'value': 0.002760139579355}, {'key': 'M3S', 'value': 0.00011689070718878}, {'key': 'M3X', 'value': 0.00058479532163743}, {'key': 'M5', 'value': 0.00032988325244969}, {'key': 'M5 NOTE', 'value': 0.0025487328863557}, {'key': 'M570C', 'value': 0.00029239766081871}, {'key': 'M5S', 'value': 0.00088050514558023}, {'key': 'M6 NOTE', 'value': 0.0026399367090421}, {'key': 'M621C', 'value': 0.00027003006400348}, {'key': 'MEITU M4', 'value': 0.0001531393568147}, {'key': 'MEIZU M6', 'value': 0.0007049981919503}, {'key': 'MEIZU S6', 'value': 0.00011689070718878}, {'key': 'MHA-AL00', 'value': 0.040872872807263}, {'key': 'MHA-L29', 'value': 0.0006312639506934}, {
            'key': 'MI 3W',
            'value': 0.0007049981919503
        }, {'key': 'MI 4LTE', 'value': 0.0020424972765991}, {'key': 'MI 4S', 'value': 0.00051437324350462}, {'key': 'MI 5', 'value': 0.0030749048369889}, {'key': 'MI 5C', 'value': 0.0001531393568147}, {'key': 'MI 5S', 'value': 0.0028594952849154}, {'key': 'MI 5S PLUS', 'value': 0.0027853299704369}, {'key': 'MI 5X', 'value': 0.00029239766081871}, {'key': 'MI 6', 'value': 0.020722391637708}, {'key': 'MI 6X', 'value': 0.0026101719270635}, {'key': 'MI 8', 'value': 0.0027445322156818}, {'key': 'MI 8 EXPLORER EDITION', 'value': 0.00011689070718878}, {'key': 'MI 8 SE', 'value': 0.00036613190207562}, {'key': 'MI MAX', 'value': 0.0059485646647728}, {'key': 'MI MAX 2', 'value': 0.00011689070718878}, {'key': 'MI NOTE 3', 'value': 0.0051763672702857}, {'key': 'MI NOTE LTE', 'value': 0.0028647350859947}, {'key': 'MI-4C', 'value': 0.00032988325244969}, {
            'key': 'MIX',
            'value': 0.0012674259167725
        }, {'key': 'MIX 2', 'value': 0.013204174354704}, {'key': 'MIX 2S', 'value': 0.0026003758962921}, {'key': 'MP1503', 'value': 0.0021479310623527}, {'key': 'MP1512', 'value': 0.00011689070718878}, {'key': 'MP1602', 'value': 0.0032516558571869}, {'key': 'MP1603', 'value': 0.0017504485260369}, {'key': 'MP1605', 'value': 0.002525861671557}, {'key': 'MP1611', 'value': 0.00027003006400348}, {'key': 'MP1701', 'value': 0.0014295483110122}, {'key': 'MP1709', 'value': 0.00057264770425224}, {'key': 'MX5', 'value': 0.00094525634941215}, {'key': 'MX6', 'value': 0.0014894014994584}, {'key': 'MYA-AL10', 'value': 0.00040928836800749}, {'key': 'MYA-TL10', 'value': 0.0007844033075081}, {'key': 'N3', 'value': 0.00043496812794682}, {'key': 'N5207', 'value': 0.00044553701763342}, {'key': 'NCE-AL00', 'value': 0.00090129401469688}, {
            'key': 'NCE-AL10',
            'value': 0.00088050514558023
        }, {'key': 'NEM-AL10', 'value': 0.0025931262942926}, {'key': 'NEM-UL10', 'value': 0.00033886628987468}, {'key': 'NEO-AL00', 'value': 0.0012177927077563}, {'key': 'NEXUS 6P', 'value': 0.00088050514558023}, {'key': 'NOKIA 7 PLUS', 'value': 0.0004830226092644}, {'key': 'NOKIA X6', 'value': 0.00049200564668938}, {'key': 'NTS-AL00', 'value': 0.00099739585276901}, {'key': 'NX523J_V1', 'value': 0.00011689070718878}, {'key': 'NX527J_V1', 'value': 0.00036613190207562}, {'key': 'NX531J', 'value': 0.00021299254526092}, {'key': 'NX563J', 'value': 0.0017488626737753}, {'key': 'NX569H', 'value': 0.0006312639506934}, {'key': 'NX569J', 'value': 0.00027003006400348}, {'key': 'NX589J', 'value': 0.00040928836800749}, {'key': 'OD103', 'value': 0.00050539020607963}, {'key': 'OD105', 'value': 0.00011689070718878}, {'key': 'ONEPLUS A3000', 'value': 0.00098193607225973}, {
            'key': 'ONEPLUS A3010',
            'value': 0.0009269737746362
        }, {'key': 'ONEPLUS A5000', 'value': 0.0018074789202164}, {'key': 'ONEPLUS A5010', 'value': 0.002041260334594}, {'key': 'ONEPLUS A6000', 'value': 0.00086994338045665}, {'key': 'OPPO A33', 'value': 0.00077384154238452}, {'key': 'OPPO A33M', 'value': 0.0015957233169606}, {'key': 'OPPO A37M', 'value': 0.0065941737513668}, {'key': 'OPPO A37T', 'value': 0.0018612042758349}, {'key': 'OPPO A53', 'value': 0.00040928836800749}, {'key': 'OPPO A53M', 'value': 0.0010405523187009}, {'key': 'OPPO A57', 'value': 0.019653767838022}, {'key': 'OPPO A57T', 'value': 0.0040605019826293}, {'key': 'OPPO A59M', 'value': 0.0092564709326611}, {'key': 'OPPO A59S', 'value': 0.016315302555551}, {'key': 'OPPO A59ST', 'value': 0.00023378141437756}, {'key': 'OPPO A73', 'value': 0.00046756282875511}, {'key': 'OPPO A73T', 'value': 0.00093877960632786}, {
            'key': 'OPPO A77',
            'value': 0.002899405007922
        }, {'key': 'OPPO A79', 'value': 0.0015130060382787}, {'key': 'OPPO A79K', 'value': 0.0023714924973002}, {'key': 'OPPO A79T', 'value': 0.0001531393568147}, {'key': 'OPPO A83', 'value': 0.0030517060856227}, {'key': 'OPPO A83T', 'value': 0.00064514500350409}, {'key': 'OPPO R11', 'value': 0.03625382370158}, {'key': 'OPPO R11 PLUS', 'value': 0.0062890751025449}, {'key': 'OPPO R11 PLUSK', 'value': 0.0017296596569202}, {'key': 'OPPO R11 PLUSKT', 'value': 0.00058810748476152}, {'key': 'OPPO R11S', 'value': 0.015877364050174}, {'key': 'OPPO R11S PLUS', 'value': 0.0040841065214496}, {'key': 'OPPO R11S PLUST', 'value': 0.00011689070718878}, {'key': 'OPPO R11ST', 'value': 0.0040075242001585}, {'key': 'OPPO R11T', 'value': 0.0057078754340893}, {'key': 'OPPO R7', 'value': 0.00096114720314309}, {'key': 'OPPO R7S', 'value': 0.0037228726347597}, {
            'key': 'OPPO R7SM',
            'value': 0.0015012073311501
        }, {'key': 'OPPO R7SPLUS', 'value': 0.0018986898674659}, {'key': 'OPPO R9 PLUSM A', 'value': 0.0093647275126815}, {'key': 'OPPO R9 PLUST A', 'value': 0.0001531393568147}, {'key': 'OPPO R9 PLUSTM A', 'value': 0.0017594315634619}, {'key': 'OPPO R9KM', 'value': 0.0012075727283263}, {'key': 'OPPO R9M', 'value': 0.016553989109878}, {'key': 'OPPO R9S', 'value': 0.033615817842978}, {'key': 'OPPO R9S PLUS', 'value': 0.016307164921803}, {'key': 'OPPO R9SK', 'value': 0.015039673584832}, {'key': 'OPPO R9SKT', 'value': 0.0007049981919503}, {'key': 'OPPO R9ST', 'value': 0.0046343937534496}, {'key': 'OPPO R9T', 'value': 0.001510190368575}, {'key': 'OPPO R9TM', 'value': 0.0045724582193214}, {'key': 'OS103', 'value': 0.00079828436031879}, {'key': 'OS105', 'value': 0.0050644638660107}, {'key': 'PAAM00', 'value': 0.0031543099525467}, {
            'key': 'PAAT00',
            'value': 0.00021299254526092
        }, {'key': 'PACM00', 'value': 0.014331763311087}, {'key': 'PACT00', 'value': 0.001818047809903}, {'key': 'PADM00', 'value': 0.0031372714443389}, {'key': 'PAR-AL00', 'value': 0.00021299254526092}, {'key': 'PBAM00', 'value': 0.00011689070718878}, {'key': 'PBEM00', 'value': 0.00060889635387816}, {'key': 'PE-TL00M', 'value': 0.0011729028063989}, {'key': 'PE-TL10', 'value': 0.0010454503340866}, {'key': 'PE-TL20', 'value': 0.00075305267326788}, {'key': 'PE-UL00', 'value': 0.00011689070718878}, {'key': 'PHILIPS X598', 'value': 0.0006312639506934}, {'key': 'PIC-AL00', 'value': 0.00057912444733653}, {'key': 'PIXEL 2 XL', 'value': 0.00021299254526092}, {'key': 'PLE-703L', 'value': 0.0010112769055797}, {'key': 'PLK-AL10', 'value': 0.0022391420096022}, {'key': 'PLK-TL01H', 'value': 0.0026533212684324}, {'key': 'PLK-UL00', 'value': 0.0001531393568147}, {
            'key': 'PRA-AL00',
            'value': 0.00074124684157622
        }, {'key': 'PRA-AL00X', 'value': 0.00029239766081871}, {'key': 'PRA-TL10', 'value': 0.00021299254526092}, {'key': 'PRO 5', 'value': 0.0011505352095837}, {'key': 'PRO 6', 'value': 0.00032988325244969}, {'key': 'PRO 6 PLUS', 'value': 0.00098683408764543}, {'key': 'PRO 7-S', 'value': 0.00099739585276901}, {'key': 'R7PLUS', 'value': 0.0013635277548446}, {'key': 'R7PLUSM', 'value': 0.00011689070718878}, {'key': 'R8107', 'value': 0.00011689070718878}, {'key': 'REDMI 3', 'value': 0.0020530661662856}, {'key': 'REDMI 3S', 'value': 0.00021299254526092}, {'key': 'REDMI 4', 'value': 0.00021299254526092}, {'key': 'REDMI 4A', 'value': 0.00021299254526092}, {'key': 'REDMI 4X', 'value': 0.00087152210815525}, {'key': 'REDMI 5 PLUS', 'value': 0.00032988325244969}, {'key': 'REDMI 5A', 'value': 0.0001531393568147}, {'key': 'REDMI NOTE 2', 'value': 0.00027003006400348}, {
            'key': 'REDMI NOTE 3',
            'value': 0.0014633799538255
        }, {'key': 'REDMI NOTE 4', 'value': 0.0083811984635971}, {'key': 'REDMI NOTE 4X', 'value': 0.0028888361182354}, {'key': 'REDMI NOTE 5', 'value': 0.0017606685054669}, {'key': 'REDMI NOTE 5A', 'value': 0.0001531393568147}, {'key': 'REDMI PRO', 'value': 0.0012088096703313}, {'key': 'RNE-AL00', 'value': 0.00052617907519627}, {'key': 'RVL-AL09', 'value': 0.0011142865599578}, {'key': 'S9', 'value': 0.00082188889913908}, {'key': 'S9L', 'value': 0.00011689070718878}, {'key': 'SCL-AL00', 'value': 0.0007049981919503}, {'key': 'SCL-TL00H', 'value': 0.0002219755826859}, {'key': 'SK1 PLUS', 'value': 0.00021299254526092}, {'key': 'SKR-A0', 'value': 0.00027003006400348}, {'key': 'SLA-AL00', 'value': 0.00021299254526092}, {'key': 'SM-A3000', 'value': 0.00011689070718878}, {'key': 'SM-A5100', 'value': 0.00011689070718878}, {'key': 'SM-A7000', 'value': 0.00066751260031932}, {
            'key': 'SM-A7100',
            'value': 0.0012088096703313
        }, {'key': 'SM-A730F', 'value': 0.00032988325244969}, {'key': 'SM-A8000', 'value': 0.00049200564668938}, {'key': 'SM-A9000', 'value': 0.0013635277548446}, {'key': 'SM-A9100', 'value': 0.0015325579653903}, {'key': 'SM-C5000', 'value': 0.00075305267326788}, {'key': 'SM-C5010', 'value': 0.0018812202860364}, {'key': 'SM-C7000', 'value': 0.0021597368940444}, {'key': 'SM-C7010', 'value': 0.00027003006400348}, {'key': 'SM-C7100', 'value': 0.00099739585276901}, {'key': 'SM-C9000', 'value': 0.0019585430559121}, {'key': 'SM-G5308W', 'value': 0.0006312639506934}, {'key': 'SM-G5309W', 'value': 0.00021299254526092}, {'key': 'SM-G5500', 'value': 0.00011689070718878}, {'key': 'SM-G5520', 'value': 0.00084915451134001}, {'key': 'SM-G5528', 'value': 0.00027003006400348}, {'key': 'SM-G6000', 'value': 0.00021299254526092}, {'key': 'SM-G6100', 'value': 0.0011053035225328}, {
            'key': 'SM-G9008V',
            'value': 0.00037511493950061
        }, {'key': 'SM-G920', 'value': 0.00011689070718878}, {'key': 'SM-G9200', 'value': 0.0007844033075081}, {'key': 'SM-G9208', 'value': 0.00032988325244969}, {'key': 'SM-G9250', 'value': 0.0013374990846488}, {'key': 'SM-G9280', 'value': 0.00095423938683714}, {'key': 'SM-G9300', 'value': 0.00027003006400348}, {'key': 'SM-G9350', 'value': 0.0024542097759821}, {'key': 'SM-G9500', 'value': 0.0024582947980214}, {'key': 'SM-G9508', 'value': 0.00011689070718878}, {'key': 'SM-G9550', 'value': 0.0024053170155506}, {'key': 'SM-G955U', 'value': 0.00058810748476152}, {'key': 'SM-G965F', 'value': 0.00011689070718878}, {'key': 'SM-J3109', 'value': 0.00011689070718878}, {'key': 'SM-J5008', 'value': 0.0010919189631426}, {'key': 'SM-J5108', 'value': 0.00023378141437756}, {'key': 'SM-J7008', 'value': 0.00062070218556982}, {'key': 'SM-J7108', 'value': 0.00033886628987468}, {
            'key': 'SM-N9005',
            'value': 0.00036613190207562
        }, {'key': 'SM-N9008', 'value': 0.0002219755826859}, {'key': 'SM-N9008S', 'value': 0.00023378141437756}, {'key': 'SM-N9008V', 'value': 0.00011689070718878}, {'key': 'SM-N9109W', 'value': 0.00027003006400348}, {'key': 'SM-N9150', 'value': 0.00011689070718878}, {'key': 'SM-N9200', 'value': 0.002003774742963}, {'key': 'SM-N9500', 'value': 0.0015089210162394}, {'key': 'SM-N950F', 'value': 0.00072736578876553}, {'key': 'SM-N9600', 'value': 0.00011689070718878}, {'key': 'SS2-01', 'value': 0.0001531393568147}, {'key': 'STF-AL00', 'value': 0.0051605585795199}, {'key': 'STF-AL10', 'value': 0.0079996139055752}, {'key': 'STF-TL10', 'value': 0.00099739585276901}, {'key': 'SUGAR F9', 'value': 0.00011689070718878}, {'key': 'SUGAR S11', 'value': 0.00036613190207562}, {'key': 'TCL 950', 'value': 0.00011689070718878}, {'key': 'TRT-AL00', 'value': 0.00021299254526092}, {
            'key': 'TRT-AL00A',
            'value': 0.001493062572839
        }, {'key': 'TRT-TL10', 'value': 0.00029239766081871}, {'key': 'V1732A', 'value': 0.00021299254526092}, {'key': 'VIE-AL10', 'value': 0.010152191903586}, {'key': 'VIVO NEX A', 'value': 0.00066751260031932}, {'key': 'VIVO NEX S', 'value': 0.00043496812794682}, {'key': 'VIVO V3', 'value': 0.00011689070718878}, {'key': 'VIVO V3M A', 'value': 0.00098193607225973}, {'key': 'VIVO V3MAX A', 'value': 0.0021129193547319}, {'key': 'VIVO X20', 'value': 0.00033886628987468}, {'key': 'VIVO X20A', 'value': 0.0084479737174753}, {'key': 'VIVO X20PLUS A', 'value': 0.0018400736210247}, {'key': 'VIVO X20PLUS UD', 'value': 0.00040928836800749}, {'key': 'VIVO X21', 'value': 0.00011689070718878}, {'key': 'VIVO X21A', 'value': 0.0034243400165502}, {'key': 'VIVO X21I A', 'value': 0.00074815465788217}, {'key': 'VIVO X21UD A', 'value': 0.00074815465788217}, {
            'key': 'VIVO X3L',
            'value': 0.00029239766081871
        }, {'key': 'VIVO X3S W', 'value': 0.00021299254526092}, {'key': 'VIVO X5M', 'value': 0.0001531393568147}, {'key': 'VIVO X5MAX+', 'value': 0.00081166891970903}, {'key': 'VIVO X5PRO D', 'value': 0.0015582377253296}, {'key': 'VIVO X5S L', 'value': 0.0007049981919503}, {'key': 'VIVO X6A', 'value': 0.001537455980776}, {'key': 'VIVO X6D', 'value': 0.0049951965669179}, {'key': 'VIVO X6L', 'value': 0.0006312639506934}, {'key': 'VIVO X6PLUS A', 'value': 0.00011689070718878}, {'key': 'VIVO X6PLUS D', 'value': 0.0024073993612326}, {'key': 'VIVO X6S A', 'value': 0.0027241744197868}, {'key': 'VIVO X6SPLUS A', 'value': 0.00032988325244969}, {'key': 'VIVO X6SPLUS D', 'value': 0.0021491680043578}, {'key': 'VIVO X7', 'value': 0.010052680071861}, {'key': 'VIVO X710F', 'value': 0.00011689070718878}, {'key': 'VIVO X7PLUS', 'value': 0.010139496621708}, {
            'key': 'VIVO X9',
            'value': 0.00044677395963847
        }, {'key': 'VIVO X9L', 'value': 0.0002219755826859}, {'key': 'VIVO X9PLUS', 'value': 0.00066874954232438}, {'key': 'VIVO XPLAY5A', 'value': 0.0009595684754445}, {'key': 'VIVO XPLAY6', 'value': 0.0013740966445312}, {'key': 'VIVO Y13', 'value': 0.00021299254526092}, {'key': 'VIVO Y27', 'value': 0.00021299254526092}, {'key': 'VIVO Y31', 'value': 0.00023378141437756}, {'key': 'VIVO Y31A', 'value': 0.00023378141437756}, {'key': 'VIVO Y37', 'value': 0.00021299254526092}, {'key': 'VIVO Y51', 'value': 0.0011053035225328}, {'key': 'VIVO Y51A', 'value': 0.0024607758065945}, {'key': 'VIVO Y51T L', 'value': 0.00011689070718878}, {'key': 'VIVO Y66', 'value': 0.00071398122937529}, {'key': 'VIVO Y67', 'value': 0.003896800860691}, {'key': 'VIVO Y67A', 'value': 0.0040242533330034}, {'key': 'VIVO Y67L', 'value': 0.00092366161151211}, {
            'key': 'VIVO Y75',
            'value': 0.00011689070718878
        }, {'key': 'VIVO Y75A', 'value': 0.0011505352095837}, {'key': 'VIVO Y79A', 'value': 0.00027003006400348}, {'key': 'VIVO Y83A', 'value': 0.0011142865599578}, {'key': 'VIVO Z1', 'value': 0.0001531393568147}, {'key': 'VKY-AL00', 'value': 0.013726577783224}, {'key': 'VKY-TL00', 'value': 0.00021299254526092}, {'key': 'VTR-AL00', 'value': 0.02421379490981}, {'key': 'VTR-L09', 'value': 0.00058810748476152}, {'key': 'VTR-L29', 'value': 0.0011142865599578}, {'key': 'VTR-TL00', 'value': 0.0034194420011645}, {'key': 'WAS-AL00', 'value': 0.0015145918905403}, {'key': 'X600', 'value': 0.00011689070718878}, {'key': 'X6D', 'value': 0.00036613190207562}, {'key': 'X900+', 'value': 0.00011689070718878}, {'key': 'X9007', 'value': 0.00066751260031932}, {'key': 'X9076', 'value': 0.00072736578876553}, {'key': 'XT1635-03', 'value': 0.00027003006400348}, {
            'key': 'YQ601',
            'value': 0.00011689070718878
        }, {'key': 'YU FLY F9', 'value': 0.0001531393568147}, {'key': 'Z10', 'value': 0.00021299254526092}, {'key': 'ZTE A2017', 'value': 0.00091799073721121}, {'key': 'ZTE B2015', 'value': 0.00011689070718878}, {'key': 'ZTE BA610T', 'value': 0.00029239766081871}, {'key': 'ZTE BV0730', 'value': 0.00036613190207562}, {'key': 'ZUK Z2121', 'value': 0.0007844033075081}, {'key': 'ZUK Z2131', 'value': 0.00023378141437756}, {'key': '\u0425', 'value': 0.00029239766081871}, {'key': '\u5927Q', 'value': 0.00011689070718878}, {'key': '\u7d22\u5c3cQ10', 'value': 0.00021299254526092}, {'key': '\u8054\u60f3-S6000', 'value': 0.00011689070718878}, {'key': '\u8def\u864eM9', 'value': 0.00011689070718878}, {'key': '\u91d1\u7acbM2017', 'value': 0.00027003006400348}, {'key': '\u957f\u8679V9', 'value': 0.00011689070718878}, {'key': '\u9ea6\u52a8-X9', 'value': 0.00011689070718878}]
    },
    'language_name': {'title': '', 'datas': [{'key': '\u4e2d\u6587', 'value': 0.99298705952754}, {'key': '\u671d\u9c9c\u8bed', 'value': 0.0003062787136294}, {'key': '\u82f1\u8bed', 'value': 0.0067066617588332}]},
    'kids': {'title': '\u6709\u65e0\u5c0f\u5b69', 'datas': [{'key': '\u65e0\u672a\u6210\u5e74\u5b50\u5973', 'value': 0.73605206228578}, {'key': '0-3\u5c81(\u5a74\u5e7c\u513f)', 'value': 0.062982589838222}, {'key': '4-6\u5c81\uff08\u5b66\u9f84\u524d\uff09', 'value': 0.076681121728006}, {'key': '7-12\u5c81\uff08\u5c0f\u5b66\u751f\uff09', 'value': 0.074184808717493}, {'key': '13-17\u5c81\uff08\u521d\u3001\u9ad8\u4e2d\u751f\uff09', 'value': 0.050099417430502}]},
    'income': {'title': '\u6536\u5165', 'datas': [{'key': '\u5c0f\u4e8e3k', 'value': 0.039691682273371}, {'key': '3-5k', 'value': 0.074802340378475}, {'key': '5-10k', 'value': 0.21094359998843}, {'key': '10-20k', 'value': 0.45074157840015}, {'key': '20k\u4ee5\u4e0a', 'value': 0.22382079895958}]},
    'gender': {'title': '\u6027\u522b', 'datas': [{'key': '\u7537', 'value': 0.48106848839454}, {'key': '\u5973', 'value': 0.51893151160546}]},
    'edu': {'title': '\u5b66\u5386', 'datas': [{'key': '\u9ad8\u4e2d\u53ca\u4ee5\u4e0b', 'value': 0.13815359002713}, {'key': '\u4e13\u79d1', 'value': 0.4033667940889}, {'key': '\u672c\u79d1', 'value': 0.41320094167356}, {'key': '\u7855\u58eb\u53ca\u4ee5\u4e0a', 'value': 0.045278674210415}]},
    'cell_factory': {
        'title': '\u54c1\u724c',
        'datas': [{'key': '360', 'value': 0.0032382924275893}, {'key': 'ALPS', 'value': 0.00066467650329565}, {'key': 'APPLE', 'value': 0.33161285328323}, {'key': 'CHANGHONG', 'value': 0.00014133027117746}, {'key': 'COOLPAD', 'value': 0.0032817758038957}, {'key': 'DOOV', 'value': 0.0011094404486845}, {'key': 'GIONEE', 'value': 0.011986147008273}, {'key': 'GREE', 'value': 0.00041017069046392}, {'key': 'HTC', 'value': 0.0011362571562062}, {'key': 'HUAWEI', 'value': 0.26478382882747}, {'key': 'LEMOBILE', 'value': 0.0013155328835228}, {'key': 'LENOVO', 'value': 0.00076536994388304}, {'key': 'LG', 'value': 8.0674570588282e-5}, {'key': 'MEITU', 'value': 0.0082106640671606}, {'key': 'MEIZU', 'value': 0.015253393545664}, {'key': 'MOTOROLA', 'value': 0.00018816584869818}, {'key': 'ONEPLUS', 'value': 0.0042595303646417}, {'key': 'OPPO', 'value': 0.1957028819372}, {
            'key': 'PHILIPS',
            'value': 0.00041585495400829
        }, {'key': 'SAMSUNG', 'value': 0.026294720529856}, {'key': 'SMARTISAN', 'value': 0.0044484263168612}, {'key': 'SONY', 'value': 0.00041017069046392}, {'key': 'SUGAR', 'value': 0.00032949611987564}, {'key': 'TCL', 'value': 8.0674570588282e-5}, {'key': 'VIVO', 'value': 0.054647330928249}, {'key': 'XIAOMI', 'value': 0.064367235498966}, {'key': 'ZTE', 'value': 0.0036500409185259}, {'key': '\u5c0f\u8fa3\u6912', 'value': 0.0012150638909589}]
    },
    'carrier': {
        'title': '\u8fd0\u8425\u5546',
        'datas': [{'key': 'CHINA MOBILE', 'value': 0.61848538706557}, {'key': 'CHINA MOBILE HONG KONG COMPANY LIMITED', 'value': 0.0014480931216784}, {'key': 'CHINA TELECOM', 'value': 0.17788213546254}, {'key': 'CHINA UNICOM', 'value': 0.19523768542665}, {'key': 'CHINA UNICOM (HONG KONG) OPERATIONS LTD', 'value': 0.00090535301027955}, {'key': 'CSL', 'value': 0.00033843945162048}, {'key': 'GLOBE TELECOM', 'value': 0.00079815866816942}, {'key': 'HUTCHISON TELECOM HONG KONG HOLDINGS LIMITED', 'value': 0.0016894262556306}, {'key': 'MTN NIGERIA', 'value': 0.00012033694344164}, {'key': 'ROGERS COMMUNICATIONS CANADA INC.', 'value': 0.0003478682289934}, {'key': 'SMARTONE MOBILE COMMUNICATIONS LTD', 'value': 0.0002779413563652}, {'key': 'T-MOBILE USA, INC.', 'value': 0.00022753128555176}, {'key': 'TELEFONICA UK LIMITED', 'value': 0.00074774859735599}, {
            'key': 'VINAPHONE',
            'value': 0.00012033694344164
        }, {'key': 'VODAFONE LIBERTEL B.V.', 'value': 0.0013735581827146}]
    },
    'car': {'title': '\u8f66\u4ea7', 'datas': [{'key': '\u65e0', 'value': 0.71181998298688}, {'key': '\u6709', 'value': 0.28818001701312}]},
    'agebin': {'title': '\u5e74\u9f84', 'datas': [{'key': '45\u5c81\u4ee5\u4e0a', 'value': 0.074777254565841}, {'key': '35-44\u5c81', 'value': 0.32326222683096}, {'key': '25-34\u5c81', 'value': 0.43811410434383}, {'key': '18-24\u5c81', 'value': 0.14031825986885}, {'key': '18\u5c81\u4ee5\u4e0b', 'value': 0.023528154390519}]}
}
const colorMap = {
    blue: ['#0fdbe0', '#15abbe', '#0f8891', '#145866', '#093138'],
    rainbow:['#5b9bef', '#74a9f8', '#7fd0f8', '#87e6f0', '#8efbb3', '#8cfb82', '#d4fb81', '#fdfd55']
}

function debounce (func, wait, immediate) {
    let time
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    let debounced = function () {
        let context = this

        time && clearTimeout(time)
        if (immediate) {
            let callNow = !time
            callNow && func.apply(context, arguments)
            time = setTimeout(() => {time = null}, wait)
        } else {
            time = setTimeout(() => {
                func.apply(context, arguments)
            }, wait)
        }
    }
    debounce.cancel = function () {
        clearTimeout(time)
        time = null
    }
    return debounced
}