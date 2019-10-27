from gensim.models import Word2Vec

sentences = [["cat", "say", "meow"]]
model = Word2Vec(sentences, min_count=1)
print(model.wv.vocab)
