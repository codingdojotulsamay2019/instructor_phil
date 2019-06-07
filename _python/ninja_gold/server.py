from flask import Flask, render_template, redirect, request, session
from random import randint
from datetime import datetime

app = Flask(__name__)
app.secret_key = "mysupersecretkey"

@app.route("/")
def index():
    if 'gold' not in session:
        session['gold'] = 0
        session['activities'] = []
    return render_template("index.html")

@app.route("/process", methods=["post"])
def process():
    print(request.form)
    gold = 0
    building = ""
    if request.form["building"] == 'farm':
        # random num between 10-20
        gold = randint(10, 21)
        building = 'farm'
        session['gold'] += gold
    elif request.form["building"] == 'cave':
        # random num between 5-10
        gold = randint(5, 11)
        building = 'cave'
        session['gold'] += gold
    elif request.form["building"] == 'house':
        # random num between 2-5
        gold = randint(2, 6)
        building = 'house'
        session['gold'] += gold
    elif request.form["building"] == 'casino':
        # random num between -50:50
        gold = randint(-50, 51)
        building = 'casino'
        session['gold'] += gold

    time = datetime.now()
    time = time.strftime("%Y/%m/%d %I:%M %p")

    if gold < 0:
        # lost at the casion
        result = f'Entered a casino and lost {abs(gold)} golds...ouch....{time}'
        color = "text-danger"
    else:
        # earned some gold
        result = f'Earned {gold} golds from the {building}, {time}'
        color = 'text-success'

    session['activities'].append({"result": result, "color":color})
    return redirect("/")

app.run(debug=True)