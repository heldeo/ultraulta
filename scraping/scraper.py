import pandas as pd
import numpy as np
import seaborn as sns
from urllib.request import urlopen
from bs4 import BeautifulSoup

# url = "https://www.ulta.com/ulta/a/_/Ntt-too%20face/Nty-1?Dy=1&ciSelector=searchResults"
url = "https://www.ulta.com/brand/mac?N=1z12lx1Z1tecpti"
html = urlopen(url)
soup = BeautifulSoup(html, 'lxml')

if html.code is not 200:
    exit("failure")


class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price


names = []
prices = []
for product in soup.findAll("div", {"class": "productQvContainer"}):
    for p in product.findAll("div", {"class": "prod-title-desc"}):
        stringProduct = p.contents[1].text.strip(
        ) + " " + p.contents[3].text.strip()
        names.append(stringProduct)

    for p in product.findAll("div", {"class": "productPrice"}):
        prices.append(p.contents[3].text.strip())


products = []
for i in range(0, len(names)):
    p = Product(names[i], prices[i])
    products.append(p)

for p in products:
    print(p.name)
