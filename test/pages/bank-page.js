// import * as by from "../utils/select-wrapper";
import SelectWrapper from '../utils/select-wrapper';

var BankingPage = function () {



    /* ANYWHERE */
    this.toHome = function () {
        element(by.selectByNgClick('home()')).click()
    };

    /* BEFORE LOGIN */
    this.loginAsCustomer = function () {
        element(by.selectByNgClick('customer()')).click();
    };



    this.loginAsBankManager = function () {
        element(by.selectByNgClick('manager()')).click();
    }
};

module.exports = new BankingPage();
