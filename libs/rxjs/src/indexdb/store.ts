import { getDB, DBs } from './db';
import { showError } from './showError';
import { Observable, Subscriber } from 'rxjs';

/**
 * create a new store in an existed db
 */
function createStore(options: any): Promise<any> {
  let { dbName, storeName, version, keyOptions, index } = options;
  return new Promise((resolve, reject) => {
    if (!dbName || !storeName) {
      reject('dbName and storeName are both required');
    }
    //close this db and delete form cache
    if (DBs[dbName]) {
      DBs[dbName].close();
      delete DBs[dbName];
    }
    const dbConnect = window.indexedDB.open(dbName, version);
    let store;

    //only in onupgradeneeded event , you can create store
    dbConnect.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (<any>event.target).result;
      //cache this db
      DBs[dbName] = db;
      if (db.objectStoreNames.contains(storeName)) {
        //是否已存在该对象库
        showError(`storeName ${storeName} has existed in db ${dbName}`);
        reject();
      } else {
        store = db.createObjectStore(storeName, keyOptions); //创建对象库
        for (const i in index) {
          //创建索引
          store.createIndex(
            index[i].indexName,
            index[i].indexKey,
            index[i].indexOptions
          );
        }
      }
    };

    //wait for success to resolve
    dbConnect.onsuccess = () => {
      resolve(store);
    };

    dbConnect.onerror = event => {
      showError((<any>event.target).error.message);
      reject((<any>event.target).error);
    };
  });
}

/**
 * [getStore description]
 * @param  {[type]} dbName    [description]
 * @param  {[type]} storeName [description]
 * @return {[type]}           [description]
 */
function getStore(dbName, storeName): Observable<IDBObjectStore> {
  return Observable.create((subscriber: Subscriber<IDBObjectStore>) => {
    if (!dbName || !storeName) {
      subscriber.error('dbName and storeName are both required');
    }
    getDB(dbName)
      .then(db => {
        if (
          db instanceof IDBDatabase &&
          db.objectStoreNames.contains(storeName)
        ) {
          const tx = db.transaction(storeName, 'readwrite');
          const store: IDBObjectStore = tx.objectStore(storeName);
          subscriber.next(store);
          subscriber.complete();
        } else {
          subscriber.error(`store ${storeName} doesn't existes in ${dbName}`);
        }
      })
      .catch(error => {
        subscriber.error(error);
      });
  });
}

/**
 * [deleteStore description]
 * @param  {[type]} dbName       [description]
 * @param  {[type]} storeName    [description]
 * @param  {Date}   [version=new Date(]        [description]
 * @return {[type]}              [description]
 */
function deleteStore(
  dbName = null,
  storeName = null,
  version = new Date().getTime()
) {
  if (!dbName || !storeName) {
    showError('dbName and storeName are both required');
    return false;
  }

  return new Promise((resolve, reject) => {
    //close this db and delete form cache
    if (DBs[dbName]) {
      DBs[dbName].close();
      delete DBs[dbName];
    }

    const dbConnect = window.indexedDB.open(dbName, version);
    let db;
    //only in onupgradeneeded event , you can delete store
    dbConnect.onupgradeneeded = event => {
      db = (<any>event.target).result;
      //cache this db
      DBs[dbName] = db;
      if (db.objectStoreNames.contains(storeName)) {
        db.deleteObjectStore(storeName);
      } else {
        showError(`storeName ${storeName} has existed in db ${dbName}`);
        reject();
      }
    };

    //wait for success to resolve
    dbConnect.onsuccess = () => {
      resolve(db);
    };

    dbConnect.onerror = event => {
      showError((<any>event.target).error.message);
      reject((<any>event.target).error);
    };
  });
}

/**
 * [getStoreCount description]
 * @param  {[type]} db        [description]
 * @param  {[type]} storeName [description]
 * @return {[type]}           [description]
 */
function getStoreCount(dbName, storeName) {
  if (!dbName || !storeName) {
    showError('dbName and storeName are both required');
    return false;
  }

  return new Promise((resolve, reject) => {
    getDB(dbName)
      .then(db => {
        if (
          db instanceof IDBDatabase &&
          db.objectStoreNames.contains(storeName)
        ) {
          const tx = db.transaction(storeName, 'readwrite');
          const store = tx.objectStore(storeName);
          let count;

          tx.oncomplete = function() {
            resolve(count);
          };

          //get count in transaction, you should create transaction before do anything to store
          const store_count_req = store.count();
          store_count_req.onsuccess = event => {
            count = (<any>event.target).result;
          };
          store_count_req.onerror = event => {
            showError((<any>event.target).error.message);
            reject((<any>event.target).error);
          };
        } else {
          showError(`store ${storeName} doesn't existes in ${dbName}`);
          reject();
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

function clearStore(store) {
  if (store instanceof IDBObjectStore) {
    store.clear();
    return true;
  } else {
    return false;
  }
}

export { getStore, createStore, getStoreCount, deleteStore, clearStore };
