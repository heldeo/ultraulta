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

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]


class MakeupParser:
    def __init__(self):
        # SUBTITLES DOWNLOAD PARSER
        # Disable OAuthlib's HTTPS verification when running locally.
        # *DO NOT* leave this option enabled in production.
        os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
        api_service_name = "youtube"
        api_version = "v3"
        client_secrets_file = "/home/jeremy/Downloads/client_secret_517930175316-o0nbfsob7iqlqn988d8fn1tgf6btrhes.apps.googleusercontent.com.json"
        # Get credentials and create an API client
        flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
            client_secrets_file, scopes)
        credentials = flow.run_console()  # ask for concet
        # memeber that holds oauth credentials
        self.youtube = googleapiclient.discovery.build(
            api_service_name, api_version, credentials=credentials)

        # SUBTITLES LOCATION PARSER
        self.youtube1 = googleapiclient.discovery.build(
            api_service_name, api_version, developerKey="AIzaSyAXh8MNHwvFxEH2yULbhy40Uuwh164gihI", cache_discovery=False)

        # ENTITY RECOGNIZION PARSER
        self.client = language_v1.LanguageServiceClient.from_service_account_json(
            '/home/jeremy/Downloads/sonorous-pact-231916-3532edab58e6.json')
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

    def getSubtitles(self, url):
        vid = url.split("=", 1)[1]  # TODO get vidio Id
        _id = str(self.getLocation(vid))
        print("+++" + _id + "+++")
        text = self.getSubtitlesString(_id)
        return text

    def getMakeup(self, text):
        products = self.getProducts(text)
#         makeup = self.filterMakeup(products)
        return products

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
        fh = io.FileIO("/home/jeremy/test.xml", "wb")

        download = MediaIoBaseDownload(fh, request)
        complete = False
        while not complete:
            status, complete = download.next_chunk()

        tree = ET.parse('/home/jeremy/test.xml')  # TODO remove directory
        root = tree.getroot()
        root = root[1][0]
        s = ""
        for child in root:
            s = s + '\n' + child.text

        return s

    def getProducts(self, text):
        response = client.analyze_entities(
            text, encoding_type=self.encoding_type)
        # Loop through entitites returned from the API
        goods = []
        for entity in response.entities:
            if enums.Entity.Type(entity.type).name == "CONSUMER_GOOD":
                print(entity)
                goods.append(enity)
        return goods
