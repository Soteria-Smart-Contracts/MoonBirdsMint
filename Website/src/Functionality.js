SwitchPage("mint");
let CollectionNum = 1;

function ShowCollection(){
    let index = CollectionNum;
    while(index < CollectionNum+100){
        newcard = document.createElement("div");
        newcard.className = "NFTcard";
        newcard.id = index;
        let img = '<img class="nftimage" src="src/images/collection/' + index + '.png"></img>"';
        let BlockscoutLink = 'https://blockscout.com/etc/mainnet/token/0x2001d679210c0e4531f5c07155d8e3677dd388ae/instance/' + index +  '/token-transfers';
        newcard.innerHTML = img + '<a class="nftID head">MoonBird ID:</a>' + '<br>' + '<a class="nftID">' + index + '</a>' + '<br>' + '<a class="nftID scout" href="' + BlockscoutLink + '" target="_blank">View On Blockscout</a>';
        document.getElementById("CollectionContainer").appendChild(newcard);
        index++;
    }
    CollectionNum = index;
}


function SwitchPage(page) {
    if(page == "mint"){
        document.getElementById("wallet").style.display = "none";
        document.getElementById("collection").style.display = "none";
        document.getElementById("minting").style.display = "block";
    }
    if(page == "wallet"){
        document.getElementById("minting").style.display = "none";
        document.getElementById("collection").style.display = "none";
        document.getElementById("wallet").style.display = "block";
    }
    if(page == "collection"){
        ShowCollection();
        document.getElementById("minting").style.display = "none";
        document.getElementById("wallet").style.display = "none";
        document.getElementById("collection").style.display = "block";
    }

}


function LoadNFTs() {
    let index = 0;
    while(index < ids.length){
        newcard = document.createElement("div");
        newcard.className = "NFTcard";
        newcard.id = index;
        let img = '<img class="nftimage" src="src/images/collection/' + ids[index] + '.png"></img>"';
        let BlockscoutLink = 'https://blockscout.com/etc/mainnet/token/0x2001d679210c0e4531f5c07155d8e3677dd388ae/instance/' + ids[index] +  '/token-transfers';
        newcard.innerHTML = img + '<a class="nftID head">MoonBird ID:</a>' + '<br>' + '<a class="nftID">' + ids[index] + '</a>' + '<br>' + '<a class="nftID scout" href="' + BlockscoutLink + '" target="_blank">View On Blockscout</a>';
        document.getElementById("WalletContainer").appendChild(newcard);
        index++;
    }

}

console.log(document.getElementById("DefaultCard").innerHTML);
