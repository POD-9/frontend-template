import React, { useState } from 'react';

const WalletInteractionButton = ({action, information} : {action: string, information: string}) => {
    const [QRCodeShow, setQRCodeShow] = useState(false)

    var message = "Connect to Wallet"
    if (action === "import") {
        message = "Import from Wallet"
    }
    else if (action === "share") {
        message = "Share to Wallet"
    }

    return (
        <div className="flex justify-end md:p-5 p-3">
        <button className="rounded justify-center bg-[#F86338] text-white lg:p-3 p-2 md:w-1/3 w-1/2 hover:bg-white hover:text-[#F86338] border-2 font-extrabold border-transparent hover:border-[#F86338] text-l"
            onClick={() => {setQRCodeShow(!QRCodeShow)}}
        >
            {message}
        </button>
        {QRCodeShow && <div className="justify-center p-3">Placeholder for QR code</div>
        }
        </div>
    )
}
export default WalletInteractionButton;