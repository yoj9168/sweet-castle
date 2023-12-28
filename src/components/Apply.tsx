import React, { useState } from 'react';

const Apply: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleSubmit = () => {
    if(!agreementChecked)
      alert("이용 약관에 동의해주세요!");
    else{
      const userAgent = navigator.userAgent.toLocaleLowerCase()
      let sms = `고객명 : ${customerName}\n전화번호 : ${phoneNumber}\n방문 날짜 : ${visitDate}`;
      let smsUrl='';
      if (userAgent.search('android') > -1) {
        smsUrl = `sms:010-4059-9168?body=${sms}`
      } else if (userAgent.search('iphone') > -1 || userAgent.search('ipad') > -1) {
        smsUrl = `sms:010-4059-9168&body=${sms}`
      }
      console.log(smsUrl);
      window.open(smsUrl, '_blank');
    }

    console.log('고객명:', customerName);
    console.log('전화번호:', phoneNumber);
    console.log('방문 날짜:', visitDate);
    console.log('이용 약관 동의:', agreementChecked);
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px',
    textAlign: 'left',
  };

  const boxStyle = {
    border: '1px solid #ddd',
    padding: '16px',
    marginBottom: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2>예약 방문하기</h2>
      <div style={boxStyle}>
        <label style={labelStyle}>
          고객명 :&nbsp;
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
        <br />
        <label style={labelStyle}>
          전화번호 :&nbsp;
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label style={labelStyle}>
          방문 날짜 :&nbsp;
          <input
            type="date"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
          />
        </label>
      </div>

      <div style={boxStyle}>
        <p>개인정보수집 및 이용정보</p>
        <div style={boxStyle}>
          1. 수집하는 개인정보 항목
            <ul>
              <li>수집항목: 이름, 전화번호 등</li>
              <li>수집방법: 홈페이지 예약 방문</li>
            </ul>
            2. 개인 정보의 수집 및 이용목적
            <ul>
              <li>분양정보 및 분양상담 등 문의처리</li>
            </ul>
            3. 개인 정보의 보유 및 이용기한
            <ul>
              <li>개인정보 및 이용목적이 달성된 이후에는 해당 정보를 지체없이 파기합니다</li>
            </ul>
          
        </div>
      </div>

      <div style={boxStyle}>
        <label style={labelStyle}>
          <input
            type="checkbox"
            checked={agreementChecked}
            onChange={() => setAgreementChecked(!agreementChecked)}
          />
          이용 약관에 동의합니다.
        </label>
      </div>

      <button style={{ width: '100%' }} onClick={handleSubmit}>
        제출
      </button>
    </div>
  );
};

export default Apply;
