from flask import Flask, render_template, redirect, request, jsonify
from mysqlconnection import connectToMySQL
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

#  create for rendering a template after ajax
# @app.route("/pets", methods=["post"])
# def create():
#     print(request.form)
#     mysql = connectToMySQL('pets')
#     query = "INSERT INTO pets (name, type) VALUES (%(name)s, %(type)s);"
#     data = {
#         "name": request.form["name"],
#         "type": request.form["type"]
#     }
#     pet_id = mysql.query_db(query, data)
#     return redirect("/pets")
    
# create for return json
@app.route("/pets", methods=["post"])
def create():
    print(request.form)
    mysql = connectToMySQL('pets')
    query = "INSERT INTO pets (name, type) VALUES (%(name)s, %(type)s);"
    data = {
        "name": request.form["name"],
        "type": request.form["type"]
    }
    pet_id = mysql.query_db(query, data)
    new_pet = {
        "id": pet_id,
        "name": request.form["name"],
        "type": request.form["type"]
    }
    return jsonify(new_pet)

@app.route("/pets")
def get_pets():
    mysql = connectToMySQL('pets')
    query = "SELECT * FROM pets;"
    all_pets = mysql.query_db(query)
    return render_template("pets.html", pets = all_pets)

app.run(debug=True)