import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class PlantLog(db.Model):
    log_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    date = db.Column(db.String(250), unique=True, nullable=False)
    notes = db.Column(db.String(1500), unique=True, nullable=False)
    

        
    #make sure we don't lose this info we've stored
db.session.commit()
    
diaries = PlantLog.query.filter_by(title="hello").all()
print(diaries)
    