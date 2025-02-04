import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
      {gonderiler.map((gonderi, index) => {
        return (
          <div key={index}>
            {gonderi.id} - {gonderi.username} - {gonderi.gonderiBasligi}
          </div>
        );
      })}
    </div>
  );
};

export default Gonderiler;
