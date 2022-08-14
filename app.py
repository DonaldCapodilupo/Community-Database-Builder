from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


# @app.route('/Results', methods=["POST", "GET"])
# def results():
#    if request.method == "POST":
#        pass
#    else:
#        return render_template("data.html")

@app.route('/', methods=["POST", "GET"])
def main_Menu():
    if request.method == "POST":
        if request.form['submit_button'] == 'upload_plates_button':
            return redirect(url_for("dashboard"))
        elif request.form['submit_button'] == 'record_likes_button':
            return redirect(url_for("likes_Scraper"))

    else:
        return render_template("main.html")


@app.route('/Likes-Scraper', methods=["POST", "GET"])
def likes_Scraper():
    if request.method == "POST":
        if request.form['submit_button'] == 'get_likes':
            from Backend import get_Facebook_Interests
            print(str(request.form["text_to_scrape"]))
            likes_data = get_Facebook_Interests(str(request.form["text_to_scrape"]))
            return render_template("Likes_Scraper.html", data=likes_data)
        elif request.form['submit_button'] == 'go_back':
            return  redirect(url_for("main_Menu"))
    else:
        return render_template("Likes_Scraper.html", data=[])


@app.route('/Dashboard', methods=["POST", "GET"])
def dashboard():
    from Backend import vehicles, colors, csvToDatabase
    if request.method == "POST":
        if request.form['submit_button'] == 'upload_plate':
            from Backend import writeToCSV, today, licensePlateInformation

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
