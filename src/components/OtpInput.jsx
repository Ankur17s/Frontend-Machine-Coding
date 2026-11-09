import { useEffect, useRef, useState } from "react";

const OTP_COUNT = 6;

const OtpInput = () => {
  const [otpInput, setOtpInput] = useState(Array(OTP_COUNT).fill(""));
  const inputRef = useRef([]);

  const handleOtpChange = (e, idx) => {
    const value = e.target.value.trim();
    if (isNaN(value)) return;
    const newOtp = [...otpInput];
    newOtp[idx] = value;
    value && inputRef.current[idx + 1]?.focus();
    setOtpInput(newOtp);

    if(!newOtp.includes('')) {
        console.log(newOtp.join(''))
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.code === "Backspace" && !e.target.value) {
      inputRef.current[idx - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div>
      <h2>Otp Input</h2>
      <div>
        {otpInput.map((input, idx) => (
          <input
            key={idx}
            style={{
              height: 50,
              width: 50,
              margin: 5,
              textAlign: "center",
              fontSize: 24,
            }}
            maxLength={1}
            value={input}
            onChange={(e) => handleOtpChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(input) => (inputRef.current[idx] = input)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
