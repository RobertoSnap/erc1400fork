pragma solidity ^0.5.5;

import "../token/ERC1400Raw/IERC1400TokensRecipient.sol";
import "../token/ERC1820/ERC1820Implementer.sol";

contract ERC1400TokensRecipientMock is
    IERC1400TokensRecipient,
    ERC1820Implementer
{
    string internal constant ERC1400_TOKENS_RECIPIENT = "ERC1400TokensRecipient";

    constructor() public {
        ERC1820Implementer._setInterface(ERC1400_TOKENS_RECIPIENT);
    }

    function canReceive(
        bytes4, /*functionSig*/
        bytes32, /*partition*/
        address, /*operator*/
        address from,
        address to,
        uint256 value,
        bytes calldata data,
        bytes calldata // Comments to avoid compilation warnings for unused variables. /*operatorData*/
    ) external view returns (bool) {
        return (_canReceive(from, to, value, data));
    }

    function tokensReceived(
        bytes4, /*functionSig*/
        bytes32, /*partition*/
        address, /*operator*/
        address from,
        address to,
        uint256 value,
        bytes calldata data,
        bytes calldata // Comments to avoid compilation warnings for unused variables. /*operatorData*/
    ) external {
        require(_canReceive(from, to, value, data), "A6"); // Transfer Blocked - Receiver not eligible
    }

    function _canReceive(
        address, /*from*/
        address, /*to*/
        uint256, /*value*/
        bytes memory data // Comments to avoid compilation warnings for unused variables.
    ) internal pure returns (bool) {
        bytes32 receiveRevert = 0x2200000000000000000000000000000000000000000000000000000000000000; // Default recipient hook failure data for the mock only
        bytes32 data32;
        assembly {
            data32 := mload(add(data, 32))
        }
        if (data32 == receiveRevert) {
            return false;
        } else {
            return true;
        }
    }

}
