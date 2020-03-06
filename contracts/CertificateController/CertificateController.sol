pragma solidity ^0.5.3;

import "../mocks/CertificateControllerMock.sol";

contract CertificateController is CertificateControllerMock {
    constructor(address _certificateSigner, bool activated)
        public
        CertificateControllerMock(_certificateSigner, activated)
    {
        console.log("CertificateController::constructor %s", gasleft());

    }

}
