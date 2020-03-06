pragma solidity ^0.5.5;

contract ERC1820Implementer {
    bytes32 constant ERC1820_ACCEPT_MAGIC = keccak256(
        abi.encodePacked("ERC1820_ACCEPT_MAGIC")
    );

    mapping(bytes32 => bool) internal _interfaceHashes;

    function canImplementInterfaceForAddress(
        bytes32 interfaceHash,
        address // Comments to avoid compilation warnings for unused variables. /*addr*/
    ) external view returns (bytes32) {
        if (_interfaceHashes[interfaceHash]) {
            return ERC1820_ACCEPT_MAGIC;
        } else {
            return "";
        }
    }

    function _setInterface(string memory interfaceLabel) internal {
        _interfaceHashes[keccak256(abi.encodePacked(interfaceLabel))] = true;
    }

}
