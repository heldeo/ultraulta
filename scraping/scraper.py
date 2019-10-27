import json
import re
from flask_cors import CORS, cross_origin
from flask import Flask
from flask import request
from flask import Response
from flask import abort
from urllib.request import urlopen
from bs4 import BeautifulSoup
from flask import jsonify
import random
import time
import os
import xml.etree.ElementTree as ET
import google_auth_oauthlib
import numpy as np
import io
# import tensorflow as tf
# Imports the Google Cloud client library
from google.cloud import language
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors
from google.cloud.language import enums
from google.cloud.language import types
from google.cloud import language_v1
from google.cloud.language_v1 import enums
from googleapiclient.http import MediaIoBaseDownload
import pickle
from gensim.models import KeyedVectors

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]
class MakeupParser:
    def __init__(self):
        #SUBTITLES DOWNLOAD PARSER
        # Disable OAuthlib's HTTPS verification when running locally.
        # *DO NOT* leave this option enabled in production.
        os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
        api_service_name = "youtube"
        api_version = "v3"
        client_secrets_file = "./client_secret_997707671582-i4gqnmoig69vvj1nlpq08dg9jkj4oth3.apps.googleusercontent.com.json"
        # Get credentials and create an API client
        flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(client_secrets_file, scopes)
        credentials = flow.run_console()#ask for concet 
        #memeber that holds oauth credentials
        self.youtube = googleapiclient.discovery.build(api_service_name, api_version, credentials=credentials)
        
        #SUBTITLES LOCATION PARSER
        self.youtube1 = googleapiclient.discovery.build(api_service_name, api_version, developerKey="AIzaSyDHzScqE2ckhS62Xp-VAvb5m8p_Vcjmwjo", cache_discovery=False)
        
        #ENTITY RECOGNIZION PARSER
        self.client = language_v1.LanguageServiceClient.from_service_account_json('./cellular-axon-252304-7bffaa26f0c0.json')
        # text_content = 'California is a state.'
        # Available types: PLAIN_TEXT, HTML
        type_ = enums.Document.Type.PLAIN_TEXT
        # Optional. If not specified, the language is automatically detected.
        # For list of supported languages:
        # https://cloud.google.com/natural-language/docs/languages
        language = "en"
        #document = {"content": text_content, "type": type_, "language": language}
        # Available values: NONE, UTF8, UTF16, UTF32
        self.encoding_type = enums.EncodingType.UTF8  
        
        #MAKEUP MODEL
        filename = 'GoogleNews-vectors-negative300.bin'
        self.model = KeyedVectors.load_word2vec_format(filename, binary=True)
        with open('libstick.pkl', 'rb') as f:
            self.clf = pickle.load(f)
        
    def getSubtitles(self, url):
        vid = url.split("=",1)[1]#TODO get vidio Id
        _id = str(self.getLocation(vid)) 
        print("+++" + _id + "+++")
        text = self.getSubtitlesString(_id)
        return text
   
    def getMakeup(self, products):
        makeup = []
        for product in products:
            if product in model:
                if self.clf.predict(np.array([model[product]])) > 0:
                    makeup.append(product)
        return makeup
    
    def getLocation(self, vid):
        request = self.youtube1.captions().list(
            part="snippet",
            videoId=vid
        )
        response = request.execute()["items"][0]["id"]
        print(response)
        return response
    
    def getSubtitlesString(self, _id):
        request = self.youtube.captions().download(id=_id, tfmt="ttml")

        # TODO: For this request to work, you must replace "YOUR_FILE"
        #       with the location where the downloaded content should be written.
        fh = io.FileIO("./test.xml", "wb")

        download = MediaIoBaseDownload(fh, request)
        complete = False
        while not complete:  
          status, complete = download.next_chunk()
        
        tree = ET.parse('./test.xml')#TODO remove directory
        root = tree.getroot()
        root = root[1][0]
        s = ""
        for child in root:
            s = s + '\n' + child.text
        
        return s
    
    def getProducts(self, url):
        text = self.getSubtitles(url)
         # Available types: PLAIN_TEXT, HTML
        type_ = enums.Document.Type.PLAIN_TEXT

        # Optional. If not specified, the language is automatically detected.
        # For list of supported languages:
        # https://cloud.google.com/natural-language/docs/languages
        language = "en"
        document = {"content": text, "type": type_, "language": language}
        response = self.client.analyze_entities(document, encoding_type=self.encoding_type)
        # Loop through entitites returned from the API
        goods = []
        for entity in response.entities:
             if enums.Entity.Type(entity.type).name == "CONSUMER_GOOD" :
                print(entity)
                goods.append(entity.name)
        return goods
    
    def getBeutyProducts(self, url):
        products = self.getProducts(url)
        beuty = self.getMakeup(products)
        return beuty 
mp =  MakeupParser()

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route('/api/recommended', methods=['GET', 'POST'])
def recommended():
    # productSearch = str(request.args.get('product'))
    try:
        youtube = request.form.get('url')
        print(youtube)
        resp = getAllProducts(mp.getBeutyProducts(youtube))
        if len(resp) is 0:
            # print("bad request on: " youtub+ productSearch)
            abort(400)
        return json.dumps(resp)
    except:
        return json.dumps([])


class Product:
    def __init__(self, name, price, url, pUrl, time):
        self.name = name
        self.price = price
        self.picUrl = url
        self.productUlr = pUrl
        self.time = time


def getAllProducts(listOfProducts):
    l = []
    for p in listOfProducts:
        l.append(getRecommendedProducts(p))
    return l


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
    url = []
    products = []
    random.seed(int(time.time()))

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
        for p in product.find_all('a', href=True):
            url.append("https://ulta.com" + p['href'])
            break

    for i in range(0, len(names)):
        p = Product(names[i], prices[i], pics[i], url[i], str(
            random.randint(1, 100*i+1) % 10) + ":" + str(random.randint(10, 59)))
        products.append(p)

    ret = []
    for i in sorted(products, key=lambda pro: pro.time):
        o = json.dumps(i.__dict__)
        m = json.loads(o)
        ret.append(m)

    return ret
    # return random.choices(ret, k=8)
