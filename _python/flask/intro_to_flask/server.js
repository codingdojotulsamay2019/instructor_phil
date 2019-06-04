from flask import Flask

app = Flask(__name__)


print("flask server is set up")

@app.route("/")
def index():
    return "Index method was invoked"

@app.route("/cats")
def cats():
    return "cats route invoked"

def route:
    pass



app.run(debug=True)