// Make a custom Promise

const customPromiseState = {
    PENDING: "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED",
  };

class customPromise {
  constructor(fn) {
    this.customPromiseState = customPromiseState.PENDING;
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.catchFn = null;
    this.thenFn = null;
    fn(this.resolve, this.reject);
  }

  resolve(resolvedData) {
    console.log("Resolve function");
    if (this.customPromiseState === customPromiseState.PENDING) {
      this.thenFn(resolvedData);
    }
    this.customPromiseState = customPromiseState.RESOLVED;
  }

  reject(rejectedData) {
    console.log("Reject function");
    if (this.customPromiseState === customPromiseState.PENDING) {
      this.catchFn(rejectedData);
    }
    this.customPromiseState = customPromiseState.REJECTED;
  }

  then(thenFn) {
    console.log("Then Function");
    this.thenFn = thenFn;
    return this;
  }

  catch(catchFn) {
    console.log("Catch Function");
    this.catchFn = catchFn;
    return this;
  }
}

function getNumber() {
  return new customPromise((res, rej) => {
    const randomNumber = Math.floor(Math.random() * 100);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Reject With Number ${randomNumber}`);
        console.log(randomNumber);
      } else {
        res(`Resolve With Number ${randomNumber}`);
      }
    }, 2000);
  });
}

getNumber()
  .then((val) => console.log(`Response - ${val}`))
  .catch((val) => console.log(`Error - ${val}`));
