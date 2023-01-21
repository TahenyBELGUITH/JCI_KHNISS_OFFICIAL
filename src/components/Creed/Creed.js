import React from "react";
import "./Creed.css";

import Waves from "../../Images/Decor/waves.svg";
import WavesBtm from "../../Images/Decor/wavesBtm.svg";

export default function Creed() {
  return (
    <div className="creed-wrapper" id="creed">
      <img src={Waves} className="credo-wave" />
      <h1>
        🤍 Creed of <span className="creed-span"> JCI </span> 🤍
      </h1>
      <div>
        <p align="center">
          <span className="charte"> نحن نعتقد</span>
          <br />
          <span className="chartef">We Believe </span>
          <br />{" "}
          <span className="charte">
            أن الإيمان بالله يعطي للحياة معناها الحقيق
          </span>
          <br />
          <span className="chartef">
            That faith in God gives meaning and purpose to human life
          </span>
          <br />
          <span className="charte">أن التآخي البشري يفوقون سيادة الدول</span>
          <br />
          <span className="chartef">
            That the brotherhood of man transcends the sovereignty of nations
          </span>
          <br />{" "}
          <span className="charte">
            أن الاجتهاد وحرية الأفراد يضمنان العدالة الاجتماعية و الاقتصادية
          </span>
          <br />
          <span className="chartef">
            That economic justice can best be won by free men through free
            enterprise
          </span>{" "}
          <br />
          <span className="charte">
            أن قيادة الشعوب تعتمد القانون وترفض التعسف والحيف{" "}
          </span>
          <br />
          <span className="chartef">
            {" "}
            That government should be of laws rather than of men
          </span>
          <br></br>
          <span className="charte">
            أن الذات البشرية هي أهم المكاسب وأغناها{" "}
          </span>
          <br />
          <span className="chartef">
            That earth's great treasure lies in human personality
          </span>
          <br />
          <span className="charte">
            {" "}
            .أن خدمة الإنسان هي أنبل عمل في الحياة
          </span>
          <br />
          <span className="chartef">
            That service to humanity is the best work of life
          </span>
        </p>
      </div>
      <img src={WavesBtm} className="credo-wave-btm" />
    </div>
  );
}
