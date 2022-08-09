import sqlite3, datetime


vehicles = (
'Toyota', 'Honda', 'Chevrolet', 'Ford', 'Mercedes-Benz', 'Jeep', 'BMW', 'Porsche', 'Subaru', 'Nissan', 'Cadillac',
'Volkswagen', 'Lexus', 'Audi', 'Volvo', 'Jaguar', 'GMC', 'Buick', 'Acura', 'Dodge', 'Hyundai',
'Lincoln', 'Mazda', 'Land Rover', 'Tesla', 'Ram Trucks', 'Kia', 'Chrysler', 'Pontiac', 'Infiniti', 'Mitsubishi',
'Oldsmobile', 'Fiat', 'Mini Cooper', 'Suzuki')

colors = ("Black", "Silver", "White", "Grey", "Red", "Blue", "Brown", "Green", "Beige", "Orange", "Gold", "Yellow",
          "Purple")

today = str(datetime.date.today())

#For iPhone
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

    #while len(user_Plate_Value) != 6:
    #    print("Invalid Number Of Characters -- Only 6 Allowed -- Try Again")
    #    user_Plate_Value = input("What is the license plate number of the "+ vehicle + "?: ").upper().replace(" ","")
    #correct_Format = user_Plate_Value[:3] + " " + user_Plate_Value[3:]
    #print("Recording as: " + correct_Format)
    #return correct_Format

def writeToCSV(listOfInfo):
    import csv
    document = open('data.csv', 'a', newline='')
    writer = csv.writer(document)
    writer.writerow(listOfInfo)
    document.close()

def csvToDatabase():
    import pandas as pd
    data = pd.read_csv("data.csv").to_html(classes="table", index=False, table_id="datatable").replace("<thead>", "<thead class='thead-light'>")
    text_file = open("templates/data.html", "w")
    text_file.write(data)
    text_file.close()


    return data


information = {
    "House":{
        "Occupants":0,
        "Occupant Names":[],
        "Pets":0,
        "Pet Names":[],
    },
    "People":{
        "Name":["Interests","Political Affiliations","Sources"],
    },
    "Vehicles":{
        "Color":"",
        "Brand":"",
        "Type":"",
        "License Plate":"",
    }
}


if __name__ == '__main__':
    pass