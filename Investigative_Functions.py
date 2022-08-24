
#These functions are all related to capturing information.

#Facebook scraper application and is also a part of For the personnel logging application.
def scrape_Facebook_Likes(html_user_input, likes_div):
    from bs4 import BeautifulSoup

    return_List = []

    # paste div starting with j83agx80 into test.html

    soup = BeautifulSoup(html_user_input, 'html.parser')

    spans = soup.find_all(
        class_=likes_div)
    #class_="d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d3f4x2em iv3no6db jq4qci2q a3bd9o3v lrazzd5p oo9gr5id hzawbc8m")


    for text in spans:
        print(text.string)
        return_List.append(text.string)

    return return_List

#Run OBS, wait for a screenshot to be taken, and then attempt to OCR the screenshot. For plate scanning application.
def screenshot_OBS_Attempt_OCR():
    import time
    import pytesseract
    import cv2
    import os
    import pygetwindow as gw
    #from PIL import Image

    win_obs = gw.getWindowsWithTitle('Fullscreen Projector')[0]
    win_app = gw.getWindowsWithTitle('Plate Scraper')[0]
    win_obs.maximize()
    win_obs.activate()

    check_directory = os.listdir("Screenshots")
    while len(check_directory) < 2:
        time.sleep(1.5)
        print("Nothing uploaded yet.")
        check_directory = os.listdir("Screenshots")

    win_app.maximize()
    win_app.activate()
    print(check_directory[1] + " was found in directory.")

    ##############################ONLY NEEDED IN TESTING - DUAL MONITORS.###############################################
    # im = Image.open("Screenshots/" + check_directory[1])
    #
    # width, height = im.size
    # left = 0
    # top = 0
    # right = 1920
    # bottom =  1080
    #
    # im1 = im.crop((left,top,right,bottom))
    # im1.save("Screenshots/" + check_directory[1])
    ####################################################################################################################
    img = cv2.imread("Screenshots/" + check_directory[1], 0)

    pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

    text = (pytesseract.image_to_string(img)).lower()

    # Adding custom options

    print(text)
    possible_plate_data = [line_item.strip("").upper() for line_item in text.split("\n") if
                           4 < len(line_item) < 9 and line_item != ""]

    os.remove("Screenshots/" + check_directory[1])
    return possible_plate_data
