from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


#@app.route('/Results', methods=["POST", "GET"])
#def results():
#    if request.method == "POST":
#        pass
#    else:
#        return render_template("data.html")


@app.route('/', methods=["POST", "GET"])
def main_Menu():
    from Backend import vehicles, colors, csvToDatabase
    if request.method == "POST":
        if request.form['save_button'] == 'save_button':
            from Backend import writeToCSV, today, licensePlateInformation

            writeToCSV([today,
                        request.form.get("House_Number"),
                        request.form.get("Street"),
                        request.form.get("Brand"),
                        request.form.get("Color"),
                        request.form.get("License Plate #")
                        ])

            return render_template("Dashboard.html", confirmation=request.form.get("License Plate #"),data=csvToDatabase())
    else:

        return render_template("Dashboard.html", data=csvToDatabase())


if __name__ == '__main__':
    app.run(debug=True,TEMPLATES_AUTO_RELOAD=True)
