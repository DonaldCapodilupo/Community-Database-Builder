from flask import Flask, render_template, request, redirect, url_for, Response

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

    else:
        return render_template("main.html")


@app.route('/View-Users', methods=["POST", "GET"])
def view_Users():
    from Backend import get_Current_Personnel
    if request.method == "POST":
        if request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
        elif request.form['submit_button'] == 'search':
            from Backend import get_User_Json
            user_search_choice = request.form.get("user_choice_preview")

            user_photo_src = user_search_choice.replace(" ","_") +".jpg"
            user_data = get_User_Json(request.form.get("user_choice_preview"))
            personnel = get_Current_Personnel()

            return render_template("View-Users.html", data= personnel, user_information = user_data, user_img = user_photo_src)

    else:
        personnel = get_Current_Personnel()
        return render_template("View-Users.html", data= personnel)




@app.route('/Add-User', methods=["POST", "GET"])
def add_User():
    if request.method == "POST":
        if request.form['submit_button'] == 'upload_new_user':
            from werkzeug.utils import secure_filename
            from Backend import write_New_Personal_File
            import os

            app.config['UPLOAD_FOLDER'] = 'static/uploads'

            personnel_info = {"Name":request.form.get("new_username"),
                              "Dob":request.form.get("date_of_birth"),
                              "Gender":request.form.get("gender"),
                              "Address":request.form.get("address"),
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


            write_New_Personal_File(personnel_info,personnel_info["Photo"])

            return render_template("Add-User.html" , confirrmation=request.form.get("new_username"))
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
    else:
        return render_template("Add-User.html")


@app.route('/Plate-Scanner', methods=["POST", "GET"])
def plates_Scraper():
    if request.method == "POST":
        if request.form['submit_button'] == 'scan_plate':
            from Backend import get_screenshot
            plate_num = get_screenshot()
            print(plate_num)
            return render_template("Plate_Scraper.html", data=plate_num)
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
    else:
        return render_template("Plate_Scraper.html", data=[])


@app.route('/Likes-Scraper', methods=["POST", "GET"])
def likes_Scraper():
    if request.method == "POST":
        if request.form['submit_button'] == 'get_likes':
            from Backend import get_Facebook_Interests
            print(str(request.form["text_to_scrape"]))
            likes_data = get_Facebook_Interests(str(request.form["text_to_scrape"]))
            return render_template("Likes_Scraper.html", data=likes_data)
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))
    else:
        return render_template("Likes_Scraper.html", data=[])


@app.route('/Dashboard', methods=["POST", "GET"])
def dashboard():
    from Backend import vehicles, colors, csvToDatabase
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
                                   data=csvToDatabase())
        elif request.form['submit_button'] == 'go_back':
            return redirect(url_for("main_Menu"))

    else:

        return render_template("Dashboard.html", data=csvToDatabase())


if __name__ == '__main__':
    app.run(debug=True, TEMPLATES_AUTO_RELOAD=True)
