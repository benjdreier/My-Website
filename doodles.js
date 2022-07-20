let DOODLE_PATHS = [
  {
    name: "bouncyarrow",
    speed: 100 / 1000,
    pathList: [ "M0.441528 57.1661C2.74403 49.2945 5.80364 42.3799 10.6899 35.806C13.4217 32.1307 16.6328 28.0531 20.8114 25.9005C27.3346 22.5401 24.3263 31.45 23.3651 34.5262C21.1688 41.5559 19.1946 48.627 17.1407 55.6984C16.7376 57.0861 15.5582 61.2538 15.8656 59.8418C16.5865 56.5301 18.1765 53.1466 19.6704 50.1315C23.8163 41.7643 29.6943 32.3539 36.9179 26.2513C39.3361 24.2084 41.1917 23.9172 40.5228 27.8639C38.7095 38.5636 34.0796 48.6849 31.5722 59.2372C31.0117 61.5964 30.6634 62.8382 32.3445 60.1926C36.5442 53.583 41.0762 47.2348 46.1918 41.2999C54.0891 32.1376 62.5831 23.3559 71.6703 15.3677C78.0002 9.80325 84.6755 4.28555 92.2461 0.513092",
                "M90.1126 0.685474C85.3914 2.4363 80.67 4.17214 75.9325 5.87885",
                "M74.7472 6.91321C78.7247 7.08814 81.4453 7.12379 84.7777 9.15913C85.7829 9.77312 87.5776 11.2244 88.8196 11.2015C89.7424 11.1845 89.4334 8.33619 89.4708 7.75364C89.6306 5.26606 90.7651 3.55425 92.1383 1.569"]
  },
  {
    name: "squigglyarrow",
    speed: 100 / 1000,
    pathList: [ "M0.746735 34.5184C12.2021 40.1368 19.6014 41.495 29.6823 33.0404C36.0718 27.6817 42.1501 19.6964 45.0862 11.851C46.7881 7.30351 40.6898 12.0318 39.6346 13.0432C27.4261 24.7444 22.6035 43.8023 31.4757 58.851C37.2579 68.6586 47.5163 67.3307 56.3712 62.5164C69.8751 55.1746 77.5257 39.8696 80.2223 25.2514C81.1193 20.3886 84.6829 5.82289 78.8378 2.65785C73.9949 0.0354855 72.0976 9.61317 71.6643 12.5431C71.0465 16.7204 70.0313 25.7894 73.1645 29.1607C77.6582 33.9957 86.6118 27.5772 89.8445 24.3227C95.9834 18.1424 100.46 9.32842 104.943 1.91147C105.273 1.36535 101.764 3.3297 101.147 3.66784C99.3793 4.63577 97.2951 4.84168 95.6089 5.96364C94.3579 6.79605 88.7443 12.6083 93.6037 10.5208C95.3164 9.785 103.323 1.07071 103.701 1.3055C105.246 2.26341 104.699 13.9403 104.581 16.0977C104.296 21.2928 97.1835 12.0461 96.4366 10.6636"]
  },
  {
    name: "burstwithmanypaths",
    speed: 100 / 1000,
    pathList: [ "M61.611 0.376343C62.2045 4.50058 62.5674 8.63621 63.3789 12.7515",
                "M58.0753 2.14417C58.0753 2.2633 58.0753 15.2318 58.0753 15.4033",
                "M51.8877 3.0282C51.8877 6.90155 51.8877 9.92652 51.8877 13.6355",
                "M44.8162 3.91211C44.8162 7.73475 44.8162 19.379 44.8162 15.5106",
                "M37.7447 3.91211C37.7447 7.44259 37.7447 10.9045 37.7447 14.3902C37.7447 14.7933 37.7447 16.9031 37.7447 17.1712",
                "M29.7892 9.2157C29.9367 11.8716 29.8221 14.0677 31.5067 16.4102C31.8619 16.9042 32.325 17.5024 32.4411 18.0551",
                "M24.4856 9.2157C24.9993 12.318 28.2569 21.2054 26.7365 18.3985",
                "M18.298 11.8676C18.6759 13.816 18.5354 18.3448 21.8338 19.823",
                "M13.8783 14.5194C15.2118 18.7965 17.4057 22.0226 19.1819 26.0106",
                "M5.03894 37.5017L11.2265 38.3856",
                "M0.619263 43.6894C5.62828 43.4066 10.633 42.8054 15.6462 42.8054",
                "M1.50317 48.9504C7.03917 48.9939 12.8731 49.1935 18.298 48.109",
                "M5.03894 56.0645C9.25084 55.7658 14.3369 55.7425 18.298 54.2966",
                "M6.80682 64.9039C10.953 64.1502 14.9373 63.2374 19.182 63.136",
                "M13.8783 72.8593C18.2668 71.0316 22.9915 69.586 26.2534 66.6718",
                "M21.8337 79.9308C25.68 76.1297 28.9178 71.916 31.5571 67.5557",
                "M35.9768 68.4397C34.4511 72.5582 33.35 76.7751 31.5571 80.8148",
                "M39.9926 67.5557C39.334 70.9904 38.4472 74.4348 38.6611 77.8735C38.6713 78.0375 39.8654 80.0491 40.3965 79.9253",
                "M45.756 68.4397C45.8236 70.3983 45.0903 79.7667 47.468 80.8148",
                "M53.6556 67.5557C54.1301 71.1084 54.5149 74.7069 55.3589 78.2313C55.4451 78.5912 55.5896 79.9309 56.3074 79.9308",
                "M61.611 66.6718C62.4751 68.7447 63.3598 70.8042 64.2628 72.8593",
                "M65.1468 64.9039C68.0891 68.3767 70.8146 72.1882 73.9862 75.5112",
                "M73.9862 64.9039C74.2762 65.0561 86.0646 72.1222 87.2453 70.9631",
                "M81.9417 61.3682C85.0819 63.0797 91.4617 68.2097 96.0847 68.4397",
                "M89.0131 56.0645C92.8691 57.1863 96.8715 58.2044 100.504 59.6002",
                "M69.5665 2.14417C69.5665 6.56904 69.5665 10.9877 69.5665 15.4033",
                "M73.9862 4.79602C73.6421 9.24637 73.3175 13.6819 72.2183 18.0551",
                "M93.4329 45.4301C100.557 45.475 107.631 45.5831 114.647 44.5732",
                "M95.2007 49.877C100.845 50.7258 106.325 51.2183 111.996 51.6448",
                "M93.4329 51.6448C98.6633 54.217 103.937 56.4626 109.344 58.7163",
                "M89.0131 58.7163C93.4288 61.0789 97.849 63.4352 102.272 65.7878",
                "M81.9417 64.9039L89.0132 70.2076",
                "M70.4504 64.0199L81.9416 75.5111",
                "M58.0753 67.5557L64.2628 79.9308",
                "M50.1198 67.5557V79.9308",
                "M5.03894 58.7163C10.9758 59.4159 15.9201 59.9334 21.8338 59.3429",
                "M77.5219 17.1712C79.8562 14.4775 82.1554 10.4744 85.4774 8.33179",
                "M77.5219 22.4748C80.9149 20.1573 85.0458 18.0297 88.1292 15.4033",
                "M81.9417 25.1266C86.3207 22.4829 91.0125 20.0596 95.2007 17.1711",
                "M87.2452 27.7784C91.9031 26.7911 96.5254 25.6704 101.388 25.1266",
                "M90.781 32.1982C95.1701 31.7193 99.7492 31.5059 104.04 30.4303",
                "M91.665 38.805C97.4359 38.7888 103.597 37.6142 109.344 39.2697",
                "M95.2007 42.8054C99.617 43.4699 104.003 44.0409 108.46 44.5733",
                "M5.03894 35.7338C9.78009 32.4791 11.3278 32.3997 16.0226 34.5208C17.1882 35.0474 18.9659 36.2511 20.0659 35.2529",
                "M5.03894 27.7784C8.53593 29.15 12.5195 30.1418 15.6462 32.1981",
                "M5.92285 21.5908C8.80408 24.014 11.7364 26.3511 14.7622 28.6623"]
  }

]