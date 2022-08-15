import sqlite3, datetime

vehicles = (
    'Toyota', 'Honda', 'Chevrolet', 'Ford', 'Mercedes-Benz', 'Jeep', 'BMW', 'Porsche', 'Subaru', 'Nissan', 'Cadillac',
    'Volkswagen', 'Lexus', 'Audi', 'Volvo', 'Jaguar', 'GMC', 'Buick', 'Acura', 'Dodge', 'Hyundai',
    'Lincoln', 'Mazda', 'Land Rover', 'Tesla', 'Ram Trucks', 'Kia', 'Chrysler', 'Pontiac', 'Infiniti', 'Mitsubishi',
    'Oldsmobile', 'Fiat', 'Mini Cooper', 'Suzuki')

colors = ("Black", "Silver", "White", "Grey", "Red", "Blue", "Brown", "Green", "Beige", "Orange", "Gold", "Yellow",
          "Purple")

today = str(datetime.date.today())


# For iPhone
class ListDisplay:
    def __init__(self, listToDisplay):
        self.listToDisplay = listToDisplay

    def displayList(self, addExit=True):
        print("Which option would you like to choose")
        s = 1  # This is the counter to display in the output string.
        for i in self.listToDisplay:  # Loop through the menu options
            print(str(s) + ") " + i)  # Display all of the items in the list as a menu
            s += 1
        if addExit:
            print(str(s) + ") Exit")
            s += 1
        userChoice = int(input(">"))  # Prompt the user to enter a number
        # Reruns the prompt if the user enters a number that is to big
        if userChoice == len(self.listToDisplay) + 1:
            exit()
        while userChoice > len(self.listToDisplay):
            print("Invalid data. Please enter a valid number")
            print()
            print("Which option would you like to choose")
            s = 1  # This is the counter
            for i in self.listToDisplay:  # Loop through the menu options
                print(str(s) + ") " + i)  # Display all of the items in the list as a menu
                s += 1
            if addExit:
                print(str(s) + ") Exit")
                s += 1
            userChoice = int(input(">"))
            if userChoice == len(self.listToDisplay) + 1:
                exit()
        # Closes the program if the user selects "Exit"
        # At some point I would like it to step back one function
        if userChoice == (s - 1) and self.listToDisplay[-1] == "Exit":
            print("Exiting")
            exit()
        # Converts the users numerical entry into the string version of the option selected.
        userChoiceFINAL = self.listToDisplay[(int(userChoice) - 1)]
        # Return the variable
        return userChoiceFINAL


def read_Database(database, table):
    import pandas as pd

    con = sqlite3.connect(database)
    df = pd.read_sql_query("SELECT * from " + table, con)
    con.close()

    return df


def licensePlateInformation(user_Plate_Value):
    while len(user_Plate_Value) < 6:
        user_Plate_Value = user_Plate_Value + "%"
    return user_Plate_Value[:3].upper() + " " + user_Plate_Value[3:].upper()

    # while len(user_Plate_Value) != 6:
    #    print("Invalid Number Of Characters -- Only 6 Allowed -- Try Again")
    #    user_Plate_Value = input("What is the license plate number of the "+ vehicle + "?: ").upper().replace(" ","")
    # correct_Format = user_Plate_Value[:3] + " " + user_Plate_Value[3:]
    # print("Recording as: " + correct_Format)
    # return correct_Format


def writeToCSV(listOfInfo):
    import csv
    document = open('data.csv', 'a', newline='')
    writer = csv.writer(document)
    writer.writerow(listOfInfo)
    document.close()


def csvToDatabase():
    import pandas as pd
    data = pd.read_csv("data.csv").to_html(classes="table", index=False, table_id="datatable").replace("<thead>",
                                                                                                       "<thead class='thead-light'>")
    text_file = open("templates/data.html", "w")
    text_file.write(data)
    text_file.close()

    return data


def get_screenshot():
    import time
    import pytesseract
    import cv2
    import os
    import pygetwindow as gw
    from PIL import Image

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


def get_Facebook_Interests(html_user_input):
    from bs4 import BeautifulSoup

    return_List = []

    # paste div starting with j83agx80 into test.html

    soup = BeautifulSoup(html_user_input, 'html.parser')

    spans = soup.find_all(
        class_="d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d3f4x2em iv3no6db jq4qci2q a3bd9o3v lrazzd5p oo9gr5id hzawbc8m")

    for text in spans:
        print(text.string)
        return_List.append(text.string)

    return return_List


def write_New_Personal_File(information_dict, pic):
    with open("Users/" + information_dict["Name"]+'.txt', 'w') as f:
        for datapoint, value in information_dict.items():
            f.write(datapoint + ": " + value +  '\n')


if __name__ == '__main__':
    pass
