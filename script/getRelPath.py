import os

path = "../audio/"
filePaths = list()

def listFiles(path=path):
  for e in os.listdir(path):
    fullP = os.path.join(path, e)
    if os.path.isdir(fullP):
      listFiles(fullP)
    else:
      filePaths.append(fullP)


def writeToDataFile():
  with open ("songs.txt", "w", encoding="utf-8") as f:    
    for i in filePaths:
      f.write(f"{i}\n")

if __name__ == "__main__":
  listFiles()
  writeToDataFile()