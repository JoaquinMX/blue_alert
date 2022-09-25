import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
function ReportCaptcha() {
    const [isVerified, setIsVerified] = useState(false);
    function handleOnChange(value) {
        setIsVerified(true);
    }
    
  return (
    <ReCAPTCHA
        sitekey='6LeaWSkiAAAAAIoGI0-R3bRuMxr5u6O3PwIOVxwk'
        onChange={(e) => handleOnChange(e)}
    />
  )
}

export default ReportCaptcha;