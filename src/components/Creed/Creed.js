import React from "react";
import "./Creed.css";

import Waves from "../../Images/Decor/waves.svg";
import WavesBtm from "../../Images/Decor/wavesBtm.svg";
import Creedo from "../../Images/creed/creed.svg";

export default function Creed() {
  return (
    <div className="creed-wrapper " id="creed">
      <img src={Waves} className="credo-wave" />
      <div className="intro-headings">
        <h2>Creed of</h2>
        <h1>JCI</h1>
      </div>
      <div className="creedo-flex">
        <img className="creedo-left" src={Creedo} />
        <div className="creedo-right">
          <p align="center">
            <span className="charte"> نحن نعتقد</span>
            <br />
            <span className="charte">
              أن الإيمان بالله يعطي للحياة معناها الحقيقي
            </span>
            <br />
            <span className="charte">أن التآخي البشري يفوق سيادة الدول</span>
            <br />
            <span className="charte">
              أن الاجتهاد وحرية الأفراد يضمنان العدالة الاجتماعية و الاقتصادية
            </span>
            <br />
            <span className="charte">
              أن قيادة الشعوب تعتمد القانون وترفض التعسف والحيف{" "}
            </span>
            <br />
            <span className="charte">
              أن الذات البشرية هي أهم المكاسب وأغناها{" "}
            </span>
            <br />

            <span className="charte">
              .أن خدمة الإنسان هي أنبل عمل في الحياة
            </span>
            <br />
          </p>
        </div>
      </div>
      <img src={WavesBtm} className="credo-wave-btm" />
    </div>
  );
}
