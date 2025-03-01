import React from 'react';

const icons = {
    logoFooter: (
        <svg width="208" height="153" viewBox="0 0 208 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M151.82 57.7227V69.3418H125.875L138.759 45.1622L139.2 44.3386C139.553 43.6915 139.73 43.0541 139.73 42.4266C139.73 40.8381 138.798 40.0439 136.935 40.0439C136.21 40.0439 135.573 40.3185 135.023 40.8676C134.494 41.397 134.229 42.0246 134.229 42.7502C134.229 43.5738 134.582 44.319 135.288 44.9857L130.14 54.1634C127.983 52.8299 126.326 51.1336 125.169 49.0745C124.012 47.0154 123.434 44.7406 123.434 42.2501C123.434 38.3869 124.797 35.0825 127.522 32.3371C130.248 29.572 133.543 28.1895 137.406 28.1895C141.289 28.1895 144.584 29.5524 147.29 32.2782C150.016 35.0041 151.378 38.3182 151.378 42.2207C151.378 44.4563 150.878 46.535 149.878 48.4568L145.113 57.7227H151.82Z" fill="white"/>
            <path d="M52.3369 74.2035C52.5447 75.7527 52.7821 77.2901 53.0492 78.8096C53.257 80.1155 53.4944 81.5104 53.7615 82.9825C54.0286 84.4605 54.3135 85.8198 54.6103 87.0663C54.7884 87.826 55.0021 88.6808 55.2573 89.6186C55.5126 90.5624 55.7678 91.5121 56.0409 92.4678C56.308 93.4235 56.5869 94.3376 56.8659 95.2042C57.1508 96.0708 57.3942 96.8246 57.602 97.4657C57.6613 97.2817 57.7563 96.9552 57.8928 96.4863C58.0293 96.0174 58.1837 95.4772 58.3617 94.8659C58.5398 94.2604 58.7238 93.6134 58.9197 92.9249C59.1156 92.2423 59.2936 91.5893 59.4539 90.9661C59.6201 90.3428 59.7566 89.7848 59.8813 89.2981C60 88.8114 60.0772 88.4612 60.1068 88.2475C59.5133 86.7873 58.8485 85.2381 58.1184 83.5939C57.3883 81.9497 56.7116 80.4301 56.0824 79.0293C55.3701 77.3851 54.64 75.7765 53.8921 74.1916H72.3464C72.4651 75.7408 72.6135 77.2782 72.7915 78.7978C72.9399 80.1036 73.1358 81.4985 73.3733 82.9706C73.6107 84.4486 73.8778 85.8079 74.1746 87.0544C74.3527 87.8142 74.5841 88.6689 74.8691 89.6068C75.154 90.5506 75.4508 91.5003 75.7654 92.4559C76.08 93.4116 76.3886 94.3257 76.7032 95.1923C77.0178 96.0589 77.279 96.8128 77.4867 97.4538C77.6351 96.9077 77.8429 96.2014 78.11 95.3348C78.3771 94.4682 78.6739 93.3938 79.0063 92.1176C79.7483 89.4109 80.1163 86.9594 80.0985 84.7691C80.0807 82.5788 79.9263 80.6913 79.6295 79.1124C79.2734 77.2545 78.751 75.6162 78.0684 74.1857H88.9724C88.1948 75.1888 87.4113 76.4531 86.604 77.9727C85.8918 79.2786 85.0904 80.9406 84.2119 82.9469C83.3334 84.9531 82.449 87.3868 81.5527 90.2478C81.2559 91.2213 80.9354 92.2719 80.5911 93.3938C80.2469 94.5216 79.8966 95.6731 79.5405 96.8603C79.1844 98.0474 78.8282 99.2346 78.4661 100.422C78.11 101.609 77.7657 102.749 77.4392 103.841C76.6913 106.393 75.9494 108.969 75.2074 111.551H68.1913C67.39 108.999 66.5827 106.5 65.7814 104.066C65.455 103.033 65.1047 101.959 64.7308 100.849C64.3568 99.7391 63.9948 98.6351 63.6386 97.5429C63.2825 96.4507 62.9263 95.4001 62.5642 94.3969C62.2081 93.3938 61.8757 92.4797 61.5789 91.6605C61.2821 92.634 60.9616 93.6668 60.6173 94.7649C60.273 95.8631 59.9406 96.9612 59.6142 98.0712C59.2877 99.1811 58.9612 100.291 58.6288 101.401C58.3024 102.511 57.9878 103.568 57.691 104.571C57.0024 106.915 56.3198 109.242 55.6372 111.551H48.6212C47.6358 108.477 46.698 105.544 45.8076 102.743C45.3031 101.164 44.7629 99.5432 44.199 97.8812C43.6351 96.2251 43.1128 94.7056 42.6379 93.3166C42.1631 91.9336 41.7297 90.7702 41.3439 89.8264C41.0768 89.0963 40.7503 88.3128 40.3586 87.4758C39.9728 86.6389 39.5691 85.7901 39.1536 84.9235C38.7381 84.0568 38.2989 83.1902 37.8359 82.3236C37.3729 81.457 36.9337 80.626 36.5182 79.8365C35.5328 77.949 34.5059 76.0673 33.4375 74.1797H52.3369V74.2035Z" fill="white"/>
            <path d="M82.2344 98.5703C82.2344 96.5937 82.5668 94.8011 83.2375 93.1866C83.9083 91.572 84.858 90.2009 86.0985 89.0553C87.3332 87.9156 88.8231 87.0431 90.5682 86.4317C92.3133 85.8262 94.2543 85.5176 96.3971 85.5176C98.5399 85.5176 100.475 85.8203 102.208 86.4317C103.935 87.0431 105.419 87.9156 106.654 89.0553C107.889 90.1949 108.844 91.572 109.515 93.1866C110.186 94.8011 110.536 96.5937 110.566 98.5703C110.536 100.517 110.18 102.298 109.491 103.907C108.803 105.521 107.847 106.892 106.607 108.038C105.372 109.177 103.888 110.062 102.161 110.685C100.433 111.308 98.5102 111.623 96.3971 111.623C94.284 111.623 92.3074 111.32 90.5682 110.709C88.8231 110.103 87.3332 109.225 86.0985 108.085C84.8639 106.946 83.9083 105.569 83.2375 103.954C82.5668 102.34 82.2344 100.547 82.2344 98.5703ZM93.8981 99.3004C94.1949 100.333 94.5392 101.508 94.925 102.814C95.3108 104.12 95.7441 105.325 96.219 106.417C96.6939 107.515 97.2043 108.4 97.7386 109.088C98.2728 109.777 98.8248 110.038 99.3887 109.884C99.9526 109.73 100.297 109.225 100.416 108.358C100.534 107.492 100.528 106.459 100.392 105.254C100.255 104.055 100.042 102.791 99.7448 101.467C99.4481 100.143 99.1631 98.9502 98.896 97.8877C98.6289 96.8845 98.3084 95.7686 97.9344 94.534C97.5605 93.2993 97.1509 92.1359 96.7057 91.0438C96.2606 89.9516 95.7798 89.0375 95.2752 88.3074C94.7707 87.5773 94.2483 87.2152 93.7082 87.2152H93.4411C92.8475 87.3695 92.4854 87.8859 92.3667 88.7644C92.248 89.6489 92.2539 90.6876 92.3904 91.8926C92.527 93.0916 92.7407 94.3618 93.0374 95.7033C93.3342 97.0448 93.6192 98.2438 93.8863 99.3063L93.8981 99.3004Z" fill="white"/>
            <path d="M111.092 85.6599L122.886 85.5709L123.599 92.2308C123.866 91.287 124.216 90.4144 124.649 89.6072C125.082 88.7999 125.605 88.0935 126.216 87.4881C126.828 86.8827 127.528 86.4019 128.317 86.0516C129.107 85.7014 130.009 85.5293 131.018 85.5293C131.641 85.5293 132.271 85.6065 132.894 85.7549C133.517 85.9092 134.105 86.1288 134.657 86.4137C135.209 86.7046 135.702 87.0726 136.129 87.5297C136.556 87.9867 136.883 88.5209 137.09 89.1264C137.447 90.0998 137.559 91.1327 137.423 92.2308C137.286 93.3289 136.924 94.332 136.331 95.2402C135.826 96 135.173 96.6292 134.39 97.1337C133.6 97.6382 132.805 97.8994 131.998 97.935C130.3 97.9944 128.917 97.5255 127.843 96.5223C126.946 95.5489 126.501 94.3914 126.501 93.0558C126.501 92.2664 126.649 91.5956 126.946 91.0496C127.243 90.5035 127.528 90.0286 127.795 89.6368C127.943 89.4232 128.068 89.2332 128.175 89.067C128.282 88.9008 128.3 88.788 128.24 88.7227C128.181 88.6634 128.133 88.6337 128.104 88.6337C127.926 88.6634 127.7 88.7999 127.433 89.0433C127.166 89.2866 126.899 89.5775 126.626 89.9099C126.359 90.2423 126.097 90.6162 125.842 91.0258C125.587 91.4354 125.385 91.839 125.237 92.2367C125.029 92.7234 124.851 93.2398 124.703 93.7859C124.554 94.332 124.435 94.9434 124.346 95.6082C124.257 96.279 124.192 97.0506 124.145 97.935C124.103 98.8195 124.079 99.8523 124.079 101.039C124.079 102.227 124.091 103.39 124.127 104.619C124.156 105.847 124.198 106.981 124.263 108.02C124.293 109.237 124.335 110.406 124.4 111.534H111.531C111.709 110.258 111.858 108.916 111.976 107.521C112.095 106.304 112.202 104.939 112.291 103.414C112.38 101.894 112.427 100.327 112.427 98.7126C112.427 97.0981 112.362 95.5192 112.226 93.9699C112.089 92.4207 111.935 91.0199 111.757 89.7734C111.549 88.3428 111.323 86.9776 111.086 85.6658L111.092 85.6599Z" fill="white"/>
            <path d="M136.826 74.1622H151.345C151.167 76.3822 151.019 78.6496 150.9 80.9586C150.781 82.9352 150.68 85.1077 150.609 87.482C150.538 89.8563 150.526 92.1653 150.585 94.415C150.763 93.5958 150.995 92.7886 151.28 91.9991C151.565 91.2097 151.945 90.4558 152.419 89.7435C152.894 89.0313 153.476 88.3724 154.165 87.7788C154.847 87.1852 155.684 86.6748 156.669 86.2474C157.655 85.82 158.694 85.6063 159.798 85.6063C160.51 85.6063 161.204 85.7072 161.875 85.9031C162.546 86.099 163.139 86.4076 163.662 86.8172C164.184 87.2268 164.6 87.7373 164.914 88.3486C165.229 88.96 165.383 89.6901 165.383 90.5389C165.383 92.0882 164.938 93.2872 164.042 94.1182C163.145 94.9551 162.047 95.3706 160.735 95.3706C160.142 95.3706 159.531 95.2816 158.901 95.0976C158.035 94.8246 157.245 94.6287 156.533 94.504C155.821 94.3853 155.162 94.32 154.568 94.32C153.553 94.32 152.764 94.4625 152.2 94.7533C151.636 95.0442 151.262 95.3825 151.084 95.7802C150.995 95.9345 150.977 96.1304 151.036 96.3738C151.096 96.6171 151.244 96.7359 151.482 96.7359C151.63 96.7359 151.838 96.6468 152.105 96.4628C152.431 96.2194 152.894 95.982 153.488 95.7565C154.081 95.5309 154.812 95.4122 155.678 95.4122C156.931 95.4122 158.106 95.5903 159.21 95.9345C160.308 96.2847 161.27 96.819 162.089 97.5312C162.908 98.2435 163.549 99.128 164.012 100.179C164.475 101.229 164.706 102.44 164.706 103.805C164.706 105.022 164.796 106.102 164.974 107.046C165.152 107.99 165.359 108.809 165.597 109.51C165.864 110.269 166.161 110.952 166.487 111.563H152.503C152.71 109.13 152.817 106.969 152.817 105.087C152.817 104.268 152.793 103.467 152.752 102.689C152.704 101.912 152.633 101.223 152.526 100.612C152.419 100.006 152.271 99.5197 152.081 99.1517C151.885 98.7837 151.642 98.6056 151.345 98.6056C151.048 98.6056 150.823 98.7896 150.674 99.1517C150.526 99.5138 150.419 100.001 150.36 100.612C150.3 101.223 150.289 101.912 150.318 102.689C150.348 103.467 150.407 104.262 150.496 105.087C150.645 106.975 150.93 109.136 151.345 111.563H137.675C137.883 109.189 138.061 106.773 138.209 104.31C138.358 102.209 138.482 99.9293 138.589 97.466C138.696 95.0026 138.744 92.6758 138.744 90.4855C138.744 88.2952 138.649 86.2118 138.453 84.2352C138.257 82.2586 138.043 80.5253 137.806 79.0354C137.509 77.2725 137.182 75.6461 136.82 74.1562L136.826 74.1622Z" fill="white"/>
            <path d="M32.9922 69.4535C33.3127 68.4385 33.6154 67.1742 33.8885 65.6487C34.0844 64.3547 34.2802 62.7342 34.4643 60.7814C34.6483 58.8285 34.7432 56.4957 34.7432 53.7831C34.7432 51.0705 34.6542 48.714 34.4821 46.7848C34.3099 44.8557 34.12 43.259 33.9241 41.9947C33.6748 40.5226 33.3899 39.3058 33.0694 38.3442L46.0627 38.3086C45.9381 39.5788 45.8253 40.8313 45.7303 42.0719C45.6591 43.1344 45.5819 44.2859 45.5048 45.5146C45.4335 46.7433 45.392 47.8889 45.392 48.9573V52.8334H49.1909V48.9573C49.1909 47.9186 49.1493 46.7848 49.0603 45.5561C48.9712 44.3274 48.8763 43.1759 48.7635 42.0956C48.6507 41.0212 48.5082 39.7569 48.3361 38.3145L61.555 38.3501C61.2345 39.6916 60.9437 41.1756 60.7003 42.796C60.4985 44.1672 60.3085 45.7817 60.1245 47.6455C59.9405 49.5094 59.8455 51.5275 59.8455 53.7119C59.8455 55.8962 59.9346 57.8966 60.1067 59.796C60.2789 61.6955 60.4807 63.3693 60.7003 64.8177C60.9258 66.4915 61.1989 68.0348 61.5194 69.4535H48.5973C48.6982 68.3613 48.7932 67.2454 48.8941 66.1057C48.9712 65.1441 49.0365 64.0935 49.1018 62.9479C49.1612 61.8082 49.1968 60.7161 49.1968 59.6773V54.5844H45.3979V59.6773C45.3979 60.7161 45.4395 61.8082 45.5285 62.9479C45.6175 64.0876 45.7184 65.1382 45.8431 66.1057C45.9677 67.2454 46.1043 68.3613 46.2527 69.4535H32.9981H32.9922Z" fill="white"/>
            <path d="M64.1255 39.9111C65.093 38.9495 66.3336 38.35 67.8472 38.1244C68.6189 38.0235 69.3549 38.0413 70.0612 38.1838C70.7676 38.3262 71.3968 38.5518 71.9429 38.8664C72.489 39.181 72.9401 39.5906 73.3022 40.0832C73.6642 40.5759 73.8779 41.1279 73.9551 41.7393C74.0263 42.3507 73.9551 42.9383 73.7473 43.5082C73.5396 44.078 73.2072 44.6003 72.762 45.0693C72.3168 45.5382 71.7707 45.9299 71.1237 46.2505C70.4767 46.5651 69.7704 46.7788 68.9987 46.8797C68.8504 46.9034 68.696 46.9271 68.5358 46.939C68.3755 46.9509 68.2034 46.9568 68.0312 46.9568C67.3605 46.9568 66.7313 46.8678 66.1496 46.6897C65.5679 46.5116 65.0455 46.2564 64.5885 45.9299C64.1314 45.6035 63.7515 45.2058 63.4547 44.7487C63.158 44.2917 62.974 43.799 62.8968 43.2648C62.7484 42.0242 63.158 40.9083 64.1255 39.917V39.9111ZM74.1807 47.8591V58.3179C74.1807 59.5347 74.2163 60.7931 74.2934 62.0989C74.3647 63.4048 74.4418 64.6038 74.519 65.6901C74.6199 66.9841 74.7267 68.2365 74.8514 69.4533H63.3064C63.5319 68.4917 63.7278 67.4233 63.8999 66.2599C64.0246 65.2686 64.1492 64.0993 64.2739 62.74C64.3985 61.3866 64.4579 59.9086 64.4579 58.3119C64.4579 56.7152 64.3926 55.2847 64.2739 54.0144C64.1492 52.7501 64.0008 51.6698 63.8287 50.7854C63.6566 49.7229 63.4429 48.7672 63.1936 47.9362L74.1807 47.8591Z" fill="white"/>
            <path d="M75.2188 47.8164H88.5148C88.6157 48.6771 88.7226 49.5378 88.8472 50.4044C88.9719 51.1404 89.1084 51.918 89.2568 52.7431C89.4052 53.5682 89.5773 54.322 89.7792 55.0046C89.9038 55.4379 90.0641 55.9603 90.2659 56.5835C90.4618 57.2068 90.6755 57.836 90.901 58.483C91.1266 59.13 91.3403 59.7532 91.5539 60.3468C91.7676 60.9404 91.9457 61.4152 92.0941 61.7714C92.2188 61.4686 92.3671 60.9522 92.5393 60.234C92.7114 59.5158 92.9132 58.7857 93.1329 58.0496C93.6315 56.5301 93.8748 55.1471 93.8748 53.9065C93.8748 52.6659 93.762 51.5856 93.5424 50.6774C93.2931 49.6149 92.931 48.6652 92.4621 47.8283H99.9115C99.3891 48.3862 98.8431 49.0985 98.2732 49.9592C97.7746 50.6952 97.2285 51.6272 96.6349 52.755C96.0414 53.8827 95.43 55.248 94.8127 56.8447C94.6168 57.3789 94.3972 57.9725 94.1597 58.6313C93.9223 59.2902 93.6849 59.961 93.4356 60.6436C93.1863 61.3262 92.9429 62.0207 92.7114 62.7152C92.474 63.4096 92.2484 64.0922 92.0229 64.7511C91.5005 66.3003 90.9782 67.8555 90.4618 69.4285H85.6597C84.989 67.5765 84.342 65.8314 83.7247 64.1813C83.4754 63.4749 83.2083 62.7508 82.9234 62.0147C82.6384 61.2787 82.3595 60.5783 82.0864 59.9016C81.8134 59.2309 81.5581 58.6076 81.3207 58.0378C81.0833 57.4679 80.8696 56.9931 80.6678 56.6132C80.2701 55.8 79.7655 54.8859 79.1601 53.859C78.5487 52.8321 77.9492 51.8765 77.3556 50.9861C76.6849 49.9473 75.9785 48.8967 75.2306 47.8283L75.2188 47.8164Z" fill="white"/>
            <path d="M104.255 48.2754C105.371 47.8183 106.576 47.5928 107.864 47.5928C108.784 47.5928 109.722 47.7352 110.678 48.0142C111.634 48.2932 112.518 48.7502 113.343 49.3854C114.162 50.0146 114.863 50.8337 115.444 51.8368C116.026 52.84 116.406 54.0568 116.578 55.4992C116.899 57.9922 116.542 60.2597 115.498 62.2956C115.023 63.1741 114.471 63.9398 113.842 64.5868C113.207 65.2398 112.56 65.7918 111.889 66.2488C111.218 66.7059 110.565 67.0739 109.936 67.3529C109.301 67.6319 108.737 67.8456 108.244 67.9821C108.292 68.0533 108.345 68.1067 108.393 68.1424C108.963 68.7419 109.562 69.193 110.179 69.5135C110.797 69.8281 111.444 69.9884 112.114 69.9884C112.66 69.9884 113.242 69.8578 113.865 69.5907C114.489 69.3236 115.088 68.9793 115.67 68.54C116.252 68.1008 116.786 67.5903 117.273 67.0146C117.759 66.4329 118.121 65.8096 118.371 65.1448L118.335 65.6731C118.086 67.7447 117.647 69.5551 117.011 71.0984C116.376 72.6417 115.581 73.9356 114.625 74.9685C113.67 76.0072 112.583 76.7789 111.366 77.2834C110.15 77.7939 108.832 78.0491 107.419 78.0491C106.303 78.0491 105.199 77.8473 104.107 77.4437C103.015 77.04 102.006 76.4168 101.074 75.5739C100.142 74.731 99.3288 73.6329 98.6343 72.2796C97.9398 70.9262 97.4175 69.3058 97.0673 67.4063C96.6696 65.1923 96.5449 63.0732 96.6933 61.0313C96.8417 58.9954 97.2335 57.1315 97.8686 55.4458C98.5037 53.76 99.3585 52.2939 100.439 51.0474C101.519 49.8009 102.789 48.8808 104.255 48.2813V48.2754ZM106.938 66.3913C107.087 66.2488 107.271 66.0055 107.496 65.6553C107.722 65.3051 107.918 64.8065 108.09 64.1535C108.262 63.5065 108.381 62.7052 108.446 61.7555C108.505 60.8058 108.464 59.6483 108.316 58.2771C107.995 55.6417 107.556 53.7066 107.01 52.4601C106.464 51.2136 105.965 50.4835 105.52 50.2757C105.472 50.2757 105.413 50.2698 105.354 50.252C105.294 50.2342 105.235 50.2282 105.187 50.2282C104.914 50.2282 104.641 50.4241 104.368 50.81C104.071 51.267 103.887 52.0921 103.81 53.2852C103.739 54.4782 103.798 55.8375 103.994 57.369C104.19 58.8944 104.534 60.4674 105.021 62.0819C105.508 63.6965 106.143 65.1389 106.938 66.4032V66.3913Z" fill="#F49943"/>
            <path d="M131.843 98.3612C134.928 98.3612 137.429 95.9003 137.429 92.8647C137.429 89.829 134.928 87.3682 131.843 87.3682C128.759 87.3682 126.258 89.829 126.258 92.8647C126.258 95.9003 128.759 98.3612 131.843 98.3612Z" fill="#B6A7FC"/>
        </svg>
    ),

    instaIcon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.839 13.0638C8.839 10.7607 10.705 8.89314 13.0075 8.89314C15.31 8.89314 17.177 10.7607 17.177 13.0638C17.177 15.367 15.31 17.2346 13.0075 17.2346C10.705 17.2346 8.839 15.367 8.839 13.0638ZM6.58505 13.0638C6.58505 16.612 9.46037 19.4882 13.0075 19.4882C16.5546 19.4882 19.43 16.612 19.43 13.0638C19.43 9.51569 16.5546 6.63954 13.0075 6.63954C9.46037 6.63954 6.58505 9.51569 6.58505 13.0638ZM18.1833 6.38481C18.1832 6.68175 18.2711 6.97205 18.4359 7.21901C18.6007 7.46597 18.8351 7.65849 19.1093 7.77224C19.3835 7.88598 19.6853 7.91583 19.9764 7.85802C20.2676 7.8002 20.5351 7.65732 20.7451 7.44744C20.9551 7.23756 21.0981 6.97011 21.1561 6.6789C21.2142 6.38769 21.1846 6.08581 21.0711 5.81143C20.9576 5.53706 20.7653 5.3025 20.5186 5.13743C20.2718 4.97237 19.9817 4.8842 19.6848 4.88408H19.6842C19.2863 4.88427 18.9047 5.04242 18.6233 5.3238C18.3419 5.60519 18.1836 5.9868 18.1833 6.38481ZM7.95447 23.2476C6.73504 23.192 6.07224 22.9889 5.63178 22.8172C5.04783 22.5898 4.63118 22.319 4.19311 21.8814C3.75505 21.4438 3.48389 21.0274 3.25755 20.4433C3.08585 20.0029 2.88273 19.3397 2.8273 18.1199C2.76666 16.8012 2.75455 16.405 2.75455 13.0639C2.75455 9.72288 2.76766 9.32783 2.8273 8.00796C2.88283 6.78817 3.08745 6.12628 3.25755 5.68459C3.48489 5.10047 3.75565 4.6837 4.19311 4.24551C4.63058 3.80733 5.04683 3.53608 5.63178 3.30968C6.07204 3.13793 6.73504 2.93475 7.95447 2.8793C9.27286 2.81865 9.6689 2.80654 13.0075 2.80654C16.3461 2.80654 16.7425 2.81965 18.062 2.8793C19.2815 2.93485 19.9432 3.13953 20.3847 3.30968C20.9687 3.53608 21.3853 3.80793 21.8234 4.24551C22.2614 4.6831 22.5316 5.10047 22.7589 5.68459C22.9307 6.12498 23.1338 6.78817 23.1892 8.00796C23.2498 9.32783 23.2619 9.72288 23.2619 13.0639C23.2619 16.405 23.2498 16.8001 23.1892 18.1199C23.1337 19.3397 22.9296 20.0027 22.7589 20.4433C22.5316 21.0274 22.2608 21.4442 21.8234 21.8814C21.3859 22.3186 20.9687 22.5898 20.3847 22.8172C19.9445 22.989 19.2815 23.1921 18.062 23.2476C16.7436 23.3082 16.3476 23.3204 13.0075 23.3204C9.6674 23.3204 9.27246 23.3082 7.95447 23.2476ZM7.85091 0.628502C6.51941 0.689156 5.60956 0.900343 4.81499 1.20962C3.99209 1.529 3.29548 1.95748 2.59936 2.6527C1.90324 3.34792 1.47599 4.04584 1.15669 4.86897C0.847508 5.66427 0.636382 6.57388 0.575745 7.90577C0.514108 9.23975 0.5 9.66623 0.5 13.0638C0.5 16.4615 0.514108 16.8879 0.575745 18.2219C0.636382 19.5539 0.847508 20.4634 1.15669 21.2587C1.47599 22.0814 1.90334 22.7801 2.59936 23.475C3.29538 24.1699 3.99209 24.5978 4.81499 24.9181C5.61106 25.2274 6.51941 25.4385 7.85091 25.4992C9.18521 25.5598 9.61086 25.575 13.0075 25.575C16.4041 25.575 16.8305 25.5608 18.1641 25.4992C19.4957 25.4385 20.4049 25.2274 21.2 24.9181C22.0224 24.5978 22.7195 24.1702 23.4156 23.475C24.1118 22.7798 24.5381 22.0814 24.8583 21.2587C25.1675 20.4634 25.3796 19.5538 25.4393 18.2219C25.4999 16.8869 25.514 16.4615 25.514 13.0638C25.514 9.66623 25.4999 9.23975 25.4393 7.90577C25.3786 6.57378 25.1675 5.66377 24.8583 4.86897C24.5381 4.04634 24.1107 3.34902 23.4156 2.6527C22.7206 1.95638 22.0224 1.529 21.201 1.20962C20.4049 0.900343 19.4956 0.688155 18.1651 0.628502C16.8315 0.567848 16.4051 0.552734 13.0085 0.552734C9.61186 0.552734 9.18521 0.566847 7.85091 0.628502Z" fill="white"/>
        </svg>

    ),

    fbIcon: (
        <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6288 13.497L12.2842 9.33277H8.24687V6.62602C8.24687 5.48736 8.81052 4.37472 10.6129 4.37472H12.4743V0.828613C11.3903 0.655759 10.295 0.562245 9.19721 0.548828C5.87429 0.548828 3.70488 2.54636 3.70488 6.15754V9.33277H0.0214844V13.497H3.70488V23.5693H8.24687V13.497H11.6288Z" fill="white"/>
        </svg>
    ),

    linkedinIcon: (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_866_580" style={{ maskType: 'luminance' } as React.CSSProperties} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
            <path d="M22.1554 0.549805H0.34375V22.3615H22.1554V0.549805Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_866_580)">
            <path d="M5.28255 2.9154C5.28255 4.22191 4.33109 5.28099 2.76683 5.28099C1.29524 5.27896 0.34375 4.22191 0.34375 2.9154C0.34375 1.60891 1.32547 0.549805 2.82932 0.549805C4.33313 0.549805 5.25239 1.57618 5.28255 2.9154ZM0.466701 22.3615V7.14565H5.12937V22.3615H0.466701Z" fill="white"/>
            <path d="M7.91972 12C7.91972 10.1027 7.8594 8.51612 7.79688 7.1462H11.8467L12.0624 9.26241H12.1551C12.768 8.26656 14.2719 6.80469 16.7877 6.80469C19.8557 6.80469 22.1558 8.89019 22.1558 13.37V22.3621H17.4931V13.9301C17.4931 11.9693 16.8178 10.6323 15.1306 10.6323C13.8425 10.6323 13.0764 11.5338 12.7377 12.4048C12.6148 12.7156 12.5845 13.1511 12.5845 13.5866V22.36H7.92175V12H7.91972Z" fill="white"/>
            </g>
        </svg>
    ),

    xIcon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4128 8.13558L18.5298 0.0341797H16.8439L10.6616 7.06707L5.72748 0.0341797H0.0351562L7.49813 10.6702L0.0351562 19.1647H1.72106L8.24551 11.7361L13.4574 19.1647H19.1497M2.32954 1.27918H4.91957L16.8426 17.9809H14.2519" fill="white"/>
        </svg>
    ),

    registerStudent: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9993 13.9999C17.221 13.9999 19.8327 11.3882 19.8327 8.16659C19.8327 4.94492 17.221 2.33325 13.9993 2.33325C10.7777 2.33325 8.16602 4.94492 8.16602 8.16659C8.16602 11.3882 10.7777 13.9999 13.9993 13.9999Z" stroke="#1D1D1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.0218 25.6667C24.0218 21.1517 19.5302 17.5 14.0002 17.5C8.47018 17.5 3.97852 21.1517 3.97852 25.6667" stroke="#1D1D1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    registerCompany: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 27.5002H6.25C3.75 27.5002 2.5 26.2502 2.5 23.7502V13.7502C2.5 11.2502 3.75 10.0002 6.25 10.0002H12.5V23.7502C12.5 26.2502 13.75 27.5002 16.25 27.5002Z" stroke="#1D1D1B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.6375 5C12.5375 5.375 12.5 5.7875 12.5 6.25V10H6.25V7.5C6.25 6.125 7.375 5 8.75 5H12.6375Z" stroke="#1D1D1B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 10.0002V16.2502" stroke="#1D1D1B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.5 10.0002V16.2502" stroke="#1D1D1B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.25 21.2502H18.75C18.0625 21.2502 17.5 21.8127 17.5 22.5002V27.5002H22.5V22.5002C22.5 21.8127 21.9375 21.2502 21.25 21.2502Z" stroke="#1D1D1B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 16.25V21.25" stroke="#1D1D1B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.502 23.7502V6.25024C12.502 3.75024 13.752 2.50024 16.252 2.50024H23.752C26.252 2.50024 27.502 3.75024 27.502 6.25024V23.7502C27.502 26.2502 26.252 27.5002 23.752 27.5002H16.252C13.752 27.5002 12.502 26.2502 12.502 23.7502Z" stroke="#1D1D1B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    registerSchool: (
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1955 18.0864C13.8638 18.9051 15.8174 18.9045 17.4852 18.0849L24.9547 14.4141C26.455 13.6768 26.4425 11.5336 24.9336 10.8139L17.4219 7.23113C15.7891 6.45234 13.8921 6.45182 12.2589 7.22971L4.73456 10.8135C3.22443 11.5327 3.21185 13.6777 4.71346 14.4146L12.1955 18.0864Z" stroke="#231F20" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M23.4843 15.1374V19.8391C14.4379 28.8172 6.06055 20.0062 6.06055 20.0062V15.0771" stroke="#231F20" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M26 12L26.5899 13.618V19.0017" stroke="#231F20" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M27.7918 20.4449C27.9112 19.7773 27.4647 19.1397 26.7944 19.0207C26.1241 18.9018 25.484 19.3466 25.3646 20.0143C25.2452 20.6819 25.6918 21.3196 26.362 21.4385C27.0323 21.5574 27.6724 21.1126 27.7918 20.4449Z" stroke="#231F20" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M27.13 21.405L27.8817 24.0539C27.9723 24.3732 27.7325 24.6904 27.4007 24.6904H25.7097C25.3683 24.6904 25.1273 24.3559 25.2354 24.0321L26.1021 21.4361" stroke="#231F20" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
        </svg>
    ),
    
    research: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 19L15.1569 14.6569M15.1569 14.6569C16.6046 13.2091 17.5 11.2091 17.5 9C17.5 4.58172 13.9183 1 9.5 1C5.08172 1 1.5 4.58172 1.5 9C1.5 13.4183 5.08172 17 9.5 17C11.7091 17 13.7091 16.1046 15.1569 14.6569Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    information: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0006 1.66671C5.41732 1.66671 1.66732 5.41671 1.66732 10C1.66732 14.5834 5.41732 18.3334 10.0007 18.3334C14.584 18.3334 18.334 14.5834 18.334 10C18.334 5.41671 14.584 1.66671 10.0006 1.66671Z" stroke="#9FA6B2" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13.3334L10 9.16671" stroke="#9FA6B2" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.0039 6.66663L9.99642 6.66663" stroke="#9FA6B2" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    google: (
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.966 12.2477C21.966 11.4748 21.8966 10.7316 21.7678 10.0182H11.502V14.2345H17.3681C17.1155 15.597 16.3475 16.7514 15.1931 17.5243V20.2592H18.7158C20.7769 18.3616 21.966 15.5673 21.966 12.2477Z" fill="#4285F4"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5024 22.8997C14.4454 22.8997 16.9127 21.9236 18.7162 20.2589L15.1935 17.524C14.2174 18.178 12.9689 18.5645 11.5024 18.5645C8.6634 18.5645 6.26045 16.647 5.40331 14.0707H1.76172V16.8948C3.55526 20.4571 7.24145 22.8997 11.5024 22.8997Z" fill="#34A853"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.40252 14.0708C5.18452 13.4168 5.06065 12.7182 5.06065 11.9998C5.06065 11.2814 5.18452 10.5828 5.40252 9.92883V7.10474H1.76093C1.0227 8.57624 0.601562 10.241 0.601562 11.9998C0.601562 13.7587 1.0227 15.4234 1.76093 16.8949L5.40252 14.0708Z" fill="#FBBC05"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5024 5.43508C13.1027 5.43508 14.5395 5.98504 15.6691 7.06513L18.7954 3.93881C16.9078 2.17994 14.4404 1.09985 11.5024 1.09985C7.24145 1.09985 3.55526 3.54244 1.76172 7.10476L5.40331 9.92885C6.26045 7.35249 8.6634 5.43508 11.5024 5.43508Z" fill="#EA4335"/>
        </svg>
    ),

    passwordHide: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5112 6.27179C14.9096 5.28664 14.1507 4.40665 13.2647 3.66675L15.1307 1.80078C15.2521 1.67509 15.3193 1.50675 15.3177 1.33202C15.3162 1.15728 15.2461 0.990136 15.1226 0.866577C14.999 0.743017 14.8319 0.67293 14.6571 0.671412C14.4824 0.669894 14.3141 0.737065 14.1884 0.858459L12.1591 2.89037C10.9012 2.1432 9.46307 1.75377 8 1.76412C3.8742 1.76412 1.52307 4.58841 0.488783 6.27179C0.169253 6.7886 0 7.3842 0 7.99182C0 8.59943 0.169253 9.19503 0.488783 9.71185C1.0904 10.697 1.84927 11.577 2.73528 12.3169L0.869308 14.1829C0.805659 14.2443 0.754889 14.3179 0.719963 14.3992C0.685036 14.4805 0.666652 14.5679 0.665884 14.6564C0.665115 14.7449 0.681976 14.8327 0.715484 14.9146C0.748993 14.9965 0.798476 15.0709 0.861048 15.1334C0.92362 15.196 0.998027 15.2455 1.07993 15.279C1.16183 15.3125 1.24958 15.3294 1.33807 15.3286C1.42656 15.3278 1.514 15.3094 1.59531 15.2745C1.67661 15.2396 1.75015 15.1888 1.81163 15.1252L3.84554 13.0913C5.10192 13.8383 6.53832 14.2284 8 14.2195C12.1258 14.2195 14.4769 11.3952 15.5112 9.71185C15.8307 9.19503 16 8.59943 16 7.99182C16 7.3842 15.8307 6.7886 15.5112 6.27179ZM1.62436 9.0141C1.43452 8.70691 1.33397 8.35293 1.33397 7.99182C1.33397 7.6307 1.43452 7.27672 1.62436 6.96953C2.51337 5.52606 4.52262 3.09696 8 3.09696C9.10644 3.09076 10.1973 3.35742 11.1762 3.87334L9.83465 5.21485C9.19485 4.79007 8.42778 4.59974 7.66361 4.67614C6.89945 4.75255 6.18525 5.09098 5.64221 5.63402C5.09917 6.17707 4.76073 6.89126 4.68433 7.65543C4.60792 8.4196 4.79825 9.18666 5.22303 9.82647L3.6836 11.3659C2.8673 10.706 2.17072 9.91041 1.62436 9.0141ZM9.99926 7.99182C9.99926 8.52205 9.78862 9.03057 9.41369 9.40551C9.03876 9.78044 8.53024 9.99108 8 9.99108C7.70312 9.98993 7.41035 9.92158 7.14365 9.79115L9.79933 7.13547C9.92976 7.40217 9.99811 7.69494 9.99926 7.99182ZM6.00074 7.99182C6.00074 7.46158 6.21138 6.95306 6.58631 6.57813C6.96124 6.20319 7.46976 5.99256 8 5.99256C8.29688 5.99371 8.58965 6.06206 8.85635 6.19248L6.20067 8.84817C6.07024 8.58147 6.00189 8.2887 6.00074 7.99182ZM14.3756 9.0141C13.4866 10.4576 11.4774 12.8867 8 12.8867C6.89356 12.8929 5.80266 12.6262 4.82384 12.1103L6.16535 10.7688C6.80515 11.1936 7.57222 11.3839 8.33639 11.3075C9.10055 11.2311 9.81475 10.8926 10.3578 10.3496C10.9008 9.80657 11.2393 9.09237 11.3157 8.3282C11.3921 7.56404 11.2017 6.79697 10.777 6.15716L12.3164 4.61773C13.1327 5.27768 13.8293 6.07323 14.3756 6.96953C14.5655 7.27672 14.666 7.6307 14.666 7.99182C14.666 8.35293 14.5655 8.70691 14.3756 9.0141Z" fill="#9FA6B2"/>
        </svg>
    ),

    passWordShow: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3866 8C10.3866 9.32 9.31995 10.3867 7.99995 10.3867C6.67995 10.3867 5.61328 9.32 5.61328 8C5.61328 6.68 6.67995 5.61333 7.99995 5.61333C9.31995 5.61333 10.3866 6.68 10.3866 8Z" stroke="#9FA6B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.9999 13.5133C10.3532 13.5133 12.5466 12.1267 14.0732 9.72667C14.6732 8.78667 14.6732 7.20667 14.0732 6.26667C12.5466 3.86667 10.3532 2.48 7.9999 2.48C5.64656 2.48 3.45323 3.86667 1.92656 6.26667C1.32656 7.20667 1.32656 8.78667 1.92656 9.72667C3.45323 12.1267 5.64656 13.5133 7.9999 13.5133Z" stroke="#9FA6B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    attention: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V14" stroke="#C30000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9994 21.41H5.93944C2.46944 21.41 1.01944 18.93 2.69944 15.9L5.81944 10.28L8.75944 5.00003C10.5394 1.79003 13.4594 1.79003 15.2394 5.00003L18.1794 10.29L21.2994 15.91C22.9794 18.94 21.5194 21.42 18.0594 21.42H11.9994V21.41Z" stroke="#C30000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9941 17H12.0031" stroke="#C30000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

};

type IconProps = {
    name: keyof typeof icons;
};

const Icon: React.FC<IconProps> = ({ name }) => {
    return icons[name] || null;
};

export default Icon;