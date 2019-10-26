from flask import Flask
from flask import request
from flask import Response
from urllib.request import urlopen
from bs4 import BeautifulSoup
from flask import jsonify
import json

app = Flask(__name__)


@app.route('/api/recommended')
def recommended():
    productSearch = request.args.get('product')

    resp = getRecommendedProducts(productSearch)
    return json.dumps(resp)


class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price


def getRecommendedProducts(s):
    url = "https://www.ulta.com/ulta/a/_/Ntt-" + \
        s.strip() + "/Nty-1?Dy=1&ciSelector=searchResults"
    html = urlopen(url)
    soup = BeautifulSoup(html, 'lxml')

    if html.code is not 200:
        exit("failure")

    names = []
    prices = []
    for product in soup.findAll("div", {"class": "productQvContainer"}):
        for p in product.findAll("div", {"class": "prod-title-desc"}):
            stringProduct = p.contents[1].text.strip(
            ) + " " + p.contents[3].text.strip()
            names.append(stringProduct.strip())

        for p in product.findAll("div", {"class": "productPrice"}):
            prices.append(p.contents[3].text.strip())
    products = []
    for i in range(0, len(names)):
        p = Product(names[i], prices[i])
        products.append(json.dumps(p.__dict__))
    return products
