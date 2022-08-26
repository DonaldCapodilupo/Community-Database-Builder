from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

@app.route('/', methods=["POST", "GET"])
def main_Menu():
    if request.method == "POST":
        if request.form['submit_button'] == 'upload_plates_button':
            return redirect(url_for("dashboard"))
        elif request.form['submit_button'] == 'record_likes_button':
            return redirect(url_for("likes_Scraper"))
        elif request.form['submit_button'] == 'scan_plates':
            return redirect(url_for("plates_Scraper"))
        elif request.form['submit_button'] == 'add_user':
            return redirect(url_for("add_User"))
        elif request.form['submit_button'] == 'view_users':
            return redirect(url_for("view_Users"))
        elif request.form['submit_button'] == 'update_user':
            return redirect(url_for("update_User"))
        elif request.form['submit_button'] == 'delete_users':
            return redirect(url_for("delete_User"))

    else:
        return render_template("main.html")

#Personnel Database Add User
@app.route('/Add-User', methods=["POST", "GET"])
def add_User():
    if request.method == "POST":
        if request.form['submit_button'] == 'upload_new_user':
            from werkzeug.utils import secure_filename
            from Backend import create_JSON_Personal_File
            from Investigative_Functions import scrape_Facebook_Likes
            import os

            app.config['UPLOAD_FOLDER'] = 'static/uploads'

            personnel_info = {"Name":request.form.get("new_username"),
                              "Dob":request.form.get("date_of_birth"),
                              "Gender":request.form.get("gender"),
                              "Address":request.form.get("address"),
                              "Hair Color": request.form.get("hair_color"),
                              "Eye Color": request.form.get("eye_color"),
                              "Height": request.form.get("height"),
                              "Weight": request.form.get("address"),
                              "Employer":request.form.get("employer"),
                              "Marital Status":request.form.get("marital_status"),
                              "Education":request.form.get("education"),
                              "Languages":request.form.get("languages"),
                              "Political Affiliation":request.form.get("political_affiliation"),
                              "Family Members":request.form.get("family_members"),
                              "Confirmed Criminal Activity":request.form.get("confirmed_criminal_activity"),
                              "Possible Criminal Activity":request.form.get("possible_criminal_activity"),
                              }

            uploaded_file = request.files['user_img']
            if uploaded_file.filename != '':
                filename = secure_filename(request.form.get("new_username")) +'.jpg'
                personnel_info["Photo"] = filename
                uploaded_file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))


            print(str(request.form["text_to_scrape"]))
            likes_data = scrape_Facebook_Likes(str(request.form["text_to_scrape"]), str(request.form["div_to_scrape"]))
            personnel_info["Likes"] = likes_data

            create_JSON_Personal_File(personnel_info, personnel_info["Photo"])

            return render_template("Add-User.html" , confirrmation=request.form.get("new_username"))
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
    else:
        return render_template("Add-User.html")
#Personnel Database View Users
@app.route('/View-Users', methods=["POST", "GET"])
def view_Users():
    from Backend import get_All_Current_Personnel
    if request.method == "POST":
        if request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
        elif request.form['submit_button'] == 'search':
            from Backend import read_JSON_Personal_File
            user_search_choice = request.form.get("user_choice_preview")

            user_photo_src = user_search_choice.replace(" ","_") +".jpg"
            user_data = read_JSON_Personal_File(request.form.get("user_choice_preview"))
            personnel = get_All_Current_Personnel()

            return render_template("View-Users.html", data= personnel, user_information = user_data, user_img = user_photo_src)

    else:
        personnel = get_All_Current_Personnel()
        return render_template("View-Users.html", data= personnel)
#Personnel Database Update and Delete Users
@app.route('/Update-User', methods=["POST", "GET"])
def update_User():
    from Backend import get_All_Current_Personnel
    if request.method == "POST":
        if request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
        elif request.form['submit_button'] == 'search':
            from Backend import read_JSON_Personal_File
            user_search_choice = request.form.get("user_choice_preview")

            user_photo_src = user_search_choice.replace(" ","_") +".jpg"
            user_data = read_JSON_Personal_File(request.form.get("user_choice_preview"))
            personnel = get_All_Current_Personnel()

            return render_template("Update-User.html", data= personnel, user_information = user_data, user_img = user_photo_src)
        elif request.form['submit_button'] == 'update_user':
            from Backend import updated_JSON_Personnel_File
            from werkzeug.utils import secure_filename
            data_to_store = request.form.getlist("user_info")
            updated_JSON_Personnel_File(data_to_store)
            print(data_to_store)

            app.config['UPLOAD_FOLDER'] = 'static/uploads'

            uploaded_file = request.files['user_img']
            if uploaded_file.filename != '':
                filename = secure_filename(data_to_store[0]) + '.jpg'
                uploaded_file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            personnel = get_All_Current_Personnel()
            return render_template("Update-User.html", data=personnel)
        elif request.form['submit_button'] == 'delete_user':
            from Backend import delete_JSON_Personnel_File

            delete_JSON_Personnel_File(request.form.getlist("user_info")[0])

            personnel = get_All_Current_Personnel()

            return render_template("Update-User.html", data=personnel)


    else:
        personnel = get_All_Current_Personnel()
        return render_template("Update-User.html", data= personnel)

#OBS to OCR Application
@app.route('/Plate-Scanner', methods=["POST", "GET"])
def plates_Scraper():
    if request.method == "POST":
        if request.form['submit_button'] == 'scan_plate':
            from Investigative_Functions import screenshot_OBS_Attempt_OCR
            plate_num = screenshot_OBS_Attempt_OCR()
            print(plate_num)
            return render_template("Plate_Scraper.html", data=plate_num)
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
    else:
        return render_template("Plate_Scraper.html", data=[])

#Scrape Facebook Likes
@app.route('/Likes-Scraper', methods=["POST", "GET"])
def likes_Scraper():
    if request.method == "POST":
        if request.form['submit_button'] == 'get_likes':
            from Investigative_Functions import scrape_Facebook_Likes
            print(str(request.form["text_to_scrape"]))
            print(str(request.form["div_to_scrape"]))
            likes_data = scrape_Facebook_Likes(str(request.form["text_to_scrape"]), str(request.form["div_to_scrape"]))
            return render_template("Likes_Scraper.html", data=likes_data)
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
    else:
        return render_template("Likes_Scraper.html", data=[])

#Manual License Plate Recording Software
@app.route('/Dashboard', methods=["POST", "GET"])
def dashboard():
    from Backend import csv_To_HTML
    if request.method == "POST":
        if request.form['submit_button'] == 'upload_plate':
            from Backend import writeToCSV, today

            writeToCSV([today,
                        request.form.get("House_Number"),
                        request.form.get("Street"),
                        request.form.get("Brand"),
                        request.form.get("Model"),
                        request.form.get("Color"),
                        request.form.get("License Plate #")
                        ])

            return render_template("Dashboard.html", confirmation=request.form.get("License Plate #"),
                                   data=csv_To_HTML())
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))

    else:

        return render_template("Dashboard.html", data=csv_To_HTML())


if __name__ == '__main__':
    app.run(debug=True, TEMPLATES_AUTO_RELOAD=True)
