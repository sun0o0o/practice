function payOnKakao() {}
function payOnNaver() {}
function payOnCoupang() {}
function payOnPayco() {}
function payOnApple() {}

const paymentMap = {
  Kakao() {
    payOnKakao();
  },
  Naver() {
    payOnNaver();
  },
  Coupang() {
    payOnCoupang();
  },
  Payco() {
    payOnPayco();
  },
  Apple() {
    payOnApple();
  },
};

function executePayment(paymentType) {
  return paymentMap[paymentType]();
}

executePayment("Kakao");
