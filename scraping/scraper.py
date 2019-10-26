from flask import Flask
from flask import request
from flask import Response
from flask import abort
from urllib.request import urlopen
from bs4 import BeautifulSoup
from flask import jsonify
import re
import json

app = Flask(__name__)


@app.route('/api/recommended')
def recommended():
    productSearch = str(request.args.get('product'))
    resp = getRecommendedProducts(productSearch)
    if len(resp) is 0:
        print("bad request on: " + productSearch)
        abort(400)
    return json.dumps(resp)


class Product:
    def __init__(self, name, price, url):
        self.name = name
        self.price = price
        self.picUrl = url


def getRecommendedProducts(s):
    url = "https://www.ulta.com/ulta/a/_/Ntt-" + \
        s.replace(" ", "-").strip() + "/Nty-1?Dy=1&ciSelector=searchResults"
    html = urlopen(url)
    soup = BeautifulSoup(html, 'lxml')

    if html.code is not 200:
        exit("malformed url querying ULTA website")

    names = []
    prices = []
    pics = []
    for product in soup.findAll("div", {"class": "productQvContainer"}):
        for p in product.findAll("div", {"class": "prod-title-desc"}):
            stringProduct = p.contents[1].text.strip(
            ) + " " + p.contents[3].text.strip()
            names.append(stringProduct.strip())

        for p in product.findAll("div", {"class": "productPrice"}):
            prices.append(p.contents[3].text.strip())

        for p in product.findAll("div", {"class": "quick-view-prod"}):
            pics.append(str(re.search(
                "(?P<url>https?://[^\s'\"]+)", str(p.contents)).group("url")))
    products = []
    for i in range(0, len(names)):
        p = Product(names[i], prices[i], pics[i])
        products.append(json.dumps(p.__dict__))
    return products
