import { useState } from "react";
import "./App.css";

import close from "./assets/close.svg";
import edit_pencil from "./assets/edit_pencil.svg";
import mastercard_symbol from "./assets/mastercard_symbol.svg";
import verified_badge from "./assets/verified_badge.svg";
import mastercard_2 from "./assets/mastercard_2.svg";
import apple from "./assets/apple.svg";
import chip from "./assets/chip.png";
import wifi from "./assets/wifi.png";
import docket from "./assets/docket.png";

function App() {
  const [card, setCard] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");

  const handleCardNumberDisplay = () => {
    const rawText = [...card.split(" ").join("")];
    const creditCard = [];
    rawText.forEach((t, i) => {
      if (i % 4 === 0) creditCard.push("  ");
      creditCard.push(t);
    });
    return creditCard.join("");
  };

  const getLastFourDigits = () => {
    const formattedCard = handleCardNumberDisplay();
    return formattedCard.slice(-4);
  };

  const handleCardNumberChange = (e) => {
    setCard(e.target.value);
    if (e.target.value.length === 24) {
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  };

  const handleVisibility1 = () => {
    if (type1 === "password") {
      setType1("tel");
    } else {
      setType1("password");
    }
  };

  const handleVisibility2 = () => {
    if (type2 === "password") {
      setType2("text");
    } else {
      setType2("password");
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 relative bg-white max-w-6xl mx-auto p-11 pt-20 mt-24 shadow-md">
        <div className="absolute z-10 right-0 cursor-pointer bg-[#f8f9fa] px-3 py-2.5">
          <img src={close} alt="close" className="h-5" />
        </div>
        <div className="col-span-12 mb-16 md:mb-0 md:col-span-8 md:mr-[34px]">
          <div className="flex items-center justify-center justify-between">
            <div className="flex items-center justify-center gap-4 sm:gap-2">
              <span className="block h-12 w-12 bg-[#035fff] rounded-full"></span>
              <h1 className="font-bold text-xl">
                AceCoin <span className="font-normal">Pay</span>
              </h1>
            </div>
            <div className="hidden font-medium text-[1.35rem] sm:block">
              <span className="bg-[#17254c] text-white h-[1.9rem] w-[1.3rem] inline-flex justify-center items-center rounded mr-0.5">
                0
              </span>
              <span className="bg-[#17254c] text-white h-[1.9rem] w-[1.3rem] inline-flex justify-center items-center rounded">
                1
              </span>
              <span className="mx-1">:</span>
              <span className="bg-[#17254c] text-white h-[1.9rem] w-[1.3rem] inline-flex justify-center items-center rounded mr-0.5">
                1
              </span>
              <span className="bg-[#17254c] text-white h-[1.9rem] w-[1.3rem] inline-flex justify-center items-center rounded">
                9
              </span>
            </div>
          </div>

          {/* CARD FORM */}
          <form action="#">
            <div className="mt-11">
              <div className="flex items-center justify-center justify-between mb-[1.6rem]">
                <div className="">
                  <h2 className="text-base font-bold mb-2">Card Number</h2>
                  <p className="text-sm text-[#8A8B9F]">
                    Enter the 16-digit card number on the card
                  </p>
                </div>
                <button className="hidden flex items-center justify-center gap-2 sm:flex">
                  <img
                    src={edit_pencil}
                    alt="edit"
                    className="h-[11px] sm:h-4"
                  />
                  <span className="text-[#1da1f2] text-[13px] mt-1 font-semibold sm:text-base sm:mt-0">
                    Edit
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 place-items-center justify-items-stretch mt-4">
              <div className="relative col-span-2">
                <img
                  src={mastercard_symbol}
                  alt="mastercard symbol"
                  className="absolute left-4 h-8 top-4"
                />
                <input
                  type="tel"
                  placeholder="2412   -   7512   -   3412   -   3456"
                  className="border-2 border-gray-300 border-opacity-50 w-full px-16 py-5 font-medium rounded-md text-[#05365c] outline-none focus:border-blue-500 focus:bg-[#f1f3f5] text-xs sm:text-sm"
                  maxLength="24"
                  value={handleCardNumberDisplay()}
                  onChange={handleCardNumberChange}
                />
                {showImage && (
                  <img
                    src={verified_badge}
                    alt="verified badge"
                    className="absolute right-4 h-6 top-4 mt-[5px]"
                  />
                )}
              </div>
              <div className="mt-7 col-span-2 md:col-span-1 min-[905px]:mr-[3px]">
                <h2 className="text-base font-bold mb-2">CVV number</h2>
                <p className="text-sm text-[#8A8B9F]">
                  Enter the 3 or 4 digit number on the card
                </p>
              </div>
              <div className="relative mt-8 col-span-2 md:col-span-1">
                <input
                  type={type1}
                  className="border-2 border-gray-300 border-opacity-50 w-full px-4 py-5 text-sm text-center font-semibold rounded-md text-[#05365c] outline-none focus:border-blue-500 focus:bg-[#f1f3f5] sm:text-base"
                  maxLength="3"
                  inputMode="numeric"
                />
                <button
                  className="absolute right-[16.5px] top-[21px] text-[#868e96] text-2xl"
                  onClick={handleVisibility1}
                  type="button"
                >
                  <ion-icon name="apps"></ion-icon>
                </button>
              </div>
              <div className="mt-7 col-span-2 sm:col-span-1 min-[800px]:mr-2">
                <h2 className="text-base font-bold mb-2 md:max-lg:mb-2 md:mr-2">
                  Expiry date
                </h2>
                <p className="text-sm text-[#8A8B9F]">
                  Enter the expiration date of the card
                </p>
              </div>
              <div className="mt-8 col-span-2 sm:col-span-1">
                <div className="flex items-center justify-center">
                  <input
                    type="tel"
                    className="border-2 border-gray-300 border-opacity-50 w-full px-4 py-[20px] text-sm text-center font-semibold rounded-md text-[#05365c] outline-none focus:border-blue-500 focus:bg-[#f1f3f5] sm:text-base"
                    maxLength="2"
                    inputMode="numeric"
                    onChange={(e) => setExpiryMonth(e.target.value)}
                  />
                  <span className="font-normal mx-4 w-1 h-4 bg-black rotate-[30deg]"></span>
                  <input
                    type="tel"
                    className="border-2 border-gray-300 border-opacity-50 w-full px-4 py-5 text-sm text-center font-semibold rounded-md text-[#05365c] outline-none focus:border-blue-500 focus:bg-[#f1f3f5] sm:text-base"
                    maxLength="2"
                    inputMode="numeric"
                    onChange={(e) => setExpiryYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-7 col-span-2 md:col-span-1">
                <h2 className="text-base font-bold mb-2">Password</h2>
                <p className="text-sm text-[#8A8B9F]">
                  Enter your Dynamic password
                </p>
              </div>
              <div className="relative col-span-2 md:col-span-1 mt-8">
                <input
                  type={type2}
                  className="border-2 border-gray-300 border-opacity-50 w-full px-4 py-5 text-sm font-semibold rounded-md text-[#05365c] outline-none focus:border-blue-500 focus:bg-[#f1f3f5] sm:text-base"
                />
                <button
                  className="absolute right-[16.5px] top-[21px] text-[#868e96] text-2xl"
                  onClick={handleVisibility2}
                  type="button"
                >
                  <ion-icon name="apps"></ion-icon>
                </button>
              </div>
            </div>
            <button
              className="bg-[#035fff] py-5 mt-[35px] mb-2.5 w-full text-white text-[1.2rem] font-medium rounded-[0.6rem]"
              type="submit"
            >
              Pay now
            </button>
          </form>
        </div>

        {/* CHECKOUT */}
        <div className="col-span-12 md:col-span-4">
          <div className="relative h-[639px] w-11/12 md:float-right md:h-full md:mt-3">
            <span className="block absolute h-6 w-20 bg-[#035fff] transform translate-x-[-50%] z-10 top-[-7px] left-1/2"></span>

            <div className="flex items-center justify-center w-11/12">
              <div
                className="w-64 h-[20.5rem] backdrop-blur-[15px] p-8 rounded-2xl shadow-lg relative z-50 overflow-hidden border-t-[0.2px] pb-0 ml-[33px] md:ml-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.6), #fff)",
                }}
              >
                <div className="relative flex items-center justify-center justify-between mb-28">
                  <img src={chip} alt="chip" className="h-8 w-8" />
                  <img src={wifi} alt="wifi" className="h-[1.8rem]" />
                </div>
                <div className="relative top-[13px]">
                  <span className="text-[0.95rem] font-medium mb-2 text-[#616161] md:text-[0.82rem] lg:text-[0.95rem]">
                    Jonathan micheal
                  </span>
                  <div className="flex mb-2">
                    <div className="flex items-center justify-center mr-2 mt-2">
                      <span className="block h-[0.4rem] w-[0.4rem] rounded-full bg-[#17254c] mr-[0.4rem]"></span>
                      <span className="block h-[0.4rem] w-[0.4rem] rounded-full bg-[#17254c] mr-[0.4rem]"></span>
                      <span className="block h-[0.4rem] w-[0.4rem] rounded-full bg-[#17254c] mr-[0.4rem]"></span>
                      <span className="block h-[0.4rem] w-[0.4rem] rounded-full bg-[#17254c] mr-[0.4rem]"></span>
                    </div>
                    <span className="mt-2">{getLastFourDigits()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between relative top-[1.4rem]">
                  <span className="text-base font-semibold">
                    {expiryMonth}/{expiryYear}
                  </span>
                  <img src={mastercard_2} alt="" className="h-10" />
                </div>
                <div className="w-[700px] h-[700px] border border-[#ebebeb] rounded-full flex items-center justify-center absolute top-[26px] left-[-58px] z-[-1]">
                  <span className="inline-block w-[570px] h-[570px] border-inherit rounded-inherit"></span>
                </div>
                <div className="w-[700px] h-[700px] border border-[#ebebeb] rounded-full flex items-center justify-center absolute top-[57px] left-[-28px] z-[-1]">
                  <span className="inline-block w-[570px] h-[570px] border-inherit rounded-inherit"></span>
                </div>
              </div>
            </div>
            <div className="bg-[#f0f3f8] h-[560px] w-full rounded-2xl absolute top-[68px]">
              <div className="relative top-[18rem] px-8">
                <div className="flex items-center justify-center justify-between text-base text-[#8e96a3] mb-[0.8rem] md:mb-4 lg:mb-[0.8rem]">
                  <span className="font-medium text-[13px] sm:text-sm md:text-xs lg:text-sm">
                    Company
                  </span>
                  <span className="flex items-center gap-3">
                    <img
                      src={apple}
                      alt="apple"
                      className="h-5 sm:h-6 md:h-4 lg:h-6"
                    />
                    <span className="text-[#05365c] font-semibold text-[13px] sm:text-sm md:text-xs lg:text-sm">
                      Apple
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-center text-base text-[#8e96a3] mb-[0.8rem] justify-between md:mb-4 lg:mb-[0.8rem]">
                  <span className="font-medium text-[13px] sm:text-sm md:text-xs lg:text-sm">
                    Order number
                  </span>
                  <span className="text-[#05365c] font-semibold text-[13px] sm:text-sm md:text-xs lg:text-sm">
                    1266201
                  </span>
                </div>
                <div className="flex items-center justify-center justify-between text-base text-[#8e96a3] mb-[0.8rem] md:mb-4 lg:mb-[0.8rem]">
                  <span className="font-medium text-[13px] sm:text-sm md:text-xs lg:text-sm">
                    Product
                  </span>
                  <span className="text-[#05365c] font-semibold text-[13px] sm:text-sm md:text-xs lg:text-sm">
                    Macbook Air
                  </span>
                </div>
                <div className="flex items-center justify-center justify-between text-base text-[#8e96a3] mb-[1rem]">
                  <span className="font-medium text-[13px] sm:text-sm md:text-xs lg:text-sm">
                    VAT (20%)
                  </span>
                  <span className="text-[#05365c] font-semibold text-[13px] sm:text-sm md:text-xs lg:text-sm">
                    $100.00
                  </span>
                </div>
              </div>
              <div className="absolute bottom-[7rem] w-full border-2 border-dashed border-[#cbcbcb] flex items-center before:content-empty before:absolute before:block before:w-full before:h-[2rem] before:bg- #f0f3f8] before:bottom-[-30px]">
                <div className="absolute h-[1.6rem] w-[2.3rem] bg-white rounded-full bottom-[-15px] left-[-25px]"></div>
                <div className="absolute h-[1.6rem] w-[2.3rem] bg-white rounded-full bottom-[-15px] right-[-25px]"></div>
              </div>
              <div className="absolute bottom-[30px] w-full px-8 flex items-center justify-between">
                <div className="">
                  <span className="text-[#8e96a3] text-sm font-medium sm:text-[0.9rem] md:text-[0.83rem] lg:text-[0.9rem]">
                    You have to Pay
                  </span>
                  <div className="flex items-center justify-center text- #05365c]">
                    <h1 className="text-[1.8rem] font-bold sm:text-[2rem] md:text-[1.6rem] lg:text-[2rem]">
                      549
                      <sub className="text-sm relative bottom-[1px] font-medium sm:text-base md:text-xs lg:text-base">
                        .99
                      </sub>
                    </h1>
                    <span className="relative top-1 text-sm ml-[0.4rem] text-[#8e96a3] sm:text-base md:text-xs lg:text-base">
                      USD
                    </span>
                  </div>
                </div>
                <img
                  src={docket}
                  alt="docket"
                  className="h-[1.4rem] sm:h-[1.6rem] md:h-[1.1rem] lg:h-[1.6rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
