let account;
const ABI = window.abi;
let ids;
let netID;
const contractAddress = "0x2001D679210C0e4531f5C07155d8e3677Dd388ae";

loginWithEth();

async function loginWithEth(){
    if(window.ethereum){
        await ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = await new Web3(ethereum);
        await getID();
        if (netID != 61){
            console.log("The current Metamask/Web3 network is not Ethereum Classic, please connect to the Ropsten test network."); //CHANGE FOR REAL CROWDSALE TO ETC
            alert("The current Metamask/Web3 network is not ETC, please connect to the Ethereum Classic test network.");
            showOverlay();
            return("Failed to connect")
        }
        accountarray = await web3.eth.getAccounts();
        contract = await new window.web3.eth.Contract(ABI, contractAddress, window.web3);
        account = accountarray[0];
        getsupply();
        await ReturnIds();
        LoadNFTs();
    } else { 
        alert("No ETHER Wallet available")
    }
}

async function getsupply(){
    supply = await contract.methods.totalSupply().call();
    document.getElementById("supply").innerHTML = supply;
}

async function getID(){
    let idhex = web3.eth._provider.chainId;
    netID = parseInt(idhex, 16);

    return(netID);
}

async function mint(){
    let amount = document.getElementById("amount").value;
    let amountWei = amount * 2000000000000000000;
    document.getElementById("txviewer").style.display = "block";
    document.getElementById("txviewer").style.display = "block";
    let tx = await contract.methods.mint(amount).send({from: account, value: amountWei, gas: 3000000});
    console.log(tx);
    return(tx);
}

async function ReturnIds(){
    ids = await contract.methods.walletOfOwner(account).call();
    console.log(ids);
    return(ids);
}