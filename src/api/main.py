"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

# create Flask App
api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if len(User.query.filter_by(email=email, password=password).all()) > 0:
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token)   
    else:
        return jsonify({"msg": "Bad username or password"}), 401 


@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User(email=email, password=password)
    #len es una función que cuenta el largo de un array, y en el código de a continuación dice si el largo del array es mayor a 0 entonces error, porque ya existe un usuario con esos datos.
    if len(User.query.filter_by(email=email).all()) > 0:
        return jsonify({"Error": "Ya existe un usuario registrado con este nombre en la plataforma"}), 400
    else:
        db.session.add(user)
        db.session.commit()
    
    return jsonify({"success": "Su usuario ha sido creado en la plataforma"}), 201