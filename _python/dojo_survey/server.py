from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key="MySuperSecretKey"

@app.route("/")
def index():
    # return some html
    return render_template("index.html")

@app.route("/process", methods=['post'])
def process():
    # if 'key' in request.form:
    #     print('key is found')
    # else:
    #     print('key is not part of the form')
    session['user'] = request.form
    print(request.form)
    return redirect("/success")
    
@app.route("/success")
def success():
    if 'user' in session:
        print(session['user'])
        print('*'*90)
        return render_template("success.html", name=session['user']['name'], location=session['user']['location'], language=session['user']['language'], comment=session['user']['comment'])
    else:
        return redirect("/")

@app.route("/clear_form")
def clear_form():
    # clear/empty session
    session.clear()
    return redirect("/")

app.run(debug=True)