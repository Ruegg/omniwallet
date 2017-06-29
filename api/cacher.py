import config
import redis
import json

r = redis.StrictRedis(host=config.REDIS_HOST, port=config.REDIS_PORT, db=config.REDIS_DB)

def rGet(key):
  return r.get(key)

def rSet(key,value):
  return r.set(key,value)

def rExpire(key,sec):
  return r.expire(key,sec)

def rDelete(key):
  return r.delete(key)

def rSetNotUpdateBTC(baldata):
  for addr in baldata['fresh'].split():
    rSet("omniwallet:balances:"+str(addr),json.dumps( {"bal":baldata['bal'][addr],"error":None}))
    rExpire("omniwallet:balances:"+str(addr),150)
