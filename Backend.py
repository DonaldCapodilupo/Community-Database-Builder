import datetime, os


today = str(datetime.date.today())

#For the license plate logging application. Possibly will be replacing with JSON/Databases.
def writeToCSV(listOfInfo):
    import csv
    document = open('Car_Database.csv', 'a', newline='')
    writer = csv.writer(document)
    writer.writerow(listOfInfo)
    document.close()

#For the license plate logging application.
def csv_To_HTML():
    import pandas as pd
    data = pd.read_csv("data.csv").to_html(classes="table table-dark", index=False, table_id="datatable").replace("<thead>",
                                                                                                       "<thead class='thead-light'>")
    text_file = open("templates/data.html", "w")
    text_file.write(data)
    text_file.close()

    return data


#For the personnel logging application.
def create_JSON_Personal_File(information_dict, pic):
    import json
    with open("Users/" + information_dict["Name"]+'.json', 'w') as outfile:
        json.dump(information_dict,outfile)

#For the personnel logging application.
def read_JSON_Personal_File(user):
    import json

    with open('Users/' + user +'.json') as json_file:
        data = json.load(json_file)
    print(data)

    return data

#For the personnel logging application. Currently only updates one value at a time.
def updated_JSON_Personnel_File(info_list):
    import json

    user = "Users/" + info_list[0] + ".json"
    print(user)
    with open(user, "r") as jsonFile:
        data = json.load(jsonFile)


    for index, key in enumerate(data.keys()):
        try:
            data[key] = info_list[index]
        except IndexError as e:
            print("Error: " + str(e))
            print("Index: " + str(index) + " Key: " + key)
            pass

    with open(user, "w") as jsonFile:
        json.dump(data, jsonFile)

def delete_JSON_Personnel_File(user):
    os.replace("Users/" + user + ".json", "Retired Users/" + user + ".json")

#For the personnel viewing application
def get_All_Current_Personnel():
    personnel = [x.replace(".json","") for x in os.listdir("Users")]
    return personnel

if __name__ == '__main__':
    delete_JSON_Personnel_File("Don Capodilupo")
